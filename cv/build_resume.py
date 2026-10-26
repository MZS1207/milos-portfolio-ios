"""Rebuild the public two-page CV. Requires reportlab; pass --output to override."""
from pathlib import Path
import argparse
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parents[1]
args = argparse.ArgumentParser()
args.add_argument('--output', default=str(ROOT / 'MilosStevanovicResume.pdf'))
args.add_argument('--variant', choices=['product', 'platform'], default='product')
options = args.parse_args()
output = options.output
font_dirs = [Path('/System/Library/Fonts/Supplemental'), Path('/usr/share/fonts/truetype/liberation2')]
for d in font_dirs:
    regular = d / ('Arial.ttf' if 'System' in str(d) else 'LiberationSans-Regular.ttf')
    bold = d / ('Arial Bold.ttf' if 'System' in str(d) else 'LiberationSans-Bold.ttf')
    if regular.exists() and bold.exists():
        pdfmetrics.registerFont(TTFont('CV',str(regular)))
        pdfmetrics.registerFont(TTFont('CVBold',str(bold)))
        break
else: raise RuntimeError('Install Arial or Liberation Sans fonts.')
pdfmetrics.registerFontFamily('CV',normal='CV',bold='CVBold',italic='CV',boldItalic='CVBold')
ink=colors.HexColor('#182B3A'); blue=colors.HexColor('#1764AC'); muted=colors.HexColor('#516575')
styles={
 'body':ParagraphStyle('body',fontName='CV',fontSize=9.4,leading=12.3,textColor=ink,spaceAfter=3),
 'small':ParagraphStyle('small',fontName='CV',fontSize=8.4,leading=11.8,textColor=muted,spaceAfter=3),
 'section':ParagraphStyle('section',fontName='CVBold',fontSize=10,leading=14,textColor=blue,spaceBefore=9,spaceAfter=6),
 'title':ParagraphStyle('title',fontName='CVBold',fontSize=11,leading=14,textColor=ink,spaceAfter=2),
 'name':ParagraphStyle('name',fontName='CVBold',fontSize=26,leading=31,textColor=ink,spaceAfter=5),
 'role':ParagraphStyle('role',fontName='CVBold',fontSize=12,leading=16,textColor=blue,spaceAfter=5),
 'bullet':ParagraphStyle('bullet',fontName='CV',fontSize=9.4,leading=12.3,textColor=ink,leftIndent=10,firstLineIndent=-8,spaceAfter=3),
}
flow=[]
def p(text,style='body'): return Paragraph(text,styles[style])
def add(text,style='body'): flow.append(p(text,style))
def section(text): add(text.upper(),'section')
def role(title,company,dates,bullets,extra=None):
    block=[p(title,'title'),p(f'<b>{company}</b> | {dates}','small')]
    if extra:block.append(p(extra,'small'))
    block += [p('- '+b,'bullet') for b in bullets]
    block.append(Spacer(1,3));flow.append(KeepTogether(block))
def project(title,context,text,tech):
    flow.append(KeepTogether([p(title,'title'),p(context,'small'),p(text),p(tech,'small'),Spacer(1,3)]))
def compact_project(title,text,tech):
    flow.append(KeepTogether([p(title,'title'),p(text),p(tech,'small'),Spacer(1,4)]))

headlines = {
 'product': 'Senior Software Engineer | iOS, macOS &amp; Web',
 'platform': 'Senior Software Engineer | iOS &amp; macOS'
}

