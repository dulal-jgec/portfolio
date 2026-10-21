import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  GraduationCap,
  Award,
  Users,
  Code,
  Terminal,
  Database,
  Server,
  Layout,
  Shield,
  Brain,
} from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import FloatingParticles from "../common/FloatingParticles";

// 1. ISOMETRIC 3D STAT CARD (NOW WITH INFINITE FLOATING)
const StatCard3D = ({ icon: Icon, value, label, color }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  // Base isometric angle + mouse tilt
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Random delay and duration for infinite floating
  const floatDelay = Math.random() * 2;
  const floatDuration = 3 + Math.random() * 2;

  return (
    <motion.div
      // Continuous Floating Animation
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: floatDelay,
      }}
      className="w-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative p-6 rounded-2xl bg-white/80 dark:bg-[#0d1117]/90 backdrop-blur-xl border-b-8 border-r-8 border-pink-200 dark:border-[#161b22] shadow-2xl flex flex-col items-center justify-center cursor-crosshair group transition-all duration-200"
      >
        {/* Glowing inner light */}
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-emerald-500/10 dark:from-emerald-500/20 dark:to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* 3D Pop elements */}
        <div
          style={{ transform: "translateZ(40px)" }}
          className="flex flex-col items-center gap-3 relative z-10"
        >
          <div
            className={`p-4 rounded-xl bg-white dark:bg-[#161b22] shadow-[0_10px_20px_rgba(0,0,0,0.1)] ${color}`}
          >
            <Icon className="w-8 h-8" />
          </div>
          <div className="text-center">
            <p className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white drop-shadow-md">
              {value}
            </p>
            <p className="text-[10px] md:text-xs font-bold text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider">
              {label}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// 2. 3D GLASS SPHERE SKILL
