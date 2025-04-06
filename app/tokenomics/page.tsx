import Link from "next/link"
import TokenomicsFlow from "./tokenomics-flow"

export default function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-orange-500">Kolam Prosper Tokenomics</h2>
            <p className="text-gray-300 mb-6">
              Our tokenomics model is designed to create a sustainable ecosystem that benefits all participants while
              maintaining the stability and value of our assets.
            </p>
          </div>

          <TokenomicsFlow />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Token Utility</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>LST AED is an interest-bearing flatcoin</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Only minted when Bonds or Deeds are staked</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Used for lending, borrowing, and investment in the ecosystem</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Pays dividends annually to holders</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Treasury Management</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>70% of property value permanently held in treasury</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>30% held in escrow with relevant departments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Fee pool split 50/50 between lenders and treasury</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Treasury funds used to back token value and fund new developments</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Value Flow</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Investment → Property Development → Value Appreciation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Staking → LST AED Minting → Liquidity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Lending → Fee Generation → Rewards Distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Treasury Growth → Ecosystem Expansion → Increased Returns</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Sustainability Model</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>No token inflation - only backed by real assets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Self-sustaining ecosystem through fee generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Continuous reinvestment into new properties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Long-term value creation through real estate appreciation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/pitch-deck#slide-10" className="text-orange-500 hover:text-orange-400 transition-colors">
            ← Back to Pitch Deck
          </Link>
        </div>
      </div>
    </div>
  )
}

