import styles from './page.module.css';

interface ProgressBarProps {
  statuses: string[];
  currentStatus: string;
}

export default function ProgressBar({ statuses, currentStatus }: ProgressBarProps) {
  const currentStatusIndex = statuses.indexOf(currentStatus);

  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar}>
        {statuses.map((status, index) => (
          <div
            key={index}
            className={`${styles.progressNode} ${index <= currentStatusIndex ? styles.activeNode : ''}`}>
            <div className={styles.progressNodeCircle} />
            <div className={styles.progressNodeLabel}>{status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
