import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const switchVariants = cva(
  "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-600 data-[state=unchecked]:bg-secondary-200",
  {
    variants: {
      variant: {
        default: "border-transparent",
        error: "border-red-500 focus-visible:ring-red-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const switchThumbVariants = cva(
  "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
  {
    variants: {
      variant: {
        default: "bg-white",
        error: "bg-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">,
    VariantProps<typeof switchVariants> {
  error?: string;
  label?: string;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, variant, error, label, ...props }, ref) => {
    return (
      <div className="flex items-start space-x-2">
        <div className="flex h-5 items-center">
          <input
            type="checkbox"
            role="switch"
            className="peer sr-only"
            ref={ref}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${props.id}-error` : undefined}
            {...props}
          />
          <div
            className={cn(switchVariants({ variant: error ? "error" : variant, className }))}
            data-state={props.checked ? "checked" : "unchecked"}
          >
            <div
              className={cn(switchThumbVariants({ variant: error ? "error" : variant }))}
              data-state={props.checked ? "checked" : "unchecked"}
            />
          </div>
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

Switch.displayName = "Switch";

export { Switch, switchVariants, switchThumbVariants }; 