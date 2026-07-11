import React from 'react'
import { useTheme } from '../../context/ThemeContext'

const FloatingParticles = () => {
  const { isDark } = useTheme()

  if (!isDark) return null

  return (
    <>
      <div className="floating-particle" />
      <div className="floating-particle" />
      <div className="floating-particle" />
      <div className="floating-particle" />
      <div className="floating-particle" />
    </>
  )
}

export default FloatingParticles