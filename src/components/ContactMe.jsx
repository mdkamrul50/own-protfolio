'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaEnvelope,
  FaUser,
  FaPaperPlane,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent 🚀');
  };

  return (
    <section
      id="Contact"
      className="relative py-28 px-6 bg-[#0a0d1c] text-white overflow-hidden scroll-mt-28"
    >
      {/* 🔥 Soft Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/15 blur-[140px] top-10 left-10" />
      <div className="absolute w-[400px] h-[400px] bg-blue-600/15 blur-[140px] bottom-10 right-10" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
      >
        Get In Touch
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        {/* 🔥 LEFT SIDE (ENHANCED) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold text-purple-300 mb-3">
              Let’s build something amazing
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I’m open to freelance, remote jobs, and collaboration. If you have
              an idea, let’s turn it into reality.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition">
              <FaEnvelope className="text-purple-400" />
              <span>kamrul.dev.web@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition">
              <FaPhoneAlt className="text-purple-400" />
              <span>+880 1772237629</span>
            </div>

            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition">
              <FaMapMarkerAlt className="text-purple-400" />
              <span>Bangladesh</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/mdkamrul50"
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-purple-500/20 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/md-kamrul-20a5a2271"
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-purple-500/20 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Availability Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm border border-green-500/20">
            Available for work
          </div>
        </motion.div>

        {/* 🔥 FORM */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ y: -6, scale: 1.01 }}
          className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 space-y-5 group overflow-hidden"
        >
          {/* ✨ Smooth Animated Gradient Border */}
          <div className="absolute inset-0 rounded-2xl p-[1px] opacity-0 group-hover:opacity-100 transition duration-500">
            <div className="w-full h-full rounded-2xl bg-gradient-to-r from-purple-950/80 via-blue-950/90 to-cyan-950/90 blur-[1px]" />
          </div>

          {/* Inner content wrapper (keeps form clean) */}
          <div className="relative z-10 space-y-5">
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-purple-400/70" />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full pl-10 py-3 bg-black/20 border border-white/10 rounded-lg outline-none
        focus:border-purple-400 focus:bg-black/30 transition-all duration-300
        focus:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-purple-400/70" />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full pl-10 py-3 bg-black/20 border border-white/10 rounded-lg outline-none
        focus:border-blue-400 focus:bg-black/30 transition-all duration-300
        focus:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message..."
              rows="5"
              className="w-full p-3 bg-black/20 border border-white/10 rounded-lg outline-none
      focus:border-purple-400 focus:bg-black/30 transition-all duration-300
      focus:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg
      bg-gradient-to-r from-purple-500 to-blue-500
      hover:from-purple-600 hover:to-blue-600
      transition-all duration-300 font-medium
      hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]
      active:scale-[0.98]"
            >
              Send Message <FaPaperPlane />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
