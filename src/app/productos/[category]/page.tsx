import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import { CheckCircle2, Package, ShieldCheck, Zap } from "lucide-react";
import styles from "./CategoryDetail.module.css";
import { notFound } from "next/navigation";

interface Product {
  name: string;
  desc: string;
  specs: string[];
  image: string;
}

interface CategoryData {
  title: string;
  description: string;
  heroImage: string;
  items: Product[];
}

const CATEGORIES_DATA: Record<string, CategoryData> = {
  "cascos": {
    title: "Cascos de Seguridad",
    description: "Protección craneal diseñada para resistir impactos y penetraciones en entornos industriales exigentes. Equipos certificados con los más altos estándares de seguridad.",
    heroImage: "/images/productos/productos%20index/cascos/flamin%20casco%20ala%20completa1.webp",
    items: [
      {
        name: "FLAMIN Casco Ala Completa con Suspensión GO CHOCLO",
        desc: "Casco de protección superior con diseño de ala completa que ofrece una cobertura total y una suspensión ajustable para máximo confort durante jornadas extensas.",
        specs: ["Ala completa para protección 360°", "Suspensión GO CHOCLO ajustable", "Alta resistencia a impactos laterales"],
        image: "/images/productos/productos%20index/cascos/flamin%20casco%20ala%20completa1.webp"
      },
      {
        name: "CASCO MSA CACHUCHA CON MATRACA",
        desc: "El estándar de la industria en cascos tipo cachucha. Cuenta con una suspensión de matraca que premite un ajuste rápido y seguro con una sola mano.",
        specs: ["Diseño tipo cachucha aerodinámico", "Suspensión de matraca de alta precisión", "Dieléctrico Clase E"],
        image: "/images/productos/productos%20index/cascos/casco%20mas%20cachuca1.webp"
      },
      {
        name: "Bota de Trabajo Venture",
        desc: "Calzado de seguridad tipo bota diseñado para terrenos difíciles y trabajos pesados, proporcionando tracción y protección técnica avanzada.",
        specs: ["Corte de micropiel hidrofugada", "Suela antiderrapante SBR", "Protección contra abrasión y humedad"],
        image: "/images/productos/productos%20index/cascos/bota%20de%20trabajo%20venture1.webp"
      },
      {
        name: "Casco MSA con Matraca",
        desc: "Combinación ideal de ligereza y robustez. Su sistema de ajuste de matraca asegura que el casco se mantenga firmemente en su lugar aun en movimientos bruscos.",
        specs: ["Material: Polietileno de alta densidad", "Ajuste de matraca ergonómico", "Cumple con ANSI/ISEA Z89.1"],
        image: "/images/productos/productos%20index/cascos/casco%20mas%20cachuca1.webp"
      }
    ]
  },
  "chalecos": {
    title: "Chalecos de Seguridad",
    description: "Prendas de alta visibilidad diseñadas para garantizar la seguridad del personal en áreas de tráfico y construcción. Cumplen con normativas internacionales de reflectividad.",
    heroImage: "/images/productos/productos%20index/chalecos/CH.webp",
    items: [
      {
        name: "Chaleco de Supervisor",
        desc: "Chaleco premium fabricado en gabardina resistente. Incluye múltiples bolsillos funcionales y porta radio, ideal para ingenieros y personal de supervisión.",
        specs: ["Tela: Gabardina 100% algodón", "Múltiples bolsillos de carga", "Cintas reflejantes de alta visibilidad"],
        image: "/images/productos/productos%20index/chalecos/CH%20de%20supervisor.webp"
      },
      {
        name: "Chaleco Brigadista",
        desc: "Diseñado para personal de primera respuesta. Fabricado en malla de alta resistencia con cintas reflejantes de 2 pulgadas para visibilidad 360 grados.",
        specs: ["Material: Malla de poliéster reforzada", "Cinta reflejante grado ingeniería", "Alta transpirabilidad"],
        image: "/images/productos/productos%20index/chalecos/CH%20brigadista.webp"
      },
      {
        name: "Chaleco RIP STOP",
        desc: "Construido con tecnología de tejido antidesgarro Rip Stop, este chaleco ofrece durabilidad extrema en entornos donde el roce constante es inevitable.",
        specs: ["Tejido Rip Stop Ultra-Resistente", "Reflejantes de PVC", "Cierre de seguridad frontal"],
        image: "/images/productos/productos%20index/chalecos/CH%20rip%20stop.webp"
      },
      {
        name: "Chaleco Antirreflejante",
        desc: "Equipamiento de seguridad esencial con cintas de contraste para destacar en condiciones de baja luminosidad y entornos industriales complejos.",
        specs: ["Diseño ergonómico y ligero", "Alta visibilidad en entornos oscuros", "Cintas reflejantes certificadas"],
        image: "/images/productos/productos%20index/chalecos/CH.webp"
      }
    ]
  },
  "lentes": {
    title: "Protección Ocular",
    description: "Protección ocular certificada contra impactos, radiación UV y agentes químicos. Tecnología de vanguardia para una visión clara y segura.",
    heroImage: "/images/productos/productos%20index/lentes%20de%20seguridad.webp",
    items: [
      {
        name: "Spearfish® Clear Anti-Fog Lens",
        desc: "Lentes de seguridad con mica transparente y tratamiento antivaho de alto rendimiento. Su montura flexible se ajusta de forma natural a cualquier tipo de rostro.",
        specs: ["Mica de policarbonato transparente", "Tratamiento Anti-Fog (Antiempañante)", "Protección UV 99.9%"],
        image: "/images/productos/productos%20index/lentes%20de%20seguridad/Spearfish%20Clear%20Anti-FogLens.webp"
      },
      {
        name: "Spearfish® Smoke Anti-Fog Lens, Shiny Black Frame",
        desc: "Diseño deportivo con mica oscura (Smoke) para trabajos en exteriores. Incorpora extremos de TPR en las patillas para evitar deslizamientos involuntarios.",
        specs: ["Mica Smoke (Humo) antirreflejo", "Acabado de montura: Negro brillante", "Certificación ANSI Z87.1+"],
        image: "/images/productos/productos%20index/lentes%20de%20seguridad/Spearfish%20SmokeAnti-FogLens,%20ShinyBlack%20Fram.webp"
      },
      {
        name: "Sobrelentes 3M™ SecureFit™",
        desc: "Permiten el uso simultáneo de lentes graduados. La tecnología Pressure Diffusion de 3M difunde la presión sobre la oreja para un ajuste increíblemente cómodo.",
        specs: ["Compatible con lentes de prescripción", "Tecnología Pressure Diffusion", "Ultraligeros"],
        image: "/images/productos/productos%20index/lentes%20de%20seguridad/Sobrelentes%203M%20SecureFit.webp"
      },
      {
        name: "Antiempaño 3M™ Scotchgard™",
        desc: "Equipados con el recubrimiento Scotchgard™ de 3M, estos lentes resisten el empañamiento por más tiempo que los recubrimientos tradicionales, incluso tras lavadas.",
        specs: ["Recubrimiento Scotchgard™ Premium", "Resistencia superior a rayaduras", "Ideal para ambientes húmedos"],
        image: "/images/productos/productos%20index/lentes%20de%20seguridad/Antiempao%203m%20scotchgard.webp"
      }
    ]
  },
  "zapatos": {
    title: "Calzado Industrial",
    description: "Calzado industrial con certificación dieléctrica, diseñado para el confort y la protección total del pie en largas jornadas laborales.",
    heroImage: "/images/productos/productos%20index/zapatos%20de%20seguridad.webp",
    items: [
      {
        name: "DIPPER",
        desc: "Calzado tipo choclo ergonómico con corte de cuero genuino y forros transpirables. Ofrece un balance perfecto entre protección industrial y estilo casual.",
        specs: ["Corte: Piel genuina / Flamingo Choclo", "Dieléctrico Clase E", "Casco de policarbonato"],
        image: "/images/productos/productos%20index/zapatos%20de%20seguridad/Flamingo%20Choclo.webp"
      },
      {
        name: "CONQUEROR",
        desc: "Zapato industrial de alto desempeño con suela de tracción extrema. Su diseño de perfil bajo facilita la movilidad sin comprometer la seguridad del pie.",
        specs: ["Diseño Spyder Low ergonómico", "Suela de inyección directa", "Alta resistencia a aceites"],
        image: "/images/productos/productos%20index/zapatos%20de%20seguridad/Calzado%20industrial%20Spyder%20Low.webp"
      },
      {
        name: "Bota de Seguridad Standard",
        desc: "Bota industrial clásica con refuerzo Bumper en la puntera para resistir impactos frontales. Proporciona estabilidad y protección en todo tipo de superficies.",
        specs: ["Refuerzo Bumper en puntera", "Norma NOM-113-STPS", "Plantilla confort antifatiga"],
        image: "/images/productos/productos%20index/zapatos%20de%20seguridad/CL%20Bumper.webp"
      },
      {
        name: "Bota de Trabajo de Seguridad",
        desc: "Bota de seguridad premium con tecnología Air Flow para mantener el pie seco. Es el calzado ideal para entornos que requieren máxima protección técnica.",
        specs: ["Tecnología 3D Air Flow", "Ligero y flexible", "Casco de aluminio"],
        image: "/images/productos/productos%20index/zapatos%20de%20seguridad/Tenis%20de%20segurid%20quantum%20dama.webp"
      }
    ]
  },
  "guantes": {
    title: "Guantes de Seguridad",
    description: "Equipamiento de protección manual para diversos riesgos industriales, desde protección química hasta resistencia al corte de alto nivel.",
    heroImage: "/images/productos/productos%20index/guantes%20de%20seguridad.webp",
    items: [
      {
        name: "Guante de Nitrilo Azul",
        desc: "Alta resistencia química y punción. Ideal para manejo de aceites, solventes y procesos de limpieza técnica.",
        specs: ["Material: Nitrilo 100%", "Acabado texturizado para mejor agarre", "Libre de látex"],
        image: "/images/productos/productos%20index/Guantes%20de%20seguridad/Guante%20de%20Nitrilo%20Azul.png"
      },
      {
        name: "Guante Anti-corte Nivel 5",
        desc: "Máxima protección contra objetos afilados. Tejido de polietileno de alto desempeño con recubrimiento en palma.",
        specs: ["Protección Nivel 5 ANSI/EN388", "Alta destreza y comodidad", "Lavable y reutilizable"],
        image: "/images/productos/productos%20index/Guantes%20de%20seguridad/Guante%20de%20Polietileno%20anti%20corte%20nivel%205.png"
      },
      {
        name: "Guante Nylon con Palma de Poliuretano",
        desc: "Diseñado para ensambles de precisión. Ofrece excelente sensibilidad táctil y protección contra abrasión leve.",
        specs: ["Tejido de Nylon transpirable", "Recubrimiento de PU en la palma", "Ajuste ergonómico"],
        image: "/images/productos/productos%20index/Guantes%20de%20seguridad/Guante%20de%20nylon%20with%20palma%20de%20Poliuretano.png"
      },
      {
        name: "Guante con Recubrimiento de Nitrilo y Puño de Loneta",
        desc: "Protección robusta para trabajos pesados. El puño de loneta facilita el quite rápido del guante en emergencias.",
        specs: ["Recubrimiento de nitrilo pesado", "Puño de loneta de seguridad", "Resistente a aceites y grasas"],
        image: "/images/productos/productos%20index/Guantes%20de%20seguridad/Guante%20de%20seguridad%20recubrimiento%20de%20nitrilo%2C%20with%20pu%C3%B1o%20de%20loneta.png"
      }
    ]
  },
  "auditivos": {
    title: "Protección Auditiva",
    description: "Sistemas de reducción de ruido industrial diseñados para preservar la salud auditiva de los operadores en entornos de alta intensidad sonora.",
    heroImage: "/images/productos/productos%20index/auditivo.webp",
    items: [
      {
        name: "3M PELTOR Optime Orejeras 98 H9A",
        desc: "Orejeras de diadema ligera que proporcionan una reducción de ruido efectiva para entornos con niveles de ruido hasta 98 dBA.",
        specs: ["Nivel de reducción de ruido (NRR): 25 dB", "Cojines rellenos de líquido/espuma", "Diadema de acero inoxidable"],
        image: "/images/productos/productos%20index/Auditivos/3M%20PELTOR%20Optime%20Orejeras%2098%20H9A.webp"
      },
      {
        name: "Alphas Tapones Auditivos Reutilizables",
        desc: "Tapones de triple pestaña fabricados en material suave para un ajuste cómodo y seguro durante toda la jornada.",
        specs: ["Triple pestaña para sellado óptimo", "Lavables y reutilizables", "Incluye estuche de transporte"],
        image: "/images/productos/productos%20index/Auditivos/Alphas%20Tapones%20Auditivos%20Reutilizables.webp"
      },
      {
        name: "Tapón Reusable Libus Quantum",
        desc: "Diseño ergonómico con cordón. Fabricado en silicona de grado médico para evitar irritaciones en el canal auditivo.",
        specs: ["Material de silicona hipoalergénica", "NRR: 26 dB", "Cordón de seguridad incluido"],
        image: "/images/productos/productos%20index/Auditivos/Tap%C3%B3n%20Reusable%20Libus%20Quantum.webp"
      }
    ]
  },
  "respiratoria": {
    title: "Protección Respiratoria",
    description: "Mascarillas y respiradores certificados para filtrar partículas nocivas, vapores orgánicos y gases en procesos industriales.",
    heroImage: "/images/productos/productos%20index/proteccion%20respiratoria.webp",
    items: [
      {
        name: "Respiradores Reutilizables de Media Cara",
        desc: "Sistemas de filtración dual para protección contra una amplia variedad de gases, vapores y partículas.",
        specs: ["Diseño de media cara ergonómico", "Compatible con cartuchos serie 6000", "Válvula de exhalación para frescura"],
        image: "/images/productos/productos%20index/Protecci%C3%B3n%20Respiratoria/Respiradores%20Reutilizables.webp"
      },
      {
        name: "Respiradores Desechables N95",
        desc: "Mascarillas ligeras para filtración de partículas no aceitosas. Ideales para procesos de lijado, molienda y barrido.",
        specs: ["Certificación NIOSH N95", "Clip nasal ajustable", "Bandas elásticas resistentes"],
        image: "/images/productos/productos%20index/Protecci%C3%B3n%20Respiratoria/Respiradores%20Desechables.webp"
      },
      {
        name: "Cubrebocas Desechable Tricapa",
        desc: "Protección básica para higiene industrial. Fabricado con tres capas de tela no tejida para filtración bacteriana.",
        specs: ["3 capas de filtración", "Ajuste elástico a la oreja", "Termosellado de alta calidad"],
        image: "/images/productos/productos%20index/Protecci%C3%B3n%20Respiratoria/Cubrebocas%20Desechable.webp"
      }
    ]
  },
  "ropa-antiestatica": {
    title: "Ropa Antiestática",
    description: "Indumentaria especializada para el control de descargas electrostáticas (ESD) en laboratorios electrónicos y áreas de manufactura sensible.",
    heroImage: "/images/productos/productos%20index/ropa%20antiestatica.webp",
    items: [
      {
        name: "Bata Antiestática ESD",
        desc: "Prenda esencial para entornos controlados. Fabricada con filamentos de carbono para disipar la carga estática.",
        specs: ["Material: Poliéster con fibra de carbono", "Bolsillos reforzados", "Ajuste en puños antiestático"],
        image: "/images/productos/productos%20index/Ropa%20Antiest%C3%A1tica/Bata.webp"
      },
      {
        name: "Overol Antiestático Completo",
        desc: "Protección total para áreas limpias. Diseño de una sola pieza que minimiza la generación de partículas y garantiza el control ESD.",
        specs: ["Diseño tipo overol con capucha", "Resistencia de superficie certificada", "Alta durabilidad"],
        image: "/images/productos/productos%20index/Ropa%20Antiest%C3%A1tica/Overol.webp"
      },
      {
        name: "Gorra Antiestática",
        desc: "Accesorio complementario para el control de cabello y protección estática en la zona craneal.",
        specs: ["Ajuste elástico trasero", "Tejido con rejilla conductiva", "Ligera y fresca"],
        image: "/images/productos/productos%20index/Ropa%20Antiest%C3%A1tica/Gorra.webp"
      }
    ]
  },
  "uniformes": {
    title: "Ropa de Trabajo y Uniformes",
    description: "Uniformes industriales robustos diseñados para el trabajo duro diario, manteniendo la comodidad y la imagen profesional de su equipo.",
    heroImage: "/images/productos/productos%20index/ropa%20de%20trabajo%20y%20uniformes.webp",
    items: [
      {
        name: "Camisolas de Mezclilla y Gabardina",
        desc: "Resistentes al desgaste y la abrasión. Disponibles en diversos pesos de tela según el tipo de industria.",
        specs: ["Costuras reforzadas", "100% Algodón o Mezcla", "Botones de alta resistencia"],
        image: "/images/productos/productos%20index/Ropa%20de%20Trabajo%20y%20Uniformes/Camisolas%20de%20MezclillaGabardina.webp"
      },
      {
        name: "Overoles de Algodón Industrial",
        desc: "Protección corporal completa con múltiples bolsillos funcionales para herramientas y accesorios.",
        specs: ["Diseño ergonómico para movilidad", "Zipper frontal de uso pesado", "Múltiples bolsillos de carga"],
        image: "/images/productos/productos%20index/Ropa%20de%20Trabajo%20y%20Uniformes/Overoles%20Algod%C3%B3n.webp"
      },
      {
        name: "Pantalón de Mezclilla Industrial",
        desc: "El estándar para el personal de mantenimiento y producción. Durabilidad extrema en las zonas de mayor roce.",
        specs: ["Mezclilla de 14 oz", "Corte cómodo para trabajo", "Remaches en puntos de estrés"],
        image: "/images/productos/productos%20index/Ropa%20de%20Trabajo%20y%20Uniformes/Pantal%C3%B3n%20de%20Mezclilla.webp"
      }
    ]
  },
  "ropa-medica": {
    title: "Ropa Médica y Desechable",
    description: "Soluciones de barrera desechable para procesos que requieren altos niveles de higiene y control de contaminación cruzada.",
    heroImage: "/images/productos/productos%20index/ropa%20medico.webp",
    items: [
      {
        name: "Bata para Paciente Desechable",
        desc: "Prenda ligera diseñada para un solo uso, garantizando higiene en entornos clínicos e industriales de alimentos.",
        specs: ["Material: Polipropileno SMS", "Ajuste de cintas trasero", "Un solo tamaño universal"],
        image: "/images/productos/productos%20index/ropa%20desechable/Bata%20Paciente.webp"
      },
      {
        name: "Cubrezapato con Antiderrapante",
        desc: "Evita la entrada de contaminantes externos a áreas controladas. Suela con banda antideslizante para seguridad del personal.",
        specs: ["Bandas de hule antiderrapantes", "Material resistente a la fricción", "Elástico de ajuste superior"],
        image: "/images/productos/productos%20index/ropa%20desechable/Cubrezapato%20sin%20o%20con%20Antiderrapante.webp"
      },
      {
        name: "Falda y Bikini Desechable",
        desc: "Prendas complementarias para procesos específicos de higiene y estética corporal en entornos médicos.",
        specs: ["Suave al tacto", "100% Higiénico", "Empaque individual"],
        image: "/images/productos/productos%20index/ropa%20desechable/Falda%20y%20Bikini%20Desechable.webp"
      }
    ]
  },
  "pintura": {
    title: "Consumibles para Pintura",
    description: "Insumos técnicos para el tratamiento de superficies y procesos de acabado en la industria de la pintura automotriz e industrial.",
    heroImage: "/images/productos/productos%20index/consumible%20para%20pintura.webp",
    items: [
      {
        name: "Almohadillas para Amoladora Angular",
        desc: "Accesorios para procesos de pulido y desbaste fino. Optimizan la uniformidad del acabado final.",
        specs: ["Compatibilidad universal", "Alta durabilidad", "Ideal para metales y plásticos"],
        image: "/images/productos/productos%20index/Consumibles%20para%20Pintura/Almohadillas%20para%20Amoladora%20Angular.webp"
      },
      {
        name: "Lijas Industriales de Alta Calidad",
        desc: "Amplia variedad de granos para procesos desde el desbaste pesado hasta el acabado espejo.",
        specs: ["Granos disponibles: 80 a 2000", "Resistentes al agua", "Ideal para sector automotriz"],
        image: "/images/productos/productos%20index/Consumibles%20para%20Pintura/Lijas.webp"
      },
      {
        name: "Trapo Tubular para Pintura",
        desc: "Tejido especializado que no suelta pelusa, esencial para la limpieza previa a la aplicación de pintura.",
        specs: ["100% Algodón de alta absorción", "Corte tubular sin costuras", "Libre de contaminantes"],
        image: "/images/productos/productos%20index/Consumibles%20para%20Pintura/Trapo%20Tubular.webp"
      }
    ]
  }
};

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  return (
    <CategoryContent params={params} />
  );
}

