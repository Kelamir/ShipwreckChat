import ChatList from '@/components/ChatList/';
import InputArea from '@/components/InputArea/';
import Landing from '@/components/Landing/';
import MessageList from '@/components/MessageList/MessageList';

export default function Home() {
  const isLoggedIn = false;
  return <>{isLoggedIn ? <ChatList /> : <Landing />}</>;
}
