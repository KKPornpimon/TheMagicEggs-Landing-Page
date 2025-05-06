import { Geist, Geist_Mono, K2D } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const k2d = K2D({
  weight: "400",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Magic Eggs - Landing Page",
  description: "Landing page about the egg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${k2d.className} antialiased`}
      >
        <Navbar />
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
