
import styles from "./page.module.css";

export default function ContactUs() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3>Worldlink Cargo Solutions</h3>
            <p>123 Main St, Anytown, CA 90210</p>
            <p>Phone: +1(580)316-8135</p>
            <p>Email: customercare@worldlinkcargosolutions.com</p>
          </div>
          <form className={styles.form}>
            <h3>Send us a message</h3>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </main>
    </div>
  );
}
