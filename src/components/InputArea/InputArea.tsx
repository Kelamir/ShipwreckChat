export default function InputArea() {
  return (
    <>
      <div className="fixed bottom-0 w-3/4 mx-auto bg-white py-2 px-4">
        <form className="flex items-center">
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
