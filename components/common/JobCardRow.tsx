"use client";

import { Container } from "./Container";
import { JobCard } from "./JobCard";

const featuredJobs = [
  {
    title: "Landing Page Design",
    budget: "$750",
    tags: ["Remote", "1 Week", "Crypto Payment"],
    location: {
      country: "Kenya",
      city: "Nairobi",
      flag: "🇰🇪",
    },
    rating: 4.8,
    paymentType: "USDC" as const,
    duration: "1 Week",
  },
  {
    title: "Smart Contract Development",
    budget: "$2,500",
    tags: ["Remote", "2 Weeks", "USDC Payment"],
    location: {
      country: "Nigeria",
      city: "Lagos",
      flag: "🇳🇬",
    },
    rating: 4.9,
    paymentType: "USDC" as const,
    duration: "2 Weeks",
  },
  {
    title: "Social Media Campaign",
    budget: "$1,200",
    tags: ["Remote", "1 Month", "DAI Payment"],
    location: {
      country: "Brazil",
      city: "São Paulo",
      flag: "🇧🇷",
    },
    rating: 4.7,
    paymentType: "DAI" as const,
    duration: "1 Month",
  },
];

export function JobCardRow() {
  return (
    <section className="py-12 bg-gradient-to-br from-white to-secondary-50/50" aria-labelledby="featured-jobs-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-8 animate-fade-in-up">
          <h2 id="featured-jobs-heading" className="text-2xl font-bold tracking-tight text-secondary-900 sm:text-3xl">
            Featured Opportunities
          </h2>
          <p className="mt-4 text-lg leading-8 text-secondary-600">
            Browse our latest crypto-paying jobs
          </p>
        </div>

        <div className="relative">
          <div className="overflow-x-auto flex gap-6 snap-x px-4 pb-6 -mx-4">
            {featuredJobs.map((job, index) => (
              <div
                key={job.title}
                className="animate-slide-in-right"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <JobCard {...job} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
} 