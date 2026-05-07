'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Image from 'next/image';
import { FiDownload, FiSend } from 'react-icons/fi';
import HeroImg from '@/assets/hero-img.png';
import { FaReact, FaJs } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';

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
    <div
    
      className="relative overflow-hidden min-h-screen bg-linear-to-br from-[#020617] via-[#0b0f1a] to-[#020617] text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 lg:gap-10 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="text-[10px] sm:text-xs tracking-wide text-gray-300">
              MERN STACK DEVELOPER
            </span>
          </div>

          {/* Heading */}
          <div>
            {/* Welcome line */}
            <span className="inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-lg md:text-2xl px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
              <FaHandSparkles className="text-purple-400 animate-pulse shrink-0" />

              <span className="text-gray-200">
                Hey! I am{' '}
                <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  KAMRUL
                </span>
              </span>
            </span>

            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-4xl sm:text-5xl">I code</span>{' '}
              <span className="italic bg-gradient-to-r from-blue-900 via-purple-400 to-pink-900 bg-clip-text text-transparent">
                scalable
              </span>{' '}
              <span className="text-4xl sm:text-5xl">ideas</span> into{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                real world
              </span>{' '}
              <span className="bg-gradient-to-r from-purple-500 to-blue-400 text-transparent bg-clip-text">
                solutions.
              </span>
            </h1>

            <div className="mt-4 min-h-[40px]">
              <span className="text-lg sm:text-xl md:text-2xl tracking-wide bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                {text}
                <span className="animate-pulse text-white">|</span>
              </span>
            </div>
          </div>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-gray-400 mt-6 max-w-xl mx-auto lg:mx-0">
            I build scalable{' '}
            <span className="text-xl text-green-700">MERN</span> stack
            applications with modern UI, secure backend, and performance-driven
            architecture.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 items-center justify-center lg:justify-start mt-10">
            <button className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-800 to-blue-900 text-white text-sm sm:text-base font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.3)] flex items-center justify-center gap-3">
              VIEW MY WORK
              <FiSend className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                   translate-x-[-200%] group-hover:translate-x-[200%] transition duration-1000"
              />
            </button>

            <button className="w-full sm:w-auto group px-6 sm:px-8 py-3 rounded-xl text-sm font-medium text-gray-300 flex items-center justify-center gap-3 backdrop-blur-md hover:text-white hover:border-purple-400/40 hover:bg-blue-950/10 transition-all duration-300 ease-in-out hover:shadow-[0_10px_30px_rgba(168,85,247,0.25)] hover:-translate-y-0.5">
              <span className="tracking-wide">DOWNLOAD RESUME</span>

              <FiDownload className="w-4 h-4 text-purple-300 group-hover:translate-y-1 group-hover:text-white transition duration-300" />
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}
        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col items-center justify-center order-1 lg:order-2"
        >
          {/* IMAGE + RINGS CONTAINER */}
          <div className="relative flex items-center justify-center w-full pt-18">
            {/* Glow Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Large Outer Ring */}
              <div
                className="absolute w-[82%] sm:w-[78%] md:w-[72%] lg:w-[92%] aspect-square rounded-full 
border border-white/10 
shadow-[0_0_60px_rgba(139,92,246,0.08)] 
top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              ></div>

              {/* Medium Main Ring */}
              <div
                className="absolute w-[72%] sm:w-[68%] md:w-[62%] lg:w-[78%] aspect-square rounded-full 
border border-purple-400/20 backdrop-blur-sm
bg-gradient-to-br from-white/5 to-transparent
shadow-[inset_0_0_40px_rgba(139,92,246,0.1),0_0_50px_rgba(139,92,246,0.12)] 
top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              ></div>

              {/* Inner Accent Ring */}
              <div
                className="absolute w-[55%] sm:w-[52%] lg:w-[60%] aspect-square rounded-full 
