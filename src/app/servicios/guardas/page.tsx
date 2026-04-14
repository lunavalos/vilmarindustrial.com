import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import { Shield, Cog, CheckSquare, Package, ChevronRight } from "lucide-react";
import styles from "./Guardas.module.css";

const guards = [
  { 
    title: "Guardas Metálicas", 
    desc: "Protección resistente fabricada con acero de alta calidad frente a impactos y partículas.",
    image: "/images/Tipos de guardados/G1.webp" 
  },
  { 
    title: "Guardas tipo Armadillo", 
    desc: "Flexibles y resistentes, ideales para proteger movimientos lineales y mecanismos expuestos.",
    image: "/images/Tipos de guardados/G2.webp" 
  },
  { 
    title: "Guardas Fuelle", 
    desc: "Telescópicas que se contraen como fuelle, protegiendo ejes de polvo y virutas.",
    image: "/images/Tipos de guardados/G3.webp" 
  },
  { 
    title: "Fuelles Blindados", 
    desc: "Solución robusta contra impactos, chispas y partículas abrasivas extremas.",
    image: "/images/Tipos de guardados/G4.webp" 
  },
  { 
    title: "Cortinas Retráctiles", 
    desc: "Versatilidad en espacios reducidos, combinando seguridad y funcionalidad compacta.",
    image: "/images/Tipos de guardados/G5.webp" 
  },
  { 
    title: "Guardas Husillo", 
    desc: "Protección específica para ejes roscados, manteniendo la precisión mecánica.",
    image: "/images/Tipos de guardados/G6.webp" 
  },
  { 
    title: "Unidades de Pared", 
    desc: "Sistemas montados sobre estructuras para resguardar zonas de trabajo completas.",
    image: "/images/Tipos de guardados/G7.webp" 
  },
  { 
    title: "Cortinas de Aluminio", 
    desc: "Rígidas y estéticas, ideales para protección con bajo mantenimiento.",
    image: "/images/Tipos de guardados/G8.webp" 
  }
];

const supplies = [
  { title: "PU83 y PU95", desc: "Poliuretano para uso regular y seco." },
  { title: "Poliuretano NBR", desc: "Ideal para centros de maquinado tipo torno." },
  { title: "Selladores Vulcanizados", desc: "Hechos a medida para superficies irregulares." },
  { title: "Escobillas de Nylon", desc: "Barren y contienen elementos sólidos y líquidos." }
];

export default function Guardas() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero 
          title="Guardas Telescópicas" 
          subtitle="Ingeniería, manufactura y reparación de sistemas de protección para maquinaria industrial."
        />

        <section className={styles.intro}>
          <div className="container">
            <div className={styles.introGrid}>
              <div className={styles.introText}>
                <h2 className={styles.sectionTitle}>¿Qué hacemos?</h2>
                <p>
                  Nos dedicamos a la ingeniería, manufactura, reparación y distribución de guardas móviles 
                  para centros de maquinado con control numérico y máquinas convencionales. 
                  Protegemos la integridad de sus equipos y operadores.
                </p>
                <div className={styles.whatAreGuards}>
                  <Shield size={24} className={styles.shieldIcon} />
                  <div>
                    <h4>Escudos de Protección</h4>
                    <p>
                      Las guardas protegen componentes internos de escoria sólida, solubles y refrigerantes, 
                      asegurando una vida útil más larga para su maquinaria.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.processCard}>
                <h3>Nuestro Proceso</h3>
                <ul className={styles.processList}>
                  <li><CheckSquare size={18} /> Asesoría Inicial</li>
                  <li><CheckSquare size={18} /> Selección de Material</li>
                  <li><CheckSquare size={18} /> Acompañamiento Técnico</li>
                  <li><CheckSquare size={18} /> Entrega e Instalación</li>
                  <li><CheckSquare size={18} /> Seguimiento Post-venta</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.guardsGridSection}>
          <div className="container">
            <h2 className={styles.sectionTitleCenter}>Tipos de Guardas</h2>
            <div className={styles.guardsGrid}>
              {guards.map((g, i) => (
                <div key={i} className={styles.guardCard}>
                  <div className={styles.guardImage}>
                    <Image src={g.image} alt={g.title} fill className={styles.img} />
                  </div>
                  <div className={styles.guardContent}>
                    <h4>{g.title}</h4>
                    <p>{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.supplies}>
          <div className="container">
            <div className={styles.suppliesHeader}>
              <h2 className={styles.sectionTitle}>Insumos y Consumibles</h2>
              <p>También disponibles para su venta, con tecnología alemana para asegurar la mejor calidad.</p>
            </div>
            <div className={styles.suppliesGrid}>
              {supplies.map((s, i) => (
                <div key={i} className={styles.supplyItem}>
                  <Package size={24} className={styles.supplyIcon} />
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
