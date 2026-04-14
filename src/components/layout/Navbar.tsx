"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, X, ChevronDown, 
  Cpu, Shield, Settings, 
  Wrench, Layers, Users, 
  Image as ImageIcon, Phone, 
  Home, Info, Code, Zap, Package,
  Scissors, Droplets, Paintbrush, Wind, Stethoscope, Briefcase
} from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: "Inicio", href: "/", icon: <Home size={18} /> },
    { 
      title: "Nosotros", 
      href: "/nosotros",
      submenu: [
        { title: "Quiénes Somos", desc: "Nuestra historia y valores corporativos.", href: "/nosotros", icon: <Users size={20} /> },
        { title: "Galería", desc: "Explora nuestros casos de éxito.", href: "/galeria", icon: <ImageIcon size={20} /> },
      ]
    },
    { 
      title: "Servicios", 
      href: "/servicios/programaciones",
      submenu: [
        { title: "Programaciones", desc: "Automatización y sistemas SCADA.", href: "/servicios/programaciones", icon: <Cpu size={20} /> },
        { title: "Guardas Telescópicas", desc: "Protección y reparación de maquinaria.", href: "/servicios/guardas", icon: <Shield size={20} /> },
      ]
    },
    { 
      title: "Productos", 
      href: "/productos",
      submenu: [
        { title: "EPP y Seguridad", desc: "Catálogo completo de protección.", href: "/productos", icon: <Package size={20} /> },
        { title: "Maquinados CNC", desc: "Piezas de alta precisión.", href: "/productos/maquinados", icon: <Settings size={20} /> },
        { title: "Filtros Industriales", desc: "Sistemas de aire y líquidos.", href: "/productos/filtros", icon: <Layers size={20} /> },
      ]
    },
    { title: "Contacto", href: "/contacto", icon: <Phone size={18} /> },
  ];

  const toggleDropdown = (title: string) => {
    if (activeDropdown === title) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(title);
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/logo vilmar.png" 
            alt="VILMAR Industrial - Expertos en Maquinados y EPP" 
            width={180} 
            height={45} 
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className={styles.navLinks}>
          {menuItems.map((item) => (
            <li 
              key={item.title} 
              className={styles.navItem}
              onMouseEnter={() => item.submenu && setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.submenu ? (
                <div className={styles.navLinkWithIcon}>
                  <Link href={item.href}>{item.title}</Link> 
                  <ChevronDown size={14} className={activeDropdown === item.title ? styles.rotate : ""} />
                  <div className={`${styles.dropdown} ${activeDropdown === item.title ? styles.dropdownVisible : ""}`}>
                    <div className={styles.dropdownContent}>
                      {item.submenu.map((sub) => (
                        <Link key={sub.title} href={sub.href} className={styles.dropdownItem}>
                          <div className={styles.iconBox}>{sub.icon}</div>
                          <div className={styles.itemInfo}>
                            <span className={styles.itemTitle}>{sub.title}</span>
                            <p className={styles.itemDesc}>{sub.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link href={item.href} className={styles.navLink}>
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Link href="/contacto" className="btn btn-primary" aria-label="Solicitar cotización">
            Cotizar
          </Link>
          <button 
            className={styles.mobileToggle} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ""}`}>
        <div className={styles.mobileMenuContent}>
          {menuItems.map((item) => (
            <div key={item.title} className={styles.mobileNavItem}>
              {item.submenu ? (
                <>
                  <button 
                    className={styles.mobileNavLink} 
                    onClick={() => toggleDropdown(item.title)}
                  >
                    {item.title} <ChevronDown size={16} className={activeDropdown === item.title ? styles.rotate : ""} />
                  </button>
                  <div className={`${styles.mobileSubmenu} ${activeDropdown === item.title ? styles.show : ""}`}>
                    {item.submenu.map((sub) => (
                      <Link 
                        key={sub.title} 
                        href={sub.href} 
                        className={styles.mobileSubItem}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className={styles.icon}>{sub.icon}</span>
                        <div>
                          <strong>{sub.title}</strong>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link 
                  href={item.href} 
                  className={styles.mobileNavLink}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          <Link 
            href="/contacto" 
            className={`btn btn-primary ${styles.mobileBtn}`}
            onClick={() => setIsOpen(false)}
          >
            Cotizar Proyecto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
