/**
 * Web Vitals Reporting
 *
 * This module provides functionality to measure and report Core Web Vitals metrics.
 * It's designed to work with static exports and sends data to a custom endpoint.
 */

import { onCLS, onFID, onLCP, onFCP, onTTFB } from "web-vitals"

type MetricName = "CLS" | "FID" | "LCP" | "FCP" | "TTFB"

interface WebVitalMetric {
  name: MetricName
  value: number
  id: string
  delta: number
}

// Function to send metrics to analytics endpoint
const reportWebVitals = async (metric: WebVitalMetric) => {
  // In a static export, we'll send this to our own analytics endpoint
  // This could be a serverless function, Google Analytics, or other service
  try {
    // For static export, we'll use a simple fetch to a custom endpoint
    // In production, replace with your actual analytics endpoint
    const url = "/api/vitals"

    // For development/testing, log to console
    console.log(`Web Vital: ${metric.name} = ${metric.value}`)

    // In a real implementation, you would send this data to your analytics service
    // await fetch(url, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     name: metric.name,
    //     value: metric.value,
    //     id: metric.id,
    //     page: window.location.pathname,
    //   }),
    // });
  } catch (error) {
    console.error("Error reporting web vital:", error)
  }
}

// Function to initialize web vitals monitoring
export function initWebVitals() {
  // Only run in browser environment
  if (typeof window !== "undefined") {
    // Register metrics observers
    onCLS((metric) => reportWebVitals({ ...metric, name: "CLS" }))
    onFID((metric) => reportWebVitals({ ...metric, name: "FID" }))
    onLCP((metric) => reportWebVitals({ ...metric, name: "LCP" }))
    onFCP((metric) => reportWebVitals({ ...metric, name: "FCP" }))
    onTTFB((metric) => reportWebVitals({ ...metric, name: "TTFB" }))
  }
}
