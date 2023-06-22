import ChatList from '@/components/ChatList';
import { trpc } from '@/utils/trpc';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Chat() {
  const { user, isLoading } = useUser();
  const storeUserMutation = trpc.storeUser.useMutation({
    onSuccess: () => {
      console.log('done');
    },
  });
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) {
      storeUserMutation
        .mutateAsync({
          auth0Id: '1',
          email: user.email as string,
          username: user.nickname || user.name || (user.email as string), // from auth0
        })
        .then(() => {
          alert('stored user in pg db');
        })
        .catch((err: any) => {
          // Handle errors during user storage
          console.error('Error storing user:', err);
        });
    }
  }, [user, isLoading, storeUserMutation, router]);

  return (
    <div>
      <ChatList />
    </div>
  );
}

export default withPageAuthRequired(Chat);
