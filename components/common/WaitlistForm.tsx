"use client";

import { useState } from "react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type FormState = {
  email: string;
  role: "freelancer" | "client" | "";
};

type FormErrors = {
  email?: string;
  role?: string;
};

export function WaitlistForm() {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    role: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Email validation
    if (!formState.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Role validation
    if (!formState.role) {
      newErrors.role = "Please select your role";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Mock API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formState);
      setIsSuccess(true);
      setFormState({ email: "", role: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ email: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center space-y-4 animate-fade-in-up">
        <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto" />
        <h2 className="text-2xl font-bold text-gray-900">You're on the list!</h2>
        <p className="text-gray-600">
          Thanks for joining. We'll notify you when StableWork launches.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSuccess(false)}
          className="mt-4"
        >
          Add Another Email
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
      <div className="space-y-4">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.email ? "border-red-300" : "border-gray-300"
            } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
            placeholder="you@example.com"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Role Selection */}
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
            I am a
          </label>
          <select
            id="role"
            value={formState.role}
            onChange={(e) => setFormState({ ...formState, role: e.target.value as FormState["role"] })}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.role ? "border-red-300" : "border-gray-300"
            } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
            disabled={isSubmitting}
          >
            <option value="">Select your role</option>
            <option value="freelancer">Freelancer</option>
            <option value="client">Client</option>
          </select>
          {errors.role && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.role}
            </p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        variant="gradient"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Joining Waitlist...
          </>
        ) : (
          "Join Waitlist"
        )}
      </Button>
    </form>
  );
} 