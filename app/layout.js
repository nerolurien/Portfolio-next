import { Fraunces, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import { LanguageProvider } from "./context/LanguageContext";
import TopProgressBar from "./components/TopProgressBar";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rafid-three.vercel.app";
const baseUrl = rawBaseUrl.replace(/\/$/, "");

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Rafid Dwi Prakoso | Full-Stack & Game Developer",
    template: "%s | Rafid Dwi Prakoso",
  },
  description:
    "Portfolio of Rafid Dwi Prakoso, a software and game developer from Bogor building web apps with Next.js, Laravel, Go, and games in Unity.",
  keywords: [
    "Rafid Dwi Prakoso",
    "Full-Stack Developer",
    "Web Developer",
    "Backend Developer",
    "Game Developer",
    "Next.js",
    "React",
    "Vue",
    "Laravel",
    "CodeIgniter",
    "AdonisJS",
    "Go",
    "Java",
    "Docker",
    "Unity",
    "Bogor",
    "Indonesia",
  ],
  authors: [{ name: "Rafid Dwi Prakoso", url: baseUrl }],
  creator: "Rafid Dwi Prakoso",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Rafid Dwi Prakoso Portfolio",
    title: "Rafid Dwi Prakoso | Full-Stack & Game Developer",
    description:
      "Software and game developer from Bogor building web apps with Next.js, Laravel, Go, and games in Unity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafid Dwi Prakoso | Full-Stack & Game Developer",
    description:
      "Software and game developer from Bogor building web apps with Next.js, Laravel, Go, and games in Unity.",
    creator: "@rafiddwiprakoso",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "aOLUOLf-UyAsjuMhWdQAWM4xOHrVs3xc0siw3qJJAHQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased leading-relaxed overflow-x-hidden bg-[#f6f4ef] text-[#141413] dark:bg-[#0b0b0c] dark:text-[#ece8df] selection:bg-amber-500/30 selection:text-amber-200">
        <LanguageProvider>
          <TopProgressBar />
          {children}
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
