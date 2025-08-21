"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "./utils";

export interface TooltipContentProps extends React.ComponentProps<typeof TooltipPrimitive.Content> {
  size?: 'small' | 'medium';
  variant?: 'default' | 'error';
}

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 12,
  size = "medium",
  variant = "default",
  children,
  ...props
}: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        data-size={size}
        data-variant={variant}
        sideOffset={sideOffset}
        className={cn(
          // Base styles
          "z-50 w-fit origin-top",
          "overflow-hidden flex",
          // Animation and transitions
          "animate-in fade-in-0 zoom-in-95 duration-200",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          // Default styling (medium size, default variant)
          "rounded-lg",
          "shadow-lg",
          "bg-black",
          "text-white",
          "font-medium",
          "px-2",
          "py-2",
          "gap-1",
          "min-h-4 min-w-8 max-w-64",
          // Size variants
          size === 'small' && [
            "rounded-md",
            "shadow-md",
            "font-medium",
            "px-2",
            "py-2"
          ],
          // Error variant
          variant === 'error' && [
            "bg-destructive",
            "text-destructive-foreground"
          ],
          className,
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow 
          className={cn(
            // "fill-background z-50 w-3 h-1.5",
            "translate-y-[calc(-50%_-_2px)] rotate-45 rounded-sm",
            variant === 'error' && "fill-destructive"
          )} 
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
