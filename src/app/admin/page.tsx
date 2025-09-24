'use client';

import { useState } from 'react';
import styles from './page.module.css';

const statuses = ["Order confirmed", "Picked by Courier", "On The Way", "Ready for pickup", "Delivered"];

export default function Admin() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [status, setStatus] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    if (!trackingNumber || !status || !location || !details) {
      setMessage('All fields are required');
      return;
    }

    try {
      const res = await fetch('/api/tracking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ trackingNumber, status, location, details }),
      });

      if (res.ok) {
        setMessage('Tracking information submitted successfully!');
        setTrackingNumber('');
        setStatus('');
        setLocation('');
        setDetails('');
      } else {
        const errorText = await res.text();
        setMessage(`Error: ${errorText}`);
      }
    } catch (error) {
      console.error('Error submitting tracking info:', error);
      setMessage('Error submitting tracking information. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Admin - Add Tracking Information</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="trackingNumber">Tracking Number</label>
          <input
            type="text"
            id="trackingNumber"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="" disabled>Select a status</option>
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="details">Details</label>
          <textarea
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}
