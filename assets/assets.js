import user_image from './user-image.jpg';
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
import profile_img from './profile-img.jpg';
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
import next_js from './next_js.png';
import go from './go.png';
import spring from './spring.png';

export const assets = {
    spring,
    go,
    next_js,
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
        id: 'taskly',
        title: 'Taskly',
        description: 'Smart AI-powered team and project management platform with an integrated Kanban board.',
        description_id: 'Platform manajemen tim dan proyek cerdas bertenaga AI dengan Kanban board terintegrasi.',
        tech: ['Next.js', 'React', 'Tailwind CSS', 'AI Integration'],
        category: 'web app',
        year: '2026',
        role: 'Full-stack developer',
        role_id: 'Full-stack developer',
        intro: 'An AI-powered task management platform designed to streamline team collaboration, Kanban workflows, and smart task delegation via natural language prompts.',
        intro_id: 'Platform manajemen tugas berbasis AI yang dirancang untuk mempermudah kolaborasi tim, alur kerja Kanban, dan delegasi tugas cerdas melalui prompt bahasa alami.',
        challenge: 'Integrating AI capabilities for task delegation and automation while keeping the Kanban board fast, intuitive, and responsive.',
        challenge_id: 'Mengintegrasikan kemampuan AI untuk delegasi dan otomatisasi tugas sambil menjaga alur kerja Kanban tetap cepat, intuitif, dan responsif.',
        outcome: 'Delivered a modern project management experience where teams organize tasks, monitor sprints, and collaborate faster with an intelligent AI assistant.',
        outcome_id: 'Menghadirkan pengalaman manajemen proyek modern di mana tim dapat mengorganisir tugas, memantau sprint, dan berkolaborasi lebih cepat dengan bantuan asisten AI cerdas.',
        summaryStats: [
            { label: 'Focus', value: 'AI Task Management' },
            { label: 'Surface', value: 'Team workspace' },
            { label: 'Role', value: 'Full-stack build' },
        ],
        summaryStats_id: [
            { label: 'Fokus', value: 'Manajemen Tugas AI' },
            { label: 'Tipe', value: 'Ruang Kerja Tim' },
            { label: 'Peran', value: 'Pengembangan Full-stack' },
        ],
        caseStudy: {
            problem: 'Traditional task management often wastes time on repetitive ticket creation, manual reordering, and slow delegation between team members.',
            problem_id: 'Manajemen tugas tradisional sering kali memakan waktu dalam pengorganisasian manual, pembuatan tiket berulang, dan delegasi pekerjaan antar anggota tim.',
            approach: 'Designed Taskly with a modern interface combining drag-and-drop Kanban simplicity with an AI assistant that parses natural language instructions into actionable task workflows.',
            approach_id: 'Merancang Taskly dengan antarmuka modern yang menggabungkan kemudahan drag-and-drop Kanban dengan kemampuan asisten AI untuk memproses perintah teks menjadi aksi tugas otomatis.',
            outcome: 'Delivered a modern project management experience where teams organize tasks, monitor sprints, and collaborate faster with an intelligent AI assistant.',
            outcome_id: 'Menghadirkan pengalaman manajemen proyek modern di mana tim dapat mengorganisir tugas, memantau sprint, dan berkolaborasi lebih cepat dengan bantuan asisten AI cerdas.',
            highlights: [
                'AI-powered task management & prompt-based task delegation',
                'Interactive Kanban board with flexible status updates',
                'Modern dark-mode UI optimized for team productivity',
            ],
            highlights_id: [
                'Manajemen tugas berbasis AI & delegasi tugas melalui perintah prompt',
                'Papan Kanban interaktif dengan pembaruan status yang fleksibel',
                'Antarmuka modern bertema gelap yang dioptimalkan untuk produktivitas tim',
            ],
            process: [
                'Architected workflow pipeline connecting AI prompt interpretation with Kanban actions',
                'Built modular components with Next.js and Tailwind CSS for snappy performance',
                'Refined and polished UI micro-interactions for responsiveness across all screen sizes',
            ],
            process_id: [
                'Merancang arsitektur alur kerja antara prompt teks AI dan aksi papan Kanban',
                'Membangun komponen modular dengan Next.js dan Tailwind CSS untuk performa optimal',
                'Menguji dan menyempurnakan interaksi antarmuka agar cepat dan responsif',
            ],
            learnings: [
                'Combining AI assistants with familiar Kanban patterns creates massive productivity gains',
                'Instant visual feedback and UI responsiveness are critical for team workflows',
            ],
            learnings_id: [
                'Menggabungkan fitur AI dengan pola UI Kanban yang sudah familiar memberikan efisiensi kerja yang signifikan',
                'Feedback visual dan kecepatan respon antarmuka adalah faktor kunci pada aplikasi produktivitas',
            ],
        },
        bgImage: '/taskly.png',
        link: "#",
    },
    {
        id: 'pengaduan-masyarakat',
        title: 'Pengaduan Masyarakat',
        description: 'Citizen complaint and public service portal with streamlined reporting and tracking flows.',
        description_id: 'Portal layanan warga dengan alur pelaporan dan tindak lanjut yang rapi.',
        tech: ['Laravel', 'Bootstrap', 'MySQL'],
        category: 'web app',
        year: '2025',
        role: 'Full-stack developer',
        role_id: 'Full-stack developer',
        intro: 'A public complaint platform designed to make reporting and follow-up easier for citizens and administrators.',
        intro_id: 'Platform pengaduan publik yang dirancang untuk mempermudah pelaporan warga dan tindak lanjut bagi pengelola layanan.',
        challenge: 'The main challenge was organizing a civic workflow that stays simple for users while still giving admins enough structure to review and respond efficiently.',
        challenge_id: 'Tantangan utamanya adalah menyusun alur pengaduan warga yang tetap mudah bagi masyarakat umum sekaligus terstruktur rapi bagi admin untuk verifikasi dan tindak lanjut.',
        outcome: 'The result is a cleaner reporting flow, clearer status visibility, and a dashboard-oriented experience that feels more dependable.',
        outcome_id: 'Menghasilkan alur pelaporan yang lebih tertib, transparansi status yang jelas, dan pengalaman dashboard yang andal.',
        summaryStats: [
            { label: 'Focus', value: 'Reporting flow' },
            { label: 'Surface', value: 'Citizen portal' },
            { label: 'Role', value: 'Full-stack build' },
        ],
        summaryStats_id: [
            { label: 'Fokus', value: 'Alur Pelaporan' },
            { label: 'Tipe', value: 'Portal Warga' },
            { label: 'Peran', value: 'Pengembangan Full-stack' },
        ],
        caseStudy: {
            problem: 'Citizens need a straightforward way to report issues, while administrators need a structured process to review, categorize, and update the status of each report.',
            problem_id: 'Warga membutuhkan cara yang mudah untuk menyampaikan aduan, sedangkan administrator memerlukan alur terstruktur untuk memeriksa, mengelompokkan, dan memperbarui status setiap laporan.',
            approach: 'I designed the experience around clarity first: simple reporting inputs for the public, status-aware records for admins, and a layout that keeps important actions visible without clutter.',
            approach_id: 'Saya merancang pengalaman dengan fokus kejelasan: input formulir yang ringkas bagi publik, pengelolaan rekaman berbasis status bagi admin, dan tata letak yang menampilkan aksi penting tanpa visual berlebih.',
            outcome: 'The result is a cleaner reporting flow, clearer status visibility, and a dashboard-oriented experience that feels more dependable.',
            outcome_id: 'Menghasilkan alur pelaporan yang lebih tertib, transparansi status yang jelas, dan pengalaman dashboard yang andal.',
            highlights: [
                'Structured submission flow for public complaints',
                'Admin-oriented dashboard for status review and response handling',
                'Clear visual hierarchy for records, categories, and follow-up states',
            ],
            highlights_id: [
                'Alur pengajuan aduan publik yang terstruktur dan mudah dipahami',
                'Dashboard khusus admin untuk verifikasi status dan tanggapan',
                'Hierarki visual jelas untuk arsip laporan, kategori, dan tahapan tindak lanjut',
            ],
            process: [
                'Mapped the reporting journey from first submission to status update',
                'Separated public and admin needs so both interfaces stayed focused',
                'Built reusable UI patterns for lists, detail states, and quick review',
            ],
            process_id: [
                'Memetakan alur pelaporan dari pengiriman pertama hingga pembaruan status akhir',
                'Memisahkan antarmuka publik dan admin agar masing-masing tetap fokus',
                'Membangun pola UI reusable untuk daftar aduan, detail laporan, dan peninjauan cepat',
            ],
            learnings: [
                'Operational software feels stronger when each screen supports a single clear decision',
                'Status design matters a lot in civic or service-based workflows',
            ],
            learnings_id: [
                'Aplikasi operasional terasa jauh lebih baik ketika setiap layar berfokus pada satu keputusan yang jelas',
                'Desain kejelasan status sangat berpengaruh pada kepercayaan pengguna layanan publik',
            ],
        },
        bgImage: '/pengaduan.png',
        link: "#",
    },
    {
        id: 'unfulfilled-promises',
        title: 'Unfulfilled Promises',
        description: 'Atmospheric narrative game prototype focusing on pacing, emotional mood, and player feedback.',
        description_id: 'Eksperimen game naratif yang fokus pada atmosfer, pacing, dan interaksi emosional.',
        tech: ['Unity', 'C#', 'Game Design'],
        category: 'game',
        year: '2025',
        role: 'Gameplay and interaction builder',
        role_id: 'Pengembang Gameplay & Interaksi',
        intro: 'A narrative game prototype built to explore mood, movement, and emotional pacing through environment and interaction.',
        intro_id: 'Prototipe game naratif yang dibuat untuk mengeksplorasi suasana, pergerakan, dan dinamika emosional melalui lingkungan serta interaksi.',
        challenge: 'Balancing atmosphere and responsiveness was important so the game could feel expressive without becoming visually noisy or mechanically confusing.',
        challenge_id: 'Menyeimbangkan atmosfer cerita dan responsivitas kontrol agar permainan terasa ekspresif tanpa menjadi membingungkan secara mekanik.',
        outcome: 'The prototype became a strong showcase for interactive storytelling and for how I approach motion and player feedback.',
        outcome_id: 'Prototipe ini menjadi portofolio kuat untuk storytelling interaktif serta pendekatan saya terhadap motion dan feedback pemain.',
        summaryStats: [
            { label: 'Focus', value: 'Narrative mood' },
            { label: 'Engine', value: 'Unity' },
            { label: 'Role', value: 'Interaction design' },
        ],
        summaryStats_id: [
            { label: 'Fokus', value: 'Suasana Naratif' },
            { label: 'Engine', value: 'Unity' },
            { label: 'Peran', value: 'Desain Interaksi' },
        ],
        caseStudy: {
            problem: 'Narrative prototypes often look interesting but feel weak in interaction. I wanted this project to carry emotion through both atmosphere and player control.',
            problem_id: 'Prototipe naratif sering kali terlihat menarik secara visual namun kurang berbobot dalam interaksi. Saya ingin proyek ini membawa kedalaman rasa lewat atmosfer maupun kontrol pemain.',
            approach: 'The build centered on environmental pacing, interaction timing, and readable feedback so the player experience could stay expressive without becoming distracting.',
            approach_id: 'Pengembangan difokuskan pada tempo lingkungan, waktu respon interaksi, dan umpan balik yang jelas agar pengalaman bermain tetap ekspresif tanpa mengganggu alur cerita.',
            outcome: 'The prototype became a strong showcase for interactive storytelling and for how I approach motion and player feedback.',
            outcome_id: 'Prototipe ini menjadi portofolio kuat untuk storytelling interaktif serta pendekatan saya terhadap motion dan feedback pemain.',
            highlights: [
                'Mood-first interactive environment',
                'Player feedback tuned around pacing and clarity',
                'Visual and mechanical choices shaped to support tone',
            ],
            highlights_id: [
                'Lingkungan interaktif dengan fokus membangun mood mendalam',
                'Umpan balik pemain yang disesuaikan dengan pacing dan kejelasan',
                'Pilihan visual dan mekanik yang dirancang untuk mendukung nada narasi',
            ],
            process: [
                'Defined the emotional tone before finalizing interaction behavior',
                'Adjusted movement and response timing to protect immersion',
                'Used prototype iteration to balance feel, readability, and atmosphere',
            ],
            process_id: [
                'Menetapkan nada emosional narasi sebelum menentukan mekanik interaksi akhir',
                'Mengatur ritme gerak dan waktu respons untuk menjaga imersi pemain',
                'Melakukan iterasi prototipe untuk menyeimbangkan sensasi bermain dan atmosfer',
            ],
            learnings: [
                'Interactive storytelling gets stronger when motion supports emotion instead of competing with it',
                'Small feedback details can completely change how a scene feels to play',
            ],
            learnings_id: [
                'Penyampaian cerita interaktif menjadi jauh lebih kuat saat pergerakan mendukung emosi pemain',
                'Detail kecil pada feedback kontrol dapat mengubah kesan emosional sebuah adegan secara drastis',
            ],
        },
        bgImage: '/game.png',
        link: "#",
    },
    {
        id: 'rekap-terlambat',
        title: 'Rekap-Terlambat',
        description: 'Internal tracking dashboard built to monitor and review lateness data with high efficiency.',
        description_id: 'Dashboard internal untuk memantau data keterlambatan dengan cepat dan efisien.',
        tech: ['Laravel', 'MySQL', 'Bootstrap'],
        category: 'dashboard',
        year: '2024',
        role: 'Dashboard developer',
        role_id: 'Pengembang Dashboard',
        intro: 'An internal dashboard to help teams track lateness records and review summary data without digging through spreadsheets.',
        intro_id: 'Dashboard internal untuk membantu tim melacak catatan keterlambatan dan meninjau ringkasan data tanpa perlu memeriksa spreadsheet manual.',
        challenge: 'The project needed to surface operational data quickly while keeping the interface lightweight enough for repeated daily use.',
        challenge_id: 'Proyek ini perlu menyajikan data operasional dengan cepat sambil menjaga antarmuka tetap ringan untuk penggunaan harian berulang.',
        outcome: 'It improved scanability, reduced friction around routine checks, and gave the workflow a more structured feel.',
        outcome_id: 'Meningkatkan kemudahan pemindaian data, memangkas hambatan pemeriksaan rutin, dan memberikan alur kerja yang lebih terstruktur.',
        summaryStats: [
            { label: 'Focus', value: 'Internal dashboard' },
            { label: 'Surface', value: 'Team operations' },
            { label: 'Role', value: 'Data UI build' },
        ],
        summaryStats_id: [
            { label: 'Fokus', value: 'Dashboard Internal' },
            { label: 'Tipe', value: 'Operasional Tim' },
            { label: 'Peran', value: 'UI & Pengolahan Data' },
        ],
        caseStudy: {
            problem: 'Teams needed a faster way to review lateness data without relying on disconnected manual records or hard-to-scan tables.',
            problem_id: 'Tim membutuhkan cara yang lebih cepat untuk meninjau data keterlambatan tanpa bergantung pada catatan manual yang terpisah atau tabel yang sulit dibaca.',
            approach: 'I focused on making recurring review tasks feel lighter through a compact dashboard layout, clearer groupings, and information density that still reads comfortably.',
            approach_id: 'Saya berfokus membuat tugas peninjauan rutin terasa lebih ringan lewat tata letak dashboard yang ringkas, pengelompokan yang jelas, dan kepadatan informasi yang nyaman dibaca.',
            outcome: 'It improved scanability, reduced friction around routine checks, and gave the workflow a more structured feel.',
            outcome_id: 'Meningkatkan kemudahan pemindaian data, memangkas hambatan pemeriksaan rutin, dan memberikan alur kerja yang lebih terstruktur.',
            highlights: [
                'Quick-scan dashboard structure for daily checks',
                'Cleaner grouping for repetitive attendance-related data',
                'A layout built around practicality over decoration',
            ],
            highlights_id: [
                'Struktur dashboard cepat-pindai untuk pemeriksaan operasional harian',
                'Pengelompokan data kehadiran yang lebih rapi dan terorganisir',
                'Tata letak fungsional yang mengutamakan kepraktisan kerja',
            ],
            process: [
                'Identified the most repeated admin actions and surfaced them first',
                'Reduced visual noise in lists and summary areas',
                'Used simple dashboard patterns that stay efficient over repeated use',
            ],
            process_id: [
                'Mengidentifikasi aksi admin yang paling sering diulang dan menampilkannya di posisi utama',
                'Mengurangi distraksi visual pada daftar data dan area ringkasan',
                'Menerapkan pola dashboard sederhana yang tetap efisien dalam pemakaian jangka panjang',
            ],
            learnings: [
                'Admin tools benefit more from clarity and rhythm than heavy visual styling',
                'Small layout improvements can save a lot of effort in repeated workflows',
            ],
            learnings_id: [
                'Aplikasi internal lebih membutuhkan kejelasan dan ritme kerja daripada hiasan visual berlebih',
                'Penyempurnaan tata letak kecil dapat menghemat banyak waktu pada alur kerja berulang',
            ],
        },
        bgImage: '/rekap-terlambat.png',
        link: "#",
    },
    {
        id: 'apotek-app',
        title: 'Apotek-app',
        description: 'Pharmacy operations management app centered on inventory workflows and transaction tracking.',
        description_id: 'Aplikasi operasional apotek dengan fokus ke alur kerja inventaris stok dan transaksi.',
        tech: ['Laravel', 'MySQL', 'Tailwind CSS'],
        category: 'web app',
        year: '2025',
        role: 'Product-focused developer',
        role_id: 'Pengembang Berorientasi Produk',
        intro: 'A pharmacy operations app centered around inventory movement, transaction flow, and day-to-day usability.',
        intro_id: 'Aplikasi operasional apotek yang berfokus pada pergerakan stok barang, alur transaksi kasir, dan kemudahan pemakaian sehari-hari.',
        challenge: 'The tricky part was keeping operational screens clear while still supporting practical actions like stock handling and record updates.',
        challenge_id: 'Tantangannya adalah menjaga layar operasional tetap bersih dan mudah dipahami selagi mendukung aksi teknis seperti manajemen stok dan pembaruan catatan.',
        outcome: 'The application became a stronger example of utility-first UI where workflow clarity matters more than decoration.',
        outcome_id: 'Aplikasi ini menjadi contoh nyata antarmuka berbasis kegunaan, di mana kejelasan alur kerja jauh lebih berharga daripada elemen dekoratif.',
        summaryStats: [
            { label: 'Focus', value: 'Inventory flow' },
            { label: 'Surface', value: 'Operations app' },
            { label: 'Role', value: 'Workflow design' },
        ],
        summaryStats_id: [
            { label: 'Fokus', value: 'Alur Inventaris' },
            { label: 'Tipe', value: 'Aplikasi Operasional' },
            { label: 'Peran', value: 'Desain Alur Kerja' },
        ],
        caseStudy: {
            problem: 'Pharmacy workflows involve stock movement, transaction handling, and routine updates that can become messy if the interface is too generic.',
            problem_id: 'Alur kerja apotek mencakup keluar masuk stok, pencatatan transaksi, dan pembaruan data rutin yang rawan berantakan jika antarmuka terlalu umum.',
            approach: 'I shaped the app around operational tasks, giving important flows like inventory and transaction handling more structure and clearer action paths.',
            approach_id: 'Saya merancang aplikasi ini sesuai kebutuhan tugas operasional, memberikan struktur yang lebih rapi dan jalur aksi yang jelas untuk pengelolaan inventaris dan kasir.',
            outcome: 'The application became a stronger example of utility-first UI where workflow clarity matters more than decoration.',
            outcome_id: 'Aplikasi ini menjadi contoh nyata antarmuka berbasis kegunaan, di mana kejelasan alur kerja jauh lebih berharga daripada elemen dekoratif.',
            highlights: [
                'Workflow-oriented UI for stock and transaction handling',
                'Tailwind-based styling for a cleaner modern product feel',
                'Utility-first layout choices to support speed and consistency',
            ],
            highlights_id: [
                'Antarmuka berorientasi alur kerja untuk pencatatan stok dan transaksi',
                'Gaya modern berbasis Tailwind CSS untuk tampilan produk yang bersih',
                'Pilihan tata letak fungsional untuk mendukung kecepatan dan konsistensi kerja',
            ],
            process: [
                'Prioritized practical actions over decorative layout patterns',
                'Kept forms and data views consistent to reduce mental switching',
                'Used simple visual treatment so operational content stayed dominant',
            ],
            process_id: [
                'Memprioritaskan tindakan operasional utama dibandingkan pola tata letak dekoratif',
                'Menjaga konsistensi formulir dan tabel data guna mengurangi beban kognitif pengguna',
                'Menggunakan visual yang bersih agar data operasional tetap menjadi fokus utama',
            ],
            learnings: [
                'The best product feel for operations software often comes from discipline, not complexity',
                'Consistency across forms and tables improves trust quickly',
            ],
            learnings_id: [
                'Kenyamanan terbaik pada software operasional lahir dari konsistensi dan disiplin, bukan kompleksitas',
                'Keseragaman format formulir dan tabel dengan cepat membangun rasa percaya pengguna',
            ],
        },
        link: "#",
        bgImage: '/apotek.png',
    },
    {
        id: 'portfolio-1',
        title: 'Portfolio 1',
        description: 'First personal portfolio iteration highlighting clean visual layout and project presentation.',
        description_id: 'Versi awal personal site yang menekankan layout bersih dan presentasi karya.',
        tech: ['HTML', 'CSS'],
        category: 'landing page',
        year: '2024',
        role: 'Designer and frontend builder',
        role_id: 'Desainer & Frontend Builder',
        intro: 'An earlier portfolio version focused on simple presentation, readable sections, and a personal visual identity.',
        intro_id: 'Versi awal portofolio yang berfokus pada presentasi karya yang sederhana, bagian konten yang mudah dibaca, dan identitas visual personal.',
        challenge: 'The goal was to make an early-stage portfolio feel polished enough to support project presentation with minimal tooling.',
        challenge_id: 'Tujuannya adalah membuat portofolio tahap awal terasa rapi dan profesional untuk memamerkan proyek dengan teknologi mendasar.',
        outcome: 'It served as a useful foundation and made later iterations easier to evolve into something more product-like.',
        outcome_id: 'Menjadi fondasi yang berharga dan mempermudah iterasi selanjutnya untuk berkembang menjadi web berstandar produk modern.',
        summaryStats: [
            { label: 'Focus', value: 'Personal branding' },
            { label: 'Surface', value: 'Landing page' },
            { label: 'Role', value: 'UI exploration' },
        ],
        summaryStats_id: [
            { label: 'Fokus', value: 'Personal Branding' },
            { label: 'Tipe', value: 'Landing Page' },
            { label: 'Peran', value: 'Eksplorasi UI' },
        ],
        caseStudy: {
            problem: 'As an early portfolio, the site needed to introduce my work clearly without relying on a complex stack or heavy interaction.',
            problem_id: 'Sebagai portofolio pertama, website ini perlu memperkenalkan hasil karya saya secara jelas tanpa bergantung pada framework rumit atau interaksi berat.',
            approach: 'I focused on clean sectioning, visual balance, and straightforward project presentation so the page could still feel intentional with a lightweight setup.',
            approach_id: 'Saya berfokus pada pembagian seksi yang rapi, keseimbangan visual, dan penyajian proyek yang lugas agar halaman tetap berkarakter meski menggunakan arsitektur sederhana.',
            outcome: 'It served as a useful foundation and made later iterations easier to evolve into something more product-like.',
            outcome_id: 'Menjadi fondasi yang berharga dan mempermudah iterasi selanjutnya untuk berkembang menjadi web berstandar produk modern.',
            highlights: [
                'Simple structure for quick self-presentation',
                'Readable project grouping with minimal visual overhead',
                'A foundation that later evolved into this newer portfolio direction',
            ],
            highlights_id: [
                'Struktur ringkas untuk pengenalan profil dan keahlian secara cepat',
                'Pengelompokan proyek yang nyaman dibaca tanpa beban visual berlebih',
                'Fondasi awal yang menjadi batu loncatan menuju portofolio modern saat ini',
            ],
            process: [
                'Kept the stack intentionally simple to focus on layout fundamentals',
                'Explored spacing, section rhythm, and presentation hierarchy',
                'Used the project as a baseline for future portfolio upgrades',
            ],
            process_id: [
                'Menjaga teknologi tetap sederhana agar bisa fokus memperdalam fundamental tata letak',
                'Mengeksplorasi spasi, ritme konten, dan hierarki penyajian informasi',
                'Menjadikan proyek ini sebagai acuan evaluasi untuk iterasi portofolio berikutnya',
            ],
            learnings: [
                'A simple site can still feel polished when hierarchy is clear',
                'Early portfolio work is valuable because it reveals what to improve next',
            ],
            learnings_id: [
                'Website sederhana tetap bisa terlihat profesional ketika hierarki visualnya ditata dengan tepat',
                'Karya awal sangat berharga karena membuka ruang evaluasi untuk perbaikan ke depan',
            ],
        },
        link: "https://nerolurien.github.io/portofolio-rafid/",
        bgImage: '/porto.png',
    },
    {
        id: 'presensi',
        title: 'Presensi',
        description: 'Lightweight attendance tracking system created to make daily check-ins straightforward and reliable.',
        description_id: 'Sistem presensi sederhana untuk membantu pencatatan kehadiran lebih efisien dan andal.',
        tech: ['CodeIgniter', 'Bootstrap'],
        category: 'dashboard',
        year: '2024',
        role: 'App developer',
        role_id: 'Pengembang Aplikasi',
        intro: 'A lightweight attendance system intended to simplify tracking and reduce manual record friction.',
        intro_id: 'Sistem absensi ringan yang dirancang untuk mempermudah pencatatan dan mengurangi kerepotan pengelolaan data manual.',
        challenge: 'The interface needed to be straightforward for routine use and reliable enough for repeated daily data entry.',
        challenge_id: 'Antarmuka harus mudah dipahami untuk pemakaian harian dan cukup tangguh bagi penginputan data berulang.',
        outcome: 'The result is a practical internal tool that highlights my approach to simple admin-focused product design.',
        outcome_id: 'Menghasilkan aplikasi internal fungsional yang mencerminkan pendekatan saya pada desain sistem admin yang sederhana dan efektif.',
        summaryStats: [
            { label: 'Focus', value: 'Attendance records' },
            { label: 'Surface', value: 'Admin tool' },
            { label: 'Role', value: 'System builder' },
        ],
        summaryStats_id: [
            { label: 'Fokus', value: 'Pencatatan Kehadiran' },
            { label: 'Tipe', value: 'Aplikasi Admin' },
            { label: 'Peran', value: 'Pengembangan Sistem' },
        ],
        caseStudy: {
            problem: 'Attendance tracking becomes inefficient when staff have to work through repetitive manual input or unclear admin screens.',
            problem_id: 'Pencatatan kehadiran menjadi tidak efisien jika staf harus menginput data manual berulang kali atau melihat antarmuka admin yang membingungkan.',
            approach: 'I designed the system to reduce friction in daily record entry, with a straightforward flow and interface choices that stay easy to understand under repetition.',
            approach_id: 'Saya merancang sistem ini untuk memangkas hambatan penginputan harian, dengan alur yang ringkas dan komponen antarmuka yang tetap nyaman dipakai berulang-ulang.',
            outcome: 'The result is a practical internal tool that highlights my approach to simple admin-focused product design.',
            outcome_id: 'Menghasilkan aplikasi internal fungsional yang mencerminkan pendekatan saya pada desain sistem admin yang sederhana dan efektif.',
            highlights: [
                'Simple attendance workflow for repetitive daily tasks',
                'Admin-friendly UI that keeps common actions visible',
                'Lightweight implementation focused on reliability and ease of use',
            ],
            highlights_id: [
                'Alur presensi yang praktis untuk tugas rutin harian',
                'UI ramah admin yang menempatkan tombol aksi utama di lokasi mudah dijangkau',
                'Implementasi ringan dengan fokus pada kestabilan dan kemudahan pakai',
            ],
            process: [
                'Mapped the simplest repeatable flow for attendance entry',
                'Reduced unnecessary visual complexity in forms and tables',
                'Kept the overall product shape practical for everyday use',
            ],
            process_id: [
                'Memetakan alur tercepat dan paling efisien untuk pencatatan kehadiran',
                'Menghilangkan kerumitan visual yang tidak perlu pada formulir dan tabel data',
                'Menjaga bentuk keseluruhan aplikasi agar tetap praktis untuk kebutuhan harian',
            ],
            learnings: [
                'Repeat-use interfaces need low-friction patterns more than visual novelty',
                'Practical internal tools can still feel polished when interaction is considered',
            ],
            learnings_id: [
                'Aplikasi yang dipakai berulang kali lebih membutuhkan pola minim hambatan ketimbang inovasi visual berlebih',
                'Tools internal fungsional tetap bisa terasa rapi dan menyenangkan saat interaksinya dirancang cermat',
            ],
        },
        link: "#",
        bgImage: '/presensi.png',
    },
    {
        id: 'website-course',
        title: 'Website Course',
        description: 'Interactive learning course interface built with snappy navigation and clear content hierarchy.',
        description_id: 'Website kursus interaktif dengan struktur konten yang ringan, jelas, dan cepat.',
        tech: ['React', 'Vite'],
        category: 'frontend',
        year: '2025',
        role: 'Frontend developer',
        role_id: 'Pengembang Frontend',
        intro: 'A lightweight learning platform interface focused on quick navigation, content hierarchy, and accessible interaction.',
        intro_id: 'Antarmuka platform belajar daring yang berfokus pada navigasi cepat, hierarki materi yang teratur, dan kemudahan akses.',
        challenge: 'The challenge was making the experience feel modern and energetic while keeping the UI easy to understand.',
        challenge_id: 'Tantangannya adalah menciptakan kesan modern dan dinamis tanpa mengorbankan keterbacaan materi pembelajaran.',
        outcome: 'It became a clean frontend showcase with good rhythm, quick rendering, and stronger visual pacing.',
        outcome_id: 'Menjadi showcase frontend yang rapi dengan ritme baca yang nyaman, rendering cepat, dan tempo visual yang seimbang.',
        summaryStats: [
            { label: 'Focus', value: 'Frontend polish' },
            { label: 'Surface', value: 'Learning platform' },
            { label: 'Role', value: 'React interface' },
        ],
        summaryStats_id: [
            { label: 'Fokus', value: 'Kualitas Frontend' },
            { label: 'Tipe', value: 'Platform Belajar' },
            { label: 'Peran', value: 'Antarmuka React' },
        ],
        caseStudy: {
            problem: 'Course platforms need to present a lot of content without feeling dense or tiring to navigate.',
            problem_id: 'Platform kursus harus menampilkan banyak materi edukasi tanpa membuat pengguna merasa kewalahan atau cepat lelah saat bernavigasi.',
            approach: 'I used lightweight frontend patterns, clear content grouping, and fast visual rhythm to make the learning interface feel approachable and modern.',
            approach_id: 'Saya menggunakan pola frontend yang ringan, pengelompokan silabus yang terstruktur, dan ritme visual yang dinamis agar antarmuka terasa ramah dan modern.',
            outcome: 'It became a clean frontend showcase with good rhythm, quick rendering, and stronger visual pacing.',
            outcome_id: 'Menjadi showcase frontend yang rapi dengan ritme baca yang nyaman, rendering cepat, dan tempo visual yang seimbang.',
            highlights: [
                'Fast React-based interface built with Vite',
                'Content layout designed for easier navigation and scanning',
                'A clean modern style with lightweight interaction patterns',
            ],
            highlights_id: [
                'Antarmuka React yang sangat cepat dan responsif dengan Vite',
                'Tata letak materi yang dirancang untuk kemudahan pemindaian dan penjelajahan',
                'Gaya modern yang bersih dengan pola interaksi yang ringan',
            ],
            process: [
                'Focused first on structure and content readability',
                'Used component-based layout to keep the interface modular',
                'Adjusted spacing and hierarchy until the flow felt lighter',
            ],
            process_id: [
                'Berfokus pertama pada keterbacaan teks dan struktur silabus kursus',
                'Menerapkan tata letak berbasis komponen modular agar kode mudah dipelihara',
                'Menyesuaikan spasi dan hierarki visual hingga alur penjelajahan terasa ringan',
            ],
            learnings: [
                'Education interfaces work best when the user always knows where to go next',
                'Frontend polish is often a result of content rhythm, not just animation',
            ],
            learnings_id: [
                'Antarmuka edukasi bekerja optimal ketika siswa selalu tahu langkah pembelajaran berikutnya',
                'Kerapian frontend sering kali ditentukan oleh ritme tata letak konten, bukan sekadar animasi',
            ],
        },
        link: "https://website-course-nine.vercel.app/",
        bgImage: '/course.png',
    },
    {
        id: 'youtube-clone',
        title: 'Youtube-Clone',
        description: 'Video streaming UI clone built to explore component architecture, dynamic search, and state.',
        description_id: 'Clone UI streaming video untuk eksplorasi arsitektur komponen, fitur pencarian, dan state.',
        tech: ['React', 'Vite'],
        category: 'frontend',
        year: '2025',
        role: 'Frontend builder',
        role_id: 'Frontend Builder',
        intro: 'A YouTube-inspired frontend built to explore component systems, layout recreation, and interaction states.',
        intro_id: 'Frontend terinspirasi YouTube yang dibuat untuk mendalami sistem komponen terstruktur, rekonstruksi tata letak, dan pengelolaan state interaksi.',
        challenge: 'The project required careful component composition so familiar UI patterns still felt smooth and coherent.',
        challenge_id: 'Proyek ini menuntut komposisi komponen yang presisi agar pola antarmuka yang sudah familiar tetap terasa halus dan kohesif.',
        outcome: 'It helped sharpen my frontend structure work and gave me a stronger playground for reusable UI patterns.',
        outcome_id: 'Membantu menajamkan pemahaman arsitektur frontend saya dan menjadi sarana eksplorasi untuk pola UI modular yang dapat digunakan kembali.',
        summaryStats: [
            { label: 'Focus', value: 'Component system' },
            { label: 'Surface', value: 'Media UI clone' },
            { label: 'Role', value: 'Frontend rebuild' },
        ],
        summaryStats_id: [
            { label: 'Fokus', value: 'Sistem Komponen' },
            { label: 'Tipe', value: 'Clone UI Media' },
            { label: 'Peran', value: 'Rekonstruksi Frontend' },
        ],
        caseStudy: {
            problem: 'Recreating a familiar streaming-style interface is useful because it tests layout precision, state handling, and component consistency all at once.',
            problem_id: 'Merekonstruksi antarmuka streaming yang sudah terkenal sangat efektif untuk menguji presisi tata letak, pengelolaan state dinamis, dan konsistensi komponen sekaligus.',
            approach: 'I treated the project as a frontend systems exercise, focusing on reusable components, familiar content patterns, and a browsing experience that feels stable.',
            approach_id: 'Saya memperlakukan proyek ini sebagai latihan sistem frontend terstruktur, berfokus pada komponen reusable, pola konten familiar, dan pengalaman penjelajahan yang stabil.',
            outcome: 'It helped sharpen my frontend structure work and gave me a stronger playground for reusable UI patterns.',
            outcome_id: 'Membantu menajamkan pemahaman arsitektur frontend saya dan menjadi sarana eksplorasi untuk pola UI modular yang dapat digunakan kembali.',
            highlights: [
                'Component-driven UI recreation inspired by YouTube',
                'Layout and state patterns designed for consistency',
                'A strong practice project for frontend structure and interaction polish',
            ],
            highlights_id: [
                'Rekreasi antarmuka berbasis komponen terinspirasi dari YouTube',
                'Pola tata letak dan penanganan state yang dirancang untuk konsistensi',
                'Proyek latihan komprehensif untuk struktur arsitektur frontend dan kerapian interaksi',
            ],
            process: [
                'Broke the interface into reusable layout and content modules',
                'Used familiar browsing patterns to test consistency under repetition',
                'Improved spacing, card treatment, and component rhythm across views',
            ],
            process_id: [
                'Memecah antarmuka menjadi modul tata letak dan modul konten yang dapat digunakan kembali',
                'Menggunakan pola browsing populer untuk menguji konsistensi UI saat merender banyak data',
                'Menyempurnakan spasi, tampilan kartu video, dan ritme komponen di berbagai resolusi',
            ],
            learnings: [
                'Cloning familiar interfaces is a great way to sharpen component discipline',
                'Consistency is what makes a dense media UI feel usable instead of chaotic',
            ],
            learnings_id: [
                'Membangun ulang antarmuka kompleks adalah cara terbaik untuk melatih disiplin arsitektur komponen',
                'Konsistensi adalah faktor utama yang membuat UI media padat terasa nyaman digunakan alih-alih membingungkan',
            ],
        },
        link: "https://youtube-clone-taupe-six.vercel.app/",
        bgImage: '/youtube.png',
    },
];

