import React from 'react'

const Badge = ({ 
  children, 
  variant = 'default', 
  className = '' 
}) => {
  const variantStyles = {
    default: 'bg-gray-100 text-gray-700',
    yellow: 'bg-yellow-100 text-yellow-800',
    green: 'bg-green-100 text-green-800',
    outline: 'bg-transparent border border-gray-300 text-gray-700',
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )
}

export default Badge