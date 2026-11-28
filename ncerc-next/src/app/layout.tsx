import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";

import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop/page";
import CtaButtons from "@/components/CtaButtons/page";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Best Engineering Colleges in Kerala | Top B.Tech Engineering Colleges in Thrissur",
  description:
    "Nehru College of Engineering & Research Centre, a NAAC accredited autonomous college, ranks among Kerala’s Best engineering colleges, offering B.Tech, M.Tech, MCA and MBA admissions.",
  keywords: ["Private engineering colleges in kerala",
    "Best engineering colleges in kerala",
    "B.Tech Colleges in Kerala",
    "Best Engineering Colleges in Kerala",
    "Engineering College in Kerala",
    "Top B.Tech Colleges in Kerala",
    "Engineering Colleges in thrissur",
    "Autonomous Engineering Colleges in Kerala"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sourceSerif.variable} antialiased`}>
        {children}
        <ScrollToTop />
        <CtaButtons />

      </body>
    </html>
  );
}