export function getLocalizedProject(project, lang = "en") {
    if (!project) return project;
    const isId = lang === "id";
    return {
        ...project,
        description: isId && project.description_id ? project.description_id : project.description,
        intro: isId && project.intro_id ? project.intro_id : project.intro,
        role: isId && project.role_id ? project.role_id : project.role,
        challenge: isId && project.challenge_id ? project.challenge_id : project.challenge,
        outcome: isId && (project.caseStudy?.outcome_id || project.outcome_id)
            ? (project.caseStudy?.outcome_id || project.outcome_id)
            : (project.outcome || project.caseStudy?.outcome),
        summaryStats: isId && project.summaryStats_id ? project.summaryStats_id : project.summaryStats,
        caseStudy: project.caseStudy ? {
            problem: isId && project.caseStudy.problem_id ? project.caseStudy.problem_id : project.caseStudy.problem,
            approach: isId && project.caseStudy.approach_id ? project.caseStudy.approach_id : project.caseStudy.approach,
            outcome: isId && project.caseStudy.outcome_id ? project.caseStudy.outcome_id : project.caseStudy.outcome,
            highlights: isId && project.caseStudy.highlights_id ? project.caseStudy.highlights_id : project.caseStudy.highlights,
            process: isId && project.caseStudy.process_id ? project.caseStudy.process_id : project.caseStudy.process,
            learnings: isId && project.caseStudy.learnings_id ? project.caseStudy.learnings_id : project.caseStudy.learnings,
        } : undefined,
    };
}

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

export const experienceList = [
    {
        company: 'PT Daun Biru Engineering',
        role: 'IT Department',
        period: 'Jan 2025 - Jun 2025',
        description: 'Completed a 6-month internship and gained hands-on experience working in a professional engineering environment.',
    },
    {
        company: 'CV Teman Express',
        role: 'Backend Developer Intern',
        period: 'Feb 2026 - July 2026',
        description: 'Working on backend development tasks and supporting application logic, data flow, and system functionality.',
    },
];

export const educationList = [
    {
        school: 'SMK Wikrama Bogor',
        major: 'PPLG',
        description: 'Studying software and game development fundamentals while building real projects and strengthening engineering skills.',
    },
];
