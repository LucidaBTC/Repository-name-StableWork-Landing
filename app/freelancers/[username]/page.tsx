import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { mockFreelancers } from "@/lib/mockData";
import {
  MapPin,
  Star,
  Clock,
  MessageCircle,
  Briefcase,
  DollarSign,
  CheckCircle,
  Calendar,
  Users,
  Award,
} from "lucide-react";

export default function FreelancerProfile({
  params,
}: {
  params: { username: string };
}) {
  // In a real app, you'd fetch the freelancer by username
  const freelancer = mockFreelancers[0]; // Using first freelancer as example

  const recentJobs = [
    {
      id: 1,
      title: "Travel Blog Content Writing",
      client: "WanderLust Co.",
      completed: "2 weeks ago",
      rating: 5,
      earnings: "$850 USDC",
    },
    {
      id: 2,
      title: "SEO Article Series",
      client: "Digital Marketing Pro",
      completed: "1 month ago",
      rating: 5,
      earnings: "$1,200 USDC",
    },
    {
      id: 3,
      title: "Website Copy Refresh",
      client: "TechStart Inc.",
      completed: "2 months ago",
      rating: 4,
      earnings: "$650 USDC",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50/30 to-primary-50/20">
      <Header />

      <main className="py-8">
        <Container>
          {/* Banner Section */}
          <div className="bg-primary-gradient rounded-2xl p-8 text-white mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-3xl font-bold backdrop-blur-sm">
                {freelancer.avatar}
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{freelancer.name}</h1>
                <p className="text-xl text-primary-100 mb-3">
                  {freelancer.title}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-primary-100">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-1 text-yellow-300" />
                    <span className="font-semibold">{freelancer.rating}</span>
                    <span className="ml-1">
                      ({freelancer.completedJobs} jobs completed)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-1" />
                    <span>Responds in {freelancer.responseTime}</span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className={`w-3 h-3 rounded-full mr-2 ${
                        freelancer.availability === "Available"
                          ? "bg-green-400"
                          : freelancer.availability === "Busy"
                            ? "bg-yellow-400"
                            : "bg-red-400"
                      }`}
                    />
                    <span>{freelancer.availability}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold mb-1">{freelancer.rate}</div>
                <p className="text-primary-100">Starting rate</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio & Location */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-secondary-200/50">
                <h2 className="text-xl font-semibold text-secondary-900 mb-4">
                  About
                </h2>
                <div className="flex items-center text-secondary-600 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{freelancer.location}</span>
                </div>
                <p className="text-secondary-700 leading-relaxed">
                  {freelancer.bio}
                </p>
              </div>

              {/* Skills */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-secondary-200/50">
                <h2 className="text-xl font-semibold text-secondary-900 mb-4">
                  Skills & Expertise
                </h2>
                <div className="flex flex-wrap gap-3">
                  {freelancer.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-primary-50 text-primary-700 border border-primary-100 hover:bg-primary-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recent Jobs */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-secondary-200/50">
                <h2 className="text-xl font-semibold text-secondary-900 mb-6">
                  Recent Work
                </h2>
                <div className="space-y-4">
                  {recentJobs.map((job) => (
                    <div
                      key={job.id}
                      className="border border-secondary-200 rounded-xl p-4 hover:bg-secondary-50/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-secondary-900">
                          {job.title}
                        </h3>
                        <div className="flex items-center text-yellow-500">
                          {[...Array(job.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-secondary-600 text-sm mb-2">
                        {job.client}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-secondary-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>Completed {job.completed}</span>
                        </div>
                        <div className="flex items-center font-semibold text-primary-600">
                          <DollarSign className="w-4 h-4 mr-1" />
                          <span>{job.earnings}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Hire Now CTA */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-secondary-200/50">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                    Ready to hire?
                  </h3>

                  <div className="space-y-3 mb-6">
                    <Button
                      variant="gradient"
                      size="lg"
                      className="w-full group"
                    >
                      <Briefcase className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
                      Hire Now
                    </Button>

                    <Button variant="outline" size="lg" className="w-full">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-secondary-500">
                      Payments secured by smart contract escrow
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-secondary-200/50">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                    Stats
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-600">Total earned</span>
                      <span className="font-semibold text-secondary-900">
                        $12,450 USDC
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-600">Jobs completed</span>
                      <span className="font-semibold text-secondary-900">
                        {freelancer.completedJobs}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-600">Success rate</span>
                      <span className="font-semibold text-green-600">98%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-600">Member since</span>
                      <span className="font-semibold text-secondary-900">
                        Jan 2023
                      </span>
                    </div>
                  </div>
                </div>

                {/* Verification */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-secondary-200/50">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                    Verification
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-secondary-700">
                        Identity verified
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-secondary-700">Email verified</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-secondary-700">
                        Wallet connected
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-yellow-500 mr-3" />
                      <span className="text-secondary-700">
                        Top rated freelancer
                      </span>
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
