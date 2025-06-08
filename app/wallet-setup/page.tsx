import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import {
  Wallet,
  Mail,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Lock,
} from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Open Wallet Modal",
    description: "Click the wallet button to start the setup process",
    icon: Wallet,
  },
  {
    step: "2",
    title: "Verify Email",
    description: "Enter your email address for secure wallet creation",
    icon: Mail,
  },
  {
    step: "3",
    title: "Wallet Ready",
    description: "Your crypto wallet is created and ready to use",
    icon: CheckCircle,
  },
];

export default function WalletSetup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50/30 to-primary-50/20">
      <Header />

      <main className="py-20 sm:py-32">
        <Container>
          {/* Hero Section */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Wallet className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl lg:text-6xl">
              Create Your Crypto Wallet
            </h1>

            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Get started with StableWork in just a few clicks. No technical
              knowledge required.
            </p>
          </div>

          {/* Steps */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center text-secondary-900 mb-12">
              Simple 3-Step Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={step.step} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto shadow-glow">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-medium">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-secondary-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Wallet Setup Card */}
          <div className="max-w-md mx-auto mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-secondary-200/50 text-center">
              <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Wallet className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Ready to Get Started?
              </h3>

              <p className="text-secondary-600 mb-6">
                Create your wallet now and start earning in stablecoins.
              </p>

              <Button
                variant="primary"
                size="lg"
                className="w-full group mb-4"
              >
                <Wallet className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
                Create Wallet
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-xs text-secondary-500">
                Powered by Magic.link - No seed phrases required
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center text-secondary-900 mb-12">
              Why Our Wallet is Different
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  Secure by Design
                </h3>
                <p className="text-secondary-600">
                  Enterprise-grade security with no complex seed phrases to
                  manage
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  Instant Setup
                </h3>
                <p className="text-secondary-600">
                  Get your wallet ready in under 60 seconds with just your email
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  Works Everywhere
                </h3>
                <p className="text-secondary-600">
                  Access your wallet from any device, anywhere in the world
                </p>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-primary-50/50 rounded-2xl p-6 border border-primary-100">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary-gradient rounded-xl flex items-center justify-center shadow-glow">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-2">
                    Your Security is Our Priority
                  </h3>
                  <p className="text-secondary-700 text-sm mb-4">
                    Your wallet is secured using industry-leading encryption and
                    multi-factor authentication. We never store your private
                    keys - they remain under your control at all times.
                  </p>
                  <ul className="text-sm text-secondary-600 space-y-1">
                    <li>• Non-custodial wallet - you own your keys</li>
                    <li>• Email-based recovery (no seed phrases)</li>
                    <li>• Multi-factor authentication</li>
                    <li>• SOC 2 Type II compliant infrastructure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
