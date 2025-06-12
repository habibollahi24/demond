import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.scss';
import Header from '@/components/Header';
import { UserProvider } from '@/context/UserProvider';

import getCurrentUser from '@/helper/getCurrentUser';

const poppins = Poppins({
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ],
  variable: '--font-poppins',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Auth me',
  description: 'the best authentication',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await getCurrentUser();

  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <UserProvider currentUser={user}>
          <Header />
          <div className="container">{children}</div>
        </UserProvider>
      </body>
    </html>
  );
}
