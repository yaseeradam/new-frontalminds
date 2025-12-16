import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Admin } from '@/models';
import bcrypt from 'bcryptjs';

// POST - Create initial admin (only works if no admins exist)
export async function POST(request: NextRequest) {
    try {
        await dbConnect();

        // Check if any admin exists
        const existingAdmin = await Admin.findOne({});

        if (existingAdmin) {
            return NextResponse.json(
                { error: 'Admin already exists. Setup complete.' },
                { status: 400 }
            );
        }

        const { email, password, name } = await request.json();

        if (!email || !password || !name) {
            return NextResponse.json(
                { error: 'Email, password, and name are required' },
                { status: 400 }
            );
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create admin
        const admin = await Admin.create({
            email: email.toLowerCase(),
            password: hashedPassword,
            name,
            role: 'admin',
        });

        return NextResponse.json({
            success: true,
            message: 'Admin created successfully',
            admin: {
                id: admin._id,
                email: admin.email,
                name: admin.name,
                role: admin.role,
            },
        }, { status: 201 });
    } catch (error) {
        console.error('Setup error:', error);
        return NextResponse.json(
            { error: 'Setup failed' },
            { status: 500 }
        );
    }
}

// GET - Check if setup is needed
export async function GET() {
    try {
        await dbConnect();
        const existingAdmin = await Admin.findOne({});

        return NextResponse.json({
            setupRequired: !existingAdmin,
        });
    } catch (error) {
        console.error('Setup check error:', error);
        return NextResponse.json(
            { error: 'Failed to check setup status' },
            { status: 500 }
        );
    }
}
