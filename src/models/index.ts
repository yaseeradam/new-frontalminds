import mongoose, { Document, Model, Schema } from 'mongoose';

// =============================================
// PROJECT MODEL
// =============================================

export interface IProject extends Document {
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
    createdAt: Date;
    updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        fullDescription: { type: String, required: true },
        category: { type: String, required: true },
        technologies: [{ type: String }],
        year: { type: String, required: true },
        duration: { type: String, required: true },
        client: { type: String, required: true },
        challenge: { type: String, required: true },
        solution: { type: String, required: true },
        features: [{ type: String }],
        gradient: { type: String, default: 'from-[#22c55e] to-[#16a34a]' },
        image: { type: String },
    },
    { timestamps: true }
);

// =============================================
// TEAM MEMBER MODEL
// =============================================

export interface ITeamMember extends Document {
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
    order: number;
    createdAt: Date;
    updatedAt: Date;
}

const TeamMemberSchema = new Schema<ITeamMember>(
    {
        name: { type: String, required: true },
        role: { type: String, required: true },
        bio: { type: String, required: true },
        initials: { type: String, required: true },
        gradient: { type: String, default: 'from-[#22c55e] to-[#16a34a]' },
        color: { type: String, default: '#22c55e' },
        skills: [{ type: String }],
        email: { type: String },
        linkedin: { type: String },
        twitter: { type: String },
        github: { type: String },
        image: { type: String },
        order: { type: Number, default: 0 },
    },
    { timestamps: true }
);

// =============================================
// SERVICE MODEL
// =============================================

export interface IService extends Document {
    title: string;
    description: string;
    icon: string;
    features: string[];
    color: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
}

const ServiceSchema = new Schema<IService>(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        icon: { type: String, required: true },
        features: [{ type: String }],
        color: { type: String, default: '#22c55e' },
        order: { type: Number, default: 0 },
    },
    { timestamps: true }
);

// =============================================
// TESTIMONIAL MODEL
// =============================================

export interface ITestimonial extends Document {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    image?: string;
    featured: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const TestimonialSchema = new Schema<ITestimonial>(
    {
        name: { type: String, required: true },
        role: { type: String, required: true },
        company: { type: String, required: true },
        content: { type: String, required: true },
        rating: { type: Number, required: true, min: 1, max: 5 },
        image: { type: String },
        featured: { type: Boolean, default: false },
    },
    { timestamps: true }
);

// =============================================
// SITE SETTINGS MODEL
// =============================================

export interface ISiteSettings extends Document {
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

const SiteSettingsSchema = new Schema<ISiteSettings>(
    {
        companyName: { type: String, default: 'FrontalMinds' },
        tagline: { type: String, default: 'Digital Solutions' },
        description: { type: String, default: '' },
        email: { type: String, default: '' },
        phone: { type: String, default: '' },
        address: { type: String, default: '' },
        socialLinks: {
            twitter: { type: String, default: '' },
            linkedin: { type: String, default: '' },
            github: { type: String, default: '' },
            instagram: { type: String, default: '' },
            facebook: { type: String, default: '' },
            youtube: { type: String, default: '' },
        },
        logo: { type: String },
        favicon: { type: String },
    },
    { timestamps: true }
);

// =============================================
// ADMIN USER MODEL
// =============================================

export interface IAdmin extends Document {
    email: string;
    password: string;
    name: string;
    role: 'admin' | 'editor';
    createdAt: Date;
    updatedAt: Date;
}

const AdminSchema = new Schema<IAdmin>(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        name: { type: String, required: true },
        role: { type: String, enum: ['admin', 'editor'], default: 'editor' },
    },
    { timestamps: true }
);

// =============================================
// EXPORT MODELS
// =============================================

export const Project: Model<IProject> =
    mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);

export const TeamMember: Model<ITeamMember> =
    mongoose.models.TeamMember || mongoose.model<ITeamMember>('TeamMember', TeamMemberSchema);

export const Service: Model<IService> =
    mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);

export const Testimonial: Model<ITestimonial> =
    mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);

export const SiteSettings: Model<ISiteSettings> =
    mongoose.models.SiteSettings || mongoose.model<ISiteSettings>('SiteSettings', SiteSettingsSchema);

export const Admin: Model<IAdmin> =
    mongoose.models.Admin || mongoose.model<IAdmin>('Admin', AdminSchema);
