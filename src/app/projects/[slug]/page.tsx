'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getProjectBySlug, projects } from '@/data/projects';

export default function ProjectDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = getProjectBySlug(slug);

    if (!project) {
        return (
            <section className="min-h-screen flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="heading-display heading-lg md:heading-xl mb-4">Project Not Found</h1>
                    <p className="text-[#94a3b8] mb-8 text-sm md:text-base">The project you're looking for doesn't exist.</p>
                    <Link href="/projects" className="btn btn-primary">
                        Back to Projects
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <section className="pt-24 md:pt-32 pb-12 md:pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className={`absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-[80px] md:blur-[120px] opacity-20 bg-gradient-to-br ${project.gradient}`} />

                <div className="container relative z-10">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-xs md:text-sm mb-6 md:mb-8 overflow-x-auto pb-2">
                        <Link href="/projects" className="text-[#64748b] hover:text-white transition-colors whitespace-nowrap">
                            Projects
                        </Link>
                        <span className="text-[#64748b]">/</span>
                        <span className="text-[#22c55e] truncate">{project.title}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div>
                            <div className="badge mb-4 md:mb-6 text-xs md:text-sm">{project.category}</div>
                            <h1 className="heading-display text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
                                {project.title}
                            </h1>
                            <p className="text-base md:text-xl text-[#94a3b8] leading-relaxed mb-6 md:mb-8">
                                {project.fullDescription}
                            </p>

                            {/* Quick Info */}
                            <div className="grid grid-cols-3 gap-4 md:flex md:flex-wrap md:gap-6 mb-6 md:mb-8">
                                <div className="text-center md:text-left">
                                    <div className="text-[#64748b] text-xs md:text-sm mb-1">Duration</div>
                                    <div className="text-white font-medium text-sm md:text-base">{project.duration}</div>
                                </div>
                                <div className="text-center md:text-left">
                                    <div className="text-[#64748b] text-xs md:text-sm mb-1">Year</div>
                                    <div className="text-white font-medium text-sm md:text-base">{project.year}</div>
                                </div>
                                <div className="text-center md:text-left">
                                    <div className="text-[#64748b] text-xs md:text-sm mb-1">Client</div>
                                    <div className="text-white font-medium text-sm md:text-base">{project.client}</div>
                                </div>
                            </div>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 text-white text-xs md:text-sm border border-white/10"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Project Visual - Show on mobile too with smaller size */}
                        <div className="relative h-[250px] md:h-[400px] mt-6 lg:mt-0">
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl md:rounded-3xl opacity-20`} />
                            <div className={`absolute inset-2 md:inset-4 bg-gradient-to-br ${project.gradient} rounded-xl md:rounded-2xl flex items-center justify-center`}>
                                <div className="text-center">
                                    <div className="w-14 h-14 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-white/20 flex items-center justify-center">
                                        <svg className="w-7 h-7 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="text-white/90 font-bold text-base md:text-xl">{project.category}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge & Solution */}
            <section className="section relative">
                <div className="absolute inset-0 bg-gradient-dark" />

                <div className="container relative z-10">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                        {/* Challenge */}
                        <div className="glass-card p-5 md:p-8">
                            <div className="flex items-center gap-3 mb-4 md:mb-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#f43f5e]/20 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#f43f5e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-white">The Challenge</h3>
                            </div>
                            <p className="text-[#94a3b8] leading-relaxed text-sm md:text-base">{project.challenge}</p>
                        </div>

                        {/* Solution */}
                        <div className="glass-card p-5 md:p-8">
                            <div className="flex items-center gap-3 mb-4 md:mb-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#22c55e]/20 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-white">Our Solution</h3>
                            </div>
                            <p className="text-[#94a3b8] leading-relaxed text-sm md:text-base">{project.solution}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section relative">
                <div className="container relative z-10">
                    <div className="text-center mb-8 md:mb-12">
                        <div className="badge mb-4 md:mb-6 mx-auto text-xs md:text-sm">Key Features</div>
                        <h2 className="heading-display text-2xl md:heading-lg">
                            What We <span className="text-gradient">Delivered</span>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
                        {project.features.map((feature, index) => (
                            <div
                                key={feature}
                                className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 hover:border-[#22c55e]/30 transition-colors"
                            >
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-[#22c55e]/20 flex items-center justify-center shrink-0">
                                    <svg className="w-3 h-3 md:w-4 md:h-4 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-white text-sm md:text-base">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Projects */}
            <section className="section relative">
                <div className="absolute inset-0 bg-gradient-dark" />

                <div className="container relative z-10">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="heading-display text-2xl md:heading-lg">
                            Other <span className="text-gradient">Projects</span>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {projects
                            .filter(p => p.slug !== project.slug)
                            .slice(0, 3)
                            .map((otherProject) => (
                                <Link
                                    key={otherProject.slug}
                                    href={`/projects/${otherProject.slug}`}
                                    className="group"
                                >
                                    <div className="glass-card-subtle overflow-hidden hover-lift hover-border">
                                        <div className={`h-24 md:h-32 bg-gradient-to-br ${otherProject.gradient} flex items-center justify-center`}>
                                            <span className="text-white/90 font-bold text-sm md:text-base">{otherProject.category}</span>
                                        </div>
                                        <div className="p-4 md:p-6">
                                            <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-[#22c55e] transition-colors">
                                                {otherProject.title}
                                            </h3>
                                            <p className="text-[#64748b] text-xs md:text-sm line-clamp-2">{otherProject.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>

                    <div className="text-center mt-8 md:mt-10">
                        <Link href="/projects" className="btn btn-secondary">
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section relative overflow-hidden">
                <div className="orb orb-green w-[300px] md:w-[500px] h-[300px] md:h-[500px] absolute -bottom-40 left-1/2 -translate-x-1/2" />

                <div className="container relative z-10">
                    <div className="glass-card p-6 md:p-12 lg:p-16 text-center max-w-3xl mx-auto">
                        <h2 className="heading-display text-2xl md:heading-lg mb-3 md:mb-4">
                            Like What You <span className="text-gradient">See?</span>
                        </h2>
                        <p className="text-[#94a3b8] text-sm md:text-lg mb-6 md:mb-8">
                            Let's discuss how we can create something amazing for your business.
                        </p>
                        <Link href="/contact" className="btn btn-primary">
                            Start Your Project
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
