export default function ChatList() {
  return (
    <>
      <div className="h-screen w-1/4 bg-gray-100">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Chats</h1>
          <ul className="mt-4">
            <li className="flex items-center mb-4 p-2 bg-white rounded shadow">
              <div className="ml-3">
                <h2 className="font-semibold">Username</h2>
                <p className="text-sm text-gray-600">Last message...</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
