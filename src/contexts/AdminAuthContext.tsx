'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface Admin {
    id?: string;
    email: string;
    name: string;
    role: 'admin' | 'editor';
}

interface AuthContextType {
    admin: Admin | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    logout: () => Promise<void>;
    checkAuth: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
    const [admin, setAdmin] = useState<Admin | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const checkAuth = useCallback(async (): Promise<boolean> => {
        try {
            const res = await fetch('/api/auth/me');
            const data = await res.json();

            if (data.authenticated && data.admin) {
                setAdmin(data.admin);
                return true;
            } else {
                setAdmin(null);
                return false;
            }
        } catch (error) {
            console.error('Auth check failed:', error);
            setAdmin(null);
            return false;
        }
    }, []);

    useEffect(() => {
        const initAuth = async () => {
            await checkAuth();
            setIsLoading(false);
        };
        initAuth();
    }, [checkAuth]);

    const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setAdmin(data.admin);
                return { success: true };
            } else {
                return { success: false, error: data.error || 'Login failed' };
            }
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: 'An error occurred during login' };
        }
    };

    const logout = async (): Promise<void> => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setAdmin(null);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                admin,
                isAuthenticated: !!admin,
                isLoading,
                login,
                logout,
                checkAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAdminAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAdminAuth must be used within an AdminAuthProvider');
    }
    return context;
}

