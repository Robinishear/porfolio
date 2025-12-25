import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavOutline from "./NavOutline";
import Footer from "./Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white`}>
        <NavOutline />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}