<<<<<<< HEAD
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
=======

"use client";

import { useState } from "react";

interface TrackingInfo {
  status: string;
  location?: string;
  estimatedDelivery?: string;
  details?: { date: string; time: string; status: string }[];
  message?: string;
}
import styles from "./page.module.css";

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingInfo, setTrackingInfo] = useState<TrackingInfo | null>(null);

  const handleTrack = () => {
    // Simulate API call
    if (trackingNumber === "12345") {
      setTrackingInfo({
        status: "In Transit",
        location: "New York, USA",
        estimatedDelivery: "2025-09-20",
        details: [
          { date: "2025-09-14", time: "10:00 AM", status: "Shipped from origin" },
          { date: "2025-09-15", time: "03:00 PM", status: "Arrived at sorting facility" },
          { date: "2025-09-16", time: "08:00 AM", status: "In transit to destination" },
        ],
      });
    } else if (trackingNumber === "67890") {
      setTrackingInfo({
        status: "Delivered",
        location: "London, UK",
        estimatedDelivery: "2025-09-10",
        details: [
          { date: "2025-09-08", time: "09:00 AM", status: "Shipped from origin" },
          { date: "2025-09-09", time: "02:00 PM", status: "Arrived at destination country" },
          { date: "2025-09-10", time: "11:00 AM", status: "Delivered" },
        ],
      });
    } else if (trackingNumber === "11223") {
      setTrackingInfo({
        status: "Pending",
        location: "Warehouse, Accra",
        estimatedDelivery: "2025-09-25",
        details: [
          { date: "2025-09-16", time: "11:00 AM", status: "Order received" },
          { date: "2025-09-16", time: "02:00 PM", status: "Pending" },
        ],
      });
    } else if (trackingNumber === "54321") {
      setTrackingInfo({
        status: "Pending Dispatch",
        location: "Warehouse, Lagos",
        estimatedDelivery: "2025-09-25",
        details: [
          { date: "2025-09-16", time: "11:00 AM", status: "Order received" },
          { date: "2025-09-16", time: "02:00 PM", status: "Pending Dispatch" },
        ],
      });
    } else if (trackingNumber === "98765") {
      setTrackingInfo({
        status: "Pending Dispatch Authorization",
        location: "Warehouse, Lagos",
        estimatedDelivery: "2025-09-28",
        details: [
          { date: "2025-09-17", time: "09:00 AM", status: "Order received" },
          { date: "2025-09-17", time: "11:00 AM", status: "Pending Dispatch" },
          { date: "2025-09-17", time: "03:00 PM", status: "Pending Dispatch Authorization" },
        ],
      });
    } else {
      setTrackingInfo({ status: "Not Found", message: "Tracking number not found." });
>>>>>>> 231c9eec9d35a9151fdfb9bd7a7de04224e90b2c
    }
  };

  return (
<<<<<<< HEAD
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
=======
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Shipment Tracking</h1>
        <div className={styles.content}>
          <p>Track your shipment by entering the tracking number below.</p>
          <div className={styles.form}>
            <input
              type="text"
              placeholder="Enter your tracking number (e.g., 12345, 67890, 54321, 98765, or 11223)"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            <button onClick={handleTrack}>Track</button>
          </div>

          {trackingInfo && (
            <div className={styles.trackingResults}>
              <h2>Tracking Status: {trackingInfo.status}</h2>
              {trackingInfo.message ? (
                <p>{trackingInfo.message}</p>
              ) : (
                <>
                  <p><strong>Current Location:</strong> {trackingInfo.location}</p>
                  <p><strong>Estimated Delivery:</strong> {trackingInfo.estimatedDelivery}</p>
                  <h3>Details:</h3>
                  {trackingInfo.details && trackingInfo.details.length > 0 && (
                    <ul className={styles.trackingDetails}>
                      {trackingInfo.details.map((event, index) => (
                        <li key={index}>
                          <span>{event.date} {event.time}</span> - <span>{event.status}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </main>
>>>>>>> 231c9eec9d35a9151fdfb9bd7a7de04224e90b2c
    </div>
  );
}
