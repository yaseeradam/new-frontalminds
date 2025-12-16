'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Admin-specific components
import { AdminHeader, AdminSidebar, AdminLoading, DashboardOverview } from './components';
import type { AdminTabType } from './components';

// Manager components (these will be moved to admin section later if needed)
import ProjectsManager from '@/components/admin/ProjectsManager';
import TeamManager from '@/components/admin/TeamManager';
import ServicesManager from '@/components/admin/ServicesManager';
import TestimonialsManager from '@/components/admin/TestimonialsManager';
import SettingsManager from '@/components/admin/SettingsManager';

interface Admin {
    name: string;
    email: string;
    role: string;
}

interface Stats {
    projects: number;
    team: number;
    services: number;
    testimonials: number;
}

export default function AdminDashboard() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<AdminTabType>('dashboard');
    const [admin, setAdmin] = useState<Admin | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [stats, setStats] = useState<Stats>({ projects: 0, team: 0, services: 0, testimonials: 0 });

    useEffect(() => {
        checkAuth();
        fetchStats();
    }, []);

    const checkAuth = async () => {
        try {
            const res = await fetch('/api/auth/me');
            const data = await res.json();
            if (!data.authenticated) {
                router.push('/admin/login');
            } else {
                setAdmin(data.admin);
            }
        } catch {
            router.push('/admin/login');
        } finally {
            setIsLoading(false);
        }
    };

    const fetchStats = async () => {
        try {
            const [projects, team, services, testimonials] = await Promise.all([
                fetch('/api/projects').then(r => r.json()),
                fetch('/api/team').then(r => r.json()),
                fetch('/api/services').then(r => r.json()),
                fetch('/api/testimonials').then(r => r.json()),
            ]);
            setStats({
                projects: projects?.length || 0,
                team: team?.length || 0,
                services: services?.length || 0,
                testimonials: testimonials?.length || 0,
            });
        } catch {
            console.error('Failed to fetch stats');
        }
    };

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/admin/login');
    };

    if (isLoading) {
        return <AdminLoading />;
    }

    return (
        <>
            <AdminHeader adminName={admin?.name} onLogout={handleLogout} />

            <div className="container-lg py-6 md:py-8">
                <div className="grid lg:grid-cols-12 gap-4 md:gap-6">
                    <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />

                    <main className="lg:col-span-9">
                        {activeTab === 'dashboard' && (
                            <DashboardOverview stats={stats} onNavigate={setActiveTab} />
                        )}
                        {activeTab === 'projects' && <ProjectsManager onUpdate={fetchStats} />}
                        {activeTab === 'team' && <TeamManager onUpdate={fetchStats} />}
                        {activeTab === 'services' && <ServicesManager onUpdate={fetchStats} />}
                        {activeTab === 'testimonials' && <TestimonialsManager onUpdate={fetchStats} />}
                        {activeTab === 'settings' && <SettingsManager />}
                    </main>
                </div>
            </div>
        </>
    );
}
