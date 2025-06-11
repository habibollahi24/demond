'use server';

import { cookies } from 'next/headers';

import getUser from '@/data/getUser';
import { UserType } from '../features/auth/type.auth';

export type AuthFormType = {
  success: boolean;
  message: string;
  user?: UserType | null;
};

const mobileFormat = /^09\d{9}$/;

async function loginAction(
  prevState: AuthFormType,
  formData: FormData
): Promise<AuthFormType> {
  const cookieStore = await cookies();

  const phone = formData.get('phone') as string;

  const mood = formData.get('mood') as string;

  if (!phone && !mood) {
    return {
      success: false,
      message: 'Both fields are required!',
    };
  }

  if (!mobileFormat.test(phone)) {
    return {
      success: false,
      message: 'Valid format is 09....',
    };
  }
  if (!mood) {
    return { success: false, message: 'Chose a Mood!' };
  }

  const moodIcon = JSON.parse(mood).icon;
  const moodId = JSON.parse(mood).id;

  console.log('📞 Phone:', phone);
  console.log('🧠 Mood:', mood, moodIcon, moodId);

  //request to api
  const res = await getUser();

  //extract data
  const { results, info } = res;

  //create userData
  const user = {
    ...results[0],
    mood: moodId,
    moodIcon: moodIcon,
    phone,
  };

  //create Token
  const token = info.seed;

  console.log(user, token);
  //set cookie
  cookieStore.set({
    name: 'authToken',
    value: token,
    httpOnly: true,
    path: '/',
  });
  cookieStore.set({
    name: 'restData',
    value: JSON.stringify({
      mood: moodId,
      moodIcon: moodIcon,
      phone,
    }),
    httpOnly: true,
    path: '/',
  });
  //fill context

  //redirect to dashboard

  //Error handling

  return {
    success: true,
    message: `Welcome :)`,
    user,
  };
}

export { loginAction };
