import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import FloatingParticles from "../common/FloatingParticles";

const Experience = () => {
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

  const experienceData = [
    {
      role: "Full Stack Developer Intern",
      company: "Internmo",
      location: "Remote",
      duration: "July 2026 – Oct 2026",
      project: "MedCore HMS - Multi-Tenant Hospital Management System",
      certificateLink: "/certificates/internmo-certificate.pdf",
      tech: [
        "Spring Boot",
        "PostgreSQL",
        "Next.js",
        "Spring Security",
        "Redis",
        "Docker",
      ],
      points: [
        "Built authentication with Spring Security and JWT (refresh token rotation) and role-based access control for 7 user roles.",
        "Implemented multi-tenant data isolation: every request resolves the current hospital and all queries are scoped to it.",
        "Designed reliable invitation emails with the Outbox pattern, retry with exponential backoff and jitter, and idempotency keys backed by a database unique constraint to stop duplicate requests.",
        "Used @Transactional with integration tests on a separate PostgreSQL database to verify rollback and concurrency.",
        "Used EXPLAIN ANALYZE, added indexes via Flyway migrations, and fixed N+1 queries with @EntityGraph.",
        "Added Redis caching with cache invalidation on updates, and API rate limiting to reduce database load.",
        "Owned the Billing module end to end (schema, services, REST APIs) with DTOs, validation, pagination and Swagger.",
        "Built the Next.js frontend; set up Docker Compose, Nginx and GitHub Actions CI/CD.",
      ],
    },
  ];

  // Framer motion variants for staggered bullet points
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 relative overflow-hidden night-sky opacity-0"
    >
      {/* 🌟 BACKGROUND EFFECTS */}
      <div className="stars" />
      <div className="hidden dark:block">
        <div className="shooting-star" />
        <div className="shooting-star" />
        <div className="aurora-norway" />
        <div className="aurora-norway" />
        <div className="aurora-norway" />
      </div>
      <FloatingParticles />

      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-amber-50/50 to-pink-100/50 dark:hidden" />
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="glow-ring w-96 h-96 top-1/4 left-1/4"
          style={{ animationDelay: "0s" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Career"
          title="Professional Experience"
          className="text-gray-900 dark:text-white"
        />

        <div className="mt-16 relative">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-pink-400 via-pink-300 to-transparent dark:from-emerald-400 dark:via-cyan-500 dark:to-transparent opacity-50" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative pl-20 md:pl-32"
            >
              {/* Glowing Timeline Node */}
              <div className="absolute left-[23px] md:left-[39px] top-8 w-5 h-5 rounded-full bg-white dark:bg-[#0d1117] border-4 border-pink-500 dark:border-emerald-400 shadow-[0_0_20px_rgba(236,72,153,0.6)] dark:shadow-[0_0_20px_rgba(16,185,129,0.6)] z-20">
                <div className="absolute inset-0 rounded-full bg-pink-500 dark:bg-emerald-400 animate-ping opacity-50" />
              </div>

              {/* Gradient Border Wrapper */}
              <div className="p-[1.5px] rounded-3xl bg-gradient-to-br from-pink-300 via-pink-100 to-transparent dark:from-emerald-500/50 dark:via-cyan-500/20 dark:to-transparent shadow-2xl">
                {/* Main Inner Card */}
                <div className="relative rounded-3xl bg-white/95 dark:bg-[#0d1117]/95 backdrop-blur-2xl p-6 md:p-10 overflow-hidden group">
                  {/* Subtle Inner Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Header: Role, Company, Dates */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8 relative z-10">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white flex items-center gap-3 mb-2">
                        <Briefcase className="w-7 h-7 text-pink-600 dark:text-emerald-400" />
                        {exp.role}
                      </h3>
                      <p className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-amber-500 dark:from-emerald-400 dark:to-cyan-400 mb-4">
                        @ {exp.company}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
                        <span className="flex items-center gap-1.5 bg-pink-50 dark:bg-white/5 px-3 py-1.5 rounded-xl border border-pink-100 dark:border-white/10">
                          <Calendar className="w-4 h-4 text-pink-500 dark:text-emerald-400" />{" "}
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1.5 bg-pink-50 dark:bg-white/5 px-3 py-1.5 rounded-xl border border-pink-100 dark:border-white/10">
                          <MapPin className="w-4 h-4 text-pink-500 dark:text-emerald-400" />{" "}
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Premium Certificate Button */}
                    <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-pink-500 dark:from-emerald-500 dark:to-cyan-500 text-white text-sm font-bold shadow-[0_10px_30px_rgba(236,72,153,0.3)] dark:shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_10px_40px_rgba(236,72,153,0.5)] hover:-translate-y-1 transition-all duration-300 group/btn"
                    >
                      <Award className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                      View Certificate
                      <ExternalLink className="w-4 h-4 ml-1 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
                    </a>
                  </div>

                  {/* Project Box */}
                  <div className="mb-8 p-5 rounded-2xl bg-gradient-to-br from-pink-50 to-white dark:from-white/5 dark:to-transparent border border-pink-100/50 dark:border-white/5 relative z-10">
                    <h4 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-pink-500 dark:text-emerald-400" />
                      {exp.project}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white dark:bg-[#161b22] text-gray-700 dark:text-gray-300 rounded-lg text-xs font-bold border border-gray-200 dark:border-white/10 shadow-sm hover:border-pink-300 dark:hover:border-emerald-500/50 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bullet Points with Stagger Animation */}
                  <motion.ul
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-4 relative z-10"
                  >
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        variants={itemVariants}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed group/item"
                      >
                        <CheckCircle2 className="w-5 h-5 text-pink-500 dark:text-emerald-400 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <span className="group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
