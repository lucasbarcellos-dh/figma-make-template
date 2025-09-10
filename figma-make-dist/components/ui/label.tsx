"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const labelVariants = cva(
  "font-medium pb-4, leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      size: {
        small: "text-xs",
        medium: "text-sm",
        large: "text-base",
      },
      variant: {
        default: "text-foreground",
        required: "text-foreground after:content-['*'] after:ml-1 after:text-destructive",
        disabled: "text-muted-foreground cursor-not-allowed",
        error: "text-destructive",
      },
    },
    defaultVariants: {
      size: "medium",
      variant: "default",
    },
  }
);

export interface LabelProps
  extends Omit<React.ComponentProps<typeof LabelPrimitive.Root>, "size">,
    VariantProps<typeof labelVariants> {
  required?: boolean;
  error?: boolean;
  disabled?: boolean;
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, size, variant, required, error, disabled, ...props }, ref) => {
  // Determine variant based on state
  const currentVariant = React.useMemo(() => {
    if (disabled) return "disabled";
    if (error) return "error";
    if (required) return "required";
    return variant || "default";
  }, [disabled, error, required, variant]);

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants({ size, variant: currentVariant }), className)}
      {...props}
    />
  );
});

Label.displayName = LabelPrimitive.Root.displayName;

export { Label, labelVariants };
