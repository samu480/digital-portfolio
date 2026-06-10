import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";
import { RGBBackground } from "@/components/RGBBackground";
import { SmoothScroll } from "@/components/smooth-scroll";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Samuel Müller | Creative Junior Developer",
  description:
    "Modernes 3D-Portfolio von Samuel Müller, Creative Junior Developer aus der Schweiz.",
  metadataBase: new URL("https://portfolio.local"),
  openGraph: {
    title: "Samuel Müller | Creative Junior Developer",
    description:
      "Webseiten, digitale Tools und kreative Softwarelösungen mit Design, Funktionalität und sauberem Code.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.variable} bg-ink font-sans text-white antialiased`}>
        <RGBBackground />
        <SmoothScroll />
        <Navigation />
        <PageTransition />
        {children}
        <Footer />
      </body>
    </html>
  );
}
