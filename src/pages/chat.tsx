import WithAuth from '../utils/withAuth';

const Chat = () => {
  return (
    <div>
      <p>This is the chat, protected with WithAuth</p>
      <p>Only authorized users can access it</p>
    </div>
  );
};

export default WithAuth(Chat);
