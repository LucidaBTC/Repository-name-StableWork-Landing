import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const spacerVariants = cva("", {
  variants: {
    size: {
      none: "h-0 w-0",
      xs: "h-1 w-1",
      sm: "h-2 w-2",
      md: "h-4 w-4",
      lg: "h-8 w-8",
      xl: "h-16 w-16",
    },
    direction: {
      horizontal: "h-0 w-full",
      vertical: "h-full w-0",
    },
  },
  defaultVariants: {
    size: "md",
    direction: "vertical",
  },
});

export interface SpacerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spacerVariants> {}

const Spacer = forwardRef<HTMLDivElement, SpacerProps>(
  ({ className, size, direction, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(spacerVariants({ size, direction, className }))}
        aria-hidden="true"
        {...props}
      />
    );
  }
);

Spacer.displayName = "Spacer";

export { Spacer, spacerVariants }; 