import React from 'react'

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  glass = false,
  ...props 
}) => {
  const baseStyles = 'rounded-2xl overflow-hidden transition-all duration-300'
  
  const glassStyles = glass ? 'glass card-shadow' : 'bg-white'
  
  const hoverStyles = hover ? 'hover:card-shadow-hover hover:-translate-y-1' : ''
  
  return (
    <div 
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card