async function CategoryContent({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const data = CATEGORIES_DATA[category];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <PageHero
          title={data.title}
          subtitle={data.description}
        />

        <section className={styles.productSection}>
          <div className="container">
            <h2 className="sr-only">Lista de productos de {data.title}</h2>
            <div className={styles.productGrid}>
              {data.items.map((item, index) => (
                <article key={index} className={styles.productCard}>
                  <div className={styles.imageCol}>
                    <div className={styles.imageBox}>
                      <Image
                        src={item.image}
                        alt={`Producto: ${item.name} - ${data.title} VILMAR`}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className={styles.productImg}
                      />
                    </div>
                  </div>
                  <div className={styles.contentCol}>
                    <div className={styles.badge}><Package size={14} /> Producto Industrial</div>
                    <h2 className={styles.productName}>{item.name}</h2>
                    <p className={styles.productDesc}>{item.desc}</p>

                    <div className={styles.specs}>
                      <h3>Especificaciones Técnicas:</h3>
                      <ul>
                        {item.specs.map((spec, sIdx) => (
                          <li key={sIdx}>
                            <CheckCircle2 size={18} className={styles.checkIcon} />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.features}>
                      <div className={styles.featureItem}>
                        <ShieldCheck size={20} />
                        <span>Alta Calidad Certificada</span>
                      </div>
                      <div className={styles.featureItem}>
                        <Zap size={20} />
                        <span>Disponibilidad Inmediata</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
