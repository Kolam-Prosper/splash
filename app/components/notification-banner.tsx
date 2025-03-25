// app/components/notification-banner.tsx
"use client"

import { useState } from 'react'
import { X, Mail } from 'lucide-react'

export default function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-orange-600 text-white px-4 py-3 relative">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center text-center sm:text-left mb-2 sm:mb-0">
          <span className="font-medium">
            🚀 We are currently launching a new site this week 25/3/25. Some features may be temporarily unavailable during the transition.
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
  )
}