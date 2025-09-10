import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const inputVariants = cva(
  "flex w-full min-w-0 rounded-lg border text-foreground transition-all outline-none placeholder:text-muted-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        xsmall: "h-8 px-3 text-xs",
        small: "h-9 px-3 text-sm",
        medium: "h-10 px-3 text-sm",
        large: "h-12 px-4 text-base",
      },
      variant: {
        default: "border-border focus:border-ring focus:ring-2 focus:ring-ring/20",
        error: "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20",
        success: "border-success focus:border-success focus:ring-2 focus:ring-success/20",
      },
    },
    defaultVariants: {
      size: "medium",
      variant: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof inputVariants> {
  validationState?: "error" | "success";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, variant, validationState, ...props }, ref) => {
    // Determine variant based on validation state
    const currentVariant = validationState || variant || "default";

    return (
      <input
        type={type}
        className={cn(inputVariants({ size, variant: currentVariant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
