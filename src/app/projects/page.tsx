'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';

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
            <div className="orb orb-navy w-[250px] md:w-[400px] h-[250px] md:h-[400px] absolute bottom-0 -left-40" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="animate-fade-up">
                        <div className="badge mb-6">Our Portfolio</div>
                        <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
                            Projects That
                            <br />
                            <span className="text-gradient glow-text">Speak for Us</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[#94a3b8] leading-relaxed mb-8 max-w-xl">
                            Explore our portfolio of real-world projects that showcase our expertise
                            in modern development and digital innovation.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-6 md:gap-8 pt-6 border-t border-white/10">
                            {[
                                {
                                    value: `${projects.length}+`, label: 'Projects', icon: (
                                        <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    )
                                },
                                {
                                    value: '98%', label: 'Satisfaction', icon: (
                                        <svg className="w-5 h-5 text-[#fbbf24]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    )
                                },
                                {
                                    value: '24/7', label: 'Support', icon: (
                                        <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                    <div className="hidden lg:block relative h-[450px] animate-fade-up delay-200">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#22c55e]/10 blur-[80px] rounded-full" />

                        {/* Floating category cards */}
                        <div className="absolute top-4 right-8 px-6 py-4 bg-[#111920]/80 backdrop-blur-xl border border-[#22c55e]/30 rounded-2xl animate-float shadow-2xl group hover:border-[#22c55e] transition-all duration-500">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#22c55e]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Web Development</div>
                                    <div className="text-[#64748b] text-sm">Modern & Fast</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-1/2 -translate-y-1/2 left-0 px-6 py-4 bg-[#111920]/80 backdrop-blur-xl border border-[#3b82f6]/30 rounded-2xl animate-float delay-200 shadow-2xl group hover:border-[#3b82f6] transition-all duration-500">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Mobile Apps</div>
                                    <div className="text-[#64748b] text-sm">iOS & Android</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-8 right-16 px-6 py-4 bg-[#111920]/80 backdrop-blur-xl border border-[#f43f5e]/30 rounded-2xl animate-float delay-400 shadow-2xl group hover:border-[#f43f5e] transition-all duration-500">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#f43f5e]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-[#f43f5e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Cybersecurity</div>
                                    <div className="text-[#64748b] text-sm">Secure & Reliable</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// =============================================
// PROJECTS GRID
// =============================================
const ProjectsSection = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = [
        {
            name: 'All', icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
            )
        },
        {
            name: 'Web Development', icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            )
        },
        {
            name: 'Mobile Apps', icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            name: 'Cybersecurity', icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            )
        },
    ];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section className="section relative">
            <div className="absolute inset-0 bg-gradient-dark" />
            <div className="absolute inset-0 bg-grid opacity-10" />

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="heading-display heading-lg mb-4">
                        Browse Our <span className="text-gradient">Work</span>
                    </h2>
                    <p className="text-[#94a3b8] text-base md:text-lg max-w-2xl mx-auto">
                        Filter through our portfolio to find projects that match your interests.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 md:mb-16">
                    {filters.map((filter) => (
                        <button
                            key={filter.name}
                            onClick={() => setActiveFilter(filter.name)}
                            className={`group flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-medium text-sm md:text-base transition-all duration-500 ${activeFilter === filter.name
                                ? 'bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white shadow-lg shadow-[#22c55e]/25'
                                : 'bg-[#111920]/60 backdrop-blur-xl text-[#94a3b8] border border-white/10 hover:border-[#22c55e]/50 hover:text-white'
                                }`}
                        >
                            {filter.icon}
                            <span className="hidden sm:inline">{filter.name}</span>
                        </button>
                    ))}
                </div>

                {/* Projects Counter */}
                <div className="text-center mb-6 md:mb-8">
                    <span className="text-[#64748b] text-sm">
                        Showing <span className="text-[#22c55e] font-semibold">{filteredProjects.length}</span> projects
                    </span>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {filteredProjects.map((project, index) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#111920]/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-3"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Image Container */}
                            <div className={`relative aspect-[16/10] bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500">
                                            <span className="text-white text-xl md:text-3xl font-bold">{project.title[0]}</span>
                                        </div>
                                        <span className="text-white/90 font-medium text-xs md:text-sm">{project.category}</span>
                                    </div>
                                </div>

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111920] via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-4 md:p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-3 py-1 rounded-full bg-[#22c55e]/10 text-[#22c55e] text-xs font-medium border border-[#22c55e]/20">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#22c55e] transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-[#64748b] text-sm mb-4 md:mb-5 leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4 md:mb-5">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-white/5 text-[#94a3b8] border border-white/5"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* View link */}
                                <div className="flex items-center text-[#22c55e] text-sm font-medium">
                                    <span>View Details</span>
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#22c55e] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </Link>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16 md:py-20">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white/5 flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-[#64748b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
                        <p className="text-[#64748b]">Try selecting a different category</p>
                    </div>
                )}
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
            number: '01',
            title: 'Discovery',
            description: 'We dive deep into understanding your vision, goals, and requirements.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            color: '#22c55e',
        },
        {
            number: '02',
            title: 'Design',
            description: 'Creating stunning, user-centered designs that captivate and convert.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            color: '#3b82f6',
        },
        {
            number: '03',
            title: 'Development',
            description: 'Building robust, scalable solutions with cutting-edge technologies.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            color: '#8b5cf6',
        },
        {
            number: '04',
            title: 'Delivery',
            description: 'Launching your project with comprehensive testing and ongoing support.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
            color: '#f43f5e',
        },
    ];

    return (
        <section className="section relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0f14]" />
            <div className="orb orb-navy w-[400px] md:w-[600px] h-[400px] md:h-[600px] absolute -top-40 -left-40" />

            <div className="container relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <div className="badge mb-6 mx-auto">Our Process</div>
                    <h2 className="heading-display heading-lg mb-4">
                        How We <span className="text-gradient">Work</span>
                    </h2>
                    <p className="text-[#94a3b8] text-base md:text-lg max-w-2xl mx-auto">
                        A streamlined process that delivers exceptional results every time.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className="group relative"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#111920]/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                                {/* Step number */}
                                <div
                                    className="text-4xl md:text-6xl font-bold opacity-10 absolute top-4 right-4"
                                    style={{ color: step.color }}
                                >
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div
                                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-transform duration-500 group-hover:scale-110"
                                    style={{
                                        background: `linear-gradient(135deg, ${step.color}20 0%, ${step.color}05 100%)`,
                                        border: `1px solid ${step.color}30`,
                                        color: step.color
                                    }}
                                >
                                    {step.icon}
                                </div>

                                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{step.title}</h3>
                                <p className="text-[#94a3b8] text-sm leading-relaxed">{step.description}</p>

                                {/* Bottom line */}
                                <div
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 group-hover:w-1/2 transition-all duration-500 rounded-full"
                                    style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }}
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
// CTA
// =============================================
const CTASection = () => {
    return (
        <section className="section relative overflow-hidden">
            <div className="orb orb-green w-[400px] md:w-[600px] h-[400px] md:h-[600px] absolute -bottom-40 left-1/2 -translate-x-1/2 opacity-30" />

            <div className="container relative z-10">
                <div className="relative">
                    <div className="gradient-border p-[1px] rounded-2xl md:rounded-3xl">
                        <div className="relative bg-[#0a0f14] rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-20 text-center overflow-hidden">
                            {/* Background glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#22c55e]/10 blur-[120px] rounded-full" />

                            {/* Grid pattern */}
                            <div className="absolute inset-0 bg-grid opacity-20" />

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-[#22c55e]/20 flex items-center justify-center mx-auto mb-6 md:mb-8 animate-float">
                                    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>

                                <h2 className="heading-display text-2xl md:text-4xl lg:text-5xl mb-4">
                                    Have a Project in <span className="text-gradient">Mind?</span>
                                </h2>
                                <p className="text-[#94a3b8] text-base md:text-lg max-w-xl mx-auto mb-8 md:mb-10">
                                    Let's discuss how we can bring your vision to life with cutting-edge technology and stunning design.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link href="/contact" className="btn btn-primary click-scale w-full sm:w-auto justify-center">
                                        Start Your Project
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                    <a href="mailto:hello@frontalminds.com" className="btn btn-secondary click-scale w-full sm:w-auto justify-center">
                                        Email Us Directly
                                    </a>
                                </div>
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
export default function ProjectsPage() {
    return (
        <>
            <HeroSection />
            <ProjectsSection />
            <ProcessSection />
            <CTASection />
        </>
    );
}
