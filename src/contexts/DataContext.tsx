'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types
export interface Project {
    id: string;
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
    createdAt: string;
    updatedAt: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    initials: string;
    gradient: string;
    color: string;
    skills: string[];
    email?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
    image?: string;
    createdAt: string;
    updatedAt: string;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
    color: string;
    createdAt: string;
    updatedAt: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    image?: string;
    createdAt: string;
    updatedAt: string;
}

export interface SiteSettings {
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
    logo?: string;
    favicon?: string;
}

interface DataContextType {
    // Projects
    projects: Project[];
    addProject: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => void;
    updateProject: (id: string, project: Partial<Project>) => void;
    deleteProject: (id: string) => void;

    // Team
    teamMembers: TeamMember[];
    addTeamMember: (member: Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>) => void;
    updateTeamMember: (id: string, member: Partial<TeamMember>) => void;
    deleteTeamMember: (id: string) => void;

    // Services
    services: Service[];
    addService: (service: Omit<Service, 'id' | 'createdAt' | 'updatedAt'>) => void;
    updateService: (id: string, service: Partial<Service>) => void;
    deleteService: (id: string) => void;

    // Testimonials
    testimonials: Testimonial[];
    addTestimonial: (testimonial: Omit<Testimonial, 'id' | 'createdAt' | 'updatedAt'>) => void;
    updateTestimonial: (id: string, testimonial: Partial<Testimonial>) => void;
    deleteTestimonial: (id: string) => void;

    // Settings
    settings: SiteSettings;
    updateSettings: (settings: Partial<SiteSettings>) => void;

