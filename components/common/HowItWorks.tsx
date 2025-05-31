"use client";

import { Container } from "@/components/common/Container";
import { Briefcase, Send, Zap, Globe } from "lucide-react";

const steps = [
  {
    icon: Briefcase,
    title: "Browse Live Jobs",
    description: "Find opportunities from clients worldwide in your field of expertise.",
    delay: "0ms",
  },
  {
    icon: Send,
    title: "Submit Proposals",
    description: "Send tailored proposals and showcase your skills to potential clients.",
    delay: "100ms",
  },
  {
    icon: Zap,
    title: "Get Paid Instantly",
    description: "Receive payments in stablecoins immediately after completing work.",
    delay: "200ms",
  },
  {
    icon: Globe,
    title: "Build Long-term Clients",
    description: "Grow your freelance business with recurring clients globally.",
    delay: "300ms",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-secondary-50/50" aria-labelledby="how-it-works-heading">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 id="how-it-works-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Get started in minutes, not days. Join thousands of freelancers earning in cryptocurrency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative bg-white dark:bg-gray-900 rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: step.delay }}
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary-gradient rounded-full flex items-center justify-center text-white text-sm font-bold shadow-glow">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-primary-gradient/10 dark:bg-primary-gradient/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-primary-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 