// src/app/layout.tsx
import type { Metadata } from "next";
import "@/app/globals.css"; // Import Tailwind styles

import Footer from "./components/Footer";
import Cursor from "./components/ui/Cursor";

export const metadata: Metadata = {
  title: "Nahom | Portfolio",
  description: "Web Designer and Front-End Developer Portfolio",
};
import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // choose the weights you want
  variable: '--font-fira-code',  // optional, if using Tailwind or CSS vars
  display: 'swap',
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={firaCode.className}>
        <div className="hidden md:block">
          <Cursor />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
