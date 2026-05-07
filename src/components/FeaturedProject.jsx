'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Feature from '@/assets/feature.png';

export default function FeaturedProject() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0d1c] text-white overflow-hidden">
      {/* 🔥 PREMIUM BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-1/4 w-60 sm:w-80 lg:w-96 h-60 sm:h-80 lg:h-96 bg-purple-500/10 rounded-full blur-[100px] sm:blur-[120px]" />

        <div className="absolute bottom-10 sm:bottom-20 right-1/4 w-60 sm:w-80 lg:w-96 h-60 sm:h-80 lg:h-96 bg-blue-500/10 rounded-full blur-[100px] sm:blur-[120px]" />
      </div>

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Featured Project
        </h2>
      </motion.div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative group rounded-2xl sm:rounded-3xl overflow-hidden"
        >
          {/* Glow Border */}
          <div className="absolute -inset-[2px] rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />

          <div className="relative grid lg:grid-cols-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden">
            {/* IMAGE SIDE */}
            <div className="relative h-[240px] sm:h-[320px] md:h-[420px] lg:h-full overflow-hidden">
              <Image
                src={Feature}
                alt="Featured Project"
                fill
                priority
                className="object-cover group-hover:scale-105 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* CONTENT SIDE */}
            <div className="p-5 sm:p-8 lg:p-10 flex flex-col justify-center">
              {/* Tag */}
              <span className="text-xs sm:text-sm tracking-wide text-purple-400 mb-3">
                Featured Project
              </span>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Skill Sphere
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">
                Skill Sphere is a modern web application built with Next.js that
                provides a smooth and fast user experience for managing and
                exploring skills in an organized way.
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-7">
                {[
                  'NEXT.js',
                  'Tailwind CSS',
                  'App Router',
                  'Framer Motion',
                  'Server Components',
                  'Client Components',
                  'REST API',
                  'Responsive Design',
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-[10px] sm:text-xs bg-white/10 border border-white/15 rounded-full text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://skill-sphere-phi-nine.vercel.app"
                  target="_blank"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition text-sm sm:text-base font-medium"
                >
                  Live Demo
                  <FaExternalLinkAlt size={12} />
                </a>

                <a
                  href="https://github.com/mdkamrul50/-SkillSphere"
                  target="_blank"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition text-sm sm:text-base font-medium"
                >
                  GitHub
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
