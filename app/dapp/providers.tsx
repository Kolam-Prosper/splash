"use client"

import type React from "react"

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  // This component should only provide context providers, not layout components
  return <>{children}</>
}

