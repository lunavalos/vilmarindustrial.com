"use client";

import Image from "next/image";
import styles from "./Distributors.module.css";

const distributors = [
  { name: "Ansell", logo: "/images/distribuidor/Ansell.webp" },
  { name: "Lincoln Electric", logo: "/images/distribuidor/lincoln.webp" },
  { name: "MSA", logo: "/images/distribuidor/msa.png" },
  { name: "Riverline", logo: "/images/distribuidor/Riverline.webp" }
];

const Distributors = () => {
  // Triple the list to ensure it covers the screen width for the animation
  const tickerItems = [...distributors, ...distributors, ...distributors, ...distributors];

  return (
    <section className={styles.distributors}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subtitle}>Confianza y Calidad</p>
          <h2 className={styles.title}>Distribuidor Autorizado</h2>
        </div>
        
        <div className={styles.ticker}>
          <div className={styles.tickerTrack}>
            {tickerItems.map((dist, index) => (
              <div key={index} className={styles.carouselItem}>
                <div className={styles.clientCard}>
                  <div className={styles.logoWrapper}>
                    <Image 
                      src={dist.logo} 
                      alt={dist.name} 
                      width={150} 
                      height={80} 
                      className={styles.logo}
                    />
                  </div>
                  <span className={styles.clientName}>{dist.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distributors;
