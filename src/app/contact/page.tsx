'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TwitterIcon, LinkedInIcon, GitHubIcon, InstagramIcon } from '@/components/SocialIcons';

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
                        <div className="badge mb-6">Contact Us</div>
                        <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
                            Let's Start a
                            <br />
                            <span className="text-gradient glow-text">Conversation</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[#94a3b8] leading-relaxed max-w-xl">
                            Have a project in mind? Questions about our services?
                            We'd love to hear from you. Reach out and let's make something great together.
                        </p>

                        {/* Quick contact stats */}
                        <div className="flex flex-wrap gap-6 md:gap-8 mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/10">
                            {[
                                {
                                    icon: (
                                        <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    ), label: '24hr Response'
                                },
                                {
                                    icon: (
                                        <svg className="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ), label: 'Global Clients'
                                },
                                {
                                    icon: (
                                        <svg className="w-5 h-5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    ), label: 'Always Available'
                                },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <span className="text-[#94a3b8] text-sm font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="hidden lg:block relative h-[400px] animate-fade-up delay-200">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#22c55e]/10 blur-[80px] rounded-full" />

                        {/* Floating contact methods */}
                        <div className="absolute top-4 right-8 px-6 py-4 bg-[#111920]/80 backdrop-blur-xl border border-[#22c55e]/30 rounded-2xl animate-float shadow-2xl group hover:border-[#22c55e] transition-all duration-500">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#22c55e]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Email Us</div>
                                    <div className="text-[#64748b] text-sm">hello@frontalminds.com</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-1/2 -translate-y-1/2 left-0 px-6 py-4 bg-[#111920]/80 backdrop-blur-xl border border-[#3b82f6]/30 rounded-2xl animate-float delay-200 shadow-2xl group hover:border-[#3b82f6] transition-all duration-500">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Response Time</div>
                                    <div className="text-[#64748b] text-sm">Within 24 hours</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-8 right-16 px-6 py-4 bg-[#111920]/80 backdrop-blur-xl border border-[#f97316]/30 rounded-2xl animate-float delay-400 shadow-2xl group hover:border-[#f97316] transition-all duration-500">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#f97316]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Location</div>
                                    <div className="text-[#64748b] text-sm">Lagos, Nigeria</div>
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
// CONTACT FORM & INFO
// =============================================
const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(r => setTimeout(r, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: 'Email',
            value: 'hello@frontalminds.com',
            link: 'mailto:hello@frontalminds.com',
            color: '#22c55e',
            description: 'Send us an email anytime',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: 'Location',
            value: 'Lagos, Nigeria',
            color: '#3b82f6',
            description: 'West Africa',
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            label: 'Response Time',
            value: 'Within 24 hours',
            color: '#f97316',
            description: 'We respond quickly',
        },
    ];

    const socialLinks = [
        { name: 'Twitter', icon: <TwitterIcon className="w-5 h-5" />, href: 'https://twitter.com' },
        { name: 'LinkedIn', icon: <LinkedInIcon className="w-5 h-5" />, href: 'https://linkedin.com' },
        { name: 'GitHub', icon: <GitHubIcon className="w-5 h-5" />, href: 'https://github.com' },
        { name: 'Instagram', icon: <InstagramIcon className="w-5 h-5" />, href: 'https://instagram.com' },
    ];

    if (isSubmitted) {
        return (
            <section className="section">
                <div className="container">
                    <div className="gradient-border p-[1px] rounded-2xl md:rounded-3xl max-w-lg mx-auto">
                        <div className="bg-[#0a0f14] rounded-2xl md:rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid opacity-20" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#22c55e]/10 blur-[80px] rounded-full" />

                            <div className="relative z-10">
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-2xl shadow-[#22c55e]/30">
                                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="heading-display text-2xl md:text-3xl mb-4">Message Sent!</h2>
                                <p className="text-[#94a3b8] mb-6 md:mb-8 leading-relaxed">
                                    Thank you for reaching out. We'll get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="btn btn-secondary click-scale"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="section relative">
            <div className="absolute inset-0 bg-gradient-dark" />
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="orb orb-navy w-[400px] md:w-[500px] h-[400px] md:h-[500px] absolute -bottom-60 -right-40" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="gradient-border p-[1px] rounded-2xl md:rounded-3xl">
                            <div className="bg-[#0a0f14] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#22c55e]/5 blur-[80px] rounded-full" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#22c55e]/20 flex items-center justify-center">
                                            <svg className="w-5 h-5 md:w-6 md:h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white">Send us a message</h3>
                                            <p className="text-[#64748b] text-sm">We'll get back to you shortly.</p>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6 mt-6 md:mt-8">
                                        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                            <div className="group">
                                                <label className={`block text-sm font-medium mb-2 transition-colors ${focusedField === 'name' ? 'text-[#22c55e]' : 'text-[#94a3b8]'}`}>
                                                    Your Name *
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        required
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        onFocus={() => setFocusedField('name')}
                                                        onBlur={() => setFocusedField(null)}
                                                        placeholder="John Doe"
                                                        className="input w-full focus:ring-2 focus:ring-[#22c55e]/20 pl-12"
                                                    />
                                                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <label className={`block text-sm font-medium mb-2 transition-colors ${focusedField === 'email' ? 'text-[#22c55e]' : 'text-[#94a3b8]'}`}>
                                                    Email Address *
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        onFocus={() => setFocusedField('email')}
                                                        onBlur={() => setFocusedField(null)}
                                                        placeholder="john@example.com"
                                                        className="input w-full focus:ring-2 focus:ring-[#22c55e]/20 pl-12"
                                                    />
                                                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className={`block text-sm font-medium mb-2 transition-colors ${focusedField === 'subject' ? 'text-[#22c55e]' : 'text-[#94a3b8]'}`}>
                                                Subject
                                            </label>
                                            <div className="relative">
                                                <select
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('subject')}
                                                    onBlur={() => setFocusedField(null)}
                                                    className="input w-full focus:ring-2 focus:ring-[#22c55e]/20 pl-12 appearance-none cursor-pointer"
                                                >
                                                    <option value="">Select a topic</option>
                                                    <option value="general">General Inquiry</option>
                                                    <option value="project">Project Discussion</option>
                                                    <option value="support">Support</option>
                                                    <option value="partnership">Partnership</option>
                                                </select>
                                                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                                </svg>
                                                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748b] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div>
                                            <label className={`block text-sm font-medium mb-2 transition-colors ${focusedField === 'message' ? 'text-[#22c55e]' : 'text-[#94a3b8]'}`}>
                                                Message *
                                            </label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('message')}
                                                onBlur={() => setFocusedField(null)}
                                                placeholder="Tell us about your project or question..."
                                                className="input w-full resize-none focus:ring-2 focus:ring-[#22c55e]/20"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn btn-primary w-full md:w-auto click-scale group"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-5 space-y-4 md:space-y-6">
                        {/* Contact Cards */}
                        {contactInfo.map((info, index) => (
                            <div
                                key={info.label}
                                className="group relative p-5 md:p-6 bg-[#111920]/60 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl hover:border-white/20 transition-all duration-500"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-start gap-4 relative z-10">
                                    <div
                                        className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110"
                                        style={{
                                            background: `linear-gradient(135deg, ${info.color}20, transparent)`,
                                            borderColor: `${info.color}30`,
                                            color: info.color
                                        }}
                                    >
                                        {info.icon}
                                    </div>
                                    <div>
                                        <div className="text-sm text-[#64748b] mb-1">{info.label}</div>
                                        {info.link ? (
                                            <a href={info.link} className="text-white font-semibold hover:text-[#22c55e] transition-colors text-base md:text-lg">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <div className="text-white font-semibold text-base md:text-lg">{info.value}</div>
                                        )}
                                        <div className="text-[#64748b] text-sm mt-1">{info.description}</div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Social Links */}
                        <div className="p-5 md:p-6 bg-[#111920]/60 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl">
                            <h4 className="text-sm font-medium text-[#94a3b8] mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                                Follow Us
                            </h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="group relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sm md:text-base font-medium text-[#64748b] hover:text-white hover:border-white/20 transition-all duration-500 overflow-hidden click-scale"
                                    >
                                        <span className="relative z-10 group-hover:scale-110 transition-transform duration-500">{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Map placeholder */}
                        <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 group">
                            <div className="w-full h-48 md:h-56 bg-gradient-to-br from-[#1e3a5f] to-[#0f1d2f] flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-grid opacity-30" />

                                <div className="text-center relative z-10">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center mx-auto mb-4 shadow-xl shadow-[#22c55e]/30 group-hover:scale-110 transition-transform duration-500">
                                        <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-white font-semibold text-base md:text-lg">Lagos, Nigeria</p>
                                    <p className="text-[#64748b] text-sm">West Africa</p>
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
// FAQ SECTION
// =============================================
const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: 'What services does FrontalMinds offer?',
            answer: 'We specialize in web development, mobile app development, and cybersecurity solutions. Our team builds custom websites, cross-platform mobile apps, and provides comprehensive security audits and protection.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            question: 'How long does a typical project take?',
            answer: 'Project timelines vary based on complexity. A simple website might take 2-4 weeks, while a complex mobile app could take 3-6 months. We\'ll provide a detailed timeline during our initial consultation.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            question: 'What is your pricing model?',
            answer: 'We offer both fixed-price and hourly billing models depending on the project requirements. We provide detailed quotes after understanding your specific needs during our discovery phase.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            question: 'Do you provide ongoing support after launch?',
            answer: 'Yes! We offer various support and maintenance packages to ensure your project continues to run smoothly. This includes bug fixes, updates, security patches, and feature enhancements.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
        {
            question: 'Can you work with existing codebases?',
            answer: 'Absolutely. We can take over existing projects, perform code audits, and implement improvements or new features. We\'re experienced in working with various tech stacks and legacy systems.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="section relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0f14]" />
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="orb orb-green w-[300px] md:w-[400px] h-[300px] md:h-[400px] absolute -top-40 left-1/4 opacity-20" />

            <div className="container relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <div className="badge mb-6 mx-auto">FAQ</div>
                    <h2 className="heading-display heading-lg mb-4">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h2>
                    <p className="text-[#94a3b8] text-base md:text-lg max-w-2xl mx-auto">
                        Find answers to common questions about our services and process.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`relative border rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 ${openIndex === index
                                ? 'border-[#22c55e]/30 bg-[#22c55e]/5'
                                : 'border-white/10 bg-[#111920]/40 hover:border-white/20'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-4 md:p-6 text-left relative z-10"
                            >
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? 'bg-[#22c55e]/20 text-[#22c55e]' : 'bg-white/5 text-[#64748b]'}`}>
                                        {faq.icon}
                                    </div>
                                    <span className="text-white font-semibold pr-4 text-sm md:text-base">{faq.question}</span>
                                </div>
                                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${openIndex === index
                                    ? 'bg-[#22c55e] text-white rotate-180'
                                    : 'bg-white/5 text-[#64748b]'
                                    }`}>
                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                <div className="px-4 md:px-6 pb-4 md:pb-6 pl-14 md:pl-20 text-[#94a3b8] leading-relaxed text-sm md:text-base relative z-10">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12 md:mt-16">
                    <p className="text-[#64748b] mb-4">Still have questions?</p>
                    <a href="mailto:hello@frontalminds.com" className="btn btn-secondary click-scale inline-flex">
                        Contact Our Team
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

// =============================================
// MAIN PAGE
// =============================================
export default function ContactPage() {
    return (
        <>
            <HeroSection />
            <ContactSection />
            <FAQSection />
        </>
    );
}
