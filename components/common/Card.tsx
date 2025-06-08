import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const cardVariants = cva(
  "rounded-lg border bg-white shadow-sm transition-colors",
  {
    variants: {
      variant: {
        default: "border-secondary-200",
        primary: "border-primary-200",
        secondary: "border-secondary-200",
        accent: "border-accent-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

const cardHeaderVariants = cva("flex flex-col space-y-1.5 p-6", {
  variants: {
    variant: {
      default: "",
      primary: "bg-primary-50",
      secondary: "bg-secondary-50",
      accent: "bg-accent-50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeaderVariants> {}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardHeaderVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

CardHeader.displayName = "CardHeader";

const cardTitleVariants = cva("text-lg font-semibold leading-none tracking-tight", {
  variants: {
    variant: {
      default: "text-secondary-900",
      primary: "text-primary-900",
      secondary: "text-secondary-900",
      accent: "text-accent-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof cardTitleVariants> {}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(cardTitleVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

CardTitle.displayName = "CardTitle";

const cardDescriptionVariants = cva("text-sm text-secondary-500", {
  variants: {
    variant: {
      default: "text-secondary-500",
      primary: "text-primary-500",
      secondary: "text-secondary-500",
      accent: "text-accent-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof cardDescriptionVariants> {}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(cardDescriptionVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

CardDescription.displayName = "CardDescription";

const cardContentVariants = cva("p-6 pt-0", {
  variants: {
    variant: {
      default: "",
      primary: "bg-primary-50",
      secondary: "bg-secondary-50",
      accent: "bg-accent-50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardContentVariants> {}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardContentVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

CardContent.displayName = "CardContent";

const cardFooterVariants = cva("flex items-center p-6 pt-0", {
  variants: {
    variant: {
      default: "",
      primary: "bg-primary-50",
      secondary: "bg-secondary-50",
      accent: "bg-accent-50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardFooterVariants> {}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardFooterVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }; 