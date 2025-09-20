
import styles from "./page.module.css";

export default function GetAQuote() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Get a Quote</h1>
        <div className={styles.content}>
          <p>Please fill out the form below to get a free quote for your shipment.</p>
          <form className={styles.form}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="tel" placeholder="Your Phone" />
            <select>
              <option value="">Select Shipment Type</option>
              <option value="land">Land Transport</option>
              <option value="sea">Sea Freight</option>
              <option value="air">Air Freight</option>
            </select>
            <input type="text" placeholder="Origin" />
            <input type="text" placeholder="Destination" />
            <input type="number" placeholder="Weight (kg)" />
            <input type="text" placeholder="Dimensions (LxWxH cm)" />
            <textarea placeholder="Additional Message"></textarea>
            <button type="submit">Submit Request</button>
          </form>
        </div>
      </main>
    </div>
  );
}
