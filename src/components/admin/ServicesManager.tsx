'use client';

import React, { useState, useEffect } from 'react';

interface Service {
    _id?: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
    color: string;
    order: number;
}

const iconOptions = [
    { value: 'code', label: 'Code', icon: '💻' },
    { value: 'mobile', label: 'Mobile', icon: '📱' },
    { value: 'blockchain', label: 'Blockchain', icon: '⛓️' },
    { value: 'ai', label: 'AI/ML', icon: '🤖' },
    { value: 'cloud', label: 'Cloud', icon: '☁️' },
    { value: 'security', label: 'Security', icon: '🔒' },
    { value: 'data', label: 'Data', icon: '📊' },
    { value: 'design', label: 'Design', icon: '🎨' },
];

const colorOptions = [
    { value: '#22c55e', label: 'Green' },
    { value: '#3b82f6', label: 'Blue' },
    { value: '#f97316', label: 'Orange' },
    { value: '#8b5cf6', label: 'Purple' },
    { value: '#ec4899', label: 'Pink' },
    { value: '#06b6d4', label: 'Cyan' },
];

export default function ServicesManager({ onUpdate }: { onUpdate?: () => void }) {
    const [services, setServices] = useState<Service[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingService, setEditingService] = useState<Service | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [formData, setFormData] = useState<Partial<Service>>({
        title: '',
        description: '',
        icon: 'code',
        features: [],
        color: '#22c55e',
        order: 0,
    });

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const res = await fetch('/api/services');
            const data = await res.json();
            setServices(data);
        } catch (error) {
            console.error('Failed to fetch services:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleArrayInput = (value: string) => {
        const items = value.split(',').map(item => item.trim()).filter(item => item);
        setFormData({ ...formData, features: items });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            const url = editingService ? `/api/services/${editingService._id}` : '/api/services';
            const method = editingService ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                await fetchServices();
                onUpdate?.();
                setIsModalOpen(false);
                resetForm();
            }
        } catch (error) {
            console.error('Error saving service:', error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleEdit = (service: Service) => {
        setEditingService(service);
        setFormData(service);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this service?')) return;

        try {
            const res = await fetch(`/api/services/${id}`, { method: 'DELETE' });
            if (res.ok) {
                await fetchServices();
                onUpdate?.();
            }
        } catch (error) {
            console.error('Error deleting service:', error);
        }
    };

    const resetForm = () => {
        setEditingService(null);
        setFormData({
            title: '',
            description: '',
            icon: 'code',
            features: [],
            color: '#22c55e',
            order: 0,
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
                    <h1 className="heading-display text-2xl md:text-3xl mb-2">Services</h1>
                    <p className="text-[#94a3b8] text-sm md:text-base">Manage your service offerings</p>
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
                    Add Service
                </button>
            </div>

            {/* Services Grid */}
            {services.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {services.map((service) => {
                        const icon = iconOptions.find(i => i.value === service.icon)?.icon || '💻';
                        return (
                            <div
                                key={service._id}
                                className="group bg-[#111920]/60 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-2xl"
                                    style={{ backgroundColor: `${service.color}20` }}
                                >
                                    {icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-[#64748b] text-sm mb-4 line-clamp-2">{service.description}</p>

                                <div className="space-y-1.5 mb-4">
                                    {service.features.slice(0, 3).map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs text-[#94a3b8]">
                                            <svg className="w-4 h-4 shrink-0" style={{ color: service.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="line-clamp-1">{feature}</span>
                                        </div>
                                    ))}
                                    {service.features.length > 3 && (
                                        <div className="text-xs text-[#64748b] pl-6">+{service.features.length - 3} more</div>
                                    )}
                                </div>

                                <div className="flex gap-2 pt-4 border-t border-white/5">
                                    <button
                                        onClick={() => handleEdit(service)}
                                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-[#22c55e]/10 text-[#22c55e] rounded-lg hover:bg-[#22c55e]/20 transition-colors text-sm"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(service._id!)}
                                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors text-sm"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl">⚙️</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">No services yet</h3>
                    <p className="text-[#64748b] mb-6">Start by adding your first service</p>
                    <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
                        Add Your First Service
                    </button>
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-[#111920] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-[#111920] border-b border-white/10 p-6 flex items-center justify-between z-10">
                            <h2 className="text-2xl font-bold text-white">
                                {editingService ? 'Edit Service' : 'Add New Service'}
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

                        <form onSubmit={handleSubmit} className="p-6 space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Service Title *</label>
                                <input
                                    type="text"
                                    name="title"
                                    required
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="Web Development"
                                    className="input w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Description *</label>
                                <textarea
                                    name="description"
                                    required
                                    rows={3}
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Custom web applications built with modern technologies..."
                                    className="input w-full resize-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Icon *</label>
                                <div className="grid grid-cols-4 gap-3">
                                    {iconOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, icon: option.value })}
                                            className={`p-4 rounded-xl border-2 transition-all ${formData.icon === option.value
                                                    ? 'border-white/30 bg-white/5'
                                                    : 'border-white/10 hover:border-white/20'
                                                }`}
                                        >
                                            <div className="text-3xl mb-2">{option.icon}</div>
                                            <div className="text-xs text-white">{option.label}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Color *</label>
                                <div className="grid grid-cols-6 gap-3">
                                    {colorOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, color: option.value })}
                                            className={`p-3 rounded-xl border-2 transition-all ${formData.color === option.value
                                                    ? 'border-white/30'
                                                    : 'border-white/10 hover:border-white/20'
                                                }`}
                                        >
                                            <div
                                                className="w-full h-8 rounded-lg mb-1"
                                                style={{ backgroundColor: option.value }}
                                            />
                                            <div className="text-xs text-white text-center">{option.label}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Features (comma-separated) *</label>
                                <input
                                    type="text"
                                    value={formData.features?.join(', ')}
                                    onChange={(e) => handleArrayInput(e.target.value)}
                                    placeholder="React/Next.js, Node.js Backend, Database Design, API Integration"
                                    className="input w-full"
                                />
                            </div>

                            <div className="flex gap-4 pt-4 border-t border-white/10">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="btn btn-secondary flex-1"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSaving}
                                    className="btn btn-primary flex-1 disabled:opacity-50"
                                >
                                    {isSaving ? 'Saving...' : (editingService ? 'Update Service' : 'Add Service')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
