import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Admin } from '@/models';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// GET - Verify session and get current admin
export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get('admin_token')?.value;

        if (!token) {
            return NextResponse.json(
                { authenticated: false, admin: null },
                { status: 401 }
            );
        }

        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET) as { id: string; email: string; role: string };

        await dbConnect();
        const admin = await Admin.findById(decoded.id).select('-password');

        if (!admin) {
            return NextResponse.json(
                { authenticated: false, admin: null },
                { status: 401 }
            );
        }

        return NextResponse.json({
            authenticated: true,
            admin: {
                id: admin._id,
                email: admin.email,
                name: admin.name,
                role: admin.role,
            },
        });
    } catch (error) {
        console.error('Session verification error:', error);
        return NextResponse.json(
            { authenticated: false, admin: null },
            { status: 401 }
        );
    }
}
