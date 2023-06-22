import ChatList from '@/components/ChatList';
import MessageList from '@/components/MessageList';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

function Chat() {
  return (
    <div>
      <ChatList />
    </div>
  );
}

export default withPageAuthRequired(Chat);
