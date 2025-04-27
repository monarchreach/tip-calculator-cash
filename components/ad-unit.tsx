"use client"

import { useEffect, useRef } from "react"

interface AdUnitProps {
  slotId: string
  format?: "auto" | "horizontal" | "vertical" | "rectangle"
  className?: string
}

export function AdUnit({ slotId, format = "auto", className = "" }: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load ad script if it doesn't exist
    if (typeof window !== "undefined") {
      // This is a placeholder for ad implementation
      // In a real implementation, you would load your ad network's script
      // and initialize the ad unit

      // Example for Google AdSense (commented out as placeholder)
      /*
      const script = document.createElement("script");
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.async = true;
      script.setAttribute("data-ad-client", "ca-pub-XXXXXXXXXXXXXXXX");
      document.head.appendChild(script);
      
      // Initialize the ad
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      */

      // For demonstration, we'll just add a placeholder
      if (adRef.current) {
        adRef.current.innerHTML = `
          <div class="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 flex items-center justify-center min-h-[250px] w-full text-center">
            <div>
              <p class="font-medium">Advertisement</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">Ad Unit: ${slotId}</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">Format: ${format}</p>
            </div>
          </div>
        `
      }
    }

    // Cleanup function
    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = ""
      }
    }
  }, [slotId, format])

  return (
    <div ref={adRef} className={`ad-container ${className}`} data-ad-slot={slotId} data-ad-format={format}>
      {/* Ad will be inserted here by the script */}
    </div>
  )
}
