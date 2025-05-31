"use client";

import { Button } from "./Button";
import { Star } from "lucide-react";

interface JobCardProps {
  title: string;
  budget: string;
  tags: string[];
  location: {
    country: string;
    city: string;
    flag: string;
  };
  rating: number;
}

export function JobCard({ title, budget, tags, location, rating }: JobCardProps) {
  return (
    <div className="min-w-[280px] bg-white rounded-xl shadow-medium p-6 border border-secondary-200/50 hover:border-primary-200 transition-all duration-300 snap-center">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-1">
            {title}
          </h3>
          <p className="text-primary-600 font-medium">
            {budget}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl" role="img" aria-label={`${location.country} flag`}>
            {location.flag}
          </span>
          <span className="text-sm text-secondary-600">
            {location.city}
          </span>
        </div>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-medium text-secondary-900">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>

      <Button
        variant="gradient"
        size="sm"
        className="w-full"
      >
        Apply Now
      </Button>
    </div>
  );
} 