    // Loading
    isLoading: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

// Default data
const defaultSettings: SiteSettings = {
    companyName: 'FrontalMinds',
    tagline: 'Digital Solutions',
    description: 'Pioneering the future of digital solutions. We merge innovative technology with clear-minded strategy to unlock your business potential.',
    email: 'hello@frontalminds.com',
    phone: '+234 123 456 7890',
    address: 'Lagos, Nigeria',
    socialLinks: {
        twitter: 'https://twitter.com/frontalminds',
        linkedin: 'https://linkedin.com/company/frontalminds',
        github: 'https://github.com/frontalminds',
        instagram: 'https://instagram.com/frontalminds',
        facebook: 'https://facebook.com/frontalminds',
        youtube: 'https://youtube.com/frontalminds',
    },
};

const defaultProjects: Project[] = [
    {
        id: '1',
        title: 'E-Commerce Platform',
        slug: 'e-commerce-platform',
        description: 'A modern online shopping platform with advanced features',
        fullDescription: 'Complete e-commerce solution with payment integration, inventory management, and analytics dashboard.',
        category: 'Web Development',
        technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
        year: '2024',
        duration: '6 months',
        client: 'RetailCo',
        challenge: 'Build a scalable platform handling thousands of concurrent users with real-time inventory updates.',
        solution: 'Implemented microservices architecture with CDN caching and WebSocket for real-time features.',
        features: ['Payment Integration', 'Real-time Inventory', 'Admin Dashboard', 'Analytics', 'Mobile Responsive'],
        gradient: 'from-[#22c55e] to-[#16a34a]',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];

const defaultTeamMembers: TeamMember[] = [
    {
        id: '1',
        name: 'John Adebayo',
        role: 'Lead Developer',
        bio: 'Full-stack developer with 10+ years of experience building scalable web applications.',
        initials: 'JA',
        gradient: 'from-[#22c55e] to-[#16a34a]',
        color: '#22c55e',
        skills: ['React', 'Node.js', 'AWS', 'Python'],
        email: 'john@frontalminds.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];

const defaultServices: Service[] = [
    {
        id: '1',
        title: 'Web Development',
        description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
        icon: 'code',
        features: ['React/Next.js', 'Node.js Backend', 'Database Design', 'API Integration'],
        color: '#22c55e',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];

const defaultTestimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Sarah Johnson',
        role: 'CEO',
        company: 'TechStart Inc.',
        content: 'FrontalMinds transformed our digital presence. Their attention to detail and technical expertise exceeded our expectations.',
        rating: 5,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];

export function DataProvider({ children }: { children: ReactNode }) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [services, setServices] = useState<Service[]>([]);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
    const [isLoading, setIsLoading] = useState(true);

    // Load data from localStorage on mount
    useEffect(() => {
        const loadData = () => {
            try {
                const savedProjects = localStorage.getItem('fm_projects');
                const savedTeam = localStorage.getItem('fm_team');
                const savedServices = localStorage.getItem('fm_services');
                const savedTestimonials = localStorage.getItem('fm_testimonials');
                const savedSettings = localStorage.getItem('fm_settings');

                setProjects(savedProjects ? JSON.parse(savedProjects) : defaultProjects);
                setTeamMembers(savedTeam ? JSON.parse(savedTeam) : defaultTeamMembers);
                setServices(savedServices ? JSON.parse(savedServices) : defaultServices);
                setTestimonials(savedTestimonials ? JSON.parse(savedTestimonials) : defaultTestimonials);
                setSettings(savedSettings ? JSON.parse(savedSettings) : defaultSettings);
            } catch {
                // Use defaults if parsing fails
                setProjects(defaultProjects);
                setTeamMembers(defaultTeamMembers);
                setServices(defaultServices);
                setTestimonials(defaultTestimonials);
                setSettings(defaultSettings);
            }
            setIsLoading(false);
        };

        loadData();
    }, []);

    // Save to localStorage on changes
    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('fm_projects', JSON.stringify(projects));
        }
    }, [projects, isLoading]);

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('fm_team', JSON.stringify(teamMembers));
        }
    }, [teamMembers, isLoading]);

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('fm_services', JSON.stringify(services));
        }
    }, [services, isLoading]);

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('fm_testimonials', JSON.stringify(testimonials));
        }
    }, [testimonials, isLoading]);

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('fm_settings', JSON.stringify(settings));
        }
    }, [settings, isLoading]);

    // Helper function to generate slug
    const generateSlug = (title: string) => {
        return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    };

    // Projects CRUD
    const addProject = (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => {
        const now = new Date().toISOString();
        const newProject: Project = {
            ...project,
            id: Date.now().toString(),
            slug: generateSlug(project.title),
            createdAt: now,
            updatedAt: now,
        };
        setProjects(prev => [...prev, newProject]);
    };

    const updateProject = (id: string, updates: Partial<Project>) => {
        setProjects(prev => prev.map(p =>
            p.id === id
                ? { ...p, ...updates, updatedAt: new Date().toISOString() }
                : p
        ));
    };

    const deleteProject = (id: string) => {
        setProjects(prev => prev.filter(p => p.id !== id));
    };

    // Team CRUD
    const addTeamMember = (member: Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>) => {
        const now = new Date().toISOString();
        const newMember: TeamMember = {
            ...member,
            id: Date.now().toString(),
            createdAt: now,
            updatedAt: now,
        };
        setTeamMembers(prev => [...prev, newMember]);
    };

    const updateTeamMember = (id: string, updates: Partial<TeamMember>) => {
        setTeamMembers(prev => prev.map(m =>
            m.id === id
                ? { ...m, ...updates, updatedAt: new Date().toISOString() }
                : m
        ));
    };

    const deleteTeamMember = (id: string) => {
        setTeamMembers(prev => prev.filter(m => m.id !== id));
    };

    // Services CRUD
    const addService = (service: Omit<Service, 'id' | 'createdAt' | 'updatedAt'>) => {
        const now = new Date().toISOString();
        const newService: Service = {
            ...service,
            id: Date.now().toString(),
            createdAt: now,
            updatedAt: now,
        };
        setServices(prev => [...prev, newService]);
    };

    const updateService = (id: string, updates: Partial<Service>) => {
        setServices(prev => prev.map(s =>
            s.id === id
                ? { ...s, ...updates, updatedAt: new Date().toISOString() }
                : s
        ));
    };

    const deleteService = (id: string) => {
        setServices(prev => prev.filter(s => s.id !== id));
    };

    // Testimonials CRUD
    const addTestimonial = (testimonial: Omit<Testimonial, 'id' | 'createdAt' | 'updatedAt'>) => {
        const now = new Date().toISOString();
        const newTestimonial: Testimonial = {
            ...testimonial,
            id: Date.now().toString(),
            createdAt: now,
            updatedAt: now,
        };
        setTestimonials(prev => [...prev, newTestimonial]);
    };

    const updateTestimonial = (id: string, updates: Partial<Testimonial>) => {
        setTestimonials(prev => prev.map(t =>
            t.id === id
                ? { ...t, ...updates, updatedAt: new Date().toISOString() }
                : t
        ));
    };

    const deleteTestimonial = (id: string) => {
        setTestimonials(prev => prev.filter(t => t.id !== id));
    };

    // Settings
    const updateSettings = (updates: Partial<SiteSettings>) => {
        setSettings(prev => ({ ...prev, ...updates }));
    };

    return (
        <DataContext.Provider
            value={{
                projects,
                addProject,
                updateProject,
                deleteProject,
                teamMembers,
                addTeamMember,
                updateTeamMember,
                deleteTeamMember,
                services,
                addService,
                updateService,
                deleteService,
                testimonials,
                addTestimonial,
                updateTestimonial,
                deleteTestimonial,
                settings,
                updateSettings,
                isLoading,
            }}
        >
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
}
