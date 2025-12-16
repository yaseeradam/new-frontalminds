'use client';

import React, { useState, useEffect } from 'react';

interface Project {
    _id?: string;
    title: string;
    slug: string;
    description: string;
    fullDescription: string;
    category: string;
    technologies: string[];
    year: string;
    duration: string;
    client: string;
    challenge: string;
    solution: string;
    features: string[];
    gradient: string;
    image?: string;
}

const gradientOptions = [
    { value: 'from-[#22c55e] to-[#16a34a]', label: 'Green', color: '#22c55e' },
    { value: 'from-[#3b82f6] to-[#2563eb]', label: 'Blue', color: '#3b82f6' },
    { value: 'from-[#f97316] to-[#ea580c]', label: 'Orange', color: '#f97316' },
    { value: 'from-[#8b5cf6] to-[#7c3aed]', label: 'Purple', color: '#8b5cf6' },
    { value: 'from-[#ec4899] to-[#db2777]', label: 'Pink', color: '#ec4899' },
    { value: 'from-[#06b6d4] to-[#0891b2]', label: 'Cyan', color: '#06b6d4' },
];

const categories = ['Web Development', 'Mobile Apps', 'Blockchain', 'AI/ML', 'Cybersecurity', 'Cloud Solutions'];

export default function ProjectsManager({ onUpdate }: { onUpdate?: () => void }) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [formData, setFormData] = useState<Partial<Project>>({
        title: '',
        description: '',
        fullDescription: '',
        category: '',
        technologies: [],
        year: new Date().getFullYear().toString(),
        duration: '',
        client: '',
        challenge: '',
        solution: '',
        features: [],
        gradient: 'from-[#22c55e] to-[#16a34a]',
    });

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await fetch('/api/projects');
            const data = await res.json();
            setProjects(data);
        } catch (error) {
            console.error('Failed to fetch projects:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleArrayInput = (field: 'technologies' | 'features', value: string) => {
        const items = value.split(',').map(item => item.trim()).filter(item => item);
        setFormData({ ...formData, [field]: items });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            const url = editingProject ? `/api/projects/${editingProject._id}` : '/api/projects';
            const method = editingProject ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                await fetchProjects();
                onUpdate?.();
                setIsModalOpen(false);
                resetForm();
            } else {
                const error = await res.json();
                alert(error.error || 'Failed to save project');
            }
        } catch (error) {
            console.error('Error saving project:', error);
            alert('Failed to save project');
        } finally {
            setIsSaving(false);
        }
    };

    const handleEdit = (project: Project) => {
        setEditingProject(project);
        setFormData(project);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this project?')) return;

        try {
            const res = await fetch(`/api/projects/${id}`, { method: 'DELETE' });
            if (res.ok) {
                await fetchProjects();
                onUpdate?.();
            }
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    const resetForm = () => {
        setEditingProject(null);
        setFormData({
            title: '',
            description: '',
            fullDescription: '',
            category: '',
            technologies: [],
            year: new Date().getFullYear().toString(),
            duration: '',
            client: '',
            challenge: '',
            solution: '',
            features: [],
            gradient: 'from-[#22c55e] to-[#16a34a]',
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
                    <h1 className="heading-display text-2xl md:text-3xl mb-2">Projects</h1>
                    <p className="text-[#94a3b8] text-sm md:text-base">Manage your portfolio projects</p>
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
                    Add Project
                </button>
            </div>

            {/* Projects Grid */}
            {projects.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {projects.map((project) => (
                        <div
                            key={project._id}
                            className="group bg-[#111920]/60 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
                        >
                            {/* Project Visual */}
                            <div className={`h-40 md:h-48 bg-gradient-to-br ${project.gradient} opacity-20 flex items-center justify-center relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-grid opacity-20" />
                                <svg className="w-12 h-12 md:w-16 md:h-16 text-white/50 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>

                            {/* Project Info */}
                            <div className="p-4 md:p-6">
                                <div className="flex gap-2 mb-3">
                                    <span className="text-xs px-2 py-1 rounded-full bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/20">
                                        {project.category}
                                    </span>
                                    <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-[#94a3b8]">
                                        {project.year}
                                    </span>
                                </div>
                                <h3 className="text-base md:text-lg font-bold text-white mb-2 line-clamp-1">
                                    {project.title}
                                </h3>
                                <p className="text-[#64748b] text-xs md:text-sm mb-4 line-clamp-2">{project.description}</p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.technologies.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-white/5 text-[#94a3b8] rounded">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="text-xs px-2 py-1 bg-white/5 text-[#94a3b8] rounded">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2 pt-4 border-t border-white/5">
                                    <button
                                        onClick={() => handleEdit(project)}
                                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-[#22c55e]/10 text-[#22c55e] rounded-lg hover:bg-[#22c55e]/20 transition-colors text-xs md:text-sm"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(project._id!)}
                                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors text-xs md:text-sm"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-[#64748b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">No projects yet</h3>
                    <p className="text-[#64748b] mb-6">Start by adding your first project</p>
                    <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
                        Add Your First Project
                    </button>
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-[#111920] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-[#111920] border-b border-white/10 p-4 md:p-6 flex items-center justify-between z-10">
                            <h2 className="text-xl md:text-2xl font-bold text-white">
                                {editingProject ? 'Edit Project' : 'Add New Project'}
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
                                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">Project Title *</label>
                                    <input
                                        type="text"
                                        name="title"
                                        required
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        placeholder="E-Commerce Platform"
                                        className="input w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">Category *</label>
                                    <select
                                        name="category"
                                        required
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        className="input w-full"
                                    >
                                        <option value="">Select Category</option>
                                        {categories.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Short Description *</label>
                                <textarea
                                    name="description"
                                    required
                                    rows={2}
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="A brief overview of the project"
                                    className="input w-full resize-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Full Description *</label>
                                <textarea
                                    name="fullDescription"
                                    required
                                    rows={4}
                                    value={formData.fullDescription}
                                    onChange={handleInputChange}
                                    placeholder="Detailed description of the project"
                                    className="input w-full resize-none"
                                />
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">Client *</label>
                                    <input
                                        type="text"
                                        name="client"
                                        required
                                        value={formData.client}
                                        onChange={handleInputChange}
                                        placeholder="RetailCo"
                                        className="input w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">Year *</label>
                                    <input
                                        type="text"
                                        name="year"
                                        required
                                        value={formData.year}
                                        onChange={handleInputChange}
                                        placeholder="2024"
                                        className="input w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">Duration *</label>
                                    <input
                                        type="text"
                                        name="duration"
                                        required
                                        value={formData.duration}
                                        onChange={handleInputChange}
                                        placeholder="6 months"
                                        className="input w-full"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Color Theme *</label>
                                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
                                    {gradientOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, gradient: option.value })}
                                            className={`p-3 rounded-xl border-2 transition-all ${formData.gradient === option.value
                                                    ? 'border-white/30 bg-white/5'
                                                    : 'border-white/10 hover:border-white/20'
                                                }`}
                                        >
                                            <div className={`w-full h-8 md:h-12 rounded-lg bg-gradient-to-br ${option.value} mb-2`} />
                                            <div className="text-center text-xs text-white">{option.label}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Technologies (comma-separated) *</label>
                                <input
                                    type="text"
                                    value={formData.technologies?.join(', ')}
                                    onChange={(e) => handleArrayInput('technologies', e.target.value)}
                                    placeholder="Next.js, Node.js, MongoDB, Stripe"
                                    className="input w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Challenge *</label>
                                <textarea
                                    name="challenge"
                                    required
                                    rows={3}
                                    value={formData.challenge}
                                    onChange={handleInputChange}
                                    placeholder="What challenges did you face?"
                                    className="input w-full resize-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Solution *</label>
                                <textarea
                                    name="solution"
                                    required
                                    rows={3}
                                    value={formData.solution}
                                    onChange={handleInputChange}
                                    placeholder="How did you solve it?"
                                    className="input w-full resize-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Key Features (comma-separated) *</label>
                                <input
                                    type="text"
                                    value={formData.features?.join(', ')}
                                    onChange={(e) => handleArrayInput('features', e.target.value)}
                                    placeholder="Payment Integration, Real-time Inventory, Admin Dashboard"
                                    className="input w-full"
                                />
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
                                    {isSaving ? 'Saving...' : (editingProject ? 'Update Project' : 'Add Project')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
