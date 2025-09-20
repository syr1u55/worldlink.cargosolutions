
import styles from "./page.module.css";

export default function ContactUs() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3>Worldlink Cargo Solutions</h3>
            <p>52 Mintern Street, Commercial Unit,</p>
            <p>Hoxton, London, United Kingdom, N1 5EG</p>
            <p>Phone: +1 (936) 635 - 0467</p>
<<<<<<< HEAD
            <p>Email: customercare@worldlinkcargosolutions.com</p>
=======
            <p>Email: customercare@worldlinkcargo.com</p>
>>>>>>> 231c9eec9d35a9151fdfb9bd7a7de04224e90b2c
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
