'use client';

import React, { useState, useEffect } from 'react';

interface Testimonial {
    _id?: string;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    image?: string;
    featured: boolean;
}

export default function TestimonialsManager({ onUpdate }: { onUpdate?: () => void }) {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [formData, setFormData] = useState<Partial<Testimonial>>({
        name: '',
        role: '',
        company: '',
        content: '',
        rating: 5,
        featured: false,
    });

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            const res = await fetch('/api/testimonials');
            const data = await res.json();
            setTestimonials(data);
        } catch (error) {
            console.error('Failed to fetch testimonials:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            const url = editingTestimonial ? `/api/testimonials/${editingTestimonial._id}` : '/api/testimonials';
            const method = editingTestimonial ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                await fetchTestimonials();
                onUpdate?.();
                setIsModalOpen(false);
                resetForm();
            }
        } catch (error) {
            console.error('Error saving testimonial:', error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleEdit = (testimonial: Testimonial) => {
        setEditingTestimonial(testimonial);
        setFormData(testimonial);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this testimonial?')) return;

        try {
            const res = await fetch(`/api/testimonials/${id}`, { method: 'DELETE' });
            if (res.ok) {
                await fetchTestimonials();
                onUpdate?.();
            }
        } catch (error) {
            console.error('Error deleting testimonial:', error);
        }
    };

    const resetForm = () => {
        setEditingTestimonial(null);
        setFormData({
            name: '',
            role: '',
            company: '',
            content: '',
            rating: 5,
            featured: false,
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
                    <h1 className="heading-display text-2xl md:text-3xl mb-2">Testimonials</h1>
                    <p className="text-[#94a3b8] text-sm md:text-base">Manage client testimonials</p>
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
                    Add Testimonial
                </button>
            </div>

            {/* Testimonials Grid */}
            {testimonials.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial._id}
                            className="group bg-[#111920]/60 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
                        >
                            {testimonial.featured && (
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#22c55e]/10 text-[#22c55e] rounded-full text-xs font-medium mb-4">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    Featured
                                </div>
                            )}

                            <div className="flex gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-[#64748b]'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-white text-sm mb-4 italic line-clamp-3">&ldquo;{testimonial.content}&rdquo;</p>

                            <div className="mb-4">
                                <div className="text-white font-medium">{testimonial.name}</div>
                                <div className="text-[#64748b] text-sm">{testimonial.role} at {testimonial.company}</div>
                            </div>

                            <div className="flex gap-2 pt-4 border-t border-white/5">
                                <button
                                    onClick={() => handleEdit(testimonial)}
                                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-[#22c55e]/10 text-[#22c55e] rounded-lg hover:bg-[#22c55e]/20 transition-colors text-sm"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(testimonial._id!)}
                                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors text-sm"
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
                        <span className="text-4xl">💬</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">No testimonials yet</h3>
                    <p className="text-[#64748b] mb-6">Start by adding your first testimonial</p>
                    <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
                        Add Your First Testimonial
                    </button>
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-[#111920] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-[#111920] border-b border-white/10 p-6 flex items-center justify-between z-10">
                            <h2 className="text-2xl font-bold text-white">
                                {editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
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
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">Client Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="John Doe"
                                        className="input w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#94a3b8] mb-2">Role *</label>
                                    <input
                                        type="text"
                                        name="role"
                                        required
                                        value={formData.role}
                                        onChange={handleInputChange}
                                        placeholder="CEO"
                                        className="input w-full"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Company *</label>
                                <input
                                    type="text"
                                    name="company"
                                    required
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    placeholder="TechStart Inc."
                                    className="input w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Testimonial *</label>
                                <textarea
                                    name="content"
                                    required
                                    rows={4}
                                    value={formData.content}
                                    onChange={handleInputChange}
                                    placeholder="Share the client's feedback..."
                                    className="input w-full resize-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Rating *</label>
                                <select
                                    name="rating"
                                    required
                                    value={formData.rating}
                                    onChange={handleInputChange}
                                    className="input w-full"
                                >
                                    <option value={5}>5 Stars - Excellent</option>
                                    <option value={4}>4 Stars - Very Good</option>
                                    <option value={3}>3 Stars - Good</option>
                                    <option value={2}>2 Stars - Fair</option>
                                    <option value={1}>1 Star - Poor</option>
                                </select>
                            </div>

                            <div>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="featured"
                                        checked={formData.featured}
                                        onChange={handleInputChange}
                                        className="w-5 h-5 rounded bg-white/5 border-white/10 text-[#22c55e] focus:ring-[#22c55e] focus:ring-offset-0"
                                    />
                                    <span className="text-sm text-white">Mark as featured testimonial</span>
                                </label>
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
                                    {isSaving ? 'Saving...' : (editingTestimonial ? 'Update Testimonial' : 'Add Testimonial')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
