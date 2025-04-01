"use client"

import type React from "react"

interface InputProps {
  label?: string
  type?: string
  placeholder?: string
  value?: string | number | readonly string[] | undefined
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
  required?: boolean
  disabled?: boolean
  error?: string | undefined
  className?: string
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  required,
  disabled,
  error,
  className,
}) => {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={name} className="block mb-1 font-medium">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
        disabled={disabled}
        className={`border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500 ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}

export default Input

