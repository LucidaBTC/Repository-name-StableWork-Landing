"use client";

import { Container } from "./Container";
import { Code2, Palette, Wrench, Share2 } from "lucide-react";

const personas = [
  {
    icon: Code2,
    role: "Software Developer",
    location: "Lagos, Nigeria",
    description: "Earns USDC from US startups",
    emoji: "🧑‍💻",
  },
  {
    icon: Palette,
    role: "UI/UX Designer",
    location: "Nairobi, Kenya",
    description: "Works with US startups",
    emoji: "🎨",
  },
  {
    icon: Wrench,
    role: "Electrician",
    location: "Manila, Philippines",
    description: "Finds local crypto-paying jobs",
    emoji: "🛠️",
  },
  {
    icon: Share2,
    role: "Social Media Manager",
    location: "São Paulo, Brazil",
    description: "Paid via smart contract",
    emoji: "📱",
  },
];

export function FreelancerPersonaGrid() {
  return (
    <section className="py-20 bg-white" aria-labelledby="personas-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
          <h2 id="personas-heading" className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            See how StableWork fits your work style
          </h2>
          <p className="mt-6 text-lg leading-8 text-secondary-600">
            From developers to designers, we support freelancers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {personas.map((persona, index) => (
            <div
              key={`${persona.role}-${persona.location}`}
              className="group relative bg-gradient-to-br from-white to-secondary-50/50 rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-secondary-200/50 hover:border-primary-200 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center text-2xl shadow-glow group-hover:shadow-glow-purple transition-all duration-300">
                  {persona.emoji}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900">
                    {persona.role}
                  </h3>
                  <p className="text-sm text-secondary-600">
                    {persona.location}
                  </p>
                </div>
              </div>
              <p className="text-secondary-600">
                {persona.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 