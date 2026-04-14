"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Galeria.module.css";

const workImages = [
  { src: "/images/imagenes variadas/trbajo7.webp", title: "Trabajo Realizado 1" },
  { src: "/images/imagenes variadas/trbajo8.webp", title: "Trabajo Realizado 2" },
  { src: "/images/imagenes variadas/trbajo2.webp", title: "Trabajo Realizado 3" },
  { src: "/images/Tipos de guardados/G1.webp", title: "Guarda Telescópica" },
  { src: "/images/Tipos de guardados/G4.webp", title: "Eje X" },
  { src: "/images/Tipos de guardados/G5.webp", title: "Instalación" },
];

const facilityImages = [
  { src: "/images/imagenes variadas/servicio1.jpg", title: "Nuestra Planta" },
  { src: "/images/imagenes variadas/I11.webp", title: "Maquinaria CNC" },
];

export default function Galeria() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % workImages.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + workImages.length) % workImages.length);
  };

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Galería de Proyectos"
          subtitle="Una recopilación de nuestros trabajos más destacados, realizados con dedicación y profesionalismo."
        />

        <section className={styles.gallerySection}>
          <div className="container">
            <div className={styles.header}>
              <h2 className={styles.sectionTitle}>Trabajos Realizados</h2>
              <p className={styles.sectionDesc}>
                Calidad y precisión entregada a nuestros clientes en cada proyecto.
              </p>
            </div>

            <div className={styles.grid}>
              {workImages.map((img, index) => (
                <div key={index} className={styles.imageCard} onClick={() => openLightbox(index)}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className={styles.image}
                    />
                    <div className={styles.overlay}>
                      <span>{img.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedIndex !== null && (
          <div className={styles.modalOverlay} onClick={closeLightbox}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeBtn} onClick={closeLightbox}>
                <X size={40} />
              </button>

              <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevImage}>
                <ChevronLeft size={40} />
              </button>

              <div className={styles.modalImageWrapper}>
                <Image
                  src={workImages[selectedIndex].src}
                  alt={workImages[selectedIndex].title}
                  width={1200}
                  height={800}
                  className={styles.modalImage}
                />
              </div>

              <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextImage}>
                <ChevronRight size={40} />
              </button>
            </div>
          </div>
        )}

        <section className={styles.installations}>
          <div className="container">
            <div className={styles.header}>
              <h2 className={styles.sectionTitle}>Conoce Nuestras Instalaciones</h2>
              <p className={styles.sectionDesc}>
                Equipamiento de vanguardia para garantizar la satisfacción de nuestros clientes.
              </p>
            </div>

            <div className={styles.facilityGrid}>
              {facilityImages.map((img, index) => (
                <div key={index} className={styles.facilityCard}>
                  <Image
                    src={img.src}
                    alt={img.title}
                    width={800}
                    height={500}
                    className={styles.facilityImage}
                  />
                  <div className={styles.facilityInfo}>
                    <h3>{img.title}</h3>
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
