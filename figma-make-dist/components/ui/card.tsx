import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const cardVariants = cva(
  "text-card-foreground flex flex-col transition-all",
  {
    variants: {
      variant: {
        outlined: "bg-card border border-border rounded-xl",
        filled: "bg-muted rounded-xl",
        elevated: "bg-card rounded-xl shadow-lg border-0",
      },
      size: {
        default: "gap-1",
        compact: "gap-4",
      },
      interactive: {
        true: "cursor-pointer hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        false: "",
      },
      selected: {
        true: "ring-2 ring-primary border-primary",
        false: "",
      },
    },
    defaultVariants: {
      variant: "outlined",
      size: "default",
      interactive: false,
      selected: false,
    },
  }
);

export interface CardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {
  selected?: boolean;
  onSelectionChange?: (selected: boolean) => void;
}

function Card({ 
  className, 
  variant, 
  size, 
  selected = false,
  onSelectionChange,
  onClick,
  ...props 
}: CardProps) {
  const isInteractive = Boolean(onSelectionChange);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isInteractive) {
      onSelectionChange?.(!selected);
    }
    onClick?.(event);
  };

  return (
    <div
      className={cn(
        cardVariants({ 
          variant, 
          size, 
          interactive: isInteractive,
          selected: isInteractive && selected 
        }), 
        className
      )}
      onClick={handleClick}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-pressed={isInteractive ? selected : undefined}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <h4
      className={cn("font-semibold leading-none", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("px-6 [&:last-child]:pb-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  cardVariants,
};
