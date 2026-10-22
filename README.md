# Rafid Dwi Prakoso — Developer Portfolio

[![Live Site](https://img.shields.io/badge/Live%20Demo-rafid--three.vercel.app-amber?style=for-the-badge&logo=vercel)](https://rafid-three.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

An editorial, typography-focused personal portfolio website built with Next.js 16 (App Router & Turbopack), React 19, and Tailwind CSS. Designed to showcase full-stack web applications, backend architectures, and game development projects.

---

## ✨ Features

- **🌐 Bilingual Support (ID / EN)**: Instant language switcher between Bahasa Indonesia and English without page reloads.
- **🎵 Real-Time Music Scrobbler**: Live Spotify ticker widget powered by the Last.fm AudioScrobbler API and Spotify Web API.
- **⌨️ Command Palette (`Ctrl + K` / `⌘K`)**: Fast keyboard-first search and action trigger (pages navigation, CV download, social links).
- **💻 Interactive Terminal**: Quake-style slide-down CLI drawer with custom commands (`help`, `about`, `projects`, `skills`, `contact`, `clear`).
- **📈 GitHub Activity Graph**: Live contributions heat map and streak analytics fetched via dynamic API routes.
- **🌗 Editorial Theme (Dark / Light)**: Carefully tuned dual-mode palette with zero theme flash on page load.
- **📱 Responsive & Accessible**: Full-screen mobile navigation drawer, fluid typography, and WCAG AA contrast compliance.
- **🔍 SEO & Social Media Ready**: Complete Schema.org JSON-LD structured data (`WebSite` and `Person`), dynamic OpenGraph images, automated `sitemap.xml`, and `robots.txt`.

---

## 🛠️ Tech Stack

### Core Framework & Styling
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: Fraunces, Space Grotesk, JetBrains Mono (`next/font/google`)

### Services & APIs
- **Music Data**: Last.fm 2.0 API & Spotify API
- **GitHub Stats**: GitHub Contributions API
- **Contact Form**: Web3Forms API
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
├── app/
│   ├── api/
│   │   ├── github/contributions/     # Live GitHub commits tracker
│   │   └── spotify/currently-playing/# Real-time music status
│   ├── components/                   # Modular UI components
│   │   ├── About.jsx
│   │   ├── CommandPalette.jsx        # Quick search modal
│   │   ├── Contact.jsx               # Form submission
│   │   ├── FullscreenLoader.jsx      # Preloader sequence
│   │   ├── Header.jsx                # Hero section
│   │   ├── Navbar.jsx                # Topbar & mobile drawer
│   │   ├── SpotifyCurrentlyPlaying.jsx
│   │   ├── TerminalDrawer.jsx        # Interactive CLI drawer
│   │   └── Work.jsx                  # Project showcase grid
│   ├── context/                      # React Context providers (Language)
│   ├── projects/                     # Dynamic case-study detail views
│   ├── layout.js                     # Root layout, fonts, and SEO metadata
│   ├── page.js                       # Homepage composition
│   ├── robots.js                     # Dynamic robots.txt
│   └── sitemap.js                    # Dynamic sitemap.xml
├── assets/                           # Static image assets and workData records
├── lib/                              # External API clients (Spotify, Last.fm)
├── public/                           # Downloadable CV, icons, and favicons
└── tailwind.config.mjs               # Tailwind custom color palettes and fonts
```

---

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/nerolurien/Portfolio-next.git
cd Portfolio-next
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Optional: Next.js Public URL
NEXT_PUBLIC_SITE_URL=https://rafid-three.vercel.app

# Last.fm API Configuration (Real-time Spotify tracking)
LASTFM_API_KEY=your_lastfm_api_key
LASTFM_USERNAME=your_lastfm_username

# Optional: Spotify API Credentials
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm run start
```

### 6. Lint Code

```bash
npm run lint
```

---

## 📬 Contact & Connect

- **Website**: [rafid-three.vercel.app](https://rafid-three.vercel.app)
- **Email**: [rafiddwiprakoso@gmail.com](mailto:rafiddwiprakoso@gmail.com)
- **GitHub**: [@nerolurien](https://github.com/nerolurien)
- **LinkedIn**: [Rafid Dwi Prakoso](https://www.linkedin.com/in/rafid-dwi-prakoso-895a80300/)
- **Instagram**: [@fiddd_dwi](https://www.instagram.com/fiddd_dwi/)

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
