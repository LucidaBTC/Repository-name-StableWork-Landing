import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import {
  Briefcase,
  DollarSign,
  Globe,
  Shield,
  Users,
  FileText,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function PostJob() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50/30 to-primary-50/20">
      <Header />

      <main className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Briefcase className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl lg:text-6xl">
              Post a Job
            </h1>

            <p className="mt-6 text-lg leading-8 text-secondary-600 max-w-2xl mx-auto">
              Reach global freelancers and pay securely via stablecoin escrow.
            </p>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Global Talent Pool
              </h3>
              <p className="text-secondary-600">
                Access skilled freelancers from around the world
              </p>
            </div>

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
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Fast Payments
              </h3>
              <p className="text-secondary-600">
                Instant payouts in USDC or DAI
              </p>
            </div>
          </div>

          {/* Job Posting Form */}
          <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-secondary-200/50">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">
              Create Your Job Posting
            </h2>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-secondary-900 mb-2"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="e.g. Content Writer for Travel Blog"
                  className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-secondary-900 mb-2"
                >
                  Job Description
                </label>
                <textarea
                  id="description"
                  rows={6}
                  placeholder="Describe the work you need done..."
                  className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-secondary-900 mb-2"
                  >
                    Budget (USDC)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
                    <input
                      type="number"
                      id="budget"
                      placeholder="1000"
                      className="w-full pl-10 pr-4 py-3 border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-medium text-secondary-900 mb-2"
                  >
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option>Less than 1 week</option>
                    <option>1-2 weeks</option>
                    <option>2-4 weeks</option>
                    <option>1-3 months</option>
                    <option>3+ months</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="skills"
                  className="block text-sm font-medium text-secondary-900 mb-2"
                >
                  Required Skills
                </label>
                <input
                  type="text"
                  id="skills"
                  placeholder="e.g. Content Writing, SEO, Research"
                  className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="bg-primary-50/50 rounded-xl p-6 border border-primary-100">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-gradient rounded-xl flex items-center justify-center shadow-glow">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-2">
                      Escrow Protection
                    </h3>
                    <p className="text-secondary-700 text-sm">
                      Your payment will be held in smart contract escrow until
                      work is completed and approved. Only a 2% platform fee
                      applies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="flex-1 group">
                  <FileText className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
                  Post Job & Fund Escrow
                </Button>
                <Button variant="outline" size="lg">
                  Save as Draft
                </Button>
              </div>
            </form>
          </div>

          {/* How It Works */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-secondary-900 mb-8">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Post & Fund", icon: FileText },
                { step: "2", title: "Review Proposals", icon: Users },
                { step: "3", title: "Work Delivered", icon: CheckCircle },
                { step: "4", title: "Release Payment", icon: DollarSign },
              ].map((item, index) => (
                <div key={item.step} className="text-center">
                  <div className="relative mb-4">
                    <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto shadow-glow">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-secondary-900">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
