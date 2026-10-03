import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  ArrowRight,
  Code,
  Rocket,
  Star,
  Briefcase,
  Award,
} from "lucide-react";
import Button from "../common/Button";
import SocialLinks from "../common/SocialLinks";
import FloatingParticles from "../common/FloatingParticles";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden night-sky"
    >
      <div className="stars" />

      <div className="hidden dark:block">
        <div className="shooting-star" />
        <div className="shooting-star" />
        <div className="shooting-star" />
      </div>

      <div className="hidden dark:block">
        <div className="aurora-norway" />
        <div className="aurora-norway" />
        <div className="aurora-norway" />
        <div className="aurora-norway" />
      </div>

      <FloatingParticles />

      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-pink-50 to-amber-100/50 dark:hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-1/4 right-0 w-80 h-80 bg-pink-200/40 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-1/4 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-400/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />

        <div
          className="glow-ring w-96 h-96 top-1/4 left-1/4"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="glow-ring w-72 h-72 bottom-1/4 right-1/4"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="glow-ring w-80 h-80 top-1/3 right-1/3"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-amber-700 dark:text-emerald-300 border border-amber-300/30 dark:border-emerald-500/20 bg-white/60 dark:bg-dark-card/60 backdrop-blur-sm">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500 dark:text-emerald-400" />
                Full Stack Developer
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="text-gray-900 dark:text-white">SK DULAL</span>
                <br />
                <span className="bg-gradient-to-r from-amber-600 via-pink-600 to-amber-700 dark:from-emerald-400 dark:via-green-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  ISLAM
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                Java · Spring Boot · React · Node.js
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-700 dark:text-gray-300 text-lg max-w-xl leading-relaxed">
                Full Stack Developer currently interning at{" "}
                <span className="font-semibold text-amber-700 dark:text-emerald-300">
                  InternMo
                </span>
                . Building scalable web applications with Java, Spring Boot,
                React, and Node.js. Creator of{" "}
                <span className="font-semibold text-amber-700 dark:text-emerald-300">
                  MedCore
                </span>{" "}
                — a multi-tenant hospital management system.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg" href="#contact">
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/resume.pdf"
                target="_blank"
              >
                View Resume
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-amber-600 dark:text-emerald-400" />
                <span className="text-sm">Paschim Medinipur, West Bengal</span>
              </div>
              <a
                href="mailto:skdulalislam1@gmail.com"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-emerald-400 transition-colors duration-300"
              >
                <Mail className="w-5 h-5 text-amber-600 dark:text-emerald-400" />
                <span className="text-sm">skdulalislam1@gmail.com</span>
              </a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SocialLinks />
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative flex justify-center items-center"
          >
            <motion.div
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              className="relative w-full max-w-lg"
            >
              <div className="glass rounded-3xl p-8 card-shadow relative overflow-hidden border border-amber-200/30 dark:border-emerald-500/10 bg-white/60 dark:bg-dark-card/60 backdrop-blur-xl">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-200/20 dark:bg-emerald-500/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-200/20 dark:bg-green-500/5 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-amber-300/50 dark:border-emerald-400/30 card-shadow">
                        <img
                          src="/images/profile.jpg"
                          alt="SK Dulal Islam"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-gradient-to-r from-amber-500 to-pink-500 dark:from-emerald-500 dark:to-cyan-500 rounded-full flex items-center justify-center border-2 border-white dark:border-dark-bg">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex items-start gap-3">
                      <span className="text-gray-400 dark:text-gray-600 select-none">
                        1
                      </span>
                      <span className="text-[#FF6B9D] dark:text-[#FF6B9D] font-bold">
                        const
                      </span>
                      <span className="text-[#4A90D9] dark:text-[#6AB0F0] font-bold">
                        developer
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">
                        =
                      </span>
                      <span className="text-[#FF6B35] dark:text-[#FF6B35] font-bold">{`{`}</span>
                    </div>

                    <div className="flex items-start gap-3 pl-8">
                      <span className="text-gray-400 dark:text-gray-600 select-none">
                        2
                      </span>
                      <span className="text-[#4A90D9] dark:text-[#6AB0F0] font-bold">
                        name
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">
                        :
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "SK Dulal Islam"
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">
                        ,
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-8">
                      <span className="text-gray-400 dark:text-gray-600 select-none">
                        3
                      </span>
                      <span className="text-[#4A90D9] dark:text-[#6AB0F0] font-bold">
                        role
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">
                        :
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "Full Stack Developer"
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">
                        ,
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-8">
                      <span className="text-gray-400 dark:text-gray-600 select-none">
                        4
                      </span>
                      <span className="text-[#4A90D9] dark:text-[#6AB0F0] font-bold">
                        company
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">
                        :
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "InternMo"
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">
                        ,
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-8">
                      <span className="text-gray-400 dark:text-gray-600 select-none">
                        5
                      </span>
                      <span className="text-[#4A90D9] dark:text-[#6AB0F0] font-bold">
                        skills
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">
                        :
                      </span>
                      <span className="text-[#FFD700] dark:text-[#FFD700] font-bold">
                        [
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-16">
                      <span className="text-gray-400 dark:text-gray-600 select-none">
                        6
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "Java"
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">
                        ,
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-16">
                      <span className="text-gray-400 dark:text-gray-600 select-none">
                        7
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "Spring Boot"
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">
                        ,
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-16">
                      <span className="text-gray-400 dark:text-gray-600 select-none">
                        8
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "React"
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">
                        ,
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-16">
                      <span className="text-gray-400 dark:text-gray-600 select-none">
                        9
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "Node.js"
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-8">
                      <span className="text-gray-400 dark:text-gray-600 select-none">
                        10
                      </span>
                      <span className="text-[#FFD700] dark:text-[#FFD700] font-bold">
                        ]
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">
                        ,
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-8">
                      <span className="text-gray-400 dark:text-gray-600 select-none">
                        11
                      </span>
                      <span className="text-[#4A90D9] dark:text-[#6AB0F0] font-bold">
                        projects
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">
                        :
                      </span>
                      <span className="text-[#FFD700] dark:text-[#FFD700] font-bold">
                        [
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-16">
                      <span className="text-gray-400 dark:text-gray-600 select-none">
                        12
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "MedCore"
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">
                        ,
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-16">
                      <span className="text-gray-400 dark:text-gray-600 select-none">
                        13
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "ShopLy"
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">
                        ,
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-16">
                      <span className="text-gray-400 dark:text-gray-600 select-none">
                        14
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "EduZen"
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-8">
                      <span className="text-gray-400 dark:text-gray-600 select-none">
                        15
                      </span>
                      <span className="text-[#FFD700] dark:text-[#FFD700] font-bold">
                        ]
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-gray-400 dark:text-gray-600 select-none">
                        16
                      </span>
                      <span className="text-[#FF6B35] dark:text-[#FF6B35] font-bold">{`}`}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-2 h-5 bg-gradient-to-b from-amber-500 to-pink-500 dark:from-emerald-500 dark:to-cyan-500 animate-pulse rounded" />
                    <span className="text-xs text-gray-500 dark:text-gray-500 font-mono">
                      ready
                    </span>
                  </div>
                </div>
              </div>

              {/* Top-right badge: DSA */}
              <motion.div
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2 card-shadow border border-amber-200/30 dark:border-emerald-500/10 bg-white/60 dark:bg-dark-card/60 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-amber-600 dark:text-emerald-400" />
                  <span className="text-lg font-bold text-amber-700 dark:text-emerald-300">
                    250+
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    DSA Solved
                  </span>
                </div>
              </motion.div>

              {/* Bottom-left badge: Internship */}
              <motion.div
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-2 card-shadow border border-pink-200/30 dark:border-cyan-500/10 bg-white/60 dark:bg-dark-card/60 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-pink-500 dark:text-cyan-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    Full Stack Intern
                  </span>
                </div>
                <div className="mt-0.5 flex items-center gap-1">
                  <span className="text-sm font-bold text-pink-600 dark:text-cyan-300">
                    @ InternMo
                  </span>
                </div>
              </motion.div>

              {/* New: Top-left small badge: projects count */}
              <motion.div
                className="absolute top-1/3 -left-6 hidden lg:flex glass rounded-2xl px-3 py-2 card-shadow border border-amber-200/30 dark:border-emerald-500/10 bg-white/60 dark:bg-dark-card/60 backdrop-blur-sm items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                <Rocket className="w-4 h-4 text-amber-600 dark:text-emerald-400" />
                <span className="text-sm font-bold text-amber-700 dark:text-emerald-300">
                  3
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Live Projects
                </span>
              </motion.div>

              {/* New: Bottom-right small badge: awards */}
              <motion.div
                className="absolute top-2/3 -right-6 hidden lg:flex glass rounded-2xl px-3 py-2 card-shadow border border-pink-200/30 dark:border-cyan-500/10 bg-white/60 dark:bg-dark-card/60 backdrop-blur-sm items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <Award className="w-4 h-4 text-pink-500 dark:text-cyan-400" />
                <span className="text-sm font-bold text-pink-600 dark:text-cyan-300">
                  Full Stack
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Certified
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
