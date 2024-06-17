import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import openGraphImage from "./favicon.ico";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const outfit = Outfit({ subsets: [] });

export const metadata: Metadata = {
  title: "SSG Etzbach",
  description: "Herzlich willkommen auf der Webseite der SSG Etzbach.",
  openGraph: {
    ...openGraphImage,
    title: "Platzhalter",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
