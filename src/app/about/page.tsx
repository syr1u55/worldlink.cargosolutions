
import styles from "./page.module.css";

export default function AboutUs() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>About Worldlink Cargo Solutions</h1>
        <div className={styles.content}>
          <p>
            SAFE & SECURE DELIVERY SERVICES AROUND THE WORLD!
          </p>
          <p>
            Get expert shipping/delivery advice and customs support to prepare and manage your express shipments! As an expert in international shipping and freight delivery, Worldlink Cargo Solutions understands the needs of small and medium businesses.
          </p>
          <p>
            Worldlink Cargo Solutions is the largest consumer-to-consumer package transportation company that is trusted, tested and reliable!
          </p>
        </div>
      </main>
    </div>
  );
}
