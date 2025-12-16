'use client';

import React from 'react';
import Link from 'next/link';

// =============================================
// HERO SECTION
// =============================================
const HeroSection = () => {
    return (
        <section className="pt-28 md:pt-32 pb-16 md:pb-20 relative overflow-hidden min-h-[60vh] md:min-h-[70vh] flex items-center">
            {/* Background layers */}
            <div className="absolute inset-0 bg-[#0a0f14]" />
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-0 bg-radial" />

            {/* Animated orbs */}
            <div className="orb orb-green w-[300px] md:w-[500px] h-[300px] md:h-[500px] absolute -top-40 right-0 animate-float" />
            <div className="orb orb-navy w-[250px] md:w-[400px] h-[250px] md:h-[400px] absolute bottom-0 left-0" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="animate-fade-up">
                        <div className="badge mb-6">About Us</div>
                        <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
                            Meet the Minds Behind
                            <br />
                            <span className="text-gradient glow-text">FrontalMinds</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[#94a3b8] leading-relaxed max-w-xl mb-8">
                            We're a passionate team of developers, engineers, and tech enthusiasts
                            committed to building cutting-edge solutions that shape the future of
                            technology and push the boundaries of what's possible.
                        </p>

                        {/* Quick stats */}
                        <div className="flex flex-wrap gap-6 md:gap-8 pt-6 md:pt-8 border-t border-white/10">
                            {[
                                {
                                    icon: (
                                        <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    ), value: '50+', label: 'Projects'
                                },
                                {
                                    icon: (
                                        <svg className="w-5 h-5 text-[#fbbf24]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ), value: '98%', label: 'Satisfaction'
                                },
                                {
                                    icon: (
                                        <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    ), value: '20+', label: 'Clients'
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
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#22c55e]/10 blur-[80px] rounded-full" />

                        {/* Floating stats */}
                        <div className="absolute top-4 right-12 px-6 py-5 bg-[#111920]/80 backdrop-blur-xl border border-[#22c55e]/30 rounded-2xl animate-float shadow-2xl group hover:border-[#22c55e] transition-all duration-500">
                            <div className="text-4xl font-bold text-gradient mb-1">5+</div>
                            <div className="text-[#64748b] text-sm">Years Experience</div>
                        </div>

                        <div className="absolute top-1/2 -translate-y-1/2 left-4 px-6 py-5 bg-[#111920]/80 backdrop-blur-xl border border-[#3b82f6]/30 rounded-2xl animate-float delay-200 shadow-2xl group hover:border-[#3b82f6] transition-all duration-500">
                            <div className="text-4xl font-bold text-[#3b82f6] mb-1">100%</div>
                            <div className="text-[#64748b] text-sm">Client Satisfaction</div>
                        </div>

                        <div className="absolute bottom-4 right-20 px-6 py-5 bg-[#111920]/80 backdrop-blur-xl border border-[#f97316]/30 rounded-2xl animate-float delay-400 shadow-2xl group hover:border-[#f97316] transition-all duration-500">
                            <div className="text-4xl font-bold text-[#f97316] mb-1">24/7</div>
                            <div className="text-[#64748b] text-sm">Support Available</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


// =============================================
// MISSION & VISION
// =============================================
const MissionVisionSection = () => {
    return (
        <section className="section relative">
            <div className="absolute inset-0 bg-gradient-dark" />
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="orb orb-green w-[300px] md:w-[400px] h-[300px] md:h-[400px] absolute top-20 right-20 opacity-20" />

            <div className="container relative z-10">
                {/* Section intro */}
                <div className="max-w-3xl mb-12 md:mb-20 animate-fade-up">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#22c55e]/10 text-[#22c55e] font-semibold text-sm uppercase tracking-wider mb-6 border border-[#22c55e]/20">
                        <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                        Who We Are
                    </span>
                    <h2 className="heading-display heading-lg text-white mb-6">
                        We don't just build software — we build
                        <span className="text-gradient"> partnerships</span>.
                    </h2>
                    <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed">
                        Every project begins with understanding your unique challenges.
                        We become an extension of your team, invested in your success.
                    </p>
                </div>

                {/* Mission & Vision - Asymmetric layout */}
                <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
                    {/* Mission - Larger */}
                    <div className="lg:col-span-3 relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/10 to-transparent rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative p-8 md:p-10 lg:p-14 bg-[#111920]/60 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl hover:border-[#22c55e]/30 transition-all duration-500">
                            <span className="absolute -top-6 md:-top-8 -left-2 md:-left-4 text-[100px] md:text-[140px] font-bold text-[#22c55e]/5 leading-none select-none pointer-events-none">
                                M
                            </span>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4 md:mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-[#22c55e]/20 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <span className="text-[#22c55e] font-semibold uppercase tracking-wider text-sm">
                                        Our Mission
                                    </span>
                                </div>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                                    Making technology accessible for everyone.
                                </h3>
                                <p className="text-[#94a3b8] leading-relaxed text-base md:text-lg">
                                    We break down complex technical barriers to deliver solutions that any
                                    business can use effectively. Your success doesn't require a tech degree.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Vision - Smaller, offset */}
                    <div className="lg:col-span-2 lg:mt-16 relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/10 to-transparent rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative p-8 md:p-10 bg-[#111920]/60 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl hover:border-[#3b82f6]/30 transition-all duration-500 h-full">
                            <span className="absolute -top-4 md:-top-6 -right-2 md:-right-4 text-[80px] md:text-[120px] font-bold text-[#3b82f6]/5 leading-none select-none pointer-events-none">
                                V
                            </span>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4 md:mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/20 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <span className="text-[#3b82f6] font-semibold uppercase tracking-wider text-sm">
                                        Our Vision
                                    </span>
                                </div>
                                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">
                                    A world where great ideas aren't held back by technical limitations.
                                </h3>
                                <p className="text-[#94a3b8] leading-relaxed">
                                    We envision empowering entrepreneurs and businesses to focus on what
                                    they do best while we handle the technical heavy lifting.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom quote */}
                <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-white/5">
                    <div className="flex items-start gap-4 md:gap-6 max-w-2xl p-6 md:p-8 bg-[#111920]/40 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/5">
                        <span className="text-4xl md:text-6xl text-[#22c55e]/40 font-serif leading-none">"</span>
                        <blockquote className="text-[#e2e8f0] text-base md:text-xl italic leading-relaxed">
                            We measure our success by yours. When your business grows,
                            we've done our job right.
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

// =============================================
// VALUES SECTION
// =============================================
const ValuesSection = () => {
    const values = [
        {
            number: '01',
            title: 'Innovation',
            description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            color: '#22c55e',
        },
        {
            number: '02',
            title: 'Quality',
            description: 'Every line of code we write reflects our commitment to excellence and attention to detail.',
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ),
            color: '#fbbf24',
        },
        {
            number: '03',
            title: 'Collaboration',
            description: 'We work closely with our clients, treating their success as our own.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            color: '#3b82f6',
        },
        {
            number: '04',
            title: 'Integrity',
            description: 'Transparency and honesty guide every interaction and decision we make.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            color: '#8b5cf6',
        },
    ];

    return (
        <section className="section relative">
            <div className="absolute inset-0 bg-[#0a0f14]" />
            <div className="orb orb-navy w-[400px] md:w-[500px] h-[400px] md:h-[500px] absolute -bottom-40 -left-40 opacity-30" />

            <div className="container relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <div className="badge mb-6 mx-auto">Our Values</div>
                    <h2 className="heading-display heading-xl">
                        What Drives Us <span className="text-gradient">Daily</span>
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {values.map((value, index) => (
                        <div
                            key={value.number}
                            className="group relative"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative p-6 md:p-8 bg-[#111920]/60 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl hover:border-white/20 transition-all duration-500 h-full overflow-hidden">
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        background: `linear-gradient(135deg, ${value.color}20 0%, transparent 100%)`,
                                        border: `1px solid ${value.color}30`,
                                        color: value.color
                                    }}
                                >
                                    {value.icon}
                                </div>

                                {/* Number */}
                                <span
                                    className="text-4xl md:text-6xl font-bold opacity-10 absolute top-4 md:top-6 right-4 md:right-6"
                                    style={{ color: value.color }}
                                >
                                    {value.number}
                                </span>

                                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 relative z-10">{value.title}</h3>
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
// PROCESS SECTION
// =============================================
const ProcessSection = () => {
    const steps = [
        {
            step: '01',
            title: 'Discovery',
            description: 'We start by understanding your goals, audience, and project requirements.',
            color: '#22c55e',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
        },
        {
            step: '02',
            title: 'Design & Develop',
            description: 'Our team designs and develops with focus on user experience and scalability.',
            color: '#3b82f6',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
        },
        {
            step: '03',
            title: 'Launch & Support',
            description: 'After testing, we deploy and provide ongoing support for long-term success.',
            color: '#8b5cf6',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="section relative">
            <div className="absolute inset-0 bg-gradient-dark" />
            <div className="absolute inset-0 bg-grid opacity-10" />

            <div className="container relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <div className="badge mb-6 mx-auto">How We Work</div>
                    <h2 className="heading-display heading-xl">
                        Our <span className="text-gradient">Process</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={step.step} className="text-center relative group">
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div
                                    className="hidden md:block absolute top-16 md:top-20 left-[60%] w-full h-[2px]"
                                    style={{ background: `linear-gradient(to right, ${step.color}50, transparent)` }}
                                />
                            )}

                            {/* Icon Box */}
                            <div
                                className="w-24 h-28 md:w-28 md:h-32 mx-auto mb-6 md:mb-8 relative z-10 rounded-2xl md:rounded-3xl border flex flex-col items-center justify-center transition-all duration-500 group-hover:scale-105"
                                style={{
                                    borderColor: `${step.color}30`,
                                    background: `linear-gradient(135deg, ${step.color}15, transparent)`,
                                    boxShadow: `0 0 60px ${step.color}20`,
                                    color: step.color
                                }}
                            >
                                {step.icon}
                                <span
                                    className="text-xs font-bold uppercase tracking-widest mt-2"
                                    style={{ color: step.color }}
                                >
                                    Step {step.step}
                                </span>
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{step.title}</h3>
                            <p className="text-[#64748b] text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// =============================================
// TECH STACK SECTION
// =============================================
const TechStackSection = () => {
    const technologies = [
        {
            name: 'React', icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95z" />
                </svg>
            )
        },
        {
            name: 'Next.js', icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.021 3.509-.0026 3.3802-.0053 3.5162-.0574 3.5968-.0716.1161-.1262.1546-.2464.1691-.0973.0115-.1822.015-.2826.0103-.1515-.007-.1771-.0188-.3254-.165-.0947-.0935-.1741-.2133-.2426-.37l-.0886-.2099.0165-4.704.0184-4.7066.0928-.0889c.0746-.072.2009-.153.3146-.2012.1805-.0764.2464-.0869.6045-.0869.4063 0 .4716.0107.7144.1174.1382.0608.2426.1366.3498.254l.1264.1409 2.418 3.5755c1.3299 1.963 3.0236 4.4686 3.7641 5.5666l1.3461 1.9962.0682-.0449c.5991-.3951 1.1634-.9215 1.6449-1.5359.8166-1.0398 1.3589-2.2741 1.599-3.6341.0962-.659.108-.8537.108-1.7474s-.012-1.0884-.108-1.7476C23.4262 5.7949 20.2191 2.0091 15.8695.6065c-.7789-.2511-1.6-.4223-2.5337-.5255-.2753-.0301-1.4682-.06-1.7637-.0443zm4.3706 7.2462c.1805.0916.3146.2704.3599.4777.0187.0869.0213 1.4397.0187 4.5396l-.0027 4.4297-.7441-1.141-.7481-1.1383V11.209c0-2.4313.0093-3.5168.0266-3.5765.0401-.1311.1382-.2599.2556-.3356.1003-.0653.1346-.0736.3163-.0787.1893-.0053.2052-.0027.3058.0682z" />
                </svg>
            )
        },
        {
            name: 'Node.js', icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.277.277 0 0 0 .134-.238V6.921a.283.283 0 0 0-.137-.242l-8.791-5.072a.278.278 0 0 0-.271 0L3.075 6.68a.284.284 0 0 0-.139.241v10.15c0 .099.053.19.139.236l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.509 0-.909 0-2.026-.551L2.28 18.675a1.857 1.857 0 0 1-.922-1.605V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078c-.28.163-.602.247-.925.247z" />
                </svg>
            )
        },
        {
            name: 'TypeScript', icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                </svg>
            )
        },
        {
            name: 'Python', icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
                </svg>
            )
        },
        {
            name: 'Flutter', icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46z" />
                </svg>
            )
        },
        {
            name: 'AWS', icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.264-.168.312a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.415-.287-.807-.414l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z" />
                </svg>
            )
        },
        {
            name: 'Docker', icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z" />
                </svg>
            )
        },
    ];

    return (
        <section className="section-sm relative overflow-hidden py-12 md:py-16 border-y border-white/5">
            <div className="container">
                <div className="text-center mb-8 md:mb-10">
                    <p className="text-[#64748b] uppercase tracking-widest text-xs md:text-sm">Technologies We Master</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                    {technologies.map((tech, index) => (
                        <div
                            key={tech.name}
                            className="group flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#111920]/60 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10 hover:border-[#22c55e]/30 transition-all duration-500"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <span className="text-[#94a3b8] group-hover:text-[#22c55e] transition-colors">{tech.icon}</span>
                            <span className="text-[#94a3b8] font-medium text-sm md:text-base group-hover:text-white transition-colors">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// =============================================
// CTA
// =============================================
const CTASection = () => {
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
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#22c55e]/20 to-transparent flex items-center justify-center mx-auto mb-6 md:mb-8 border border-[#22c55e]/20">
                                <svg className="w-8 h-8 md:w-10 md:h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>

                            <h2 className="heading-display text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
                                Ready to Work <span className="text-gradient">Together?</span>
                            </h2>
                            <p className="text-[#94a3b8] text-base md:text-lg max-w-lg mx-auto mb-8 md:mb-10">
                                Let's discuss your project and see how we can help bring your vision to life.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href="/contact" className="btn btn-primary click-scale group w-full sm:w-auto justify-center">
                                    Start a Conversation
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
export default function AboutPage() {
    return (
        <>
            <HeroSection />
            <MissionVisionSection />
            <ValuesSection />
            <ProcessSection />
            <TechStackSection />
            <CTASection />
        </>
    );
}
