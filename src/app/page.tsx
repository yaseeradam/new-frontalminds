'use client';

import React from 'react';
import Link from 'next/link';

// =============================================
// HERO SECTION — Stunning first impression
// =============================================
const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden pt-24 pb-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-radial" />

      {/* Floating orbs */}
      <div className="orb orb-green w-[300px] md:w-[500px] h-[300px] md:h-[500px] absolute -top-40 -right-40 animate-float" />
      <div className="orb orb-navy w-[250px] md:w-[400px] h-[250px] md:h-[400px] absolute -bottom-20 -left-20" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div>
            {/* Badge */}
            <div className="badge mb-6 md:mb-8 animate-fade-up">
              Digital Solutions Agency
            </div>

            {/* Main Headline */}
            <h1 className="heading-display heading-hero mb-6 md:mb-8 animate-fade-up delay-100">
              We Build
              <br />
              <span className="text-gradient glow-text">Digital Experiences</span>
              <br />
              That Matter.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-[#94a3b8] leading-relaxed max-w-xl mb-8 md:mb-10 animate-fade-up delay-200">
              Pioneering the future of digital solutions. We merge innovative technology
              with clear-minded strategy to unlock your business potential.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up delay-300">
              <Link href="/projects" className="btn btn-primary w-full sm:w-auto justify-center">
                Explore Our Work
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact" className="btn btn-secondary w-full sm:w-auto justify-center">
                Start a Project
              </Link>
            </div>
          </div>

          {/* Right - Decorative Floating Elements */}
          <div className="hidden lg:block relative h-[500px] animate-fade-up delay-200">
            {/* Central glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#22c55e]/10 blur-[80px] rounded-full" />

            {/* Floating service cards */}
            <div className="absolute top-8 right-8 p-6 bg-[#111920]/80 backdrop-blur-xl border border-white/10 rounded-2xl animate-float shadow-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#22c55e]/20 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-white font-semibold">Web Development</div>
              <div className="text-[#64748b] text-sm">Modern & Fast</div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 p-6 bg-[#111920]/80 backdrop-blur-xl border border-white/10 rounded-2xl animate-float delay-200 shadow-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/20 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-white font-semibold">Mobile Apps</div>
              <div className="text-[#64748b] text-sm">iOS & Android</div>
            </div>

            <div className="absolute bottom-8 right-16 p-6 bg-[#111920]/80 backdrop-blur-xl border border-white/10 rounded-2xl animate-float delay-400 shadow-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#f43f5e]/20 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[#f43f5e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-white font-semibold">Cybersecurity</div>
              <div className="text-[#64748b] text-sm">Secure & Reliable</div>
            </div>

            {/* Decorative lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
              <line x1="100" y1="80" x2="300" y2="200" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50" y1="200" x2="280" y2="320" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>

        {/* Stats Row - Better placement below */}
        <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-white/10 animate-fade-up delay-400">
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-16 lg:gap-24">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '20+', label: 'Happy Clients' },
              { value: '5+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-4 text-center lg:text-left">
                <div className="stat-number text-3xl md:text-4xl lg:text-5xl">{stat.value}</div>
                <div className="text-[#64748b] text-xs md:text-sm uppercase tracking-wider leading-tight max-w-[100px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


// =============================================
// SERVICES SECTION — What we do
// =============================================
const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Website Development',
      description: 'Custom websites and web applications built with cutting-edge technologies. From landing pages to complex enterprise platforms.',
      tags: ['Next.js', 'React', 'Node.js'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that users love. Beautiful, fast, and reliable apps for iOS and Android.',
      tags: ['Flutter', 'React Native', 'Firebase'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets. Penetration testing, audits, and ongoing protection.',
      tags: ['Security Audits', 'Pen Testing', 'Compliance'],
    },
  ];

  return (
    <section className="section relative">
      <div className="absolute inset-0 bg-gradient-dark" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="badge mb-6 mx-auto">Our Expertise</div>
          <h2 className="heading-display heading-xl mb-4">
            What We <span className="text-gradient">Do Best</span>
          </h2>
          <p className="text-[#94a3b8] text-base md:text-lg max-w-2xl mx-auto">
            We deliver cutting-edge digital solutions tailored to your business needs.
            From concept to launch, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="icon-box icon-box-lg mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-[#94a3b8] mb-6 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-[#64748b] border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================
// PROJECTS PREVIEW — Showcase work
// =============================================
const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-featured online store with seamless payments',
      gradient: 'from-[#22c55e] to-[#14b8a6]',
    },
    {
      title: 'Health & Fitness App',
      category: 'Mobile Development',
      description: 'Cross-platform fitness tracking application',
      gradient: 'from-[#3b82f6] to-[#8b5cf6]',
    },
    {
      title: 'Security Dashboard',
      category: 'Cybersecurity',
      description: 'Real-time threat monitoring and analytics',
      gradient: 'from-[#f43f5e] to-[#f97316]',
    },
  ];

  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0f14]" />
      <div className="orb orb-green w-[300px] md:w-[400px] h-[300px] md:h-[400px] absolute top-1/4 -right-40" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="badge mb-6">Our Portfolio</div>
            <h2 className="heading-display heading-xl">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <Link href="/projects" className="btn btn-ghost text-[#22c55e]">
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group cursor-pointer"
            >
              <div className={`project-card-image bg-gradient-to-br ${project.gradient}`}>
                <span className="text-white/80 font-medium z-10 relative">{project.category}</span>
              </div>
              <div className="p-4 md:p-6">
                <span className="badge text-xs mb-3">{project.category}</span>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#22c55e] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#64748b] text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================
// STATS SECTION — Premium animated icons
// =============================================
const StatsSection = () => {
  const stats = [
    {
      value: '50+',
      label: 'Projects Completed',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: '#22c55e',
    },
    {
      value: '98%',
      label: 'Client Satisfaction',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      color: '#fbbf24',
    },
    {
      value: '24/7',
      label: 'Support Available',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: '#3b82f6',
    },
    {
      value: '5+',
      label: 'Years of Excellence',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: '#f43f5e',
    },
  ];

  return (
    <section className="section-sm relative overflow-hidden py-16 md:py-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#0a0f14]" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Animated background orbs */}
      <div className="orb orb-green w-[200px] md:w-[300px] h-[200px] md:h-[300px] absolute -top-20 left-1/4 opacity-20 animate-float" />
      <div className="orb orb-navy w-[250px] md:w-[400px] h-[250px] md:h-[400px] absolute -bottom-20 right-1/4 opacity-30" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="badge mb-6 mx-auto">Why Choose Us</div>
          <h2 className="heading-display heading-lg mb-4">
            Numbers That <span className="text-gradient">Speak</span>
          </h2>
          <p className="text-[#94a3b8] text-base md:text-lg max-w-2xl mx-auto">
            Our track record of excellence speaks for itself
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#111920]/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden h-full">
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: `radial-gradient(circle at center, ${stat.color}15 0%, transparent 70%)`,
                    boxShadow: `0 0 60px ${stat.color}20`
                  }}
                />

                {/* Icon container */}
                <div className="relative mb-4 md:mb-6">
                  <div
                    className="w-14 h-14 md:w-20 md:h-20 mx-auto rounded-xl md:rounded-2xl flex items-center justify-center relative overflow-hidden transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${stat.color}20 0%, ${stat.color}05 100%)`,
                      border: `1px solid ${stat.color}30`,
                      color: stat.color
                    }}
                  >
                    {stat.icon}
                  </div>
                </div>

                {/* Value */}
                <div className="text-center mb-2 md:mb-3">
                  <span
                    className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${stat.color} 0%, #ffffff 100%)`
                    }}
                  >
                    {stat.value}
                  </span>
                </div>

                {/* Label */}
                <p className="text-center text-[#94a3b8] font-medium text-xs md:text-sm uppercase tracking-wider">
                  {stat.label}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 group-hover:w-1/2 transition-all duration-500 rounded-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
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
// TESTIMONIALS SECTION
// =============================================
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "FrontalMinds delivered a stunning website that perfectly captured our brand's vision. Their team was professional, responsive, and a pleasure to work with.",
      author: 'Alex Johnson',
      role: 'CEO, Innovate Inc.',
      avatar: 'AJ',
    },
    {
      quote: "The mobile app they developed is a masterpiece of design and functionality. It has significantly improved our customer engagement and streamlined our operations.",
      author: 'Samantha Lee',
      role: 'Marketing Director, MobileFirst',
      avatar: 'SL',
    },
  ];

  return (
    <section className="section relative">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="orb orb-navy w-[400px] md:w-[600px] h-[400px] md:h-[600px] absolute -bottom-40 left-1/2 -translate-x-1/2" />

      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="badge mb-6 mx-auto">Testimonials</div>
          <h2 className="heading-display heading-xl">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="testimonial-card">
              <p className="text-base md:text-lg text-[#e2e8f0] leading-relaxed mb-6 md:mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#22c55e] to-[#14b8a6] flex items-center justify-center text-white font-bold text-sm md:text-base">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm md:text-base">{testimonial.author}</div>
                  <div className="text-[#64748b] text-xs md:text-sm">{testimonial.role}</div>
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
// TECH STACK SECTION — Enhanced with marquee
// =============================================
const TechStackSection = () => {
  const technologies = [
    'Next.js', 'React', 'TypeScript', 'Node.js',
    'Tailwind CSS', 'Firebase', 'Flutter', 'Docker',
    'PostgreSQL', 'AWS', 'Python', 'GraphQL'
  ];

  return (
    <section className="section-sm border-y border-white/5 overflow-hidden">
      <div className="container mb-8">
        <div className="text-center">
          <p className="text-[#64748b] uppercase tracking-widest text-xs md:text-sm">
            Our Technology Stack
          </p>
        </div>
      </div>

      {/* Marquee animation */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#0a0f14] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#0a0f14] to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...technologies, ...technologies].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex-shrink-0 px-4 md:px-8 py-4 text-base md:text-xl font-semibold text-[#64748b]/50 hover:text-[#22c55e] transition-colors cursor-default whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================
// TRUSTED BY SECTION — Social proof
// =============================================
const TrustedBySection = () => {
  const clients = [
    { name: 'TechNova', type: 'Startup' },
    { name: 'DataFlow', type: 'Enterprise' },
    { name: 'SecureNet', type: 'Security' },
    { name: 'GrowthLabs', type: 'Marketing' },
    { name: 'CloudFirst', type: 'SaaS' },
    { name: 'FinEdge', type: 'Fintech' },
  ];

  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="orb orb-green w-[300px] md:w-[400px] h-[300px] md:h-[400px] absolute -bottom-40 right-1/4 opacity-30" />

      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="badge mb-6 mx-auto">Trusted Partners</div>
          <h2 className="heading-display heading-lg mb-4">
            Companies That <span className="text-gradient">Trust Us</span>
          </h2>
          <p className="text-[#94a3b8] text-base md:text-lg max-w-2xl mx-auto">
            We've helped businesses of all sizes transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group relative p-4 md:p-6 bg-[#111920]/50 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl hover:border-[#22c55e]/40 hover:bg-[#111920]/80 transition-all duration-500 cursor-default"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Company icon */}
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#22c55e]/20 to-[#14b8a6]/10 flex items-center justify-center border border-[#22c55e]/20 group-hover:border-[#22c55e]/50 transition-all duration-500 group-hover:scale-110">
                <span className="text-lg md:text-2xl font-bold text-[#22c55e]">{client.name[0]}</span>
              </div>
              <div className="text-center relative z-10">
                <div className="text-white font-semibold mb-1 text-sm md:text-base group-hover:text-[#22c55e] transition-colors duration-300">{client.name}</div>
                <div className="text-[#64748b] text-xs uppercase tracking-wider">{client.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =============================================
// MAIN PAGE
// =============================================
export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <ServicesSection />
      <ProjectsSection />
      <StatsSection />
      <TrustedBySection />
      <TestimonialsSection />
    </>
  );
}
