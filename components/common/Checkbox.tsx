import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const checkboxVariants = cva(
  "peer h-4 w-4 shrink-0 rounded border border-secondary-200 bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-600 data-[state=checked]:text-white data-[state=checked]:border-primary-600",
  {
    variants: {
      variant: {
        default: "border-secondary-200",
        error: "border-red-500 focus-visible:ring-red-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">,
    VariantProps<typeof checkboxVariants> {
  error?: string;
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, variant, error, label, ...props }, ref) => {
    return (
      <div className="flex items-start space-x-2">
        <div className="flex h-5 items-center">
          <input
            type="checkbox"
            className={cn(checkboxVariants({ variant: error ? "error" : variant, className }))}
            ref={ref}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${props.id}-error` : undefined}
            {...props}
          />
        </div>
        <div className="grid gap-1.5 leading-none">
          {label && (
            <label
              htmlFor={props.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>
          )}
          {error && (
            <p
              id={`${props.id}-error`}
              className="text-sm text-red-500"
              role="alert"
            >
              {error}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants }; 