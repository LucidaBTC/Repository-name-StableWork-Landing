"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface AccessibilityContextType {
  reducedMotion: boolean;
  highContrast: boolean;
  fontSize: "normal" | "large" | "larger";
  announceMessage: (message: string) => void;
}

const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibility must be used within AccessibilityProvider",
    );
  }
  return context;
}

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export function AccessibilityProvider({
  children,
}: AccessibilityProviderProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<"normal" | "large" | "larger">(
    "normal",
  );

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Check for high contrast preference
    const contrastQuery = window.matchMedia("(prefers-contrast: high)");
    setHighContrast(contrastQuery.matches);

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setHighContrast(e.matches);
    };

    contrastQuery.addEventListener("change", handleContrastChange);

    // Load saved font size preference
    const savedFontSize = localStorage.getItem("fontSize") as
      | "normal"
      | "large"
      | "larger";
    if (savedFontSize) {
      setFontSize(savedFontSize);
      document.documentElement.style.fontSize = getFontSizeValue(savedFontSize);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      contrastQuery.removeEventListener("change", handleContrastChange);
    };
  }, []);

  const getFontSizeValue = (size: "normal" | "large" | "larger") => {
    switch (size) {
      case "large":
        return "18px";
      case "larger":
        return "20px";
      default:
        return "16px";
    }
  };

  const announceMessage = (message: string) => {
    // Create a live region for screen reader announcements
    const announcement = document.createElement("div");
    announcement.setAttribute("aria-live", "polite");
    announcement.setAttribute("aria-atomic", "true");
    announcement.className = "sr-only";
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  const value = {
    reducedMotion,
    highContrast,
    fontSize,
    announceMessage,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      <div
        className={`
          ${reducedMotion ? "motion-reduce" : ""}
          ${highContrast ? "high-contrast" : ""}
        `}
        data-font-size={fontSize}
      >
        {children}

        {/* Live region for announcements */}
        <div
          id="aria-live-region"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        />

        {/* Skip navigation links */}
        <div className="sr-only">
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <a href="#navigation" className="skip-link">
            Skip to navigation
          </a>
        </div>
      </div>
    </AccessibilityContext.Provider>
  );
}
