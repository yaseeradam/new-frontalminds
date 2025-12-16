'use client';

import React, { useState, useEffect } from 'react';

interface TeamMember {
    _id?: string;
    name: string;
    role: string;
    bio: string;
    initials: string;
    gradient: string;
    color: string;
    skills: string[];
    email?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
    image?: string;
}

const gradientOptions = [
    { value: 'from-[#22c55e] to-[#16a34a]', color: '#22c55e', label: 'Green' },
    { value: 'from-[#3b82f6] to-[#2563eb]', color: '#3b82f6', label: 'Blue' },
    { value: 'from-[#f97316] to-[#ea580c]', color: '#f97316', label: 'Orange' },
    { value: 'from-[#8b5cf6] to-[#7c3aed]', color: '#8b5cf6', label: 'Purple' },
    { value: 'from-[#ec4899] to-[#db2777]', color: '#ec4899', label: 'Pink' },
    { value: 'from-[#06b6d4] to-[#0891b2]', color: '#06b6d4', label: 'Cyan' },
];

export default function TeamManager({ onUpdate }: { onUpdate?: () => void }) {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [formData, setFormData] = useState<Partial<TeamMember>>({
        name: '',
        role: '',
        bio: '',
        initials: '',
        gradient: 'from-[#22c55e] to-[#16a34a]',
        color: '#22c55e',
        skills: [],
        email: '',
        linkedin: '',
        twitter: '',
        github: '',
    });

    useEffect(() => {
        fetchTeamMembers();
    }, []);

    const fetchTeamMembers = async () => {
        try {
            const res = await fetch('/api/team');
            const data = await res.json();
            setTeamMembers(data);
        } catch (error) {
            console.error('Failed to fetch team members:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGradientChange = (gradient: string, color: string) => {
        setFormData({ ...formData, gradient, color });
    };

    const handleSkillsInput = (value: string) => {
        const skills = value.split(',').map(item => item.trim()).filter(item => item);
        setFormData({ ...formData, skills });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            const url = editingMember ? `/api/team/${editingMember._id}` : '/api/team';
            const method = editingMember ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                await fetchTeamMembers();
                onUpdate?.();
                setIsModalOpen(false);
                resetForm();
            } else {
                alert('Failed to save team member');
            }
        } catch (error) {
            console.error('Error saving team member:', error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleEdit = (member: TeamMember) => {
        setEditingMember(member);
        setFormData(member);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to remove this team member?')) return;

        try {
            const res = await fetch(`/api/team/${id}`, { method: 'DELETE' });
            if (res.ok) {
                await fetchTeamMembers();
                onUpdate?.();
            }
        } catch (error) {
            console.error('Error deleting team member:', error);
        }
    };

    const resetForm = () => {
        setEditingMember(null);
        setFormData({
            name: '',
            role: '',
            bio: '',
            initials: '',
            gradient: 'from-[#22c55e] to-[#16a34a]',
            color: '#22c55e',
            skills: [],
            email: '',
            linkedin: '',
            twitter: '',
            github: '',
        });
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="w-8 h-8 border-4 border-[#22c55e]/20 border-t-[#22c55e] rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="heading-display text-2xl md:text-3xl mb-2">Team</h1>
                    <p className="text-[#94a3b8] text-sm md:text-base">Manage your team members</p>
                </div>
                <button
                    onClick={() => {
                        resetForm();
                        setIsModalOpen(true);
                    }}
                    className="btn btn-primary"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Team Member
                </button>
            </div>

            {/* Team Grid */}
            {teamMembers.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {teamMembers.map((member) => (
                        <div
                            key={member._id}
                            className="group bg-[#111920]/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
                        >
                            {/* Header with Avatar */}
                            <div className="p-4 md:p-6 text-center relative">
                                {/* Background Decoration */}
                                <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-br ${member.gradient} opacity-10`} />

                                {/* Avatar */}
                                <div className="relative inline-block mb-3 md:mb-4">
                                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform`}>
                                        <span className="text-white font-black text-xl md:text-2xl">{member.initials}</span>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-6 h-6 md:w-8 md:h-8 rounded-lg bg-[#22c55e] flex items-center justify-center border-4 border-[#111920]">
                                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Info */}
                                <h3 className="text-base md:text-lg font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-xs md:text-sm text-[#22c55e] font-medium mb-3">{member.role}</p>
                                <p className="text-xs md:text-sm text-[#64748b] line-clamp-2 mb-4">{member.bio}</p>

                                {/* Skills */}
                                <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-4">
                                    {member.skills.slice(0, 3).map((skill, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-white/5 text-[#94a3b8] rounded border border-white/5">
                                            {skill}
                                        </span>
                                    ))}
                                    {member.skills.length > 3 && (
                                        <span className="text-xs px-2 py-1 bg-white/5 text-[#94a3b8] rounded border border-white/5">
                                            +{member.skills.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Social Links */}
                                {(member.linkedin || member.twitter || member.github || member.email) && (
                                    <div className="flex justify-center gap-2 pt-4 border-t border-white/5">
                                        {member.linkedin && <SocialIcon href={member.linkedin} icon="linkedin" />}
                                        {member.twitter && <SocialIcon href={member.twitter} icon="twitter" />}
                                        {member.github && <SocialIcon href={member.github} icon="github" />}
                                        {member.email && <SocialIcon href={`mailto:${member.email}`} icon="email" />}
                                    </div>
                                )}
                            </div>

                            {/* Actions */}
                            <div className="flex gap-0 border-t border-white/5">
                                <button
                                    onClick={() => handleEdit(member)}
                                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#22c55e]/0 text-[#22c55e] hover:bg-[#22c55e]/10 transition-colors text-xs md:text-sm border-r border-white/5"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(member._id!)}
                                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-red-500/0 text-red-400 hover:bg-red-500/10 transition-colors text-xs md:text-sm"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-[#64748b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">No team members yet</h3>
                    <p className="text-[#64748b] mb-6">Start by adding your first team member</p>
                    <button onClick={() => { resetForm(); setIsModalOpen(true); }} className="btn btn-primary">
                        Add Your First Team Member
                    </button>
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-[#111920] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-[#111920] border-b border-white/10 p-4 md:p-6 flex items-center justify-between z-10">
                            <h2 className="text-xl md:text-2xl font-bold text-white">
                                {editingMember ? 'Edit Team Member' : 'Add New Team Member'}
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                            >
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-4 md:space-y-6">
                            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="John Adebayo"
                                        className="input w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">Role/Position *</label>
                                    <input
                                        type="text"
                                        name="role"
                                        required
                                        value={formData.role}
                                        onChange={handleInputChange}
                                        placeholder="Lead Developer"
                                        className="input w-full"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Initials (for avatar) *</label>
                                <input
                                    type="text"
                                    name="initials"
                                    required
                                    maxLength={3}
                                    value={formData.initials}
                                    onChange={handleInputChange}
                                    placeholder="JA"
                                    className="input w-full"
                                />
                                <p className="text-xs text-[#64748b] mt-1">Maximum 3 characters</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Bio *</label>
                                <textarea
                                    name="bio"
                                    required
                                    rows={3}
                                    value={formData.bio}
                                    onChange={handleInputChange}
                                    placeholder="Brief description about the team member..."
                                    className="input w-full resize-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Color Theme *</label>
                                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
                                    {gradientOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            type="button"
                                            onClick={() => handleGradientChange(option.value, option.color)}
                                            className={`p-3 rounded-xl border-2 transition-all ${formData.gradient === option.value
                                                ? 'border-white/30 bg-white/5'
                                                : 'border-white/10 hover:border-white/20'
                                                }`}
                                        >
                                            <div className={`w-full h-8 md:h-12 rounded-lg bg-gradient-to-br ${option.value} mb-1`} />
                                            <div className="text-center text-xs text-white line-clamp-1">{option.label}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Skills (comma-separated) *</label>
                                <input
                                    type="text"
                                    value={formData.skills?.join(', ')}
                                    onChange={(e) => handleSkillsInput(e.target.value)}
                                    placeholder="React, Node.js, AWS"
                                    className="input w-full"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="john@frontalminds.com"
                                        className="input w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">LinkedIn URL</label>
                                    <input
                                        type="url"
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleInputChange}
                                        placeholder="https://linkedin.com/in/..."
                                        className="input w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">Twitter/X URL</label>
                                    <input
                                        type="url"
                                        name="twitter"
                                        value={formData.twitter}
                                        onChange={handleInputChange}
                                        placeholder="https://twitter.com/..."
                                        className="input w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">GitHub URL</label>
                                    <input
                                        type="url"
                                        name="github"
                                        value={formData.github}
                                        onChange={handleInputChange}
                                        placeholder="https://github.com/..."
                                        className="input w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 border-t border-white/10">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="btn btn-secondary flex-1 order-2 sm:order-1"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSaving}
                                    className="btn btn-primary flex-1 order-1 sm:order-2 disabled:opacity-50"
                                >
                                    {isSaving ? 'Saving...' : (editingMember ? 'Update Member' : 'Add Member')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
    const icons: Record<string, React.ReactElement> = {
        linkedin: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        twitter: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
        github: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
        email: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    };

    return (
        <a
            href={href}
            className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#64748b] hover:text-[#22c55e] hover:bg-white/10 transition-all"
        >
            {icons[icon]}
        </a>
    );
}
