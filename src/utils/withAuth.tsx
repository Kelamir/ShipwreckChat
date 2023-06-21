// withAuth.tsx
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (Component: React.ComponentType) => {
  const AuthenticatedComponent: React.FC = (props) => {
    const router = useRouter();
    const { user, isLoading } = useUser();
    const isAuthenticated = user;

    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        router.push('/login');
      }
    }, [isAuthenticated, router, isLoading]);

    return isAuthenticated ? <Component {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
