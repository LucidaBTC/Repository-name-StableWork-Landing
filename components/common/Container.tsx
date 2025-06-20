import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-full",
    },
    padding: {
      none: "px-0",
      sm: "px-4",
      md: "px-6",
      lg: "px-8",
    },
  },
  defaultVariants: {
    size: "lg",
    padding: "md",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ size, padding, className }))}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";

export { Container, containerVariants };
