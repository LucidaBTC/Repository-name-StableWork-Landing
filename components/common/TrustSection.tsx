"use client";

import { Container } from "./Container";
import { Shield, Zap, Globe } from "lucide-react";

const trustCards = [
  {
    icon: Shield,
    title: "Secure Escrow",
    description: "Smart contracts hold funds until work is completed, protecting both parties.",
  },
  {
    icon: Zap,
    title: "Instant Stablecoin Payouts",
    description: "Get paid immediately in USDC or DAI, with no bank delays or fees.",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Work from anywhere, with payments that work everywhere.",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-secondary-50/50" aria-labelledby="trust-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
          <h2 id="trust-heading" className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            Trust is built-in — not an add-on.
          </h2>
          <p className="mt-6 text-lg leading-8 text-secondary-600">
            Real freelancers. Real work. Real payments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trustCards.map((card, index) => (
            <div
              key={card.title}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-secondary-200/50 hover:border-primary-200 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mb-6 shadow-glow group-hover:shadow-glow-purple transition-all duration-300">
                <card.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                {card.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 