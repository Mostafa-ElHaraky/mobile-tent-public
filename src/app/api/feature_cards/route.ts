import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const isMobile = searchParams.get('mobile') === 'true';
  
  // You can use the same endpoint or separate; here we use one PHP for both
  const endpoint = 'feature_cards.php';

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
    return new NextResponse('Failed to fetch feature cards', { status: 500 });
  }
}