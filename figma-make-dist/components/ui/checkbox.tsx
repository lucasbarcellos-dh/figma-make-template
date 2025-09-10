"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const checkboxVariants = cva(
  "peer shrink-0 rounded border border-border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground data-[state=indeterminate]:border-primary",
  {
    variants: {
      size: {
        // Cape small
        small: "size-4 rounded-sm",
        
        // Cape medium - default
        medium: "size-5 rounded",
        
        // Cape large
        large: "size-6 rounded-md",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

const checkboxIconVariants = cva(
  "flex items-center justify-center text-current",
  {
    variants: {
      size: {
        small: "[&_svg]:size-3",
        medium: "[&_svg]:size-3.5", 
        large: "[&_svg]:size-4",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

export interface CheckboxProps
  extends Omit<React.ComponentProps<typeof CheckboxPrimitive.Root>, "size">,
    VariantProps<typeof checkboxVariants> {
  /**
   * Label text to display next to the checkbox
   */
  label?: React.ReactNode;
  /**
   * Whether the checkbox is in an indeterminate state
   */
  indeterminate?: boolean;
  /**
   * Whether the checkbox has an error state
   */
  error?: boolean;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size, label, indeterminate, error, id, ...props }, ref) => {
  const checkboxId = id || React.useId();

  const CheckboxComponent = (
    <CheckboxPrimitive.Root
      ref={ref}
      id={checkboxId}
      className={cn(
        checkboxVariants({ size }),
        error && "border-destructive focus-visible:ring-destructive/20",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className={cn(checkboxIconVariants({ size }))}>
        {indeterminate ? (
          <Minus />
        ) : (
          <Check />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  if (label) {
    return (
      <div className="flex items-center space-x-2">
        {CheckboxComponent}
        <label
          htmlFor={checkboxId}
          className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer",
            error && "text-destructive"
          )}
        >
          {label}
        </label>
      </div>
    );
  }

  return CheckboxComponent;
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, checkboxVariants };
