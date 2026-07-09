import type { Metadata } from "next";
import { inter, spaceGrotesk, jetbrainsMono } from "@/utils/fonts";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = "https://parsasedghi.com";
const SITE_TITLE = "Parsa Sedghi — Software Engineer";
const SITE_DESCRIPTION =
  "Parsa Sedghi is a software engineer building at the intersection of technology and business.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/tab_icon.png",
    shortcut: "/tab_icon.png",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_TITLE,
    images: [
      {
        url: "/profile-picture.jpg",
        width: 1200,
        height: 1200,
        alt: "Parsa Sedghi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/profile-picture.jpg"],
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
