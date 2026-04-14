import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={styles.about} id="sobre-nosotros">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/imagenes variadas/logoN.webp"
                alt="VILMAR Instalaciones"
                width={600}
                height={500}
                className={styles.mainImg}
              />
              <div className={styles.experienceCard}>
                <span className={styles.expNumber}>8+</span>
                <span className={styles.expText}>Años de<br />Experiencia</span>
              </div>
            </div>
          </div>

          <div className={styles.contentCol}>
            <p className={styles.subtitle}>¿Quiénes Somos?</p>
            <h2 className={styles.title}>VILMAR Industrial: Calidad y Precisión desde 2016</h2>
            <p className={styles.description}>
              VILMAR es una empresa 100% mexicana ubicada en Saltillo, Coahuila.
              Nuestro principal objetivo es satisfacer las necesidades de nuestros clientes,
              garantizando nuestro trabajo con calidad y buen funcionamiento en cada intervención.
            </p>

            <ul className={styles.features}>
              <li>
                <CheckCircle2 className={styles.icon} />
                <span>Fabricación de piezas para mantenimiento industrial.</span>
              </li>
              <li>
                <CheckCircle2 className={styles.icon} />
                <span>Fabricación de pailería (racks, carros, mesas de trabajo).</span>
              </li>
              <li>
                <CheckCircle2 className={styles.icon} />
                <span>Servicios de mantenimiento para asegurar la continuidad productiva.</span>
              </li>
              <li>
                <CheckCircle2 className={styles.icon} />
                <span>Compromiso con la exactitud y plazos de entrega.</span>
              </li>
            </ul>

            <div className={styles.btns}>
              <Link href="/nosotros" className="btn btn-primary">
                Conocer Más
              </Link>
              <Link href="/productos" className="btn btn-outline">
                Ver Productos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
