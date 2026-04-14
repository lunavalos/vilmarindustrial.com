import { CheckCircle2, Factory, Zap, Target, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import styles from "./MachinerySection.module.css";

const machinery = [
  "Erosionadora de hilo",
  "Centros de Maquinados",
  "Torno Convencional",
  "Fresa Convencional",
  "Rectificadora Plana",
  "Rectificadora Cilíndrica",
  "Máquinas para soldar"
];

const MachinerySection = () => {
  return (
    <section className={styles.machinery} id="maquinaria">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.contentCol}>
            <p className={styles.subtitle}>Tecnología de Vanguardia</p>
            <h2 className={styles.title}>Maquinaria y Capacidad Técnica</h2>
            <p className={styles.description}>
              Nuestras instalaciones están equipadas con tecnología avanzada para 
              garantizar precisión milimétrica y eficiencia en cada orden de trabajo.
            </p>

            <ul className={styles.list}>
              {machinery.map((item, index) => (
                <li key={index} className={styles.item}>
                  <CheckCircle2 size={20} className={styles.icon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <Factory size={32} />
                <div>
                  <h4>Industrial</h4>
                  <p>Enfoque 100%</p>
                </div>
              </div>
              <div className={styles.stat}>
                <Target size={32} />
                <div>
                  <h4>Precisión</h4>
                  <p>Certificada</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cardsCol}>
            <div className={styles.mainCard}>
              <div className={styles.cardHeader}>
                <Zap size={24} />
                <h3>Nuestra Tecnología</h3>
              </div>
              <p>
                Contamos con máquinas CNC para realizar cortes y procesos de maquinado 
                con alta precisión, además de equipos de pailería especializados.
              </p>
              <div className={styles.tag}>
                Expertos en Metalmecánica
              </div>
            </div>
            
            <div className={styles.secondaryCard}>
              <h3>Presencia en México y Chile</h3>
              <p>Operaciones activas en Coahuila y Nuevo León, con representación en Santiago, Chile.</p>
              <Link href="/contacto" className={styles.link}>
                Conocer Cobertura <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachinerySection;
