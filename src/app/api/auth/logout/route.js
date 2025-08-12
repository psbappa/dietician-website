import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  const cookieStore = await cookies();

  // Remove the token cookie
  cookieStore.set({
    name: 'token',
    value: '',
    path: '/',
    expires: new Date(0) // Expire immediately
  });

  return NextResponse.json({ message: 'Logged out successfully' });
}
