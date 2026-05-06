'use client';

import Image from 'next/image';
import { FaBriefcase, FaFolderOpen, FaUsers, FaAward, FaRocket, FaCode } from 'react-icons/fa6';
import AboutImg from '@/assets/image.png';
import Signature from '@/assets/Signature.png';

export default function AboutSection() {
  return (
    <section className="bg-linear-to-br from-[#02071b] via-[#0f0f0f] to-[#020719] py-20 px-6 lg:px-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Profile Image */}
          <div className="flex-shrink-0 relative group">
            <div className="relative w-[320px] h-[320px] lg:w-[360px] lg:h-[360px]">
              {/* Premium Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 rounded-[2.75rem] blur-3xl opacity-40 group-hover:opacity-50 transition-all duration-700"></div>

              <div className="relative w-full h-full rounded-[2.75rem] overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={AboutImg}
                  alt="MD.KAMRUL"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 mt-2"
                  priority
                />
              </div>
            </div>
            {/* Signature */}
            <div className="">
              <Image
                src={Signature}
                alt="Kamrul Signature"
                width={300}
                height={100}
                className="
  drop-shadow-[0_6px_12px_rgba(168,85,247,0.3)]
  drop-shadow-[0_10px_20px_rgba(139,92,246,0.3)]
  drop-shadow-[0_14px_28px_rgba(59,130,246,0.3)] invert(80%) brightness-0
"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                I&apos;m Kamrul, a passionate <br />
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  MERN Stack Developer
                </span>
                .
              </h2>

              <p className="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
                I specialize in building modern MERN stack applications that are
                fast, scalable, and user-focused. I enjoy solving complex
                problems and transforming ideas into clean, efficient, and
                real-world solutions.
              </p>
            </div>

            {/* Stats - Premium Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 pt-8">
              {/* Stat 1 */}
              <div
                className="group relative overflow-hidden bg-white/5 hover:bg-white/10 
    border border-white/10 hover:border-purple-400/30 
    rounded-3xl p-6 transition-all duration-300 backdrop-blur-xl
    hover:scale-[1.03]"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 
      rounded-2xl flex items-center justify-center mb-5 text-white text-2xl
      group-hover:rotate-6 transition-transform"
                >
                  <FaCode />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-white">
                  MERN Stack Focus
                </h3>

                {/* Description */}
                <p className="text-gray-400 mt-2 text-[15px] leading-relaxed">
                  Building scalable full-stack applications Using React,
                  Node.js, Express & MongoDB with modern UI/UX practices.
                </p>

                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 
      bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl transition"
                />
              </div>

              {/* Stat 2 */}
              <div
                className="group relative overflow-hidden bg-white/5 hover:bg-white/10 
                  border border-white/10 hover:border-purple-400/30 
                  rounded-3xl p-6 transition-all duration-300 backdrop-blur-xl
                  hover:scale-[1.03]"
              >
                <div
                  className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 
                    rounded-2xl flex items-center justify-center mb-5 text-white text-2xl
                    group-hover:rotate-6 transition-transform"
                >
                  <FaFolderOpen />
                </div>

                <h3 className="text-4xl font-bold">10+</h3>
                <p className="text-gray-400 mt-2 text-[15px]">
                  Practice & Personal Projects
                </p>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 
                    bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl transition"
                />
              </div>

              {/* Stat 3 */}
              <div
                className="group relative overflow-hidden bg-white/5 hover:bg-white/10 
                  border border-white/10 hover:border-purple-400/30 
                  rounded-3xl p-6 transition-all duration-300 backdrop-blur-xl
                  hover:scale-[1.03]"
              >
                <div
                  className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 
                    rounded-2xl flex items-center justify-center mb-5 text-white text-2xl
                    group-hover:rotate-6 transition-transform"
                >
                  <FaCode />
                </div>

                <h3 className="text-4xl font-bold">5+</h3>
                <p className="text-gray-400 mt-2 text-[15px]">
                  MERN Stack Full Projects
                </p>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 
                    bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl transition"
                />
              </div>

              {/* Stat 4 */}
              <div
                className="group relative overflow-hidden bg-white/5 hover:bg-white/10 
                  border border-white/10 hover:border-purple-400/30 
                  rounded-3xl p-6 transition-all duration-300 backdrop-blur-xl
                  hover:scale-[1.03]"
              >
                <div
                  className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 
                    rounded-2xl flex items-center justify-center mb-5 text-white text-2xl
                    group-hover:rotate-6 transition-transform"
                >
                  <FaRocket />
                </div>

                <h3 className="text-4xl font-bold">Growth</h3>
                <p className="text-gray-400 mt-2 text-[15px]">
                  Continuous Learning & Improvement
                </p>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 
                    bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl transition"
                />
              </div>
            </div>

            {/* Extra Professional Touch */}
            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-br from-[#040e35] via-[#1f1f1f] to-[#061446] text-blue-200 font-medium rounded-2xl hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
              >
                Let&apos;s Work Together
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
