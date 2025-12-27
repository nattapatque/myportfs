import type { Metadata } from "next";
import "./globals.css";
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
        <div className="fixed inset-0 -z-50 w-full h-full bg-[#0a0a0c] overflow-hidden">
        
          <div className="absolute top-0 left-0 w-[500px] h-[500px] 
            bg-purple-1 rounded-full mix-blend-screen 
            filter blur-[100px] opacity-30 animate-blob" 
          />
          
          <div className="absolute top-50 right-0 w-[500px] h-[500px] 
            bg-yellow-1 rounded-full mix-blend-screen 
            filter blur-[100px] opacity-20 animate-blob animation-delay-2000" 
          />
          
          <div className="absolute -bottom-8 left-20 w-[600px] h-[600px] 
            bg-purple-2 rounded-full mix-blend-screen 
            filter blur-[120px] opacity-30 animate-blob animation-delay-4000" 
          />

        </div>

        <div className="fixed top-0 left-0 w-full z-50">
          <Topmenu />
        </div>

        <div className="relative z-0">
          {children}
        </div>
      </body>
    </html>
  );
}
