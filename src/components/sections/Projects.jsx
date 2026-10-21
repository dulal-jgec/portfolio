import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  ExternalLink,
  ShoppingCart,
  GraduationCap,
  Link as LinkIcon,
  Activity,
} from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import FloatingParticles from "../common/FloatingParticles";

const ProjectCard3D = ({ project, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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

  const isFeatured = index === 0;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`relative rounded-3xl p-[1.5px] bg-gradient-to-br from-pink-300 via-pink-100 to-transparent dark:from-emerald-500/50 dark:via-cyan-500/20 dark:to-transparent shadow-2xl group ${
        isFeatured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <div
        className={`relative h-full rounded-3xl bg-white/95 dark:bg-[#0d1117]/95 backdrop-blur-xl overflow-hidden flex flex-col ${isFeatured ? "md:flex-row" : ""}`}
      >
        <div
          className={`relative overflow-hidden bg-gray-100 dark:bg-[#161b22] ${isFeatured ? "md:w-1/2 h-64 md:h-auto" : "h-56"}`}
          style={{ transform: "translateZ(30px)" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/600x400/0d1117/10b981?text=${project.title}`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div
            className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-br ${project.color} shadow-lg`}
          >
            <project.icon className="w-6 h-6 text-white" />
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
              {project.title}
            </h3>
            <p className="text-sm text-gray-200 font-medium">
              {project.subtitle}
            </p>
          </div>
        </div>

        <div
          className={`p-6 md:p-8 flex flex-col justify-between ${isFeatured ? "md:w-1/2" : "flex-1"}`}
          style={{ transform: "translateZ(20px)" }}
        >
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-semibold border border-gray-200 dark:border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-white/10">
            <Button
              variant="primary"
              size="sm"
              href={project.github}
              target="_blank"
              className="flex-1 bg-gray-900 hover:bg-black dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-semibold shadow-lg"
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
                className="flex-1 bg-gradient-to-r from-pink-500 to-amber-500 dark:from-cyan-500 dark:to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                disabled
                className="flex-1 opacity-50 cursor-not-allowed text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                No Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "MedCore HMS",
      subtitle: "Multi-Tenant Hospital Management System",
      description:
        "Engineered a secure, multi-tenant backend architecture with strict data isolation. Implemented JWT authentication with refresh token rotation, role-based access control for 7 user roles, and reliable invitation emails using the Outbox pattern with exponential backoff.",
      tech: [
        "Spring Boot",
        "PostgreSQL",
        "Next.js",
        "Redis",
        "Docker",
        "Flyway",
      ],
      github: "https://github.com/dulal-jgec/medcore-hms",
      live: "https://medcore-hms-eight.vercel.app/",
      image: "/images/medcore.jpg",
      icon: Activity,
      color: "from-blue-500 to-blue-600",
      isFeatured: true,
    },
    {
      id: 2,
      title: "ShopLy",
      subtitle: "Multi-Vendor E-Commerce Platform",
      description:
        "Built a comprehensive e-commerce platform with Customer, Seller, and Admin modules. Secured with JWT and Role-Based Access Control (RBAC). Integrated Razorpay for payments and Cloudinary for image uploads.",
      tech: ["Spring Boot", "React", "Redux Toolkit", "MySQL", "JWT"],
      github: "https://github.com/dulal-jgec/ecommerce-v2",
      live: "https://ecommerce-v2-orpin.vercel.app/",
      image: "/images/shoply.jpg",
      icon: ShoppingCart,
      color: "from-emerald-500 to-green-600",
    },
    {
      id: 3,
      title: "EduZen",
      subtitle: "Coaching Centre Management System",
      description:
        "Full-stack coaching management system with secure Admin and Student modules. Features JWT authentication, student registration, fee management, and an approval workflow documented via Swagger UI.",
      tech: ["Spring Boot", "React", "MySQL", "JWT", "Swagger"],
      github: "https://github.com/dulal-jgec/scholarsedge",
      live: "https://scholarsedge.vercel.app/",
      image: "/images/eduxen.jpg",
      icon: GraduationCap,
      color: "from-purple-500 to-fuchsia-600",
    },
    {
      id: 4,
      title: "URL Shortener",
      subtitle: "High-Performance Link Management",
      description:
        "Secure backend built with Java 21 and Spring Boot. Implements JWT and refresh tokens, ownership-based authorization, custom aliases, click tracking, and link expiry logic.",
      tech: ["Java 21", "Spring Boot", "Spring Security", "MySQL", "JWT"],
      github: "https://github.com/dulal-jgec/url-shortener",
      live: null,
      image: "/images/url-shortener.jpg",
      icon: LinkIcon,
      color: "from-orange-500 to-amber-600",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden night-sky">
      {/* 🌟 EXACT SAME BACKGROUND AS ABOUT PAGE */}
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
          subtitle="Portfolio"
          title="Featured Projects"
          className="text-gray-900 dark:text-white"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000 mt-16">
          {projectsData.map((project, index) => (
            <ProjectCard3D key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
