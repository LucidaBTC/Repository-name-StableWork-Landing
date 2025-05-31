"use client";

import { Footer } from "@/components/common/Footer";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { StickyCTA } from "@/components/common/StickyCTA";
import { GlobeBackground } from "@/components/common/GlobeBackground";
import { CTASection } from "@/components/common/CTASection";
import { HowItWorks } from "@/components/common/HowItWorks";
import { PerformanceInit } from "./performance-init";
import {
  Globe,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Star,
  UserPlus,
  Briefcase,
  Lock,
  DollarSign,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Payments",
    description:
      "Work with clients worldwide. Get paid in USDC or DAI instantly.",
  },
  {
    icon: Shield,
    title: "Secure Escrow",
    description: "Smart contract escrow protects both freelancers and clients.",
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    description: "No waiting for bank transfers. Receive payments immediately.",
  },
  {
    icon: Users,
    title: "Growing Community",
    description: "Join thousands of freelancers earning in cryptocurrency.",
  },
];

// 🚫 Removed placeholder Web3 infrastructure & stats (non-live)

const miniHowItWorks = [
  { step: "1️⃣", title: "Create a profile", icon: UserPlus },
  { step: "2️⃣", title: "Apply to jobs", icon: Briefcase },
  { step: "🔒", title: "Client funds escrow", icon: Lock },
  { step: "💸", title: "Get paid instantly", icon: DollarSign },
];

export default function Home() {
  return (
    <>
      <PerformanceInit />
      <div className="min-h-screen">
        <main role="main" aria-label="Main content">
          {/* Hero Section */}
          <section
            className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-br from-[#0A1F44] via-[#1F3B7B] to-[#3C4CE5]"
            aria-labelledby="hero-heading"
          >
            <GlobeBackground />

            <Container>
              <div className="relative z-10 mx-auto max-w-4xl text-center">
                <div className="animate-fade-in-up">
                  <div className="mb-6">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10 shadow-soft animate-scale-in">
                      <Star className="w-4 h-4 text-yellow-500" aria-hidden="true" />
                      <span>Trusted by 10,000+ freelancers worldwide</span>
                    </div>
                  </div>

                  <h1
                    id="hero-heading"
                    className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl animate-fade-in-up"
                    style={{ animationDelay: "0.3s" }}
                  >
                    Freelance{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      worldwide
                    </span>
                    . <br />
                    Get paid in{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      stablecoins
                    </span>
                    .
                  </h1>

                  <p
                    className="mt-6 text-lg leading-8 text-white/80 max-w-2xl mx-auto animate-fade-in-up"
                    style={{ animationDelay: "0.5s" }}
                  >
                    Instant, borderless payouts in USDC or DAI — no banks, no delays.
                  </p>

                  <div
                    className="mt-10 animate-fade-in-up"
                    style={{ animationDelay: "0.7s" }}
                  >
                    <Button
                      variant="gradient"
                      size="xl"
                      className="group bg-white text-[#0A1F44] hover:bg-white/90"
                      aria-describedby="join-waitlist-description"
                    >
                      <Users className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" aria-hidden="true" />
                      Join Waitlist
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                    <span id="join-waitlist-description" className="sr-only">
                      Join our waitlist to be notified when StableWork launches
                    </span>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Mini How It Works */}
          <section
            className="py-12 bg-white/50 backdrop-blur-sm border-y border-secondary-200/50"
            aria-labelledby="mini-how-it-works-heading"
          >
            <Container>
              <div className="mx-auto max-w-4xl animate-fade-in">
                <h2 id="mini-how-it-works-heading" className="sr-only">
                  How StableWork Works
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {miniHowItWorks.map((item, index) => (
                    <div
                      key={item.title}
                      className="text-center group animate-fade-in-up"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex items-center justify-center mb-3">
                        <span className="text-2xl mr-2" aria-hidden="true">
                          {item.step}
                        </span>
                        <item.icon className="w-5 h-5 text-primary-600" aria-hidden="true" />
                      </div>
                      <h3 className="text-sm font-semibold text-secondary-900">
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* Features Section */}
          <section
            className="py-20 sm:py-32 bg-gradient-to-br from-white to-secondary-50/50"
            aria-labelledby="features-heading"
          >
            <Container>
              <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
                <h2
                  id="features-heading"
                  className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl"
                >
                  Why choose StableWork?
                </h2>
                <p className="mt-6 text-lg leading-8 text-secondary-600">
                  The future of freelance work is here. Join the revolution.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
                {features.map((feature, index) => (
                  <article
                    key={feature.title}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-secondary-200/50 hover:border-primary-200 hover:-translate-y-2 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                    role="listitem"
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
                  </article>
                ))}
              </div>
            </Container>
          </section>

          {/* How It Works Section */}
          <HowItWorks />

          {/* CTA Section */}
          <CTASection />
        </main>

        <Footer />
        <StickyCTA />
      </div>
    </>
  );
}
