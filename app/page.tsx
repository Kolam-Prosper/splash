import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-orange-500"></div>
            <span className="font-bold text-2xl">Kolam Prosper</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/whitepaper" className="hover:text-orange-500 transition-colors">
              Whitepaper
            </Link>
            <Link href="/pitch-deck" className="hover:text-orange-500 transition-colors">
              Pitch Deck
            </Link>
            <Link href="/dapp" className="hover:text-orange-500 transition-colors">
              dApp
            </Link>
          </nav>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Democratizing Access to <span className="text-orange-500">Real Estate</span> and{" "}
              <span className="text-orange-500">T-Bonds</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Kolam Prosper is a blockchain-based platform that enables fractional ownership of real estate and
              tokenized treasury bonds, making premium investments accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/dapp">
                <Button size="lg" className="w-full sm:w-auto">
                  Launch dApp
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/whitepaper">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Read Whitepaper
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-3xl p-8 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Kolam Prosper Platform"
                className="max-w-full rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-black/80 backdrop-blur-sm p-4 rounded-xl border border-gray-800">
              <div className="text-sm font-medium mb-1">Total Value Locked</div>
              <div className="text-2xl font-bold text-orange-500">$24.5M</div>
            </div>
          </div>
        </main>

        <section className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Tokenized Assets</h3>
              <p className="text-gray-300">
                Real estate properties and treasury bonds are tokenized on the blockchain, creating fractional ownership
                opportunities.
              </p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Invest & Earn</h3>
              <p className="text-gray-300">
                Purchase tokens representing ownership in premium assets and earn passive income through rent and
                interest payments.
              </p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Trade & Liquidate</h3>
              <p className="text-gray-300">
                Easily trade your tokens on our marketplace or use them as collateral for loans without selling your
                assets.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

