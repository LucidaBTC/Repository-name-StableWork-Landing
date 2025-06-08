import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const headingVariants = cva("font-bold tracking-tight", {
  variants: {
    size: {
      h1: "text-4xl sm:text-5xl lg:text-6xl",
      h2: "text-3xl sm:text-4xl",
      h3: "text-2xl sm:text-3xl",
      h4: "text-xl sm:text-2xl",
    },
    variant: {
      primary: "text-primary-900",
      secondary: "text-secondary-900",
      white: "text-white",
    },
  },
  defaultVariants: {
    size: "h1",
    variant: "secondary",
  },
});

interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4";
}

export function Heading({
  as: Component = "h1",
  size,
  variant,
  className,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(headingVariants({ size, variant, className }))}
      {...props}
    />
  );
}

const textVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    variant: {
      primary: "text-primary-900",
      secondary: "text-secondary-900",
      muted: "text-secondary-600",
      white: "text-white",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "base",
    variant: "secondary",
    weight: "normal",
  },
});

interface TextProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, "color">,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}

export function Text({
  as: Component = "p",
  size,
  variant,
  weight,
  className,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(textVariants({ size, variant, weight, className }))}
      {...props}
    />
  );
} 