'use client';

import { motion } from 'framer-motion';
import { FaLayerGroup, FaRocket, FaCode, FaCalendarAlt } from 'react-icons/fa';
import { projects } from '../../../../data/project';
import React from 'react';


export default  function ProjectDetails({ params }) {
  const { id } = React.use(params);

  const project = projects.find((p) => p.id === Number(id));
  const projectImage = project?.image;

  const infoCards = [
    {
      icon: FaLayerGroup,
      label: 'Project Type',
      value: 'Full Stack App',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaRocket,
      label: 'Status',
      value: 'Completed',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: FaCalendarAlt,
      label: 'Year',
      value: project?.year,
      color: 'from-orange-500 to-yellow-500',
    },
  ];

  const features = [
    'Modern responsive UI design',
    'Authentication system',
    'REST API integration',
    'Optimized performance',
  ];

  const tech = project?.tech || [];

  return (
    <div className="min-h-screen bg-[#0a0d1c] text-white px-4 sm:px-6 py-14 relative overflow-hidden">
      {/* background glow */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-purple-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-500/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* BACK */}
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          href="/#project"
          className="text-sm text-zinc-400 hover:text-white mb-8 inline-block mt-12"
        >
          ← Back to Projects
        </motion.a>

        {/* IMAGE HERO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[220px] sm:h-[320px] md:h-[450px] rounded-3xl overflow-hidden mb-10 group"
        >
          <img
            src={projectImage}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1c] via-transparent to-transparent" />

          <h1 className="absolute bottom-6 left-6 text-2xl sm:text-4xl md:text-5xl font-bold capitalize">
            {project?.title}
          </h1>
        </motion.div>

        {/* GRID LAYOUT */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* LEFT - INFO CARDS */}
          <div className="md:col-span-1 space-y-5">
            {infoCards.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden group"
              >
                {/* glow border */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r ${item.color} transition`}
                />

                <div className="relative z-10">
                  <item.icon className="text-2xl text-white mb-2" />
                  <p className="text-sm text-zinc-400">{item.label}</p>
                  <h3 className="text-lg font-semibold">{item.value}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT - DETAILS */}
          <div className="md:col-span-2 space-y-8">
            {/* DESCRIPTION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition"
            >
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <FaCode className="text-purple-400" />
                Description
              </h2>

              <p className="text-zinc-400 leading-relaxed">{project?.desc}</p>
            </motion.div>

            {/* FEATURES */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30"
            >
              <h2 className="text-xl font-semibold mb-4">✨ Features</h2>

              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li
                    key={i}
                    className="text-zinc-400 hover:text-white transition"
                  >
                    ✔ {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* TECH STACK */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/30"
            >
              <h2 className="text-xl font-semibold mb-4">🚀 Tech Stack</h2>

              <div className="flex flex-wrap gap-2">
                {tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 hover:bg-purple-500/10 hover:border-purple-400/30 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-center">
                Live Demo
              </a>

              <a className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-center">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
