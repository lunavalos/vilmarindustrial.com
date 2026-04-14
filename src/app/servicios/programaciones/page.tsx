import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import { Cpu, Network, Activity, Monitor, Database, Settings } from "lucide-react";
import styles from "./Programaciones.module.css";

const services = [
  {
    title: "PLCs Allen Bradley",
    desc: "Programación experta para procesos y máquinas, asegurando eficiencia y confiabilidad.",
    icon: <Cpu size={32} />
  },
  {
    title: "Redes Industriales",
    desc: "Configuración de redes como Ethernet/IP y DeviceNet para comunicación robusta.",
    icon: <Network size={32} />
  },
  {
    title: "Drives y Servodrives",
    desc: "Ajuste y configuración de drives para control preciso de motores y movimiento.",
    icon: <Activity size={32} />
  },
  {
    title: "Sistemas HMI",
    desc: "Interfaces hombre-máquina utilizando FactoryTalk View y Rockwell Automation.",
    icon: <Monitor size={32} />
  }
];

export default function Programaciones() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero 
          title="Programación Industrial" 
          subtitle="Expertos en automatización y control para procesos industriales críticos."
        />

        <section className={styles.details}>
          <div className="container">
            <div className={styles.mainGrid}>
              <div className={styles.introContent}>
                <h2 className={styles.sectionTitle}>Nuestras Soluciones</h2>
                <p>
                  En VILMAR nos especializamos en la integración de sistemas de automatización 
                  de alta complejidad. Nuestro equipo tiene amplia experiencia en plataformas 
                  lideres del mercado, garantizando soluciones que optimizan la productividad.
                </p>
                
                <div className={styles.servicesGrid}>
                  {services.map((s, i) => (
                    <div key={i} className={styles.serviceItem}>
                      <div className={styles.iconBox}>{s.icon}</div>
                      <div>
                        <h4>{s.title}</h4>
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.ignitionCard}>
                <div className={styles.ignitionIcon}>
                  <Database size={48} />
                </div>
                <h3>Especialistas en Ignition</h3>
                <p>Trabajamos con Ignition para crear sistemas SCADA flexibles, escalables y orientados a resultados.</p>
                <ul className={styles.ignitionList}>
                  <li>
                    <Settings size={18} />
                    <span>Integración de sistemas y bases de datos SQL.</span>
                  </li>
                  <li>
                    <Settings size={18} />
                    <span>Monitoreo y control en tiempo real.</span>
                  </li>
                  <li>
                    <Settings size={18} />
                    <span>Análisis avanzados para toma de decisiones.</span>
                  </li>
                  <li>
                    <Settings size={18} />
                    <span>Consultas eficientes y optimización de respuesta.</span>
                  </li>
                </ul>
                <div className={styles.badge}>SCADA Expertos</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
