import React from "react"
import Link from "next/link"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  asChild?: boolean
  href?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild = false, href, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

    const variantStyles = {
      default: "bg-orange-600 hover:bg-orange-700 text-white",
      outline: "border border-white/20 hover:bg-white/10 text-white",
    }

    const sizeStyles = {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3 text-xs",
      lg: "h-11 px-8",
    }

    const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

    if (asChild && href) {
      return (
        <Link href={href} className={styles}>
          {children}
        </Link>
      )
    }

    return (
      <button className={styles} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"

