"use client"

import type * as React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: React.ReactNode
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className={cn("w-full", className)}>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
          <AccordionContent>
            {typeof item.answer === "string" ? <p className="text-muted-foreground">{item.answer}</p> : item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
