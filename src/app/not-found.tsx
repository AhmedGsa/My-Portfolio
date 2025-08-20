import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Page Not Found</h2>
        <p className={styles.description}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link href="/" className={styles.button}>
          Back to Home
        </Link>
      </div>
    </div>
  );
} 