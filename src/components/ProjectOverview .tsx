import React from 'react';
import styles from './ProjectOverview.module.scss';
import Link from 'next/link';
import OnlyLoggedIn from './OnlyLoggedIn';
import OnlyLoggedOut from './OnlyLoggedOut';

const ProjectOverview = () => {
  return (
    <div className={styles.projectOverview}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem',
        }}
      >
        <h3> Project Overview</h3>
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
      <ul>
        <li>
          Built with <strong>Next.js 15</strong>,{' '}
          <strong>TypeScript</strong>, and <strong>SCSS</strong>.
        </li>
        <li>
          A unique <strong>seed</strong> value is retrieved from the
          API and stored as a token in an{' '}
          <strong>httpOnly cookie</strong>.
        </li>
        <li>
          An additional cookie called <code>restData</code> is used to
          store user form inputs such as <strong>mood</strong> and{' '}
          <strong>phone number</strong>.
        </li>
        <li>
          The form uses <strong>server actions</strong> with{' '}
          <strong>manual validation</strong>.
        </li>
        <li>
          The token is passed to the API endpoint <br />
          <code>
            https://randomuser.me/api/?results=1&amp;nat=us&amp;seed=$
            {'{token}'}
          </code>{' '}
          <br />
          to ensure the same user is fetched even after page refresh.
        </li>
        <li>
          The <code>getCurrentUser</code> function depends on the
          cookie and is re-called on every refresh (not cached).
        </li>
        <li>
          The <code>useUser</code> hook fetches initial data via
          server action and handles login/logout actions on the
          server, then updates client-side state.
        </li>
        <li>
          Utility functions <code>OnlyLoggedIn</code> and{' '}
          <code>OnlyLoggedOut</code> are used to simplify access
          control in components.
        </li>
        <li>
          A <strong>middleware</strong> protects the{' '}
          <code>/dashboard</code> route, preventing unauthenticated
          access.
        </li>
      </ul>
    </div>
  );
};

export default ProjectOverview;
