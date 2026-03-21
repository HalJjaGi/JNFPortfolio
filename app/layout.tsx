import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "지원이와친구들",
    template: "%s | 지원이와친구들",
  },
  description: "개인과 팀의 성장을 기록하는 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Navigation */}
        <nav className="px-6 py-4 border-b border-neutral-100">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-sm font-medium hover:opacity-70 transition-opacity">
              지원이와친구들
            </Link>
            <div className="flex gap-6 text-sm text-neutral-500">
              <Link href="/members" className="hover:text-neutral-900 transition-colors">
                팀원
              </Link>
              <Link href="/projects" className="hover:text-neutral-900 transition-colors">
                프로젝트
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="px-6 py-8 border-t border-neutral-100">
          <div className="max-w-4xl mx-auto text-center text-sm text-neutral-400">
            © {new Date().getFullYear()} 지원이와친구들. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
