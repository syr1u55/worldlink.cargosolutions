
import styles from "./page.module.css";

export default function OnlineBooking() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Online Booking</h1>
        <div className={styles.content}>
          <p>Please fill out the form below to book our services.</p>
          <form className={styles.form}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="tel" placeholder="Your Phone" />
            <select>
              <option value="">Select Service Type</option>
              <option value="land">Land Transport</option>
              <option value="sea">Sea Freight</option>
              <option value="air">Air Freight</option>
              <option value="warehousing">Warehousing</option>
              <option value="diplomatic">Diplomatic Shipment</option>
            </select>
            <input type="date" placeholder="Date" />
            <input type="time" placeholder="Time" />
            <textarea placeholder="Additional Message"></textarea>
            <button type="submit">Book Now</button>
          </form>
        </div>
      </main>
    </div>
  );
}
