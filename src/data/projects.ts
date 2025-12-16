// Shared projects data
export interface Project {
    slug: string;
    title: string;
    category: string;
    description: string;
    fullDescription: string;
    technologies: string[];
    gradient: string;
    features: string[];
    duration: string;
    year: string;
    client: string;
    challenge: string;
    solution: string;
}

export const projects: Project[] = [
    {
        slug: 'e-commerce-platform',
        title: 'E-Commerce Platform',
        category: 'Web Development',
        description: 'A full-featured online store with seamless payment integration, inventory management, and beautiful UI.',
        fullDescription: 'We built a comprehensive e-commerce solution that enables businesses to sell products online with ease. The platform includes a powerful admin dashboard, real-time inventory tracking, and a seamless checkout experience.',
        technologies: ['Next.js', 'Stripe', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
        gradient: 'from-[#22c55e] to-[#14b8a6]',
        features: [
            'Secure payment processing with Stripe',
            'Real-time inventory management',
            'Customer account management',
            'Order tracking and notifications',
            'Admin analytics dashboard',
            'Mobile-responsive design'
        ],
        duration: '4 months',
        year: '2024',
        client: 'Retail Solutions Ltd',
        challenge: 'The client needed a modern e-commerce platform that could handle high traffic volumes while providing a seamless shopping experience across all devices.',
        solution: 'We implemented a headless architecture using Next.js for optimal performance, integrated Stripe for secure payments, and built a custom admin dashboard for efficient inventory management.'
    },
    {
        slug: 'health-fitness-app',
        title: 'Health & Fitness App',
        category: 'Mobile Apps',
        description: 'Cross-platform mobile app for tracking workouts, nutrition, and health goals with social features.',
        fullDescription: 'A comprehensive health and fitness application that helps users track their workouts, monitor nutrition, set goals, and connect with a community of fitness enthusiasts.',
        technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB', 'Redux'],
        gradient: 'from-[#3b82f6] to-[#8b5cf6]',
        features: [
            'Workout tracking with video guides',
            'Nutrition logging and meal planning',
            'Progress photos and measurements',
            'Social features and challenges',
            'Wearable device integration',
            'Personalized workout recommendations'
        ],
        duration: '6 months',
        year: '2024',
        client: 'FitLife Inc',
        challenge: 'Creating an engaging app that motivates users to maintain their fitness routines while providing accurate tracking and personalized recommendations.',
        solution: 'We developed a gamified experience with social challenges, integrated with popular wearables, and implemented AI-powered workout recommendations based on user progress.'
    },
    {
        slug: 'security-dashboard',
        title: 'Security Dashboard',
        category: 'Cybersecurity',
        description: 'Real-time threat monitoring and analytics platform for enterprise security teams.',
        fullDescription: 'An enterprise-grade security operations center (SOC) dashboard that provides real-time threat detection, incident response workflows, and comprehensive security analytics.',
        technologies: ['React', 'Python', 'AWS', 'Elasticsearch', 'Kafka'],
        gradient: 'from-[#f43f5e] to-[#f97316]',
        features: [
            'Real-time threat detection',
            'Automated incident response',
            'SIEM integration',
            'Compliance reporting',
            'Threat intelligence feeds',
            'Custom alerting rules'
        ],
        duration: '8 months',
        year: '2023',
        client: 'SecureNet Corp',
        challenge: 'Building a platform that could process millions of security events in real-time while providing actionable insights to security analysts.',
        solution: 'We implemented a distributed event processing architecture using Kafka and Elasticsearch, with machine learning models for anomaly detection and automated threat classification.'
    },
    {
        slug: 'property-management',
        title: 'Property Management',
        category: 'Web Development',
        description: 'Comprehensive platform for property managers to handle tenants, payments, and maintenance.',
        fullDescription: 'A complete property management solution that streamlines operations for landlords and property managers, including tenant management, rent collection, and maintenance tracking.',
        technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Twilio'],
        gradient: 'from-[#8b5cf6] to-[#d946ef]',
        features: [
            'Tenant portal and communication',
            'Online rent payment',
            'Maintenance request system',
            'Lease management',
            'Financial reporting',
            'Document storage'
        ],
        duration: '5 months',
        year: '2024',
        client: 'PropertyPro LLC',
        challenge: 'Replacing multiple disconnected tools with a unified platform that serves both property managers and tenants effectively.',
        solution: 'We built an all-in-one platform with role-based access, automated rent reminders, and a maintenance workflow system that reduced response times by 60%.'
    },
    {
        slug: 'food-ordering-app',
        title: 'Food Ordering App',
        category: 'Mobile Apps',
        description: 'Mobile app for seamless food ordering, table reservations, and loyalty rewards.',
        fullDescription: 'A feature-rich mobile application for restaurants that enables customers to browse menus, place orders, make reservations, and earn rewards through a loyalty program.',
        technologies: ['Flutter', 'Node.js', 'MongoDB', 'Firebase', 'Stripe'],
        gradient: 'from-[#f97316] to-[#eab308]',
        features: [
            'Digital menu with photos',
            'Order customization',
            'Table reservation system',
            'Loyalty rewards program',
            'Push notifications',
            'Multiple payment options'
        ],
        duration: '4 months',
        year: '2024',
        client: 'TastyBites Restaurant Group',
        challenge: 'Creating an app that enhances the dining experience while reducing wait times and increasing customer retention.',
        solution: 'We developed a Flutter app with real-time order tracking, integrated a points-based loyalty system, and implemented smart notifications that increased repeat orders by 40%.'
    },
    {
        slug: 'enterprise-security-audit',
        title: 'Enterprise Security Audit',
        category: 'Cybersecurity',
        description: 'Complete security assessment and vulnerability remediation for Fortune 500 company.',
        fullDescription: 'A comprehensive security audit engagement that included penetration testing, vulnerability assessment, and remediation guidance for a major enterprise client.',
        technologies: ['Pen Testing', 'OWASP', 'Compliance', 'Burp Suite', 'Metasploit'],
        gradient: 'from-[#06b6d4] to-[#3b82f6]',
        features: [
            'Network penetration testing',
            'Web application security',
            'Social engineering assessment',
            'Compliance gap analysis',
            'Remediation roadmap',
            'Security training'
        ],
        duration: '3 months',
        year: '2023',
        client: 'Fortune 500 Company',
        challenge: 'Identifying and addressing security vulnerabilities across a complex enterprise infrastructure with minimal disruption to operations.',
        solution: 'We conducted a phased assessment approach, prioritized findings by risk level, and worked closely with internal teams to implement fixes while maintaining business continuity.'
    },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find(p => p.slug === slug);
};
