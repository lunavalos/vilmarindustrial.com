import Image from "next/image";
import styles from "./ClientsSection.module.css";

const clients = [
  { name: "Daimler", logo: "/images/clientes/daimler.webp" },
  { name: "GHSP", logo: "/images/clientes/GHSP.webp" },
  { name: "Stellantis", logo: "/images/clientes/stellantis.webp" },
  { name: "Grupo Antolin", logo: "/images/clientes/grupo antolin.webp" },
  { name: "CIE PEMSA", logo: "/images/clientes/cie pemsa saltillo.webp" },
  { name: "Windsor Machine", logo: "/images/clientes/WINDSOR MACHINE de MEXICO.webp" }
];

const ClientsSection = () => {
  return (
    <section className={styles.clients} id="clientes">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.subtitle}>Confían en nosotros</p>
          <h2 className={styles.title}>Nuestros Clientes</h2>
          <p className={styles.description}>
            Trabajamos con empresas líderes globales en la industria automotriz y manufacturera.
          </p>
        </div>

        <div className={styles.ticker}>
          <div className={styles.tickerTrack}>
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div key={index} className={styles.carouselItem}>
                <div className={styles.clientCard}>
                  <div className={styles.logoWrapper}>
                    <Image 
                      src={client.logo} 
                      alt={client.name} 
                      width={150} 
                      height={80} 
                      className={styles.logo}
                    />
                  </div>
                  <span className={styles.clientName}>{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
