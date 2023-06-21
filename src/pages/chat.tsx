import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

function Chat() {
  return (
    <div>
      <p>This is the chat, protected with WithAuth</p>
      <p>Only authorized users can access it</p>
    </div>
  );
}

export default withPageAuthRequired(Chat);
