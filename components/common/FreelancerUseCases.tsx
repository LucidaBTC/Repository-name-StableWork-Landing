"use client";

import { Container } from "./Container";

const useCases = [
  {
    emoji: "💻",
    role: "Software Developer",
    location: "Lagos, Nigeria",
    payment: "USDC",
  },
  {
    emoji: "🛠️",
    role: "Electrician",
    location: "Manila, Philippines",
    payment: "DAI",
  },
  {
    emoji: "🎨",
    role: "UI/UX Designer",
    location: "Nairobi, Kenya",
    payment: "USDC",
  },
  {
    emoji: "📱",
    role: "Social Media Manager",
    location: "São Paulo, Brazil",
    payment: "DAI",
  },
  {
    emoji: "🧹",
    role: "Professional Cleaner",
    location: "Nairobi, Kenya",
    payment: "USDC",
  },
  {
    emoji: "🧱",
    role: "Bricklayer",
    location: "Mumbai, India",
    payment: "DAI",
  },
  {
    emoji: "👩‍🏫",
    role: "Online Tutor",
    location: "Accra, Ghana",
    payment: "USDC",
  },
  {
    emoji: "📷",
    role: "Photographer",
    location: "Buenos Aires, Argentina",
    payment: "DAI",
  },
];

export function FreelancerUseCases() {
  return (
    <section className="py-20 bg-white" aria-labelledby="use-cases-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
          <h2 id="use-cases-heading" className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            See how StableWork fits your work style.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={`${useCase.role}-${useCase.location}`}
              className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-secondary-200/50 hover:border-primary-200 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl" role="img" aria-label={useCase.role}>
                  {useCase.emoji}
                </span>
                <h3 className="text-lg font-semibold text-secondary-900">
                  {useCase.role}
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-secondary-600 flex items-center">
                  <span className="text-sm">📍</span>
                  <span className="ml-2">{useCase.location}</span>
                </p>
                <p className="text-secondary-600 flex items-center">
                  <span className="text-sm">💸</span>
                  <span className="ml-2">Paid in {useCase.payment}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 