border border-blue-400/30 
shadow-[0_0_35px_rgba(59,130,246,0.1)]
top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              ></div>

              {/* Orbit Container */}
              <div className="absolute w-[95%] aspect-square animate-orbit">
                {/* React */}
                <div
                  className="absolute top-[6%] left-1/2 -translate-x-1/2
w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl
bg-white/5 backdrop-blur-xl
border border-cyan-400/20
flex items-center justify-center
shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                >
                  <FaReact className="text-xl sm:text-2xl lg:text-3xl text-cyan-400 animate-spin-slow" />
                </div>

                {/* Next.js */}
                <div
                  className="absolute top-1/2 right-[1%] -translate-y-1/2
w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl
bg-white/5 backdrop-blur-xl
border border-violet-400/20
flex items-center justify-center
shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                >
                  <RiNextjsFill className="text-xl sm:text-2xl lg:text-3xl text-violet-400" />
                </div>

                {/* MongoDB */}
                <div
                  className="absolute bottom-[6%] left-1/2 -translate-x-1/2
w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl
bg-white/5 backdrop-blur-xl
border border-emerald-400/20
flex items-center justify-center
shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                >
                  <SiMongodb className="text-xl sm:text-2xl lg:text-3xl text-emerald-400" />
                </div>

                {/* JavaScript */}
                <div
                  className="absolute top-1/2 left-[1%] -translate-y-1/2
w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl
bg-white/5 backdrop-blur-xl
border border-yellow-400/20
flex items-center justify-center
shadow-[0_0_30px_rgba(250,204,21,0.15)]"
                >
                  <FaJs className="text-xl sm:text-2xl lg:text-3xl text-yellow-400" />
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative w-full max-w-[280px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[600px] mt-0">
              <Image
                src={HeroImg}
                alt="profile"
                width={600}
                height={650}
                className="rounded-xl w-full h-auto object-cover"
                priority
              />

              <div
                className="absolute bottom-0 left-0 w-full h-40 pointer-events-none"
                style={{
                  WebkitMaskImage:
                    'linear-gradient(to top, black, transparent)',
                  maskImage: 'linear-gradient(to top, black, transparent)',
                  background:
                    'linear-gradient(to top, #080b16, #090c1a, transparent)',
                }}
              ></div>
            </div>
          </div>

          {/* Floating Card */}
          <div className="-mt-10 lg:absolute lg:bottom-0 lg:right-0 bg-white/5 backdrop-blur-xl border border-white/10 p-3 sm:p-4 rounded-xl shadow-lg w-[90%] max-w-[360px] z-20">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-400">code</span>
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            </div>

            <pre className="text-[10px] sm:text-xs lg:text-[15px] font-mono leading-relaxed overflow-x-auto">
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
              <span className="text-white">,</span>
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

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-[10px] sm:text-xs text-gray-500 font-medium">
              <span className="font-mono font-bold text-gray-400">{'</>'}</span>

              <span>Clean Code • Scalable • Efficient</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Social Icons */}
      <div className="absolute right-4 xl:right-10 top-1/2 -translate-y-1/2 hidden xl:flex z-20">
        <div
          className="flex flex-col gap-8 bg-[#0D111A]/50 border border-white/5 p-4 py-8 rounded-full backdrop-blur-md
                shadow-[0_0_25px_rgba(168,85,247,0.08)]
                hover:shadow-[0_0_45px_rgba(168,85,247,0.25)]
                transition-all duration-500 ease-in-out"
        >
          <a href="https://github.com/mdkamrul50">
            <FaGithub className="w-5 h-5 text-gray-400 hover:text-blue-700 transition-colors cursor-pointer" />
          </a>

          <a href="https://www.linkedin.com/in/md-kamrul-20a5a2271">
            <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-blue-700 transition-colors cursor-pointer" />
          </a>

          <FaTwitter className="w-5 h-5 text-gray-400 hover:text-blue-700 transition-colors cursor-pointer" />

          <a href="mailto:kamrul.dev.web@gmail.com">
            <MdEmail className="w-5 h-5 text-gray-400 hover:text-blue-700 transition-colors cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}
