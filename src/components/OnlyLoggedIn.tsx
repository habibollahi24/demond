import { cookies } from 'next/headers';
import React from 'react';

export default async function OnlyLoggedIn({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get('authToken');

  const isLoggedIn = Boolean(token);

  if (!isLoggedIn) return null;
  return children;
}
