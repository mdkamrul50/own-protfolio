'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Icons
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
  SiNextdotjs,
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
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 95 },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 90 },
        {
          name: 'Tailwind CSS',
          icon: SiTailwindcss,
          color: '#38BDF8',
          level: 92,
        },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 88 },
        { name: 'React.js', icon: FaReact, color: '#61DAFB', level: 85 },
        { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', level: 80 },
      ],
    },
    {
      id: 2,
      title: 'Backend',
      icon: FaNodeJs,
      color: 'from-emerald-400 to-teal-400',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 85 },
        { name: 'Express.js', icon: SiExpress, color: '#ffffff', level: 80 },
        { name: 'REST API', icon: TbApi, color: '#60A5FA', level: 90 },
        { name: 'JWT Auth', icon: TbShieldLock, color: '#A78BFA', level: 85 },
        {
          name: 'Better Auth',
          icon: TbShieldLock,
          color: '#A78BFA',
          level: 80,
        },
      ],
    },
    {
      id: 3,
      title: 'Database',
      icon: TbDatabase,
      color: 'from-purple-400 to-violet-400',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 88 },
        { name: 'Mongoose', icon: TbDatabase, color: '#ffffff', level: 85 },
      ],
    },
    {
      id: 4,
      title: 'Tools & DevOps',
      icon: TbTools,
      color: 'from-amber-400 to-orange-400',
      skills: [
        { name: 'Git', icon: FaGithub, color: '#F05032', level: 90 },
        { name: 'GitHub', icon: FaGithub, color: '#ffffff', level: 92 },
        { name: 'VS Code', icon: TbTools, color: '#3B82F6', level: 95 },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 85 },
        { name: 'Vercel', icon: SiVercel, color: '#ffffff', level: 88 },
      ],
    },
    {
      id: 5,
      title: 'UI/UX & Design',
      icon: FaFigma,
      color: 'from-pink-400 to-rose-400',
      skills: [
        { name: 'Figma', icon: FaFigma, color: '#F24E1E', level: 85 },
        {
          name: 'Framer Motion',
          icon: TbBrandFramerMotion,
          color: '#0055FF',
          level: 80,
        },
        {
          name: 'Responsive Design',
          icon: TbDeviceMobile,
          color: '#22C55E',
          level: 90,
        },
      ],
    },
  ];

  return (
    <section className="relative min-h-screen py-24 overflow-hidden bg-[#0a0d1c]">
      {/* Background blobs (RESTORED) */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-15%] w-[550px] h-[550px] bg-cyan-500/20 rounded-full blur-[130px]"
        animate={{ x: [0, -70, 0], y: [0, 60, 0] }}
        transition={{ duration: 28, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading (RESTORED ANIMATION) */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-400 to-cyan-300"
          >
            My Skills
          </motion.h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8">
                  {/* HEADER (RESTORED STYLE) */}
                  <div className="flex items-center gap-5 mb-10">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                    >
                      <CategoryIcon className="w-7 h-7 text-white" />
                    </motion.div>

                    <h3 className="text-2xl text-white font-semibold">
                      {category.title}
                    </h3>
                  </div>

                  {/* SKILLS */}
                  <div className="grid grid-cols-3 gap-6">
                    {category.skills.map((skill, i) => {
                      const SkillIcon = skill.icon;

                      return (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.15, y: -6 }}
                          className="flex flex-col items-center gap-2 w-full"
                        >
                          <SkillIcon
                            className="w-10 h-10"
                            style={{ color: skill.color }}
                          />

                          <p className="text-[11px] text-zinc-300">
                            {skill.name}
                          </p>

                          {/* PROGRESS */}
                          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: i * 0.05 }}
                              className="h-full rounded-full"
                              style={{
                                background: `linear-gradient(90deg, ${skill.color}, transparent)`,
                              }}
                            />
                          </div>

                          <span className="text-[10px] text-zinc-400">
                            {skill.level}%
                          </span>
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

      {/* MOUSE GLOW (RESTORED) */}
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
