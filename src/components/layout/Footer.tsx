import Link from "next/link";
import Image from "next/image";
import {
  Mail, Phone, MapPin,
  Home, Users, Cpu, Shield, Package, Image as ImageIcon, MessageCircle,
  Wrench, Settings
} from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.col}>
            <div className={styles.footerBrand}>
              <Link href="/" className={styles.logo}>
                <Image
                  src="/vilmar-blanco.png"
                  alt="VILMAR Industrial - Expertos en Maquinados y EPP"
                  width={185}
                  height={70}
                  priority
                />
              </Link>
            </div>
            <p className={styles.description}>
              VILMAR es una empresa 100% mexicana ubicada en Saltillo, Coahuila,
              fundada en 2016. Comprometidos con la calidad y precisión en servicios
              industriales para la satisfacción total de nuestros clientes.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h3>Navegación</h3>
            <ul className={styles.links}>
              <li>
                <Home size={15} className={styles.linkIcon} />
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Users size={15} className={styles.linkIcon} />
                <Link href="/nosotros">Quiénes Somos</Link>
              </li>
              <li>
                <Wrench size={15} className={styles.linkIcon} />
                <Link href="/servicios/guardas">Guardas Telescópicas</Link>
              </li>
              <li>
                <Cpu size={15} className={styles.linkIcon} />
                <Link href="/productos/maquinados">Maquinados</Link>
              </li>
              <li>
                <Shield size={15} className={styles.linkIcon} />
                <Link href="/productos/filtros">Filtros & EPP</Link>
              </li>
              <li>
                <Package size={15} className={styles.linkIcon} />
                <Link href="/productos">Catálogo General</Link>
              </li>
              <li>
                <MessageCircle size={15} className={styles.linkIcon} />
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.col}>
            <h3>Contacto</h3>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={18} className={styles.icon} />
                <span>Saltillo, Coahuila, México</span>
              </li>
              <li>
                <Phone size={18} className={styles.icon} />
                <span>+52 1 844 764 0549</span>
              </li>
              <li>
                <Mail size={18} className={styles.icon} />
                <a href="mailto:ventas.saltillo1@vilmarindustrial.com">ventas.saltillo1@vilmarindustrial.com</a>
              </li>
              <li>
                <Mail size={18} className={styles.icon} />
                <a href="mailto:ventas.saltillo2@vilmarindustrial.com">ventas.saltillo2@vilmarindustrial.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            TODOS LOS DERECHOS RESERVADOS - VILMAR Industrial © {currentYear}
          </div>
          <div className={styles.credits}>
            <a href="https://www.lunavalos.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/credits-logo.png"
                alt="Lunavalos Digital House"
                width={140}
                height={35}
                className={styles.creditsLogo}
              />
            </a>
            <span>DESARROLLADO POR:</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
