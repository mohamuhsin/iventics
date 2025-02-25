import { Montserrat } from "next/font/google";
import "./globals.css";
import Whatsapp from "@/components/WhatsApp/Whatsapp";

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
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        <Whatsapp />
      </body>
    </html>
  );
}
