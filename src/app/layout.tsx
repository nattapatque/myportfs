import type { Metadata } from "next";
import "./globals.css";
import RootLayoutClient from "../components/layoutComponents/RootLayoutClient";

export const metadata: Metadata = {
  title: "My Port",
  description: "Welcome to my personal portfolio.",
};

export default function RootLayout(
  {children}: Readonly<{children: React.ReactNode;}>
) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Sarabun:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background">
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}