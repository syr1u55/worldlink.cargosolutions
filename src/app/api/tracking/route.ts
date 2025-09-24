
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface TrackingItem {
  trackingNumber: string;
  status: string;
  location: string;
  details: string;
  timestamp: string;
}

const dataFilePath = path.join(process.cwd(), 'data', 'tracking.json');

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { trackingNumber, status, location, details } = body;

    if (!trackingNumber || !status || !location || !details) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    console.log('Request body:', body);

    const newTrackingInfo = {
      trackingNumber,
      status,
      location,
      details,
      timestamp: new Date().toISOString(),
    };

    let trackingData: TrackingItem[] = [];
    if (fs.existsSync(dataFilePath)) {
      const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
      if (fileContent) {
        trackingData = JSON.parse(fileContent);
      }
    }

    trackingData.push(newTrackingInfo);
    console.log('Writing to file:', trackingData);
    fs.writeFileSync(dataFilePath, JSON.stringify(trackingData, null, 2));

    return new NextResponse(JSON.stringify(newTrackingInfo), { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/tracking:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const trackingNumber = searchParams.get('trackingNumber');

  if (!trackingNumber) {
    return new NextResponse('Tracking number is required', { status: 400 });
  }

  if (!fs.existsSync(dataFilePath)) {
    return new NextResponse('Tracking data not found', { status: 404 });
  }

  const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
  const trackingData: TrackingItem[] = JSON.parse(fileContent);

  const trackingInfo = trackingData.filter(
    (item: TrackingItem) => item.trackingNumber === trackingNumber
  );

  if (trackingInfo.length === 0) {
    return new NextResponse('Tracking number not found', { status: 404 });
  }

  return new NextResponse(JSON.stringify(trackingInfo), { status: 200 });
}
