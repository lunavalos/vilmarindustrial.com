import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroVideo from "@/components/home/HeroVideo";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import MachinerySection from "@/components/home/MachinerySection";
import ClientsSection from "@/components/home/ClientsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VILMAR Industrial | Soluciones en Mantenimiento y Maquinados en Saltillo",
  description: "VILMAR Industrial ofrece servicios de mantenimiento, maquinados CNC de alta precisión, pailería y distribución de EPP en Saltillo, Coahuila. Calidad industrial desde 2016.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroVideo />
        
        <div id="servicios">
          <ServicesSection />
        </div>

        <div id="nosotros">
          <AboutSection />
        </div>
        
        <div id="maquinaria">
          <MachinerySection />
        </div>
        
        <div id="clientes">
          <ClientsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
