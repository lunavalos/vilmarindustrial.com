import { Mail, Phone, ArrowRight } from "lucide-react";
import styles from "./ContactCTA.module.css";

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
}

const ContactCTA = ({ 
  title = "Contáctanos para Cotizar con Nosotros", 
  subtitle = "Estamos listos para brindarte la mejor solución industrial para tu proyecto." 
}: ContactCTAProps) => {
  return (
    <section className={styles.contact} id="contacto">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          
          <div className={styles.cards}>
            {/* Sales Line 1 */}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <Mail size={24} />
              </div>
              <h3>Ventas Saltillo – Línea 1</h3>
              <p>Atención y seguimiento de cotizaciones generales.</p>
              <a 
                href="mailto:ventas.saltillo1@vilmarindustrial.com?subject=Cotización%20de%20servicio&body=Hola,%20quisiera%20una%20cotización%20para%20mi%20proyecto..." 
                className="btn btn-primary"
              >
                Enviar correo <ArrowRight size={18} />
              </a>
            </div>

            {/* Sales Line 2 */}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <Phone size={24} />
              </div>
              <h3>Ventas Saltillo – Línea 2</h3>
              <p>Soporte a proyectos especializados y solicitudes urgentes.</p>
              <a 
                href="mailto:ventas.saltillo2@vilmarindustrial.com?subject=Cotización%20de%20servicio&body=Hola,%20quisiera%20una%20cotización%20para%20mi%20proyecto..." 
                className="btn btn-outline"
              >
                Solicitar soporte <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
