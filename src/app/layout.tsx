import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import { Lato, Playfair_Display } from "next/font/google";
import Topmenu from "../components/topmenuComponents/Topmenu";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nattapat-Que",
  description: "Welcome to Que's personal portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${playfair.variable} antialiased`}>
        <div className="fixed inset-0 -z-50 w-full h-full">
          <Image
            src="/images/bg.png" 
            alt="Global Background"
            fill
            priority 
            className="object-cover opacity-80"
          />
        </div>

        <div className="relative z-0">
          <Topmenu />
          {children}
        </div>
      </body>
    </html>
  );
}
