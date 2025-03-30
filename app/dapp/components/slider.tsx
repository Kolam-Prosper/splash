"use client"

import * as React from "react"

interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: number[]
  value?: number[]
  min?: number
  max?: number
  step?: number
  onValueChange?: (value: number[]) => void
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({ className, defaultValue = [50], value, min = 0, max = 100, step = 1, onValueChange, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue)
    const actualValue = value !== undefined ? value : internalValue

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = [Number.parseInt(e.target.value, 10)]
      setInternalValue(newValue)
      onValueChange?.(newValue)
    }

    const percentage = ((actualValue[0] - min) / (max - min)) * 100

    return (
      <div ref={ref} className={`relative flex w-full touch-none select-none items-center ${className}`} {...props}>
        <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-800">
          <div className="absolute h-full bg-orange-500" style={{ width: `${percentage}%` }} />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={actualValue[0]}
          onChange={handleChange}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
        <div
          className="absolute h-5 w-5 rounded-full border-2 border-orange-500 bg-background"
          style={{ left: `calc(${percentage}% - 10px)` }}
        />
      </div>
    )
  },
)
Slider.displayName = "Slider"

export { Slider }

