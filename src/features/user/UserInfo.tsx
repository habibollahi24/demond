'use client';

import { useUser } from '@/context/UserProvider';
import React from 'react';

export default function UserInfo() {
  const { user } = useUser();
  return (
    <div>
      UserInfo - {user?.cell} / {user?.phone} / {user?.mood} /{' '}
      {user?.moodIcon}
    </div>
  );
}
