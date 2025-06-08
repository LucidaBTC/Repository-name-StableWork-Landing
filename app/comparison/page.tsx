import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import {
  Check,
  X,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Globe,
  Clock,
} from "lucide-react";

const comparisonData = [
  {
    platform: "StableWork",
    payout: "USDC/DAI",
    speed: "Instant (≤ 60 s)",
    freelancerFee: "0%",
    clientFee: "2%",
    fxMarkups: "0%",
    walletBuiltIn: true,
    availability: "Global",
    highlight: true,
  },
  {
    platform: "Upwork",
    payout: "Local currency",
    speed: "5-10 days",
    freelancerFee: "10–20%",
    clientFee: "3%",
    fxMarkups: "2-3%",
    walletBuiltIn: false,
    availability: "180+ countries",
    highlight: false,
  },
  {
    platform: "Fiverr",
    payout: "Local currency",
    speed: "7-14 days",
    freelancerFee: "20%",
    clientFee: "—",
    fxMarkups: "2-3%",
    walletBuiltIn: false,
    availability: "160+",
    highlight: false,
  },
  {
    platform: "Freelancer.com",
    payout: "Local currency",
    speed: "3-8 days",
    freelancerFee: "10%",
    clientFee: "3%",
    fxMarkups: "2-3%",
    walletBuiltIn: false,
    availability: "247 regions",
    highlight: false,
  },
  {
    platform: "Deel",
    payout: "USD → bank/crypto",
    speed: "1-5 days",
    freelancerFee: "8-10%¹",
    clientFee: "—",
    fxMarkups: "2%",
    walletBuiltIn: false,
    availability: "150+",
    highlight: false,
  },
];

export default function Comparison() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50/30 to-primary-50/20">
      <Header />

      <main className="py-20 sm:py-32">
        <Container>
          {/* Hero Section */}
          <div className="mx-auto max-w-4xl text-center mb-16">
            <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl lg:text-6xl">
              How StableWork Stacks Up
            </h1>

            <p className="mt-6 text-lg leading-8 text-secondary-600">
              See why freelancers everywhere are switching to stablecoin
              payouts.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-secondary-200/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary-50/50 border-b border-secondary-200">
                    <th className="px-4 py-4 text-left text-sm font-semibold text-secondary-900">
                      Platform
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-secondary-900">
                      Payout
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-secondary-900">
                      Speed
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-secondary-900">
                      Freelancer Fee
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-secondary-900">
                      Client Fee
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-secondary-900">
                      FX Mark-ups
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-secondary-900">
                      Wallet Built-In
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-secondary-900">
                      Availability
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-secondary-200">
                  {comparisonData.map((row, index) => (
                    <tr
                      key={row.platform}
                      className={`transition-colors ${
                        row.highlight
                          ? "bg-primary-50/50 hover:bg-primary-50/70"
                          : "hover:bg-secondary-50/30"
                      }`}
                    >
                      <td className="px-4 py-4">
                        <div
                          className={`text-sm font-semibold ${
                            row.highlight
                              ? "text-primary-700"
                              : "text-secondary-900"
                          }`}
                        >
                          {row.platform}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span
                          className={`text-sm ${
                            row.highlight
                              ? "font-semibold text-primary-700"
                              : "text-secondary-700"
                          }`}
                        >
                          {row.payout}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span
                          className={`text-sm ${
                            row.highlight
                              ? "font-semibold text-primary-700"
                              : "text-secondary-700"
                          }`}
                        >
                          {row.speed}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span
                          className={`text-sm font-semibold ${
                            row.highlight
                              ? "text-primary-700"
                              : "text-secondary-700"
                          }`}
                        >
                          {row.freelancerFee}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span
                          className={`text-sm font-semibold ${
                            row.highlight
                              ? "text-primary-700"
                              : "text-secondary-700"
                          }`}
                        >
                          {row.clientFee}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span
                          className={`text-sm ${
                            row.highlight
                              ? "font-semibold text-primary-700"
                              : "text-secondary-700"
                          }`}
                        >
                          {row.fxMarkups}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        {row.walletBuiltIn ? (
                          <Check
                            className={`w-5 h-5 mx-auto ${
                              row.highlight
                                ? "text-primary-600"
                                : "text-green-600"
                            }`}
                          />
                        ) : (
                          <X className="w-5 h-5 mx-auto text-red-500" />
                        )}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span
                          className={`text-sm ${
                            row.highlight
                              ? "font-semibold text-primary-700"
                              : "text-secondary-700"
                          }`}
                        >
                          {row.availability}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footnote */}
            <div className="px-6 py-4 bg-secondary-50/30 border-t border-secondary-200">
              <p className="text-xs text-secondary-600">
                ¹ Average combined fee incl. withdrawal costs
              </p>
            </div>
          </div>

          {/* Key Advantages */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Instant Payouts
              </h3>
              <p className="text-secondary-600">
                Get paid in under 60 seconds, not days or weeks
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Zero Freelancer Fees
              </h3>
              <p className="text-secondary-600">
                Keep 100% of what you earn with no platform fees
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                No FX Fees
              </h3>
              <p className="text-secondary-600">
                Stablecoins eliminate currency conversion costs
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-20">
            <div className="bg-primary-gradient rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">
                Ready to freelance without borders?
              </h2>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Join thousands of freelancers who've made the switch to instant,
                fee-free stablecoin payments.
              </p>
              <Button variant="outline" size="lg" className="group">
                <Users className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
                Join Waitlist
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
