'use client';

import React from 'react';

export default function AdminLoading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0f14]">
            <div className="text-center">
                <div className="w-12 h-12 border-4 border-[#22c55e]/20 border-t-[#22c55e] rounded-full animate-spin mx-auto mb-4" />
                <p className="text-[#64748b] text-sm">Loading admin...</p>
            </div>
        </div>
    );
}
