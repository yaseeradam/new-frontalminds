'use client';

import React, { useState, useEffect } from 'react';

interface SiteSettings {
    _id?: string;
    companyName: string;
    tagline: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    socialLinks: {
        twitter: string;
        linkedin: string;
        github: string;
        instagram: string;
        facebook: string;
        youtube: string;
    };
}

export default function SettingsManager() {
    const [settings, setSettings] = useState<SiteSettings | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const res = await fetch('/api/settings');
            const data = await res.json();
            setSettings(data);
        } catch (error) {
            console.error('Failed to fetch settings:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!settings) return;
        setSettings({ ...settings, [e.target.name]: e.target.value });
    };

    const handleSocialLinkChange = (platform: keyof SiteSettings['socialLinks'], value: string) => {
        if (!settings) return;
        setSettings({
            ...settings,
            socialLinks: {
                ...settings.socialLinks,
                [platform]: value,
            },
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        setSuccessMessage('');

        try {
            const res = await fetch('/api/settings', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(settings),
            });

            if (res.ok) {
                setSuccessMessage('Settings saved successfully!');
                setTimeout(() => setSuccessMessage(''), 3000);
            }
        } catch (error) {
            console.error('Error saving settings:', error);
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="w-8 h-8 border-4 border-[#22c55e]/20 border-t-[#22c55e] rounded-full animate-spin" />
            </div>
        );
    }

    if (!settings) {
        return (
            <div className="text-center py-16">
                <p className="text-red-400">Failed to load settings</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="heading-display text-2xl md:text-3xl mb-2">Site Settings</h1>
                <p className="text-[#94a3b8] text-sm md:text-base">Manage your website configuration</p>
            </div>

            {/* Success Message */}
            {successMessage && (
                <div className="p-4 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-xl text-[#22c55e] flex items-center gap-3">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {successMessage}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Information */}
                <div className="bg-[#111920]/60 border border-white/10 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-white mb-4">Company Information</h2>
                    <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Company Name</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={settings.companyName}
                                    onChange={handleInputChange}
                                    placeholder="FrontalMinds"
                                    className="input w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Tagline</label>
                                <input
                                    type="text"
                                    name="tagline"
                                    value={settings.tagline}
                                    onChange={handleInputChange}
                                    placeholder="Digital Solutions"
                                    className="input w-full"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#94a3b8] mb-2">Description</label>
                            <textarea
                                name="description"
                                rows={3}
                                value={settings.description}
                                onChange={handleInputChange}
                                placeholder="Brief description of your company..."
                                className="input w-full resize-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="bg-[#111920]/60 border border-white/10 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
                    <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={settings.email}
                                    onChange={handleInputChange}
                                    placeholder="hello@frontalminds.com"
                                    className="input w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={settings.phone}
                                    onChange={handleInputChange}
                                    placeholder="+234 123 456 7890"
                                    className="input w-full"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#94a3b8] mb-2">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={settings.address}
                                onChange={handleInputChange}
                                placeholder="Lagos, Nigeria"
                                className="input w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="bg-[#111920]/60 border border-white/10 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-white mb-4">Social Media Links</h2>
                    <div className="space-y-4">
                        {[
                            { key: 'twitter' as const, label: 'Twitter/X', icon: '𝕏', placeholder: 'https://twitter.com/yourcompany' },
                            { key: 'linkedin' as const, label: 'LinkedIn', icon: '💼', placeholder: 'https://linkedin.com/company/yourcompany' },
                            { key: 'github' as const, label: 'GitHub', icon: '💻', placeholder: 'https://github.com/yourcompany' },
                            { key: 'instagram' as const, label: 'Instagram', icon: '📸', placeholder: 'https://instagram.com/yourcompany' },
                            { key: 'facebook' as const, label: 'Facebook', icon: '👥', placeholder: 'https://facebook.com/yourcompany' },
                            { key: 'youtube' as const, label: 'YouTube', icon: '📺', placeholder: 'https://youtube.com/yourcompany' },
                        ].map((social) => (
                            <div key={social.key}>
                                <label className="block text-sm font-medium text-[#94a3b8] mb-2 flex items-center gap-2">
                                    <span>{social.icon}</span>
                                    {social.label}
                                </label>
                                <input
                                    type="url"
                                    value={settings.socialLinks[social.key]}
                                    onChange={(e) => handleSocialLinkChange(social.key, e.target.value)}
                                    placeholder={social.placeholder}
                                    className="input w-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="btn btn-primary disabled:opacity-50"
                    >
                        {isSaving ? (
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                <span>Saving...</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Save Settings</span>
                            </div>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
