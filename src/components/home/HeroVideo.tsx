"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./HeroVideo.module.css";

const HeroVideo = () => {
  const videoSrc = "/video/video banner 1.webm";
  // Fallback placeholder if file not found (optional for dev)
  const placeholderVideo = "https://assets.mixkit.co/videos/preview/strial-facility-at-night-with-lights-4835-largmixkit-indue.mp4";

  return (
    <section className={styles.hero}>
      <div className={styles.videoWrapper}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.video}
          poster="/images/imagenes variadas/trbajo7.webp" // Fallback image while video loads
        >
          <source src={videoSrc} type="video/mp4" />
          {/* Si el archivo local no existe, este segundo source es opcional o se puede usar para pruebas */}
          <source src={placeholderVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.innerContainer}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              VILMAR Industrial: <br />
              Soluciones Integrales
            </h1>
            <p className={styles.description}>
              Innovación, precisión en maquinados CNC y equipo de protección personal
              con los más altos estándares desde 2016. Potenciamos la industria nacional.
            </p>
            <div className={styles.btns}>
              <Link href="/servicios/programaciones" className="btn btn-secondary">
                Nuestros Servicios <ArrowRight size={18} />
              </Link>
              <Link href="/contacto" className="btn btn-outline" style={{ color: "white", borderColor: "white" }}>
                Cotizar Proyecto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
