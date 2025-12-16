'use client';

import React from 'react';
import { AdminTabType, adminTabs } from './AdminSidebar';

interface DashboardStats {
    projects: number;
    team: number;
    services: number;
    testimonials: number;
}

interface DashboardOverviewProps {
    stats: DashboardStats;
    onNavigate: (tab: AdminTabType) => void;
}

export default function DashboardOverview({ stats, onNavigate }: DashboardOverviewProps) {
    const statCards = [
        { label: 'Projects', value: stats.projects, color: '#22c55e', tab: 'projects' as const },
        { label: 'Team', value: stats.team, color: '#3b82f6', tab: 'team' as const },
        { label: 'Services', value: stats.services, color: '#f97316', tab: 'services' as const },
        { label: 'Testimonials', value: stats.testimonials, color: '#8b5cf6', tab: 'testimonials' as const },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="heading-display text-2xl md:text-3xl mb-2">Dashboard Overview</h1>
                <p className="text-[#94a3b8]">Manage all your website content from here</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {statCards.map((stat) => (
                    <button
                        key={stat.label}
                        onClick={() => onNavigate(stat.tab)}
                        className="p-4 md:p-6 bg-[#111920]/60 border border-white/10 rounded-xl md:rounded-2xl hover:border-white/20 transition-all text-left group"
                    >
                        <div
                            className="w-full h-1 rounded-full mb-3 md:mb-4 opacity-60"
                            style={{ background: stat.color }}
                        />
                        <div className="text-[#64748b] text-xs md:text-sm mb-1">{stat.label}</div>
                        <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#22c55e] transition-colors">
                            {stat.value}
                        </div>
                    </button>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-[#111920]/60 border border-white/10 rounded-2xl p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-bold text-white mb-4">Quick Actions</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                    {adminTabs.slice(1, -1).map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => onNavigate(tab.id)}
                            className="flex items-center gap-3 p-3 md:p-4 bg-white/5 rounded-xl hover:bg-white/10 hover:border-[#22c55e]/30 border border-transparent transition-all text-left group"
                        >
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#22c55e]/10 flex items-center justify-center group-hover:bg-[#22c55e]/20 transition-colors">
                                {tab.icon}
                            </div>
                            <div>
                                <div className="text-white font-medium text-sm md:text-base">Manage {tab.label}</div>
                                <div className="text-[#64748b] text-xs">Add, edit, or remove</div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
