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
    image: "/images/productos/productos index/cascos/flamin casco ala completa1.webp",
    description: "Protección craneal certificada para diversos entornos de trabajo rudo."
  },
  {
    id: "chalecos",
    title: "Chalecos de Seguridad",
    image: "/images/fotos nuevas/chalecos/chaleco portada.webp",
    description: "Visibilidad máxima y seguridad para brigadistas y supervisores."
  },
  {
    id: "lentes",
    title: "Protección Ocular",
    image: "/images/fotos nuevas/lentes de seguridad/Sobrelentes 3M SecureFit.webp",
    description: "Lentes de seguridad con tecnología antivaho y protección UV premium."
  },
  {
    id: "zapatos",
    title: "Calzado Industrial",
    image: "/images/productos/productos index/zapatos de seguridad.webp",
    description: "Zapatos y botas con casquillo y suelas antiderrapantes de alta resistencia."
  },
  {
    id: "guantes",
    title: "Guantes de Seguridad",
    image: "/images/productos/productos index/guantes de seguridad.webp",
    description: "Protección manual contra cortes, químicos y riesgos mecánicos."
  },
  {
    id: "auditivos",
    title: "Protección Auditiva",
    image: "/images/fotos nuevas/auditivos/3M PELTOR Optime Orejeras 98 H9A.webp",
    description: "Tapones y orejeras para la reducción efectiva de ruido industrial."
  },
  {
    id: "respiratoria",
    title: "Protección Respiratoria",
    image: "/images/productos/productos index/proteccion respiratoria.webp",
    description: "Respiradores y mascarillas para ambientes con polvos, gases y vapores."
  },
  {
    id: "ropa-antiestatica",
    title: "Ropa Antiestática (ESD)",
    image: "/images/fotos nuevas/Ropa Antiestática/overol.webp",
    description: "Prendas especializadas para control de descargas en ambientes sensibles."
  },
  {
    id: "uniformes",
    title: "Ropa de Trabajo y Uniformes",
    description: "Camisolas, overoles y pantalones industriales de alta durabilidad.",
    image: "/images/productos/productos index/ropa de trabajo y uniformes.webp"
  },
  {
    id: "ropa-medica",
    title: "Ropa Médica y Desechable",
    description: "Batas, cubrezapatos y prendas desechables para higiene y seguridad.",
    image: "/images/productos/productos index/ropa medico.webp"
  },
  {
    id: "pintura",
    title: "Consumibles para Pintura",
    description: "Lijas, trapos especializados y accesorios para procesos de pintado.",
    image: "/images/productos/productos index/consumible para pintura.webp"
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
