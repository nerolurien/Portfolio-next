import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  variable: "--font-geist-mono",
  subsets: ["latin"], weight: ["400"]
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rafid-three.vercel.app/";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Rafid Dwi Prakoso — Web Developer & Creative Coder",
    template: "%s | Rafid Dwi Prakoso",
  },
  description:
    "Personal portfolio of Rafid Dwi Prakoso. Building thoughtful web products, operational dashboards, and interactive experiences with Next.js, Laravel, and Unity.",
  keywords: [
    "Rafid Dwi Prakoso",
    "Portfolio",
    "Full-Stack Developer",
    "Web Developer",
    "Game Developer",
    "Next.js",
    "React",
    "Laravel",
    "Unity",
    "Creative Coder",
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
    title: "Rafid Dwi Prakoso — Web Developer & Creative Coder",
    description:
      "Building thoughtful web products, operational dashboards, and interactive experiences with Next.js, Laravel, and Unity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafid Dwi Prakoso — Web Developer & Creative Coder",
    description:
      "Building thoughtful web products, operational dashboards, and interactive experiences with Next.js, Laravel, and Unity.",
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

import { LanguageProvider } from "./context/LanguageContext";
import TopProgressBar from "./components/TopProgressBar";

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <LanguageProvider>
          <TopProgressBar />
          {children}
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
