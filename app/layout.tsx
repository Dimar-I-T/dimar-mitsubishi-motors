import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: "Dimar Mitsubishi Motorsport",
  description: "This is the REAL Mitsubisi Motorsport",
};

const notoSansJP = localFont({
  src: '../public/fonts/NotoSansJP-VariableFont_wght.ttf',
  variable: "--font-noto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSansJP.variable} h-full antialiased`}
    >
      <body className="font-noto min-h-full flex flex-col">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
