import styles from './Hero.module.css';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Reliable Logistics & Transport Solutions</h1>
        <p>Your trusted partner for efficient and secure global freight services.</p>
        <Link href="/quote" className={styles.button}>Get a Free Quote</Link>
      </div>
    </div>
  );
};

export default Hero;
