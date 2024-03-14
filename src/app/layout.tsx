
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://e7.pngegg.com/pngimages/760/624/png-clipart-google-logo-google-search-advertising-google-company-text.png"></link>
        <meta property="og:url" content="https://google-opensource-clone.vercel.app/" />
        <meta property="og:title" content="Google" />
        <meta property="og:description"
          content="Buscador, clon de google." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:image" content="https://e7.pngegg.com/pngimages/760/624/png-clipart-google-logo-google-search-advertising-google-company-text.png" />
        <title>Google</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
