"use client";

import { Container } from "./Container";
import { Shield, Zap, Globe, Lock } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Smart Contract Escrow",
    description: "Funds are locked until work is completed, protecting both freelancers and clients.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Instant Crypto Payouts",
    description: "Get paid in USDC or DAI instantly — no waiting for bank transfers.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Work with clients worldwide or find local opportunities in your area.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Lock,
    title: "Secure Platform",
    description: "End-to-end encrypted transactions and verified profiles.",
    gradient: "from-amber-500 to-orange-500",
  },
];

export function WhyStableWork() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-secondary-50/50" aria-labelledby="why-stablework-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
          <h2 id="why-stablework-heading" className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            Why StableWork?
          </h2>
          <p className="mt-6 text-lg leading-8 text-secondary-600">
            The future of freelance work is here. Join the revolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-secondary-200/50 hover:border-primary-200 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-6 shadow-glow group-hover:shadow-glow-purple transition-all duration-300`}>
                <benefit.icon className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 