import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Worldlink Cargo Solutions</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/tracking">Tracking</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
      <div className={styles.quote}>
        <Link href="/quote" className={styles.quoteButton}>Get a Quote</Link>
      </div>
    </header>
  );
};

export default Header;
