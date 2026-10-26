import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const context = { window: {} };
for (const name of ['gallery-data.js', 'content-data.js']) {
    vm.runInNewContext(readFileSync(new URL(name, root), 'utf8'), context, { filename: name });
}
const items = context.window.GALLERY_ITEMS;
const projects = Object.values(context.window.CONTENT_DATA.projects);
assert(Array.isArray(items) && items.length > 0, 'Gallery must contain complete albums');
const albums = new Map();
const sources = new Set();
for (const item of items) {
    assert.equal(item.type, 'image', 'Albums contain screenshots');
    assert(typeof item.project === 'string' && item.project.trim(), 'Missing project');
    assert(projects.some(project => project.gallery === item.project), `Unknown project: ${item.project}`);
    assert(typeof item.caption === 'string' && item.caption.trim(), `Missing caption: ${item.src}`);
    assert(Number.isInteger(item.width) && item.width > 0 && Number.isInteger(item.height) && item.height > 0, `Missing dimensions: ${item.src}`);
    assert(/^gallery\/[^/]+\.(jpg|png|webp)$/.test(item.src), `Invalid screenshot path: ${item.src}`);
    assert(existsSync(fileURLToPath(new URL(item.src, root))), `Missing image: ${item.src}`);
    assert(!sources.has(item.src), `Repeated screenshot: ${item.src}`);
    sources.add(item.src);
    albums.set(item.project, (albums.get(item.project) || 0) + 1);
}
for (const [project, count] of albums) {
    const metadata = projects.find(entry => entry.gallery === project);
    const expected = metadata.gallerySize ?? 5;
    assert(Number.isInteger(expected) && expected >= 4 && expected <= 5, `Invalid approved album size: ${project}`);
    assert.equal(count, expected, `${project} must have exactly ${expected} distinct screenshots (has ${count})`);
}
const exceptions = projects.filter(project => project.gallerySize && project.gallerySize !== 5);
console.log(`Gallery valid: ${albums.size} albums, ${items.length} screenshots; default 5 per album, ${exceptions.length} approved exception(s).`);
