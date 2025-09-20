import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Worldlink Cargo Solutions</Link>
      </div>
      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
        <Link href="/" onClick={toggleMenu}>Home</Link>
        <Link href="/about" onClick={toggleMenu}>About</Link>
        <Link href="/services" onClick={toggleMenu}>Services</Link>
        <Link href="/tracking" onClick={toggleMenu}>Tracking</Link>
        <Link href="/contact" onClick={toggleMenu}>Contact Us</Link>
        <div className={styles.quoteMobile}>
          <Link href="/quote" className={styles.quoteButton} onClick={toggleMenu}>Get a Quote</Link>
        </div>
      </nav>
      <div className={styles.quoteDesktop}>
        <Link href="/quote" className={styles.quoteButton}>Get a Quote</Link>
      </div>
    </header>
  );
};

export default Header;