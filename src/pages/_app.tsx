// pages/_app.js
import type { AppType } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { trpc } from '@/utils/trpc';

import './globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
};

export default trpc.withTRPC(MyApp);
