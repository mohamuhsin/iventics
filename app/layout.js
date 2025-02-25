import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Whatsapp from "@/components/WhatsApp/Whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Iventics Technologies",
  description: "Simplifying Lives Digitally",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Whatsapp />
      </body>
    </html>
  );
}
