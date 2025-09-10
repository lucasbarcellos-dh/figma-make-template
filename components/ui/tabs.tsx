"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const tabsVariants = cva(
  "flex flex-col",
  {
    variants: {
      size: {
        small: "[&_[data-slot=tabs-list]]:gap-2 [&_[data-slot=tabs-trigger]]:text-sm [&_[data-slot=tabs-trigger]]:px-2 [&_[data-slot=tabs-trigger]]:py-2",
        medium: "[&_[data-slot=tabs-list]]:gap-2 [&_[data-slot=tabs-trigger]]:text-base [&_[data-slot=tabs-trigger]]:px-2 [&_[data-slot=tabs-trigger]]:py-2",
        large: "[&_[data-slot=tabs-list]]:gap-3 [&_[data-slot=tabs-trigger]]:text-lg [&_[data-slot=tabs-trigger]]:px-2 [&_[data-slot=tabs-trigger]]:py-2"
      },
      divider: {
        true: "[&_[data-slot=tabs-list]]:border-b [&_[data-slot=tabs-list]]:--border",
        false: ""
      }
    },
    defaultVariants: {
      size: "medium",
      divider: true
    }
  }
);

export interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root>, VariantProps<typeof tabsVariants> {}

function Tabs({ className, size, divider, ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-size={size}
      data-divider={divider ? "true" : "false"}
      className={cn(tabsVariants({ size, divider }), className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "relative flex max-w-full mb-4 pb-1",
        className,
      )}
      {...props}
    />
  );
}

export interface TabsTriggerProps extends React.ComponentProps<typeof TabsPrimitive.Trigger> {
  disabled?: boolean;
}

function TabsTrigger({
  className,
  disabled,
  ...props
}: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      disabled={disabled}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 whitespace-nowrap",
        "rounded-lg font-medium transition-all duration-200",
        "text-muted-foreground hover:bg-primary/5 hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        "data-[state=active]:text-primary data-[state=active]:bg-transparent",
        "disabled:pointer-events-none disabled:text-muted-foreground",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        // Bottom border indicator for active state
        "data-[state=active]:after:absolute data-[state=active]:after:bottom-[-5px] data-[state=active]:after:left-0 data-[state=active]:after:right-0",
        "data-[state=active]:after:h-0.5 data-[state=active]:after:bg-primary data-[state=active]:after:rounded-full",
        "data-[state=active]:after:transition-all data-[state=active]:after:duration-200",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "outline-none",
        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
