'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export function useCMSContent() {
  const params = useParams();
  const slug = params.slug ? params.slug.join('/') : '';
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchContent = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_BASE}/pages_direct.php?slug=${slug}`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setContent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [slug]);

  return { content, loading, error };
}