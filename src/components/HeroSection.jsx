'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Image from 'next/image';
import { FiDownload, FiSend } from 'react-icons/fi';
import HeroImg from '@/assets/hero-img.png';

import { useEffect, useState } from 'react';
import { FaHandSparkles } from 'react-icons/fa6';
const roles = [
  'MERN Stack Developer',
  'Frontend Developer',
  'Problem Solver',
  'UI/UX Enthusiast',
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);

          if (charIndex === current.length) {
            setDeleting(true);
            setTimeout(() => {}, 1000);
          }
        } else {
          setText(current.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);

          if (charIndex === 0) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      deleting ? 60 : 90
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
    <div className="min-h-screen bg-linear-to-br from-[#020617] via-[#0b0f1a] to-[#020617] text-white flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="text-xs tracking-wide text-gray-300">
              MERN STACK DEVELOPER
            </span>
          </div>

          {/* Heading */}
          <div>
            {/* Welcome line */}
            <span className="inline-flex items-center gap-3 text-2xl px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
              {/* Icon */}
              <FaHandSparkles className="text-purple-400 animate-pulse" />

              {/* Text */}
              <span className="text-gray-200">
                Hey! I am{' '}
                <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  KAMRUL
                </span>
              </span>
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-5xl">I code</span>{' '}
              <span className="italic bg-gradient-to-r from-blue-900 via-purple-400 to-pink-900 bg-clip-text text-transparent">
                scalable
              </span>{' '}
              <span className="text-5xl">ideas</span> into{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                real world
              </span>{' '}
              <span className="bg-gradient-to-r from-purple-500 to-blue-400 text-transparent bg-clip-text">
                solutions.
              </span>
            </h1>
            <span className="text-2xl tracking-wide bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
              {text}
              <span className="animate-pulse text-white ">|</span>
            </span>
          </div>

          {/* Subtext */}
          <p className="text-gray-400 mt-6 max-w-md">
            I build scalable MERN stack applications with modern UI, secure
            backend, and performance-driven architecture.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 items-center mt-10">
            <button className="group relative px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-800 to-blue-900 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.3)] flex items-center gap-3">
              VIEW MY WORK
              <FiSend className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                   translate-x-[-200%] group-hover:translate-x-[200%] transition duration-1000"
              />
            </button>
            <button className="group px-8 py-3 rounded-xl text-sm font-medium              text-gray-300 flex items-center gap-3 backdrop-blur-md  hover:text-white hover:border-purple-400/40 hover:bg-blue-950/10             transition-all duration-300 ease-in-out             hover:shadow-[0_10px_30px_rgba(168,85,247,0.25)]             hover:-translate-y-0.5">
              {' '}
              <span className="tracking-wide"> DOWNLOAD RESUME </span>{' '}
              <FiDownload className="w-4 h-4 text-purple-300                         group-hover:translate-y-1 group-hover:text-white                         transition duration-300" />
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex items-center justify-center"
        >
          {/* Glow Circle */}
          {/* Premium Developer Glow Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Large Outer Ring - Subtle */}
            <div
              className="absolute w-[85%] lg:w-[92%] aspect-square rounded-full 
                  border border-white/10 
                  shadow-[0_0_60px_rgba(139,92,246,0.08)] 
                  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            ></div>

            {/* Medium Main Ring - Glassy Premium */}
            <div
              className="absolute w-[68%] lg:w-[78%] aspect-square rounded-full 
                  border border-purple-400/20 backdrop-blur-sm
                  bg-gradient-to-br from-white/5 to-transparent
                  shadow-[inset_0_0_40px_rgba(139,92,246,0.1),0_0_50px_rgba(139,92,246,0.12)] 
                  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            ></div>

            {/* Inner Accent Ring */}
            <div
              className="absolute w-[52%] lg:w-[60%] aspect-square rounded-full 
                  border border-blue-400/30 
                  shadow-[0_0_35px_rgba(59,130,246,0.1)]
                  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            ></div>
          </div>

          {/* Developer Tech Accents */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Code-inspired dots */}
            <div className="absolute top-[22%] left-[18%] w-2.5 h-2.5 bg-purple-400 rounded-full shadow-[0_0_15px_#c084fc]"></div>
            <div className="absolute top-[35%] right-[20%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_12px_#22d3ee] animate-pulse"></div>
            <div className="absolute bottom-[28%] left-[25%] w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_18px_#60a5fa]"></div>

            {/* Subtle tech lines */}
            <div className="absolute top-[26%] left-[15%] w-16 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent rotate-12"></div>
            <div className="absolute bottom-[32%] right-[18%] w-20 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent -rotate-12"></div>
          </div>

          {/* Profile Image */}
          <div className="relative w-fit">
            <Image
              src={HeroImg}
              alt="profile"
              width={600}
              height={650}
              className="rounded-xl"
            />

            <div
              className="absolute bottom-0 left-0 w-full h-40 pointer-events-none"
              style={{
                WebkitMaskImage: 'linear-gradient(to top, black, transparent)',
                maskImage: 'linear-gradient(to top, black, transparent)',
                background:
                  'linear-gradient(to top, #080b16, #090c1a, transparent)',
              }}
            ></div>
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-0 right-0 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-lg w-[360px]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-400">code</span>
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            </div>

            <pre className="text-sm lg:text-[15px] font-mono leading-relaxed ">
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-400">developer</span>{' '}
              <span className="text-white">=</span>{' '}
              <span className="text-yellow-300">{'{'}</span>
              {'\n'}
              <span className="text-gray-400"> name: </span>
              <span className="text-emerald-300">"MD.Kamrul"</span>
              <span className="text-white">,</span>
              {'\n'}
              <span className="text-gray-400"> stack: </span>
              <span className="text-white">[</span>
              <span className="text-emerald-300">"MERN"</span>
              <span className="text-white">, </span>
              <span className="text-emerald-300">"Next.js"</span>
              <span className="text-white">, </span>
              <span className="text-emerald-300">"Tailwind"</span>
              <span className="text-white">],</span>
              {'\n'}
              <span className="text-gray-400"> profession: </span>
              <span className="text-emerald-300">"MERN Stack Developer"</span>
              <span className="text-white">,</span>
              {'\n'}
              <span className="text-gray-400"> available: </span>
              <span className="text-blue-400">true</span>
              {'\n'}
              <span className="text-yellow-300">{'}'}</span>
              <span className="text-white">;</span>
            </pre>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-gray-500 font-medium">
              <span className="font-mono font-bold text-gray-400">{'</>'}</span>
              <span>Clean Code • Scalable • Efficient</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Social Icons */}
      <div className="absolute right-18 top-1/2 -translate-y-1/2 hidden xl:flex z-20">
        <div
          className="flex flex-col gap-8 bg-[#0D111A]/50 border border-white/5 p-4 py-8 rounded-full backdrop-blur-md
                shadow-[0_0_25px_rgba(168,85,247,0.08)]
                hover:shadow-[0_0_45px_rgba(168,85,247,0.25)]
                transition-all duration-500 ease-in-out"
        >
          <FaGithub className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
          <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
          <FaTwitter className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
          <MdEmail className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
