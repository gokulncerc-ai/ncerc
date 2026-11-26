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
  title: "Nehru College of Engineering and Research Centre",
  description:
    "NCERC, Pampady - an autonomous engineering institution affiliated to APJ Abdul Kalam Technological University.",
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