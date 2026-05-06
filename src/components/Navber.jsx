'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from '@/assets/my-logo.png';
import Image from 'next/image';
import {  FaPaperPlane, FaRocket } from 'react-icons/fa6';
import { HiArrowUpRight } from 'react-icons/hi2';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <nav
      className="bg-gradient-to-r from-[#0A0A1F] via-[#0F0B2E] to-[#1A0F3D] 
                    border-b border-white/10 backdrop-blur-xl fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src={Logo} height={300} width={300} alt="logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className={`relative font-medium transition-all duration-300 
                ${
                  isActive('/')
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
            >
              Home
              {isActive('/') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full"></span>
              )}
            </Link>

            <Link
              href="/about"
              className={`relative font-medium transition-all duration-300 
                ${
                  isActive('/about')
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
            >
              About
              {isActive('/about') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full"></span>
              )}
            </Link>

            <Link
              href="/services"
              className={`relative font-medium transition-all duration-300 
                ${
                  isActive('/services')
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
            >
              Services
              {isActive('/services') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full"></span>
              )}
            </Link>

            <Link
              href="/projects"
              className={`relative font-medium transition-all duration-300 
                ${
                  isActive('/projects')
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
            >
              Projects
              {isActive('/projects') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full"></span>
              )}
            </Link>

            <Link
              href="/blog"
              className={`relative font-medium transition-all duration-300 
                ${
                  isActive('/blog')
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
            >
              Blog
              {isActive('/blog') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full"></span>
              )}
            </Link>

            <Link
              href="/contact"
              className={`relative font-medium transition-all duration-300 
                ${
                  isActive('/contact')
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
            >
              Contact
              {isActive('/contact') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full"></span>
              )}
            </Link>
          </div>

          {/* Glassy Premium CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="group mx-auto  inline-flex items-center gap-3 px-10 py-3 rounded-2xl 
             text-white font-medium relative overflow-hidden
             backdrop-blur-xl border border-white/20
             bg-gradient-to-r from-white/10 via-purple-500/10 to-blue-500/10
             hover:border-purple-400/50 transition duration-300
             hover:scale-[1.03]"
            >
              {/* 🔥 Soft Moving Glow */}
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                   translate-x-[-200%] group-hover:translate-x-[200%] transition duration-1000"
              />

              {/* Icon */}
              <FaPaperPlane className="text-purple-300 group-hover:translate-x-1 transition" />

              {/* Text */}
              <span className="relative z-10 tracking-wide">LET'S TALK</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu with Active Style */}
        {isOpen && (
          <div className="md:hidden bg-[#0A0A1F]/95 backdrop-blur-xl border-t border-white/10 py-8">
            <div className="flex flex-col gap-6 text-center text-lg">
              {[
                '/',
                '/about',
                '/services',
                '/projects',
                '/blog',
                '/contact',
              ].map((path) => {
                const label =
                  path === '/'
                    ? 'Home'
                    : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
                return (
                  <Link
                    key={path}
                    href={path}
                    onClick={() => setIsOpen(false)}
                    className={`py-1 ${isActive(path) ? 'text-purple-400 font-semibold' : 'text-white/80 hover:text-white'}`}
                  >
                    {label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="group relative mx-auto mt-6 inline-flex items-center gap-3 px-10 py-4 
             rounded-2xl text-sm font-semibold tracking-widest text-white
             bg-neutral-950 border border-white/10 overflow-hidden
             transition-all duration-500 hover:border-purple-500/50 
             hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)]"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />

                {/* Text */}
                <span className="relative z-10 transition-colors duration-300">
                  LET'S TALK
                </span>

                {/* Premium Icon */}
                <HiArrowUpRight className="relative z-10 text-lg text-purple-400 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />

                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
