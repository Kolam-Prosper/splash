import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0">
        <Image src="/network-bg.svg" alt="Network Background" fill priority className="object-cover" />
      </div>

      {/* Content */}
      <div className="z-10 max-w-5xl w-full text-center px-6 py-24">
        <div className="inline-block mb-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full">
          <p className="text-sm font-medium text-orange-500">Blockchain Technology</p>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Revolutionizing Finance
          <br />
          <span className="text-orange-500">Through Tokenization</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Tokenized T-bonds and property deeds with secure staking and non-fluctuating loan options. Unlock the
          potential of real-world assets on the blockchain.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://app.kolamprosper.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors inline-block"
          >
            Launch App
          </Link>

          <Link
            href="#learn-more"
            className="bg-transparent border border-white hover:border-orange-500 text-white hover:text-orange-500 px-6 py-3 rounded-md text-lg font-medium transition-colors inline-block"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </main>
  )
}

