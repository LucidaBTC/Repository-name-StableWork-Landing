"use client";

import { useState, useEffect } from "react";
import { Button } from "./Button";
import { X, Wallet, Users } from "lucide-react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop sticky CTA - shows at ≥640px */}
      <div
        className={`hidden sm:block fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isScrolled
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-80 translate-y-5 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-large border border-secondary-200/50 p-6 max-w-sm relative overflow-hidden group hover:scale-105 hover:-translate-y-1 transition-all duration-300">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <button
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 bg-secondary-100 hover:bg-secondary-200 rounded-full w-7 h-7 flex items-center justify-center text-secondary-500 hover:text-secondary-700 transition-colors shadow-soft hover:scale-110 active:scale-90"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-primary-gradient rounded-xl flex items-center justify-center shadow-glow">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-secondary-900">
                  Ready to start?
                </h3>
                <p className="text-sm text-secondary-600">
                  Join 10,000+ freelancers
                </p>
              </div>
            </div>

            <p className="text-sm text-secondary-700 mb-4 leading-relaxed">
              Get paid instantly in stablecoins. No borders, no delays.
            </p>

            <div className="space-y-2">
              <Button variant="gradient" size="sm" className="w-full group">
                <Users className="w-4 h-4 mr-2 group-hover:animate-bounce-gentle" />
                Join Waitlist
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom bar - shows on mobile */}
      <div
        className={`sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-secondary-200/50 p-4 shadow-large transition-all duration-300 ${
          isScrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex gap-3">
          <Button variant="gradient" size="md" className="flex-1 group">
            <Users className="w-4 h-4 mr-2 group-hover:animate-bounce-gentle" />
            Join Waitlist
          </Button>
          <Button variant="outline" size="md" className="flex-1">
            <Wallet className="w-4 h-4 mr-2" />
            Connect
          </Button>
        </div>
      </div>
    </>
  );
}
