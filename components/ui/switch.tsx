"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "./utils";

export interface SwitchProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  /**
   * The size of the switch
   * @defaultValue "medium"
   */
  size?: 'medium' | 'large';
}

function Switch({
  className,
  size = "medium",
  disabled,
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      data-disabled={disabled}
      disabled={disabled}
      className={cn(
        // Base styles
        "peer inline-flex shrink-0 items-center cursor-pointer transition-all duration-200",
        "outline-none border border-solid rounded-full",
        // Size variants - medium by default
        "h-5 w-8",
        "p-1",
        // Default colors and states
        "border-border",
        "bg-transparent",
        // Checked state
        "data-[state=checked]:bg-primary",
        "data-[state=checked]:border-primary",
        // Hover states - maintain borders
        "data-[state=unchecked]:hover:bg-transparent",
        "data-[state=unchecked]:hover:border-border",
        "data-[state=checked]:hover:bg-primary/90",
        "data-[state=checked]:hover:border-primary/90",
        // Focus state
        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        // Disabled state
        "disabled:cursor-default disabled:pointer-events-none",
        "disabled:bg-transparent",
        "disabled:border-border",
        "data-[state=checked]:disabled:bg-transparent",
        "data-[state=checked]:disabled:border-border",
        // Large size variant
        size === 'large' && [
          "h-6 w-10",
          "p-1"
        ],
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block rounded-full", // Make it perfectly circular
          "ring-0 transition-transform duration-200",
          // Size - medium by default
          "w-3 h-3",
          // Colors
          "bg-gray-400",
          "data-[state=checked]:bg-background",
          // Transform states - fixed positioning
          "data-[state=checked]:translate-x-[12px]", // Medium: move exactly 12px (width of thumb)
          "data-[state=unchecked]:translate-x-0",
          // Disabled colors
          "data-[disabled]:bg-border",
          "data-[state=checked]:data-[disabled]:bg-primary",
          // Large size variant
          size === 'large' && [
            "w-4 h-4",
            "data-[state=checked]:translate-x-[16px]" // Large: move exactly 16px (width of thumb)
          ]
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
