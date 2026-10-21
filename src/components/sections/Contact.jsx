import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import SectionTitle from "../common/SectionTitle";
import FloatingParticles from "../common/FloatingParticles";

// 3D Contact Info Card
const ContactInfoCard = ({ icon: Icon, label, value, link, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
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

  const content = (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 dark:bg-[#0d1117]/80 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-lg group">
      <div className="p-3 bg-gradient-to-br from-pink-500 to-amber-500 dark:from-emerald-500 dark:to-cyan-500 rounded-xl shadow-md text-white group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          {label}
        </p>
        <p className="text-sm md:text-base font-bold text-gray-900 dark:text-white mt-0.5">
          {value}
        </p>
      </div>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="cursor-pointer"
    >
      {link ? (
        <a
          href={link}
          style={{ transform: "translateZ(20px)", display: "block" }}
        >
          {content}
        </a>
      ) : (
        <div style={{ transform: "translateZ(20px)" }}>{content}</div>
      )}
    </motion.div>
  );
};

const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const serviceID = "service_8kdmydm";
      const templateID = "template_qgajwpm";
      const userID = "8LfgKC7uwuMH2rsjY";

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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative overflow-hidden night-sky opacity-0"
    >
      {/* 🌟 BACKGROUND EFFECTS (Same as About/Projects) */}
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
          subtitle="Get in Touch"
          title="Let's Connect"
          className="text-gray-900 dark:text-white"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-16">
          {/* Left Column: Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                Let's Build Something <br />
                <span className="bg-gradient-to-r from-pink-600 to-amber-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  Amazing Together.
                </span>
              </h3>
              <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
                I'm currently looking for internship or full-time opportunities
                where I can contribute my skills and grow as a developer. Feel
                free to reach out!
              </p>
            </div>

            <div className="space-y-4 perspective-1000">
              {contactInfo.map((info, index) => (
                <ContactInfoCard key={index} {...info} index={index} />
              ))}
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                Connect with me
              </h4>
              <div className="flex gap-4 perspective-1000">
                <motion.a
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                  href="https://github.com/dulal-jgec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl hover:border-pink-400 dark:hover:border-emerald-400 shadow-lg transition-colors"
                >
                  <FaGithub className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotateZ: -5 }}
                  href="https://linkedin.com/in/sk-dulal-islam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl hover:border-amber-400 dark:hover:border-cyan-400 shadow-lg transition-colors"
                >
                  <FaLinkedin className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Glass Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-pink-300 via-pink-100 to-transparent dark:from-emerald-500/50 dark:via-cyan-500/20 dark:to-transparent shadow-2xl"
          >
            <div className="relative p-6 md:p-10 rounded-3xl bg-white/95 dark:bg-[#0d1117]/95 backdrop-blur-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 dark:bg-emerald-500/10 rounded-full blur-3xl" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2"
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
                    className="w-full px-5 py-3.5 bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:border-pink-500 dark:focus:border-emerald-400 focus:ring-4 focus:ring-pink-500/10 dark:focus:ring-emerald-500/10 focus:outline-none transition-all duration-300 text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2"
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
                    className="w-full px-5 py-3.5 bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:border-pink-500 dark:focus:border-emerald-400 focus:ring-4 focus:ring-pink-500/10 dark:focus:ring-emerald-500/10 focus:outline-none transition-all duration-300 text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2"
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
                    className="w-full px-5 py-3.5 bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:border-pink-500 dark:focus:border-emerald-400 focus:ring-4 focus:ring-pink-500/10 dark:focus:ring-emerald-500/10 focus:outline-none transition-all duration-300 resize-none text-gray-900 dark:text-white"
                    placeholder="Tell me about your opportunity..."
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center font-medium bg-red-50 dark:bg-red-900/20 py-2 rounded-lg">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-amber-500 dark:from-emerald-500 dark:to-cyan-500 text-white font-bold text-lg shadow-[0_10px_30px_rgba(236,72,153,0.3)] dark:shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_10px_40px_rgba(236,72,153,0.5)] hover:-translate-y-1 transition-all duration-300 group/submit disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : isSubmitted ? (
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6" />
                      Message Sent!
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Send Message
                      <Send className="w-5 h-5 group-hover/submit:translate-x-1 group-hover/submit:-translate-y-1 transition-transform" />
                    </div>
                  )}
                </button>

                {isSubmitted && (
                  <p className="text-emerald-600 dark:text-emerald-400 text-sm text-center font-bold animate-pulse">
                    Thank you! I'll get back to you soon.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 relative p-[1.5px] rounded-3xl bg-gradient-to-r from-pink-300 to-amber-300 dark:from-emerald-500/50 dark:to-cyan-500/50 shadow-xl"
        >
          <div className="p-8 rounded-3xl bg-white/95 dark:bg-[#0d1117]/95 backdrop-blur-2xl text-center">
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Open for{" "}
              <span className="text-pink-600 dark:text-emerald-400">
                Internships
              </span>{" "}
              &{" "}
              <span className="text-amber-500 dark:text-cyan-400">
                Full-Time
              </span>{" "}
              Opportunities
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              I'm actively looking for opportunities where I can contribute,
              learn, and grow as a developer. Let's connect and discuss how I
              can add value to your team.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
