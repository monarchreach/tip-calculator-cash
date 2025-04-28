"use client"

import type * as React from "react"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { HelpCircle, ChevronDown } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export interface FAQItem {
  question: string
  answer: React.ReactNode
  category?: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
  categorized?: boolean
  structuredData?: boolean
  defaultCategory?: string
}

export function FAQAccordion({ 
  items, 
  className, 
  categorized = false,
  structuredData = true,
  defaultCategory
}: FAQAccordionProps) {
  const categories = categorized 
    ? Array.from(new Set(items.map(item => item.category || 'General')))
    : ['All'];

  const [activeCategory, setActiveCategory] = useState<string>(defaultCategory || categories[0]);
  
  // Filter items by active category when in categorized mode
  const filteredItems = categorized
    ? items.filter(item => (item.category || 'General') === activeCategory)
    : items;

  // Generate schema.org structured data for FAQs
  const generateFAQSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": items.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": typeof item.answer === "string" 
            ? item.answer 
            : "Please visit our website for a detailed answer to this question."
        }
      }))
    };
  };

  return (
    <>
      {/* Add structured data for search engines */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
        />
      )}
      
      {/* Category tabs for categorized FAQs */}
      {categorized && categories.length > 1 && (
        <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory} className="w-full mb-6">
          <TabsList className="w-full justify-start overflow-x-auto">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="px-4 py-2"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}

      {/* FAQ Accordion */}
      <Accordion 
        type="single" 
        collapsible 
        className={cn("w-full space-y-4", className)}
      >
        {filteredItems.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border border-muted rounded-lg overflow-hidden hover:border-primary/20 transition-colors shadow-sm hover-lift"
            data-faq-item
            data-category={item.category || 'General'}
          >
            <AccordionTrigger 
              className="text-left px-4 py-4 hover:bg-muted/50 transition-colors group"
              aria-label={`Question: ${item.question}`}
            >
              <div className="flex items-start gap-3 flex-1">
                <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span className="font-medium">{item.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-0">
              <div className="pl-8 border-l border-muted/50 ml-3">
                {typeof item.answer === "string" ? (
                  <p className="text-muted-foreground">{item.answer}</p>
                ) : (
                  item.answer
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      {/* Show "No questions in this category" message if needed */}
      {categorized && filteredItems.length === 0 && (
        <div className="text-center py-10 border rounded-lg">
          <HelpCircle className="h-10 w-10 mx-auto text-muted-foreground opacity-20" />
          <p className="mt-4 text-muted-foreground">No questions available in this category.</p>
        </div>
      )}
    </>
  )
}
