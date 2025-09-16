import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import {
  cva,
  type VariantProps,
} from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "./utils";

const buttonVariants = cva(
  // Base styles matching Cape's design patterns
  "inline-flex items-center justify-center gap-4 whitespace-nowrap font-medium transition-all duration-200 disabled:pointer-events-none outline-none border-0 border-solid cursor-pointer overflow-hidden box-border text-decoration-none appearance-none font-large [&_svg]:flex-shrink-0 [&_svg]:h-full [&_svg]:w-auto [&_svg]:color-inherit",
  {
    variants: {
      variant: {
        // Primary: Filled buttons (main CTAs)
        primary: [
          "border-0",
          // Default branded status
          "bg-primary text-primary-foreground",
          "hover:bg-primary",
          "active:bg-primary",
          "disabled:bg-secondary disabled:text-muted-foreground",
          "focus-visible:shadow-primary",
        ],
        // Secondary: Outlined buttons
        secondary: [
          "border border-primary",
          "text-primary",
          "hover:bg-secondary hover:border-primary",
          "active:bg-secondary active:border-primary",
          "disabled:bg-secondary disabled:border-border disabled:text-muted-foreground",
          "focus-visible:shadow-primary",
        ],
        // Tertiary: Ghost/text buttons
        tertiary: [
          "border-0",
          "text-primary",
          "hover:bg-secondary",
          "active:bg-secondary",
          "disabled:bg-secondary disabled:text-muted-foreground",
          "focus-visible:shadow-primary",
        ],
      },
      status: {
        branded: "", // Default styling already applied above
        error: {
          primary: [
            "bg-destructive text-primary-foreground",
            "hover:bg-destructive",
            "active:bg-destructive",
          ],
          secondary: [
            "border-destructive text-destructive",
            "hover:border-destructive",
            "active:border-destructive",
            "disabled:border-border",
          ],
          tertiary: ["text-destructive"],
        },
        success: {
          primary: [
            "bg-success text-primary-foreground",
            "hover:bg-success",
            "active:bg-success",
          ],
          secondary: [
            "border-success text-success",
            "hover:border-success",
            "active:border-success",
            "disabled:border-border",
          ],
          tertiary: ["text-success"],
        },
      },
      size: {
        xsmall: [
          "h-[24px]",
          "px-[8px] py-[8px]",
          "rounded-[4px]",
          "font-medium text-sm",
          "gap-[2px]",
        ],
        small: [
          "h-[32px]",
          "px-[8px] py-[8px]",
          "rounded-[8px]",
        ],
        medium: [
          "h-[40px]",
          "px-[16px] py-[16px]",
          "rounded-[8px]",
        ],
        large: [
          "h-[48px]",
          "px-[16px] py-[16px]",
          "rounded-[8px]",
          "font-medium text-base",
          "gap-[8px]",
        ],
      },
    },
    compoundVariants: [
      // Error status variants
      {
        variant: "primary",
        status: "error",
        className: [
          "bg-destructive text-primary-foreground",
          "hover:bg-destructive",
          "active:bg-destructive",
        ],
      },
      {
        variant: "secondary",
        status: "error",
        className: [
          "border-destructive text-destructive",
          "hover:border-destructive",
          "active:border-destructive",
          "disabled:border-border",
        ],
      },
      {
        variant: "tertiary",
        status: "error",
        className: "text-destructive",
      },
      // Success status variants
      {
        variant: "primary",
        status: "success",
        className: [
          "bg-success text-primary-foreground",
          "hover:bg-success",
          "active:bg-success",
        ],
      },
      {
        variant: "secondary",
        status: "success",
        className: [
          "border-success text-success",
          "disabled:border-border",
        ],
      },
      {
        variant: "tertiary",
        status: "success",
        className: "text-success",
      },
    ],
    defaultVariants: {
      variant: "primary",
      status: "branded",
      size: "medium",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      status,
      size,
      asChild = false,
      startIcon,
      endIcon,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    // Disable button when loading
    const isDisabled = disabled || loading;

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, status, size, className }),
        )}
        ref={ref}
        disabled={isDisabled}
        data-loading={loading}
        {...props}
      >
        {loading && <Loader2 className="animate-spin size-4" />}
        {startIcon && !loading && (
          <span className="inline-flex items-center justify-center">
            {startIcon}
          </span>
        )}
        {children && (
          <span className={cn(loading && "opacity-0")}>
            {children}
          </span>
        )}
        {endIcon && !loading && (
          <span className="inline-flex items-center justify-center">
            {endIcon}
          </span>
        )}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };