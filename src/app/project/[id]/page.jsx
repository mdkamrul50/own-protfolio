'use client';

import { motion } from 'framer-motion';
import { FaLayerGroup, FaRocket, FaCode, FaCalendarAlt } from 'react-icons/fa';

export default function ProjectDetails({ params }) {
  const { slug } = params;

  return (
    <div className="min-h-screen bg-[#0a0d1c] text-white relative overflow-hidden px-6 py-16">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 blur-[140px]" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 blur-[140px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* BACK BUTTON */}
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          href="/#project"
          className="text-sm text-zinc-400 hover:text-white transition mb-10 inline-block"
        >
          ← Back to Projects
        </motion.a>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="group relative rounded-3xl border border-white/10 
          bg-white/5 backdrop-blur-2xl overflow-hidden
          hover:border-purple-500/40 transition-all duration-500"
        >
          {/* TOP BORDER ANIMATION */}
          <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 transition-all duration-500" />

          <div className="p-10 md:p-14">
            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold capitalize mb-3"
            >
              
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-zinc-400 text-lg leading-relaxed mb-10"
            >
              A modern, scalable and production-ready full stack project built
              with latest technologies.
            </motion.p>

            {/* INFO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: FaLayerGroup,
                  label: 'Project Type',
                  value: 'Full Stack App',
                  color: 'purple',
                },
                {
                  icon: FaRocket,
                  label: 'Status',
                  value: 'Completed',
                  color: 'cyan',
                },
                {
                  icon: FaCalendarAlt,
                  label: 'Year',
                  value: '2026',
                  color: 'pink',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * i }}
                  className="group/card p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <item.icon className="text-2xl text-purple-400 mb-3 group-hover/card:scale-110 transition" />
                    <h3 className="text-sm text-zinc-400">{item.label}</h3>
                    <p className="text-white font-semibold mt-1">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FEATURES */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-xl font-semibold mb-5 flex items-center gap-2">
                <FaCode className="text-purple-400" />
                Key Features
              </h2>

              <ul className="space-y-3 text-zinc-400">
                {[
                  'Modern responsive UI design',
                  'Authentication system',
                  'REST API integration',
                  'Optimized performance',
                ].map((f, i) => (
                  <li key={i} className="hover:text-white transition">
                    ✔ {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* TECH STACK */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {['React', 'Next.js', 'Tailwind', 'Node.js', 'MongoDB'].map(
                (tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 rounded-full 
                  bg-white/5 border border-white/10 text-zinc-300
                  hover:bg-purple-500/10 hover:border-purple-500/30 transition"
                  >
                    {tech}
                  </span>
                )
              )}
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 
                text-white font-medium hover:scale-105 transition"
              >
                Live Demo
              </a>

              <a
                href="#"
                className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 
                hover:bg-white/10 transition"
              >
                GitHub Code
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
