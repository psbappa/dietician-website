import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import User from '@/models/User';
import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies(); // ✅ await here
    console.log('Cookie Store:', cookieStore);
    // Retrieve the token from cookies
    const token = cookieStore.get('token')?.value;

    if (!token) return NextResponse.json({ user: null }, { status: 401 });

    const payload = verifyToken(token);
    if (!payload) return NextResponse.json({ user: null }, { status: 401 });

    await connectDB();
    const user = await User.findById(payload.userId).select('-password');
    if (!user) return NextResponse.json({ user: null }, { status: 404 });

    return NextResponse.json({ user });
  } catch (err) {
    return NextResponse.json({ user: null }, { status: 500 });
  }
}
