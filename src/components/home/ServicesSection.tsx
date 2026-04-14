import { Cpu, Shield, Settings, Wrench, Layers, Scissors } from "lucide-react";
import Link from "next/link";
import styles from "./ServicesSection.module.css";

const services = [
  {
    title: "Programación de PLCs",
    description: "Expertos en Allen Bradley, redundancia de procesos y optimización de maquinaria industrial.",
    icon: <Cpu size={40} />,
    link: "/servicios/programaciones"
  },
  {
    title: "Guardas Telescópicas",
    description: "Diseño, manufactura y reparación de guardas móviles para centros de maquinado CNC.",
    icon: <Shield size={40} />,
    link: "/servicios/guardas"
  },
  {
    title: "Maquinados de Precisión",
    description: "Transformamos materia prima en piezas precisas mediante procesos de CNC, torno y fresa.",
    icon: <Settings size={40} />,
    link: "/productos/maquinados"
  },
  {
    title: "Pailería Industrial",
    description: "Fabricación de racks, carros transportadores de materiales y mesas de trabajo personalizadas.",
    icon: <Scissors size={40} />,
    link: "/#maquinaria"
  },
  {
    title: "Sistemas SCADA",
    description: "Implementación de Ignition para supervisión, control y gestión de datos complejos.",
    icon: <Layers size={40} />,
    link: "/servicios/programaciones"
  },
  {
    title: "Mantenimiento",
    description: "Servicios preventivos y correctivos para asegurar la continuidad de sus procesos productivos.",
    icon: <Wrench size={40} />,
    link: "/nosotros"
  }
];

const ServicesSection = () => {
  return (
    <section className={styles.services} id="servicios">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.subtitle}>Lo que hacemos mejor</p>
          <h2 className={styles.title}>Servicios y Soluciones Industriales</h2>
          <div className={styles.accent}></div>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href={service.link} className={styles.learnMore}>
                Saber más <Wrench size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
