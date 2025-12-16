import { NextResponse } from 'next/server';

// POST - Logout
export async function POST() {
    try {
        const response = NextResponse.json({ success: true, message: 'Logged out successfully' });

        // Clear the auth cookie
        response.cookies.set('admin_token', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 0,
        });

        return response;
    } catch (error) {
        console.error('Logout error:', error);
        return NextResponse.json({ error: 'Logout failed' }, { status: 500 });
    }
}
