"use client";

import { useEffect } from "react";
import { performanceMonitor, analyzeBundleSize } from "@/lib/performance";

export function PerformanceInit() {
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== "undefined") {
      // Analyze bundle size after page load
      window.addEventListener("load", () => {
        setTimeout(() => {
          analyzeBundleSize();

          // Log performance metrics after 5 seconds
          setTimeout(() => {
            const metrics = performanceMonitor.getMetrics();
            const score = performanceMonitor.getScore();

            console.log("Performance Metrics:", metrics);
            console.log("Performance Score:", score);

            // Check if we meet our performance targets
            const { lcp, fid, cls } = metrics;
            const warnings = [];

            if (lcp && lcp > 2500) {
              warnings.push(`LCP (${lcp.toFixed(0)}ms) exceeds 2.5s target`);
            }

            if (fid && fid > 100) {
              warnings.push(`FID (${fid.toFixed(0)}ms) exceeds 100ms target`);
            }

            if (cls && cls > 0.1) {
              warnings.push(`CLS (${cls.toFixed(3)}) exceeds 0.1 target`);
            }

            if (warnings.length > 0) {
              console.warn("Performance Warnings:", warnings);
            } else {
              console.log("✅ All Core Web Vitals targets met!");
            }
          }, 5000);
        }, 1000);
      });
    }
  }, []);

  return null;
}
