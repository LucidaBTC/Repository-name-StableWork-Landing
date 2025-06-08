import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const visuallyHiddenVariants = cva(
  "absolute h-px w-px p-0 -m-px overflow-hidden whitespace-nowrap border-0",
  {
    variants: {
      focusable: {
        true: "focus:static focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-normal focus:p-3 focus:m-0 focus:border focus:border-primary-500 focus:border-dashed focus:bg-white focus:z-50",
        false: "",
      },
    },
    defaultVariants: {
      focusable: false,
    },
  }
);

export interface VisuallyHiddenProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "focusable">,
    VariantProps<typeof visuallyHiddenVariants> {
  focusable?: boolean;
}

const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ className, focusable = false, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(visuallyHiddenVariants({ focusable, className }))}
        {...props}
      />
    );
  }
);

VisuallyHidden.displayName = "VisuallyHidden";

export { VisuallyHidden, visuallyHiddenVariants }; 