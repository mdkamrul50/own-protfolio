'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from '@/assets/my-logo.png';
import Image from 'next/image';
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
              className="relative px-8 py-3.5 rounded-2xl font-medium text-white 
                         bg-white/10 backdrop-blur-2xl border border-white/20 
                         hover:border-purple-400/50 hover:bg-white/15 
                         transition-all duration-300 shadow-xl shadow-purple-500/10
                         flex items-center gap-2 group overflow-hidden"
            >
              <span className="relative z-10">LET'S TALK</span>
              <span className="group-hover:rotate-45 transition-transform relative z-10">
                ↗
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
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
                className="mx-auto mt-6 px-10 py-4 rounded-2xl text-white font-medium 
                           bg-white/10 backdrop-blur-xl border border-white/20 hover:border-purple-400/50"
              >
                LET'S TALK
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
