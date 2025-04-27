"use client"

import { useState } from "react"

interface EmailCaptureProps {
  title?: string
  description?: string
  placeholder?: string
  buttonText?: string
  offerText?: string
  successMessage?: string
  className?: string
}

export function EmailCapture({
  title = "Subscribe to Our Newsletter",
  description = "Get the latest tipping guides and calculator updates delivered to your inbox.",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  offerText = "Get our free 'Global Tipping Guide' PDF when you subscribe",
  successMessage = "Thank you for subscribing! Check your email for your free guide.",
  className,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("")
  const [isChecked, setIsChecked] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
}
