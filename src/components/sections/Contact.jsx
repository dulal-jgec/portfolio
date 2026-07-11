import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from 'emailjs-com';
import SectionTitle from "../common/SectionTitle";
import Card from "../ui/Card";
import Button from "../common/Button";
import FloatingParticles from '../common/FloatingParticles';

const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // REPLACE THESE WITH YOUR ACTUAL CREDENTIALS
      const serviceID = 'YOUR_SERVICE_ID';
      const templateID = 'YOUR_TEMPLATE_ID';
      const userID = 'YOUR_USER_ID';

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        title: `Portfolio Contact - ${formData.name}`,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(serviceID, templateID, templateParams, userID);
      
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error("Email sending error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "skdulalislam1@gmail.com",
      link: "mailto:skdulalislam1@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7364821623",
      link: "tel:+917364821623",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Paschim Medinipur, West Bengal",
      link: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section 
      id="contact" 
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50/50 to-emerald-50/50 dark:hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Dark Mode Glowing Orbs */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
        <div className="absolute top-20 right-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        
        {/* Glow Rings */}
        <div className="glow-ring w-96 h-96 top-1/4 left-1/4" style={{ animationDelay: '0s' }} />
        <div className="glow-ring w-72 h-72 bottom-1/4 right-1/4" style={{ animationDelay: '2s' }} />
        <div className="glow-ring w-80 h-80 top-1/3 right-1/3" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Get in Touch"
          title="Let's Connect"
          className="text-gray-900 dark:text-white"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Build Something <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 dark:from-emerald-400 dark:via-cyan-400 dark:to-green-400 bg-clip-text text-transparent">Amazing</span> Together
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm currently looking for internship or full-time opportunities
                where I can contribute my skills and grow as a developer. Feel
                free to reach out!
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="p-3 bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-500 dark:from-emerald-500 dark:via-cyan-500 dark:to-green-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                Connect with me
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/dulal-jgec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm border-2 border-gray-200 dark:border-dark-border rounded-xl hover:border-blue-400 dark:hover:border-emerald-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <FaGithub className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/sk-dulal-islam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm border-2 border-gray-200 dark:border-dark-border rounded-xl hover:border-cyan-400 dark:hover:border-cyan-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <FaLinkedin className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm border-2 border-blue-100/50 dark:border-dark-border shadow-xl hover:shadow-2xl dark:shadow-dark-lg transition-shadow duration-300">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-bg/50 border-2 border-gray-200 dark:border-dark-border rounded-xl focus:border-blue-400 dark:focus:border-emerald-400 focus:ring-4 focus:ring-blue-100 dark:focus:ring-emerald-900/30 focus:outline-none transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-bg/50 border-2 border-gray-200 dark:border-dark-border rounded-xl focus:border-cyan-400 dark:focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100 dark:focus:ring-cyan-900/30 focus:outline-none transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-bg/50 border-2 border-gray-200 dark:border-dark-border rounded-xl focus:border-emerald-400 dark:focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 dark:focus:ring-emerald-900/30 focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Tell me about your opportunity..."
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 dark:text-red-400 text-sm text-center font-medium">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-700 hover:via-cyan-600 hover:to-emerald-600 dark:from-emerald-500 dark:via-cyan-500 dark:to-green-500 dark:hover:from-emerald-600 dark:hover:via-cyan-600 dark:hover:to-green-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : isSubmitted ? (
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Message Sent!
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </div>
                    )}
                  </Button>

                  {isSubmitted && (
                    <p className="text-emerald-600 dark:text-emerald-400 text-sm text-center font-medium animate-pulse">
                      Thank you! I'll get back to you soon.
                    </p>
                  )}
                </form>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-emerald-500/10 dark:from-emerald-500/5 dark:via-cyan-500/5 dark:to-green-500/5 backdrop-blur-sm border-2 border-blue-200/50 dark:border-dark-border shadow-lg text-center hover:shadow-xl dark:shadow-dark-lg transition-shadow duration-300">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Open for <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 dark:from-emerald-400 dark:via-cyan-400 dark:to-green-400 bg-clip-text text-transparent">Internships</span> & <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 dark:from-green-400 dark:via-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">Full-Time</span> Opportunities
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              I'm actively looking for opportunities where I can contribute,
              learn, and grow as a developer. Let's connect and discuss how I
              can add value to your team.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;