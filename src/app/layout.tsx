import type { Metadata } from "next";
import { inter } from "@/utils/fonts";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";


// Define metadata properly
export const metadata: Metadata = {
  title: "Parsa Sedghi Portfolio",
  description: "Welcome to Parsa Sedghi's portfolio website",
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
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
