'use client';

import { useActionState, useEffect } from 'react';
import { loginAction } from '../../../actions/action.login';
import styles from './AuthForm.module.scss';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserProvider';

const moods = [
  { id: 'happy', label: 'Happy', icon: '😊' },
  { id: 'sad', label: 'Sad', icon: '😢' },
  { id: 'angry', label: 'Angry', icon: '😡' },
  { id: 'excited', label: 'Excited', icon: '🤩' },
  { id: 'bored', label: 'Bored', icon: '😐' },
  { id: 'sleepy', label: 'Sleepy', icon: '😴' },
];

export default function AuthForm() {
  const { addUser } = useUser();
  const router = useRouter();
  const initialState = { success: false, message: '', user: null };
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialState
  );

  useEffect(() => {
    if (!state) return;
    if (state.success && state.user) {
      addUser(state.user);
      router.push('/dashboard');
    }
  }, [state, router]);

  return (
    <form className={styles.form} action={formAction}>
      <h2>Login</h2>

      <div>
        <label htmlFor="phone" className={styles.inoutLabel}>
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="09..."
        />
      </div>
      <div>
        <div className={styles.inoutLabel}>Mood!</div>
        <div className={styles.moods}>
          {moods.map((mood) => (
            <label key={mood.id} className={styles.moodOption}>
              <input
                type="radio"
                name="mood"
                value={JSON.stringify({
                  id: mood.id,
                  label: mood.label,
                  icon: mood.icon,
                })}
                //   required
              />
              <span>{mood.icon}</span>
              <span>{mood.label}</span>
            </label>
          ))}
        </div>
      </div>

      <button type="submit" disabled={pending}>
        {pending ? 'Loading...' : 'Login'}
      </button>
      {state.message && (
        <p className={state.success ? styles.success : styles.error}>
          {state.message}
        </p>
      )}
    </form>
  );
}
