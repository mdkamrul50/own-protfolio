'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// React Icons Imports
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiPostman,
} from 'react-icons/si';

import {
  TbApi,
  TbShieldLock,
  TbTools,
  TbDatabase,
  TbBrandFramerMotion,
  TbDeviceMobile,
} from 'react-icons/tb';

const SkillsSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const categories = [
    {
      id: 1,
      title: 'Frontend',
      icon: FaReact,
      color: 'from-blue-400 to-cyan-400',
      skills: [
        { name: 'HTML5', icon: FaHtml5 },
        { name: 'CSS3', icon: FaCss3Alt },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'React.js', icon: FaReact },
        { name: 'Next.js', icon: FaReact },
      ],
    },
    {
      id: 2,
      title: 'Backend',
      icon: FaNodeJs,
      color: 'from-emerald-400 to-teal-400',
      skills: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express.js', icon: SiExpress },
        { name: 'REST API', icon: TbApi },
        { name: 'JWT Auth', icon: TbShieldLock },
        { name: 'Better Auth', icon: TbShieldLock },
      ],
    },
    {
      id: 3,
      title: 'Database',
      icon: TbDatabase,
      color: 'from-purple-400 to-violet-400',
      skills: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Mongoose', icon: TbDatabase },
      ],
    },
    {
      id: 4,
      title: 'Tools & DevOps',
      icon: TbTools,
      color: 'from-amber-400 to-orange-400',
      skills: [
        { name: 'Git', icon: FaGithub },
        { name: 'GitHub', icon: FaGithub },
        { name: 'VS Code', icon: TbTools },
        { name: 'Postman', icon: SiPostman },
        { name: 'Vercel', icon: SiVercel },
      ],
    },
    {
      id: 5,
      title: 'UI/UX & Design',
      icon: FaFigma,
      color: 'from-pink-400 to-rose-400',
      skills: [
        { name: 'Figma', icon: FaFigma },
        { name: 'Framer Motion', icon: TbBrandFramerMotion },
        { name: 'Responsive Design', icon: TbDeviceMobile },
      ],
    },
  ];

  return (
    <section
      id="skills-section"
      className="relative min-h-screen py-24 overflow-hidden bg-[#0a0d1c]"
    >
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-[120px]"
          animate={{ x: [0, 60, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[-15%] right-[-15%] w-[550px] h-[550px] bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-full blur-[130px]"
          animate={{ x: [0, -70, 0], y: [0, 60, 0] }}
          transition={{ duration: 28, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm tracking-[3px] uppercase text-zinc-400">
              Expertise
            </span>
          </div>

          <h2 className="text-7xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-white">
            My Skills
          </h2>
          <p className="mt-6 text-xl text-zinc-400 max-w-md">
            Crafting exceptional digital experiences with modern technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group relative"
              >
                <div className="relative h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:border-white/30 hover:shadow-2xl hover:shadow-black/50 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-12 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000" />
                  </div>

                  {/* Category Header */}
                  <div className="flex items-center gap-5 mb-12">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-xl`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <CategoryIcon className="w-9 h-9 text-white" />
                    </motion.div>

                    <div>
                      <h3 className="text-3xl font-semibold text-white tracking-tight">
                        {category.title}
                      </h3>
                      <div className="h-0.5 w-12 bg-gradient-to-r from-white/60 to-transparent mt-2" />
                    </div>
                  </div>

                  {/* Icon Only Skills Grid */}
                  <div className="grid grid-cols-3 gap-8">
                    {category.skills.map((skill, i) => {
                      const SkillIcon = skill.icon;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.7 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + i * 0.04 }}
                          whileHover={{
                            scale: 1.25,
                            y: -8,
                            rotate: [0, -12, 12, 0],
                          }}
                          className="flex flex-col items-center gap-3 group/item cursor-default"
                          title={skill.name}
                        >
                          <div className="w-20 h-20 flex items-center justify-center rounded-3xl bg-white/5 border border-white/10 group-hover/item:border-white/40 hover:bg-white/10 transition-all duration-300">
                            <SkillIcon className="w-11 h-11 text-white" />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mouse Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-20 mix-blend-screen"
        style={{
          background: `radial-gradient(360px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(165, 243, 252, 0.13), transparent 70%)`,
        }}
      />
    </section>
  );
};

export default SkillsSection;
