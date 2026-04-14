import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import Distributors from "@/components/home/Distributors";
import Image from "next/image";
import { Target, Eye, Award, CheckCircle2, Settings, Layers, Cpu, Globe, MapPin, Zap, ShieldCheck } from "lucide-react";
import styles from "./Nosotros.module.css";

export default function Nosotros() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero 
          title="Sobre Nosotros" 
          subtitle="Conoce la historia, misión y visión de VILMAR Industrial. Nuestra pasión es la excelencia técnica."
        />

        <section className={styles.whoWeAre}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.content}>
                <h2 className={styles.sectionTitle}>Nuestra Historia</h2>
                <p>
                  VILMAR es una empresa 100% mexicana ubicada en Saltillo, Coahuila, fundada en el año 2016. 
                  Desde nuestros inicios, nos hemos enfocado en brindar soluciones integrales para la industria, 
                  combinando experiencia técnica con un firme compromiso con la calidad.
                </p>
                <p>
                  Contamos con una variedad de máquinas de última generación necesarias para brindar a nuestros 
                  clientes la seguridad y calidad que sus instalaciones requieren. Nuestro principal objetivo 
                  es satisfacer las necesidades de nuestros clientes a su entera satisfacción, garantizando 
                  cada trabajo con precisión y buen funcionamiento.
                </p>
                
                <div className={styles.statsGrid}>
                  <div className={styles.statItem}>
                    <Award size={32} />
                    <h4>Excelencia</h4>
                    <p>En cada pieza</p>
                  </div>
                  <div className={styles.statItem}>
                    <CheckCircle2 size={32} />
                    <h4>Compromiso</h4>
                    <p>Con plazos y calidad</p>
                  </div>
                  <div className={styles.statItem}>
                    <Zap size={32} />
                    <h4>+500</h4>
                    <p>Partes fabricadas</p>
                  </div>
                </div>
              </div>

              <div className={styles.imageCol}>
                <Image 
                  src="/images/imagenes variadas/logoN.webp" 
                  alt="Equipo VILMAR" 
                  width={600} 
                  height={450} 
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.missionVision}>
          <div className="container">
            <div className={styles.cardsGrid}>
              <div className={styles.missionCard}>
                <div className={styles.iconCircle}>
                  <Target size={32} />
                </div>
                <h3>Nuestra Misión</h3>
                <p>
                  Proveer materiales y equipos para la industria, con respaldo de ingeniería, 
                  calidad, servicio, rapidez, precios justos e inventarios adecuados bajo 
                  normas y requerimientos que dan soluciones a las necesidades del cliente.
                </p>
              </div>

              <div className={styles.visionCard}>
                <div className={styles.iconCircle}>
                  <Eye size={32} />
                </div>
                <h3>Nuestra Visión</h3>
                <p>
                  Ser líderes del mercado local con la mayor oferta de servicios de 
                  metalmecánica, junto con el compromiso continuo de satisfacer al cliente, 
                  garantizar la calidad, control y mejora en todos nuestros procesos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.techSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Nuestra Tecnología</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px" }}>
              Contamos con una amplia gama de máquinas de última generación para garantizar 
              la máxima precisión en todos nuestros procesos industriales.
            </p>

            <div className={styles.techGrid}>
              <div className={styles.techCard}>
                <Settings size={40} color="var(--primary)" />
                <h4>Máquinas CNC</h4>
                <p>Control Numérico Computarizado para realizar cortes y procesos de maquinado con alta precisión.</p>
              </div>
              <div className={styles.techCard}>
                <Layers size={40} color="var(--primary)" />
                <h4>Tornos</h4>
                <p>Especializados en procesos de torneado y mecanizado de piezas cilíndricas con acabados perfectos.</p>
              </div>
              <div className={styles.techCard}>
                <Cpu size={40} color="var(--primary)" />
                <h4>Fresadoras</h4>
                <p>Capacidad para procesos de fresado y mecanizado de piezas planas y piezas complejas.</p>
              </div>
              <div className={styles.techCard}>
                <ShieldCheck size={40} color="var(--primary)" />
                <h4>Equipos de Pailería</h4>
                <p>Estructuras y componentes de pailería para el mecanizado de piezas industriales de gran escala.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.presenceSection}>
          <div className="container">
            <div className={styles.presenceGrid}>
              <div className={styles.presenceContent}>
                <h2 className={styles.sectionTitle}>Presencia en México y Chile</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", marginBottom: "2.5rem" }}>
                  Nuestra capacidad operativa nos permite atender proyectos a nivel nacional e internacional, 
                  asegurando la misma calidad y compromiso en cada región donde operamos.
                </p>

                <div className={styles.regions}>
                  <div className={styles.regionItem}>
                    <h4><MapPin size={20} /> México</h4>
                    <ul>
                      <li><CheckCircle2 size={16} className={styles.checkIcon} /> Coahuila</li>
                      <li><CheckCircle2 size={16} className={styles.checkIcon} /> Nuevo León</li>
                    </ul>
                  </div>
                  <div className={styles.regionItem}>
                    <h4><Globe size={20} /> Chile</h4>
                    <ul>
                      <li><CheckCircle2 size={16} className={styles.checkIcon} /> Representación en Santiago</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.imageCol}>
                <Image 
                  src="/images/imagenes variadas/servicio1.jpg" 
                  alt="Operaciones VILMAR" 
                  width={600} 
                  height={400} 
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </section>
        
        <Distributors />
      </main>
      <Footer />
    </>
  );
}
