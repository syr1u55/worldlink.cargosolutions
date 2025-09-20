import styles from './ServicesHero.module.css';

const ServicesHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Our Comprehensive Logistics Services</h1>
        <p>Delivering excellence across all modes of transportation and supply chain management.</p>
      </div>
    </div>
  );
};

export default ServicesHero;
