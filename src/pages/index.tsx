import ChatList from '@/components/ChatList/';
import InputArea from '@/components/InputArea/';
import Landing from '@/components/Landing/';
import MessageList from '@/components/MessageList/MessageList';
import Profile from '@/components/Profile';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  const { user, isLoading } = useUser();
  return <>{!isLoading && user ? <Profile /> : <Landing />}</>;
}
