"use client"

import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from "react"
import ClientLayout from './client-layout'

export default function Home() {
  return (
    <ClientLayout>
      <div className="flex flex-col min-h-screen bg-black text-white">
        {/* Navigation */}
        <header className="border-b border-gray-800/50 bg-black/80 backdrop-blur-sm fixed w-full z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold">
                <span className="text-white">Kolam</span>
                <span className="text-orange-500">Prosper</span>
              </Link>
              <div className="ml-2 text-xs text-gray-400 mt-1">كرام پروسپر</div>
            </div>

            <div className="flex items-center">
              <Link
                href="/launch"
                className="bg-orange-600 text-white px-5 py-2 rounded text-sm font-medium hover:bg-orange-700 transition-colors"
              >
                Launch
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-grow flex items-center justify-center relative pt-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="w-full h-full bg-[url('/network-bg.svg')] bg-center bg-no-repeat bg-cover opacity-30"></div>
          </div>

          <div className="container mx-auto px-4 py-16 z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-3 px-4 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium">
                Blockchain Technology
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                Revolutionizing Finance
                <br />
                <span className="text-orange-500">Through Tokenization</span>
              </h1>

              <p className="max-w-2xl mx-auto text-gray-300 mb-12 text-lg leading-relaxed">
                Tokenized T-bonds and property deeds with secure staking and non-liquidating loan options. Unlock the
                potential of real-world assets on the blockchain.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/app"
                  className="bg-orange-600 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-700 transition-colors w-full sm:w-auto"
                >
                  Launch App
                </Link>

                <Link
                  href="/learn"
                  className="flex items-center justify-center text-white px-6 py-3 rounded-md font-medium hover:text-orange-400 transition-colors w-full sm:w-auto group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ClientLayout>
  );
}