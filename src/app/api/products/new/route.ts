// app/api/products/new/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('new_products.php', {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`CMS API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 's-maxage=3600, stale-while-revalidate=1800',
      },
    });
  } catch (error) {
    console.error('Error fetching from new_products.php:', error);
    return NextResponse.json(
      { success: false, products: [], total: 0, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}