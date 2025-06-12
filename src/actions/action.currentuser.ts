'use server';

import { UserType } from '@/features/auth/type.auth';
import { cache } from 'react';

const currentUser = cache(
  async (token: string | undefined, restData: string) => {
    console.log('cache apply');

    if (!token || !restData) return { message: 'Error', user: null };

    const res = await fetch(
      `https://randomuser.me/api/?results=1&nat=us&seed=${token}`
    );

    if (!res.ok) return { message: 'Error', user: null };
    const data = await res.json();
    const user = data.results[0];

    return {
      message: 'Ok',
      user: {
        ...user,
        ...JSON.parse(String(restData)),
      } as UserType,
    };
  }
);

export default currentUser;
