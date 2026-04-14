import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import { Settings, Ruler, Box, Zap, CheckCircle2 } from "lucide-react";
import styles from "./Maquinados.module.css";

const benefits = [
  { title: "Alta Precisión", text: "Calidad superior en cada pieza fabricada para sectores críticos.", icon: <Ruler size={24} /> },
  { title: "Eficiencia", text: "Procesos automatizados para una reducción significativa en tiempos.", icon: <Zap size={24} /> },
  { title: "Proyectos Personalizados", text: "Adaptabilidad total a los requerimientos técnicos y planos.", icon: <Settings size={24} /> },
];

const materials = [
  "Acero inoxidable", "Aluminio", "Bronce", "Plásticos industriales (Delrin, Teflón, Nylon)"
];

const steps = [
  "Análisis del plano o requerimiento técnico.",
  "Selección del material adecuado.",
  "Programación CNC y configuración de maquinaria.",
  "Producción y control de calidad rigoroso."
];

export default function Maquinados() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero 
          title="Máquinados de Alta Precisión" 
          subtitle="Transformamos materias primas en soluciones de ingeniería precisas para la industria global."
        />

        <section className={styles.intro}>
          <div className="container">
            <div className={styles.introGrid}>
              <div className={styles.textCol}>
                <h2 className={styles.sectionTitle}>Nuestra Capacidad</h2>
                <p>
                  Los máquinados son procesos industriales que permiten transformar materias primas en 
                  piezas precisas mediante el uso de maquinaria especializada. En VILMAR, realizamos 
                  servicios de maquinado con alta precisión para satisfacer las necesidades de diversos 
                  sectores, destacando especialmente el automotriz.
                </p>
                <div className={styles.benefitsGrid}>
                  {benefits.map((b, i) => (
                    <div key={i} className={styles.benefitItem}>
                      <div className={styles.benefitIcon}>{b.icon}</div>
                      <div>
                        <h4>{b.title}</h4>
                        <p>{b.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.imgCol}>
                <Image 
                  src="/images/productos/maquinados/maquinado2.webp" 
                  alt="Proceso de Maquinado" 
                  width={600} 
                  height={500} 
                  className={styles.mainImg}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.processSection}>
          <div className="container">
            <div className={styles.processGrid}>
              <div className={styles.materialsCard}>
                <h3><Box size={24} /> Materiales</h3>
                <p>Contamos con experiencia en el maquinado de variados materiales industriales:</p>
                <ul className={styles.list}>
                  {materials.map((m, i) => (
                    <li key={i}><CheckCircle2 size={18} /> {m}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.stepsCard}>
                <h3>Nuestro Proceso</h3>
                <div className={styles.steps}>
                  {steps.map((s, i) => (
                    <div key={i} className={styles.stepItem}>
                      <span className={styles.stepNum}>{i + 1}</span>
                      <p>{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