const SkillSphere = ({ name, icon: Icon, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -10, rotateZ: 5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="flex flex-col items-center gap-2 group cursor-pointer"
    >
      {/* 3D Sphere Container */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-[inset_0_-10px_20px_rgba(0,0,0,0.1),_0_15px_25px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_-10px_20px_rgba(0,0,0,0.5),_0_15px_25px_rgba(0,0,0,0.5)] bg-white dark:bg-[#161b22] overflow-hidden">
        {/* Glass Reflection Highlight */}
        <div className="absolute top-2 left-3 w-6 h-3 bg-white/80 dark:bg-white/30 rounded-full blur-[2px] transform -rotate-45" />

        {/* Color Glow inside */}
        <div
          className={`absolute inset-0 opacity-20 bg-gradient-to-b ${color.replace("text-", "from-")} to-transparent`}
        />

        <Icon
          className={`w-8 h-8 md:w-10 md:h-10 ${color} relative z-10 drop-shadow-md`}
        />
      </div>
      <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
        {name}
      </span>
    </motion.div>
  );
};

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("section-enter");
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Updated Stats: Algorithmic Problem Solving
  const stats = [
    {
      icon: Brain,
      value: "Algorithmic",
      label: "Problem Solving",
      color: "text-pink-600 dark:text-emerald-400",
    },
    {
      icon: Award,
      value: "5th",
      label: "CSS Battle",
      color: "text-amber-500 dark:text-amber-400",
    },
    {
      icon: Users,
      value: "Active",
      label: "Coders Club",
      color: "text-blue-500 dark:text-cyan-400",
    },
    {
      icon: GraduationCap,
      value: "8.0",
      label: "B.Tech CGPA",
      color: "text-purple-600 dark:text-purple-400",
    },
  ];

  const technologies = [
    { name: "Java", icon: Terminal, color: "text-orange-500" },
    { name: "Spring Boot", icon: Server, color: "text-green-500" },
    { name: "React", icon: Layout, color: "text-blue-500" },
    { name: "Node.js", icon: Code, color: "text-emerald-500" },
    { name: "MySQL", icon: Database, color: "text-cyan-500" },
    { name: "Security", icon: Shield, color: "text-purple-500" },
  ];

  // Animation for the initial fly-in effect
  const statCardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8, rotateZ: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateZ: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 relative overflow-hidden night-sky opacity-0"
    >
      {/* 🌟 BACKGROUND: STARS & AURORA */}
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

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#ffe4ef_0%,_#ffd6e8_35%,_#fbcfe8_70%,_#f9a8d4_100%)] dark:hidden" />

      {/* GLOWING ORBS */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-20 right-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="glow-ring w-96 h-96 top-1/4 left-1/4"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="glow-ring w-72 h-72 bottom-1/4 right-1/4"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="About Me"
          title="Passionate Developer"
          className="text-gray-900 dark:text-white"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text & 3D Glass Spheres */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I'm{" "}
              <span className="font-bold text-pink-600 dark:text-emerald-400">
                SK Dulal Islam
              </span>
              , a final-year B.Tech IT student at JGEC. I build secure,
              scalable, and user-focused web applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Through hands-on projects and my internship, I've developed strong
              experience in full-stack development, clean architecture, and
              writing maintainable code.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Beyond development, I actively practice Data Structures and
              Algorithms to continuously strengthen my real-world
              problem-solving abilities.
            </p>

            {/* 3D Glass Spheres Tech Stack */}
            <div className="pt-6">
              <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-6 perspective-1000">
                {technologies.map((tech, index) => (
                  <SkillSphere key={index} {...tech} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Isometric 3D Stats with INITIAL FLY-IN */}
          <div className="grid grid-cols-2 gap-6 perspective-1000 py-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={statCardVariants}
              >
                <StatCard3D {...stat} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="flex justify-center mb-8">
            <div className="relative inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/80 dark:bg-dark-card/80 backdrop-blur-xl border border-pink-300/60 dark:border-emerald-500/20 shadow-2xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400/10 via-transparent to-pink-300/10 dark:from-emerald-500/10 dark:to-cyan-500/10" />
              <div className="relative p-2.5 rounded-full bg-pink-100 dark:bg-emerald-500/10">
                <GraduationCap className="w-6 h-6 text-pink-600 dark:text-emerald-400" />
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Education
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Academic Journey
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-pink-300/50 dark:border-emerald-500/20 bg-white/40 dark:bg-dark-card/40 backdrop-blur-xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-400/10 via-transparent to-pink-300/10 dark:from-emerald-500/10 dark:to-cyan-500/10 pointer-events-none" />
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* B.Tech Card */}
                <div className="rounded-3xl bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm p-6 md:p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 border border-pink-200/50 dark:border-emerald-500/20 relative overflow-hidden">
                  <div className="relative z-10">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 dark:bg-emerald-500/10 text-pink-600 dark:text-emerald-400 text-xs font-semibold w-fit mb-3">
                      🎓 Degree
                    </span>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-pink-100 dark:bg-emerald-500/10 rounded-full flex-shrink-0">
                          <GraduationCap className="w-5 h-5 text-pink-600 dark:text-emerald-400" />
                        </div>
                        <h4 className="text-lg font-bold text-pink-700 dark:text-emerald-400">
                          B.Tech in Information Technology
                        </h4>
                      </div>
                      <div className="ml-12 space-y-0.5">
                        <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
                          Jalpaiguri Government Engineering College
                        </p>
                        <p className="text-sm text-pink-600 dark:text-emerald-400 font-medium">
                          2023 – 2027 · CGPA: 8.0
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Jalpaiguri, West Bengal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* School Card */}
                <div className="rounded-3xl bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm p-6 md:p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 border border-pink-200/50 dark:border-emerald-500/20 relative overflow-hidden">
                  <div className="relative z-10">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 dark:bg-emerald-500/10 text-pink-600 dark:text-emerald-400 text-xs font-semibold w-fit mb-3">
                      🏫 School
                    </span>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-pink-100 dark:bg-emerald-500/10 rounded-full flex-shrink-0">
                          <GraduationCap className="w-5 h-5 text-pink-600 dark:text-emerald-400" />
                        </div>
                        <h4 className="text-lg font-bold text-pink-700 dark:text-emerald-400">
                          Higher Secondary (WBCHSE)
                        </h4>
                      </div>
                      <div className="ml-12 space-y-0.5">
                        <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
                          Mohishageria A M A High Madrasah
                        </p>
                        <p className="text-sm text-pink-600 dark:text-emerald-400 font-medium">
                          2020 – 2022 · Percentage: 90%
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Keshpur, West Bengal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
