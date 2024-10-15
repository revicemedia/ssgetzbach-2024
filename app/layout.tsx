import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import openGraphImage from "./favicon.ico";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Wartung from "@/components/Wartung/Wartung";

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
  const wartung = true;

  return (
    <html lang="en">
      <body className={outfit.className}>
        {!wartung ? (
          <>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </>
        ) : (
          <>
            <Wartung />
          </>
        )}
      </body>
    </html>
  );
}
