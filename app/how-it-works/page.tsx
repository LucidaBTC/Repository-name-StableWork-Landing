import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import {
  Shield,
  ArrowRight,
  Wallet,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Zap,
  Users,
  HelpCircle,
} from "lucide-react";

const timeline = [
  {
    step: "1",
    title: "Client posts & funds escrow",
    description:
      "Client creates a job posting and deposits payment into smart contract escrow",
    icon: FileText,
  },
  {
    step: "2",
    title: "Work delivered",
    description:
      "Freelancer completes the work and submits deliverables for review",
    icon: CheckCircle,
  },
  {
    step: "3",
    title: "Payment released in USDC/DAI",
    description:
      "Once approved, funds are instantly released from escrow to freelancer",
    icon: DollarSign,
  },
];

const faqs = [
  {
    question: "What is a stablecoin escrow?",
    answer: "Funds are locked in smart-contract escrow until work is accepted.",
  },
  {
    question: "Do I need a wallet right now?",
    answer: "You can create one in-app with a single click.",
  },
  {
    question: "Are there gas fees?",
    answer: "StableWork covers L2 gas for payouts.",
  },
  {
    question: "Which tokens are supported?",
    answer: "USDC, DAI, and more soon.",
  },
  {
    question: "How long do payouts take?",
    answer: "Typically < 60 seconds after approval.",
  },
  {
    question: "What if there's a dispute?",
    answer: "Escrow funds stay locked until mediation.",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50/30 to-primary-50/20">
      <Header />

      <main role="main" aria-label="How It Works">
        {/* Hero Section */}
        <section className="py-20 sm:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl lg:text-6xl">
                How It Works
              </h1>
              <p className="mt-6 text-lg leading-8 text-secondary-600">
                StableWork uses crypto escrow to keep freelancers safe and
                payments fast.
              </p>
            </div>
          </Container>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <Container>
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold text-center text-secondary-900 mb-12">
                Payment Timeline
              </h2>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.step} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center shadow-glow">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="w-6 h-6 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {item.step}
                        </span>
                        <h3 className="text-lg font-semibold text-secondary-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-secondary-600">{item.description}</p>
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="flex-shrink-0 ml-6">
                        <ArrowRight className="w-5 h-5 text-secondary-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Wallet Setup Section */}
        <section className="py-16 bg-secondary-900">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Wallet Setup
              </h2>
              <p className="text-lg text-secondary-300 mb-8">
                Create your wallet in seconds with Magic.link.
              </p>
              <Button variant="outline" size="lg">
                <Zap className="w-5 h-5 mr-2" />
                Set Up Wallet
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold text-center text-secondary-900 mb-12">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-secondary-200/50"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <HelpCircle className="w-6 h-6 text-primary-600 mt-1" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-secondary-600">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-gradient">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to get started?
              </h2>
              <p className="text-lg text-primary-100 mb-8">
                Join thousands of freelancers earning in stablecoins.
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
                  <Wallet className="w-5 h-5 mr-2" />
                  Connect Wallet
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
