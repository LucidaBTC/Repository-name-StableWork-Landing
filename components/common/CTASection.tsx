"use client";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-secondary-50/50" aria-labelledby="cta-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center space-y-4 animate-fade-in-up">
          <h2 id="cta-heading" className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="text-lg leading-8 text-secondary-600">
            Join the waitlist and be first to access StableWork.
          </p>
          <div className="mt-8">
            <Link href="/waitlist">
              <Button
                variant="primary"
                size="lg"
                className="group bg-primary-gradient hover:opacity-90"
                aria-describedby="cta-description"
              >
                <Users className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" aria-hidden="true" />
                Join Waitlist
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>
            <span id="cta-description" className="sr-only">
              Join our waitlist to be notified when StableWork launches
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
} 