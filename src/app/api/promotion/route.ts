import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const isMobile = searchParams.get('mobile') === 'true';
  
  const endpoint = 'promotion_block.php';
  
  try {
    const res = await fetch(endpoint, {
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'text/html',
      },
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
    return new NextResponse('Failed to fetch promotion', { status: 500 });
  }
}