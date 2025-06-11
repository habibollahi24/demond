'use server';

import { cookies } from 'next/headers';

export default async function logoutAction() {
  (await cookies()).delete('authToken');
  (await cookies()).delete('restData');

  return { message: 'Delete Success' };
}
