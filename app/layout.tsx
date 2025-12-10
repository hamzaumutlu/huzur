import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"; // elegant serif + clean sans
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Huzur Sokağı Organizasyon | Premium Davet & Etkinlik",
  description: "Kız isteme, Söz, Nişan, Doğum Günü ve size özel muhteşem organizasyonlar. Hayallerinizdeki günü tasarlıyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-stone-50 text-stone-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
