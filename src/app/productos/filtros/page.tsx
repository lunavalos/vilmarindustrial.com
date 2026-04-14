import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import { Wind, Droplets, UserCheck, ShieldCheck, ShoppingBag, Layers } from "lucide-react";
import styles from "./Filtros.module.css";

const categories = [
  {
    title: "Filtración de Aire",
    icon: <Wind size={32} />,
    products: [
      { name: "Filtro Cartón Plisado", desc: "Poliéster, fibra de vidrio. Para sistemas de inyección MERV8-15.", image: "/images/productos/filtros/filtro carton plisado.png" },
      { name: "Filtro Bolsa", desc: "Fibra de vidrio, poliéster. Para tren de filtrado UMA MERV8-15.", image: "/images/productos/filtros/filtro bolsa.png" },
      { name: "Filtro HEPA", desc: "Acero inoxidable, aluminio. Eficiencia desde 99.97% para ambientes controlados.", image: "/images/productos/filtros/filtro hepa.png" },
      { name: "Filtro Cartón Paint Box", desc: "Para cabinas de pintura sin flujo de agua, retención de pintura.", image: "/images/productos/filtros/filtro carton paint box.png" }
    ]
  },
  {
    title: "Filtros Líquidos",
    icon: <Droplets size={32} />,
    products: [
      { name: "Filtro Polipropileno", desc: "Para procesos de fosfato, elpo, circonio, agua, etc.", image: "/images/productos/filtros/filtro polipropileno.png" },
      { name: "Filtro Nylon", desc: "Para líquidos como pintura o solvente.", image: "/images/productos/filtros/filtro nylon1.png" },
      { name: "Filtro Cartucho", desc: "Sedimentos, micrajes de 1 hasta 300 micras.", image: "/images/productos/filtros/filtro cartucho.png" }
    ]
  },
  {
    title: "Trapos Especializados",
    icon: <ShoppingBag size={32} />,
    products: [
      { name: "Trapo Politex", desc: "100% poliéster corte cuchilla para limpieza general.", image: "/images/productos/filtros/filtro politex.png" },
      { name: "Trapos marca Berkshire", desc: "Tejidos y no tejidos, pre-saturados, corte 100% láser.", image: "/images/productos/filtros/Trapos marca Berkshire.png" },
      { name: "Trapo Tubular", desc: "Específico para pintura automotriz.", image: "/images/productos/filtros/trapo tubular.png" }
    ]
  },
  {
    title: "Equipo Antiestático y EPP",
    icon: <UserCheck size={32} />,
    products: [
      { name: "Overol Automotriz", desc: "Estatec. 99% poliéster y 1% fibra de carbono.", image: "/images/productos/filtros/overol automotriz.png" },
      { name: "Overol Farmacéutico", desc: "Para cuartos limpios, XS a 3XL.", image: "/images/productos/filtros/overol farmaceutico.png" },
      { name: "Insumos Varios", desc: "Masking tape, cintas, proyectos de enmascarado.", image: "/images/productos/filtros/proyectos de enmascarado.png" }
    ]
  }
];

export default function Filtros() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Filtros & Seguridad EPP"
          subtitle="Distribuidor autorizado de marcas líderes en filtración, suministros técnicos y equipo de protección personal."
        />

        <section className={styles.intro}>
          <div className="container">
            <div className={styles.categoryGrid}>
              {categories.map((cat, i) => (
                <div key={i} className={styles.categorySection}>
                  <div className={styles.categoryHeader}>
                    <div className={styles.iconCircle}>{cat.icon}</div>
                    <h2>{cat.title}</h2>
                  </div>
                  <div className={styles.productsGrid}>
                    {cat.products.map((p, j) => (
                      <div key={j} className={styles.productCard}>
                        {p.image && (
                          <div className={styles.productImageWrapper}>
                            <Image
                              src={p.image}
                              alt={p.name}
                              width={400}
                              height={250}
                              className={styles.productImage}
                            />
                          </div>
                        )}
                        <div className={styles.productInfo}>
                          <h3>{p.name}</h3>
                          <p>{p.desc}</p>
                          <div className={styles.brand}>Marca: PIEEM / Estatec / Berkshire</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.techHelp}>
          <div className="container">
            <div className={styles.helpBox}>
              <div className={styles.helpText}>
                <h2>¿Necesitas un producto especializado?</h2>
                <p>
                  Te ayudamos a desarrollar el producto ideal para tu proceso y mejorar la calidad
                  de tu producción. Contamos con amplia gama de especificaciones técnicas.
                </p>
              </div>
              <div className={styles.helpIcon}>
                <ShieldCheck size={64} />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
