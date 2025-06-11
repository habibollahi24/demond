import { cookies } from 'next/headers';
import React from 'react';

export default async function OnlyLoggedOut({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get('authToken');

  const isLoggedOut = Boolean(!token);

  if (!isLoggedOut) return null;
  return children;
}
