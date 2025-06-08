import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { mockJobs } from "@/lib/mockData";
import {
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Briefcase,
  Users,
  Wallet,
  Shield,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function JobDetail({ params }: { params: { slug: string } }) {
  // In a real app, you'd fetch the job by slug
  const job = mockJobs[0]; // Using first job as example

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50/30 to-primary-50/20">
      <Header />

      <main className="py-8">
        <Container>
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/jobs"
              className="inline-flex items-center text-secondary-600 hover:text-secondary-900 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Jobs
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-secondary-200/50">
                {/* Job Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-700 border border-accent-200">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                    <span className="text-sm text-secondary-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.posted}
                    </span>
                  </div>

                  <h1 className="text-3xl font-bold text-secondary-900 mb-2">
                    {job.title}
                  </h1>

                  <p className="text-lg text-secondary-600 mb-4">
                    {job.company}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center font-semibold text-primary-600">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {job.salary}
                    </div>
                  </div>
                </div>

                {/* Job Description */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-secondary-900 mb-4">
                    Job Description
                  </h2>
                  <p className="text-secondary-700 leading-relaxed mb-6">
                    {job.description}
                  </p>

                  <div className="prose prose-secondary max-w-none">
                    <p>
                      We are looking for a talented content writer to join our
                      team and help create engaging, SEO-optimized content for
                      our travel blog. You'll be responsible for researching
                      destinations, writing compelling articles, and optimizing
                      content for search engines.
                    </p>

                    <h3>Responsibilities:</h3>
                    <ul>
                      <li>Research and write high-quality travel articles</li>
                      <li>Optimize content for SEO best practices</li>
                      <li>Collaborate with our editorial team</li>
                      <li>Meet deadlines and maintain content calendar</li>
                    </ul>

                    <h3>Requirements:</h3>
                    <ul>
                      <li>3+ years of content writing experience</li>
                      <li>Strong SEO knowledge</li>
                      <li>Travel industry experience preferred</li>
                      <li>Excellent English writing skills</li>
                    </ul>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-secondary-900 mb-4">
                    Required Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium bg-primary-50 text-primary-700 border border-primary-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Payment Protection */}
                <div className="bg-primary-50/50 rounded-xl p-6 border border-primary-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-gradient rounded-xl flex items-center justify-center shadow-glow">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-2">
                        Payment Protection
                      </h3>
                      <p className="text-secondary-700 text-sm">
                        This job is protected by StableWork's smart contract
                        escrow. Payment is guaranteed once work is approved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-secondary-200/50">
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-primary-600 mb-2">
                      {job.salary}
                    </div>
                    <p className="text-secondary-600 text-sm">
                      Fixed Price • Paid in USDC
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full group"
                    >
                      <CheckCircle className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
                      Apply Now
                    </Button>

                    <Button variant="outline" size="lg" className="w-full">
                      <Wallet className="w-5 h-5 mr-2" />
                      Connect Wallet
                    </Button>
                  </div>

                  <div className="border-t border-secondary-200 pt-6">
                    <h3 className="font-semibold text-secondary-900 mb-4">
                      About the Client
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Member since</span>
                        <span className="text-secondary-900">2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Jobs posted</span>
                        <span className="text-secondary-900">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Rating</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-secondary-900">4.9</span>
                        </div>
                      </div>
                    </div>
                  </div>
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
