"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import styles from "./HeroSlideshow.module.css";

const slides = [
  {
    image: "/images/imagenes variadas/trbajo7.webp",
    title: "VILMAR Industrial: Soluciones Integrales",
    subtitle: "Innovación, precisión en maquinados CNC y equipo de protección personal con los más altos estándares desde 2016.",
    cta: "Nuestros Servicios",
    link: "/servicios/programaciones"
  },
  {
    image: "/images/imagenes variadas/trbajo8.webp",
    title: "Soluciones en Metalmecánica",
    subtitle: "Contamos con tecnología de vanguardia para satisfacer las necesidades de la industria automotriz y más.",
    cta: "Conoce el Equipo",
    link: "/#maquinaria"
  },
  {
    image: "/images/imagenes variadas/I11.webp",
    title: "Seguridad y Protección",
    subtitle: "Distribuidor autorizado de las mejores marcas en EPP y seguridad industrial.",
    cta: "Ver Productos",
    link: "/productos/filtros"
  }
];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === current ? styles.active : ""}`}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className={styles.image}
            />
            <div className={styles.overlay}></div>
          </div>

          <div className={styles.content}>
            <div className="container">
              <div className={styles.textContent}>
                {index === 0 ? (
                  <h1 className={styles.title}>{slide.title}</h1>
                ) : (
                  <h2 className={styles.title}>{slide.title}</h2>
                )}
                <p className={styles.description}>{slide.subtitle}</p>
                <div className={styles.btns}>
                  <Link href={slide.link} className="btn btn-primary">
                    {slide.cta} <ArrowRight size={18} />
                  </Link>
                  <Link href="/contacto" className="btn btn-outline" style={{ color: "white", borderColor: "white" }}>
                    Cotizar Proyecto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button className={`${styles.navBtn} ${styles.prev}`} onClick={prevSlide}>
        <ChevronLeft size={30} />
      </button>
      <button className={`${styles.navBtn} ${styles.next}`} onClick={nextSlide}>
        <ChevronRight size={30} />
      </button>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === current ? styles.dotActive : ""}`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
