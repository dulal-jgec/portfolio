import React from 'react'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false,
  href,
  target,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantStyles = {
    primary: 'bg-accent-green text-white hover:bg-accent-green-dark shadow-lg hover:shadow-xl focus:ring-accent-green',
    secondary: 'bg-accent-yellow text-gray-900 hover:bg-accent-yellow-light shadow-lg hover:shadow-xl focus:ring-accent-yellow',
    outline: 'bg-transparent border-2 border-accent-green text-accent-green hover:bg-accent-green hover:text-white focus:ring-accent-green',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-300',
  }
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`

  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        className={combinedClassName}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button 
      className={combinedClassName} 
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button