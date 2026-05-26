import { NextResponse } from 'next/server';

export async function GET() {
  const endpoint = 'expertise_cards.php';

  try {
    const res = await fetch(endpoint, {
      next: { revalidate: 60 },
      headers: { 'Content-Type': 'text/html' },
    });
    const html = await res.text();
    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('Proxy error:', error);
    return new NextResponse('Failed to fetch expertise cards', { status: 500 });
  }
}