"use client"

import MadagascarFlow from "./madagascar-flow"
import Link from "next/link"

export default function MadagascarInitiativePage() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Madagascar Housing Initiative</h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-8">
              Building sustainable homes through innovative tokenized property deeds with social impact integration
            </p>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-700 justify-center">
              <button
                className="px-4 py-2 font-medium text-sm border-b-2 border-orange-500 text-orange-500"
                onClick={() => {}}
              >
                Overview
              </button>
              <Link href="/$10k-homes" className="px-4 py-2 font-medium text-sm text-gray-400 hover:text-gray-300">
                $10K Homes
              </Link>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-orange-500">Initiative Overview</h2>
            <p className="text-gray-300 mb-6">
              The Madagascar Housing Initiative aims to create affordable, sustainable housing while generating returns
              for investors and creating a positive social impact. By tokenizing $10,000 property deeds creating a self-sustaining ecosystem that benefits all
              stakeholders.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-800 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-orange-400">Affordable Housing</h3>
                <p className="text-gray-400">
                  Creating quality homes in Madagascar at $10,000 per unit with a rent-to-own model that empowers local
                  residents.
                </p>
              </div>
              <div className="bg-gray-800 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-orange-400">Social Impact</h3>
                <p className="text-gray-400">
                  
                </p>
              </div>
              <div className="bg-gray-800 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-orange-400">Investor Returns</h3>
                <p className="text-gray-400">
                  Structured to provide competitive returns while creating lasting social impact through a transparent
                  model.
                </p>
              </div>
            </div>
          </div>

          {/* Investment Structure */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-orange-500">Investment Structure</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Property Deed Tokens</h3>
              <p className="text-gray-300 mb-4">
                Our primary investment vehicle will be the Madagascar Property Deed Token, priced at $10,000 per unit.
                Each token represents ownership in a single housing unit with the following allocation:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                <li>30% allocated directly to the Construction Fund for building homes</li>
                <li>70% held in Treasury for staking or loan options</li>
                <li>Rent-to-own structure allows eventual ownership transfer to residents</li>
                <li>Returns generated from both rental income and staking rewards</li>
              </ul>
            </div>

            <div className="mb-8">
           
            {/* Flow Diagram */}
            <MadagascarFlow />
          </div>

          {/* Rent-to-Own Mechanism */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-orange-500">Rent-to-Own Mechanism</h2>
            <p className="text-gray-300 mb-6">
              Our innovative rent-to-own structure allows residents to gradually build ownership in their homes while
              providing stable returns to investors.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Structure</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Initial property value: $10,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Ownership transfer premium: 25% ($12,500 total buyout)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Standard term: 7 years (84 months)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Monthly payment: Base rent + Ownership contribution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Ownership contribution: ~$149/month ($12,500 ÷ 84)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Benefits</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Residents build equity with each payment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Investors receive predictable returns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>25% premium provides attractive investor yield</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Capital recycled into new construction after buyout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Creates sustainable housing development cycle</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold mb-3 text-orange-400">Example Calculation</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-gray-300">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-2 px-4">Component</th>
                      <th className="text-right py-2 px-4">Amount</th>
                      <th className="text-left py-2 px-4">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-4">Property Value</td>
                      <td className="py-2 px-4 text-right">$10,000</td>
                      <td className="py-2 px-4">Initial construction cost</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-4">Ownership Premium</td>
                      <td className="py-2 px-4 text-right">25%</td>
                      <td className="py-2 px-4">Return to investors</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-4">Total Buyout Amount</td>
                      <td className="py-2 px-4 text-right">$12,500</td>
                      <td className="py-2 px-4">$10,000 + 25% premium</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-4">Term</td>
                      <td className="py-2 px-4 text-right">84 months</td>
                      <td className="py-2 px-4">7 years</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-4">Base Monthly Rent</td>
                      <td className="py-2 px-4 text-right">$50</td>
                      <td className="py-2 px-4">Maintenance & management</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2 px-4">Ownership Contribution</td>
                      <td className="py-2 px-4 text-right">$149</td>
                      <td className="py-2 px-4">$12,500 ÷ 84 months</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium">Total Monthly Payment</td>
                      <td className="py-2 px-4 text-right font-medium">$199</td>
                      <td className="py-2 px-4">$50 + $149</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

       
