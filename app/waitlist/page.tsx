"use client";

import { Container } from "@/components/common/Container";
import { WaitlistForm } from "@/components/common/WaitlistForm";

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-secondary-50/50 py-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Join the Waitlist
          </h1>
          <p className="text-lg text-gray-600">
            Be among the first to experience StableWork. We'll notify you when we launch.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-soft p-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <WaitlistForm />
          </div>
        </div>
      </Container>
    </div>
  );
} 