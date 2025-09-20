
import styles from "./page.module.css";

export default function ForwardingServices() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Forwarding Services</h1>
        <div className={styles.content}>
          <p>
            Worldlink Cargo Solutions offers freight forwarding services at its best, providing seamless and efficient transportation solutions for your goods across the globe. We act as an intermediary between shippers and various transportation services, handling all aspects of the logistics process.
          </p>
          <p>
            Our expertise includes customs clearance, documentation, cargo insurance, and warehousing, ensuring a smooth flow of your supply chain. With a vast network of carriers and agents, we optimize routes and modes of transport to deliver your cargo safely, on time, and within budget.
          </p>
        </div>
      </main>
    </div>
  );
}
