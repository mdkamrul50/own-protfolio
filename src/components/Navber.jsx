'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/assets/my-logo.png';
import Image from 'next/image';
import { FaPaperPlane } from 'react-icons/fa6';
import { HiArrowUpRight } from 'react-icons/hi2';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('/');

  // 🔥 SPA SCROLL ACTIVE SYSTEM
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '#/', id: '/' },
    { label: 'About', href: '#About', id: 'About' },
    { label: 'Services', href: '#Service', id: 'Service' },
    { label: 'Projects', href: '#project', id: 'project' },
    { label: 'Skills', href: '#skills-section', id: 'skills-section' },
    { label: 'Contact', href: '#Contact', id: 'Contact' },
  ];

  // add this state
  const [scrolled, setScrolled] = useState(false);

  // add this useEffect under your other useEffect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/5 backdrop-blur-2xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.35)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Image src={Logo} height={300} width={300} alt="logo" />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`relative font-medium transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}

                  {/* ACTIVE LINE */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA BUTTON */}
          <div className="hidden md:block">
            <Link
              href="#Contact"
              className="group inline-flex items-center gap-3 px-10 py-3 rounded-2xl 
             text-white font-medium relative overflow-hidden
             backdrop-blur-xl border border-white/20
             bg-gradient-to-r from-white/10 via-purple-500/10 to-blue-500/10
             hover:border-purple-400/50 transition duration-300
             hover:scale-[1.03]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition duration-1000" />

              <FaPaperPlane className="text-purple-300 group-hover:translate-x-1 transition" />
              <span className="relative z-10">LET'S TALK</span>
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-[#0A0A1F]/95 backdrop-blur-xl border-t border-white/10 py-8">
            <div className="flex flex-col gap-6 text-center text-lg">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`py-1 transition ${
                      isActive
                        ? 'text-purple-400 font-semibold'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="#Contact"
                onClick={() => setIsOpen(false)}
                className="group mx-auto mt-6 inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-sm font-semibold text-white bg-neutral-950 border border-white/10"
              >
                LET'S TALK
                <HiArrowUpRight className="text-purple-400" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
