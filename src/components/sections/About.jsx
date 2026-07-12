import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Users, Code } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Card from "../ui/Card";
import FloatingParticles from "../common/FloatingParticles";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-enter");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    {
      icon: Code,
      value: "200+",
      label: "DSA Problems Solved",
      color: "text-pink-600 dark:text-pink-400",
    },
    {
      icon: Award,
      value: "5th",
      label: "CSS Battle Sristi 2025",
      color: "text-pink-500 dark:text-pink-400",
    },
    {
      icon: Users,
      value: "Active",
      label: "Coders Club Member",
      color: "text-pink-600 dark:text-pink-400",
    },
    {
      icon: GraduationCap,
      value: "8.0",
      label: "B.Tech CGPA",
      color: "text-pink-500 dark:text-pink-400",
    },
  ];

  const technologies = [
    {
      name: "Java",
      color: "text-orange-600 dark:text-orange-400",
      bg: "bg-orange-50 dark:bg-orange-950/30",
      border: "border-orange-200 dark:border-orange-800/50",
    },
    {
      name: "Spring Boot",
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-50 dark:bg-green-950/30",
      border: "border-green-200 dark:border-green-800/50",
    },
    {
      name: "React",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-200 dark:border-blue-800/50",
    },
    {
      name: "Node.js",
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-50 dark:bg-green-950/30",
      border: "border-green-200 dark:border-green-800/50",
    },
    {
      name: "MySQL",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-200 dark:border-blue-800/50",
    },
    {
      name: "Spring Security",
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-950/30",
      border: "border-purple-200 dark:border-purple-800/50",
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
      id="about"
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

      {/* Norway Style Aurora - 4 Layers with Random Movement */}
      <div className="hidden dark:block">
        <div className="aurora-norway" />
        <div className="aurora-norway" />
        <div className="aurora-norway" />
        <div className="aurora-norway" />
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Light Mode Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#ffe4ef_0%,_#ffd6e8_35%,_#fbcfe8_70%,_#f9a8d4_100%)] dark:hidden" />

      {/* Dark Mode Glowing Orbs */}
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

        {/* Glow Rings */}
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

      {/* Subtle decorative elements - Light Mode */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/30 rounded-full blur-3xl dark:hidden" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl dark:hidden" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="About Me"
          title="Passionate Developer"
          className="text-gray-900 dark:text-white"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            <motion.div variants={itemVariants}>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                I am a final-year B.Tech student in Information Technology at
                Jalpaiguri Government Engineering College (JGEC) with a strong
                interest in software engineering and full-stack web development.
                I enjoy building applications that solve real-world problems and
                continuously improving my technical and problem-solving skills.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Through hands-on projects, I have gained practical experience in
                designing and developing complete web applications while
                learning the importance of clean architecture, maintainable
                code, and user-focused development. I believe every project is
                an opportunity to learn something new and become a better
                developer.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Beyond development, I actively practice Data Structures and
                Algorithms to strengthen my problem-solving abilities and deepen
                my understanding of core computer science concepts. I am always
                eager to learn new technologies, collaborate with others, and
                contribute to building reliable software.
              </p>
            </motion.div>

            {/* Technology Tags */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`inline-flex items-center px-6 py-3.5 ${tech.bg} ${tech.border} border-2 rounded-xl text-lg font-semibold ${tech.color} shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105`}
                >
                  {tech.name}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-6 text-center bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm border border-pink-200/50 dark:border-green-500/10 shadow-lg hover:shadow-xl dark:shadow-dark-lg transition-all duration-300">
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-3 bg-pink-100/50 dark:bg-green-500/10 rounded-full">
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Section - No gap between text and education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-0"
        >
          {/* Premium Header */}
          <div className="flex justify-center mb-8">
            <div
              className="relative inline-flex items-center gap-4 px-8 py-4 rounded-2xl
                bg-white/80 dark:bg-dark-card/80
                backdrop-blur-xl
                border border-pink-300/60 dark:border-green-500/20
                shadow-xl"
            >
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r
                  from-pink-400/10 via-transparent to-pink-300/10
                  dark:from-green-500/10 dark:to-cyan-500/10"
              />

              <div
                className="relative p-2.5 rounded-full
                  bg-pink-100 dark:bg-green-500/10"
              >
                <GraduationCap className="w-6 h-6 text-pink-600 dark:text-green-400" />
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

          {/* Main Education Container with Glass Effect */}
          <div
            className="
              rounded-3xl
              border
              border-pink-300/50
              dark:border-green-500/20
              bg-white/40
              dark:bg-dark-card/40
              backdrop-blur-xl
              p-6 md:p-8
              shadow-2xl
              relative
              overflow-hidden
            "
          >
            {/* Gradient Border Effect */}
            <div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br
                from-pink-400/10 via-transparent to-pink-300/10
                dark:from-green-500/10 dark:to-cyan-500/10
                pointer-events-none"
            />

            <div className="relative z-10">
              {/* Timeline Line - Desktop only */}
              <div
                className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2
                  w-[2px] h-[calc(100%-6rem)]
                  bg-gradient-to-b from-pink-400 via-pink-300 to-pink-200
                  dark:from-green-400 dark:via-cyan-400 dark:to-cyan-300
                  opacity-40"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Education Card 1 - B.Tech */}
                <div
                  className="
                    rounded-3xl
                    bg-white/90 dark:bg-dark-card/90
                    backdrop-blur-sm
                    p-6 md:p-8
                    shadow-lg
                    hover:-translate-y-2
                    hover:shadow-2xl
                    transition-all duration-500
                    border
                    border-pink-200/50 dark:border-green-500/20
                    relative
                    overflow-hidden
                  "
                >
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br
                      from-pink-400/5 via-transparent to-pink-300/5
                      dark:from-green-500/5 dark:to-cyan-500/5
                      pointer-events-none"
                  />

                  <div className="relative z-10">
                    {/* Badge */}
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-3
                        py-1
                        rounded-full
                        bg-pink-100 dark:bg-green-500/10
                        text-pink-600 dark:text-green-400
                        text-xs
                        font-semibold
                        w-fit
                        mb-3
                      "
                    >
                      🎓 Degree
                    </span>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-pink-100 dark:bg-green-500/10 rounded-full flex-shrink-0">
                          <GraduationCap className="w-5 h-5 text-pink-600 dark:text-green-400" />
                        </div>
                        <h4 className="text-lg font-bold text-pink-700 dark:text-green-400">
                          B.Tech in Information Technology
                        </h4>
                      </div>
                      <div className="ml-12 space-y-0.5">
                        <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
                          Jalpaiguri Government Engineering College
                        </p>
                        <p className="text-sm text-pink-600 dark:text-green-400 font-medium">
                          2023 – 2027 · CGPA: 8.0
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Jalpaiguri, West Bengal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education Card 2 - Higher Secondary */}
                <div
                  className="
                    rounded-3xl
                    bg-white/90 dark:bg-dark-card/90
                    backdrop-blur-sm
                    p-6 md:p-8
                    shadow-lg
                    hover:-translate-y-2
                    hover:shadow-2xl
                    transition-all duration-500
                    border
                    border-pink-200/50 dark:border-green-500/20
                    relative
                    overflow-hidden
                  "
                >
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br
                      from-pink-400/5 via-transparent to-pink-300/5
                      dark:from-green-500/5 dark:to-cyan-500/5
                      pointer-events-none"
                  />

                  <div className="relative z-10">
                    {/* Badge */}
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-3
                        py-1
                        rounded-full
                        bg-pink-100 dark:bg-green-500/10
                        text-pink-600 dark:text-green-400
                        text-xs
                        font-semibold
                        w-fit
                        mb-3
                      "
                    >
                      🏫 School
                    </span>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-pink-100 dark:bg-green-500/10 rounded-full flex-shrink-0">
                          <GraduationCap className="w-5 h-5 text-pink-600 dark:text-green-400" />
                        </div>
                        <h4 className="text-lg font-bold text-pink-700 dark:text-green-400">
                          Higher Secondary (WBCHSE)
                        </h4>
                      </div>
                      <div className="ml-12 space-y-0.5">
                        <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
                          Mohishageria A M A High Madrasah
                        </p>
                        <p className="text-sm text-pink-600 dark:text-green-400 font-medium">
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
