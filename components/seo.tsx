"use client"

import React from "react"
import { usePathname } from "next/navigation"
import Head from "next/head"
import Script from "next/script"
import { getMetadataByPath, PageMetadata } from "@/lib/metadata"
import { SchemaOrg } from "./schema-org"
import { generateCompleteSchema } from "@/lib/schema"

interface SeoProps {
  metadata?: PageMetadata
  noindex?: boolean
  pageType?: 'home' | 'calculator' | 'article' | 'howto'
  schema?: Record<string, any>
  breadcrumbs?: Array<{ name: string; url: string }>
}

export function Seo({ 
  metadata, 
  noindex = false, 
  pageType = 'home',
  schema,
  breadcrumbs
}: SeoProps) {
  const pathname = usePathname()
  
  // Get metadata either from props or from our metadata system
  const meta = metadata || getMetadataByPath(pathname)
  
  // Generate schema if not provided
  const generatedSchema = schema || generateCompleteSchema({
    type: pageType,
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    breadcrumbs: breadcrumbs,
    imageUrl: meta.openGraph.images?.[0]?.url,
  });
  
  return (
    <>
      {/* Using next/head is not ideal in App Router, but we keep it for compatibility */}
      <Head>
        {/* Override robots if specifically requested */}
        {noindex && <meta name="robots" content="noindex, follow" />}
        
        {/* Alternate Languages */}
        {meta.alternates?.languages && 
          Object.entries(meta.alternates.languages).map(([lang, url]) => (
            <link key={lang} rel="alternate" hrefLang={lang} href={url} />
          ))
        }
      </Head>
      
      {/* JSON-LD Schema */}
      <SchemaOrg schema={Array.isArray(generatedSchema) ? generatedSchema[0] : generatedSchema} />
      
      {/* For multiple schema objects */}
      {Array.isArray(generatedSchema) && generatedSchema.slice(1).map((schemaItem, index) => (
        <SchemaOrg key={`schema-${index + 1}`} schema={schemaItem} />
      ))}
    </>
  )
} 