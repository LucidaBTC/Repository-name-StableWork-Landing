import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const textareaVariants = cva(
  "flex w-full rounded-md border border-secondary-200 bg-white px-3 py-2 text-sm transition-colors placeholder:text-secondary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-secondary-200",
        error: "border-red-500 focus-visible:ring-red-500",
      },
      textareaSize: {
        sm: "min-h-[80px] px-2 py-1.5 text-xs",
        md: "min-h-[100px] px-3 py-2",
        lg: "min-h-[120px] px-4 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      textareaSize: "md",
    },
  }
);

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof textareaVariants> {
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, textareaSize, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <textarea
          className={cn(textareaVariants({ variant: error ? "error" : variant, textareaSize, className }))}
          ref={ref}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${props.id}-error` : undefined}
          {...props}
        />
        {error && (
          <p
            id={`${props.id}-error`}
            className="mt-1 text-sm text-red-500"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea, textareaVariants }; 