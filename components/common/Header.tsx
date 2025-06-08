"use client";

import Link from "next/link";
import { Button } from "./Button";
import { Container } from "./Container";
import { useState } from "react";
import { Menu, X, Wallet, Globe, Plus, Users } from "lucide-react";

const navigation = [
  { name: "How It Works", href: "/how-it-works" },
  { name: "Browse Jobs", href: "/jobs" },
  { name: "Freelancers", href: "/freelancers" },
  { name: "Pricing", href: "/pricing" },
  { name: "Comparison", href: "/comparison" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-secondary-200/50 shadow-soft animate-fade-in-down">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="hover:scale-105 active:scale-95 transition-transform duration-200">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-8 h-8 bg-primary-gradient rounded-lg flex items-center justify-center shadow-glow group-hover:shadow-glow-purple transition-all duration-300">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <div className="absolute inset-0 bg-primary-gradient rounded-lg opacity-0 group-hover:opacity-20 animate-pulse-slow" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-secondary-900 to-secondary-700 bg-clip-text text-transparent">
                StableWork
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:space-x-1" id="navigation">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-secondary-700 hover:text-secondary-900 hover:bg-secondary-50 rounded-lg transition-all duration-200 relative group"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-gradient rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Post a Job
            </Button>
            <Button variant="primary" size="sm" className="group">
              <Wallet className="w-4 h-4 mr-2 group-hover:animate-bounce-gentle" />
              Join Waitlist
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-secondary-700 hover:text-secondary-900 hover:bg-secondary-100 rounded-lg transition-colors active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div
              className={`transition-transform duration-200 ${mobileMenuOpen ? "rotate-90" : "rotate-0"}`}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden border-t border-secondary-200/50 bg-white/95 backdrop-blur-xl transition-all duration-300 ${
            mobileMenuOpen
              ? "opacity-100 max-h-96 visible"
              : "opacity-0 max-h-0 invisible"
          }`}
        >
          <div className="py-4 space-y-2">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className={`animate-slide-in-left transition-all duration-300 ${
                  mobileMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-secondary-700 hover:text-secondary-900 hover:bg-secondary-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="pt-4 border-t border-secondary-200/50 space-y-3">
              <Button variant="outline" size="md" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Post a Job
              </Button>
              <Button variant="primary" size="md" className="w-full group">
                <Wallet className="w-4 h-4 mr-2 group-hover:animate-bounce-gentle" />
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
