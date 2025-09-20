import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUsSection}>
      <div className={styles.container}>
        <h2>Why Choose Worldlink Cargo Solutions?</h2>
        <p className={styles.subtitle}>
          We are dedicated to providing top-notch logistics solutions tailored to your needs.
        </p>
        <div className={styles.grid}>
          <div className={styles.featureCard}>
            <h3>Global Network</h3>
            <p>Extensive network ensuring seamless delivery across continents.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>24/7 Support</h3>
            <p>Our team is always available to assist you with any queries.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Secure & Reliable</h3>
            <p>Your cargo&apos;s safety and timely delivery are our top priorities.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Competitive Pricing</h3>
            <p>Affordable rates without compromising on service quality.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
