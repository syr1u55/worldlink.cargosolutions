
import styles from "./page.module.css";

export default function AirFreight() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Air Freight</h1>
        <div className={styles.content}>
          <p>
            Worldlink Cargo Solutions offers comprehensive air freight management solutions that allow you to track and manage your shipments with precision and ease. We understand the critical nature of air cargo and are committed to providing fast, reliable, and secure transportation services for your time-sensitive goods.
          </p>
          <p>
            Our global network and strategic partnerships with leading airlines ensure flexible routing options and competitive transit times. From urgent deliveries to specialized cargo, Worldlink Cargo Solutions provides end-to-end visibility and expert handling, ensuring your air freight arrives safely and on schedule.
          </p>
        </div>
      </main>
    </div>
  );
}
