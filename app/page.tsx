"use client";

import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { StickyCTA } from "@/components/common/StickyCTA";
import { GlobeBackground } from "@/components/common/GlobeBackground";
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

const trustLogos = [
  { name: "USDC", logo: "🪙", description: "USD Coin stablecoin support" },
  { name: "DAI", logo: "💰", description: "DAI stablecoin support" },
  { name: "MetaMask", logo: "🦊", description: "MetaMask wallet integration" },
  { name: "Coinbase", logo: "🔷", description: "Coinbase wallet support" },
  { name: "Chainlink", logo: "🔗", description: "Chainlink price feeds" },
];

const stats = [
  {
    value: "10,000+",
    label: "Active Freelancers",
    description: "Verified freelancers worldwide",
  },
  {
    value: "$2.5M+",
    label: "Paid Out",
    description: "Total payments processed",
  },
  {
    value: "50+",
    label: "Countries",
    description: "Global reach and coverage",
  },
  {
    value: "4.9/5",
    label: "Average Rating",
    description: "User satisfaction score",
  },
];

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
        <Header />

        <main role="main" aria-label="Main content">
          {/* Hero Section */}
          <section
            className="relative overflow-hidden py-20 lg:py-28 space-y-6 bg-gradient-to-br from-[#0A1F44] via-[#1F3B7B] to-[#3C4CE5]"
            aria-labelledby="hero-heading"
          >
            <GlobeBackground />

            <Container>
              <div className="relative z-10 mx-auto max-w-3xl text-center">
                <div className="animate-fade-in-up">
                  <div>
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10 shadow-soft animate-scale-in">
                      <Star
                        className="w-4 h-4 text-yellow-500"
                        aria-hidden="true"
                      />
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
                    className="prose text-lg leading-8 text-white/80 mx-auto animate-fade-in-up"
                    style={{ animationDelay: "0.5s" }}
                  >
                    Instant, borderless payouts in USDC or DAI — no banks, no
                    delays.
                  </p>

                  <div
                    className="animate-fade-in-up"
                    style={{ animationDelay: "0.7s" }}
                  >
                    <Button
                      variant="gradient"
                      size="xl"
                      className="group bg-white text-[#0A1F44] hover:bg-white/90"
                      aria-describedby="join-waitlist-description"
                    >
                      <Users
                        className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle"
                        aria-hidden="true"
                      />
                      Join Waitlist
                      <ArrowRight
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
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
            className="py-20 lg:py-28 space-y-6 bg-white/50 backdrop-blur-sm border-y border-secondary-200/50"
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
                      <div className="flex items-center justify-center">
                        <span className="text-2xl mr-2" aria-hidden="true">
                          {item.step}
                        </span>
                        <item.icon
                          className="w-5 h-5 text-primary-600"
                          aria-hidden="true"
                        />
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

          {/* Trust Strip */}
          <section
            className="py-20 lg:py-28 space-y-6 bg-secondary-900"
            aria-labelledby="trust-heading"
          >
            <Container>
              <div className="mx-auto max-w-7xl animate-fade-in">
                <h2
                  id="trust-heading"
                  className="text-center text-sm font-semibold text-secondary-300"
                >
                  POWERED BY LEADING WEB3 INFRASTRUCTURE
                </h2>
                <div
                  className="flex flex-wrap items-center justify-center gap-8 lg:gap-12"
                  role="list"
                >
                  {trustLogos.map((item, index) => (
                    <div
                      key={item.name}
                      className="flex items-center space-x-3 text-secondary-300 hover:text-white transition-colors group hover:scale-105 animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                      role="listitem"
                      title={item.description}
                    >
                      <span
                        className="text-2xl group-hover:scale-110 transition-transform"
                        aria-hidden="true"
                      >
                        {item.logo}
                      </span>
                      <span className="text-lg font-semibold">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* Stats Section */}
          <section
            className="py-20 lg:py-28 space-y-6 bg-secondary-900"
            aria-labelledby="stats-heading"
          >
            <Container>
              <h2 id="stats-heading" className="sr-only">
                Platform Statistics
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8" role="list">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                    role="listitem"
                  >
                    <div
                      className="text-3xl lg:text-4xl font-bold text-white"
                      aria-label={`${stat.value} ${stat.label}`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-secondary-400 text-sm lg:text-base">
                      {stat.label}
                    </div>
                    <div className="sr-only">{stat.description}</div>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* Features Section */}
          <section
            className="py-20 lg:py-28 space-y-6 bg-gradient-to-br from-white to-secondary-50/50"
            aria-labelledby="features-heading"
          >
            <Container>
              <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
                <h2
                  id="features-heading"
                  className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl"
                >
                  Why choose StableWork?
                </h2>
                <p className="prose mx-auto text-lg leading-8 text-secondary-600">
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
                    <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center shadow-glow group-hover:shadow-glow-purple transition-all duration-300">
                      <feature.icon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary-900">
                      {feature.title}
                    </h3>
                    <p className="prose text-secondary-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </article>
                ))}
              </div>
            </Container>
          </section>

          {/* How It Works Preview */}
          <section
            className="py-20 lg:py-28 space-y-6 bg-secondary-900"
            aria-labelledby="how-it-works-heading"
          >
            <Container>
              <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
                <h2
                  id="how-it-works-heading"
                  className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  How it works
                </h2>
                <p className="prose mx-auto text-lg leading-8 text-secondary-300">
                  Get started in minutes, not days
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8" role="list">
                {[
                  {
                    step: "1",
                    title: "Create Profile",
                    icon: Users,
                    description:
                      "Set up your freelancer profile with skills and portfolio",
                  },
                  {
                    step: "2",
                    title: "Find Jobs",
                    icon: Globe,
                    description:
                      "Browse and apply to jobs from clients worldwide",
                  },
                  {
                    step: "3",
                    title: "Secure Escrow",
                    icon: Shield,
                    description:
                      "Work with confidence using smart contract protection",
                  },
                  {
                    step: "4",
                    title: "Get Paid",
                    icon: Zap,
                    description: "Receive instant payments in stablecoins",
                  },
                ].map((item, index) => (
                  <div
                    key={item.step}
                    className="text-center group animate-fade-in-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                    role="listitem"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto shadow-glow group-hover:shadow-glow-purple transition-all duration-300">
                        <item.icon
                          className="w-8 h-8 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-medium">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="sr-only">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                <Button variant="secondary" size="lg">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </Button>
              </div>
            </Container>
          </section>
        </main>

        <Footer />
        <StickyCTA />
      </div>
    </>
  );
}
