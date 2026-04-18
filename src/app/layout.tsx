import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KORA Blooms | Květinové studio Praha · Doručení do 1 hodiny",
  description:
    "Ručně vázané kytice, květinové boxy a dekor v pražském Karlíně. Doručení do 1 hodiny po Praze, posíláme po celé ČR. Beyond flowers, emotions bloom.",
  keywords:
    "KORA Blooms, kora.blooms, květiny Praha, květiny Karlín, kytice Praha, květinové boxy Praha, doručení květin Praha, flower delivery Prague, KORA Blooms Prague",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
