"use client"

import { useState, useEffect } from "react"
import { X, Mail } from "lucide-react"

export default function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(false)

  // Show notification after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
      onClick={() => setIsVisible(false)}
    >
      <div
        className="bg-orange-600 text-white rounded-lg shadow-lg max-w-2xl mx-auto p-4 transform transition-all animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center text-center sm:text-left mb-2 sm:mb-0">
            <span className="font-medium">
              🚀 We are currently launching a new site this week 25/3/25. Some features may be temporarily unavailable
              during the transition.
            </span>
          </div>
          <div className="flex items-center">
            <a
              href="mailto:contact@kol.am"
              className="flex items-center text-white hover:text-orange-200 transition-colors mr-4"
            >
              <Mail size={16} className="mr-1" />
              <span>contact@kol.am</span>
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-orange-200 transition-colors"
              aria-label="Close notification"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

