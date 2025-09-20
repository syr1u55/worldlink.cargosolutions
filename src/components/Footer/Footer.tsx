import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>Worldlink Cargo Solutions</h3>
          <p>Your trusted partner in logistics and supply chain management.</p>
        </div>
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Services</h3>
          <ul>
            <li><Link href="/services/air-freight">Air Freight</Link></li>
            <li><Link href="/services/sea-freight">Sea Freight</Link></li>
            <li><Link href="/services/land-transport">Land Transport</Link></li>
            <li><Link href="/services/warehousing">Warehousing</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Contact Us</h3>
          <p>Email: info@worldlinkcargo.com</p>
          <p>Phone: +15803168135</p>
          <p>Address: 123 Main St, Anytown, CA 90210</p>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Worldlink Cargo Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
