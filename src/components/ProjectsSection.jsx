'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Game Vault',
    desc: 'Game Vault Library is a modern web application that helps users organize and manage their personal game collection in one place. It provides a clean and user-friendly interface to browse, track, and view game details easily. The platform focuses on smooth performance and a simple experience, making game management more organized and visually appealing for gamers.',
    tech: ['React.js', 'Tailwind', 'Daisy UI', 'react Icon'],
    year: '2026',
    image: 'https://i.ibb.co.com/whhBpBX4/Screenshot-2026-04-11-173158.png',
  },
  {
    id: 2,
    title: 'Close-Friends',
    desc: 'Close Friends is a modern social web application built with React that allows users to stay connected with their close friends in a private and simple way. It focuses on small group interactions where users can create private circles, share updates, photos, and moments only with selected people. The app is designed to feel more personal than traditional social media, offering a clean interface, smooth user experience, and fast performance. It helps users maintain stronger relationships by keeping communication more private, meaningful, and organized.',
    tech: ['React', 'Tailwind', 'Daisy UI'],
    year: '2026',
    image: 'https://i.ibb.co.com/nMjYLGz5/Screenshot-2026-05-06-204514.png',
  },
  {
    id: 3,
    title: 'skill-sphere',
    desc: 'Skill Sphere is a modern web application built with Next.js that provides a smooth and fast user experience for managing and exploring skills in an organized way. It is designed with a clean UI, responsive layout, and optimized performance using server-side rendering features of Next.js.',
    tech: [
      'NEXT.js',
      'Tailwind CSS',
      'App Router (Next.js 13+)',
      'Framer Motion',
      'Server Components',
      'Client Components',
      'REST API / Fetch API',
      'Responsive Design',
    ],
    year: '2026',
    image: 'https://i.ibb.co.com/q32tJhQy/Screenshot-2026-05-06-205715.png',
  },
  {
    id: 4,
    title: 'Modern Portfolio Website',
    desc: 'High-performance animated portfolio with Framer Motion, glassmorphism, and smooth interactions.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind'],
    year: '2026',
    image: 'https://i.ibb.co.com/qLQDbykS/Screenshot-2026-05-06-210741.png',
  },
];

export default function TimelineProjects() {
  return (
    <section
      id="project"
      className="bg-[#0a0d1c] text-white py-24 px-6 relative overflow-hidden scroll-mt-28"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span className="uppercase text-sm tracking-widest text-zinc-400">
              Featured Work
            </span>
          </div>
          <h2
            className="text-6xl md:text-7xl font-bold tracking-tighter 
  bg-gradient-to-r from-indigo-600 via-purple-600 via-pink-600 to-cyan-400 
  bg-clip-text text-transparent"
          >
            Projects Timeline
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-8 -translate-x-1/2 h-[calc(100%-4rem)] w-[2px] bg-gradient-to-b from-purple-500/30 via-blue-500/30 to-transparent" />

          <div className="space-y-24">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`relative flex items-center ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                {/* Project Card */}
                <motion.div
                  whileHover={{ y: -12 }}
                  className="w-full md:w-[46%] group"
                >
                  <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/40 transition-all duration-500">
                    {/* Project Image - More Compact */}
                    <div className="relative h-48 md:h-52 overflow-hidden rounded-t-3xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1cdc] via-[#0a0d1c]/40 to-transparent" />

                      {/* Year Badge */}
                      <div className="absolute top-5 right-5 inline-flex items-center px-4 py-1.5 text-xs font-mono tracking-widest border border-white/20 bg-black/50 text-blue-700 backdrop-blur-md rounded-full">
                        {project.year}
                      </div>
                    </div>

                    {/* Card Content - More Compact */}
                    <div className="p-6 md:p-7">
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-zinc-400 leading-relaxed text-[15px] mb-5 line-clamp-3">
                        {project.desc}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-zinc-300 hover:bg-purple-500/10 hover:border-purple-500/30 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex  mt-5">
                        <a
                          href={`/project/${project.id}`}
                          className="group relative inline-flex items-center gap-2 px-5 py-3 
    rounded-2xl border border-white/10 bg-white/5
    transition-all duration-300 text-sm font-medium text-white
    overflow-hidden"
                        >
                          {/* Soft gradient hover background */}
                          <span className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-purple-500/70 to-blue-500/70 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                          <span className="relative z-10 flex items-center gap-2">
                            View Details
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                              →
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Enhanced Hover Glow */}
                    <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-25 blur-xl transition-all duration-500 -z-10" />
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-[4px] border-purple-500 bg-[#0a0d1c] shadow-[0_0_25px_#a855f7] z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
