import AuthForm from '@/features/auth/components/AuthForm';
import Image from 'next/image';

import styles from './AuthPage.module.scss';

export default function AuthPage() {
  return (
    <div className={styles.authPage}>
      <AuthForm />
      <div className={styles.cartImage}>
        <Image
          src="/ve.jpg"
          alt="auth image"
          width={500}
          height={450}
        />
      </div>
    </div>
  );
}
