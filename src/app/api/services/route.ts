import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Service } from '@/models';

// GET all services
export async function GET() {
    try {
        await dbConnect();
        const services = await Service.find({}).sort({ order: 1, createdAt: -1 });
        return NextResponse.json(services);
    } catch (error) {
        console.error('Error fetching services:', error);
        return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
    }
}

// CREATE a new service
export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const body = await request.json();
        const service = await Service.create(body);
        return NextResponse.json(service, { status: 201 });
    } catch (error) {
        console.error('Error creating service:', error);
        return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
    }
}
