import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { SiteSettings } from '@/models';

// Default settings
const defaultSettings = {
    companyName: 'FrontalMinds',
    tagline: 'Digital Solutions',
    description: 'Pioneering the future of digital solutions.',
    email: 'hello@frontalminds.com',
    phone: '+234 123 456 7890',
    address: 'Lagos, Nigeria',
    socialLinks: {
        twitter: '',
        linkedin: '',
        github: '',
        instagram: '',
        facebook: '',
        youtube: '',
    },
};

// GET settings
export async function GET() {
    try {
        await dbConnect();
        let settings = await SiteSettings.findOne({});

        if (!settings) {
            // Create default settings if none exist
            settings = await SiteSettings.create(defaultSettings);
        }

        return NextResponse.json(settings);
    } catch (error) {
        console.error('Error fetching settings:', error);
        return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
    }
}

// UPDATE settings
export async function PUT(request: NextRequest) {
    try {
        await dbConnect();
        const body = await request.json();

        let settings = await SiteSettings.findOne({});

        if (!settings) {
            settings = await SiteSettings.create({ ...defaultSettings, ...body });
        } else {
            settings = await SiteSettings.findByIdAndUpdate(settings._id, body, { new: true });
        }

        return NextResponse.json(settings);
    } catch (error) {
        console.error('Error updating settings:', error);
        return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
    }
}
