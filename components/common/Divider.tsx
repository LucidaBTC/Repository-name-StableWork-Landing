import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const dividerVariants = cva("shrink-0", {
  variants: {
    variant: {
      default: "bg-secondary-200",
      primary: "bg-primary-200",
      secondary: "bg-secondary-200",
      accent: "bg-accent-200",
    },
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full w-px",
    },
  },
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
  },
});

type Orientation = "horizontal" | "vertical";

export interface DividerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "aria-orientation">,
    VariantProps<typeof dividerVariants> {
  label?: string;
  orientation?: Orientation;
}

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, variant, orientation = "horizontal", label, ...props }, ref) => {
    if (label) {
      return (
        <div
          ref={ref}
          className={cn("flex items-center gap-4", className)}
          role="separator"
          aria-orientation={orientation}
          {...props}
        >
          <div className={cn(dividerVariants({ variant, orientation }))} />
          <span className="text-sm text-secondary-500">{label}</span>
          <div className={cn(dividerVariants({ variant, orientation }))} />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(dividerVariants({ variant, orientation, className }))}
        role="separator"
        aria-orientation={orientation}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";

export { Divider, dividerVariants }; 