'use client';

import { useState } from 'react';
import styles from './page.module.css';
import ProgressBar from './ProgressBar';

interface TrackingInfo {
  trackingNumber: string;
  status: string;
  location: string;
  details: string;
  timestamp: string;
}

const statuses = ["Order confirmed", "Picked by Courier", "On The Way", "Ready for pickup", "Delivered"];

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState<TrackingInfo[] | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = async () => {
    if (!trackingNumber) {
      setError('Please enter a tracking number.');
      return;
    }

    setError('');
    setTrackingInfo(null);
    setIsLoading(true);

    try {
      const res = await fetch(`/api/tracking?trackingNumber=${trackingNumber}`);
      if (res.ok) {
        const data = await res.json();
        setTrackingInfo(data);
      } else {
        const errorText = await res.text();
        setError(`Error: ${errorText}`);
      }
    } catch (err) {
      setError('An error occurred while fetching tracking information.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Track Your Shipment</h1>
      <div className={styles.trackingForm}>
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="Enter your tracking number"
          className={styles.trackingInput}
        />
        <button onClick={handleTrack} className={styles.trackButton} disabled={isLoading}>
          {isLoading ? 'Tracking...' : 'Track'}
        </button>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      {isLoading && <p>Loading...</p>}

      {trackingInfo && trackingInfo.length > 0 && (
        <div className={styles.trackingResult}>
          <ProgressBar statuses={statuses} currentStatus={trackingInfo[0].status} />
          <h2>Tracking Details for {trackingNumber}</h2>
          {trackingInfo.map((info, index) => (
            <div key={index} className={`${styles.trackingItem} ${info.status === 'Delivered' ? styles.delivered : ''}`}>
              <p>
                <span className={styles.icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                </span>
                <strong>Status:</strong> {info.status}
                {info.status === 'Delivered' && <span className={styles.checkmark}> &#10004;</span>}
              </p>
              <p>
                <span className={styles.icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <strong>Location:</strong> {info.location}
              </p>
              <p>
                <span className={styles.icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </span>
                <strong>Details:</strong> {info.details}
              </p>
              <p>
                <span className={styles.icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </span>
                <strong>Timestamp:</strong> {new Date(info.timestamp).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}

      {trackingInfo && trackingInfo.length === 0 && (
        <p>No tracking information found for the tracking number: {trackingNumber}</p>
      )}
    </div>
  );
}
