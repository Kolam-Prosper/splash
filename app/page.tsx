import Link from "next/link"

export default function Home() {
  // For local development
  const dAppUrl = "/dapp"

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <main className="container mx-auto px-4 flex flex-col items-center justify-center text-center py-20 relative min-h-[calc(100vh-80px)]">
        {/* Background with increased opacity */}
        <div className="absolute inset-0 bg-[url('/network-bg.svg')] bg-no-repeat bg-center opacity-50 z-0"></div>

        <div className="z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Revolutionizing Finance
            <br />
            <span className="text-orange-500">Through Tokenization</span>
          </h1>

          <p className="text-gray-300 mb-8 text-lg">
            Tokenized T-bonds and property deeds with secure staking and non-liquidating loan options. Unlock the
            potential of real-world assets on the blockchain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={dAppUrl}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md inline-flex items-center justify-center"
            >
              Launch App
            </Link>
            <Link
              href="/learn-more"
              className="border border-white hover:bg-white/10 text-white px-6 py-2 rounded-md inline-flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

