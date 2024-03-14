
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google",
  description: "Google clone, built with Next.js and Tailwind CSS",
 
}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://e7.pngegg.com/pngimages/760/624/png-clipart-google-logo-google-search-advertising-google-company-text.png"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
