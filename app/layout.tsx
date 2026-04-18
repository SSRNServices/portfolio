import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${personalInfo.fullName} | Senior Web Developer`,
  description: personalInfo.description,
  keywords: ["Web Developer", "React", "Next.js", "Portfolio", "Amine Codes"],
  authors: [{ name: personalInfo.fullName }],
  openGraph: {
    title: personalInfo.fullName,
    description: personalInfo.description,
    url: "https://amine-codes.vercel.app",
    siteName: personalInfo.fullName,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-white selection:bg-blue-500/30`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
