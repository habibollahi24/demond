import getCurrentUser from '@/helper/getCurrentUser';

import React from 'react';
import styles from './Dashboard.module.scss';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'the best authentication',
};

export default async function DashboardPage() {
  const { user } = await getCurrentUser();

  return (
    <div className={styles.grid}>
      <div className={`${styles.item} ${styles.item0}`}>
        <Image
          src={user?.picture.medium || ''}
          alt="User"
          width={100}
          height={100}
          unoptimized
        />
      </div>
      <div className={`${styles.item} ${styles.item1}`}>
        <h3>{`I am ${user?.mood} ${user?.moodIcon}`}</h3>
      </div>
      <div className={`${styles.item} ${styles.item2}`}>
        <h3>{`${user?.name.title} ${user?.name.first} ${user?.name.last} ${user?.moodIcon}`}</h3>
        <p>{user?.gender}</p>
      </div>
      <div className={`${styles.item} ${styles.item3}`}>
        <h3>📞 Phone</h3>
        <p>{user?.phone}</p>
      </div>
      <div className={`${styles.item} ${styles.item4}`}>
        <h3>🏠 Address</h3>
        <p>
          {user?.location.street.number} {user?.location.street.name},
          <br />
          {user?.location.city}, {user?.location.state},
          {user?.location.country} - {user?.location.postcode}
        </p>
      </div>
      <div
        className={`${styles.item} ${styles.item5} ${styles.desktopOnly}`}
      >
        <h3>📧 Email</h3>
        <p>{user?.email}</p>
      </div>
    </div>
  );
}
