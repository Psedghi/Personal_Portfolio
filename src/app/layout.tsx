import type { Metadata } from "next";
import { inter, spaceGrotesk, jetbrainsMono } from "@/utils/fonts";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Parsa Sedghi — Software Engineer",
  description:
    "Parsa Sedghi is a software engineer building at the intersection of technology and business.",
  icons: {
    icon: "/tab_icon.png",
    shortcut: "/tab_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} flex min-h-screen flex-col`}
      >
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
