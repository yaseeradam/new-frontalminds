'use client';

import React from 'react';
import Link from 'next/link';

interface AdminHeaderProps {
    adminName?: string;
    onLogout: () => void;
}

export default function AdminHeader({ adminName, onLogout }: AdminHeaderProps) {
    return (
        <header className="sticky top-0 z-40 bg-[#111920]/95 backdrop-blur-xl border-b border-white/10">
            <div className="container-lg py-3 md:py-4">
                <div className="flex items-center justify-between">
                    <Link href="/admin" className="flex items-center gap-2 md:gap-3">
                        <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center">
                            <span className="text-white font-black text-sm">FM</span>
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-base md:text-lg font-bold text-white">Admin Dashboard</span>
                            {adminName && (
                                <div className="text-[#64748b] text-xs">Welcome, {adminName}</div>
                            )}
                        </div>
                    </Link>
                    <div className="flex items-center gap-2 md:gap-4">
                        <Link
                            href="/"
                            target="_blank"
                            className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white hover:border-[#22c55e]/50 transition-colors text-xs md:text-sm"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span className="hidden sm:inline">View Site</span>
                        </Link>
                        <button
                            onClick={onLogout}
                            className="px-3 md:px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-colors text-xs md:text-sm"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
