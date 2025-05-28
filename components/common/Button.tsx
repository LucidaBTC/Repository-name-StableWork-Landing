import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-gradient text-white shadow-medium hover:shadow-large focus-visible:ring-primary-500",
        secondary:
          "bg-white text-secondary-900 border-2 border-secondary-200 shadow-soft hover:shadow-medium hover:border-secondary-300 focus-visible:ring-secondary-500",
        outline:
          "border-2 border-primary-200 bg-transparent text-primary-700 hover:bg-primary-50 hover:border-primary-300 focus-visible:ring-primary-500",
        ghost:
          "text-secondary-700 hover:bg-secondary-100 hover:text-secondary-900 focus-visible:ring-secondary-500 hover:scale-100",
        gradient:
          "bg-primary-gradient text-white shadow-glow hover:shadow-glow-purple focus-visible:ring-accent-500",
        success:
          "bg-success-500 text-white shadow-medium hover:bg-success-600 hover:shadow-large focus-visible:ring-success-500",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, loading, children, disabled, ...props },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {/* Gradient overlay for hover effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

        {loading && (
          <div className="mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}

        <span className="relative z-10">{children}</span>
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
