'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function FeaturedProject() {
  return (
    <section className="relative py-32 px-6 bg-[#0a0d1c] text-white overflow-hidden">
      {/* 🔥 NEW PREMIUM BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold pl-90 mb-20 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
      >
        Featured Project
      </motion.h2>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative group rounded-3xl overflow-hidden"
        >
          {/* 🔥 Glow Border */}
          <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />

          <div className="relative grid md:grid-cols-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden">
            {/* 🔥 IMAGE SIDE */}
            <div className="relative h-[300px] md:h-full overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
                alt="Featured Project"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />

              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* 🔥 CONTENT SIDE */}
            <div className="p-8 flex flex-col justify-center">
              {/* Tag */}
              <span className="text-sm text-purple-400 mb-3">
                Featured Project
              </span>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-4">
                Modern E-Commerce Platform
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                A full-stack MERN e-commerce application with authentication,
                cart system, payment integration, and admin dashboard.
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Node.js', 'MongoDB', 'Stripe'].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition"
                >
                  Live <FaExternalLinkAlt size={12} />
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
