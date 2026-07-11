import React, { useEffect, useRef } from 'react'
import { Mail, ArrowUp, MapPin, Phone, Briefcase } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/dulal-jgec", icon: FaGithub },
    { name: "LinkedIn", url: "https://linkedin.com/in/sk-dulal-islam", icon: FaLinkedin },
    { name: "Email", url: "mailto:skdulalislam1@gmail.com", icon: Mail },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer 
      ref={sectionRef}
      className="relative overflow-hidden opacity-0 border-t-2 border-white/10 dark:border-white/5"
    >
      {/* Light Mode Background - Deep Sky */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950 via-blue-900 to-indigo-950">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-20 right-20 w-64 h-64 bg-sky-300/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        
        {/* Star Sparkles - Light Mode */}
        <div className="absolute top-10 left-10 w-1 h-1 bg-white/40 rounded-full animate-pulse" />
        <div className="absolute top-24 right-32 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-24 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-20 right-40 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }} />
      </div>

      {/* Dark Mode Background - Deep Navy/Black */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050510] via-[#0a0a1a] to-[#050510]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-green-500/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* White Border Line - Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Grid - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Brand & Info - Span full width on mobile */}
          <div className="col-span-2 md:col-span-1 space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              SK<span className="text-sky-400 dark:text-emerald-400">.</span>
            </h3>
            <p className="text-blue-200/60 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
              Full Stack Developer passionate about building scalable web applications 
              with <span className="text-sky-300 dark:text-emerald-400 font-medium">Java</span>, <span className="text-cyan-300 dark:text-cyan-400 font-medium">Spring Boot</span>, <span className="text-blue-300 dark:text-blue-400 font-medium">React</span>, and <span className="text-emerald-300 dark:text-green-400 font-medium">Node.js</span>.
            </p>
            <div className="flex items-center gap-2 text-blue-200/60 dark:text-gray-400 text-xs md:text-sm">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-sky-400 dark:text-emerald-400" />
              <span className="text-white/80 dark:text-white">Jalpaiguri, West Bengal</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200/60 dark:text-gray-400 text-xs md:text-sm">
              <Briefcase className="w-3 h-3 md:w-4 md:h-4 text-emerald-400" />
              <span className="text-emerald-300 dark:text-emerald-400 font-medium">Open for Internships & Full-Time</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-200/50 dark:text-gray-400 hover:text-sky-300 dark:hover:text-emerald-400 transition-colors duration-300 text-xs md:text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm md:text-base">Contact</h4>
            <div className="space-y-2">
              <a
                href="mailto:skdulalislam1@gmail.com"
                className="flex items-center gap-2 text-blue-200/50 dark:text-gray-400 hover:text-sky-300 dark:hover:text-emerald-400 transition-colors duration-300 text-xs md:text-sm group"
              >
                <Mail className="w-3 h-3 md:w-4 md:h-4 text-sky-400 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="truncate">skdulalislam1@gmail.com</span>
              </a>
              <a
                href="tel:+917364821623"
                className="flex items-center gap-2 text-blue-200/50 dark:text-gray-400 hover:text-sky-300 dark:hover:text-emerald-400 transition-colors duration-300 text-xs md:text-sm group"
              >
                <Phone className="w-3 h-3 md:w-4 md:h-4 text-sky-400 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>+91 7364821623</span>
              </a>
              <div className="flex items-center gap-2 text-blue-200/50 dark:text-gray-400 text-xs md:text-sm">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-sky-400 dark:text-emerald-400" />
                <span>Paschim Medinipur, WB</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm md:text-base">Connect</h4>
            <div className="flex gap-2 md:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 md:p-2.5 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-lg md:rounded-xl hover:bg-white/20 dark:hover:bg-white/10 hover:border-sky-400/50 dark:hover:border-emerald-400/30 transition-all duration-300 hover:-translate-y-1 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-200/70 dark:text-gray-400 group-hover:text-sky-300 dark:group-hover:text-emerald-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
            <p className="text-blue-200/40 dark:text-gray-500 text-[10px] md:text-xs mt-1">
              Let's connect & build together
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 md:my-10 h-px bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent" />

        {/* Bottom Bar - Stack on mobile */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-[10px] md:text-sm">
          <p className="text-blue-200/40 dark:text-gray-500 order-2 md:order-1">
            &copy; {currentYear} <span className="text-white dark:text-white font-medium">SK Dulal Islam</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-blue-200/40 dark:text-gray-500 order-3 md:order-2">
            <span>Built with <span className="text-sky-300 dark:text-emerald-400 font-medium">React</span> & <span className="text-cyan-300 dark:text-cyan-400 font-medium">Tailwind</span></span>
            <span className="hidden md:inline text-blue-400/20 dark:text-gray-600">|</span>
            <span className="flex items-center gap-1">
              Made with <span className="text-pink-400 animate-pulse">♥</span> in <span className="text-white/70 dark:text-white font-medium">India</span>
            </span>
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 md:p-2.5 bg-gradient-to-r from-sky-500 to-blue-600 dark:from-emerald-500 dark:to-cyan-500 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 order-1 md:order-3"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3 h-3 md:w-4 md:h-4 text-white" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer