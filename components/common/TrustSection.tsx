"use client";

import { Container } from "./Container";
import { CheckCircle2, Shield, Lock, Zap } from "lucide-react";

const trustCards = [
  {
    avatar: "👩‍💻",
    proof: "Paid $950 to Fatima in Nairobi",
    role: "Software Developer",
    verified: true,
    location: "Kenya",
    payment: "USDC",
  },
  {
    avatar: "👨‍🏫",
    proof: "Sent $1,200 to Marcus in Accra",
    role: "Online Tutor",
    verified: true,
    location: "Ghana",
    payment: "DAI",
  },
  {
    avatar: "👩‍🎨",
    proof: "Transferred $750 to Sofia in Buenos Aires",
    role: "UI/UX Designer",
    verified: true,
    location: "Argentina",
    payment: "USDC",
  },
];

const trustFeatures = [
  {
    icon: Shield,
    title: "Smart Contract Escrow",
    description: "Funds are locked until work is completed",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "End-to-end encrypted transactions",
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    description: "No waiting for bank transfers",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-secondary-50/50" aria-labelledby="trust-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
          <h2 id="trust-heading" className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            Why Trust StableWork?
          </h2>
          <p className="mt-6 text-lg leading-8 text-secondary-600">
            Real freelancers. Real work. Real payments.
          </p>
        </div>

        {/* Trust Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {trustFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-secondary-200/50 hover:border-primary-200 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mb-4 shadow-glow group-hover:shadow-glow-purple transition-all duration-300">
                <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trustCards.map((card, index) => (
            <div
              key={card.proof}
              className="group relative bg-white rounded-2xl shadow-medium p-6 hover:scale-[1.02] transition-all duration-300 border border-secondary-200/50 hover:border-primary-200 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center text-2xl shadow-glow group-hover:shadow-glow-purple transition-all duration-300">
                    {card.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary-600">{card.role}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      {card.verified && (
                        <div className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-1" />
                          <span className="text-xs text-green-600 font-medium">Verified</span>
                        </div>
                      )}
                      <span className="text-xs text-secondary-500">• {card.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-lg font-semibold text-secondary-900 mb-2">
                {card.proof}
              </p>
              <div className="flex items-center text-sm text-secondary-600">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-100 text-secondary-800">
                  {card.payment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 