add('Miloš Stevanović','name')
add(headlines[options.variant],'role')
add('<b>Open to full-time and contract opportunities</b> | Belgrade, Serbia','small')
add('Open to relocation and remote work | Employer visa / work permit sponsorship required for relocation','small')
add('+381 60 316 1917 | <link href="mailto:milosstevanovic12@yahoo.com" color="#1764AC">milosstevanovic12@yahoo.com</link>','small')
add('<link href="https://www.linkedin.com/in/milo%C5%A1-stevanovi%C4%87-a8b932ba/" color="#1764AC">LinkedIn</link>  |  <link href="https://mzs1207.github.io/milos-portfolio-ios/" color="#1764AC">Portfolio &amp; app gallery</link>  |  <link href="https://github.com/MZS1207" color="#1764AC">GitHub</link>  |  <link href="https://apps.apple.com/rs/developer/milos-stevanovic/id6811582503" color="#1764AC">App Store developer</link>','small')
section('Profile')
profiles = {
 'product': 'Senior software engineer with 10+ years in native iOS delivery and 25+ shipped apps across insurance, healthcare, fintech, telecom and consumer products. Independent work spans native macOS products, TypeScript web platforms and games. Owns architecture, implementation, integrations and release preparation, using AI-assisted workflows with hands-on review. Former Senior Engineer at Endava, with mentoring and technical interviewing responsibilities.',
 'platform': 'Senior software engineer with 10+ years in native iOS delivery, maintainable architecture and legacy-code recovery. Builds with Swift, SwiftUI, UIKit and Swift Concurrency, with independent work extending into native macOS apps, games and web platforms. Experience includes stabilising inherited apps, improving responsiveness and memory use, mentoring and technical interviews. Focused on Apple-platform architecture, reliability and developer workflows.'
}
add(profiles[options.variant])
section('Core expertise')
expertise = [
 ('Apple platforms','Swift, Objective-C, SwiftUI, UIKit, AppKit, SwiftData, StoreKit 2'),
 ('Architecture &amp; data','MVVM / Clean Architecture, Swift Concurrency, Combine, Core Data, SQLite, REST / GraphQL'),
 ('Web &amp; APIs','TypeScript, React, Next.js, Node.js, NestJS, PostgreSQL; React Native / Expo'),
 ('Games','SpriteKit, gameplay systems, deterministic simulation, local-network co-op'),
 ('Quality &amp; delivery','XCTest, unit/UI tests, Instruments, GitHub Actions, Fastlane, TestFlight, App Store releases'),
 ('AI &amp; leadership','Coding-agent orchestration, hands-on review, mentoring, technical interviews')
]
if options.variant == 'platform':
    expertise = [
     ('Apple platforms','Swift, Objective-C, SwiftUI, UIKit, AppKit, Auto Layout, SpriteKit'),
     ('Architecture','MVVM / Clean Architecture, VIPER/VIP, Swift Concurrency, Combine, RxSwift'),
     ('Data &amp; integration','REST, GraphQL, WebSocket, Core Data, SwiftData, SQLite; Core Bluetooth, HealthKit'),
     ('Quality &amp; delivery','XCTest, unit/UI tests, Instruments, GitHub Actions, Fastlane, TestFlight, SPM'),
     ('Product breadth','Native macOS tools and games; TypeScript, React / Next.js and Node.js platforms'),
     ('AI &amp; leadership','Coding-agent orchestration, hands-on review, mentoring, technical interviews')
    ]
for label, value in expertise:
 add(f'<b>{label}:</b> {value}')
section('Professional experience')
role('Independent Senior Software Engineer','Self-employed','Sep 2026 - Present',[
 'Builds native Apple apps, web platforms and games, from architecture and API integration to release preparation.',
 'Uses coding agents with hands-on review and build/test validation; available for full-time and contract work.'
])
role('Senior iOS Developer (Senior Engineer)','Endava','Jan 2022 - Aug 2026',[
 'Led iOS development for insurance and telecom clients, owning application lifecycles from concept to production with SwiftUI, UIKit, Combine and MVVM / Clean Architecture.',
 'Worked on Ding payment and account flows and the DXP insurance platform; see selected client projects.',
 'As Career Coach, mentored iOS developers through growth plans and 1:1 sessions, conducted technical interviews and contributed to coding standards.'
], 'Additional roles: AI Champion, Dec 2025 - Aug 2026; Career Coach, Mar 2024 - Aug 2026.')
role('Senior iOS Developer','Darwin Digital','Nov 2019 - Jan 2022',[
 'Built healthcare apps, including AI-supported pain-detection applications, with secure data handling in HIPAA-sensitive environments.',
 'Stabilised inherited apps and improved responsiveness and memory use with research, data-science and backend teams.'
])
role('iOS Developer (Junior to Mid-level)','Comit International','Jul 2015 - Nov 2019',[
 'Developed social, logistics, on-demand and betting apps with Objective-C, Swift, UIKit and Firebase; maintained both modern and inherited codebases.'
])
section('Education & languages')
add('<b>VPTS, Užice - Information Technology:</b> Specialist of Applied Studies, 2013 - 2014 (GPA 9.63/10); Undergraduate Applied Studies, 2008 - 2013.','small')
add('<b>Languages:</b> Serbian (native) · English (full professional proficiency)','small')
flow.append(PageBreak())
add('Selected work','name')
add('Native apps · Web platforms · Games · Product delivery','role')
add('Screenshots and project details: <link href="https://mzs1207.github.io/milos-portfolio-ios/#gallery" color="#1764AC">mzs1207.github.io/milos-portfolio-ios</link>','small')
section('Client projects')
compact_project('DXP - Insurance Platform | Endava, 2024 - Aug 2026','Contributed to mobile and cross-platform implementation, with a consistent experience across devices.','Swift · SwiftUI · Combine · CI/CD')
compact_project('Ding - Global Mobile Recharge | Endava, 2023 - 2024','Worked on secure payments and account flows for the iOS app of a platform serving 150+ countries.','Swift · Stripe SDK · Core Data')
compact_project('Schüco SmartTouch | Freelance, 2024 - 2025','Revived an inherited smart-door app: Bluetooth unlock, Touch ID, remote access and live door status.','Swift · Core Bluetooth · Push Notifications')
section('Selected independent engineering')
compact_project('Translato - Native macOS Translation Workspace','Built bilingual editing, local translation memory, document previews and OCR. <link href="https://apps.apple.com/rs/app/translato/id6815766459?mt=12" color="#1764AC">Published on the Mac App Store</link>.','SwiftUI · SQLite / GRDB · PDFKit · Vision')
compact_project('Pet Buddy &amp; NoteVita - Native iPhone / iPad Products','Pet-care timelines, reminders and PDF reports; offline family health records, encrypted backup/import and purchase flows.','SwiftUI · SwiftData · Swift Concurrency · CryptoKit · StoreKit 2')
compact_project('Sjaj - Web, Mobile &amp; API Platform','Developing a cleaning-business platform: manager dashboard, customer booking, job checklists and shared web/mobile contracts. Portfolio shows seeded demo data.','TypeScript · Next.js · React Native / Expo · NestJS · PostgreSQL')
compact_project('Wellness Spot - Responsive Customer Workspace','Built customer views for measurements, progress, nutrition plans and package status, with desktop and phone navigation. Portfolio uses synthetic data.','TypeScript · React · Next.js · Responsive Web')
compact_project('Touchline Atlas - Football Management Games','Built iPhone/iPad and native macOS experiences for career progression, squad management, tactics and saved games.','Swift · SwiftUI · AppKit · Simulation · Local Persistence')
compact_project('Cute Bubble Chase, Neon Rebels &amp; BugCorpGame','Arcade gameplay and power-ups; solo/local-network co-op shooter; deterministic card-duel systems. Independent game projects at different release stages.','Swift · SwiftUI · SpriteKit · Network.framework · Gameplay Systems')
section('Engineering leadership & workflows')
add('Former Endava AI Champion and Career Coach. Built The Hive, a personal coding-agent workflow with shared schema contracts and automated build/test checks, supported by hands-on engineering review.','small')

def footer(canvas,doc):
    canvas.setStrokeColor(colors.HexColor('#D9E3EB'));canvas.line(40,35,A4[0]-40,35)
    canvas.setFont('CV',8);canvas.setFillColor(muted)
    canvas.drawString(40,23,'Miloš Stevanović | Senior Software Engineer | Open to work')
    canvas.drawRightString(A4[0]-40,23,str(doc.page))
Path(output).parent.mkdir(parents=True,exist_ok=True)
doc=SimpleDocTemplate(output,pagesize=A4,rightMargin=40,leftMargin=40,topMargin=35,bottomMargin=45,title='Miloš Stevanović - Senior Software Engineer - ' + options.variant.title(),author='Miloš Stevanović')
doc.build(flow,onFirstPage=footer,onLaterPages=footer)
print(output)
