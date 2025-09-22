"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

export default function PitchDeck() {
  const [expandedSlide, setExpandedSlide] = useState<number | null>(null)

  const toggleExpand = (slideId: number) => {
    if (expandedSlide === slideId) {
      setExpandedSlide(null)
    } else {
      setExpandedSlide(slideId)
    }
  }

  const slides = [
    {
      id: 1,
      title: "Kolam Prosper",
      subtitle: "Positive Sum Investment through Tokenized Real Estate Deeds and T-Bonds.",
      content: "",
      bgClass: "bg-gradient-to-br from-black to-orange-900",
    },
    {
      id: 2,
      title: "Problem Statement",
      content: [
        "Home ownership is out of reach for most, it requires large initial capital and a long term commitment",
        "Newly purchased properties and T-bonds are illiquid",
        "There are not many alternatives to USD stablecoins",
        "DeFi loans are usually over-collateralized and carry liquidation risks",
      ],
      bgClass: "bg-gray-900",
    },
    {
      id: 3,
      title: "Solution: Local Currency Stablecoins backed by Property Deeds & T-Bonds",
      content: [
        "Our protocol offers local T-Bonds and represented Property Deeds",
        "Flatcoin is only minted when Bonds or Deeds are staked",
        "Users can release equity by staking or borrowing against their Bonds/Deeds",
        "Unlike standard stablecoins our flatcoin is interest bearing and pays dividends annually",
      ],
      bgClass: "bg-gray-900",
    },
    {
      id: 4,
      title: "Market Opportunity",
      content: [
        "Investment for smaller property developments is not of interest to major developers and so prices for individual plots and tower construction is lucrative but lacks investment",
        "Real estate is one of the strongest investments, especially at construction phase",
        "T-bonds are a great investment into government backed investments",
        "Target audience - Investors, homeowners, institutional players",
      ],
      bgClass: "bg-gray-900",
    },
    {
      id: 5,
      title: "How It Works",
      subtitle: "Property Deeds & T-Bonds",
      content: [
        {
          title: "Property Deeds",
          items: [
            "Buying an NFT Deed = Owning the right to claim the Property Deed at maturity",
            "18-month maturity with a 30% return",
            "70% of property value is permanently held within the treasury",
            "30% of funds are held in escrow with the relevant tender and land departments to ensure construction completion",
          ],
        },
        {
          id: 6,
          title: "T-Bonds",
          items: [
            "Buying a T-Bond equals 3,670 AED of UAE government-backed treasury bills, pegged at 3.67:1 to the USD",
            "The bond pays out interest annually for a minimum of 3 years at variable rate currently 3.5% APY",
            "Very secure asset class, government backed bond",
            "Tracked and audited investment for transparency",
          ],
        },
      ],
      bgClass: "bg-gray-900",
    },
    {
      id: 7,
      title: "Staking Model: AED LST Stablecoin",
      content: [
        "LST AED is a flatcoin it slightly differs from standard stablecoins as its an interest bearing token",
        "Stake NFT Bond or Deeds to release liquid staking token (LST AED)",
        "There is no way to mint tokens without staking a Bond or Deed",
        {
          title: "Tranches are released dependant on locking period:",
          items: [
            "1 Month = 10% of Value",
            "3 Months = 20%",
            "6 Months = 35%",
            "9 months = 50%",
            "12 Months = 75%",
            "18 Months = 100%",
          ],
        },
      ],
      bgClass: "bg-gray-900",
    },
    {
      id: 8,
      title: "Lending & Borrowing",
      content: [
        "As part of our commitment to positive sum investing, we offer non-liquidating loans and rewards for becoming a lender",
        "Borrow up to 70% of property value without liquidation risk you have up to 3 years to claim expired locked Bonds or Deeds then they will return to the treasury",
        "Instead of traditional interest payments, a fixed fee of 1% per month applies to all loans",
        "Lenders earn from the Fee Pool split 50/50 pool and treasury",
      ],
      bgClass: "bg-gray-900",
    },
    {
      id: 9,
      title: "Ecosystem & Use Cases",
      content: [
        "As a Protocol we have tried to mitigate risk exposure for investors as well as offer further returns for stakers and options of equity release for those that need liquidity from their investments",
        "Further Projects and Short Term Investments (See V2 - slide 13)",
        "Rent-to-own properties - (V2 after construction)",
        "Expansion is already underway for the same model in El Salvador and Madagascar",
      ],
      bgClass: "bg-gray-900",
    },
    {
      id: 10,
      title: "Tokenomics & Treasury Model",
      content: ["Interactive flow diagram showing how funds move through the Kolam Prosper ecosystem"],
      expandable: true,
      bgClass: "bg-gray-900",
    },
    {
      id: 11,
      title: "Roadmap & Development Plan",
      content: [
        {
          title: "✅ Testnet Launched for Proof of Concept",
          items: [
            "Deployed initial smart contracts on Unichain and Optimism to validate the tokenization model",
            "Conducting stress testing, security audits, and transaction flow analysis to optimize efficiency",
            "Simulating NFT Bond minting, staking, and stablecoin issuance",
          ],
        },
        {
          title: "WIP  Integration for On/Off Ramping",
          items: [
            "Partnering with Moneygram to facilitate seamless fiat-to-crypto transactions",
            "Enabling fast and low-cost remittances for underbanked users in developing nations",
            "Supporting cross-border payments for greater financial inclusion",
          ],
        },
        {
          title: " Upcoming Milestones:",
          items: [
            "Audits and Mainnet launch with full staking and lending functionality",
            "Regulatory approvals and compliance where applicable",
            "Expansion into new markets (El Salvador & Madagascar)",
            "Partnerships with property developers and financial institutions",
          ],
        },
      ],
      bgClass: "bg-gray-900",
    },
    {
      id: 12,
      title: "Competitive Advantage",
      content: [
        "Not many developers want to build single plot buildings so it's a very open market",
        "We can grow at the pace of investment 1 plot starts or 10 plots the system is the same",
        "Unique aspects of staking & non-liquidating loan models",
      ],
      bgClass: "bg-gray-900",
    },
    {
      id: 13,
      title: "V2 - Positive Sum",
      content: [
        "Using staking to equity release can be done many times there will be a range of opportunities to invest your AED LST into further projects",
        "Lock your property deeds into rent-to-own initiatives and exchange fractional ownership for rental payments over a set period, unlocking a new payment model for homeownership",
        "Invest in short term projects, farm developments, 10k home projects in developing countries, Gold investment - raw to refined 3 month investments",
        "Subsidised shops/services within the constructed buildings",
        "All these come with capital-protected investment options, with a risk rating applied to potential returns",
      ],
      bgClass: "bg-gray-900",
    },
    {
      id: 14,
      title: "Investment & Funding Ask",
      content: [
        "In terms of funding we welcome invites for grants to build and develop on-chain",
        {
          title: "These are our continuous goals for funding:",
          items: [
            "Develop further to include other currencies and new markets",
            "Cross-chain capabilities",
            "Continue to innovative ways to create sticky liquidity",
            "New payment mechanisms (on and off ramping, additional tokens)",
          ],
        },
        "We offer the same terms to users and investors; there's no VC's and no tokens to dump on retail. We want to be a strong sovereign entity with prosperity for all involved",
        "First project is 120 2 Bed apartments at $100k each, so a $12 Million investable project for stage 1 with minimum 30% returns, continuous staking into further projects",
      ],
      bgClass: "bg-gray-900",
    },
    {
      id: 15,
      title: "Build Wealth, Not Barriers",
      content: [
        "Real estate and government-backed bonds are among the most secure investments—yet access remains limited, liquidity is locked, and financial growth is slow. Kolam Prosper changes that.",
        "Property-backed T-Bonds & Deeds — Offering stability, growth, and real ownership",
        "Interest-Bearing Flatcoin — A sustainable alternative to USD stablecoins",
        "Non-Liquidating Loans — Unlocking capital without risk of liquidation",
        "Sovereignty, Investor-First Growth — Only shared prosperity",
        "Now is the time to reshape real estate finance. Whether you're an investor, builder, or innovator, the opportunity is here.",
      ],
      bgClass: "bg-gradient-to-br from-orange-900 to-black",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Kolam Prosper Pitch Deck</h1>

        <div className="space-y-12 max-w-4xl mx-auto">
          {slides.map((slide) => (
            <div
              key={slide.id}
              id={`slide-${slide.id}`}
              className={`rounded-lg shadow-lg overflow-hidden ${slide.bgClass}`}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-orange-500 font-medium">Slide {slide.id}</span>
                  <span className="text-sm text-gray-400">
                    {slide.id} / {slides.length}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">{slide.title}</h2>

                {slide.subtitle && (
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-orange-500">{slide.subtitle}</h3>
                )}

                <div className="space-y-4">
                  {Array.isArray(slide.content) &&
                    slide.content.map((item, index) => {
                      if (typeof item === "string") {
                        return (
                          <div key={index} className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            <span className="text-gray-300">{item}</span>
                          </div>
                        )
                      } else if (typeof item === "object" && item !== null) {
                        return (
                          <div key={index} className="ml-0">
                            <div className="flex items-start">
                              <span className="text-orange-500 mr-2">•</span>
                              <span className="text-gray-300 font-medium">{item.title}</span>
                            </div>
                            <div className="ml-6 mt-2 space-y-2">
                              {item.items &&
                                item.items.map((subItem, subIndex) => (
                                  <div key={subIndex} className="flex items-start">
                                    <span className="text-orange-400 mr-2">-</span>
                                    <span className="text-gray-400">{subItem}</span>
                                  </div>
                                ))}
                            </div>
                          </div>
                        )
                      }
                      return null
                    })}
                </div>

                {slide.id === 10 && (
                  <div className="mt-6">
                    <button
                      onClick={() => toggleExpand(slide.id)}
                      className="flex items-center justify-between w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors"
                    >
                      <span className="font-medium">View Tokenomics Flow Diagram</span>
                      {expandedSlide === slide.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>

                    {expandedSlide === slide.id && (
                      <div className="mt-4 p-4 bg-black/50 rounded-md">
                        <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-md flex items-center justify-center">
                          <div className="text-center p-8">
                            <p className="text-gray-400 mb-4">Interactive Tokenomics Flow Diagram</p>
                            <p className="text-sm text-gray-500 mb-6">
                              This will be replaced with an interactive React Flow diagram
                            </p>

                            <div className="flex justify-center">
                              <Link
                                href="/tokenomics"
                                className="flex items-center text-orange-500 hover:text-orange-400 transition-colors"
                              >
                                <span className="mr-1">View Full Tokenomics Page</span>
                                <ExternalLink size={16} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://app.kol.am"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors inline-block"
          >
            Launch App
          </Link>
        </div>
      </div>
    </div>
  )
}

