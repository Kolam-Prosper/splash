"use client"

import type * as React from "react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {}

interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  description?: string
}

interface NavSection {
  title: string
  items: NavItem[]
}

const sidebarNavItems: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
        icon: "book",
        description: "Get started with the basics of the platform.",
      },
      {
        title: "Installation",
        href: "/docs/installation",
        icon: "package",
        description: "Learn how to install and set up the platform.",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Alert",
        href: "/docs/components/alert",
        icon: "alertCircle",
        description: "Display important information to the user.",
      },
      {
        title: "Accordion",
        href: "/docs/components/accordion",
        icon: "accordion",
        description: "Organize content into collapsible sections.",
      },
      {
        title: "Button",
        href: "/docs/components/button",
        icon: "button",
        description: "Interactive elements for user actions.",
      },
      {
        title: "Card",
        href: "/docs/components/card",
        icon: "card",
        description: "Containers for displaying related information.",
      },
    ],
  },
]

export function Sidebar({ className, ...props }: SidebarProps) {
  const pathname = usePathname()
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  return (
    <div className={cn("hidden border-r bg-background h-full md:block fixed w-60 z-10", className)} {...props}>
      <div className="flex flex-col space-y-6 p-6 w-full">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="font-bold">Acme Corp</span>
        </Link>
        <Separator />
        <nav className="flex flex-col space-y-2">
          {sidebarNavItems.map((section, index) => (
            <div key={index}>
              <div className="text-sm font-semibold text-muted-foreground px-2">{section.title}</div>
              {section.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href || "#"}
                  className={cn(
                    "flex items-center space-x-2 py-2 px-4 rounded-md hover:bg-secondary hover:text-accent-foreground",
                    pathname === item.href ? "bg-secondary text-accent-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.icon && <Icons.arrowRight className="h-4 w-4" />}
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          ))}
        </nav>
        <div className="mt-auto">
          <Separator />
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

