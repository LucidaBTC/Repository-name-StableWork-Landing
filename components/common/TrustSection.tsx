"use client";

import { Container } from "./Container";
import { CheckCircle2 } from "lucide-react";

const trustCards = [
  {
    avatar: "👩‍💻",
    proof: "Paid $950 to Fatima in Nairobi",
    role: "Software Developer",
    verified: true,
  },
  {
    avatar: "👨‍🏫",
    proof: "Sent $1,200 to Marcus in Accra",
    role: "Online Tutor",
    verified: true,
  },
  {
    avatar: "👩‍🎨",
    proof: "Transferred $750 to Sofia in Buenos Aires",
    role: "UI/UX Designer",
    verified: true,
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
                    {card.verified && (
                      <div className="flex items-center mt-1">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-xs text-green-600 font-medium">Verified</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-lg font-semibold text-secondary-900">
                {card.proof}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 