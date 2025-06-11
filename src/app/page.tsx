import Link from 'next/link';
import styles from './page.module.scss';
import OnlyLoggedIn from '@/components/OnlyLoggedIn';
import OnlyLoggedOut from '@/components/OnlyLoggedOut';

export default function Home() {
  return (
    <div className={styles.page}>
      <h3>Home Page</h3>

      <OnlyLoggedIn>
        <Link href="/dashboard" className={styles.primaryButton}>
          dashboard
        </Link>
      </OnlyLoggedIn>
      <OnlyLoggedOut>
        <Link className={styles.primaryButton} href="/auth">
          login
        </Link>
      </OnlyLoggedOut>
    </div>
  );
}
