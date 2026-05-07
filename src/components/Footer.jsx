'use client';

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
} from 'react-icons/fa';
import Logo from '@/assets/my-logo.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0a0d1c] text-white overflow-hidden">
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative">
        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image src={Logo} height={300} width={300} alt="logo" />
            <p className="text-gray-400  leading-relaxed">
              MERN Stack Developer focused on building scalable, modern and
              user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(
                (item, i) => (
                  <li
                    key={i}
                    className="hover:text-white transition cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>

            <div className="flex gap-4 text-gray-400 text-xl">
              <a href="https://github.com/mdkamrul50">
                <FaGithub className="hover:text-white hover:scale-110 transition cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/md-kamrul-20a5a2271">
                <FaLinkedin className="hover:text-white hover:scale-110 transition cursor-pointer" />
              </a>
             
              <a href="mailto:kamrul.dev.web@gmail.com">
                <FaEnvelope className="hover:text-white hover:scale-110 transition cursor-pointer" />
              </a>
            </div>

            <p className="text-gray-500 mt-4 text-sm">
              Let’s build something amazing together 🚀
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kamrul. All rights reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 px-4 py-2 rounded-lg 
                       bg-white/5 border border-white/10 
                       hover:bg-white/10 transition"
          >
            <FaArrowUp className="group-hover:-translate-y-1 transition" />
            <span className="text-sm">Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
