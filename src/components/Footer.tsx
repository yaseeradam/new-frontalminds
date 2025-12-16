'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TwitterIcon, LinkedInIcon, GitHubIcon, InstagramIcon } from './SocialIcons';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    const footerLinks = {
        company: [
            { label: 'About Us', href: '/about' },
            { label: 'Our Team', href: '/team' },
            { label: 'Projects', href: '/projects' },
            { label: 'Careers', href: '/contact' },
        ],
        services: [
            { label: 'Web Development', href: '/projects' },
            { label: 'Mobile Apps', href: '/projects' },
            { label: 'Cybersecurity', href: '/projects' },
            { label: 'Consulting', href: '/contact' },
        ],
        connect: [
            { label: 'Contact', href: '/contact' },
            { label: 'Support', href: '/contact' },
            { label: 'Twitter', href: '#' },
            { label: 'LinkedIn', href: '#' },
        ],
    };

    const socialLinks = [
        { icon: <TwitterIcon className="w-4 h-4 md:w-5 md:h-5" />, href: 'https://twitter.com', label: 'Twitter' },
        { icon: <GitHubIcon className="w-4 h-4 md:w-5 md:h-5" />, href: 'https://github.com', label: 'GitHub' },
        { icon: <LinkedInIcon className="w-4 h-4 md:w-5 md:h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: <InstagramIcon className="w-4 h-4 md:w-5 md:h-5" />, href: 'https://instagram.com', label: 'Instagram' },
    ];

    return (
        <footer className="footer-gradient relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] morph-blob bg-[#22c55e]/5 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] morph-blob bg-[#1e3a5f]/10 pointer-events-none" style={{ animationDelay: '-4s' }} />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

            {/* Top CTA Section */}
            <div className="container section-sm relative z-10">
                <div className="relative">
                    {/* Animated gradient border wrapper */}
                    <div className="gradient-border p-[1px] rounded-2xl md:rounded-3xl">
                        <div className="bg-[#0a0f14] rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-16 text-center relative overflow-hidden">
                            {/* Background effects */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#22c55e]/10 blur-[100px] rounded-full pointer-events-none" />
                            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#22c55e]/20 to-transparent flex items-center justify-center mx-auto mb-6 md:mb-8 border border-[#22c55e]/20">
                                    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>

                                <h2 className="heading-display text-2xl md:text-4xl lg:text-5xl mb-4">
                                    Ready to Build Something
                                    <span className="text-gradient"> Amazing?</span>
                                </h2>
                                <p className="text-[#94a3b8] text-base md:text-lg max-w-xl mx-auto mb-8 md:mb-10">
                                    Let's discuss your project and see how we can help bring your vision to life with cutting-edge technology.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link href="/contact" className="btn btn-primary click-scale group w-full sm:w-auto justify-center">
                                        Start Your Project
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                    <Link href="/projects" className="btn btn-secondary click-scale w-full sm:w-auto justify-center">
                                        View Our Work
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container py-12 md:py-20 relative z-10">
                <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
                    {/* Brand Column */}
                    <div className="md:col-span-5">
                        <Link href="/" className="flex items-center gap-3 mb-6 md:mb-8 group">
                            {/* Logo with enhanced effects */}
                            <div className="relative">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#22c55e]/20">
                                    <span className="text-white font-black text-lg md:text-xl">FM</span>
                                </div>
                                {/* Subtle glow */}
                                <div className="absolute inset-0 bg-[#22c55e] blur-2xl opacity-30 rounded-2xl group-hover:opacity-50 transition-opacity" />
                            </div>
                            <div>
                                <span className="text-xl md:text-2xl font-bold text-white group-hover:text-[#22c55e] transition-colors">
                                    FrontalMinds
                                </span>
                                <div className="text-[#64748b] text-xs uppercase tracking-wider">Digital Solutions</div>
                            </div>
                        </Link>

                        <p className="text-[#64748b] leading-relaxed max-w-md mb-6 md:mb-8 text-sm md:text-base">
                            Pioneering the future of digital solutions. We merge innovative technology
                            with clear-minded strategy to unlock your business potential.
                        </p>

                        {/* Newsletter with enhanced styling */}
                        <div className="relative max-w-sm">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e]/20 to-transparent blur-2xl rounded-2xl opacity-50" />
                            <form onSubmit={handleSubscribe} className="relative">
                                <div className="flex gap-2 bg-[#111920]/80 backdrop-blur-xl p-1.5 md:p-2 rounded-xl md:rounded-2xl border border-white/5">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="flex-1 bg-transparent text-white text-sm px-3 md:px-4 py-2 md:py-3 focus:outline-none placeholder:text-[#64748b] min-w-0"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl transition-all click-scale text-sm flex items-center gap-2 shrink-0"
                                    >
                                        {isSubscribed ? (
                                            <>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="hidden sm:inline">Done!</span>
                                            </>
                                        ) : (
                                            <span>Subscribe</span>
                                        )}
                                    </button>
                                </div>
                            </form>
                            <p className="text-[#64748b] text-xs mt-2 md:mt-3">
                                Get the latest updates and insights. No spam, ever.
                            </p>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
                        <div>
                            <h4 className="font-semibold text-white mb-4 md:mb-6 flex items-center gap-2 text-sm md:text-base">
                                <span className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-[#22c55e]/10 flex items-center justify-center">
                                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#22c55e]" />
                                </span>
                                Company
                            </h4>
                            <ul className="space-y-3 md:space-y-4">
                                {footerLinks.company.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center gap-2 text-[#64748b] hover:text-[#22c55e] transition-colors text-sm md:text-base"
                                        >
                                            <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                            <span>{link.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-white mb-4 md:mb-6 flex items-center gap-2 text-sm md:text-base">
                                <span className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center">
                                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#3b82f6]" />
                                </span>
                                Services
                            </h4>
                            <ul className="space-y-3 md:space-y-4">
                                {footerLinks.services.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center gap-2 text-[#64748b] hover:text-[#22c55e] transition-colors text-sm md:text-base"
                                        >
                                            <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                            <span>{link.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <h4 className="font-semibold text-white mb-4 md:mb-6 flex items-center gap-2 text-sm md:text-base">
                                <span className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-[#f97316]/10 flex items-center justify-center">
                                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#f97316]" />
                                </span>
                                Connect
                            </h4>
                            <ul className="space-y-3 md:space-y-4">
                                {footerLinks.connect.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center gap-2 text-[#64748b] hover:text-[#22c55e] transition-colors text-sm md:text-base"
                                        >
                                            <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                            <span>{link.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="container py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                    <div className="flex items-center gap-2 text-[#64748b] text-xs md:text-sm text-center md:text-left">
                        <span>© {currentYear} FrontalMinds.</span>
                        <span className="hidden sm:inline">Crafted with</span>
                        <svg className="w-4 h-4 text-[#22c55e]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span className="hidden sm:inline">in Nigeria.</span>
                    </div>

                    {/* Social Links with proper SVG icons */}
                    <div className="flex items-center gap-2 md:gap-3">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-xl border border-white/10 flex items-center justify-center text-[#64748b] hover:border-[#22c55e]/50 hover:text-[#22c55e] transition-all duration-300 click-scale overflow-hidden"
                            >
                                {/* Hover background effect */}
                                <span className="absolute inset-0 bg-[#22c55e]/0 group-hover:bg-[#22c55e]/10 transition-colors duration-300" />
                                <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm text-[#64748b]">
                        <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-1 group">
                            <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Privacy
                        </Link>
                        <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-1 group">
                            <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
