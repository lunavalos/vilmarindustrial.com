"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import { Mail, MapPin, Clock } from "lucide-react";
import styles from "./Contacto.module.css";

export default function Contacto() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <PageHero 
          title="Contáctanos" 
          subtitle="Estamos listos para escuchar tu proyecto y brindarte la mejor asesoría técnica industrial."
        />

        <section className={styles.content}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.infoCol}>
                <div className={styles.infoCard}>
                  <h2 className={styles.title}>Información de Contacto</h2>
                  <p className={styles.desc}>
                    Visítanos en nuestras oficinas o contáctanos por cualquiera de nuestros canales oficiales.
                  </p>

                  <div className={styles.contactList}>
                    <div className={styles.contactItem}>
                      <div className={styles.iconBox}>
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4>Ubicación</h4>
                        <p>Saltillo, Coahuila, México.</p>
                      </div>
                    </div>

                    <div className={styles.contactItem}>
                      <div className={styles.iconBox}>
                        <Mail size={24} />
                      </div>
                      <div>
                        <h4>Correo Línea 1</h4>
                        <a href="mailto:ventas.saltillo1@vilmarindustrial.com" style={{color: 'inherit'}}>ventas.saltillo1@vilmarindustrial.com</a>
                      </div>
                    </div>

                    <div className={styles.contactItem}>
                      <div className={styles.iconBox}>
                        <Mail size={24} />
                      </div>
                      <div>
                        <h4>Correo Línea 2</h4>
                        <a href="mailto:ventas.saltillo2@vilmarindustrial.com" style={{color: 'inherit'}}>ventas.saltillo2@vilmarindustrial.com</a>
                      </div>
                    </div>

                    <div className={styles.contactItem}>
                      <div className={styles.iconBox}>
                        <Clock size={24} />
                      </div>
                      <div>
                        <h4>Horario de Atención</h4>
                        <p>Lunes a Viernes: 8:00 AM – 6:00 PM</p>
                        <p>Sábados: 9:00 AM – 1:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.mapCard}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115200.0!2d-101.0!3d25.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8688129df9195393%3A0x8688129df9195393!2sSaltillo%2C%20Coah.!5e0!3m2!1ses-419!2smx!4v1712760000000!5m2!1ses-419!2smx" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className={styles.servicesCol}>
                <div className={styles.serviceCardsStack}>
                  <div className={styles.serviceCard}>
                    <div className={styles.cardHeader}>
                      <div className={styles.serviceIcon}>
                        <Mail size={32} />
                      </div>
                      <h2 className={styles.cardTitle}>Ventas Saltillo – Línea 1</h2>
                    </div>
                    <p className={styles.cardText}>
                      Atención y seguimiento de cotizaciones para proyectos industriales y suministros especializados.
                    </p>
                    <a 
                      href="mailto:ventas.saltillo1@vilmarindustrial.com?subject=Cotización%20de%20servicio&body=Hola%2C%20quisiera%20una%20cotización%20para%20mi%20proyecto..." 
                      className={styles.emailBtn}
                    >
                      Enviar correo
                    </a>
                  </div>

                  <div className={styles.serviceCard}>
                    <div className={styles.cardHeader}>
                      <div className={styles.serviceIcon}>
                        <Mail size={32} />
                      </div>
                      <h2 className={styles.cardTitle}>Ventas Saltillo – Línea 2</h2>
                    </div>
                    <p className={styles.cardText}>
                      Soporte a proyectos, solicitudes técnicas y atención personalizada a distribuidores.
                    </p>
                    <a 
                      href="mailto:ventas.saltillo2@vilmarindustrial.com?subject=Cotización%20de%20servicio&body=Hola%2C%20quisiera%20una%20cotización%20para%20mi%20proyecto..." 
                      className={styles.emailBtn}
                    >
                      Enviar correo
                    </a>
                  </div>
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
