import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import styles from "./Productos.module.css";

const categories = [
  {
    id: "cascos",
    title: "Cascos de Seguridad",
    image: "/images/productos/productos%20index/cascos/flamin%20casco%20ala%20completa.webp",
    description: "Protección craneal certificada para diversos entornos de trabajo rudo."
  },
  {
    id: "chalecos",
    title: "Chalecos de Seguridad",
    image: "/images/productos/productos%20index/chalecos/CH.webp",
    description: "Visibilidad máxima y seguridad para brigadistas y supervisores."
  },
  {
    id: "lentes",
    title: "Protección Ocular",
    image: "/images/productos/productos%20index/lentes%20de%20seguridad.webp",
    description: "Lentes de seguridad con tecnología antivaho y protección UV premium."
  },
  {
    id: "zapatos",
    title: "Calzado Industrial",
    image: "/images/productos/productos%20index/zapatos%20de%20seguridad.webp",
    description: "Zapatos y botas con casquillo y suelas antiderrapantes de alta resistencia."
  },
  {
    id: "guantes",
    title: "Guantes de Seguridad",
    image: "/images/productos/productos%20index/guantes%20de%20seguridad.webp",
    description: "Protección manual contra cortes, químicos y riesgos mecánicos."
  },
  {
    id: "auditivos",
    title: "Protección Auditiva",
    image: "/images/productos/productos%20index/auditivo.webp",
    description: "Tapones y orejeras para la reducción efectiva de ruido industrial."
  },
  {
    id: "respiratoria",
    title: "Protección Respiratoria",
    image: "/images/productos/productos%20index/proteccion%20respiratoria.webp",
    description: "Respiradores y mascarillas para ambientes con polvos, gases y vapores."
  },
  {
    id: "ropa-antiestatica",
    title: "Ropa Antiestática",
    image: "/images/productos/productos%20index/ropa%20antiestatica.webp",
    description: "Prendas ESD para control de descargas en ambientes sensibles."
  },
  {
    id: "uniformes",
    title: "Ropa de Trabajo y Uniformes",
    description: "Camisolas, overoles y pantalones industriales de alta durabilidad.",
    image: "/images/productos/productos%20index/ropa%20de%20trabajo%20y%20uniformes.webp"
  },
  {
    id: "ropa-medica",
    title: "Ropa Médica y Desechable",
    description: "Batas, cubrezapatos y prendas desechables para higiene y seguridad.",
    image: "/images/productos/productos%20index/ropa%20medico.webp"
  },
  {
    id: "pintura",
    title: "Consumibles para Pintura",
    description: "Lijas, trapos especializados y accesorios para procesos de pintado.",
    image: "/images/productos/productos%20index/consumible%20para%20pintura.webp"
  }
];

export default function ProductosPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero 
          title="Catálogo de Productos Industrial" 
          subtitle="Explora nuestra gama completa de soluciones en EPP y suministros técnicos de alta calidad."
        />

        <section className={styles.categories}>
          <div className="container">
            <h2 className="sr-only">Nuestras Categorías de Productos</h2>
            <div className={styles.grid}>
              {categories.map((cat) => (
                <Link key={cat.id} href={`/productos/${cat.id}`} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={cat.image} 
                      alt={`Categoría ${cat.title} - VILMAR Industrial`} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.image}
                    />
                    <div className={styles.overlay}>
                      <span className={styles.viewMore}>Ver Productos <ChevronRight size={18} /></span>
                    </div>
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.cardTitle}>{cat.title}</h3>
                    <p className={styles.cardDesc}>{cat.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
