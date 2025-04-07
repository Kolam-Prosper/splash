"use client"

import { useState } from "react"

export default function MadagascarFlow() {
  const [activeTab, setActiveTab] = useState("property")

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex border-b border-gray-700 mb-6">
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "property"
              ? "border-b-2 border-orange-500 text-orange-500"
              : "text-gray-400 hover:text-gray-300"
          }`}
          onClick={() => setActiveTab("property")}
        >
          Property Deed Flow
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "tbond" ? "border-b-2 border-orange-500 text-orange-500" : "text-gray-400 hover:text-gray-300"
          }`}
          onClick={() => setActiveTab("tbond")}
        >
          T-Bond Integration
        </button>
      </div>

      {activeTab === "property" ? (
        <div className="relative w-full h-[400px] border border-gray-700 rounded-lg p-4 bg-gray-900">
          <svg width="100%" height="100%" viewBox="0 0 800 400" className="mx-auto">
            <style>
              {`
                @keyframes flowAnimation {
                  0% {
                    stroke-dashoffset: 100;
                  }
                  100% {
                    stroke-dashoffset: 0;
                  }
                }
                .animated-path {
                  stroke-dasharray: 10, 5;
                  animation: flowAnimation 5s linear infinite;
                }
              `}
            </style>

            {/* Property Deed Token */}
            <rect x="300" y="30" width="200" height="80" rx="5" fill="#1E293B" stroke="#FF6B00" strokeWidth="2" />
            <text x="400" y="70" textAnchor="middle" fill="#F8FAFC" className="text-sm font-medium">
              $10,000 Property Deed Token
            </text>

            {/* Construction Fund */}
            <rect x="100" y="130" width="160" height="80" rx="5" fill="#1E293B" stroke="#FF6B00" strokeWidth="2" />
            <text x="180" y="170" textAnchor="middle" fill="#F8FAFC" className="text-sm font-medium">
              Construction Fund
            </text>

            {/* Gooddollar Investment */}
            <rect x="540" y="130" width="160" height="80" rx="5" fill="#1E293B" stroke="#FF6B00" strokeWidth="2" />
            <text x="620" y="170" textAnchor="middle" fill="#F8FAFC" className="text-sm font-medium">
              Gooddollar Investment
            </text>

            {/* Housing Development */}
            <rect x="100" y="270" width="160" height="80" rx="5" fill="#1E293B" stroke="#FF6B00" strokeWidth="2" />
            <text x="180" y="310" textAnchor="middle" fill="#F8FAFC" className="text-sm font-medium">
              Housing Development
            </text>

            {/* G$ Staking Yield */}
            <rect x="540" y="270" width="160" height="80" rx="5" fill="#1E293B" stroke="#FF6B00" strokeWidth="2" />
            <text x="620" y="310" textAnchor="middle" fill="#F8FAFC" className="text-sm font-medium">
              G$ Staking Yield
            </text>

            {/* Arrows */}
            <defs>
              <marker id="property-arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                <path d="M0,0 L0,10 L10,5 Z" fill="#FF6B00" />
              </marker>
            </defs>

            {/* Property Deed to Construction Fund (30%) */}
            <path
              d="M300,70 Q200,100 180,130"
              fill="none"
              stroke="#FF6B00"
              strokeWidth="2"
              markerEnd="url(#property-arrow)"
              className="animated-path"
            />
            <text x="220" y="100" fill="white" className="text-xs font-bold">
              30%
            </text>

            {/* Property Deed to Gooddollar (70%) */}
            <path
              d="M500,70 Q600,100 620,130"
              fill="none"
              stroke="#FF6B00"
              strokeWidth="2"
              markerEnd="url(#property-arrow)"
              className="animated-path"
            />
            <text x="580" y="100" fill="white" className="text-xs font-bold">
              70%
            </text>

            {/* Construction Fund to Housing */}
            <path
              d="M180,210 L180,270"
              fill="none"
              stroke="#FF6B00"
              strokeWidth="2"
              markerEnd="url(#property-arrow)"
              className="animated-path"
            />

            {/* Gooddollar to Yield */}
            <path
              d="M620,210 L620,270"
              fill="none"
              stroke="#FF6B00"
              strokeWidth="2"
              markerEnd="url(#property-arrow)"
              className="animated-path"
            />

            {/* Yield to Construction Fund */}
            <path
              d="M540,310 Q400,330 260,310"
              fill="none"
              stroke="#FF6B00"
              strokeWidth="2"
              markerEnd="url(#property-arrow)"
              className="animated-path"
            />
            <text x="320" y="350" fill="white" className="text-xs font-bold">
              Reinvestment Cycle
            </text>
          </svg>
        </div>
      ) : (
        <div className="relative w-full h-[400px] border border-gray-700 rounded-lg p-4 bg-gray-900">
          <svg width="100%" height="100%" viewBox="0 0 800 400" className="mx-auto">
            <style>
              {`
                @keyframes flowAnimation {
                  0% {
                    stroke-dashoffset: 100;
                  }
                  100% {
                    stroke-dashoffset: 0;
                  }
                }
                .animated-path {
                  stroke-dasharray: 10, 5;
                  animation: flowAnimation 5s linear infinite;
                }
              `}
            </style>

            {/* UAE T-Bond */}
            <rect x="100" y="50" width="160" height="80" rx="5" fill="#1E293B" stroke="#0EA5E9" strokeWidth="2" />
            <text x="180" y="90" textAnchor="middle" fill="#F8FAFC" className="text-sm font-medium">
              UAE T-Bond
            </text>

            {/* Staking */}
            <rect x="320" y="50" width="160" height="80" rx="5" fill="#1E293B" stroke="#0EA5E9" strokeWidth="2" />
            <text x="400" y="90" textAnchor="middle" fill="#F8FAFC" className="text-sm font-medium">
              Staking
            </text>

            {/* LST AED */}
            <rect x="540" y="50" width="160" height="80" rx="5" fill="#1E293B" stroke="#0EA5E9" strokeWidth="2" />
            <text x="620" y="90" textAnchor="middle" fill="#F8FAFC" className="text-sm font-medium">
              LST AED
            </text>

            {/* Madagascar Initiative */}
            <rect x="320" y="200" width="160" height="80" rx="5" fill="#1E293B" stroke="#0EA5E9" strokeWidth="2" />
            <text x="400" y="240" textAnchor="middle" fill="#F8FAFC" className="text-sm font-medium">
              Madagascar Initiative
            </text>

            {/* Other Projects */}
            <rect x="540" y="200" width="160" height="80" rx="5" fill="#1E293B" stroke="#0EA5E9" strokeWidth="2" />
            <text x="620" y="240" textAnchor="middle" fill="#F8FAFC" className="text-sm font-medium">
              Other LST Projects
            </text>

            {/* Returns */}
            <rect x="320" y="320" width="160" height="80" rx="5" fill="#1E293B" stroke="#0EA5E9" strokeWidth="2" />
            <text x="400" y="360" textAnchor="middle" fill="#F8FAFC" className="text-sm font-medium">
              Returns to Investors
            </text>

            {/* Arrows */}
            <defs>
              <marker id="tbond-arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                <path d="M0,0 L0,10 L10,5 Z" fill="#0EA5E9" />
              </marker>
            </defs>

            {/* T-Bond to Staking */}
            <path
              d="M260,90 L320,90"
              fill="none"
              stroke="#0EA5E9"
              strokeWidth="2"
              markerEnd="url(#tbond-arrow)"
              className="animated-path"
            />

            {/* Staking to LST */}
            <path
              d="M480,90 L540,90"
              fill="none"
              stroke="#0EA5E9"
              strokeWidth="2"
              markerEnd="url(#tbond-arrow)"
              className="animated-path"
            />

            {/* LST to Madagascar */}
            <path
              d="M580,130 Q500,170 400,200"
              fill="none"
              stroke="#0EA5E9"
              strokeWidth="2"
              markerEnd="url(#tbond-arrow)"
              className="animated-path"
            />

            {/* LST to Other Projects */}
            <path
              d="M620,130 L620,200"
              fill="none"
              stroke="#0EA5E9"
              strokeWidth="2"
              markerEnd="url(#tbond-arrow)"
              className="animated-path"
            />

            {/* Madagascar to Returns */}
            <path
              d="M400,280 L400,320"
              fill="none"
              stroke="#0EA5E9"
              strokeWidth="2"
              markerEnd="url(#tbond-arrow)"
              className="animated-path"
            />

            {/* Removed: Returns to T-Bond */}
          </svg>
        </div>
      )}

      <div className="mt-6 text-gray-300 text-sm">
        <p className="mb-2">
          <strong>Key Insight:</strong> While both investment vehicles can support the Madagascar Housing Initiative,
          we've structured them as separate entities to maximize flexibility and liquidity.
        </p>
        <p>
          Property Deed Tokens provide direct investment into housing with a clear social impact component, while
          T-Bonds maintain their liquidity while still contributing to the ecosystem through the LST mechanism.
        </p>
      </div>
    </div>
  )
}

