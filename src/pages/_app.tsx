// pages/_app.js
import type { AppType } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
};

export default MyApp;
