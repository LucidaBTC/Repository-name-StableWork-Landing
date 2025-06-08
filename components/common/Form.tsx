import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const formVariants = cva("space-y-6", {
  variants: {
    variant: {
      default: "",
      inline: "flex items-end space-x-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface FormProps
  extends React.FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof formVariants> {
  error?: string;
}

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ className, variant, error, ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={cn(formVariants({ variant, className }))}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${props.id}-error` : undefined}
        {...props}
      >
        {props.children}
        {error && (
          <p
            id={`${props.id}-error`}
            className="text-sm text-red-500"
            role="alert"
          >
            {error}
          </p>
        )}
      </form>
    );
  }
);

Form.displayName = "Form";

const formGroupVariants = cva("space-y-2", {
  variants: {
    variant: {
      default: "",
      inline: "flex items-end space-x-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface FormGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof formGroupVariants> {
  error?: string;
}

const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>(
  ({ className, variant, error, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(formGroupVariants({ variant, className }))}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${props.id}-error` : undefined}
        {...props}
      >
        {props.children}
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
    );
  }
);

FormGroup.displayName = "FormGroup";

const formLabelVariants = cva("text-sm font-medium text-secondary-900", {
  variants: {
    variant: {
      default: "",
      error: "text-red-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface FormLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof formLabelVariants> {
  error?: string;
}

const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, variant, error, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(formLabelVariants({ variant: error ? "error" : variant, className }))}
        {...props}
      />
    );
  }
);

FormLabel.displayName = "FormLabel";

const formDescriptionVariants = cva("text-sm text-secondary-500", {
  variants: {
    variant: {
      default: "",
      error: "text-red-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface FormDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof formDescriptionVariants> {
  error?: string;
}

const FormDescription = forwardRef<HTMLParagraphElement, FormDescriptionProps>(
  ({ className, variant, error, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(formDescriptionVariants({ variant: error ? "error" : variant, className }))}
        {...props}
      />
    );
  }
);

FormDescription.displayName = "FormDescription";

export { Form, FormGroup, FormLabel, FormDescription }; 