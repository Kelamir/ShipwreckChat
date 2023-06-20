export default function MessageList() {
  return (
    <>
      <div className="h-screen w-3/4 bg-gray-200">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Chat Room Name</h1>
          <ul className="mt-4 space-y-4">
            <li className="text-right">
              <div className="inline-block bg-blue-500 text-white rounded py-1 px-3">
                <p>Hey there!</p>
              </div>
            </li>
            <li className="text-left">
              <div className="inline-block bg-gray-300 text-black rounded py-1 px-3">
                <p>Hello! How are you?</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
