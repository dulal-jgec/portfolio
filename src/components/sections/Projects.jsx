import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ShoppingCart, GraduationCap, Server } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import SectionTitle from '../common/SectionTitle'
import Card from '../ui/Card'
import Button from '../common/Button'
import FloatingParticles from '../common/FloatingParticles'

const Projects = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-enter')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: 'ShopLy',
      subtitle: 'Multi-Vendor E-Commerce Platform',
      description: 'Designed and developed a multi-vendor e-commerce platform with separate Customer, Seller, and Admin modules, secured using JWT authentication and Role-Based Access Control (RBAC). Designed and developed 30+ production-ready RESTful APIs covering authentication, products, categories, cart, checkout, orders, seller approval, reviews, and banner management using Spring Boot, Spring Security, and Hibernate ORM. Integrated Razorpay for secure payments and Cloudinary for product image uploads.',
      tech: ['Spring Boot', 'React', 'Redux Toolkit', 'MySQL', 'JWT', 'Razorpay', 'Cloudinary'],
      github: 'https://github.com/dulal-jgec/ecommerce-v2',
      live: 'https://ecommerce-v2-orpin.vercel.app/',
      image: '/images/shoply.jpg',
      icon: ShoppingCart,
      color: 'from-green-500 to-green-600 dark:from-emerald-500 dark:to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-emerald-950/30',
      borderColor: 'border-green-200 dark:border-emerald-800/50',
      textColor: 'text-green-600 dark:text-emerald-400'
    },
    {
      id: 2,
      title: 'EduZen',
      subtitle: 'Coaching Centre Management System',
      description: 'Built a full-stack coaching management system with secure Admin and Student modules. Implemented JWT authentication, Spring Security, RESTful APIs, student registration, fee management, and approval workflow. Integrated React frontend with Spring Boot backend using MySQL and documented APIs with Swagger UI.',
      tech: ['Spring Boot', 'React', 'MySQL', 'JWT', 'Spring Security', 'Swagger'],
      github: 'https://github.com/dulal-jgec/scholarsedge',
      live: 'https://scholarsedge.vercel.app/',
      image: '/images/eduxen.jpg',
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600 dark:from-blue-500 dark:to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800/50',
      textColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      id: 3,
      title: 'Java Servlet E-Commerce',
      subtitle: 'Learning Project - Servlet & JSP',
      description: 'A small e-commerce project built while learning Java Servlets and JSP. Implemented basic CRUD operations, user authentication, and product management using traditional Java web technologies. This project helped me understand the fundamentals of Java web development before moving to Spring Boot.',
      tech: ['Java Servlets', 'JSP', 'JDBC', 'MySQL', 'HTML', 'CSS'],
      github: 'https://github.com/dulal-jgec/java-servlet-ecommerce',
      live: null,
      image: '/images/servlet.jpg',
      icon: Server,
      color: 'from-purple-500 to-purple-600 dark:from-purple-500 dark:to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800/50',
      textColor: 'text-purple-600 dark:text-purple-400',
      isSmall: true
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden night-sky opacity-0"
    >
      {/* Stars Layer */}
      <div className="stars" />
      
      {/* Shooting Stars */}
      <div className="hidden dark:block">
        <div className="shooting-star" />
        <div className="shooting-star" />
        <div className="shooting-star" />
      </div>

      {/* Norway Style Aurora */}
      <div className="hidden dark:block">
        <div className="aurora-norway" />
        <div className="aurora-norway" />
        <div className="aurora-norway" />
        <div className="aurora-norway" />
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Light Mode Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-pink-50 to-amber-100/50 dark:hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Dark Mode Glowing Orbs */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-20 right-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        
        {/* Glow Rings */}
        <div className="glow-ring w-96 h-96 top-1/4 left-1/4" style={{ animationDelay: '0s' }} />
        <div className="glow-ring w-72 h-72 bottom-1/4 right-1/4" style={{ animationDelay: '2s' }} />
        <div className="glow-ring w-80 h-80 top-1/3 right-1/3" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="My Work"
          title="Featured Projects"
          className="text-gray-900 dark:text-white"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className={project.isSmall ? 'lg:col-span-2 lg:max-w-md lg:mx-auto' : ''}
            >
              <Card className={`overflow-hidden bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm border-2 border-pink-100/50 dark:border-dark-border shadow-lg hover:shadow-2xl dark:shadow-dark-lg transition-all duration-300 ${project.isSmall ? 'border-purple-100/50 dark:border-purple-500/20' : ''}`}>
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-card dark:to-dark-bg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x400/FFD700/FFFFFF?text=${project.title}`
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent`} />
                  
                  {/* Project Icon Badge */}
                  <div className={`absolute top-4 right-4 p-3 bg-gradient-to-br ${project.color} rounded-xl shadow-lg`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Project Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-white/80 text-sm">{project.subtitle}</p>
                    {project.isSmall && (
                      <span className="inline-block mt-2 px-2 py-0.5 bg-purple-500/80 text-white text-xs rounded-full">
                        Learning Project
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 6).map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 ${project.bgColor} ${project.textColor} rounded-lg text-xs font-semibold border ${project.borderColor}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 6 && (
                      <span className={`px-3 py-1 ${project.bgColor} ${project.textColor} rounded-lg text-xs font-semibold border ${project.borderColor}`}>
                        +{project.tech.length - 6} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="primary" 
                      size="sm"
                      href={project.github}
                      target="_blank"
                      className="flex-1 bg-accent-green hover:bg-accent-green-dark dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-semibold"
                    >
                      <FaGithub className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    {project.live ? (
                      <Button 
                        variant="secondary" 
                        size="sm"
                        href={project.live}
                        target="_blank"
                        className="flex-1 bg-accent-yellow hover:bg-accent-yellow-light dark:bg-amber-500 dark:hover:bg-amber-600 text-gray-900 dark:text-white font-semibold"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    ) : (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        disabled
                        className="flex-1 opacity-60 cursor-not-allowed text-gray-500 dark:text-gray-400"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        No Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm border-2 border-amber-200 dark:border-emerald-500/20 shadow-lg hover:shadow-xl dark:shadow-dark-lg transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 dark:from-emerald-500 dark:to-cyan-500 rounded-xl shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">Achievement</h4>
                  <p className="text-gray-700 dark:text-gray-300">Secured 5th place in CSS Battle at Sristi 2025</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm border-2 border-pink-200 dark:border-cyan-500/20 shadow-lg hover:shadow-xl dark:shadow-dark-lg transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-pink-500 to-rose-500 dark:from-cyan-500 dark:to-blue-500 rounded-xl shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">Extracurricular</h4>
                  <p className="text-gray-700 dark:text-gray-300">Active Member - Coders Club DnC, JGEC</p>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects