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
        description: 'Team task and project board with drag-and-drop Kanban columns and prompt-based task creation.',
        description_id: 'Aplikasi manajemen tugas tim dengan papan Kanban drag-and-drop dan fitur tambah tugas otomatis.',
        tech: ['Next.js', 'React', 'Tailwind CSS'],
        category: 'web app',
        year: '2026',
        role: 'Full-stack developer',
        role_id: 'Full-stack developer',
        intro: 'A project management web app built for teams to organize daily tasks on a Kanban board and quickly break down work.',
        intro_id: 'Aplikasi manajemen proyek berbasis web untuk mengatur tugas harian tim lewat papan Kanban.',
        challenge: 'Keeping the board state responsive when moving cards across columns while syncing task updates cleanly.',
        challenge_id: 'Menjaga perpindahan kartu di papan Kanban tetap mulus saat banyak data tugas diperbarui bersamaan.',
        outcome: 'Finished a working workspace where team members can create tickets, move tasks across stages, and track progress in one place.',
        outcome_id: 'Menyelesaikan ruang kerja tim di mana anggota bisa membuat tiket, memindahkan status tugas, dan memantau progres harian.',
        summaryStats: [
            { label: 'Type', value: 'Task Board' },
            { label: 'Scope', value: 'Team Workspace' },
            { label: 'Role', value: 'Full-stack' },
        ],
        summaryStats_id: [
            { label: 'Tipe', value: 'Papan Tugas' },
            { label: 'Cakupan', value: 'Ruang Kerja Tim' },
            { label: 'Peran', value: 'Full-stack' },
        ],
        caseStudy: {
            problem: 'Setting up and assigning tasks manually on a board takes too many clicks when a team is moving fast.',
            problem_id: 'Membuat dan membagi tiket tugas satu per satu sering memakan waktu saat tim sedang banyak pekerjaan.',
            approach: 'Built a clean Kanban interface in Next.js and Tailwind CSS with quick task creation and straightforward column management.',
            approach_id: 'Membangun papan Kanban menggunakan Next.js dan Tailwind CSS dengan input tugas cepat dan pembagian kolom yang simpel.',
            outcome: 'Finished a working workspace where team members can create tickets, move tasks across stages, and track progress in one place.',
            outcome_id: 'Menyelesaikan ruang kerja tim di mana anggota bisa membuat tiket, memindahkan status tugas, dan memantau progres harian.',
            highlights: [
                'Kanban board with status columns and task cards',
                'Quick task breakdown and assignment flow',
                'Dark mode interface built with Tailwind CSS',
            ],
            highlights_id: [
                'Papan Kanban dengan kolom status dan kartu tugas',
                'Alur pembuatan dan pembagian tugas yang ringkas',
                'Tampilan dark mode menggunakan Tailwind CSS',
            ],
            process: [
                'Designed the board layout and task card data structure',
                'Built the frontend components in Next.js and connected state handlers',
                'Tested card movement and form inputs across desktop and mobile screens',
            ],
            process_id: [
                'Merancang struktur data kartu tugas dan tampilan papan Kanban',
                'Membuat komponen halaman dengan Next.js dan mengatur state perpindahan kartu',
                'Menguji tampilan di layar desktop maupun HP agar tetap nyaman dipakai',
            ],
            learnings: [
                'Good state management makes a big difference on interactive board UIs',
                'Keeping task cards compact helps users read the whole board at a glance',
            ],
            learnings_id: [
                'Pengelolaan state yang rapi sangat penting untuk antarmuka seperti papan Kanban',
                'Ukuran kartu yang ringkas memudahkan pengguna melihat seluruh isi papan sekaligus',
            ],
        },
        bgImage: '/taskly.png',
        link: "#",
    },
    {
        id: 'pengaduan-masyarakat',
        title: 'Pengaduan Masyarakat',
        description: 'Public complaint web portal where citizens can submit reports and track responses from staff.',
        description_id: 'Portal web pengaduan masyarakat untuk kirim laporan warga dan pantau tanggapan petugas.',
        tech: ['Laravel', 'Bootstrap', 'MySQL'],
        category: 'web app',
        year: '2025',
        role: 'Full-stack developer',
        role_id: 'Full-stack developer',
        intro: 'A web application built with Laravel that lets citizens submit complaints with photos and allows staff to verify and reply to each report.',
        intro_id: 'Aplikasi web berbasis Laravel yang memudahkan warga mengirim laporan pengaduan beserta bukti foto untuk ditindaklanjuti petugas.',
        challenge: 'Setting up separate role permissions for citizens, staff, and admins while keeping the report status flow easy to follow.',
        challenge_id: 'Mengatur pembagian hak akses antara warga, petugas, dan admin agar alur verifikasi laporan tidak tertukar.',
        outcome: 'A complete reporting portal with user login, photo uploads, status tracking, and PDF/Excel report exports for admins.',
        outcome_id: 'Sistem pengaduan lengkap dengan fitur login, unggah foto laporan, pantau status proses, dan cetak rekap laporan untuk admin.',
        summaryStats: [
            { label: 'Type', value: 'Public Portal' },
            { label: 'Stack', value: 'Laravel & MySQL' },
            { label: 'Role', value: 'Full-stack' },
        ],
        summaryStats_id: [
            { label: 'Tipe', value: 'Portal Publik' },
            { label: 'Stack', value: 'Laravel & MySQL' },
            { label: 'Peran', value: 'Full-stack' },
        ],
        caseStudy: {
            problem: 'Manual complaint handling makes it hard for residents to know whether their report has been read or acted on.',
            problem_id: 'Pengaduan yang dicatat manual membuat warga sulit mengecek apakah laporan mereka sudah dibaca atau sedang diproses.',
            approach: 'Used Laravel and MySQL to build a multi-role portal: a simple submission form for citizens and a verification table for staff.',
            approach_id: 'Menggunakan Laravel dan MySQL untuk membuat sistem multi-user: form lapor yang simpel bagi warga dan halaman verifikasi bagi petugas.',
            outcome: 'A complete reporting portal with user login, photo uploads, status tracking, and PDF/Excel report exports for admins.',
            outcome_id: 'Sistem pengaduan lengkap dengan fitur login, unggah foto laporan, pantau status proses, dan cetak rekap laporan untuk admin.',
            highlights: [
                'Multi-role authentication for citizens, staff, and administrators',
                'Report status tracking from submission to completion',
                'Admin dashboard with filtering and report export',
            ],
            highlights_id: [
                'Login multi-role untuk masyarakat, petugas, dan admin',
                'Pelacakan status laporan mulai dari masuk, diproses, hingga selesai',
                'Halaman admin dengan filter data dan cetak laporan',
            ],
            process: [
                'Created the MySQL database schema for users, reports, and staff responses',
                'Implemented Laravel middleware for role-based access control',
                'Built the public submission forms and admin management tables with Bootstrap',
            ],
            process_id: [
                'Merancang tabel database MySQL untuk data masyarakat, pengaduan, dan tanggapan',
                'Memasang middleware Laravel untuk memisahkan akses warga, petugas, dan admin',
                'Membuat halaman input laporan dan tabel kelola admin menggunakan Bootstrap',
            ],
            learnings: [
                'Role-based middleware needs to be planned early before building views',
                'Clear status labels save users from wondering what happened to their submission',
            ],
            learnings_id: [
                'Pembagian role dan middleware sebaiknya dirancang matang sejak awal sebelum membuat halaman',
                'Indikator status yang jelas sangat membantu pengguna mengetahui progres laporan mereka',
            ],
        },
        bgImage: '/pengaduan.png',
        link: "#",
    },
    {
        id: 'unfulfilled-promises',
        title: 'Unfulfilled Promises',
        description: 'Story-driven Unity game prototype focusing on atmosphere, dialogue pacing, and environment interaction.',
        description_id: 'Prototipe game cerita di Unity yang berfokus pada suasana lingkungan, dialog, dan interaksi pemain.',
        tech: ['Unity', 'C#', 'Game Design'],
        category: 'game',
        year: '2025',
        role: 'Game developer',
        role_id: 'Game developer',
        intro: 'A narrative game prototype made in Unity where players explore environments, interact with objects, and uncover the story at their own pace.',
        intro_id: 'Prototipe game naratif buatan Unity di mana pemain menjelajahi ruangan, berinteraksi dengan objek sekitar, dan mengikuti alur cerita.',
        challenge: 'Writing clean C# scripts for triggers, camera transitions, and dialogue prompts without making the controls feel stiff.',
        challenge_id: 'Menulis script C# untuk trigger interaksi, perpindahan kamera, dan sistem dialog agar pergerakan karakter tetap terasa halus.',
        outcome: 'A playable build with custom character movement, interactive scene triggers, lighting setup, and audio cues.',
        outcome_id: 'Build game yang bisa dimainkan lengkap dengan kontrol karakter, trigger objek interaktif, tata cahaya, dan efek suara.',
        summaryStats: [
            { label: 'Genre', value: 'Narrative Game' },
            { label: 'Engine', value: 'Unity & C#' },
            { label: 'Role', value: 'Gameplay & Scripting' },
        ],
        summaryStats_id: [
            { label: 'Genre', value: 'Game Naratif' },
            { label: 'Engine', value: 'Unity & C#' },
            { label: 'Peran', value: 'Gameplay & Script' },
        ],
        caseStudy: {
            problem: 'Story games can easily feel boring if the player only walks around without responsive feedback from the environment.',
            problem_id: 'Game bertema cerita bisa terasa membosankan kalau pergerakan karakter kaku dan objek di sekitar tidak memberikan respons saat didekati.',
            approach: 'Focused on tuning character movement speed, camera follow behavior, and interaction prompts in Unity using C#.',
            approach_id: 'Fokus mengatur kecepatan gerak karakter, pergerakan kamera, dan tanda interaksi objek di Unity menggunakan C#.',
            outcome: 'A playable build with custom character movement, interactive scene triggers, lighting setup, and audio cues.',
            outcome_id: 'Build game yang bisa dimainkan lengkap dengan kontrol karakter, trigger objek interaktif, tata cahaya, dan efek suara.',
            highlights: [
                'Custom C# scripts for player movement and object interaction',
                'Scene lighting and sound effects timed to story triggers',
                'Dialogue and prompt UI integrated into the game view',
            ],
            highlights_id: [
                'Script C# khusus untuk kontrol gerak pemain dan interaksi objek',
                'Pencahayaan ruangan dan efek suara yang menyesuaikan alur cerita',
                'Tampilan dialog dan petunjuk tombol di dalam layar permainan',
            ],
            process: [
                'Blocked out the level layout and movement bounds inside Unity',
                'Wrote C# scripts for collision triggers and dialogue state',
                'Added lighting, sound effects, and UI prompts after playtesting',
            ],
            process_id: [
                'Menyusun tata letak level dan batas area jalan di dalam Unity',
                'Menulis kode C# untuk sistem trigger area dan urutan dialog',
                'Menambahkan pencahayaan, audio, dan perbaikan UI setelah uji coba main',
            ],
            learnings: [
                'Small details like camera smoothing and footsteps make a huge difference in game feel',
                'Separating dialogue data from trigger scripts makes scenes much easier to edit',
            ],
            learnings_id: [
                'Detail kecil seperti kehalusan kamera dan suara langkah kaki sangat memengaruhi kenyamanan bermain',
                'Memisahkan data teks dialog dari kode trigger membuat pengeditan cerita jauh lebih gampang',
            ],
        },
        bgImage: '/game.png',
        link: "#",
    },
    {
        id: 'rekap-terlambat',
        title: 'Rekap-Terlambat',
        description: 'School dashboard for recording student lateness, viewing daily summaries, and exporting attendance letters.',
        description_id: 'Aplikasi dashboard sekolah untuk mencatat keterlambatan siswa, lihat rekap harian, dan cetak surat.',
        tech: ['Laravel', 'MySQL', 'Bootstrap'],
        category: 'dashboard',
        year: '2024',
        role: 'Backend & dashboard developer',
        role_id: 'Pengembang Backend & Dashboard',
        intro: 'An internal school web app built to replace manual paper logs for tracking late students and generating summary reports.',
        intro_id: 'Aplikasi web internal sekolah untuk menggantikan pencatatan buku manual dalam mendata siswa yang datang terlambat.',
        challenge: 'Grouping student records by class, advisor, and date while keeping the search and export features fast.',
        challenge_id: 'Mengelompokkan data keterlambatan berdasarkan rombel, rayon, dan tanggal agar pencarian serta cetak rekap tetap cepat.',
        outcome: 'Staff and student advisors can log late arrivals in seconds, check total counts per student, and print warning letters directly.',
        outcome_id: 'Petugas piket dan pembimbing siswa bisa mencatat keterlambatan dengan cepat, melihat jumlah kumulatif, dan langsung mencetak surat pernyataan.',
        summaryStats: [
            { label: 'Type', value: 'School Dashboard' },
            { label: 'Stack', value: 'Laravel & MySQL' },
            { label: 'Role', value: 'Full-stack' },
        ],
        summaryStats_id: [
            { label: 'Tipe', value: 'Dashboard Sekolah' },
            { label: 'Stack', value: 'Laravel & MySQL' },
            { label: 'Peran', value: 'Full-stack' },
        ],
        caseStudy: {
            problem: 'Recording student lateness on paper or separate spreadsheets made it slow to see how many times a student had been late.',
            problem_id: 'Mencatat siswa terlambat di kertas atau file terpisah membuat pihak sekolah kesulitan menghitung total keterlambatan tiap siswa secara cepat.',
            approach: 'Built a relational database in MySQL with Laravel controllers for admins and student advisors to input, filter, and export data.',
            approach_id: 'Membuat database terpusat di MySQL dan halaman kelola di Laravel untuk admin serta pembimbing rayon guna menginput dan mengekspor data.',
            outcome: 'Staff and student advisors can log late arrivals in seconds, check total counts per student, and print warning letters directly.',
            outcome_id: 'Petugas piket dan pembimbing siswa bisa mencatat keterlambatan dengan cepat, melihat jumlah kumulatif, dan langsung mencetak surat pernyataan.',
            highlights: [
                'Role access for administrators and student advisors (pembimbing rayon)',
                'Automatic accumulation of lateness counts per student',
                'PDF letter printing and Excel data export',
            ],
            highlights_id: [
                'Hak akses terpisah untuk admin dan pembimbing rayon',
                'Perhitungan otomatis jumlah total keterlambatan per siswa',
                'Fitur cetak surat pernyataan PDF dan ekspor data Excel',
            ],
            process: [
                'Set up tables for students, classes, regions (rayon), and lateness logs',
                'Created dashboard summary cards and searchable data tables',
                'Added PDF generation for formal school letters',
            ],
            process_id: [
                'Menyusun relasi tabel siswa, rombel, rayon, dan data keterlambatan',
                'Membuat halaman ringkasan statistik dan tabel pencarian data',
                'Menambahkan fitur cetak surat PDF otomatis untuk siswa yang melanggar batas',
            ],
            learnings: [
                'Proper table relationships in MySQL make summary queries much simpler',
                'For daily admin tools, fast search and clear tables matter most',
            ],
            learnings_id: [
                'Relasi tabel MySQL yang tepat sangat mempermudah pembuatan query rekapitulasi',
                'Untuk aplikasi yang dipakai setiap pagi, kecepatan input dan pencarian adalah hal paling utama',
            ],
        },
        bgImage: '/rekap-terlambat.png',
        link: "#",
    },
    {
        id: 'apotek-app',
        title: 'Apotek-app',
        description: 'Pharmacy management web app for tracking medicine stock, cashier transactions, and purchase receipts.',
        description_id: 'Aplikasi manajemen apotek untuk kelola stok obat, transaksi kasir, dan cetak struk pembelian.',
        tech: ['Laravel', 'MySQL', 'Tailwind CSS'],
        category: 'web app',
        year: '2025',
        role: 'Full-stack developer',
        role_id: 'Full-stack developer',
        intro: 'A web application for managing pharmacy inventory and cashier sales, built with Laravel, MySQL, and Tailwind CSS.',
        intro_id: 'Aplikasi web untuk mengelola stok obat di apotek dan melayani transaksi kasir menggunakan Laravel, MySQL, dan Tailwind CSS.',
        challenge: 'Making sure medicine stock quantities update accurately whenever a cashier completes a multi-item order.',
        challenge_id: 'Memastikan jumlah stok obat otomatis berkurang dengan tepat setiap kali kasir menyelesaikan transaksi pembelian.',
        outcome: 'A working POS and inventory system with admin stock management, cashier checkout, and printable receipts.',
        outcome_id: 'Sistem kasir dan stok apotek yang dilengkapi pengelolaan data obat oleh admin, checkout kasir, dan cetak nota.',
        summaryStats: [
            { label: 'Type', value: 'POS & Inventory' },
            { label: 'Stack', value: 'Laravel & Tailwind' },
            { label: 'Role', value: 'Full-stack' },
        ],
        summaryStats_id: [
            { label: 'Tipe', value: 'Kasir & Inventaris' },
            { label: 'Stack', value: 'Laravel & Tailwind' },
            { label: 'Peran', value: 'Full-stack' },
        ],
        caseStudy: {
            problem: 'Pharmacies need to keep medicine stock numbers and sales receipts in sync so cashiers do not sell out-of-stock items.',
            problem_id: 'Apotek perlu menjaga agar data jumlah stok obat selalu sinkron dengan transaksi kasir supaya tidak terjadi penjualan obat yang sudah habis.',
            approach: 'Built separate flows for admins (managing medicine data and user accounts) and cashiers (creating orders and printing receipts).',
            approach_id: 'Memisahkan halaman admin (kelola data obat, stok, dan akun) dengan halaman kasir (input pesanan pelanggan dan cetak struk).',
            outcome: 'A working POS and inventory system with admin stock management, cashier checkout, and printable receipts.',
            outcome_id: 'Sistem kasir dan stok apotek yang dilengkapi pengelolaan data obat oleh admin, checkout kasir, dan cetak nota.',
            highlights: [
                'Automatic stock deduction on every completed transaction',
                'Separate dashboard views for admin and cashier roles',
                'Clean interface styled with Tailwind CSS',
            ],
            highlights_id: [
                'Pengurangan stok obat otomatis saat transaksi selesai dibuat',
                'Pemisahan halaman kerja antara admin gudang dan kasir',
                'Antarmuka bersih yang dibangun dengan Tailwind CSS',
            ],
            process: [
                'Designed the database schema for medicines, orders, and order items',
                'Wrote transaction logic in Laravel to validate available stock before checkout',
                'Styled the tables, forms, and receipt view using Tailwind CSS',
            ],
            process_id: [
                'Merancang tabel database untuk obat, transaksi, dan detail item pembelian',
                'Menulis logika validasi stok di Laravel sebelum pesanan disimpan',
                'Mendesain tabel stok, form kasir, dan tampilan struk menggunakan Tailwind CSS',
            ],
            learnings: [
                'Handling multi-item carts requires careful validation on both frontend and backend',
                'Consistent table layouts make stock checks much easier for staff',
            ],
            learnings_id: [
                'Menangani transaksi banyak item sekaligus membutuhkan validasi stok yang teliti di sisi server',
                'Tampilan tabel yang rapi sangat membantu petugas saat mengecek sisa stok obat',
            ],
        },
        link: "#",
        bgImage: '/apotek.png',
    },
    {
        id: 'portfolio-1',
        title: 'Portfolio 1',
        description: 'My first personal portfolio website built from scratch using plain HTML and CSS.',
        description_id: 'Website portofolio pribadi pertama saya yang dibuat dari nol menggunakan HTML dan CSS dasar.',
        tech: ['HTML', 'CSS'],
        category: 'landing page',
        year: '2024',
        role: 'Frontend developer',
        role_id: 'Frontend developer',
        intro: 'The first portfolio site I made when learning web development fundamentals with HTML and CSS.',
        intro_id: 'Website portofolio pertama yang saya buat saat awal belajar dasar-dasar pembuatan web dengan HTML dan CSS.',
        challenge: 'Making the layout responsive across mobile and desktop screens using pure CSS without any framework.',
        challenge_id: 'Mengatur agar posisi elemen tetap rapi di layar HP maupun laptop hanya dengan CSS murni tanpa bantuan framework.',
        outcome: 'Published my first live website on GitHub Pages to showcase early school projects and profile info.',
        outcome_id: 'Berhasil meng-online-kan website pertama saya di GitHub Pages untuk menampilkan profil dan tugas-tugas awal.',
        summaryStats: [
            { label: 'Type', value: 'Static Site' },
            { label: 'Stack', value: 'HTML & CSS' },
            { label: 'Host', value: 'GitHub Pages' },
        ],
        summaryStats_id: [
            { label: 'Tipe', value: 'Web Statis' },
            { label: 'Stack', value: 'HTML & CSS' },
            { label: 'Host', value: 'GitHub Pages' },
        ],
        caseStudy: {
            problem: 'I needed a simple place online to put my profile and early coding assignments while learning basic web development.',
            problem_id: 'Saya butuh halaman web sendiri untuk menaruh profil singkat dan hasil latihan ngoding waktu baru belajar dasar web.',
            approach: 'Wrote semantic HTML and custom CSS flexbox/grid rules without relying on external UI libraries.',
            approach_id: 'Menulis kode HTML dan mengatur tata letak menggunakan Flexbox serta CSS Grid secara manual.',
            outcome: 'Published my first live website on GitHub Pages to showcase early school projects and profile info.',
            outcome_id: 'Berhasil meng-online-kan website pertama saya di GitHub Pages untuk menampilkan profil dan tugas-tugas awal.',
            highlights: [
                'Built entirely with vanilla HTML and CSS',
                'Responsive layout using Flexbox and media queries',
                'Deployed and hosted on GitHub Pages',
            ],
            highlights_id: [
                'Dibuat murni menggunakan HTML dan CSS dasar',
                'Tampilan responsif dengan Flexbox dan media queries',
                'Di-deploy langsung ke GitHub Pages',
            ],
            process: [
                'Sketched the sections for profile, skills, and project cards',
                'Wrote CSS styles and media queries for smaller screens',
                'Pushed the repository and enabled GitHub Pages hosting',
            ],
            process_id: [
                'Menyusun bagian-bagian halaman untuk profil, skill, dan daftar proyek',
                'Menulis styling CSS dan mengatur media query untuk layar kecil',
                'Mengunggah kode ke GitHub dan mengaktifkan GitHub Pages',
            ],
            learnings: [
                'Understanding plain CSS flexbox and box model made learning Tailwind much easier later on',
                'Shipping a simple site early is the best way to start',
            ],
            learnings_id: [
                'Paham konsep dasar CSS seperti Flexbox dan box model bikin proses belajar Tailwind jadi jauh lebih gampang',
                'Berani mempublikasikan karya awal sangat membantu melihat perkembangan belajar dari waktu ke waktu',
            ],
        },
        link: "https://nerolurien.github.io/portofolio-rafid/",
        bgImage: '/porto.png',
    },
    {
        id: 'presensi',
        title: 'Presensi',
        description: 'Employee and student attendance web app built with CodeIgniter and Bootstrap.',
        description_id: 'Aplikasi web pencatatan presensi kehadiran menggunakan CodeIgniter dan Bootstrap.',
        tech: ['CodeIgniter', 'Bootstrap', 'MySQL'],
        category: 'dashboard',
        year: '2024',
        role: 'Web developer',
        role_id: 'Web developer',
        intro: 'A web-based attendance system built with CodeIgniter to record daily check-ins and view attendance history.',
        intro_id: 'Sistem presensi berbasis web yang dibangun menggunakan CodeIgniter untuk mencatat kehadiran harian dan melihat riwayat absen.',
        challenge: 'Structuring the MVC controllers and views in CodeIgniter so daily attendance input and recap tables stay fast.',
        challenge_id: 'Menyusun struktur Controller, Model, dan View di CodeIgniter agar proses input absen dan rekap data berjalan lancar.',
        outcome: 'A lightweight attendance dashboard with daily check-in forms, attendance status logs, and recap tables.',
        outcome_id: 'Aplikasi dashboard presensi yang ringan dengan form absen harian, pencatatan status kehadiran, dan tabel rekap.',
        summaryStats: [
            { label: 'Type', value: 'Attendance App' },
            { label: 'Stack', value: 'CodeIgniter' },
            { label: 'Role', value: 'Full-stack' },
        ],
        summaryStats_id: [
            { label: 'Tipe', value: 'Aplikasi Presensi' },
            { label: 'Stack', value: 'CodeIgniter' },
            { label: 'Peran', value: 'Full-stack' },
        ],
        caseStudy: {
            problem: 'Keeping track of daily attendance manually makes it tedious to compile monthly presence and absence totals.',
            problem_id: 'Rekap absensi yang masih dicatat manual memakan waktu lama saat harus menghitung total hadir, izin, atau sakit setiap bulan.',
            approach: 'Used CodeIgniter MVC and Bootstrap to create a clean check-in form and an admin table to review attendance records.',
            approach_id: 'Menggunakan pola MVC di CodeIgniter dan tampilan Bootstrap untuk membuat form input kehadiran serta tabel rekap admin.',
            outcome: 'A lightweight attendance dashboard with daily check-in forms, attendance status logs, and recap tables.',
            outcome_id: 'Aplikasi dashboard presensi yang ringan dengan form absen harian, pencatatan status kehadiran, dan tabel rekap.',
            highlights: [
                'MVC architecture built with CodeIgniter',
                'Daily attendance logging and history table',
                'Clean admin interface using Bootstrap',
            ],
            highlights_id: [
                'Menggunakan arsitektur MVC dari framework CodeIgniter',
                'Pencatatan kehadiran harian beserta tabel riwayat lengkap',
                'Tampilan dashboard yang rapi dengan Bootstrap',
            ],
            process: [
                'Created the database tables for users and daily attendance logs',
                'Wrote CodeIgniter controllers and models for CRUD operations',
                'Built the dashboard interface with Bootstrap components',
            ],
            process_id: [
                'Membuat tabel database untuk data pengguna dan log kehadiran harian',
                'Menulis Controller dan Model di CodeIgniter untuk proses tambah dan tampil data',
                'Merapikan tampilan tabel dan form menggunakan komponen Bootstrap',
            ],
            learnings: [
                'CodeIgniter is very fast and straightforward for building lightweight CRUD systems',
                'Clear date filtering is essential in any attendance application',
            ],
            learnings_id: [
                'CodeIgniter sangat ringan dan praktis untuk membangun aplikasi sistem informasi berbasis CRUD',
                'Fitur filter berdasarkan tanggal sangat penting pada aplikasi pencatatan kehadiran',
            ],
        },
        link: "#",
        bgImage: '/presensi.png',
    },
    {
        id: 'website-course',
        title: 'Website Course',
        description: 'Online course landing page and class catalog built with React and Vite.',
        description_id: 'Website katalog kelas dan kursus online yang dibuat menggunakan React dan Vite.',
        tech: ['React', 'Vite'],
        category: 'frontend',
        year: '2025',
        role: 'Frontend developer',
        role_id: 'Frontend developer',
        intro: 'A multi-section frontend site for an online learning platform, featuring course listings, pricing tiers, and testimonials.',
        intro_id: 'Tampilan frontend untuk platform kursus online yang memuat daftar kelas, kategori materi, dan halaman informasi.',
        challenge: 'Organizing reusable React components for course cards and navigation so the site loads and switches pages smoothly.',
        challenge_id: 'Menyusun komponen React yang bisa dipakai ulang untuk kartu kelas dan navigasi agar perpindahan halaman terasa cepat.',
        outcome: 'Deployed a fast, responsive frontend showcase on Vercel with clean course cards and smooth scrolling.',
        outcome_id: 'Berhasil di-deploy ke Vercel dengan tampilan yang responsif di berbagai ukuran layar dan pemuatan halaman yang cepat.',
        summaryStats: [
            { label: 'Type', value: 'Course UI' },
            { label: 'Stack', value: 'React & Vite' },
            { label: 'Host', value: 'Vercel' },
        ],
        summaryStats_id: [
            { label: 'Tipe', value: 'Web Kursus' },
            { label: 'Stack', value: 'React & Vite' },
            { label: 'Host', value: 'Vercel' },
        ],
        caseStudy: {
            problem: 'Course websites have a lot of cards and text that can look cluttered if spacing and typography are not consistent.',
            problem_id: 'Website kursus memiliki banyak daftar kelas dan informasi harga yang bisa terlihat penuh kalau tata letaknya tidak rapi.',
            approach: 'Built modular React components with Vite, separating course data into clean arrays and reusable card templates.',
            approach_id: 'Membangun komponen modular di React bersama Vite, dengan memisahkan data daftar kelas agar kode tetap bersih.',
            outcome: 'Deployed a fast, responsive frontend showcase on Vercel with clean course cards and smooth scrolling.',
            outcome_id: 'Berhasil di-deploy ke Vercel dengan tampilan yang responsif di berbagai ukuran layar dan pemuatan halaman yang cepat.',
            highlights: [
                'Reusable React components for course cards and sections',
                'Fast development and bundle build powered by Vite',
                'Responsive grid layout for mobile and desktop viewports',
            ],
            highlights_id: [
                'Komponen React reusable untuk kartu kelas dan bagian halaman',
                'Build ringan dan cepat menggunakan Vite',
                'Tata letak grid yang responsif untuk layar HP maupun desktop',
            ],
            process: [
                'Structured the project folders and component hierarchy in React',
                'Created data objects for courses, categories, and FAQs',
                'Deployed the production build to Vercel',
            ],
            process_id: [
                'Menyusun struktur folder dan pembagian komponen di dalam proyek React',
                'Membuat data terpisah untuk daftar kelas, kategori, dan testimoni',
                'Melakukan deployment hasil build ke Vercel',
            ],
            learnings: [
                'Splitting UI into small focused components makes layout updates much faster',
                'Good card spacing keeps content-heavy pages easy to scan',
            ],
            learnings_id: [
                'Memecah tampilan menjadi komponen-komponen kecil membuat revisi desain jauh lebih cepat',
                'Jarak antar kartu yang pas membuat halaman yang penuh informasi tetap enak dilihat',
            ],
        },
        link: "https://website-course-nine.vercel.app/",
        bgImage: '/course.png',
    },
    {
        id: 'youtube-clone',
        title: 'Youtube-Clone',
        description: 'Frontend recreation of the YouTube interface built with React and Vite to practice state and layout.',
        description_id: 'Rekreasi tampilan antarmuka YouTube menggunakan React dan Vite untuk latihan komponen dan state.',
        tech: ['React', 'Vite'],
        category: 'frontend',
        year: '2025',
        role: 'Frontend developer',
        role_id: 'Frontend developer',
        intro: 'A frontend clone of YouTube built with React to practice sidebar navigation, video feed grids, and watch page layouts.',
        intro_id: 'Proyek latihan membuat ulang tampilan YouTube dengan React, mencakup navigasi sidebar, grid daftar video, dan halaman pemutar.',
        challenge: 'Handling the responsive video grid, collapsible sidebar state, and category filter pills cleanly across screen sizes.',
        challenge_id: 'Mengatur perubahan grid video, buka-tutup sidebar, dan tombol kategori agar tetap rapi saat ukuran layar berubah.',
        outcome: 'A working live demo on Vercel that replicates the core browsing and video player layout of YouTube.',
        outcome_id: 'Demo website aktif di Vercel yang menampilkan halaman beranda, filter kategori, dan halaman tonton ala YouTube.',
        summaryStats: [
            { label: 'Type', value: 'UI Clone' },
            { label: 'Stack', value: 'React & Vite' },
            { label: 'Host', value: 'Vercel' },
        ],
        summaryStats_id: [
            { label: 'Tipe', value: 'Clone UI' },
            { label: 'Stack', value: 'React & Vite' },
            { label: 'Host', value: 'Vercel' },
        ],
        caseStudy: {
            problem: 'Rebuilding a complex everyday app like YouTube is a great test for responsive CSS grids and React component state.',
            problem_id: 'Membangun ulang tampilan aplikasi populer seperti YouTube adalah latihan yang bagus untuk menguji kerapian CSS Grid dan state di React.',
            approach: 'Broke the layout down into navbar, sidebar, category bar, video card grid, and watch view components.',
            approach_id: 'Memecah halaman menjadi beberapa komponen utama: navbar, sidebar, bar kategori, kartu video, dan halaman pemutar.',
            outcome: 'A working live demo on Vercel that replicates the core browsing and video player layout of YouTube.',
            outcome_id: 'Demo website aktif di Vercel yang menampilkan halaman beranda, filter kategori, dan halaman tonton ala YouTube.',
            highlights: [
                'Responsive video feed grid and collapsible sidebar menu',
                'Interactive category pills and video player page layout',
                'Hosted live on Vercel',
            ],
            highlights_id: [
                'Grid daftar video responsif dengan menu sidebar yang bisa dibuka-tutup',
                'Filter kategori interaktif dan halaman pemutar video',
                'Sudah online dan bisa dicoba langsung di Vercel',
            ],
            process: [
                'Built the main navigation header and collapsible sidebar state',
                'Created the responsive video thumbnail cards and metadata layout',
                'Added routing to the video player view and deployed to Vercel',
            ],
            process_id: [
                'Membuat bagian header pencarian dan state untuk buka-tutup sidebar',
                'Menyusun komponen kartu thumbnail video beserta judul dan info channel',
                'Menambahkan halaman pemutar video dan mengunggahnya ke Vercel',
            ],
            learnings: [
                'Practicing on real-world layouts teaches you edge cases with long titles and aspect ratios',
                'Passing props cleanly between parent and child components keeps React code readable',
            ],
            learnings_id: [
                'Latihan meniru tampilan aplikasi nyata mengajarkan cara menangani judul panjang dan rasio gambar yang beragam',
                'Alur pengiriman props yang rapi antar komponen membuat kode React jauh lebih mudah dibaca',
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
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Main Stack', description: 'Next.js, React, Vue, Laravel, CodeIgniter, AdonisJS, Go, Java, Docker, and Unity.' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Software & Game Development (PPLG) student at SMK Wikrama Bogor.' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'What I Build', description: 'Web apps, internal dashboards, REST APIs, and 2D/3D Unity games.' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.git, assets.unity, assets.mysql
];

export const highlightStats = [
    { value: '9', label: 'Projects built' },
    { value: '3', label: 'Focus areas' },
    { value: '2', label: 'Internships' }
];

export const serviceHighlights = [
    {
        title: 'Web Applications',
        description: 'Building responsive web apps and dashboards that load fast and are straightforward to use.',
    },
    {
        title: 'Backend & Databases',
        description: 'Setting up database tables, authentication, REST APIs, and server logic.',
    },
    {
        title: 'Game Development',
        description: 'Making playable prototypes in Unity and writing C# scripts for gameplay mechanics.',
    },
];

export const experienceList = [
    {
        company: 'PT Daun Biru Engineering',
        role: 'IT Department Intern',
        period: 'Jan 2025 - Jun 2025',
        description: 'Did a 6-month internship in the IT department, helping maintain internal systems and supporting daily technical operations.',
    },
    {
        company: 'CV Teman Express',
        role: 'Backend Developer Intern',
        period: 'Feb 2026 - Jul 2026',
        description: 'Working as a backend developer intern, handling API endpoints, database queries, and application logic.',
    },
];

export const educationList = [
    {
        school: 'SMK Wikrama Bogor',
        major: 'PPLG (Software & Game Development)',
        description: 'Studying web programming, relational databases, backend services, and Unity game development.',
    },
];
