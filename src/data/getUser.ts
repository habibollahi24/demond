import { GetUserType } from '@/features/auth/type.auth';

export default async function getUser() {
  const response = await fetch(
    'https://randomuser.me/api/?results=1&nat=us'
  );

  if (!response.ok) {
    throw Error('erro acoured' + response.status);
  }

  const data = (await response.json()) as GetUserType;
  return data;
}
