// app/layout.js
import { Montserrat } from "next/font/google";
import "./globals.css";
import Whatsapp from "@/components/WhatsApp/Whatsapp";
import { Analytics } from "@vercel/analytics/react";
import Providers from "./store/providers";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Iventics Technologies",
  description: "Simplifying Lives Digitally",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${montserrat.variable} antialiased`}>
        <Providers>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Whatsapp />
          <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
