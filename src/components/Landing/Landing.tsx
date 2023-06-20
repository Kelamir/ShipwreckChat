export default function Landing() {
  return (
    <>
      <body className="bg-gray-800 text-white font-serif">
        <div className="min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-5xl mb-8">Ahoy, welcome to ShipwreckChat!</h1>
          <p className="text-xl mb-12 px-4 text-center">
            Join our crew of fearsome pirates and set sail on the high seas of
            conversation. Trade tales of hidden treasures, secret maps, and
            daring adventures with fellow buccaneers from across the seven seas!
          </p>
          <div className="flex space-x-4">
            <a
              href="/login"
              className="bg-green-600 py-3 px-6 rounded-lg text-xl font-bold hover:bg-green-700"
            >
              Log In
            </a>
            <a
              href="/signup"
              className="bg-blue-600 py-3 px-6 rounded-lg text-xl font-bold hover:bg-blue-700"
            >
              Sign Up
            </a>
          </div>
          <img className="mt-12 w-72" src="logo.png" alt="Pirate Ship" />
        </div>
      </body>
    </>
  );
}
