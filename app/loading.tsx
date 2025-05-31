import { CardSkeleton, TextSkeleton } from "@/components/common/LoadingSkeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section Skeleton */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-64 h-8 bg-gray-200 rounded-full mx-auto animate-pulse" />
          </div>
          <div className="space-y-4 mb-10">
            <div className="h-16 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-16 bg-gray-200 rounded-lg animate-pulse" />
          </div>
          <div className="h-12 w-48 bg-gray-200 rounded-full mx-auto animate-pulse" />
        </div>

        {/* Features Section Skeleton */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>

        {/* Content Section Skeleton */}
        <div className="mt-20 space-y-10">
          <TextSkeleton />
          <TextSkeleton />
        </div>
      </div>
    </div>
  );
} 