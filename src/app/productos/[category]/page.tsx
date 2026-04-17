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
    description: "Protección craneal de alto rendimiento diseñada para resistir impactos y penetraciones en los entornos industriales más exigentes. Seguridad certificada para tu equipo.",
    heroImage: "/images/productos/productos index/cascos/flamin casco ala completa1.webp",
    items: [
      {
        name: "FLAMIN Casco Ala Completa con Suspensión",
        desc: "Protección integral de 360 grados con diseño de ala completa. Su suspensión ajustable garantiza estabilidad y confort superior durante jornadas prolongadas.",
        specs: ["Protección periférica total", "Suspensión ergonómica ajustable", "Alta resistencia técnica a impactos"],
        image: "/images/productos/productos index/cascos/flamin casco ala completa1.webp"
      },
      {
        name: "Casco MSA Cachucha con Matraca",
        desc: "El referente de seguridad industrial. Diseño tipo cachucha con ajuste de matraca de alta precisión para un sellado firme y seguro bajo cualquier condición.",
        specs: ["Ajuste rápido con una mano", "Dieléctrico de alta resistencia", "Cumple normas internacionales de seguridad"],
        image: "/images/productos/productos index/cascos/casco mas cachuca1.webp"
      },
      {
        name: "Casco Industrial Modular",
        desc: "Versatilidad y protección en un solo equipo. Diseñado en polietileno de alta densidad, permite integrar fácilmente accesorios de protección facial y auditiva.",
        specs: ["Diseño modular adaptable", "Material de polietileno premium", "Soporte para múltiples accesorios"],
        image: "/images/productos/productos index/cascos/Casco Industrial Modular.webp"
      }
    ]
  },
  "chalecos": {
    title: "Chalecos de Seguridad",
    description: "Prendas de alta visibilidad que combinan seguridad y funcionalidad. Diseñados bajo normativas internacionales para garantizar la máxima protección en áreas de riesgo.",
    heroImage: "/images/fotos nuevas/chalecos/chaleco portada.webp",
    items: [
      {
        name: "Chaleco de Supervisor",
        desc: "Elegancia y funcionalidad para personal de mando. Fabricado en gabardina de alta resistencia con multibolsillos estratégicos para herramientas y comunicación.",
        specs: ["Gabardina premium 100% algodón", "Compartimentos de carga optimizados", "Cintas reflejantes de alta definición"],
        image: "/images/fotos nuevas/chalecos/Chaleco de Supervisor.webp"
      },
      {
        name: "Chaleco Brigadista Profesional",
        desc: "Equipo esencial para unidades de emergencia. Diseño robusto con visibilidad de 360 grados y materiales transpirables para máxima agilidad operativa.",
        specs: ["Malla reforzada de alta duración", "Visibilidad crítica 360°", "Ligero y altamente transpirable"],
        image: "/images/fotos nuevas/chalecos/Chaleco Brigadista.webp"
      },
      {
        name: "Chaleco RIP STOP Alta Durabilidad",
        desc: "Tecnología antidesgarro para los entornos más hostiles. Ideal para trabajos donde el desgaste por abrasión es una constante.",
        specs: ["Tejido técnico Rip Stop", "Resistencia extrema a rasgaduras", "Reflejantes de alta durabilidad"],
        image: "/images/fotos nuevas/chalecos/Chaleco RIP STOP.webp"
      },
      {
        name: "Chaleco Suave Comfort",
        desc: "Protección ligera con tecnología Soft Shell. Ofrece repelencia a líquidos y un ajuste ergonómico que mejora la movilidad del usuario.",
        specs: ["Tecnología Soft Shell", "Textil repelente a líquidos", "Diseño ergonómico y moderno"],
        image: "/images/fotos nuevas/chalecos/Chaleco Suave.webp"
      },
      {
        name: "Chaleco Cuadrado Industrial",
        desc: "Diseño clásico de gabardina con corte cuadrado para mayor amplitud de movimiento. Versatilidad probada en procesos logísticos e industriales.",
        specs: ["Corte cuadrado para libertad de movimiento", "Cintas reflejantes de seguridad", "Acabado industrial reforzado"],
        image: "/images/fotos nuevas/chalecos/Chaleco Cuadrado.webp"
      },
      {
        name: "Chaleco de Malla Transpirable",
        desc: "Máxima ventilación para climas cálidos o esfuerzos físicos intensos. No compromete la visibilidad ni la seguridad del operador.",
        specs: ["Malla técnica ultra-transpirable", "Diseño abierto funcional", "Cintas de alta visibilidad"],
        image: "/images/fotos nuevas/chalecos/Chaleco de Malla.webp"
      },
      {
        name: "Chaleco Antirreflejante",
        desc: "Optimizado para entornos industriales complejos con baja iluminación. Destaca la silueta del personal para prevenir accidentes en áreas de tráfico.",
        specs: ["Cintas de contraste de alta visibilidad", "Diseño ergonómico ligero", "Certificado para seguridad vial"],
        image: "/images/fotos nuevas/chalecos/Chaleco Antirreflejante.webp"
      }
    ]
  },
  "lentes": {
    title: "Protección Ocular",
    description: "Visión clara y protegida con tecnología de punta. Lentes certificados contra impactos, rayos UV y empañamiento para un rendimiento visual superior.",
    heroImage: "/images/productos/productos index/lentes de seguridad.webp",
    items: [
      {
        name: "Spearfish® Clear Anti-Fog",
        desc: "Claridad absoluta con tratamiento antiempañante. Su montura flexible de TPR se adapta ergonómicamente a cualquier perfil facial.",
        specs: ["Mica de policarbonato óptica", "Tratamiento Anti-Fog avanzado", "Patillas ventiladas para mayor confort"],
        image: "/images/fotos nuevas/lentes de seguridad/Spearfish Clear Anti-FogLens.webp"
      },
      {
        name: "Spearfish® Smoke Anti-Fog",
        desc: "Protección solar e industrial con diseño deportivo. Ideal para trabajos exteriores, reduciendo la fatiga ocular por deslumbramiento.",
        specs: ["Mica Smoke de alto contraste", "Montura protectora de cara completa", "Acabado premium antideslizante"],
        image: "/images/fotos nuevas/lentes de seguridad/Spearfish SmokeAnti-FogLens, ShinyBlack Fram.webp"
      },
      {
        name: "Sobrelentes 3M™ SecureFit™",
        desc: "Ajuste automático y perfecto sobre tus lentes graduados. Tecnología Pressure Diffusion que elimina puntos de presión molestos.",
        specs: ["Compatible con lentes de prescripción", "Ajuste automático Pressure Diffusion", "Protección lateral integrada"],
        image: "/images/fotos nuevas/lentes de seguridad/Sobrelentes 3M SecureFit.webp"
      },
      {
        name: "Protección 3M™ Scotchgard™",
        desc: "El estándar más alto en visibilidad. Recubrimiento que resiste el empañamiento incluso en los ambientes más húmedos y calurosos.",
        specs: ["Recubrimiento Scotchgard™ de larga duración", "Máxima resistencia a rayaduras", "Ideal para procesos críticos"],
        image: "/images/fotos nuevas/lentes de seguridad/Antiempaño 3m scotchgard.webp"
      }
    ]
  },
  "zapatos": {
    title: "Calzado Industrial",
    description: "Seguridad y ergonomía en cada paso. Nuestro calzado cuenta con certificación dieléctrica y punteras de protección para garantizar el bienestar del personal durante toda la jornada.",
    heroImage: "/images/productos/productos index/zapatos de seguridad.webp",
    items: [
      {
        name: "Zapato Industrial DIPPER",
        desc: "Balance ideal entre protección técnica y confort. Su diseño ergonómico y materiales transpirables lo hacen perfecto para supervisión y planta.",
        specs: ["Corte de piel genuina", "Dieléctrico certificado Clase E", "Casco de policarbonato ligero"],
        image: "/images/productos/productos index/zapatos de seguridad/Flamingo Choclo.webp"
      },
      {
        name: "Calzado de Seguridad CONQUEROR",
        desc: "Diseño de perfil bajo que maximiza la movilidad sin sacrificar la resistencia. Suela con tracción superior para superficies industriales complejas.",
        specs: ["Diseño Spyder Low aerodinámico", "Alta resistencia a aceites y químicos", "Casco de protección técnica"],
        image: "/images/productos/productos index/zapatos de seguridad/Calzado industrial Spyder Low.webp"
      },
      {
        name: "Tenis de Seguridad Quantum Dama",
        desc: "Protección técnica con diseño específico para dama. Fabricado en micropiel Nubuck para mayor suavidad y ligereza sin perder seguridad.",
        specs: ["Corte de Micropiel Nubuck", "Suela PU/TPU flexible", "Casco de seguridad de aluminio"],
        image: "/images/productos/productos index/zapatos de seguridad/Tenis de segurid quantum dama.webp"
      },
      {
        name: "Tenis de Seguridad Force",
        desc: "La evolución del calzado de seguridad. Comodidad de un calzado deportivo con la protección de un zapato industrial de alto desempeño.",
        specs: ["Micropiel Performance Suede", "Suela PU/TPU de alta tracción", "100% Dieléctrico con casco de aluminio"],
        image: "/images/productos/productos index/zapatos de seguridad/Tenis de seguridad Force.webp"
      },
      {
        name: "Bota de Trabajo Venture",
        desc: "Diseñada para terrenos difíciles. Su construcción hidrofugada y suela antiderrapante garantizan seguridad en condiciones húmedas o aceitosas.",
        specs: ["Micropiel hidrofugada de alta calidad", "Suela de hule SBR antiderrapante", "Protección contra abrasión"],
        image: "/images/productos/productos index/zapatos de seguridad/Bota de trabajajo venture.webp"
      },
      {
        name: "Choclo Industrial Sunbird",
        desc: "Línea industrial y de oficina con diseño ergonómico. Ofrece un balance perfecto entre protección técnica y una estética profesional para supervisión.",
        specs: ["Puntera de protección certificada", "Dieléctrico con protección integral", "Suela de alta tracción y durabilidad"],
        image: "/images/productos/productos index/zapatos de seguridad/Sunbird.webp"
      },
      {
        name: "Bota de Seguridad Standard",
        desc: "Protección robusta con refuerzo Bumper. Diseñada para resistir impactos frontales y proporcionar estabilidad en terrenos irregulares.",
        specs: ["Refuerzo Bumper en puntera", "Certificación NOM-113-STPS", "Plantilla confort antifatiga"],
        image: "/images/productos/productos index/zapatos de seguridad/CL Bumper.webp"
      }
    ]
  },
  "guantes": {
    title: "Guantes de Seguridad",
    description: "Protección manual especializada para cada riesgo. Desde resistencia química hasta protección de alto nivel contra cortes y abrasiones.",
    heroImage: "/images/productos/productos index/guantes de seguridad.webp",
    items: [
      {
        name: "Guante Resistente al Corte A5",
        desc: "Protección de vanguardia con tecnología Tuffalene. Ideal para el manejo de piezas con bordes afilados y procesos mecánicos de alto riesgo.",
        specs: ["Nivel de corte A5 certificado", "Tuffalene UHMWPE de alta densidad", "Excelente sensibilidad y agarre técnico"],
        image: "/images/productos/productos index/Guantes de seguridad/Guante resistente al corte A5.png"
      },
      {
        name: "Guante de Polietileno anti corte nivel 5",
        desc: "Protección mecánica avanzada para entornos de manufactura. Fabricado con fibras de polietileno de alta resistencia que previenen cortes accidentales durante la manipulación de piezas.",
        specs: ["Resistencia al corte Nivel 5", "Tejido transpirable de alto rendimiento", "Excelente ajuste ergonómico"],
        image: "/images/productos/productos index/Guantes de seguridad/Guante de Polietileno anti corte nivel 5.png"
      },
      {
        name: "Guante de Nitrilo Azul",
        desc: "Barrera química y mecánica de alta resistencia. Libre de látex, ideal para procesos de limpieza, laboratorios y manejo de químicos.",
        specs: ["Nitrilo de alto calibre", "Sin polvo y libre de látex", "Excelente sensibilidad táctil"],
        image: "/images/productos/productos index/Guantes de seguridad/Guante de Nitrilo Azul.png"
      },
      {
        name: "Guante Nylon con Palma de Poliuretano",
        desc: "Diseñado para ensambles delicados y precisión. Ofrece una transpirabilidad superior y protección contra abrasiones leves.",
        specs: ["Recubrimiento de PU microporoso", "Excelente agarre en seco", "Tejido de nylon sin costuras"],
        image: "/images/productos/productos index/Guantes de seguridad/Guante de nylon con palma de Poliuretano.png"
      },
      {
        name: "Guante Nylon con Palma de Nitrilo",
        desc: "Versatilidad y durabilidad en un solo guante. El recubrimiento de nitrilo proporciona una barrera impermeable contra grasas y aceites.",
        specs: ["Tratamiento antiderrapante", "Impermeable a aceites", "Ajuste ergonómico de precisión"],
        image: "/images/productos/productos index/Guantes de seguridad/Guante de nylon con palma de nitrilo.png"
      },
      {
        name: "Guante con Palma de Nitrilo y Puño de Loneta",
        desc: "Protección pesada para manejo de materiales rugosos. Su puño de loneta permite un desprendimiento rápido en situaciones de emergencia.",
        specs: ["Forro 100% Jersey de algodón", "Recubrimiento de nitrilo extra grueso", "Protección mecánica superior"],
        image: "/images/productos/productos index/Guantes de seguridad/Guante de seguridad recubrimiento de nitrilo, con puño de loneta.png"
      }
    ]
  },
  "auditivos": {
    title: "Protección Auditiva",
    description: "Preservamos la salud auditiva de tu capital humano con equipos de reducción de ruido de alta tecnología y confort excepcional.",
    heroImage: "/images/productos/productos index/auditivo.webp",
    items: [
      {
        name: "3M PELTOR Optime 98 H9A",
        desc: "Orejeras de diadema con ingeniería acústica superior. Proveen una atenuación constante para ruidos industriales de alta frecuencia.",
        specs: ["NRR de 25 dB", "Diadema de acero inoxidable", "Cojines de sellado ultra-suaves"],
        image: "/images/fotos nuevas/Auditivos/3M PELTOR Optime Orejeras 98 H9A.webp"
      },
      {
        name: "Alphas Tapones Reutilizables",
        desc: "Higiene y protección en un diseño de triple pestaña. Fabricados en material hipoalergénico para un ajuste hermético y cómodo.",
        specs: ["Triple pestaña de sellado óptimo", "Material lavable y duradero", "Incluye estuche protector"],
        image: "/images/fotos nuevas/Auditivos/Alphas Tapones Auditivos Reutilizables.webp"
      },
      {
        name: "Tapón Libus Quantum Reusable",
        desc: "Protección portátil con cordón de seguridad. Silicona de grado médico que se adapta a la forma única del canal auditivo.",
        specs: ["NRR de 26 dB", "Silicona hipoalergénica premium", "Cordón de alta visibilidad incluido"],
        image: "/images/fotos nuevas/Auditivos/Tapón Reusable Libus Quantum.webp"
      }
    ]
  },
  "respiratoria": {
    title: "Protección Respiratoria",
    description: "Equipos de filtración avanzados para garantizar la pureza del aire inhalado. Protegemos la salud pulmonar de tus trabajadores contra polvos, gases y vapores nocivos.",
    heroImage: "/images/productos/productos index/proteccion respiratoria.webp",
    items: [
      {
        name: "Respiradores Media Cara Reutilizables",
        desc: "Sistemas de protección dual con sellado hermético. Compatibles con una amplia gama de cartuchos para diversos riesgos químicos y biológicos.",
        specs: ["Material elastomérico hipoalergénico", "Válvula de exhalación de flujo rápido", "Arnés de sujeción ergonómico ajustable"],
        image: "/images/fotos nuevas/Protección Respiratoria/Respiradores Reutilizables.webp"
      },
      {
        name: "Respiradores Desechables N95",
        desc: "Filtración eficiente para partículas no aceitosas. Ligeros y confortables, ideales para procesos de lijado, construcción y manufactura general.",
        specs: ["Certificación NIOSH N95", "Clip nasal de ajuste metálico", "Bajas resistencias a la respiración"],
        image: "/images/fotos nuevas/Protección Respiratoria/Respiradores Desechables.webp"
      },
      {
        name: "Cubrebocas Desechable Tricapa",
        desc: "Protección higiénica de alta calidad. Fabricado con tecnología de termosellado y tres niveles de filtración para entornos de salud y alimentación.",
        specs: ["Filtrado bacteriano eficiente", "Ajuste elástico suave", "100% libre de fibra de vidrio"],
        image: "/images/fotos nuevas/Protección Respiratoria/Cubrebocas Desechable.webp"
      }
    ]
  },
  "ropa-antiestatica": {
    title: "Ropa Antiestática (ESD)",
    description: "Control total de descargas electrostáticas para proteger la integridad de componentes electrónicos y procesos sensibles. Tecnología conductiva integrada.",
    heroImage: "/images/productos/productos index/ropa antiestatica.webp",
    items: [
      {
        name: "Bata Antiestática ESD",
        desc: "Indumentaria crítica para laboratorios y líneas de ensamble electrónico. Disipa la carga estática de forma constante y segura.",
        specs: ["Tejido con filamentos de carbono", "Disipación de carga certificada", "Bolsillos reforzados y cierre seguro"],
        image: "/images/fotos nuevas/Ropa Antiestática/Bata.webp"
      },
      {
        name: "Overol Antiestático Completo",
        desc: "Protección máxima para áreas controladas. Diseño de una sola pieza que minimiza la contaminación y garantiza protección ESD total.",
        specs: ["Ideal para cuartos limpios", "Resistencia superficial certificada", "Tejido de alta durabilidad y transpirable"],
        image: "/images/fotos nuevas/Ropa Antiestática/Overol.webp"
      },
      {
        name: "Gorra Antiestática de Precisión",
        desc: "Accesorio indispensable para el control de partículas y estática en áreas de manufactura de alta sensibilidad.",
        specs: ["Ajuste elástico universal", "Rejilla conductiva integrada", "Ligera y diseñada para uso continuo"],
        image: "/images/fotos nuevas/Ropa Antiestática/Gorra.webp"
      }
    ]
  },
  "uniformes": {
    title: "Ropa de Trabajo y Uniformes",
    description: "Resistencia y profesionalismo en cada prenda. Diseñamos uniformes industriales que soportan el uso rudo manteniendo una imagen corporativa impecable.",
    heroImage: "/images/productos/productos index/ropa de trabajo y uniformes.webp",
    items: [
      {
        name: "Camisolas de Mezclilla y Gabardina",
        desc: "Construcción robusta para los desafíos diarios. Ofrecen protección contra la abrasión y mantienen la frescura gracias a sus fibras naturales.",
        specs: ["Mezclilla/Gabardina de alto gramaje", "Costuras dobles reforzadas", "Botones industriales de alta resistencia"],
        image: "/images/fotos nuevas/Ropa de Trabajo y Uniformes/Camisolas de MezclillaGabardina.webp"
      },
      {
        name: "Overoles de Algodón Industrial",
        desc: "Protección corporal completa con movilidad optimizada. Equipados con múltiples bolsillos funcionales para herramientas y accesorios.",
        specs: ["Algodón 100% de alta densidad", "Cierre frontal reforzado", "Ajuste elástico en cintura"],
        image: "/images/fotos nuevas/Ropa de Trabajo y Uniformes/Overoles Algodón.webp"
      },
      {
        name: "Pantalón de Mezclilla Industrial",
        desc: "El estándar en durabilidad. Diseñados para resistir los entornos de producción más exigentes sin comprometer la comodidad del usuario.",
        specs: ["Mezclilla técnica de 14 oz", "Refuerzos en puntos de mayor tensión", "Corte amplio para movilidad táctica"],
        image: "/images/fotos nuevas/Ropa de Trabajo y Uniformes/Pantalón de Mezclilla.webp"
      }
    ]
  },
  "ropa-medica": {
    title: "Ropa Médica y Desechable",
    description: "Soluciones de barrera eficientes para entornos que exigen higiene total. Productos desechables de alta resistencia para el sector salud e industrial.",
    heroImage: "/images/productos/productos index/ropa medico.webp",
    items: [
      {
        name: "Bata para Paciente Desechable",
        desc: "Higiene y privacidad garantizadas. Fabricada con materiales suaves al tacto que proporcionan una barrera efectiva contra contaminantes.",
        specs: ["Polipropileno SMS de alta calidad", "Cierre de cintas ajustable", "Uso clínico e industrial"],
        image: "/images/fotos nuevas/ropa desechable/Bata Paciente.webp"
      },
      {
        name: "Cubrezapato con Antiderrapante",
        desc: "Seguridad operativa en áreas críticas. Suela con tracción especial para evitar resbalones mientras se mantiene el control de contaminación.",
        specs: ["Base con bandas antiderrapantes", "Material resistente al desgaste", "Ajuste elástico firme"],
        image: "/images/fotos nuevas/ropa desechable/Cubrezapato sin o con Antiderrapante.webp"
      },
      {
        name: "Falda y Bikini Desechable",
        desc: "Complementos de higiene para procedimientos específicos. Higiene y comodidad en presentaciones individuales selladas.",
        specs: ["Material suave e hipoalergénico", "Máxima higiene por pieza", "Empaque individual protector"],
        image: "/images/fotos nuevas/ropa desechable/Falda y Bikini Desechable.webp"
      }
    ]
  },
  "pintura": {
    title: "Consumibles para Pintura",
    description: "Insumos técnicos para acabados de alta calidad. Todo lo necesario para procesos de preparación, aplicación y pulido en la industria.",
    heroImage: "/images/productos/productos index/consumible para pintura.webp",
    items: [
      {
        name: "Almohadillas para Amoladora",
        desc: "Optimiza tus procesos de pulido y desbaste fino. Accesorios duraderos diseñados para lograr superficies perfectamente uniformes.",
        specs: ["Fijación segura de alta rotación", "Resistencia térmica superior", "Ideal para metales y plásticos"],
        image: "/images/fotos nuevas/Consumibles para Pintura/Almohadillas para Amoladora Angular.webp"
      },
      {
        name: "Lijas Industriales de Precisión",
        desc: "Amplia gama de granos para tratamientos de superficie desde el nivelado grueso hasta el acabado espejo.",
        specs: ["Granos certificados de alta eficiencia", "Soporte resistente a la humedad", "Larga vida útil por pieza"],
        image: "/images/fotos nuevas/Consumibles para Pintura/Lijas.webp"
      },
      {
        name: "Trapo Tubular Pro-Pintado",
        desc: "Limpieza crítica sin rastro de pelusa. Esencial para la preparación de superficies previa a la aplicación de recubrimientos.",
        specs: ["Tejido 100% libre de contaminantes", "Alta capacidad de absorción", "Diseño tubular sin costuras"],
        image: "/images/fotos nuevas/Consumibles para Pintura/Trapo Tubular.webp"
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
