import styles from "./PageHero.module.css";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          <div className={styles.breadcrumb}>
            <span>Inicio</span> / <span>{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
