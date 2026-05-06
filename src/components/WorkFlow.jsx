'use client';
import { motion } from 'framer-motion';
import {
  FaLightbulb,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
} from 'react-icons/fa';

const steps = [
  {
    title: 'Planning',
    desc: 'Deep dive into requirements, market research, and strategic roadmap.',
    icon: FaLightbulb,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'group-hover:border-amber-400/50',
  },
  {
    title: 'Design',
    desc: 'Creating high-fidelity wireframes and modern UI/UX with clean aesthetics.',
    icon: FaPencilRuler,
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
    border: 'group-hover:border-pink-400/50',
  },
  {
    title: 'Development',
    desc: 'Turning concepts into scalable, functional, and clean production-ready code.',
    icon: FaCode,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'group-hover:border-cyan-400/50',
  },
  {
    title: 'Testing',
    desc: 'Rigorous bug hunting, performance auditing, and cross-browser optimization.',
    icon: FaBug,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'group-hover:border-emerald-400/50',
  },
  {
    title: 'Deployment',
    desc: 'Safe delivery to production servers with CI/CD and cloud scalability.',
    icon: FaRocket,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'group-hover:border-purple-400/50',
  },
];

export default function WorkflowSection() {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden text-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-400 font-medium tracking-[0.2em] uppercase text-sm"
          >
            Efficiency in Action
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold mt-4 bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text"
          >
            My Creative Workflow
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-gray-800 to-transparent hidden md:block" />

          <div className="space-y-20 md:space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } md:mb-16 last:mb-0`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-1/2 px-4 md:px-12">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className={`p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 group ${step.border} hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}
                    >
                      {/* Icon with Color Background */}
                      <div
                        className={`w-14 h-14 ${step.bg} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                      >
                        <Icon className={`text-2xl ${step.color}`} />
                      </div>

                      <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-lg">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Node (Dot) */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      className={`w-4 h-4 rounded-full bg-black border-2 ${step.color.replace('text', 'border')} z-20 shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
                    />
                    {/* Animated Pulse Ring */}
                    <motion.div
                      animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className={`absolute w-8 h-8 rounded-full border border-white/20`}
                    />
                  </div>

                  {/* Empty space for opposite side */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
