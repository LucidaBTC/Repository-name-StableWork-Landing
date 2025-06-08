"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

// Lazy load non-critical components
const GlobeBackground = dynamic(() => import("@/components/common/GlobeBackground").then(mod => mod.GlobeBackground), { ssr: false });

export function PerformanceInit() {
  useEffect(() => {
    // Preload critical assets
    const preloadLinks = [
      { rel: "preload", href: "/fonts/your-critical-font.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      { rel: "preload", href: "/images/hero-image.webp", as: "image", type: "image/webp" }
    ];

    preloadLinks.forEach(link => {
      const linkElement = document.createElement("link");
      Object.entries(link).forEach(([key, value]) => {
        linkElement.setAttribute(key, value);
      });
      document.head.appendChild(linkElement);
    });

    // Cleanup on unmount
    return () => {
      preloadLinks.forEach(link => {
        const linkElement = document.querySelector(`link[href="${link.href}"]`);
        if (linkElement) {
          document.head.removeChild(linkElement);
        }
      });
    };
  }, []);

  return null;
}
