import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ImageSlider from "@/components/imageSlider/ImageSlider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YP뇌건강연구소",
  description: "YP뇌건강연구소",
  icons: {
    icon: "/YP-logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
