"use client";

import Link from "next/link";
import { Container } from "@/components/common/Container";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Clients", href: "/clients" },
    { name: "Freelancers", href: "/freelancers" },
    { name: "About", href: "/about" },
    { name: "Waitlist", href: "/waitlist" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <Container>
        <div className="py-10">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center md:items-start space-y-2">
              <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                StableWork
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} StableWork. All rights reserved.
              </p>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4" aria-label="Footer navigation">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal Links */}
          <div className="flex justify-center md:justify-start">
            <nav className="flex gap-x-8" aria-label="Legal links">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
}
