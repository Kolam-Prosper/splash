import Link from "next/link"

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Kolam Prosper Whitepaper</h1>

        <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-lg p-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">Coming Soon</h2>
            <p className="mb-4">
              Our comprehensive whitepaper is currently being finalized and will be available shortly. The whitepaper
              will provide in-depth technical details about the Kolam Prosper protocol, including our innovative
              approach to tokenized real estate and T-bonds.
            </p>
            <p className="mb-4">
              In the meantime, please check out our{" "}
              <Link href="/pitch-deck" className="text-orange-500 hover:underline">
                Pitch Deck
              </Link>{" "}
              for an overview of our vision and solution.
            </p>
            <h3 className="text-xl font-semibold mt-8 mb-4">What to Expect in Our Whitepaper:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Detailed technical architecture of the Kolam Prosper protocol</li>
              <li>In-depth explanation of our tokenomics model</li>
              <li>Security measures and audit information</li>
              <li>Governance structure and community participation</li>
              <li>Comprehensive roadmap and development timeline</li>
              <li>Technical specifications for developers and integrators</li>
            </ul>
            <div className="mt-8 p-4 bg-gray-800 rounded-md">
              <p className="italic text-gray-300">
                "Our mission is to democratize access to real estate investment and create a more inclusive financial
                ecosystem through blockchain technology."
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Interested in learning more? Join our community or contact our team.</p>
          <Link href="mailto:contact@kol.am" className="text-orange-500 hover:text-orange-400 transition-colors">
            contact@kol.am
          </Link>
        </div>
      </div>
    </div>
  )
}

