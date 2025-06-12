'use client';

import React from 'react';

import styles from './Header.module.scss';
import Link from 'next/link';
import { useUser } from '@/context/UserProvider';
import logoutAction from '@/actions/action.logout';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { user, removeUser } = useUser();
  const router = useRouter();
  return (
    <div className={styles.header}>
      <div className={styles.containerHeader}>
        <Link href="/" className="authMe">
          AuthMe !
        </Link>

        {user && (
          <div style={{ display: 'flex', gap: '2px' }}>
            <button
              className={styles.secondaryButton}
              onClick={async () => {
                await logoutAction();
                removeUser();
                router.push('/auth');
              }}
            >
              logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
