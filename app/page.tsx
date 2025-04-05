"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("t-bonds")

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Original Design */}
      <div className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background with geometric pattern */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/network-bg.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.4,
          }}
        ></div>

        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Revolutionizing Finance <span className="text-orange-500">Through Tokenization</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Tokenized T-bonds and property deeds with secure staking and non-liquidating loan options. Unlock the
              potential of real-world assets on the blockchain.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="https://app.kol.am"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-orange-500 text-white hover:bg-orange-600 w-full sm:w-auto"
              >
                Launch App
              </Link>
              <Link
                href="#redefining-asset-ownership"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500/10 w-full sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Protocol Explainer Section */}
      <div id="redefining-asset-ownership" className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Redefining Asset Ownership</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At Kolam Prosper, we're bridging traditional finance with blockchain tech, creating a more accessible,
              transparent, and efficient financial ecosystem.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-colors">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Properties</h3>
              <p className="text-gray-300">
                Access high-value real estate in prime locations, carefully selected for optimal returns.
              </p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-colors">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Liquidity</h3>
              <p className="text-gray-300">
                Transform illiquid assets into tradeable tokens, unlocking immediate value and creating new
                opportunities for investors.
              </p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-colors">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Competitive Returns</h3>
              <p className="text-gray-300">
                Enjoy attractive annual yields from your investments while outperforming traditional markets.
              </p>
            </div>
          </div>

          {/* Tokenized Assets Section with Tabs */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Gain Access to Flexible Real-World Assets</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our tokenized assets that provide both security and flexibility for your investment portfolio.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800">
              {/* Tabs Implementation */}
              <div className="w-full">
                <div className="grid w-full grid-cols-2 mb-8 bg-gray-800 p-1 rounded-md">
                  <button
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ${activeTab === "t-bonds" ? "bg-orange-500 text-white shadow-sm" : "text-gray-300"}`}
                    onClick={() => setActiveTab("t-bonds")}
                  >
                    Tokenized T-Bonds
                  </button>
                  <button
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ${activeTab === "property" ? "bg-orange-500 text-white shadow-sm" : "text-gray-300"}`}
                    onClick={() => setActiveTab("property")}
                  >
                    Property Deed Tokens
                  </button>
                </div>

                {/* T-Bonds Tab Content */}
                {activeTab === "t-bonds" && (
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold">Tokenized T-Bonds</h3>
                    </div>
                    <p className="text-gray-300 mb-6">
                      Government treasury bonds converted into digital tokens, providing unique opportunities to release
                      equity as non-liquidating loans and/or invest into other projects for higher returns.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>$1,000 buy-in, returns for 3 years minimum</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Annual interest payments</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Secondary market trading</span>
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Fixed return with no loss of value</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Equity release options</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Government-backed security</span>
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="https://app.kol.am"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 w-full md:w-auto"
                    >
                      Explore T-Bonds
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                )}

                {/* Property Deeds Tab Content */}
                {activeTab === "property" && (
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold">Property Deed Tokens</h3>
                    </div>
                    <p className="text-gray-300 mb-6">
                      Fractional ownership in premium real estate properties, allowing investors to access high-value
                      assets with lower capital requirements.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Fractional ownership in premium properties</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Regular rental income distributions</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Potential for property value appreciation</span>
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Professionally managed properties</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Liquid secondary market trading</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Use as collateral for non-liquidating loans</span>
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="https://app.kol.am"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 w-full md:w-auto"
                    >
                      Explore Property Deeds
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Lending and Borrowing Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Lending and Borrowing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock the value of your assets. Our lending platform allows you to use tokenized assets as collateral
                to access instant loans without the risk of liquidation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Fixed Service Fee</h3>
                <p className="text-gray-300">
                  Transparent pricing with a fixed service fee, no hidden costs or variable interest rates.
                </p>
              </div>

              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Flexible Terms</h3>
                <p className="text-gray-300">
                  Choose the loan duration and repayment schedule that works best for your financial situation.
                </p>
              </div>

              <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Non-Liquidating</h3>
                <p className="text-gray-300">
                  Your assets remain secure with our non-liquidating loan structure, eliminating the risk of forced
                  asset sales.
                </p>
              </div>
            </div>

            {/* Interactive Loan Calculator */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-center">Loan Calculator</h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium">Asset Type</label>
                    <select
                      id="assetType"
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-orange-500 focus:border-orange-500"
                      onChange={() => {
                        // This would be connected to state in a real implementation
                        const assetValueElement = document.getElementById("assetValue")
                        const assetTypeElement = document.getElementById("assetType") as HTMLSelectElement | null

                        if (assetValueElement && assetTypeElement) {
                          assetValueElement.textContent = assetTypeElement.value === "t-bond" ? "$1,000" : "$100,000"

                          // Update loan amount based on selected asset and quantity
                          const quantityElement = document.getElementById("quantity") as HTMLSelectElement | null
                          const collateralValueElement = document.getElementById("collateralValue")
                          const ltvRatioElement = document.getElementById("ltvRatio") as HTMLInputElement | null
                          const loanAmountElement = document.getElementById("loanAmount")
                          const loanTermElement = document.getElementById("loanTerm") as HTMLInputElement | null
                          const serviceFeeElement = document.getElementById("serviceFee")
                          const totalRepaymentElement = document.getElementById("totalRepayment")

                          if (
                            quantityElement &&
                            collateralValueElement &&
                            ltvRatioElement &&
                            loanAmountElement &&
                            loanTermElement &&
                            serviceFeeElement &&
                            totalRepaymentElement
                          ) {
                            const quantity = Number.parseInt(quantityElement.value)
                            const baseValue = assetTypeElement.value === "t-bond" ? 1000 : 100000
                            const totalValue = baseValue * quantity
                            collateralValueElement.textContent = "$" + totalValue.toLocaleString()

                            // Update loan amount (50% LTV by default)
                            const ltvRatio = Number.parseInt(ltvRatioElement.value) / 100
                            const loanAmount = totalValue * ltvRatio
                            loanAmountElement.textContent = "$" + loanAmount.toLocaleString()

                            // Update total repayment
                            const months = Number.parseInt(loanTermElement.value)

                            // Service fee is 1% per month
                            const serviceFee = months * 0.01
                            serviceFeeElement.textContent = (serviceFee * 100).toFixed(1) + "%"

                            const totalRepayment = loanAmount * (1 + serviceFee)
                            totalRepaymentElement.textContent =
                              "$" + totalRepayment.toLocaleString(undefined, { maximumFractionDigits: 2 })
                          }
                        }
                      }}
                    >
                      <option value="t-bond">T-Bond ($1,000 each)</option>
                      <option value="property">Property Deed ($100,000 each)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium">Quantity</label>
                    <select
                      id="quantity"
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-orange-500 focus:border-orange-500"
                      onChange={() => {
                        // Update collateral value based on quantity
                        const assetTypeElement = document.getElementById("assetType") as HTMLSelectElement | null
                        const quantityElement = document.getElementById("quantity") as HTMLSelectElement | null
                        const collateralValueElement = document.getElementById("collateralValue")
                        const ltvRatioElement = document.getElementById("ltvRatio") as HTMLInputElement | null
                        const loanAmountElement = document.getElementById("loanAmount")
                        const loanTermElement = document.getElementById("loanTerm") as HTMLInputElement | null
                        const serviceFeeElement = document.getElementById("serviceFee")
                        const totalRepaymentElement = document.getElementById("totalRepayment")

                        if (
                          assetTypeElement &&
                          quantityElement &&
                          collateralValueElement &&
                          ltvRatioElement &&
                          loanAmountElement &&
                          loanTermElement &&
                          serviceFeeElement &&
                          totalRepaymentElement
                        ) {
                          const quantity = Number.parseInt(quantityElement.value)
                          const baseValue = assetTypeElement.value === "t-bond" ? 1000 : 100000
                          const totalValue = baseValue * quantity
                          collateralValueElement.textContent = "$" + totalValue.toLocaleString()

                          // Update loan amount (50% LTV by default)
                          const ltvRatio = Number.parseInt(ltvRatioElement.value) / 100
                          const loanAmount = totalValue * ltvRatio
                          loanAmountElement.textContent = "$" + loanAmount.toLocaleString()

                          // Update total repayment
                          const months = Number.parseInt(loanTermElement.value)

                          // Service fee is 1% per month
                          const serviceFee = months * 0.01
                          serviceFeeElement.textContent = (serviceFee * 100).toFixed(1) + "%"

                          const totalRepayment = loanAmount * (1 + serviceFee)
                          totalRepaymentElement.textContent =
                            "$" + totalRepayment.toLocaleString(undefined, { maximumFractionDigits: 2 })
                        }
                      }}
                    >
                      <option value="1">1</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Loan Term: <span id="termDisplay">12</span> months
                    </label>
                    <div className="relative">
                      <input
                        id="loanTerm"
                        type="range"
                        min="1"
                        max="18"
                        step="1"
                        defaultValue="12"
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                        onChange={() => {
                          // Update term display
                          const loanTermElement = document.getElementById("loanTerm") as HTMLInputElement | null
                          const termDisplayElement = document.getElementById("termDisplay")
                          const loanTermDisplayElement = document.getElementById("loanTermDisplay")

                          if (loanTermElement && termDisplayElement && loanTermDisplayElement) {
                            termDisplayElement.textContent = loanTermElement.value
                            loanTermDisplayElement.textContent = loanTermElement.value + " months"

                            // Update repayment calculation
                            const assetTypeElement = document.getElementById("assetType") as HTMLSelectElement | null
                            const quantityElement = document.getElementById("quantity") as HTMLSelectElement | null
                            const ltvRatioElement = document.getElementById("ltvRatio") as HTMLInputElement | null
                            const serviceFeeElement = document.getElementById("serviceFee")
                            const totalRepaymentElement = document.getElementById("totalRepayment")

                            if (
                              assetTypeElement &&
                              quantityElement &&
                              ltvRatioElement &&
                              serviceFeeElement &&
                              totalRepaymentElement
                            ) {
                              const assetType = assetTypeElement.value
                              const quantity = Number.parseInt(quantityElement.value)
                              const baseValue = assetType === "t-bond" ? 1000 : 100000
                              const totalValue = baseValue * quantity
                              const ltvRatio = Number.parseInt(ltvRatioElement.value) / 100
                              const loanAmount = totalValue * ltvRatio
                              const months = Number.parseInt(loanTermElement.value)

                              // Service fee is 1% per month
                              const serviceFee = months * 0.01
                              serviceFeeElement.textContent = (serviceFee * 100).toFixed(1) + "%"

                              const totalRepayment = loanAmount * (1 + serviceFee)
                              totalRepaymentElement.textContent =
                                "$" + totalRepayment.toLocaleString(undefined, { maximumFractionDigits: 2 })
                            }
                          }
                        }}
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>1 mo</span>
                        <span>18 mo</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4 text-center">Loan Summary</h4>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Asset Value:</span>
                      <span id="assetValue" className="font-medium">
                        $1,000
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-300">Collateral Value:</span>
                      <span id="collateralValue" className="font-medium">
                        $1,000
                      </span>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        Loan-to-Value Ratio: <span id="ltvDisplay">50</span>%
                      </label>
                      <div className="relative">
                        <input
                          id="ltvRatio"
                          type="range"
                          min="10"
                          max="70"
                          step="5"
                          defaultValue="50"
                          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                          onChange={() => {
                            // Update LTV display
                            const ltvRatioElement = document.getElementById("ltvRatio") as HTMLInputElement | null
                            const ltvDisplayElement = document.getElementById("ltvDisplay")

                            if (ltvRatioElement && ltvDisplayElement) {
                              ltvDisplayElement.textContent = ltvRatioElement.value

                              // Update loan amount based on LTV
                              const assetTypeElement = document.getElementById("assetType") as HTMLSelectElement | null
                              const quantityElement = document.getElementById("quantity") as HTMLSelectElement | null
                              const loanAmountElement = document.getElementById("loanAmount")
                              const loanTermElement = document.getElementById("loanTerm") as HTMLInputElement | null
                              const serviceFeeElement = document.getElementById("serviceFee")
                              const totalRepaymentElement = document.getElementById("totalRepayment")

                              if (
                                assetTypeElement &&
                                quantityElement &&
                                loanAmountElement &&
                                loanTermElement &&
                                serviceFeeElement &&
                                totalRepaymentElement
                              ) {
                                const assetType = assetTypeElement.value
                                const quantity = Number.parseInt(quantityElement.value)
                                const baseValue = assetType === "t-bond" ? 1000 : 100000
                                const totalValue = baseValue * quantity
                                const ltvRatio = Number.parseInt(ltvRatioElement.value) / 100
                                const loanAmount = totalValue * ltvRatio
                                loanAmountElement.textContent = "$" + loanAmount.toLocaleString()

                                // Update total repayment
                                const months = Number.parseInt(loanTermElement.value)

                                // Service fee is 1% per month
                                const serviceFee = months * 0.01
                                serviceFeeElement.textContent = (serviceFee * 100).toFixed(1) + "%"

                                const totalRepayment = loanAmount * (1 + serviceFee)
                                totalRepaymentElement.textContent =
                                  "$" + totalRepayment.toLocaleString(undefined, { maximumFractionDigits: 2 })
                              }
                            }
                          }}
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                          <span>10%</span>
                          <span>70%</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-300">Loan Amount:</span>
                      <span id="loanAmount" className="font-medium">
                        $500
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-300">Service Fee:</span>
                      <span id="serviceFee" className="font-medium">
                        12.0%
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-300">Loan Term:</span>
                      <span id="loanTermDisplay" className="font-medium">
                        12 months
                      </span>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex justify-between">
                      <span className="text-gray-300">Total Repayment:</span>
                      <span id="totalRepayment" className="font-bold text-xl text-orange-500">
                        $560.00
                      </span>
                    </div>

                    <div className="text-sm text-gray-400 text-center mt-2">Paid in full upon redemption</div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="https://app.kol.am"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 w-full"
                    >
                      Launch dApp
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LST Stablecoin Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">AED LST Stablecoin</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our innovative stablecoin solution provides stability and utility in the volatile crypto market.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 mb-12">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">AED LST Stablecoin</h3>
              </div>
              <p className="text-gray-300 mb-6">
                UAE Dirham-pegged stablecoin backed by liquid staking tokens, providing stability and yield
                opportunities.
              </p>
              <ul className="space-y-3 mb-6 max-w-2xl mx-auto">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fully backed currency</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No loss of peg</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Earn further AED by investing into projects</span>
                </li>
              </ul>
            </div>

            {/* LST Projects List */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-center">LST Investment Opportunities</h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4">Project</th>
                      <th className="text-center py-3 px-4">APY</th>
                      <th className="text-center py-3 px-4">Min Investment</th>
                      <th className="text-center py-3 px-4">Risk Level</th>
                      <th className="text-center py-3 px-4">Available</th>
                      <th className="text-center py-3 px-4">Duration</th>
                      <th className="text-right py-3 px-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/30">
                      <td className="py-4 px-4 font-medium">Gold Transportation</td>
                      <td className="py-4 px-4 text-center text-green-400">18%</td>
                      <td className="py-4 px-4 text-center">$5,000</td>
                      <td className="py-4 px-4 text-center">Medium</td>
                      <td className="py-4 px-4 text-center">$2.5M</td>
                      <td className="py-4 px-4 text-center">12 months</td>
                      <td className="py-4 px-4 text-right">
                        <Link
                          href="https://app.kol.am"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-md text-xs font-medium px-3 py-1.5 bg-orange-500 text-white hover:bg-orange-600"
                        >
                          Invest
                        </Link>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/30">
                      <td className="py-4 px-4 font-medium">Farming Expansion</td>
                      <td className="py-4 px-4 text-center text-green-400">15%</td>
                      <td className="py-4 px-4 text-center">$2,500</td>
                      <td className="py-4 px-4 text-center">Medium-Low</td>
                      <td className="py-4 px-4 text-center">$1.8M</td>
                      <td className="py-4 px-4 text-center">24 months</td>
                      <td className="py-4 px-4 text-right">
                        <Link
                          href="https://app.kol.am"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-md text-xs font-medium px-3 py-1.5 bg-orange-500 text-white hover:bg-orange-600"
                        >
                          Invest
                        </Link>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/30">
                      <td className="py-4 px-4 font-medium">Rent-to-Buy Homes</td>
                      <td className="py-4 px-4 text-center text-green-400">12%</td>
                      <td className="py-4 px-4 text-center">$10,000</td>
                      <td className="py-4 px-4 text-center">Low</td>
                      <td className="py-4 px-4 text-center">$5M</td>
                      <td className="py-4 px-4 text-center">36 months</td>
                      <td className="py-4 px-4 text-right">
                        <Link
                          href="https://app.kol.am"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-md text-xs font-medium px-3 py-1.5 bg-orange-500 text-white hover:bg-orange-600"
                        >
                          Invest
                        </Link>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/30">
                      <td className="py-4 px-4 font-medium">Commercial Property</td>
                      <td className="py-4 px-4 text-center text-green-400">20%</td>
                      <td className="py-4 px-4 text-center">$25,000</td>
                      <td className="py-4 px-4 text-center">Medium-High</td>
                      <td className="py-4 px-4 text-center">$8M</td>
                      <td className="py-4 px-4 text-center">18 months</td>
                      <td className="py-4 px-4 text-right">
                        <Link
                          href="https://app.kol.am"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-md text-xs font-medium px-3 py-1.5 bg-orange-500 text-white hover:bg-orange-600"
                        >
                          Invest
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Investment Journey?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Join Kolam Prosper today and transform how you invest in real-world assets.
            </p>
            <Link
              href="https://app.kol.am"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 py-2 bg-orange-500 text-white hover:bg-orange-600"
            >
              Launch dApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

