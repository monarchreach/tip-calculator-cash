/**
 * Metadata Management System
 * 
 * This file implements an Entity-Attribute-Value (EAV) pattern for SEO metadata.
 * It provides structured metadata for all pages including title, description,
 * OpenGraph tags, Twitter cards, and canonical URLs.
 */

import { calculatorCategories, locations } from './data';

// Base metadata that applies to all pages
export const siteMetadata = {
  title: "Tip Calculator Tool",
  description: "Calculate tips accurately for different services and locations worldwide. Simple, fast, and free tip calculators for restaurants, hotels, taxis and more.",
  siteUrl: "https://tipcalculator.cash",
  siteName: "Tip Calculator Tool",
  locale: "en-US",
  type: "website",
  twitterHandle: "@tipcalculatorhub",
  twitterCardType: "summary_large_image",
  authorName: "Tip Calculator Tool Team",
  defaultOgImage: "/images/og-default.jpg",
  themeColor: "#4f46e5",
};

// Helper function to generate full URLs
const fullUrl = (path: string): string => {
  return `${siteMetadata.siteUrl}${path}`;
};

// Types for our metadata system
export interface PageMetadata {
  title: string;
  description: string;
  canonical: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
    locale: string;
    type: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    site: string;
    creator: string;
    image: string;
  };
  alternates?: {
    canonical?: string;
    languages?: Record<string, string>;
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
    nocache?: boolean;
    googleBot?: {
      index?: boolean;
      follow?: boolean;
      noimageindex?: boolean;
    };
  };
}

// Factory function to create metadata objects with defaults
export function createMetadata(params: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}): PageMetadata {
  const { title, description, path, ogImage, noindex } = params;
  const fullTitle = `${title} | ${siteMetadata.title}`;
  const ogImageUrl = ogImage || siteMetadata.defaultOgImage;
  
  return {
    title: fullTitle,
    description,
    canonical: fullUrl(path),
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl(path),
      siteName: siteMetadata.siteName,
      images: [
        {
          url: fullUrl(ogImageUrl),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: siteMetadata.locale,
      type: siteMetadata.type,
    },
    twitter: {
      card: siteMetadata.twitterCardType,
      title: fullTitle,
      description,
      site: siteMetadata.twitterHandle,
      creator: siteMetadata.twitterHandle,
      image: fullUrl(ogImageUrl),
    },
    robots: noindex 
      ? {
          index: false,
          follow: true,
        }
      : undefined,
  };
}

// Homepage Metadata
export const homeMetadata = createMetadata({
  title: "Tip Calculator Tool - Calculate Tips Easily for Any Service",
  description: "Free tip calculators for restaurants, hotels, taxis, and more. Get accurate tip amounts based on bill total, service quality, and local customs worldwide.",
  path: "/",
});

// Calculators Directory Metadata
export const calculatorsDirectoryMetadata = createMetadata({
  title: "Tip Calculators Directory - Find the Perfect Calculator for Any Service",
  description: "Browse our collection of specialized tip calculators for restaurants, hotels, transportation, personal services, and more. Calculate tips accurately for any situation.",
  path: "/calculators/",
});

// Generate metadata for all calculator types
export const calculatorMetadata: Record<string, PageMetadata> = {};

calculatorCategories.forEach(category => {
  category.calculators.forEach(calculator => {
    calculatorMetadata[calculator.slug] = createMetadata({
      title: calculator.title,
      description: calculator.excerpt,
      path: `/calculators/${calculator.slug}/`,
    });
  });
});

// Generate metadata for location-specific calculators
export const locationCalculatorMetadata: Record<string, Record<string, PageMetadata>> = {};

locations.forEach(location => {
  locationCalculatorMetadata[location.slug] = {};
  
  calculatorCategories.forEach(category => {
    category.calculators.forEach(calculator => {
      locationCalculatorMetadata[location.slug][calculator.slug] = createMetadata({
        title: `${calculator.title} for ${location.name}`,
        description: `Calculate tips for ${calculator.description.toLowerCase()} in ${location.name}, ${location.country}. Local tipping customs, percentages, and guidelines.`,
        path: `/calculators/${calculator.slug}/${location.slug}/`,
      });
    });
  });
});

// Metadata for informational pages
export const informationalPagesMetadata = {
  howToCalculateTip: createMetadata({
    title: "How to Calculate a Tip - Complete Guide",
    description: "Learn how to calculate tips correctly in any situation. Step-by-step guide for determining tip amounts based on bill total, service quality, and local customs.",
    path: "/how-to-calculate-a-tip/",
  }),
  globalTippingEtiquette: createMetadata({
    title: "Global Tipping Etiquette - Tipping Customs Around the World",
    description: "Explore tipping customs and etiquette from countries around the world. Learn appropriate tip amounts for different services across global destinations.",
    path: "/global-tipping-etiquette/",
  }),
  digitalTippingGuide: createMetadata({
    title: "Digital Tipping QR Code Guide - Modern Tipping Methods",
    description: "Complete guide to digital tipping using QR codes, apps, and contactless payments. Learn how to tip electronically at restaurants, hotels, and for services.",
    path: "/digital-tipping-qr-code-guide/",
  }),
};

// Function to get metadata by path
export function getMetadataByPath(path: string): PageMetadata {
  // Clean the path for matching
  const cleanPath = path.endsWith("/") ? path : `${path}/`;
  
  // Check homepage
  if (cleanPath === "/") return homeMetadata;
  
  // Check calculators directory
  if (cleanPath === "/calculators/") return calculatorsDirectoryMetadata;
  
  // Check calculator pages
  const calculatorMatch = cleanPath.match(/^\/calculators\/([^\/]+)\/$/);
  if (calculatorMatch && calculatorMatch[1]) {
    const slug = calculatorMatch[1];
    if (calculatorMetadata[slug]) return calculatorMetadata[slug];
  }
  
  // Check location calculator pages
  const locationMatch = cleanPath.match(/^\/calculators\/([^\/]+)\/([^\/]+)\/$/);
  if (locationMatch && locationMatch[1] && locationMatch[2]) {
    const calculatorSlug = locationMatch[1];
    const locationSlug = locationMatch[2];
    if (locationCalculatorMetadata[locationSlug]?.[calculatorSlug]) {
      return locationCalculatorMetadata[locationSlug][calculatorSlug];
    }
  }
  
  // Check informational pages
  if (cleanPath === "/how-to-calculate-a-tip/") return informationalPagesMetadata.howToCalculateTip;
  if (cleanPath === "/global-tipping-etiquette/") return informationalPagesMetadata.globalTippingEtiquette;
  if (cleanPath === "/digital-tipping-qr-code-guide/") return informationalPagesMetadata.digitalTippingGuide;
  
  // Default fallback
  return createMetadata({
    title: "Tip Calculator Tool",
    description: "Calculate tips accurately for different services and locations worldwide. Simple, fast, and free tip calculators.",
    path: cleanPath,
  });
} 