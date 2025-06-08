"use client";

import { Button } from "./Button";
import { Star, MapPin, Clock, Wallet } from "lucide-react";

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
  paymentType: "USDC" | "DAI";
  duration: string;
}

export function JobCard({ title, budget, tags, location, rating, paymentType, duration }: JobCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-secondary-200/50 hover:border-primary-200 hover:-translate-y-1 p-6 snap-center">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-1 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="text-primary-600 font-medium">
            {budget}
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-secondary-900">
            {rating.toFixed(1)}
          </span>
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

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4 text-sm text-secondary-600">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{location.city}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{duration}</span>
          </div>
        </div>
        <div className="flex items-center">
          <Wallet className="w-4 h-4 mr-1 text-primary-600" />
          <span className="text-sm font-medium text-primary-600">{paymentType}</span>
        </div>
      </div>

      <Button
        variant="gradient"
        size="sm"
        className="w-full group"
      >
        Apply Now
      </Button>
    </div>
  );
} 