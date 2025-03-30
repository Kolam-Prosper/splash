"use client"

import React, { createContext, useContext, useState } from "react"

// Create context for sidebar state
type SidebarContextType = {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
  variant: "default" | "floating"
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

// Sidebar Provider
interface SidebarProviderProps {
  children: React.ReactNode
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [variant, setVariant] = useState<"default" | "floating">("default")

  return <SidebarContext.Provider value={{ collapsed, setCollapsed, variant }}>{children}</SidebarContext.Provider>
}

// Sidebar Components
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "floating"
  collapsible?: "icon" | "full" | false
}

export function Sidebar({
  children,
  className = "",
  variant = "default",
  collapsible = false,
  ...props
}: SidebarProps) {
  const { collapsed, setCollapsed } = useSidebar()

  const variantClasses = {
    default: "border-r border-white/10 bg-gray-900/80 backdrop-blur-md",
    floating: "bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-xl m-2",
  }

  return (
    <div
      className={`w-64 ${collapsed ? "w-20" : "w-64"} transition-all duration-300 ${
        variantClasses[variant]
      } ${className}`}
      {...props}
    >
      <div className="flex flex-col h-full">
        {children}
        {collapsible && (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="absolute bottom-4 right-4 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
          >
            {collapsed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="13 17 18 12 13 7"></polyline>
                <polyline points="6 17 11 12 6 7"></polyline>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="11 17 6 12 11 7"></polyline>
                <polyline points="18 17 13 12 18 7"></polyline>
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export function SidebarHeader({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { collapsed } = useSidebar()
  return (
    <div
      className={`p-4 ${collapsed ? "items-center justify-center" : ""} border-b border-white/10 ${className}`}
      {...props}
    />
  )
}

export function SidebarContent({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`flex-1 overflow-y-auto p-2 ${className}`} {...props} />
}

export function SidebarFooter({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`border-t border-white/10 p-4 ${className}`} {...props} />
}

export function SidebarMenu({ className = "", ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={`space-y-1 ${className}`} {...props} />
}

export function SidebarMenuItem({ className = "", ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return <li className={className} {...props} />
}

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  tooltip?: string
  asChild?: boolean
}

export function SidebarMenuButton({
  children,
  className = "",
  isActive = false,
  tooltip,
  asChild = false,
  ...props
}: SidebarMenuButtonProps) {
  const { collapsed } = useSidebar()
  const Component = asChild ? React.Children.only(children) : "button"

  const baseClasses = `flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors ${
    isActive ? "bg-orange-500/20 text-orange-500" : "text-gray-300 hover:bg-gray-800 hover:text-white"
  }`

  // If asChild is true, we need to clone the child element to add our props
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, {
      className: `${baseClasses} ${(children as React.ReactElement).props.className || ""}`,
      ...props,
    })
  }

  return (
    <div className="relative group">
      <button className={`${baseClasses} ${className}`} {...props}>
        {React.Children.map(children, (child) => {
          if (typeof child === "string") {
            return collapsed ? null : child
          }
          return child
        })}
      </button>
      {collapsed && tooltip && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          {tooltip}
        </div>
      )}
    </div>
  )
}

