'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TwitterIcon, LinkedInIcon, GitHubIcon } from '@/components/SocialIcons';

// =============================================
// HERO SECTION
// =============================================
const HeroSection = () => {
    return (
        <section className="pt-28 md:pt-32 pb-16 md:pb-20 relative overflow-hidden min-h-[50vh] md:min-h-[60vh] flex items-center">
            {/* Background layers */}
            <div className="absolute inset-0 bg-[#0a0f14]" />
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-0 bg-radial" />

            {/* Animated orbs */}
            <div className="orb orb-green w-[300px] md:w-[400px] h-[300px] md:h-[400px] absolute -top-40 right-0 animate-float" />
            <div className="orb orb-navy w-[200px] md:w-[300px] h-[200px] md:h-[300px] absolute bottom-0 left-1/4" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="animate-fade-up">
                        <div className="badge mb-6">Our Team</div>
                        <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
                            The Faces Behind
                            <br />
                            <span className="text-gradient glow-text">FrontalMinds</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[#94a3b8] leading-relaxed max-w-xl">
                            Meet the talented individuals who bring creativity, expertise, and
                            passion to every project we undertake.
                        </p>

                        {/* Team stats */}
                        <div className="flex flex-wrap gap-6 md:gap-8 mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/10">
                            {[
                                {
                                    value: '6+', label: 'Team Members', icon: (
                                        <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    )
                                },
                                {
                                    value: '50+', label: 'Combined Years', icon: (
                                        <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )
                                },
                                {
                                    value: '100%', label: 'Dedication', icon: (
                                        <svg className="w-5 h-5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    )
                                },
                            ].map((stat) => (
                                <div key={stat.label} className="group flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                                        <div className="text-[#64748b] text-xs uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="hidden lg:block relative h-[400px] animate-fade-up delay-200">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#8b5cf6]/10 blur-[80px] rounded-full" />

                        {/* Floating team role cards */}
                        <div className="absolute top-4 right-8 flex items-center gap-3 px-5 py-3 bg-[#111920]/80 backdrop-blur-xl border border-[#22c55e]/30 rounded-2xl animate-float shadow-2xl">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#22c55e] to-[#14b8a6] flex items-center justify-center text-sm font-bold text-white">IA</div>
                            <span className="text-white font-medium text-sm">Lead Developer</span>
                        </div>

                        <div className="absolute top-1/2 -translate-y-1/2 left-0 flex items-center gap-3 px-5 py-3 bg-[#111920]/80 backdrop-blur-xl border border-[#3b82f6]/30 rounded-2xl animate-float delay-200 shadow-2xl">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center text-sm font-bold text-white">AM</div>
                            <span className="text-white font-medium text-sm">UI/UX Designer</span>
                        </div>

                        <div className="absolute bottom-8 right-16 flex items-center gap-3 px-5 py-3 bg-[#111920]/80 backdrop-blur-xl border border-[#f43f5e]/30 rounded-2xl animate-float delay-400 shadow-2xl">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f43f5e] to-[#f97316] flex items-center justify-center text-sm font-bold text-white">CO</div>
                            <span className="text-white font-medium text-sm">Backend Engineer</span>
                        </div>

                        <div className="absolute top-24 left-20 flex items-center gap-3 px-5 py-3 bg-[#111920]/80 backdrop-blur-xl border border-[#8b5cf6]/30 rounded-2xl animate-float delay-300 shadow-2xl">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#d946ef] flex items-center justify-center text-sm font-bold text-white">+3</div>
                            <span className="text-white font-medium text-sm">More...</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// =============================================
// TEAM GRID
// =============================================
const TeamSection = () => {
    const [hoveredMember, setHoveredMember] = useState<string | null>(null);

    const team = [
        {
            name: 'Ibrahim Adeniyi',
            role: 'Founder & Lead Developer',
            bio: 'Full-stack developer with a passion for creating innovative digital solutions.',
            initials: 'IA',
            gradient: 'from-[#22c55e] to-[#14b8a6]',
            color: '#22c55e',
            skills: ['React', 'Node.js', 'AWS'],
        },
        {
            name: 'Aisha Mohammed',
            role: 'UI/UX Designer',
            bio: 'Creative designer focused on crafting beautiful and intuitive user experiences.',
            initials: 'AM',
            gradient: 'from-[#3b82f6] to-[#8b5cf6]',
            color: '#3b82f6',
            skills: ['Figma', 'Prototyping', 'Design Systems'],
        },
        {
            name: 'Chinedu Okafor',
            role: 'Backend Engineer',
            bio: 'Expert in building scalable server architectures and API development.',
            initials: 'CO',
            gradient: 'from-[#f43f5e] to-[#f97316]',
            color: '#f43f5e',
            skills: ['Python', 'PostgreSQL', 'Docker'],
        },
        {
            name: 'Grace Okonkwo',
            role: 'Mobile Developer',
            bio: 'Specializes in cross-platform mobile app development with Flutter and React Native.',
            initials: 'GO',
            gradient: 'from-[#8b5cf6] to-[#d946ef]',
            color: '#8b5cf6',
            skills: ['Flutter', 'React Native', 'Firebase'],
        },
        {
            name: 'David Eze',
            role: 'Security Specialist',
            bio: 'Cybersecurity expert ensuring our solutions are secure and compliant.',
            initials: 'DE',
            gradient: 'from-[#f97316] to-[#eab308]',
            color: '#f97316',
            skills: ['Pen Testing', 'OWASP', 'Security Audits'],
        },
        {
            name: 'Sarah Adeyemi',
            role: 'Project Manager',
            bio: 'Keeps projects on track and ensures seamless communication between teams.',
            initials: 'SA',
            gradient: 'from-[#06b6d4] to-[#3b82f6]',
            color: '#06b6d4',
            skills: ['Agile', 'Scrum', 'Client Relations'],
        },
    ];

    return (
        <section className="section relative">
            <div className="absolute inset-0 bg-gradient-dark" />
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="orb orb-navy w-[400px] md:w-[600px] h-[400px] md:h-[600px] absolute -bottom-60 -left-40 opacity-30" />

            <div className="container relative z-10">
                {/* Section header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="heading-display heading-lg mb-4">
                        Meet the <span className="text-gradient">Team</span>
                    </h2>
                    <p className="text-[#94a3b8] text-base md:text-lg max-w-2xl mx-auto">
                        A diverse group of experts united by a shared passion for innovation.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {team.map((member, index) => (
                        <div
                            key={member.name}
                            className="group relative"
                            onMouseEnter={() => setHoveredMember(member.name)}
                            onMouseLeave={() => setHoveredMember(null)}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Card */}
                            <div className="relative p-6 md:p-8 bg-[#111920]/60 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-3">
                                {/* Gradient accent line on top */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: `linear-gradient(90deg, ${member.color}, transparent)` }}
                                />

                                {/* Avatar with glow */}
                                <div className="relative mx-auto w-fit mb-4 md:mb-6">
                                    <div className={`w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-3xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-xl md:text-3xl font-bold text-white shadow-xl group-hover:scale-105 transition-transform duration-500`}>
                                        {member.initials}
                                    </div>
                                    {/* Glow on hover */}
                                    <div
                                        className="absolute inset-0 rounded-2xl md:rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                                        style={{ background: member.color }}
                                    />
                                </div>

                                <div className="text-center relative z-10">
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-[#22c55e] transition-colors duration-300">
                                        {member.name}
                                    </h3>
                                    <p className="font-medium text-sm mb-3 md:mb-4" style={{ color: member.color }}>
                                        {member.role}
                                    </p>
                                    <p className="text-[#64748b] text-sm leading-relaxed mb-4 md:mb-6">
                                        {member.bio}
                                    </p>

                                    {/* Skills */}
                                    <div className="flex flex-wrap justify-center gap-2 mb-4 md:mb-6">
                                        {member.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-white/5 text-[#94a3b8] border border-white/5 group-hover:border-white/10 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Social links */}
                                    <div className="flex justify-center gap-2 md:gap-3 pt-4 md:pt-6 border-t border-white/5">
                                        {[
                                            { icon: <LinkedInIcon className="w-4 h-4" />, href: 'https://linkedin.com', label: 'LinkedIn' },
                                            { icon: <TwitterIcon className="w-4 h-4" />, href: 'https://twitter.com', label: 'Twitter' },
                                            { icon: <GitHubIcon className="w-4 h-4" />, href: 'https://github.com', label: 'GitHub' },
                                        ].map((social) => (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={social.label}
                                                className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/5 flex items-center justify-center text-[#64748b] hover:bg-[#22c55e] hover:text-white transition-all duration-300 click-scale"
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// =============================================
// CULTURE SECTION
// =============================================
const CultureSection = () => {
    const values = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Innovation First',
            description: 'We stay ahead of technology trends and bring cutting-edge solutions to every project.',
            color: '#22c55e',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Collaboration',
            description: 'We work as one team, supporting each other and our clients to achieve exceptional results.',
            color: '#3b82f6',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            title: 'Excellence',
            description: 'We take pride in our craft and deliver nothing but the highest quality work.',
            color: '#8b5cf6',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: 'Continuous Learning',
            description: 'We invest in our growth, constantly learning new skills and improving our expertise.',
            color: '#f97316',
        },
    ];

    return (
        <section className="section relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0f14]" />
            <div className="absolute inset-0 bg-grid opacity-10" />

            <div className="container relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <div className="badge mb-6 mx-auto">Our Culture</div>
                    <h2 className="heading-display heading-lg mb-4">
                        What Drives <span className="text-gradient">Us</span>
                    </h2>
                    <p className="text-[#94a3b8] text-base md:text-lg max-w-2xl mx-auto">
                        Our culture is built on shared values that guide everything we do.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {values.map((value, index) => (
                        <div
                            key={value.title}
                            className="group relative"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative p-6 md:p-8 bg-[#111920]/60 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl hover:border-white/20 transition-all duration-500 text-center h-full overflow-hidden">
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        background: `linear-gradient(135deg, ${value.color}20 0%, transparent 100%)`,
                                        border: `1px solid ${value.color}30`,
                                        color: value.color
                                    }}
                                >
                                    {value.icon}
                                </div>

                                <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3 relative z-10">{value.title}</h3>
                                <p className="text-[#64748b] text-sm leading-relaxed relative z-10">{value.description}</p>

                                {/* Bottom accent */}
                                <div
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 group-hover:w-1/2 transition-all duration-500 rounded-full"
                                    style={{ background: `linear-gradient(90deg, transparent, ${value.color}, transparent)` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// =============================================
// JOIN US CTA
// =============================================
const JoinUsSection = () => {
    return (
        <section className="section relative overflow-hidden">
            <div className="orb orb-green w-[400px] md:w-[600px] h-[400px] md:h-[600px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />

            <div className="container relative z-10">
                <div className="gradient-border p-[1px] rounded-2xl md:rounded-3xl max-w-3xl mx-auto">
                    <div className="bg-[#0a0f14] rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
                        {/* Background effects */}
                        <div className="absolute inset-0 bg-grid opacity-20" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#22c55e]/10 blur-[80px] rounded-full" />

                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#22c55e]/20 to-transparent flex items-center justify-center mx-auto mb-6 md:mb-8 border border-[#22c55e]/20">
                                <svg className="w-8 h-8 md:w-10 md:h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>

                            <div className="badge mb-6 mx-auto">We're Hiring</div>
                            <h2 className="heading-display text-2xl md:text-4xl lg:text-5xl mb-4">
                                Want to Join the <span className="text-gradient">Team?</span>
                            </h2>
                            <p className="text-[#94a3b8] text-base md:text-lg max-w-lg mx-auto mb-8 md:mb-10">
                                We're always looking for talented individuals who share our passion
                                for innovation and excellence.
                            </p>

                            {/* Open positions preview */}
                            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10">
                                {['Frontend Developer', 'Mobile Engineer', 'DevOps'].map((position) => (
                                    <span key={position} className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#22c55e]/10 text-[#22c55e] text-xs md:text-sm font-medium border border-[#22c55e]/20">
                                        {position}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href="/contact" className="btn btn-primary click-scale group w-full sm:w-auto justify-center">
                                    Get in Touch
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
        </section>
    );
};

// =============================================
// MAIN PAGE
// =============================================
export default function TeamPage() {
    return (
        <>
            <HeroSection />
            <TeamSection />
            <CultureSection />
            <JoinUsSection />
        </>
    );
}
