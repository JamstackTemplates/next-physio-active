import type { MetadataRoute } from 'next';
import { absoluteUrl } from '../lib/paths';

export const dynamic = 'force-static';

export const PUBLIC_ROUTES = ['/', '/conditions/', '/team/', '/fees/', '/contact/'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_ROUTES.flatMap(path => {
    const url = absoluteUrl(path);
    return url ? [{ url }] : [];
  });
}
