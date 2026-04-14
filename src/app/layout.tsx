import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "VILMAR Industrial | Mantenimiento, Maquinados y EPP en Saltillo",
  description: "VILMAR Industrial es líder en Saltillo, Coahuila. Ofrecemos soluciones integrales en mantenimiento industrial, fabricación de piezas CNC, EPP y servicios de metalmecánica de alta precisión desde 2016.",
  keywords: ["VILMAR Industrial", "Mantenimiento Industrial Saltillo", "Maquinados CNC", "EPP Saltillo", "Equipo de Protección Personal", "Metalmecánica Coahuila"],
  icons: {
    icon: "/favicon.png",
  },
};

import WhatsAppBubble from "@/components/shared/WhatsAppBubble";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        {children}
        <WhatsAppBubble />
      </body>
    </html>
  );
}
