'use client';

import Image from 'next/image';
import { FaBriefcase, FaFolderOpen, FaUsers, FaAward, FaRocket, FaCode } from 'react-icons/fa6';
import AboutImg from '@/assets/image.png';
import Signature from '@/assets/Signature.png';

export default function AboutSection() {
  return (
    <section
      id="About"
      className="bg-linear-to-br from-[#02071b] via-[#0f0f0f] to-[#020719] py-20 px-6 lg:px-16 text-white overflow-hidden scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Profile Image */}
          <div className="flex-shrink-0 relative group">
            <div className="relative w-[320px] h-[320px] lg:w-[360px] lg:h-[360px]">
              {/* Premium Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 rounded-[2.75rem] blur-3xl opacity-40 group-hover:opacity-50 transition-all duration-700"></div>

              <div className="relative w-full h-full rounded-[2.75rem] overflow-hidden border border-white/10 shadow-2xl ">
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
            <div className=" ">
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

            {/* Unique Bento Style Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-10">
              {/* Card 1 */}
              <div
                className="group relative overflow-hidden rounded-[30px] 
    border border-white/10 bg-gradient-to-br from-[#18181b] to-[#0f0f11]
    p-6 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/40"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 blur-3xl group-hover:bg-purple-500/30 transition-all" />

                <div className="flex items-center justify-between relative z-10 ">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center
        bg-gradient-to-br from-purple-500 to-fuchsia-500 text-3xl text-white
        shadow-[0_0_30px_rgba(168,85,247,0.4)] group-hover:rotate-12 transition-transform duration-500"
                  >
                    <FaCode />
                  </div>

                  <span className="text-xs uppercase tracking-[3px] text-purple-300">
                    Focus
                  </span>
                </div>

                <div className="relative z-10 mt-8">
                  <h3 className="text-3xl font-black text-white leading-tight">
                    MERN Stack
                  </h3>

                  <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                    Scalable Full-Stack Applications with React, Node.js,
                    Express & MongoDB.
                  </p>
                </div>

                {/* Hover Border */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0
      bg-gradient-to-r from-purple-500 to-pink-500
      group-hover:w-full transition-all duration-500"
                />
              </div>

              {/* Card 2 */}
              <div
                className="group relative overflow-hidden rounded-[30px]
    border border-white/10 bg-gradient-to-br from-[#111827] to-[#050816]
    p-6 transition-all duration-500 hover:scale-[1.03]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_50%)]" />
                </div>

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-400/30
        flex items-center justify-center text-3xl text-blue-400 group-hover:rotate-12 transition-transform duration-500"
                  >
                    <FaFolderOpen />
                  </div>

                  <h2 className="mt-8 text-6xl font-black text-white">20+</h2>

                  <p className="mt-3 text-gray-400 text-sm tracking-wide">
                    Practice & Personal Projects
                  </p>
                </div>

                {/* Hover Border */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0
      bg-gradient-to-r from-blue-500 to-cyan-400
      group-hover:w-full transition-all duration-500"
                />
              </div>

              {/* Card 3 */}
              <div
                className="group relative overflow-hidden rounded-[30px]
    border border-white/10 bg-black/40 backdrop-blur-2xl
    p-6 transition-all duration-500 hover:border-cyan-400/40  hover:-translate-y-2"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100
      transition duration-500 bg-[linear-gradient(120deg,rgba(6,182,212,0.12),transparent,rgba(168,85,247,0.12))]"
                />

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl bg-cyan-500/10
        border border-cyan-400/30 flex items-center justify-center
        text-cyan-400 text-3xl group-hover:rotate-12 transition-transform duration-500"
                  >
                    <FaCode />
                  </div>

                  <div className="mt-8 flex items-end gap-2">
                    <h2 className="text-5xl font-black text-white">5+</h2>
                    <span className="text-cyan-300 text-sm mb-2">
                      Completed
                    </span>
                  </div>

                  <p className="mt-3 text-gray-400 text-sm">
                    MERN Stack Full Projects with Authentication, Dashboards &
                    APIs.
                  </p>
                </div>

                {/* Hover Border */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0
      bg-gradient-to-r from-cyan-400 to-purple-500
      group-hover:w-full transition-all duration-500"
                />
              </div>

              {/* Card 4 */}
              <div
                className="group relative overflow-hidden rounded-[30px]
    border border-white/10 bg-gradient-to-b from-[#101014] to-[#09090b]
    py-6 pr-5 pl-4 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
    min-h-[320px] flex flex-col justify-between hover:translate-y-2"
              >
                <div
                  className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full
      bg-orange-500/10 blur-3xl"
                />

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-[20px]
        bg-gradient-to-br from-orange-400 to-red-500
        flex items-center justify-center text-white text-3xl
        group-hover:rotate-12 transition-transform duration-500"
                  >
                    <FaRocket />
                  </div>

                  <h2 className="mt-8 text-3xl font-black text-white leading-tight ">
                    Continuous
                  </h2>

                  <p className="text-orange-300 font-medium mt-1">
                    Learning & Growth
                  </p>

                  <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                    Improving problem-solving, UI design, backend architecture,
                    performance optimization & modern development workflow.
                  </p>
                </div>

                {/* Hover Border */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0
      bg-gradient-to-r from-orange-400 to-red-500
      group-hover:w-full transition-all duration-500"
                />
              </div>
            </div>

            {/* Extra Professional Touch */}
            <div className="pt-6">
              <a
                href={'#Contact'}
                className="inline-flex items-center gap-3 px-8 py-3 bg-linear-to-br from-[#040e35] via-[#1f1f1f] to-[#061446] text-blue-200 font-medium rounded-2xl hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
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
