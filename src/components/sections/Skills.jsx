import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  Coffee, 
  Database, 
  Globe, 
  Shield, 
  Cloud, 
  Wrench,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import SectionTitle from '../common/SectionTitle'
import Card from '../ui/Card'
import FloatingParticles from '../common/FloatingParticles'

const Skills = () => {
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

  const [expandedCategory, setExpandedCategory] = useState(null)

  const skillCategories = [
    {
      id: 'languages',
      icon: Coffee,
      title: 'Languages',
      color: 'from-orange-500 to-orange-600 dark:from-orange-500 dark:to-orange-600',
      textColor: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
      borderColor: 'border-orange-200 dark:border-orange-800/50',
      skills: ['Java','C', 'C++' ,'JavaScript', 'SQL', 'HTML', 'CSS']
    },
    {
      id: 'backend',
      icon: Database,
      title: 'Backend',
      color: 'from-green-500 to-green-600 dark:from-emerald-500 dark:to-emerald-600',
      textColor: 'text-green-600 dark:text-emerald-400',
      bgColor: 'bg-green-50 dark:bg-emerald-950/30',
      borderColor: 'border-green-200 dark:border-emerald-800/50',
      skills: ['Spring Boot', 'Spring MVC', 'Spring Security', ,'Jsp','Spring Data JPA', 'Hibernate', 'Node.js', 'Express.js']
    },
    {
      id: 'frontend',
      icon: Globe,
      title: 'Frontend',
      color: 'from-blue-500 to-blue-600 dark:from-blue-500 dark:to-blue-600',
      textColor: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800/50',
      skills: ['React.js', 'NextJs', 'Redux Toolkit', 'Vite', 'Tailwind CSS', 'React Router', 'Axios']
    },
    {
      id: 'database',
      icon: Database,
      title: 'Databases',
      color: 'from-purple-500 to-purple-600 dark:from-purple-500 dark:to-purple-600',
      textColor: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800/50',
      skills: ['MySQL', 'MongoDB']
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Security & APIs',
      color: 'from-red-500 to-red-600 dark:from-red-500 dark:to-red-600',
      textColor: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-50 dark:bg-red-950/30',
      borderColor: 'border-red-200 dark:border-red-800/50',
      skills: ['RESTful APIs', 'JWT', 'Refresh Tokens', 'RBAC', 'Swagger/OpenAPI']
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud & Deployment',
      color: 'from-cyan-500 to-cyan-600 dark:from-cyan-500 dark:to-cyan-600',
      textColor: 'text-cyan-600 dark:text-cyan-400',
      bgColor: 'bg-cyan-50 dark:bg-cyan-950/30',
      borderColor: 'border-cyan-200 dark:border-cyan-800/50',
      skills: ['Vercel', 'Render', 'Railway', 'Cloudinary', 'Razorpay']
    },
    {
      id: 'tools',
      icon: Wrench,
      title: 'Tools & Core CS',
      color: 'from-pink-500 to-pink-600 dark:from-pink-500 dark:to-pink-600',
      textColor: 'text-pink-600 dark:text-pink-400',
      bgColor: 'bg-pink-50 dark:bg-pink-950/30',
      borderColor: 'border-pink-200 dark:border-pink-800/50',
      skills: ['Git', 'GitHub', 'Maven', 'Postman', 'IntelliJ IDEA', 'VS Code', 'Eclipse STS', 'DSA', 'OOP', 'DBMS', 'OS', 'CN']
    }
  ]

  const toggleCategory = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section 
      id="skills" 
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
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-amber-50/50 to-pink-100/50 dark:hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Dark Mode Glowing Orbs */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-20 right-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Glow Rings */}
        <div className="glow-ring w-96 h-96 top-1/4 left-1/4" style={{ animationDelay: '0s' }} />
        <div className="glow-ring w-72 h-72 bottom-1/4 right-1/4" style={{ animationDelay: '2s' }} />
        <div className="glow-ring w-80 h-80 top-1/3 right-1/3" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="My Expertise"
          title="Technical Skills"
          className="text-gray-900 dark:text-white"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card 
                className={`p-6 bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm border-2 ${category.borderColor} shadow-lg hover:shadow-xl dark:shadow-dark-lg transition-all duration-300 cursor-pointer`}
                onClick={() => toggleCategory(category.id)}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl shadow-md`}>
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className={`text-lg font-bold ${category.textColor}`}>
                      {category.title}
                    </h3>
                  </div>
                  <div className="text-gray-400 dark:text-gray-500">
                    {expandedCategory === category.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>

                {/* Skills Grid */}
                <div className={`grid grid-cols-2 gap-2 transition-all duration-300 ${
                  expandedCategory === category.id ? 'opacity-100 max-h-96' : 'opacity-80 max-h-24 overflow-hidden'
                }`}>
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 ${category.bgColor} ${category.textColor} rounded-lg text-sm font-semibold border ${category.borderColor} text-center hover:scale-105 transition-all duration-200`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Expand/Collapse Hint */}
                <div className="mt-3 text-center">
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                    {expandedCategory === category.id ? 'Click to collapse' : `Click to expand (${category.skills.length} skills)`}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <Card className="p-8 bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm border-2 border-amber-200 dark:border-emerald-500/20 shadow-lg dark:shadow-dark-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 bg-gradient-to-br from-amber-500 to-pink-500 dark:from-emerald-500 dark:to-cyan-500 rounded-2xl shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Currently Learning</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  System Design (HLD/LLD) · Microservices Basics · Advanced Spring Boot
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-amber-50 dark:bg-emerald-950/30 text-amber-700 dark:text-emerald-400 rounded-lg text-sm font-semibold border border-amber-200 dark:border-emerald-800/50">
                  System Design
                </span>
                <span className="px-4 py-2 bg-pink-50 dark:bg-cyan-950/30 text-pink-700 dark:text-cyan-400 rounded-lg text-sm font-semibold border border-pink-200 dark:border-cyan-800/50">
                  Microservices
                </span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills