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

add('Miloš Stevanović','name')
add('Senior iOS Engineer | Swift · SwiftUI · UIKit','role')
add('<b>Open to full-time and contract opportunities</b> | Belgrade, Serbia','small')
add('Open to relocation and remote work | Employer visa / work permit sponsorship required for relocation','small')
add('+381 60 316 1917 | <link href="mailto:milosstevanovic12@yahoo.com" color="#1764AC">milosstevanovic12@yahoo.com</link>','small')
add('<link href="https://www.linkedin.com/in/milo%C5%A1-stevanovi%C4%87-a8b932ba/" color="#1764AC">LinkedIn</link>  |  <link href="https://mzs1207.github.io/milos-portfolio-ios/" color="#1764AC">Portfolio &amp; app gallery</link>  |  <link href="https://github.com/MZS1207" color="#1764AC">GitHub</link>','small')
section('Profile')
profiles = {
 'product': 'Senior iOS engineer with 10+ years of experience and 25+ shipped apps across insurance, healthcare, fintech, telecom and consumer products. Delivers native applications with Swift, SwiftUI and UIKit, from concept to production. Experience includes payment and account flows, healthcare applications and recovery of inherited codebases. Former Senior Engineer at Endava, with mentoring and technical interviewing responsibilities.',
 'platform': 'Senior iOS engineer with 10+ years of experience in native app delivery, maintainable architecture and legacy-code recovery. Works with Swift, SwiftUI, UIKit, Combine and MVVM / Clean Architecture. Experience includes stabilising inherited apps, improving responsiveness and memory use, and supporting engineering standards through mentoring and code review. Interested in iOS platform roles focused on architecture, reliability and developer workflows.'
}
add(profiles[options.variant])
section('Core expertise')
for label, value in [
 ('Native iOS','Swift, Objective-C, SwiftUI, UIKit, Auto Layout, SpriteKit, Core Animation'),
 ('Architecture','MVVM, Clean Architecture, VIPER/VIP, Swift Concurrency, Combine, RxSwift'),
 ('Data &amp; integration','REST, GraphQL, WebSocket, Core Data, Firebase, SQLite; MapKit, Core Bluetooth, HealthKit'),
 ('Quality &amp; delivery','XCTest, unit/UI tests, Instruments, Git, Fastlane, GitHub Actions, TestFlight, SPM'),
 ('AI &amp; teamwork','Claude Code, coding-agent orchestration, AI-assisted review, mentoring, technical interviews')]:
 add(f'<b>{label}:</b> {value}')
section('Professional experience')
role('Freelance Senior iOS Developer','Self-employed','Sep 2026 - Present',[
 'Available for native iOS product development, architecture, legacy-app improvements and performance work.',
 'Open to full-time employment and contract engagements, remote or with relocation.'
])
role('Senior iOS Developer (Senior Engineer)','Endava','Jan 2022 - Aug 2026',[
 'Led iOS development for insurance and telecom clients, owning application lifecycles from concept to production with SwiftUI, UIKit, Combine and MVVM / Clean Architecture.',
 'Worked on Ding payment and account flows and the DXP insurance platform; see selected client projects.',
 'As Career Coach, mentored iOS developers through growth plans and 1:1 sessions, conducted technical interviews and contributed to coding standards.'
], 'Additional roles: AI Champion, Dec 2025 - Aug 2026; Career Coach, Mar 2024 - Aug 2026.')
role('Senior iOS Developer','Darwin Digital','Nov 2019 - Jan 2022',[
 'Built healthcare apps, including AI-supported pain-detection applications, with secure data handling in HIPAA-sensitive environments.',
 'Refactored inherited codebases and improved stability, responsiveness and memory use in collaboration with research, data-science and backend teams.'
])
role('iOS Developer (Junior to Mid-level)','Comit International','Jul 2015 - Nov 2019',[
 'Developed social, logistics, on-demand and betting apps with Objective-C, Swift, UIKit and Firebase; maintained both modern and inherited codebases.'
])
section('Education & languages')
add('<b>VPTS, Užice - Information Technology:</b> Specialist of Applied Studies, 2013 - 2014 (GPA 9.63/10); Undergraduate Applied Studies, 2008 - 2013.','small')
add('<b>Languages:</b> Serbian (native) · English (full professional proficiency)','small')
flow.append(PageBreak())
add('Selected work','name')
add('Client delivery &amp; iOS engineering','role')
add('Screenshots and project details: <link href="https://mzs1207.github.io/milos-portfolio-ios/#gallery" color="#1764AC">mzs1207.github.io/milos-portfolio-ios</link>','small')
section('Client projects')
project('DXP - Hybrid Insurance Platform','Endava | 2024 - Aug 2026','Contributed to mobile and cross-platform implementation for an insurance platform, with a focus on a consistent experience across devices.','Swift · SwiftUI · Combine · CI/CD')
project('Ding - Global Mobile Recharge','Endava | 2023 - 2024','Worked on the iOS app for a platform serving 150+ countries, including secure payments, user accounts and evolving business requirements.','Swift · Stripe SDK · Core Data')
project('Schüco SmartTouch - Smart Door Control','Freelance project | 2024 - 2025','Revived and stabilised an inherited smart-door application with Bluetooth unlock, Touch ID, remote access and live door status.','Swift · Core Bluetooth · Touch ID · Push Notifications')
section('Selected independent engineering')
project('BeamBike - E-Bike Sharing MVP','Independent multi-platform project','Built a mobility MVP spanning native iOS and Android apps, a backend, admin dashboard and IoT simulator, with geofenced maps and realtime fleet updates.','SwiftUI · Kotlin · Node.js · PostgreSQL · Redis · WebSocket')
project('Bug Corp Duel - Strategy Card Game','Independent iOS project','Built a deterministic game engine with a 132-card library, local AI duels and peer-to-peer multiplayer architecture.','SwiftUI · SpriteKit · MultipeerConnectivity · Swift Concurrency')
section('Engineering leadership & workflows')
add('At Endava, supported AI adoption through developer enablement, code review, project integration and workflow automation. Mentored iOS developers and conducted technical interviews.')
add('Built The Hive, a personal coding-agent workflow with shared schema contracts, code generation and automated build/test checks. Uses AI-assisted development with hands-on engineering review.')
section('Additional portfolio work')
add('Bubble Chase (CatChase), a SpriteKit arcade game with physics, power-ups and daily challenges. More applications and games, with screenshots, are available in the portfolio.','small')

def footer(canvas,doc):
    canvas.setStrokeColor(colors.HexColor('#D9E3EB'));canvas.line(40,35,A4[0]-40,35)
    canvas.setFont('CV',8);canvas.setFillColor(muted)
    canvas.drawString(40,23,'Miloš Stevanović | Senior iOS Developer | Open to work')
    canvas.drawRightString(A4[0]-40,23,str(doc.page))
Path(output).parent.mkdir(parents=True,exist_ok=True)
doc=SimpleDocTemplate(output,pagesize=A4,rightMargin=40,leftMargin=40,topMargin=35,bottomMargin=45,title='Miloš Stevanović - Senior iOS Engineer - ' + options.variant.title(),author='Miloš Stevanović')
doc.build(flow,onFirstPage=footer,onLaterPages=footer)
print(output)
