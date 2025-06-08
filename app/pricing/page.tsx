import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import {
  Check,
  X,
  DollarSign,
  Users,
  Briefcase,
  Shield,
  Zap,
  Globe,
} from "lucide-react";

const pricingData = [
  {
    category: "Platform fee",
    freelancers: { value: "0%", highlight: true },
    clients: { value: "2% escrow fee", highlight: false },
  },
  {
    category: "Withdrawal",
    freelancers: { value: "0 USDC", highlight: false },
    clients: { value: "N/A", highlight: false },
  },
  {
    category: "FX mark-up",
    freelancers: { value: "0%", highlight: false },
    clients: { value: "0%", highlight: false },
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50/30 to-primary-50/20">
      <Header />

      <main className="py-20 sm:py-32">
        <Container>
          {/* Hero Section */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
              <DollarSign className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl lg:text-6xl">
              Simple, Fair Pricing
            </h1>

            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Transparent fees with no hidden costs. Freelancers keep more,
              clients pay less.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-secondary-200/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary-50/50 border-b border-secondary-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">
                      {/* Empty header for category column */}
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-secondary-900">
                      <div className="flex items-center justify-center space-x-2">
                        <Users className="w-5 h-5 text-primary-600" />
                        <span>Freelancers</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-secondary-900">
                      <div className="flex items-center justify-center space-x-2">
                        <Briefcase className="w-5 h-5 text-primary-600" />
                        <span>Clients</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-secondary-200">
                  {pricingData.map((row, index) => (
                    <tr
                      key={row.category}
                      className="hover:bg-secondary-50/30 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-secondary-900">
                        {row.category}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`text-sm font-semibold ${
                            row.freelancers.highlight
                              ? "text-primary-600 text-lg"
                              : "text-secondary-900"
                          }`}
                        >
                          {row.freelancers.value}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`text-sm font-semibold ${
                            row.clients.highlight
                              ? "text-primary-600 text-lg"
                              : "text-secondary-900"
                          }`}
                        >
                          {row.clients.value}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Secure Escrow
              </h3>
              <p className="text-secondary-600">
                Smart contract protection for all payments
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Instant Payouts
              </h3>
              <p className="text-secondary-600">
                Get paid in USDC or DAI within 60 seconds
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Global Access
              </h3>
              <p className="text-secondary-600">
                Work with anyone, anywhere in the world
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-center text-secondary-900 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-secondary-200/50">
                <h3 className="font-semibold text-secondary-900 mb-2">
                  Why is there no fee for freelancers?
                </h3>
                <p className="text-secondary-600 text-sm">
                  We believe freelancers should keep what they earn. Our
                  platform is funded by a small client fee.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-secondary-200/50">
                <h3 className="font-semibold text-secondary-900 mb-2">
                  What's included in the 2% client fee?
                </h3>
                <p className="text-secondary-600 text-sm">
                  Smart contract escrow, dispute resolution, platform
                  maintenance, and customer support.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-secondary-200/50">
                <h3 className="font-semibold text-secondary-900 mb-2">
                  Are there any withdrawal fees?
                </h3>
                <p className="text-secondary-600 text-sm">
                  No withdrawal fees for freelancers. We cover L2 gas costs for
                  USDC and DAI transfers.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-secondary-200/50">
                <h3 className="font-semibold text-secondary-900 mb-2">
                  What about currency conversion?
                </h3>
                <p className="text-secondary-600 text-sm">
                  No FX markups. Stablecoins eliminate currency conversion fees
                  entirely.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <div className="bg-primary-gradient rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">
                Ready to save on fees?
              </h2>
              <p className="text-primary-100 mb-6">
                Join thousands earning more with StableWork's fair pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg">
                  <Users className="w-5 h-5 mr-2" />
                  Join Waitlist
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-600"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  Post a Job
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
