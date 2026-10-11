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

export const metadata = {
  title: "My Portfolio",
  description: "New Portfolio use next.js",
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
