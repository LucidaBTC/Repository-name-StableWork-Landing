// Performance monitoring utilities for Core Web Vitals
export interface PerformanceMetrics {
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  fcp?: number; // First Contentful Paint
  ttfb?: number; // Time to First Byte
}

export class PerformanceMonitor {
  private metrics: PerformanceMetrics = {};
  private observers: PerformanceObserver[] = [];

  constructor() {
    if (typeof window !== "undefined") {
      this.initializeObservers();
    }
  }

  private initializeObservers() {
    // Largest Contentful Paint
    if ("PerformanceObserver" in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          this.metrics.lcp = lastEntry.startTime;
          this.reportMetric("LCP", lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
        this.observers.push(lcpObserver);
      } catch (e) {
        console.warn("LCP observer not supported");
      }

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            this.metrics.fid = entry.processingStart - entry.startTime;
            this.reportMetric("FID", entry.processingStart - entry.startTime);
          });
        });
        fidObserver.observe({ entryTypes: ["first-input"] });
        this.observers.push(fidObserver);
      } catch (e) {
        console.warn("FID observer not supported");
      }

      // Cumulative Layout Shift
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          this.metrics.cls = clsValue;
          this.reportMetric("CLS", clsValue);
        });
        clsObserver.observe({ entryTypes: ["layout-shift"] });
        this.observers.push(clsObserver);
      } catch (e) {
        console.warn("CLS observer not supported");
      }

      // First Contentful Paint
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.name === "first-contentful-paint") {
              this.metrics.fcp = entry.startTime;
              this.reportMetric("FCP", entry.startTime);
            }
          });
        });
        fcpObserver.observe({ entryTypes: ["paint"] });
        this.observers.push(fcpObserver);
      } catch (e) {
        console.warn("FCP observer not supported");
      }
    }

    // Time to First Byte
    if ("performance" in window && "timing" in window.performance) {
      window.addEventListener("load", () => {
        const timing = window.performance.timing;
        const ttfb = timing.responseStart - timing.navigationStart;
        this.metrics.ttfb = ttfb;
        this.reportMetric("TTFB", ttfb);
      });
    }
  }

  private reportMetric(name: string, value: number) {
    // Report to analytics service (replace with your analytics)
    if (process.env.NODE_ENV === "development") {
      console.log(`Performance Metric - ${name}:`, value);
    }

    // Send to analytics service
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as any).gtag("event", "web_vitals", {
        event_category: "Performance",
        event_label: name,
        value: Math.round(value),
        non_interaction: true,
      });
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public getScore(): { score: number; grade: string } {
    const { lcp, fid, cls } = this.metrics;

    let score = 0;
    let count = 0;

    // LCP scoring (good: ≤2.5s, needs improvement: ≤4s, poor: >4s)
    if (lcp !== undefined) {
      if (lcp <= 2500) score += 100;
      else if (lcp <= 4000) score += 75;
      else score += 50;
      count++;
    }

    // FID scoring (good: ≤100ms, needs improvement: ≤300ms, poor: >300ms)
    if (fid !== undefined) {
      if (fid <= 100) score += 100;
      else if (fid <= 300) score += 75;
      else score += 50;
      count++;
    }

    // CLS scoring (good: ≤0.1, needs improvement: ≤0.25, poor: >0.25)
    if (cls !== undefined) {
      if (cls <= 0.1) score += 100;
      else if (cls <= 0.25) score += 75;
      else score += 50;
      count++;
    }

    const finalScore = count > 0 ? score / count : 0;
    let grade = "F";

    if (finalScore >= 90) grade = "A";
    else if (finalScore >= 80) grade = "B";
    else if (finalScore >= 70) grade = "C";
    else if (finalScore >= 60) grade = "D";

    return { score: finalScore, grade };
  }

  public disconnect() {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }
}

// Bundle size analysis
export function analyzeBundleSize() {
  if (typeof window === "undefined") return;

  const scripts = Array.from(document.querySelectorAll("script[src]"));
  const styles = Array.from(
    document.querySelectorAll('link[rel="stylesheet"]'),
  );

  let totalSize = 0;
  let jsSize = 0;
  let cssSize = 0;

  const promises: Promise<void>[] = [];

  scripts.forEach((script: any) => {
    if (script.src && script.src.includes("_next")) {
      promises.push(
        fetch(script.src, { method: "HEAD" })
          .then((response) => {
            const size = parseInt(
              response.headers.get("content-length") || "0",
            );
            jsSize += size;
            totalSize += size;
          })
          .catch(() => {}),
      );
    }
  });

  styles.forEach((style: any) => {
    if (style.href && style.href.includes("_next")) {
      promises.push(
        fetch(style.href, { method: "HEAD" })
          .then((response) => {
            const size = parseInt(
              response.headers.get("content-length") || "0",
            );
            cssSize += size;
            totalSize += size;
          })
          .catch(() => {}),
      );
    }
  });

  Promise.all(promises).then(() => {
    console.log("Bundle Analysis:", {
      totalSize: `${(totalSize / 1024).toFixed(2)} KB`,
      jsSize: `${(jsSize / 1024).toFixed(2)} KB`,
      cssSize: `${(cssSize / 1024).toFixed(2)} KB`,
      isUnderLimit: totalSize < 250 * 1024, // 250 KB limit
    });
  });
}

// Initialize performance monitoring
export const performanceMonitor = new PerformanceMonitor();

// Cleanup on page unload
if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", () => {
    performanceMonitor.disconnect();
  });
}
