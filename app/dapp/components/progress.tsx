import * as React from "react"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
  indicatorClassName?: string
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, indicatorClassName, ...props }, ref) => {
    const percentage = (value / max) * 100

    return (
      <div ref={ref} className={`relative h-4 w-full overflow-hidden rounded-full bg-gray-800 ${className}`} {...props}>
        <div
          className={`h-full w-full flex-1 bg-orange-500 transition-all ${indicatorClassName}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    )
  },
)
Progress.displayName = "Progress"

export { Progress }

