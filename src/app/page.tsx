<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/globe.svg" alt="Worldlink Cargo Solutions Logo" width={40} height={40} />
          <h1>Worldlink Cargo Solutions</h1>
        </div>
        <nav className={styles.nav}>
          <div className={styles.dropdown}>
            <a href="/services" className={styles.dropbtn}>Services</a>
            <div className={styles.dropdownContent}>
              <a href="/services/land-transport">Land Transport</a>
              <a href="/services/sea-freight">Sea Freight</a>
              <a href="/services/air-freight">Air Freight</a>
              <a href="/services/forwarding-services">Forwarding Services</a>
              <a href="/services/logistics">Logistics</a>
              <a href="/services/warehousing">Warehousing</a>
              <a href="/services/diplomatic-shipment">Diplomatic Shipment</a>
              <a href="/services/supply-chain">Supply Chain</a>
              <a href="/services/cargo-insurance">Cargo Insurance</a>
            </div>
          </div>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/tracking">Tracking</a>
          <a href="/quote">Get a Quote</a>
          <a href="/booking">Online Booking</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h2>ACCELERATE YOUR FREIGHT WITH WORLDLINK CARGO SOLUTIONS</h2>
            <p>SAFE & SECURE DELIVERY SERVICES AROUND THE WORLD!</p>
            <a href="/quote" className={styles.primary}>Get a Quote</a>
          </div>
        </section>

        <section className={styles.whatWeOffer}>
          <h2>WHAT WE OFFER</h2>
          <p>Whatever your business, whatever you’re building, packing and sending – Worldlink Cargo Solutions has you covered with state-of-the-art transportation and distribution solutions.</p>
          <a href="/services" className={styles.primary}>MORE ABOUT US</a>
        </section>

        <section id="services" className={styles.services}>
          <h2>Our Services</h2>
          <div className={styles.serviceGrid}>
            <Link href="/services/land-transport" className={styles.serviceCard}>
              <h3>Land Transport</h3>
              <p>We handle your parcel delivery with professionalism and thoroughness.</p>
            </Link>
            <Link href="/services/sea-freight" className={styles.serviceCard}>
              <h3>Sea Freight</h3>
              <p>Our Customized pricing of Ocean Transport is a major attraction.</p>
            </Link>
            <Link href="/services/air-freight" className={styles.serviceCard}>
              <h3>Air Freight</h3>
              <p>Worldlink Cargo Solutions freight management solutions can track and manage.</p>
            </Link>
            <Link href="/services/warehousing" className={styles.serviceCard}>
              <h3>Warehousing</h3>
              <p>We evaluate warehouse design strategically and provide solutions.</p>
            </Link>
          </div>
        </section>
      </main>

      <footer id="contact" className={styles.footer}>
        <div className={styles.footerContent}>
          <h3>Contact Us</h3>
          <p>Email: customercare@worldlinkcargosolutions.com</p>
          <p>Phone: +1 (936) 635 - 0467</p>
        </div>
      </footer>
    </div>
=======
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
    </main>
>>>>>>> 231c9eec9d35a9151fdfb9bd7a7de04224e90b2c
  );
}