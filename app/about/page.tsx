import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import {
  Globe,
  Users,
  Target,
  Heart,
  TrendingUp,
  Shield,
  Zap,
  Award,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50/30 to-primary-50/20">
      <Header />

      <main className="py-20 sm:py-32">
        <Container>
          {/* Hero Section */}
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Heart className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl lg:text-6xl">
              About StableWork
            </h1>

            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Building the future of borderless work, one payment at a time.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-secondary-200/50">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center shadow-glow">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                    Our Mission
                  </h2>
                  <p className="text-lg text-secondary-700 leading-relaxed">
                    Access work, anywhere – borderless payments for a borderless
                    workforce.
                  </p>
                  <p className="mt-4 text-secondary-600">
                    We believe that talent knows no borders, but traditional
                    payment systems do. StableWork eliminates the friction
                    between global freelancers and clients, enabling instant,
                    secure payments in stablecoins that work everywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Founding Story */}
          <div className="mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-secondary-200/50">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center shadow-glow">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                    Our Story
                  </h2>
                  <p className="text-secondary-700 leading-relaxed mb-4">
                    We created StableWork to unlock work for freelancers around
                    the world. After experiencing firsthand the frustrations of
                    delayed payments, high fees, and currency conversion losses,
                    our team knew there had to be a better way.
                  </p>
                  <p className="text-secondary-700 leading-relaxed mb-4">
                    The rise of stablecoins presented the perfect solution:
                    instant, borderless payments without the volatility of
                    traditional cryptocurrencies. We built StableWork to harness
                    this technology and create a truly global freelance
                    platform.
                  </p>
                  <p className="text-secondary-700 leading-relaxed">
                    Today, we're proud to serve thousands of freelancers and
                    clients worldwide, facilitating instant payments and
                    enabling work without borders.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="mb-20">
            <div className="bg-primary-gradient rounded-2xl p-8 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
              <div className="text-4xl font-bold mb-2">12,000+ hours</div>
              <p className="text-primary-100 text-lg">
                paid in USDC to freelancers across 19 countries.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-secondary-900 mb-12">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  Trust & Security
                </h3>
                <p className="text-secondary-600">
                  Smart contract escrow ensures every payment is secure and
                  transparent.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  Speed & Efficiency
                </h3>
                <p className="text-secondary-600">
                  Instant payments mean freelancers get paid when work is
                  completed.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  Global Inclusion
                </h3>
                <p className="text-secondary-600">
                  Everyone deserves access to global opportunities, regardless
                  of location.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-secondary-900 mb-12">
              Built by Freelancers, for Freelancers
            </h2>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-secondary-200/50 text-center">
              <p className="text-lg text-secondary-700 leading-relaxed mb-6">
                Our team consists of former freelancers, remote workers, and
                crypto enthusiasts who understand the challenges of global work.
                We're building the platform we wish we had when we were
                freelancing.
              </p>
              <p className="text-secondary-600">
                Based across 5 countries and 3 time zones, we practice what we
                preach – working remotely and getting paid in stablecoins.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-secondary-900 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-secondary-300 mb-6 max-w-2xl mx-auto">
                Help us build a world where work knows no borders and payments
                are instant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">
                  <Users className="w-5 h-5 mr-2" />
                  Join Waitlist
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-secondary-900"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
