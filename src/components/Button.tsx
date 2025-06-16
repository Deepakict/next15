import React from 'react'

export type ButtonProps = {
  label: string
  onClick?: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary'
}

export const Button = ({ label, onClick, disabled, variant = 'primary' }: ButtonProps) => {
  const baseStyle = 'px-4 py-2 rounded text-white font-medium'
  const variantStyle =
    variant === 'primary' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-500 hover:bg-gray-600'

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyle} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {label}
    </button>
  )
}