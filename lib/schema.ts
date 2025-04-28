/**
 * Schema.org Structured Data Generators
 * 
 * This file provides factory functions for generating JSON-LD schema markup
 * for various entity types used throughout the site.
 */

import { siteMetadata } from './metadata';

// Generic Schema type
type SchemaObject = Record<string, any>;

// Organization schema
export function generateOrganizationSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteMetadata.siteUrl}/#organization`,
    "name": siteMetadata.siteName,
    "url": siteMetadata.siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteMetadata.siteUrl}/images/logo.png`,
      "width": 190,
      "height": 60
    },
    "sameAs": [
      "https://twitter.com/tipcalculatorhub",
      "https://facebook.com/tipcalculatorhub",
      "https://instagram.com/tipcalculatorhub"
    ]
  };
}

// Website schema
export function generateWebsiteSchema(): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteMetadata.siteUrl}/#website`,
    "url": siteMetadata.siteUrl,
    "name": siteMetadata.title,
    "description": siteMetadata.description,
    "publisher": {
      "@id": `${siteMetadata.siteUrl}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteMetadata.siteUrl}/calculators/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

// WebPage schema
export function generateWebPageSchema(props: {
  title: string;
  description: string;
  url: string;
  lastUpdated?: string;
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${props.url}#webpage`,
    "url": props.url,
    "name": props.title,
    "description": props.description,
    "isPartOf": {
      "@id": `${siteMetadata.siteUrl}/#website`
    },
    "inLanguage": siteMetadata.locale,
    "datePublished": props.lastUpdated || new Date().toISOString(),
    "dateModified": props.lastUpdated || new Date().toISOString()
  };
}

// BreadcrumbList schema
export function generateBreadcrumbSchema(props: {
  items: Array<{
    name: string;
    url: string;
  }>;
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": props.items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// Calculator (SoftwareApplication) schema
export function generateCalculatorSchema(props: {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": props.name,
    "description": props.description,
    "applicationCategory": props.applicationCategory || "UtilitiesApplication",
    "operatingSystem": props.operatingSystem || "Web",
    "offers": props.offers || {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "url": props.url
  };
}

// FAQ schema
export function generateFAQSchema(props: {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": props.questions.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

// Article schema
export function generateArticleSchema(props: {
  headline: string;
  description: string;
  url: string;
  imageUrl: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": props.headline,
    "description": props.description,
    "image": props.imageUrl,
    "author": {
      "@type": "Person",
      "name": props.authorName
    },
    "publisher": {
      "@id": `${siteMetadata.siteUrl}/#organization`
    },
    "url": props.url,
    "datePublished": props.datePublished,
    "dateModified": props.dateModified || props.datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": props.url
    }
  };
}

// HowTo schema (for guide pages)
export function generateHowToSchema(props: {
  name: string;
  description: string;
  url: string;
  imageUrl: string;
  steps: Array<{
    name: string;
    text: string;
    url?: string;
    imageUrl?: string;
  }>;
  totalTime?: string;
  estimatedCost?: {
    currency: string;
    value: string;
  };
}): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": props.name,
    "description": props.description,
    "image": props.imageUrl,
    "totalTime": props.totalTime,
    "estimatedCost": props.estimatedCost 
      ? {
          "@type": "MonetaryAmount",
          "currency": props.estimatedCost.currency,
          "value": props.estimatedCost.value
        } 
      : undefined,
    "step": props.steps.map((step, index) => ({
      "@type": "HowToStep",
      "url": step.url,
      "name": step.name,
      "itemListElement": {
        "@type": "HowToDirection",
        "text": step.text
      },
      "image": step.imageUrl,
      "position": index + 1
    }))
  };
}

// Generate a complete schema object with all nested entities
export function generateCompleteSchema(page: {
  type: 'home' | 'calculator' | 'article' | 'howto';
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  lastUpdated?: string;
  breadcrumbs?: Array<{ name: string; url: string; }>;
  calculatorProps?: Parameters<typeof generateCalculatorSchema>[0];
  faqProps?: Parameters<typeof generateFAQSchema>[0];
  articleProps?: Parameters<typeof generateArticleSchema>[0];
  howToProps?: Parameters<typeof generateHowToSchema>[0];
}): SchemaObject[] {
  const schemas: SchemaObject[] = [
    generateOrganizationSchema(),
    generateWebsiteSchema(),
    generateWebPageSchema({
      title: page.title,
      description: page.description,
      url: page.url,
      lastUpdated: page.lastUpdated
    })
  ];

  // Add breadcrumbs if available
  if (page.breadcrumbs) {
    schemas.push(generateBreadcrumbSchema({ items: page.breadcrumbs }));
  }

  // Add page-specific schema
  switch (page.type) {
    case 'calculator':
      if (page.calculatorProps) {
        schemas.push(generateCalculatorSchema(page.calculatorProps));
      }
      if (page.faqProps) {
        schemas.push(generateFAQSchema(page.faqProps));
      }
      break;
    case 'article':
      if (page.articleProps) {
        schemas.push(generateArticleSchema(page.articleProps));
      }
      break;
    case 'howto':
      if (page.howToProps) {
        schemas.push(generateHowToSchema(page.howToProps));
      }
      break;
  }

  return schemas;
} 