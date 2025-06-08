import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-white text-secondary-900 border-secondary-200",
        primary: "bg-primary-50 text-primary-900 border-primary-200",
        secondary: "bg-secondary-50 text-secondary-900 border-secondary-200",
        accent: "bg-accent-50 text-accent-900 border-accent-200",
        success: "bg-green-50 text-green-900 border-green-200",
        warning: "bg-yellow-50 text-yellow-900 border-yellow-200",
        error: "bg-red-50 text-red-900 border-red-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant, className }))}
        {...props}
      >
        {icon}
        <div>{children}</div>
      </div>
    );
  }
);

Alert.displayName = "Alert";

const alertTitleVariants = cva("mb-1 font-medium leading-none tracking-tight", {
  variants: {
    variant: {
      default: "text-secondary-900",
      primary: "text-primary-900",
      secondary: "text-secondary-900",
      accent: "text-accent-900",
      success: "text-green-900",
      warning: "text-yellow-900",
      error: "text-red-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface AlertTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof alertTitleVariants> {}

const AlertTitle = forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <h5
        ref={ref}
        className={cn(alertTitleVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

AlertTitle.displayName = "AlertTitle";

const alertDescriptionVariants = cva("text-sm [&_p]:leading-relaxed", {
  variants: {
    variant: {
      default: "text-secondary-600",
      primary: "text-primary-600",
      secondary: "text-secondary-600",
      accent: "text-accent-600",
      success: "text-green-600",
      warning: "text-yellow-600",
      error: "text-red-600",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof alertDescriptionVariants> {}

const AlertDescription = forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(alertDescriptionVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription }; 