import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiSpringboot,
  SiNodedotjs,
  SiHibernate,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiNginx,
  SiGithubactions,
  SiPostman,
  SiVercel,
  SiJunit5,
} from "react-icons/si";
import {
  FaJava,
  FaDatabase,
  FaServer,
  FaCode,
  FaShieldAlt,
  FaCubes,
} from "react-icons/fa";
import { Cpu } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import FloatingParticles from "../common/FloatingParticles";

const SkillCard3D = ({ category, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
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

  const floatDelay = index * 0.2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      animate={{ y: [0, -10, 0] }}
      style={{ animationDelay: `${floatDelay}s` }}
      className="w-full h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full p-6 md:p-8 rounded-3xl bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-xl border border-pink-200/50 dark:border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)] group cursor-crosshair"
      >
        <div
          className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${category.glowColor} pointer-events-none`}
        />

        <div
          style={{ transform: "translateZ(30px)" }}
          className="relative z-10 flex items-center gap-4 mb-6"
        >
          <div
            className={`p-3 rounded-2xl bg-gradient-to-br ${category.iconBg} shadow-lg text-white`}
          >
            <category.icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">
            {category.title}
          </h3>
        </div>

        <div
          className="relative z-10 flex flex-wrap gap-2"
          style={{ transform: "translateZ(20px)" }}
        >
          {category.skills.map((skill, idx) => (
            <span
              key={idx}
              className={`px-3 py-1.5 rounded-xl text-xs md:text-sm font-semibold border ${category.tagBg} ${category.tagText} ${category.tagBorder} shadow-sm`}
            >
              {skill}
            </span>
          ))}
        </div>

        <div
          className="absolute bottom-4 right-4 opacity-20 dark:opacity-10 pointer-events-none"
          style={{ transform: "translateZ(10px)" }}
        >
          <category.icon className="w-20 h-20 text-gray-900 dark:text-white" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Backend & Architecture",
      icon: FaServer,
      colSpan: "md:col-span-2 lg:col-span-2",
      glowColor: "from-emerald-500/10 to-transparent",
      iconBg: "from-emerald-400 to-green-600",
      tagBg: "bg-emerald-50 dark:bg-emerald-950/40",
      tagText: "text-emerald-700 dark:text-emerald-300",
      tagBorder: "border-emerald-200 dark:border-emerald-800/50",
      skills: [
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "Hibernate",
        "REST APIs",
        "JWT",
        "RBAC",
        "Swagger",
        "JUnit 5",
        "Node.js",
      ],
    },
    {
      title: "Languages & Core CS",
      icon: FaJava,
      colSpan: "md:col-span-1 lg:col-span-1",
      glowColor: "from-orange-500/10 to-transparent",
      iconBg: "from-orange-400 to-amber-600",
      tagBg: "bg-orange-50 dark:bg-orange-950/40",
      tagText: "text-orange-700 dark:text-orange-300",
      tagBorder: "border-orange-200 dark:border-orange-800/50",
      skills: [
        "Java",
        "TypeScript",
        "JavaScript",
        "SQL",
        "C++",
        "DSA",
        "OOP",
        "DBMS",
      ],
    },
    {
      title: "Databases & Caching",
      icon: FaDatabase,
      colSpan: "md:col-span-1 lg:col-span-1",
      glowColor: "from-blue-500/10 to-transparent",
      iconBg: "from-blue-400 to-cyan-600",
      tagBg: "bg-blue-50 dark:bg-blue-950/40",
      tagText: "text-blue-700 dark:text-blue-300",
      tagBorder: "border-blue-200 dark:border-blue-800/50",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Flyway",
        "DB Indexing",
      ],
    },
    {
      title: "System Concepts",
      icon: FaCubes,
      colSpan: "md:col-span-1 lg:col-span-1",
      glowColor: "from-pink-500/10 to-transparent",
      iconBg: "from-pink-400 to-rose-600",
      tagBg: "bg-pink-50 dark:bg-pink-950/40",
      tagText: "text-pink-700 dark:text-pink-300",
      tagBorder: "border-pink-200 dark:border-pink-800/50",
      skills: [
        "Multi-Tenancy",
        "Transactions",
        "Idempotency",
        "Outbox Pattern",
        "Caching",
        "Rate Limiting",
      ],
    },
    {
      title: "Frontend",
      icon: SiReact,
      colSpan: "md:col-span-1 lg:col-span-1",
      glowColor: "from-cyan-500/10 to-transparent",
      iconBg: "from-cyan-400 to-teal-600",
      tagBg: "bg-cyan-50 dark:bg-cyan-950/40",
      tagText: "text-cyan-700 dark:text-cyan-300",
      tagBorder: "border-cyan-200 dark:border-cyan-800/50",
      skills: [
        "Next.js",
        "React.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "DevOps & Tools",
      icon: SiDocker,
      colSpan: "md:col-span-2 lg:col-span-2",
      glowColor: "from-purple-500/10 to-transparent",
      iconBg: "from-purple-400 to-indigo-600",
      tagBg: "bg-purple-50 dark:bg-purple-950/40",
      tagText: "text-purple-700 dark:text-purple-300",
      tagBorder: "border-purple-200 dark:border-purple-800/50",
      skills: [
        "Docker",
        "Docker Compose",
        "Nginx",
        "GitHub Actions",
        "Maven",
        "Git",
        "Postman",
        "Render",
        "Vercel",
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 relative overflow-hidden night-sky opacity-0"
    >
      <div className="stars" />
      <div className="hidden dark:block">
        <div className="shooting-star" />
        <div className="shooting-star" />
        <div className="aurora-norway" />
        <div className="aurora-norway" />
        <div className="aurora-norway" />
      </div>
      <FloatingParticles />

      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-amber-50/50 to-pink-100/50 dark:hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="glow-ring w-96 h-96 top-1/4 left-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="My Arsenal"
          title="Technical Skills"
          className="text-gray-900 dark:text-white"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000 mt-16">
          {skillCategories.map((category, index) => (
            <div key={index} className={category.colSpan}>
              <SkillCard3D category={category} index={index} />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-xl border border-amber-200 dark:border-emerald-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <Cpu className="w-6 h-6 text-amber-500 dark:text-emerald-400 animate-pulse" />
            <div>
              <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                Currently Exploring
              </p>
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                System Design (HLD / LLD)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
