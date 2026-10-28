import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  // 3D Tilt Logic
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
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
      y: [-8, 8, -8],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden night-sky"
    >
      {/* 🌟 ENHANCED BACKGROUND EFFECTS */}
      <div className="stars" />

      {/* More Shooting Stars */}
      <div className="hidden dark:block">
        <div className="shooting-star" />
        <div className="shooting-star" />
        <div className="shooting-star" />
        <div className="shooting-star" />
      </div>

      {/* More Aurora Borealis Layers */}
      <div className="hidden dark:block">
        <div className="aurora-norway" />
        <div className="aurora-norway" />
        <div className="aurora-norway" />
        <div className="aurora-norway" />
        <div className="aurora-norway" />
      </div>

      <FloatingParticles />

      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-pink-50 to-amber-100/50 dark:hidden" />
      <div className="absolute inset-0 hidden dark:block bg-gradient-to-br from-[#0a0a1a] via-[#0d0d1f] to-[#0a0a1a]" />

      {/* Extra Glowing Orbs & Rings for 3D Depth in Dark Mode */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] animate-float" />
        <div
          className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-pink-500/5 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: "1s" }}
        />

        <div
          className="glow-ring w-[600px] h-[600px] top-1/4 left-1/4"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="glow-ring w-[450px] h-[450px] bottom-1/4 right-1/4"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="glow-ring w-[500px] h-[500px] top-1/3 right-1/3"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="text-gray-900 dark:text-white block">
                  SK DULAL
                </span>
                <span className="bg-gradient-to-r from-amber-600 via-pink-600 to-amber-700 dark:from-emerald-400 dark:via-cyan-400 dark:to-green-400 bg-clip-text text-transparent">
                  ISLAM
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                Java Backend | Full-Stack Developer
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl leading-relaxed">
                Backend-focused Java developer building secure, multi-tenant
                REST APIs with Spring Boot, Spring Security and PostgreSQL.
                Currently interning at{" "}
                <span className="font-semibold text-amber-600 dark:text-emerald-400">
                  Internmo
                </span>
                .
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                className="group"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
                <span className="text-sm">West Bengal, India</span>
              </div>
              <a
                href="mailto:skdulalislam1@gmail.com"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-5 h-5 text-amber-600 dark:text-emerald-400" />
                <span className="text-sm">skdulalislam1@gmail.com</span>
              </a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SocialLinks />
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive Card */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center items-center perspective-1000 mt-12 lg:mt-0"
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full max-w-lg cursor-crosshair"
            >
              {/* Main Glass Card */}
              <div className="glass rounded-3xl p-8 card-shadow relative overflow-hidden border border-white/40 dark:border-white/10 bg-white/60 dark:bg-dark-card/60 backdrop-blur-xl">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-200/20 dark:bg-emerald-500/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-200/20 dark:bg-green-500/5 rounded-full blur-3xl" />

                <div className="relative z-10">
                  {/* Profile Image with 3D Pop */}
                  <div className="flex justify-center mb-6">
                    <div
                      className="relative"
                      style={{ transform: "translateZ(40px)" }}
                    >
                      <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-emerald-400/30 dark:border-emerald-400/40 card-shadow">
                        <img
                          src="/images/profile.jpg"
                          alt="SK Dulal Islam"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#00C853] rounded-full flex items-center justify-center border-4 border-white dark:border-dark-bg shadow-lg">
                        <Code className="w-5 h-5 text-white font-bold" />
                      </div>
                    </div>
                  </div>

                  {/* Code Block matching screenshot */}
                  <div className="space-y-2.5 font-mono text-sm md:text-base">
                    <div className="flex items-start gap-3">
                      <span className="text-gray-400 dark:text-gray-600 select-none w-6">
                        1
                      </span>
                      <span className="text-[#FF6B9D] dark:text-[#FF6B9D] font-bold">
                        const
                      </span>
                      <span className="text-[#4A90D9] dark:text-[#6AB0F0] font-bold">
                        developer
                      </span>
                      <span className="text-gray-400 dark:text-gray-500">
                        =
                      </span>
                      <span className="text-[#FF6B35] dark:text-[#FF6B35] font-bold">{`{`}</span>
                    </div>

                    <div className="flex items-start gap-3 pl-8">
                      <span className="text-gray-400 dark:text-gray-600 select-none w-6">
                        2
                      </span>
                      <span className="text-[#4A90D9] dark:text-[#6AB0F0] font-bold">
                        name
                      </span>
                      <span className="text-gray-400 dark:text-gray-500">
                        :
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "SK Dulal Islam"
                      </span>
                      <span className="text-gray-400 dark:text-gray-500">
                        ,
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-8">
                      <span className="text-gray-400 dark:text-gray-600 select-none w-6">
                        3
                      </span>
                      <span className="text-[#4A90D9] dark:text-[#6AB0F0] font-bold">
                        role
                      </span>
                      <span className="text-gray-400 dark:text-gray-500">
                        :
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "Java Backend Developer"
                      </span>
                      <span className="text-gray-400 dark:text-gray-500">
                        ,
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-8">
                      <span className="text-gray-400 dark:text-gray-600 select-none w-6">
                        4
                      </span>
                      <span className="text-[#4A90D9] dark:text-[#6AB0F0] font-bold">
                        company
                      </span>
                      <span className="text-gray-400 dark:text-gray-500">
                        :
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "Internmo"
                      </span>
                      <span className="text-gray-400 dark:text-gray-500">
                        ,
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-8">
                      <span className="text-gray-400 dark:text-gray-600 select-none w-6">
                        5
                      </span>
                      <span className="text-[#4A90D9] dark:text-[#6AB0F0] font-bold">
                        skills
                      </span>
                      <span className="text-gray-400 dark:text-gray-500">
                        :
                      </span>
                      <span className="text-[#FFD700] dark:text-[#FFD700] font-bold">
                        [
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-16">
                      <span className="text-gray-400 dark:text-gray-600 select-none w-6">
                        6
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "Java"
                      </span>
                      <span className="text-gray-400 dark:text-gray-500">
                        ,
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-16">
                      <span className="text-gray-400 dark:text-gray-600 select-none w-6">
                        7
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "Spring Boot"
                      </span>
                      <span className="text-gray-400 dark:text-gray-500">
                        ,
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-16">
                      <span className="text-gray-400 dark:text-gray-600 select-none w-6">
                        8
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "PostgreSQL"
                      </span>
                      <span className="text-gray-400 dark:text-gray-500">
                        ,
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-16">
                      <span className="text-gray-400 dark:text-gray-600 select-none w-6">
                        9
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "Next.js"
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-8">
                      <span className="text-gray-400 dark:text-gray-600 select-none w-6">
                        10
                      </span>
                      <span className="text-[#FFD700] dark:text-[#FFD700] font-bold">
                        ]
                      </span>
                      <span className="text-gray-400 dark:text-gray-500">
                        ,
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-8">
                      <span className="text-gray-400 dark:text-gray-600 select-none w-6">
                        11
                      </span>
                      <span className="text-[#4A90D9] dark:text-[#6AB0F0] font-bold">
                        projects
                      </span>
                      <span className="text-gray-400 dark:text-gray-500">
                        :
                      </span>
                      <span className="text-[#FFD700] dark:text-[#FFD700] font-bold">
                        [
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-16">
                      <span className="text-gray-400 dark:text-gray-600 select-none w-6">
                        12
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "MedCore"
                      </span>
                      <span className="text-gray-400 dark:text-gray-500">
                        ,
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-16">
                      <span className="text-gray-400 dark:text-gray-600 select-none w-6">
                        13
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "ShopLy"
                      </span>
                      <span className="text-gray-400 dark:text-gray-500">
                        ,
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-16">
                      <span className="text-gray-400 dark:text-gray-600 select-none w-6">
                        14
                      </span>
                      <span className="text-[#00C853] dark:text-[#4AE08A] font-bold">
                        "EduZen"
                      </span>
                    </div>

                    <div className="flex items-start gap-3 pl-8">
                      <span className="text-gray-400 dark:text-gray-600 select-none w-6">
                        15
                      </span>
                      <span className="text-[#FFD700] dark:text-[#FFD700] font-bold">
                        ]
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-gray-400 dark:text-gray-600 select-none w-6">
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

              {/* Floating Badge: Top Right */}
              <motion.div
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2 card-shadow border border-amber-200/30 dark:border-emerald-500/10 bg-white/80 dark:bg-dark-card/80 backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                style={{ transform: "translateZ(60px)" }}
              >
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-amber-600 dark:text-emerald-400" />
                  <span className="text-lg font-bold text-amber-700 dark:text-emerald-300">
                    4
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    Projects
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge: Left Middle */}
              <motion.div
                className="absolute top-1/3 -left-6 glass rounded-2xl px-4 py-2 card-shadow border border-pink-200/30 dark:border-cyan-500/10 bg-white/80 dark:bg-dark-card/80 backdrop-blur-md hidden lg:flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                style={{ transform: "translateZ(50px)" }}
              >
                <Rocket className="w-4 h-4 text-pink-500 dark:text-cyan-400" />
                <span className="text-sm font-bold text-pink-600 dark:text-cyan-300">
                  3 Live
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Projects
                </span>
              </motion.div>

              {/* Floating Badge: Right Middle */}
              <motion.div
                className="absolute top-2/3 -right-6 glass rounded-2xl px-4 py-2 card-shadow border border-amber-200/30 dark:border-emerald-500/10 bg-white/80 dark:bg-dark-card/80 backdrop-blur-md hidden lg:flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                style={{ transform: "translateZ(70px)" }}
              >
                <Award className="w-4 h-4 text-amber-500 dark:text-emerald-400" />
                <span className="text-sm font-bold text-amber-600 dark:text-emerald-300">
                  Backend
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Focused
                </span>
              </motion.div>

              {/* Floating Badge: Bottom Left */}
              <motion.div
                className="absolute -bottom-6 -left-4 glass rounded-2xl px-4 py-2 card-shadow border border-emerald-200/30 dark:border-emerald-500/20 bg-white/80 dark:bg-dark-card/80 backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                style={{ transform: "translateZ(60px)" }}
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    Full Stack Intern
                  </span>
                </div>
                <div className="mt-0.5 flex items-center gap-1">
                  <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
                    @ Internmo
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
