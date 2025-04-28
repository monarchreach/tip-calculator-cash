/**
 * Metadata Helper Functions
 * 
 * This file provides utility functions to help implement SEO metadata
 * in Next.js App Router pages.
 */

import { Metadata } from 'next';
import { getMetadataByPath, PageMetadata } from './metadata';

// Valid OpenGraph types
type OpenGraphType = 'website' | 'article' | 'book' | 'profile' | 'music.song' | 
  'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 
  'video.episode' | 'video.tv_show' | 'video.other';

/**
 * Generates Next.js Metadata object from our PageMetadata
 * Used in page.tsx files for static metadata
 */
export function generateMetadata(params: {
  path: string;
  dynamicParams?: Record<string, string>;
  overrides?: Partial<PageMetadata>;
}): Metadata {
  const { path, dynamicParams, overrides } = params;
  
  // Build the full path if we have dynamic parameters
  const fullPath = buildPathWithParams(path, dynamicParams);

  // Get the base metadata from our system
  const baseMetadata = getMetadataByPath(fullPath);
  
  // Apply any overrides
  const mergedMetadata = {
    ...baseMetadata,
    ...overrides,
    openGraph: {
      ...baseMetadata.openGraph,
      ...(overrides?.openGraph || {}),
    },
    twitter: {
      ...baseMetadata.twitter,
      ...(overrides?.twitter || {}),
    },
    robots: {
      ...baseMetadata.robots,
      ...(overrides?.robots || {}),
    },
  };
  
  // Convert our internal metadata format to Next.js Metadata format
  return {
    title: mergedMetadata.title,
    description: mergedMetadata.description,
    openGraph: {
      title: mergedMetadata.openGraph.title,
      description: mergedMetadata.openGraph.description,
      url: mergedMetadata.openGraph.url,
      siteName: mergedMetadata.openGraph.siteName,
      images: mergedMetadata.openGraph.images.map(img => ({
        url: img.url,
        width: img.width,
        height: img.height,
        alt: img.alt,
      })),
      locale: mergedMetadata.openGraph.locale,
      type: mergedMetadata.openGraph.type as OpenGraphType,
    },
    twitter: {
      card: mergedMetadata.twitter.card as 'summary' | 'summary_large_image' | 'app' | 'player',
      title: mergedMetadata.twitter.title,
      description: mergedMetadata.twitter.description,
      creator: mergedMetadata.twitter.creator,
      site: mergedMetadata.twitter.site,
      images: [mergedMetadata.twitter.image],
    },
    alternates: {
      ...mergedMetadata.alternates,
      canonical: mergedMetadata.canonical,
    },
    robots: mergedMetadata.robots,
  };
}

/**
 * Helper to build a path with dynamic parameters
 */
function buildPathWithParams(basePath: string, params?: Record<string, string>): string {
  if (!params) return basePath;
  
  let result = basePath;
  Object.entries(params).forEach(([key, value]) => {
    result = result.replace(`[${key}]`, value);
  });
  
  return result;
}

/**
 * Get breadcrumbs for a given page path
 */
export function getBreadcrumbs(path: string): Array<{ name: string; url: string }> {
  // Remove trailing slash if present
  const cleanPath = path.endsWith('/') ? path.slice(0, -1) : path;
  
  // Split path into segments
  const segments = cleanPath.split('/').filter(Boolean);
  
  // Generate breadcrumbs
  const breadcrumbs = [
    { name: 'Home', url: '/' },
  ];
  
  let currentPath = '';
  
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // For dynamic segments, try to make a readable name
    let name = segment;
    
    // Handle common segments
    if (segment === 'calculators') {
      name = 'Calculators';
    } 
    // Make dynamic segments readable by converting slug format to title case
    else {
      name = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
    }
    
    breadcrumbs.push({
      name,
      url: currentPath,
    });
  });
  
  return breadcrumbs;
}

/**
 * Get page type based on path
 */
export function getPageType(path: string): 'home' | 'calculator' | 'article' | 'howto' {
  if (path === '/') return 'home';
  if (path.includes('/calculators/')) return 'calculator';
  if (path.includes('/blog/')) return 'article';
  if (path.includes('/how-to-')) return 'howto';
  return 'home';
} 