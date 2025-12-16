import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { TeamMember } from '@/models';

// GET single team member
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const member = await TeamMember.findById(id);

        if (!member) {
            return NextResponse.json({ error: 'Team member not found' }, { status: 404 });
        }

        return NextResponse.json(member);
    } catch (error) {
        console.error('Error fetching team member:', error);
        return NextResponse.json({ error: 'Failed to fetch team member' }, { status: 500 });
    }
}

// UPDATE team member
export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const body = await request.json();
        const member = await TeamMember.findByIdAndUpdate(id, body, { new: true });

        if (!member) {
            return NextResponse.json({ error: 'Team member not found' }, { status: 404 });
        }

        return NextResponse.json(member);
    } catch (error) {
        console.error('Error updating team member:', error);
        return NextResponse.json({ error: 'Failed to update team member' }, { status: 500 });
    }
}

// DELETE team member
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const member = await TeamMember.findByIdAndDelete(id);

        if (!member) {
            return NextResponse.json({ error: 'Team member not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Team member deleted successfully' });
    } catch (error) {
        console.error('Error deleting team member:', error);
        return NextResponse.json({ error: 'Failed to delete team member' }, { status: 500 });
    }
}
