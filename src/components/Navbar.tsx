'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TwitterIcon, LinkedInIcon, GitHubIcon, InstagramIcon } from './SocialIcons';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    {
      href: '/', label: 'Home', icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      href: '/about', label: 'About', icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      href: '/projects', label: 'Projects', icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      href: '/team', label: 'Team', icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      href: '/contact', label: 'Contact', icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  const socialLinks = [
    { icon: <TwitterIcon className="w-4 h-4" />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <LinkedInIcon className="w-4 h-4" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <GitHubIcon className="w-4 h-4" />, href: 'https://github.com', label: 'GitHub' },
    { icon: <InstagramIcon className="w-4 h-4" />, href: 'https://instagram.com', label: 'Instagram' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'py-2 md:py-3 bg-[#0a0f14]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20'
        : 'py-4 md:py-5 bg-transparent'
        }`}>
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
              {/* Enhanced Logo Icon */}
              <div className="relative w-9 h-9 md:w-11 md:h-11">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#22c55e] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-xl" />

                {/* Background rotating square */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-lg md:rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />

                {/* Main square */}
                <div className="absolute inset-0 bg-[#0a0f14] rounded-lg md:rounded-xl flex items-center justify-center border border-[#22c55e]/20 group-hover:border-[#22c55e]/50 transition-colors duration-500">
                  <span className="text-[#22c55e] font-black text-sm md:text-lg group-hover:scale-110 transition-transform duration-300">FM</span>
                </div>
              </div>

              <div className="hidden sm:flex items-baseline">
                <span className="text-white font-bold text-base md:text-lg tracking-tight group-hover:text-[#e2e8f0] transition-colors">Frontal</span>
                <span className="text-[#22c55e] font-bold text-base md:text-lg tracking-tight">Minds</span>
              </div>
            </Link>

            {/* Desktop Navigation - Enhanced Pill Style */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-[#111920]/80 backdrop-blur-xl rounded-full p-1 md:p-1.5 border border-white/5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`relative px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive(link.href)
                      ? 'bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white shadow-lg shadow-[#22c55e]/25'
                      : 'text-[#94a3b8] hover:text-white'
                      }`}
                  >
                    {/* Hover background */}
                    {!isActive(link.href) && hoveredLink === link.href && (
                      <span className="absolute inset-0 bg-white/5 rounded-full" />
                    )}

                    <span className="relative z-10 flex items-center gap-1.5">
                      {isActive(link.href) && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button - Enhanced */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="group relative flex items-center gap-2 px-5 md:px-6 py-2 md:py-2.5 rounded-full text-sm font-medium text-white transition-all duration-500 overflow-hidden"
              >
                {/* Background */}
                <span className="absolute inset-0 bg-white/5 border border-white/10 rounded-full group-hover:bg-[#22c55e] group-hover:border-[#22c55e] transition-all duration-500" />

                <span className="relative z-10 group-hover:text-white transition-colors">Let's Talk</span>
                <svg className="relative z-10 w-4 h-4 text-[#22c55e] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 md:w-11 md:h-11 rounded-lg md:rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1.5 group hover:border-[#22c55e]/50 transition-colors"
              aria-label="Toggle menu"
            >
              <span className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : 'group-hover:w-4'
                }`} />
              <span className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : 'group-hover:w-3'
                }`} />
              <span className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : 'group-hover:w-4'
                }`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Enhanced with animations */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
        {/* Backdrop with blur */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu panel */}
        <div className={`absolute top-16 md:top-20 left-3 right-3 md:left-4 md:right-4 bg-[#111920]/95 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}>
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-[#22c55e]/10 blur-3xl rounded-full" />

          <div className="flex flex-col gap-1 relative z-10">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 py-3 md:py-4 px-3 md:px-4 rounded-xl md:rounded-2xl font-medium transition-all duration-300 ${isActive(link.href)
                  ? 'bg-gradient-to-r from-[#22c55e]/20 to-transparent text-[#22c55e] border-l-2 border-[#22c55e]'
                  : 'text-[#94a3b8] hover:bg-white/5 hover:text-white'
                  }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className={isActive(link.href) ? 'text-[#22c55e]' : 'text-[#64748b]'}>{link.icon}</span>
                <span>{link.label}</span>
                {isActive(link.href) && (
                  <span className="ml-auto w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                )}
              </Link>
            ))}

            {/* CTA in mobile menu */}
            <div className="pt-3 md:pt-4 mt-2 md:mt-3 border-t border-white/10">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 md:py-4 bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white rounded-xl md:rounded-2xl font-semibold shadow-lg shadow-[#22c55e]/25 hover:shadow-[#22c55e]/40 transition-shadow"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Let's Talk</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Social links in mobile menu with proper icons */}
            <div className="flex items-center justify-center gap-3 mt-4 md:mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#64748b] hover:text-[#22c55e] hover:border-[#22c55e]/50 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
