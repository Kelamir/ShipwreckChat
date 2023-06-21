import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <>
      <div className="bg-gray-800 text-white font-serif">
        <div className="min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-5xl mb-8">Ahoy, welcome to ShipwreckChat!</h1>
          <p className="text-xl mb-12 px-4 text-center">
            Join our crew of fearsome pirates and set sail on the high seas of
            conversation. Trade tales of hidden treasures, secret maps, and
            daring adventures with fellow buccaneers from across the seven seas!
          </p>
          <div className="flex space-x-4">
            <Link
              href="/api/auth/login"
              className="bg-green-600 py-3 px-6 rounded-lg text-xl font-bold hover:bg-green-700"
            >
              Enter
            </Link>
          </div>
          <Image
            className="mt-12 w-72"
            src="/logo.png"
            alt="Pirate Ship"
            width="512"
            height="512"
          />
        </div>
      </div>
    </>
  );
}
