import React from 'react'

const SectionTitle = ({ 
  title, 
  subtitle, 
  className = '' 
}) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <span className="inline-block text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wider mb-3">
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
        {title}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-pink-600 dark:from-pink-400 dark:to-pink-500 mx-auto mt-4 rounded-full" />
    </div>
  )
}

export default SectionTitle