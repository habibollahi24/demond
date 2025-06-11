import currentUser from '@/actions/action.currentuser';
import { cookies } from 'next/headers';

export default async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get('authToken')?.value;
  const restData = cookieStore.get('restData')?.value;

  if (!token || !restData) return { message: 'Error', user: null };

  return await currentUser(token, restData);
}
