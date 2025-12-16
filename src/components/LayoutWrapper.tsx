'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Check if we're on any admin page - this keeps admin completely isolated
    const isAdminRoute = pathname?.startsWith('/admin');

    // Admin routes get their own isolated layout (no Navbar/Footer)
    if (isAdminRoute) {
        return <>{children}</>;
    }

    // Public website gets full layout with Navbar and Footer
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
