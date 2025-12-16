import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { TeamMember } from '@/models';

// GET all team members
export async function GET() {
    try {
        await dbConnect();
        const members = await TeamMember.find({}).sort({ order: 1, createdAt: -1 });
        return NextResponse.json(members);
    } catch (error) {
        console.error('Error fetching team members:', error);
        return NextResponse.json({ error: 'Failed to fetch team members' }, { status: 500 });
    }
}

// CREATE a new team member
export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const body = await request.json();
        const member = await TeamMember.create(body);
        return NextResponse.json(member, { status: 201 });
    } catch (error) {
        console.error('Error creating team member:', error);
        return NextResponse.json({ error: 'Failed to create team member' }, { status: 500 });
    }
}
