import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)
  const [particles, setParticles] = useState([])
  const { isDark } = useTheme()
  const particleIdRef = useRef(0)
  const animationRef = useRef(null)
  const lastParticleTime = useRef(0)

  useEffect(() => {
    if (!isDark) return

    const handleMouseMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      setPosition({ x, y })
      setIsActive(true)

      // Create particles more frequently
      const now = Date.now()
      if (now - lastParticleTime.current > 30) {
        createParticles(x, y, 2)
        lastParticleTime.current = now
      }
    }

    const handleMouseLeave = () => {
      setIsActive(false)
    }

    const handleTouchMove = (e) => {
      const touch = e.touches[0]
      if (touch) {
        const x = touch.clientX
        const y = touch.clientY
        setPosition({ x, y })
        setIsActive(true)
        const now = Date.now()
        if (now - lastParticleTime.current > 30) {
          createParticles(x, y, 2)
          lastParticleTime.current = now
        }
      }
    }

    const handleTouchEnd = () => {
      setIsActive(false)
    }

    const createParticles = (x, y, count) => {
      const colors = [
        'rgba(0, 255, 200, 0.8)',
        'rgba(0, 255, 150, 0.7)',
        'rgba(100, 255, 200, 0.6)',
        'rgba(0, 200, 255, 0.5)',
        'rgba(0, 255, 100, 0.6)',
        'rgba(50, 255, 180, 0.7)'
      ]

      for (let i = 0; i < count; i++) {
        const id = particleIdRef.current++
        const angle = Math.random() * Math.PI * 2
        const distance = 40 + Math.random() * 120
        const tx = Math.cos(angle) * distance
        const ty = Math.sin(angle) * distance - 60
        const size = 2 + Math.random() * 5
        const color = colors[Math.floor(Math.random() * colors.length)]
        const duration = 1 + Math.random() * 1.5

        const newParticle = {
          id,
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          tx,
          ty,
          size,
          color,
          duration,
          life: 1,
          createdAt: Date.now()
        }

        setParticles(prev => [...prev, newParticle])

        // Remove particle after animation
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== id))
        }, duration * 1000 + 200)
      }
    }

    // Clean up old particles
    const cleanup = () => {
      setParticles(prev => prev.filter(p => Date.now() - p.createdAt < 2000))
    }

    const interval = setInterval(cleanup, 3000)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('touchmove', handleTouchMove)
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      clearInterval(interval)
    }
  }, [isDark])

  if (!isDark) return null

  return (
    <div className="mouse-glow-container">
      {/* Particles Only - No Circle */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="mouse-particle"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            '--tx': `${particle.tx}px`,
            '--ty': `${particle.ty}px`,
            '--duration': `${particle.duration}s`,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  )
}

export default MouseGlow