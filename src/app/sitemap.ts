import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';
import { practiceAreas, publications } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/practice',
    '/publications',
    '/speaking',
    '/clients',
    '/contact',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const practiceAreaRoutes = practiceAreas.map((area) => ({
    url: `${siteConfig.url}/practice/${area.slug}`,
    lastModified: new Date(),
  }));

  const publicationRoutes = publications.map((pub) => ({
    url: `${siteConfig.url}/publications/${pub.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...practiceAreaRoutes];
}
