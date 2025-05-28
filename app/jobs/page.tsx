"use client";

import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { mockJobs, jobCategories, type Job } from "@/lib/mockData";
import {
  Search,
  Filter,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Briefcase,
  Zap,
  TrendingUp,
  Globe,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedType, setSelectedType] = useState("All Types");

  const jobTypes = [
    "All Types",
    "Full-time",
    "Part-time",
    "Contract",
    "Freelance",
  ];

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "All Categories" ||
      job.category === selectedCategory;
    const matchesType =
      selectedType === "All Types" || job.type === selectedType;

    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary-50/30 to-primary-50/20">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-accent-100/20" />

          <Container>
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <div className="animate-fade-in-up">
                <div className="mb-6">
                  <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-secondary-700 border border-secondary-200/50 shadow-soft animate-scale-in">
                    <Globe className="w-4 h-4 text-primary-500" />
                    <span>{mockJobs.length} jobs available worldwide</span>
                  </div>
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl lg:text-6xl">
                  Browse Jobs
                </h1>

                <p className="mt-6 text-lg leading-8 text-secondary-600 max-w-2xl mx-auto">
                  Browse open roles from clients around the world — local,
                  remote, creative, skilled, and service-based.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-white/50 backdrop-blur-sm border-y border-secondary-200/50">
          <Container>
            <div
              className="space-y-6 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs, companies, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-secondary-200 rounded-2xl shadow-soft focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-secondary-900 placeholder-secondary-400"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-secondary-500" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-white border border-secondary-200 rounded-xl px-4 py-2 text-sm font-medium text-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {jobCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-white border border-secondary-200 rounded-xl px-4 py-2 text-sm font-medium text-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {jobTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </Container>
        </section>

        {/* Jobs Grid */}
        <section className="py-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job, index) => (
                <div
                  key={job.id}
                  className="animate-fade-in-up hover:-translate-y-2 transition-transform duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link href={`/jobs/${job.id}`}>
                    <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-secondary-200/50 hover:border-primary-200 cursor-pointer h-full">
                      {/* Job Type Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            job.featured
                              ? "bg-accent-100 text-accent-700 border border-accent-200"
                              : job.urgent
                                ? "bg-orange-100 text-orange-700 border border-orange-200"
                                : "bg-secondary-100 text-secondary-700 border border-secondary-200"
                          }`}
                        >
                          {job.featured && <Star className="w-3 h-3 mr-1" />}
                          {job.urgent && <Zap className="w-3 h-3 mr-1" />}
                          {job.featured
                            ? "Featured"
                            : job.urgent
                              ? "Urgent"
                              : job.type}
                        </span>
                        <span className="text-xs text-secondary-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {job.posted}
                        </span>
                      </div>

                      {/* Job Title and Company */}
                      <h3 className="text-lg font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-secondary-600 text-sm mb-3">
                        {job.company}
                      </p>

                      {/* Location and Salary */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-secondary-500 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-primary-600 font-semibold">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-secondary-600 text-sm mb-4 line-clamp-2">
                        {job.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-primary-50 text-primary-700 border border-primary-100"
                          >
                            {skill}
                          </span>
                        ))}
                        {job.skills.length > 3 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-secondary-100 text-secondary-600">
                            +{job.skills.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Apply Button */}
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full group-hover:scale-105 transition-transform"
                      >
                        Apply Now
                        <TrendingUp className="w-4 h-4 ml-2" />
                      </Button>

                      {/* Hover Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-accent-50/0 group-hover:from-primary-50/20 group-hover:to-accent-50/20 rounded-2xl transition-all duration-300 pointer-events-none" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredJobs.length === 0 && (
              <div
                className="text-center py-16 animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-secondary-400" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  No jobs found
                </h3>
                <p className="text-secondary-600 mb-6">
                  Try adjusting your search criteria or browse all categories.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All Categories");
                    setSelectedType("All Types");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Load More */}
            {filteredJobs.length > 0 && (
              <div
                className="text-center mt-12 animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <Button variant="outline" size="lg">
                  Load More Jobs
                </Button>
              </div>
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
