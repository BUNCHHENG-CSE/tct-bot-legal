import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import CopyrightYear from "./components/CopyrightYear";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TCT-Bot | Legal Center",
  description: "Terms of Service and Privacy Policy for TCT-Bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* h-screen overflow-hidden locks the overall page from scrolling */}
      <body className={`${inter.className} h-screen overflow-hidden flex flex-col antialiased`}>
        
        {/* Navigation Bar (shrink-0 prevents it from shrinking) */}
        <nav className="shrink-0 w-full border-b border-white/10 bg-[#1e1f22]/70 backdrop-blur-md z-50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 overflow-hidden rounded-full ring-2 ring-[#5865F2]/50 group-hover:ring-[#5865F2] transition-all duration-300">
                <Image src="/tct-bot-logo.png" alt="TCT-Bot Logo" fill className="object-cover" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">TCT-Bot</span>
            </Link>
            <div className="flex gap-6 text-sm font-medium">
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </nav>

        {/* Main Content Area (overflow-hidden forces children to handle their own scrolling) */}
        <main className="flex-grow w-full max-w-6xl mx-auto p-6 flex flex-col overflow-hidden">
          {children}
        </main>

        {/* Footer (shrink-0 keeps it fixed at the bottom) */}
        <footer className="shrink-0 border-t border-white/10 bg-[#1e1f22]/50 py-4 text-center text-xs text-gray-500">
          <p><CopyrightYear /></p>
        </footer>
      </body>
    </html>
  );
}