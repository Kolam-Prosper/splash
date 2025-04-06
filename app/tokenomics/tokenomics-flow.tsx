"use client"

import { useState } from "react"
import { ArrowUpIcon, DollarSign, Landmark, PiggyBank } from "lucide-react"

export default function TokenomicsFlow() {
  const [activeTab, setActiveTab] = useState("treasury") // Default to treasury tab

  // Kolam website color scheme
  const colors = {
    primary: "#FF6B00", // Orange primary color
    secondary: "#1E293B", // Dark blue/slate
    accent: "#0EA5E9", // Blue accent
    background: "#0F172A", // Dark background
    text: "#F8FAFC", // Light text
    muted: "#94A3B8", // Muted text
    border: "#334155", // Border color
    node: {
      token: {
        fill: "#1E293B",
        stroke: "#FF6B00",
        text: "#F8FAFC",
      },
      treasury: {
        fill: "#1E293B",
        stroke: "#0EA5E9",
        text: "#F8FAFC",
      },
      value: {
        fill: "#1E293B",
        stroke: "#10B981", // Green for value flow
        text: "#F8FAFC",
      },
      sustainability: {
        fill: "#1E293B",
        stroke: "#F59E0B", // Amber for sustainability
        text: "#F8FAFC",
      },
    },
  }

  // Function to render a div inside foreignObject without xmlns attribute
  const renderForeignObjectContent = (text: string, additionalClasses = "") => {
    return <div className={`text-center text-xs text-slate-400 ${additionalClasses}`}>{text}</div>
  }

  return (
    <div className="flex flex-col w-full bg-slate-900 rounded-lg shadow-md text-slate-50">
      <div className="p-4 border-b border-slate-800">
        <h2 className="text-2xl font-bold text-slate-50">Kolam Prosper Tokenomics</h2>
        <p className="text-slate-400">Treasury & Token Flow Model</p>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="px-4 pt-2">
          <div className="grid grid-cols-4 w-full bg-slate-800 rounded-md">
            <button
              onClick={() => setActiveTab("token")}
              className={`py-2 px-4 flex items-center justify-center gap-2 rounded-md transition-colors ${
                activeTab === "token" ? "bg-orange-600 text-white" : "text-slate-300 hover:bg-slate-700"
              }`}
            >
              <DollarSign className="h-4 w-4" />
              <span className="hidden sm:inline">Token Utility</span>
            </button>
            <button
              onClick={() => setActiveTab("treasury")}
              className={`py-2 px-4 flex items-center justify-center gap-2 rounded-md transition-colors ${
                activeTab === "treasury" ? "bg-sky-600 text-white" : "text-slate-300 hover:bg-slate-700"
              }`}
            >
              <Landmark className="h-4 w-4" />
              <span className="hidden sm:inline">Treasury</span>
            </button>
            <button
              onClick={() => setActiveTab("value")}
              className={`py-2 px-4 flex items-center justify-center gap-2 rounded-md transition-colors ${
                activeTab === "value" ? "bg-emerald-600 text-white" : "text-slate-300 hover:bg-slate-700"
              }`}
            >
              <ArrowUpIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Value Flow</span>
            </button>
            <button
              onClick={() => setActiveTab("sustainability")}
              className={`py-2 px-4 flex items-center justify-center gap-2 rounded-md transition-colors ${
                activeTab === "sustainability" ? "bg-amber-600 text-white" : "text-slate-300 hover:bg-slate-700"
              }`}
            >
              <PiggyBank className="h-4 w-4" />
              <span className="hidden sm:inline">Sustainability</span>
            </button>
          </div>
        </div>

        <div className="p-4 bg-slate-900">
          {/* Treasury Tab */}
          {activeTab === "treasury" && (
            <div>
              <div className="bg-slate-800 p-4 rounded-lg shadow-sm mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-slate-50">
                  <Landmark className="h-5 w-5 text-sky-500" />
                  Treasury Management
                </h3>
              </div>

              {/* Fixed Treasury Diagram - Simplified and Robust */}
              <div className="w-full border border-slate-700 rounded-lg p-6 bg-slate-900 overflow-hidden">
                <svg width="100%" height="500" viewBox="0 0 900 500" preserveAspectRatio="xMidYMid meet">
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

                  {/* Top Row */}
                  {/* Property Deeds */}
                  <rect
                    x="100"
                    y="80"
                    width="160"
                    height="80"
                    rx="5"
                    fill={colors.node.treasury.fill}
                    stroke={colors.node.treasury.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="180"
                    y="120"
                    textAnchor="middle"
                    fill={colors.node.treasury.text}
                    className="text-sm font-medium"
                  >
                    Property Deeds
                  </text>

                  {/* T-bonds */}
                  <rect
                    x="620"
                    y="80"
                    width="160"
                    height="80"
                    rx="5"
                    fill={colors.node.treasury.fill}
                    stroke={colors.node.treasury.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="700"
                    y="120"
                    textAnchor="middle"
                    fill={colors.node.treasury.text}
                    className="text-sm font-medium"
                  >
                    T-bonds
                  </text>

                  {/* Middle Row */}
                  {/* Construction Fund */}
                  <rect
                    x="100"
                    y="220"
                    width="160"
                    height="80"
                    rx="5"
                    fill={colors.node.treasury.fill}
                    stroke={colors.node.treasury.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="180"
                    y="260"
                    textAnchor="middle"
                    fill={colors.node.treasury.text}
                    className="text-sm font-medium"
                  >
                    Construction Fund
                  </text>

                  {/* Treasury (center) - made more prominent */}
                  <rect
                    x="360"
                    y="220"
                    width="160"
                    height="80"
                    rx="5"
                    fill={colors.node.treasury.fill}
                    stroke={colors.node.treasury.stroke}
                    strokeWidth="4"
                  />
                  <text
                    x="440"
                    y="260"
                    textAnchor="middle"
                    fill={colors.node.treasury.text}
                    className="text-lg font-medium"
                  >
                    Treasury
                  </text>

                  {/* Staking */}
                  <rect
                    x="620"
                    y="220"
                    width="160"
                    height="80"
                    rx="5"
                    fill={colors.node.treasury.fill}
                    stroke={colors.node.treasury.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="700"
                    y="260"
                    textAnchor="middle"
                    fill={colors.node.treasury.text}
                    className="text-sm font-medium"
                  >
                    Staking
                  </text>

                  {/* Bottom Row */}
                  {/* Lending */}
                  <rect
                    x="100"
                    y="360"
                    width="160"
                    height="80"
                    rx="5"
                    fill={colors.node.treasury.fill}
                    stroke={colors.node.treasury.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="180"
                    y="400"
                    textAnchor="middle"
                    fill={colors.node.treasury.text}
                    className="text-sm font-medium"
                  >
                    Lending
                  </text>

                  {/* Fees */}
                  <rect
                    x="360"
                    y="360"
                    width="160"
                    height="80"
                    rx="5"
                    fill={colors.node.treasury.fill}
                    stroke={colors.node.treasury.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="440"
                    y="400"
                    textAnchor="middle"
                    fill={colors.node.treasury.text}
                    className="text-sm font-medium"
                  >
                    Fees
                  </text>

                  {/* Lenders Pool */}
                  <rect
                    x="620"
                    y="360"
                    width="160"
                    height="80"
                    rx="5"
                    fill={colors.node.treasury.fill}
                    stroke={colors.node.treasury.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="700"
                    y="400"
                    textAnchor="middle"
                    fill={colors.node.treasury.text}
                    className="text-sm font-medium"
                  >
                    Lenders Pool
                  </text>

                  {/* Arrows */}
                  <defs>
                    <marker id="treasury-arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                      <path d="M0,0 L0,10 L10,5 Z" fill={colors.accent} />
                    </marker>
                  </defs>

                  {/* Property Deeds to Treasury (70%) */}
                  <path
                    d="M260,120 Q320,120 360,220"
                    fill="none"
                    stroke={colors.accent}
                    strokeWidth="2"
                    markerEnd="url(#treasury-arrow)"
                    className="animated-path"
                  />
                  <text x="300" y="150" fill="white" className="text-xs font-bold">
                    70%
                  </text>

                  {/* T-bonds to Treasury (100%) */}
                  <path
                    d="M620,120 Q560,120 520,220"
                    fill="none"
                    stroke={colors.accent}
                    strokeWidth="2"
                    markerEnd="url(#treasury-arrow)"
                    className="animated-path"
                  />
                  <text x="580" y="150" fill="white" className="text-xs font-bold">
                    100%
                  </text>

                  {/* Property Deeds to Construction Fund (30%) */}
                  <path
                    d="M180,160 L180,220"
                    fill="none"
                    stroke={colors.accent}
                    strokeWidth="2"
                    markerEnd="url(#treasury-arrow)"
                    className="animated-path"
                  />
                  <text x="150" y="190" fill="white" className="text-xs font-bold">
                    30%
                  </text>

                  {/* Treasury to Lending */}
                  <path
                    d="M360,300 Q260,320 180,360"
                    fill="none"
                    stroke={colors.accent}
                    strokeWidth="2"
                    markerEnd="url(#treasury-arrow)"
                    className="animated-path"
                  />

                  {/* Lending to Fees */}
                  <path
                    d="M260,400 L360,400"
                    fill="none"
                    stroke={colors.accent}
                    strokeWidth="2"
                    markerEnd="url(#treasury-arrow)"
                    className="animated-path"
                  />

                  {/* Treasury to Staking */}
                  <path
                    d="M520,240 Q570,240 620,240"
                    fill="none"
                    stroke={colors.accent}
                    strokeWidth="2"
                    markerEnd="url(#treasury-arrow)"
                    className="animated-path"
                  />

                  {/* Staking to Treasury */}
                  <path
                    d="M620,260 Q570,260 520,260"
                    fill="none"
                    stroke={colors.accent}
                    strokeWidth="2"
                    markerEnd="url(#treasury-arrow)"
                    className="animated-path"
                  />

                  {/* Fees to Treasury (50%) */}
                  <path
                    d="M440,360 L440,300"
                    fill="none"
                    stroke={colors.accent}
                    strokeWidth="2"
                    markerEnd="url(#treasury-arrow)"
                    className="animated-path"
                  />
                  <text x="455" y="330" fill="white" className="text-xs font-bold">
                    50%
                  </text>

                  {/* Fees to Lenders Pool (50%) */}
                  <path
                    d="M520,400 Q570,400 620,400"
                    fill="none"
                    stroke={colors.accent}
                    strokeWidth="2"
                    markerEnd="url(#treasury-arrow)"
                    className="animated-path"
                  />
                  <text x="570" y="380" fill="white" className="text-xs font-bold">
                    50%
                  </text>
                </svg>
              </div>
            </div>
          )}

          {/* Token Utility Tab */}
          {activeTab === "token" && (
            <div>
              <div className="bg-slate-800 p-4 rounded-lg shadow-sm mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-slate-50">
                  <DollarSign className="h-5 w-5 text-orange-500" />
                  Token Utility
                </h3>
                <p className="text-sm text-slate-400">
                  LST AED is an interest-bearing flatcoin, only minted when Bonds or Deeds are staked
                </p>
              </div>

              <div className="w-full border border-slate-700 rounded-lg p-4 bg-slate-900">
                {/* Token Flow Diagram */}
                <svg width="100%" height="400" viewBox="0 0 800 400" className="mx-auto">
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
                  {/* LST AED Token */}
                  <rect
                    x="300"
                    y="50"
                    width="200"
                    height="100"
                    rx="5"
                    fill={colors.node.token.fill}
                    stroke={colors.node.token.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="400"
                    y="85"
                    textAnchor="middle"
                    fill={colors.node.token.text}
                    className="text-sm font-medium"
                  >
                    LST AED Token
                  </text>
                  <foreignObject x="300" y="90" width="200" height="50">
                    {renderForeignObjectContent("Interest-bearing flatcoin", "px-2")}
                  </foreignObject>

                  {/* Staking */}
                  <rect
                    x="100"
                    y="200"
                    width="160"
                    height="100"
                    rx="5"
                    fill={colors.node.token.fill}
                    stroke={colors.node.token.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="180"
                    y="235"
                    textAnchor="middle"
                    fill={colors.node.token.text}
                    className="text-sm font-medium"
                  >
                    Staking
                  </text>
                  <foreignObject x="100" y="240" width="160" height="50">
                    {renderForeignObjectContent("Bonds or Deeds staked", "px-2")}
                  </foreignObject>

                  {/* Invest */}
                  <rect
                    x="320"
                    y="200"
                    width="160"
                    height="100"
                    rx="5"
                    fill={colors.node.token.fill}
                    stroke={colors.node.token.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="400"
                    y="235"
                    textAnchor="middle"
                    fill={colors.node.token.text}
                    className="text-sm font-medium"
                  >
                    Invest
                  </text>
                  <foreignObject x="320" y="240" width="160" height="50">
                    {renderForeignObjectContent("Use LST AED to further invest into other projects", "px-2")}
                  </foreignObject>

                  {/* Dividends */}
                  <rect
                    x="540"
                    y="200"
                    width="160"
                    height="100"
                    rx="5"
                    fill={colors.node.token.fill}
                    stroke={colors.node.token.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="620"
                    y="235"
                    textAnchor="middle"
                    fill={colors.node.token.text}
                    className="text-sm font-medium"
                  >
                    Dividends
                  </text>
                  <foreignObject x="540" y="240" width="160" height="50">
                    {renderForeignObjectContent("Annual payments to holders", "px-2")}
                  </foreignObject>

                  {/* Arrows */}
                  <defs>
                    <marker id="token-arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                      <path d="M0,0 L0,10 L10,5 Z" fill={colors.primary} />
                    </marker>
                  </defs>

                  {/* Staking to LST AED */}
                  <path
                    d="M180,200 Q180,150 300,100"
                    fill="none"
                    stroke={colors.primary}
                    strokeWidth="2"
                    markerEnd="url(#token-arrow)"
                    className="animated-path"
                  />

                  {/* LST AED to Invest */}
                  <path
                    d="M400,150 L400,200"
                    fill="none"
                    stroke={colors.primary}
                    strokeWidth="2"
                    markerEnd="url(#token-arrow)"
                    className="animated-path"
                  />

                  {/* Invest to Dividends */}
                  <path
                    d="M480,250 L540,250"
                    fill="none"
                    stroke={colors.primary}
                    strokeWidth="2"
                    markerEnd="url(#token-arrow)"
                    className="animated-path"
                  />
                </svg>
              </div>
            </div>
          )}

          {/* Value Flow Tab */}
          {activeTab === "value" && (
            <div>
              <div className="bg-slate-800 p-4 rounded-lg shadow-sm mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-slate-50">
                  <ArrowUpIcon className="h-5 w-5 text-emerald-500" />
                  Value Flow
                </h3>
                <p className="text-sm text-slate-400">Investment → Property Development → Value Appreciation</p>
              </div>

              <div className="w-full border border-slate-700 rounded-lg p-4 bg-slate-900">
                {/* Value Flow Diagram */}
                <svg width="100%" height="400" viewBox="0 0 800 400" className="mx-auto">
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
                  {/* Top Row */}
                  <rect
                    x="100"
                    y="50"
                    width="160"
                    height="80"
                    rx="5"
                    fill={colors.node.value.fill}
                    stroke={colors.node.value.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="180"
                    y="80"
                    textAnchor="middle"
                    fill={colors.node.value.text}
                    className="text-sm font-medium"
                  >
                    Investment
                  </text>
                  <foreignObject x="100" y="85" width="160" height="40">
                    {renderForeignObjectContent("Initial capital", "px-2")}
                  </foreignObject>

                  <rect
                    x="320"
                    y="50"
                    width="160"
                    height="80"
                    rx="5"
                    fill={colors.node.value.fill}
                    stroke={colors.node.value.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="400"
                    y="80"
                    textAnchor="middle"
                    fill={colors.node.value.text}
                    className="text-sm font-medium"
                  >
                    Property Development
                  </text>
                  <foreignObject x="320" y="85" width="160" height="40">
                    {renderForeignObjectContent("Real estate assets", "px-2")}
                  </foreignObject>

                  <rect
                    x="540"
                    y="50"
                    width="160"
                    height="80"
                    rx="5"
                    fill={colors.node.value.fill}
                    stroke={colors.node.value.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="620"
                    y="80"
                    textAnchor="middle"
                    fill={colors.node.value.text}
                    className="text-sm font-medium"
                  >
                    Value Appreciation
                  </text>
                  <foreignObject x="540" y="85" width="160" height="40">
                    {renderForeignObjectContent("Increased property value", "px-2")}
                  </foreignObject>

                  {/* Middle Row */}
                  <rect
                    x="100"
                    y="170"
                    width="160"
                    height="80"
                    rx="5"
                    fill={colors.node.value.fill}
                    stroke={colors.node.value.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="180"
                    y="200"
                    textAnchor="middle"
                    fill={colors.node.value.text}
                    className="text-sm font-medium"
                  >
                    Staking
                  </text>
                  <foreignObject x="100" y="205" width="160" height="40">
                    {renderForeignObjectContent("Bonds or Deeds staked", "px-2")}
                  </foreignObject>

                  <rect
                    x="320"
                    y="170"
                    width="160"
                    height="80"
                    rx="5"
                    fill={colors.node.value.fill}
                    stroke={colors.node.value.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="400"
                    y="200"
                    textAnchor="middle"
                    fill={colors.node.value.text}
                    className="text-sm font-medium"
                  >
                    LST AED Minting
                  </text>
                  <foreignObject x="320" y="205" width="160" height="40">
                    {renderForeignObjectContent("Token creation", "px-2")}
                  </foreignObject>

                  <rect
                    x="540"
                    y="170"
                    width="160"
                    height="80"
                    rx="5"
                    fill={colors.node.value.fill}
                    stroke={colors.node.value.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="620"
                    y="200"
                    textAnchor="middle"
                    fill={colors.node.value.text}
                    className="text-sm font-medium"
                  >
                    Liquidity
                  </text>
                  <foreignObject x="540" y="205" width="160" height="40">
                    {renderForeignObjectContent("Ecosystem liquidity", "px-2")}
                  </foreignObject>

                  {/* Bottom Row */}
                  <rect
                    x="100"
                    y="290"
                    width="160"
                    height="80"
                    rx="5"
                    fill={colors.node.value.fill}
                    stroke={colors.node.value.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="180"
                    y="320"
                    textAnchor="middle"
                    fill={colors.node.value.text}
                    className="text-sm font-medium"
                  >
                    Lending
                  </text>
                  <foreignObject x="100" y="325" width="160" height="40">
                    {renderForeignObjectContent("Using LST AED", "px-2")}
                  </foreignObject>

                  <rect
                    x="320"
                    y="290"
                    width="160"
                    height="80"
                    rx="5"
                    fill={colors.node.value.fill}
                    stroke={colors.node.value.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="400"
                    y="320"
                    textAnchor="middle"
                    fill={colors.node.value.text}
                    className="text-sm font-medium"
                  >
                    Fee Generation
                  </text>
                  <foreignObject x="320" y="325" width="160" height="40">
                    {renderForeignObjectContent("From lending activities", "px-2")}
                  </foreignObject>

                  <rect
                    x="540"
                    y="290"
                    width="160"
                    height="80"
                    rx="5"
                    fill={colors.node.value.fill}
                    stroke={colors.node.value.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="620"
                    y="320"
                    textAnchor="middle"
                    fill={colors.node.value.text}
                    className="text-sm font-medium"
                  >
                    Rewards Distribution
                  </text>
                  <foreignObject x="540" y="325" width="160" height="40">
                    {renderForeignObjectContent("To participants", "px-2")}
                  </foreignObject>

                  {/* Arrows */}
                  <defs>
                    <marker id="value-arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                      <path d="M0,0 L0,10 L10,5 Z" fill="#10B981" />
                    </marker>
                  </defs>

                  {/* Top row connections */}
                  <path
                    d="M260,90 L320,90"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                    markerEnd="url(#value-arrow)"
                    className="animated-path"
                  />
                  <path
                    d="M480,90 L540,90"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                    markerEnd="url(#value-arrow)"
                    className="animated-path"
                  />

                  {/* Middle row connections */}
                  <path
                    d="M260,210 L320,210"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                    markerEnd="url(#value-arrow)"
                    className="animated-path"
                  />
                  <path
                    d="M480,210 L540,210"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                    markerEnd="url(#value-arrow)"
                    className="animated-path"
                  />

                  {/* Bottom row connections */}
                  <path
                    d="M260,330 L320,330"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                    markerEnd="url(#value-arrow)"
                    className="animated-path"
                  />
                  <path
                    d="M480,330 L540,330"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                    markerEnd="url(#value-arrow)"
                    className="animated-path"
                  />

                  {/* Cycle connections */}
                  <path
                    d="M620,130 Q620,150 620,170"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                    markerEnd="url(#value-arrow)"
                    className="animated-path"
                  />

                  <path
                    d="M620,250 Q620,270 620,290"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                    markerEnd="url(#value-arrow)"
                    className="animated-path"
                  />
                </svg>
              </div>
            </div>
          )}

          {/* Sustainability Tab */}
          {activeTab === "sustainability" && (
            <div>
              <div className="bg-slate-800 p-4 rounded-lg shadow-sm mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-slate-50">
                  <PiggyBank className="h-5 w-5 text-amber-500" />
                  Sustainability Model
                </h3>
                <p className="text-sm text-slate-400">No token inflation - only backed by real assets</p>
              </div>

              <div className="w-full border border-slate-700 rounded-lg p-4 bg-slate-900">
                {/* Sustainability Model Diagram */}
                <svg width="100%" height="400" viewBox="0 0 800 400" className="mx-auto">
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
                  {/* No Token Inflation */}
                  <rect
                    x="280"
                    y="50"
                    width="240"
                    height="100"
                    rx="5"
                    fill={colors.node.sustainability.fill}
                    stroke={colors.node.sustainability.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="400"
                    y="85"
                    textAnchor="middle"
                    fill={colors.node.sustainability.text}
                    className="text-sm font-medium"
                  >
                    No Token Inflation
                  </text>
                  <foreignObject x="280" y="90" width="240" height="50">
                    {renderForeignObjectContent("Tokens backed by real assets", "px-4")}
                  </foreignObject>

                  {/* Self-Sustaining */}
                  <rect
                    x="50"
                    y="200"
                    width="200"
                    height="100"
                    rx="5"
                    fill={colors.node.sustainability.fill}
                    stroke={colors.node.sustainability.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="150"
                    y="235"
                    textAnchor="middle"
                    fill={colors.node.sustainability.text}
                    className="text-sm font-medium"
                  >
                    Self-Sustaining Ecosystem
                  </text>
                  <foreignObject x="50" y="240" width="200" height="50">
                    {renderForeignObjectContent("Through fee generation", "px-4")}
                  </foreignObject>

                  {/* Reinvestment */}
                  <rect
                    x="300"
                    y="200"
                    width="200"
                    height="100"
                    rx="5"
                    fill={colors.node.sustainability.fill}
                    stroke={colors.node.sustainability.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="400"
                    y="235"
                    textAnchor="middle"
                    fill={colors.node.sustainability.text}
                    className="text-sm font-medium"
                  >
                    Continuous Reinvestment
                  </text>
                  <foreignObject x="300" y="240" width="200" height="50">
                    {renderForeignObjectContent("Into new properties", "px-4")}
                  </foreignObject>

                  {/* Long-Term Value */}
                  <rect
                    x="550"
                    y="200"
                    width="200"
                    height="100"
                    rx="5"
                    fill={colors.node.sustainability.fill}
                    stroke={colors.node.sustainability.stroke}
                    strokeWidth="2"
                  />
                  <text
                    x="650"
                    y="235"
                    textAnchor="middle"
                    fill={colors.node.sustainability.text}
                    className="text-sm font-medium"
                  >
                    Long-Term Value Creation
                  </text>
                  <foreignObject x="550" y="240" width="200" height="50">
                    {renderForeignObjectContent("Through real estate appreciation", "px-4")}
                  </foreignObject>

                  {/* Arrows */}
                  <defs>
                    <marker
                      id="sustainability-arrow"
                      markerWidth="10"
                      markerHeight="10"
                      refX="9"
                      refY="5"
                      orient="auto"
                    >
                      <path d="M0,0 L0,10 L10,5 Z" fill="#F59E0B" />
                    </marker>
                  </defs>

                  {/* No Inflation to Self-Sustaining */}
                  <path
                    d="M280,100 Q150,120 150,200"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2"
                    markerEnd="url(#sustainability-arrow)"
                    className="animated-path"
                  />

                  {/* Self-Sustaining to Reinvestment */}
                  <path
                    d="M250,250 L300,250"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2"
                    markerEnd="url(#sustainability-arrow)"
                    className="animated-path"
                  />

                  {/* Reinvestment to Long-Term */}
                  <path
                    d="M500,250 L550,250"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2"
                    markerEnd="url(#sustainability-arrow)"
                    className="animated-path"
                  />

                  {/* Long-Term back to No Inflation */}
                  <path
                    d="M650,200 Q650,100 520,100"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2"
                    markerEnd="url(#sustainability-arrow)"
                    strokeDasharray="5,5"
                    className="animated-path"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


