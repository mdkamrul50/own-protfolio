'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGlobe,
  FaServer,
  FaPaintBrush,
  FaLock,
  FaRocket,
  FaTools,
} from 'react-icons/fa';

const services = [
  {
    title: 'Full Stack Web Development',
    desc: 'MERN apps with auth, APIs & database.',
    icon: FaGlobe,
  },
  {
    title: 'REST API Development',
    desc: 'Secure scalable backend APIs.',
    icon: FaServer,
  },
  {
    title: 'Frontend Development',
    desc: 'Modern UI with React & Next.js.',
    icon: FaPaintBrush,
  },
  {
    title: 'Authentication Systems',
    desc: 'JWT / OAuth secure login systems.',
    icon: FaLock,
  },
  {
    title: 'Deployment',
    desc: 'Deploy on Vercel / Netlify / Cloud.',
    icon: FaRocket,
  },
  {
    title: 'UI Optimization',
    desc: 'Performance + UX improvements.',
    icon: FaTools,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-28 px-6 bg-[#0a0d1c] text-white overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/10 blur-[140px] top-10 -left-20" />
      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 blur-[140px] bottom-10 -right-20" />

      {/* Heading - Smaller & Left Aligned */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto mb-20 px-3"
      >
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 mb-6">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
          <span className="uppercase tracking-[3px] text-sm text-zinc-400">
            Services
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-left">
          What I Offer
        </h2>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -14, scale: 1.02 }}
              className="group relative"
            >
              {/* Main Card - Unique Corner Shape */}
              <div
                className="relative h-full bg-white/5 backdrop-blur-2xl border border-white/10 
                            rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg 
                            p-8 hover:border-purple-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Glow Border */}
                <div
                  className="absolute -inset-[1px] rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg 
                              bg-gradient-to-br from-purple-500 via-blue-500 to-purple-500 
                              opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700 -z-10"
                />

                {/* Icon Container */}
                <div className="mb-8 flex justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-white/10 group-hover:border-purple-400/50 transition-all duration-500 group-hover:rotate-6">
                    <Icon className="text-4xl text-purple-300 group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-[15px] leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:w-20 transition-all duration-500" />
              </div>

              {/* Extra Shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500 rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
