import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import unity from './unity.png';
import mysql from './mysql.png';

export const assets = {
    unity,
    mysql,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        id: 'pengaduan-masyarakat',
        title: 'Pengaduan Masyarakat',
        description: 'Portal layanan warga dengan alur pelaporan dan tindak lanjut yang rapi.',
        tech: ['Laravel', 'Bootstrap', 'MySQL'],
        category: 'web app',
        year: '2025',
        role: 'Full-stack developer',
        intro: 'A public complaint platform designed to make reporting and follow-up easier for citizens and administrators.',
        challenge: 'The main challenge was organizing a civic workflow that stays simple for users while still giving admins enough structure to review and respond efficiently.',
        outcome: 'The result is a cleaner reporting flow, clearer status visibility, and a dashboard-oriented experience that feels more dependable.',
        summaryStats: [
            { label: 'Focus', value: 'Reporting flow' },
            { label: 'Surface', value: 'Citizen portal' },
            { label: 'Role', value: 'Full-stack build' },
        ],
        caseStudy: {
            problem: 'Citizens need a straightforward way to report issues, while administrators need a structured process to review, categorize, and update the status of each report.',
            approach: 'I designed the experience around clarity first: simple reporting inputs for the public, status-aware records for admins, and a layout that keeps important actions visible without clutter.',
            highlights: [
                'Structured submission flow for public complaints',
                'Admin-oriented dashboard for status review and response handling',
                'Clear visual hierarchy for records, categories, and follow-up states',
            ],
            process: [
                'Mapped the reporting journey from first submission to status update',
                'Separated public and admin needs so both interfaces stayed focused',
                'Built reusable UI patterns for lists, detail states, and quick review',
            ],
            learnings: [
                'Operational software feels stronger when each screen supports a single clear decision',
                'Status design matters a lot in civic or service-based workflows',
            ],
        },
        bgImage: '/pengaduan.png',
        link: "#",
    },
    {
        id: 'unfulfilled-promises',
        title: 'Unfulfilled Promises',
        description: 'Eksperimen game naratif yang fokus pada atmosfer, pacing, dan interaksi.',
        tech: ['Unity', 'C#', 'Game Design'],
        category: 'game',
        year: '2025',
        role: 'Gameplay and interaction builder',
        intro: 'A narrative game prototype built to explore mood, movement, and emotional pacing through environment and interaction.',
        challenge: 'Balancing atmosphere and responsiveness was important so the game could feel expressive without becoming visually noisy or mechanically confusing.',
        outcome: 'The prototype became a strong showcase for interactive storytelling and for how I approach motion and player feedback.',
        summaryStats: [
            { label: 'Focus', value: 'Narrative mood' },
            { label: 'Engine', value: 'Unity' },
            { label: 'Role', value: 'Interaction design' },
        ],
        caseStudy: {
            problem: 'Narrative prototypes often look interesting but feel weak in interaction. I wanted this project to carry emotion through both atmosphere and player control.',
            approach: 'The build centered on environmental pacing, interaction timing, and readable feedback so the player experience could stay expressive without becoming distracting.',
            highlights: [
                'Mood-first interactive environment',
                'Player feedback tuned around pacing and clarity',
                'Visual and mechanical choices shaped to support tone',
            ],
            process: [
                'Defined the emotional tone before finalizing interaction behavior',
                'Adjusted movement and response timing to protect immersion',
                'Used prototype iteration to balance feel, readability, and atmosphere',
            ],
            learnings: [
                'Interactive storytelling gets stronger when motion supports emotion instead of competing with it',
                'Small feedback details can completely change how a scene feels to play',
            ],
        },
        bgImage: '/game.png',
        link: "#",
    },
    {
        id: 'rekap-terlambat',
        title: 'Rekap-Terlambat',
        description: 'Dashboard internal untuk memantau data keterlambatan dengan cepat.',
        tech: ['Laravel', 'MySQL', 'Bootstrap'],
        category: 'dashboard',
        year: '2024',
        role: 'Dashboard developer',
        intro: 'An internal dashboard to help teams track lateness records and review summary data without digging through spreadsheets.',
        challenge: 'The project needed to surface operational data quickly while keeping the interface lightweight enough for repeated daily use.',
        outcome: 'It improved scanability, reduced friction around routine checks, and gave the workflow a more structured feel.',
        summaryStats: [
            { label: 'Focus', value: 'Internal dashboard' },
            { label: 'Surface', value: 'Team operations' },
            { label: 'Role', value: 'Data UI build' },
        ],
        caseStudy: {
            problem: 'Teams needed a faster way to review lateness data without relying on disconnected manual records or hard-to-scan tables.',
            approach: 'I focused on making recurring review tasks feel lighter through a compact dashboard layout, clearer groupings, and information density that still reads comfortably.',
            highlights: [
                'Quick-scan dashboard structure for daily checks',
                'Cleaner grouping for repetitive attendance-related data',
                'A layout built around practicality over decoration',
            ],
            process: [
                'Identified the most repeated admin actions and surfaced them first',
                'Reduced visual noise in lists and summary areas',
                'Used simple dashboard patterns that stay efficient over repeated use',
            ],
            learnings: [
                'Admin tools benefit more from clarity and rhythm than heavy visual styling',
                'Small layout improvements can save a lot of effort in repeated workflows',
            ],
        },
        bgImage: '/rekap-terlambat.png',
        link: "#",
    },
    {
        id: 'apotek-app',
        title: 'Apotek-app',
        description: 'Aplikasi operasional apotek dengan fokus ke workflow stok dan transaksi.',
        tech: ['Laravel', 'MySQL', 'Tailwind CSS'],
        category: 'web app',
        year: '2025',
        role: 'Product-focused developer',
        intro: 'A pharmacy operations app centered around inventory movement, transaction flow, and day-to-day usability.',
        challenge: 'The tricky part was keeping operational screens clear while still supporting practical actions like stock handling and record updates.',
        outcome: 'The application became a stronger example of utility-first UI where workflow clarity matters more than decoration.',
        summaryStats: [
            { label: 'Focus', value: 'Inventory flow' },
            { label: 'Surface', value: 'Operations app' },
            { label: 'Role', value: 'Workflow design' },
        ],
        caseStudy: {
            problem: 'Pharmacy workflows involve stock movement, transaction handling, and routine updates that can become messy if the interface is too generic.',
            approach: 'I shaped the app around operational tasks, giving important flows like inventory and transaction handling more structure and clearer action paths.',
            highlights: [
                'Workflow-oriented UI for stock and transaction handling',
                'Tailwind-based styling for a cleaner modern product feel',
                'Utility-first layout choices to support speed and consistency',
            ],
            process: [
                'Prioritized practical actions over decorative layout patterns',
                'Kept forms and data views consistent to reduce mental switching',
                'Used simple visual treatment so operational content stayed dominant',
            ],
            learnings: [
                'The best product feel for operations software often comes from discipline, not complexity',
                'Consistency across forms and tables improves trust quickly',
            ],
        },
        link: "#",
        bgImage: '/apotek.png',
    },
    {
        id: 'portfolio-1',
        title: 'Portfolio 1',
        description: 'Versi awal personal site yang menekankan layout bersih dan presentasi karya.',
        tech: ['HTML', 'CSS'],
        category: 'landing page',
        year: '2024',
        role: 'Designer and frontend builder',
        intro: 'An earlier portfolio version focused on simple presentation, readable sections, and a personal visual identity.',
        challenge: 'The goal was to make an early-stage portfolio feel polished enough to support project presentation with minimal tooling.',
        outcome: 'It served as a useful foundation and made later iterations easier to evolve into something more product-like.',
        summaryStats: [
            { label: 'Focus', value: 'Personal branding' },
            { label: 'Surface', value: 'Landing page' },
            { label: 'Role', value: 'UI exploration' },
        ],
        caseStudy: {
            problem: 'As an early portfolio, the site needed to introduce my work clearly without relying on a complex stack or heavy interaction.',
            approach: 'I focused on clean sectioning, visual balance, and straightforward project presentation so the page could still feel intentional with a lightweight setup.',
            highlights: [
                'Simple structure for quick self-presentation',
                'Readable project grouping with minimal visual overhead',
                'A foundation that later evolved into this newer portfolio direction',
            ],
            process: [
                'Kept the stack intentionally simple to focus on layout fundamentals',
                'Explored spacing, section rhythm, and presentation hierarchy',
                'Used the project as a baseline for future portfolio upgrades',
            ],
            learnings: [
                'A simple site can still feel polished when hierarchy is clear',
                'Early portfolio work is valuable because it reveals what to improve next',
            ],
        },
        link: "https://nerolurien.github.io/portofolio-rafid/",
        bgImage: '/porto.png',
    },
    {
        id: 'presensi',
        title: 'Presensi',
        description: 'Sistem presensi sederhana untuk membantu pencatatan kehadiran lebih efisien.',
        tech: ['CodeIgniter', 'Bootstrap'],
        category: 'dashboard',
        year: '2024',
        role: 'App developer',
        intro: 'A lightweight attendance system intended to simplify tracking and reduce manual record friction.',
        challenge: 'The interface needed to be straightforward for routine use and reliable enough for repeated daily data entry.',
        outcome: 'The result is a practical internal tool that highlights my approach to simple admin-focused product design.',
        summaryStats: [
            { label: 'Focus', value: 'Attendance records' },
            { label: 'Surface', value: 'Admin tool' },
            { label: 'Role', value: 'System builder' },
        ],
        caseStudy: {
            problem: 'Attendance tracking becomes inefficient when staff have to work through repetitive manual input or unclear admin screens.',
            approach: 'I designed the system to reduce friction in daily record entry, with a straightforward flow and interface choices that stay easy to understand under repetition.',
            highlights: [
                'Simple attendance workflow for repetitive daily tasks',
                'Admin-friendly UI that keeps common actions visible',
                'Lightweight implementation focused on reliability and ease of use',
            ],
            process: [
                'Mapped the simplest repeatable flow for attendance entry',
                'Reduced unnecessary visual complexity in forms and tables',
                'Kept the overall product shape practical for everyday use',
            ],
            learnings: [
                'Repeat-use interfaces need low-friction patterns more than visual novelty',
                'Practical internal tools can still feel polished when interaction is considered',
            ],
        },
        link: "#",
        bgImage: '/presensi.png',
    },
    {
        id: 'website-course',
        title: 'Website Course',
        description: 'Website course interaktif dengan struktur konten yang ringan dan cepat.',
        tech: ['React', 'Vite'],
        category: 'frontend',
        year: '2025',
        role: 'Frontend developer',
        intro: 'A lightweight learning platform interface focused on quick navigation, content hierarchy, and accessible interaction.',
        challenge: 'The challenge was making the experience feel modern and energetic while keeping the UI easy to understand.',
        outcome: 'It became a clean frontend showcase with good rhythm, quick rendering, and stronger visual pacing.',
        summaryStats: [
            { label: 'Focus', value: 'Frontend polish' },
            { label: 'Surface', value: 'Learning platform' },
            { label: 'Role', value: 'React interface' },
        ],
        caseStudy: {
            problem: 'Course platforms need to present a lot of content without feeling dense or tiring to navigate.',
            approach: 'I used lightweight frontend patterns, clear content grouping, and fast visual rhythm to make the learning interface feel approachable and modern.',
            highlights: [
                'Fast React-based interface built with Vite',
                'Content layout designed for easier navigation and scanning',
                'A clean modern style with lightweight interaction patterns',
            ],
            process: [
                'Focused first on structure and content readability',
                'Used component-based layout to keep the interface modular',
                'Adjusted spacing and hierarchy until the flow felt lighter',
            ],
            learnings: [
                'Education interfaces work best when the user always knows where to go next',
                'Frontend polish is often a result of content rhythm, not just animation',
            ],
        },
        link: "https://website-course-nine.vercel.app/",
        bgImage: '/course.png',
    },
    {
        id: 'youtube-clone',
        title: 'Youtube-Clone',
        description: 'Clone UI streaming video untuk eksplorasi komponen, pencarian, dan state.',
        tech: ['React', 'Vite'],
        category: 'frontend',
        year: '2025',
        role: 'Frontend builder',
        intro: 'A YouTube-inspired frontend built to explore component systems, layout recreation, and interaction states.',
        challenge: 'The project required careful component composition so familiar UI patterns still felt smooth and coherent.',
        outcome: 'It helped sharpen my frontend structure work and gave me a stronger playground for reusable UI patterns.',
        summaryStats: [
            { label: 'Focus', value: 'Component system' },
            { label: 'Surface', value: 'Media UI clone' },
            { label: 'Role', value: 'Frontend rebuild' },
        ],
        caseStudy: {
            problem: 'Recreating a familiar streaming-style interface is useful because it tests layout precision, state handling, and component consistency all at once.',
            approach: 'I treated the project as a frontend systems exercise, focusing on reusable components, familiar content patterns, and a browsing experience that feels stable.',
            highlights: [
                'Component-driven UI recreation inspired by YouTube',
                'Layout and state patterns designed for consistency',
                'A strong practice project for frontend structure and interaction polish',
            ],
            process: [
                'Broke the interface into reusable layout and content modules',
                'Used familiar browsing patterns to test consistency under repetition',
                'Improved spacing, card treatment, and component rhythm across views',
            ],
            learnings: [
                'Cloning familiar interfaces is a great way to sharpen component discipline',
                'Consistency is what makes a dense media UI feel usable instead of chaotic',
            ],
        },
        link: "https://youtube-clone-taupe-six.vercel.app/",
        bgImage: '/youtube.png',
    },
]

// export const serviceData = [
//     { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
//     { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
//     { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
//     { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
// ]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Stack', description: 'Next.js, React, Laravel, PHP, Tailwind CSS, Unity, and C# for interactive products.' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Learning Path', description: 'PPLG student at SMK Wikrama Bogor, building real products while sharpening engineering fundamentals.' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Project Focus', description: 'Web apps, dashboards, and game prototypes that balance usability, polish, and performance.' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.git, assets.unity, assets.mysql
];

export const highlightStats = [
    { value: '8+', label: 'Projects shipped' },
    { value: '3', label: 'Main specialties' },
    { value: '100%', label: 'Curious builder energy' }
];

export const serviceHighlights = [
    {
        title: 'Web experiences',
        description: 'Landing pages and product sites that feel clean, fast, and intentionally crafted.',
    },
    {
        title: 'Operational apps',
        description: 'Internal tools and dashboards that help people work faster with less friction.',
    },
    {
        title: 'Interactive builds',
        description: 'Game and motion-driven experiments that make interfaces feel alive.',
    },
];
