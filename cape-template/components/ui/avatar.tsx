"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { User } from "lucide-react";

import { cn } from "./utils";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        small: "size-8",
        medium: "size-10", 
        large: "size-12",
      },
      variant: {
        filled: "",
        outlined: "ring-2 ring-border",
      },
    },
    defaultVariants: {
      size: "medium",
      variant: "filled",
    },
  }
);

const avatarImageVariants = cva("aspect-square size-full object-cover");

const avatarFallbackVariants = cva(
  "flex size-full items-center justify-center bg-muted font-medium text-muted-foreground",
  {
    variants: {
      size: {
        small: "text-xs",
        medium: "text-sm",
        large: "text-base",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

export interface AvatarProps
  extends Omit<React.ComponentProps<typeof AvatarPrimitive.Root>, "size">,
    VariantProps<typeof avatarVariants> {
  /**
   * Alt text for the avatar image
   */
  alt?: string;
  /**
   * Initials to display as fallback (max 2 characters)
   */
  initials?: string;
}

function Avatar({ 
  className, 
  size, 
  variant, 
  alt,
  initials,
  ...props 
}: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      className={cn(avatarVariants({ size, variant }), className)}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  alt,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image> & { alt?: string }) {
  return (
    <AvatarPrimitive.Image
      className={cn(avatarImageVariants(), className)}
      alt={alt}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  size,
  children,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback> & 
  Pick<VariantProps<typeof avatarFallbackVariants>, "size">) {
  
  return (
    <AvatarPrimitive.Fallback
      className={cn(avatarFallbackVariants({ size }), className)}
      {...props}
    >
      {children || <User className="size-1/2" />}
    </AvatarPrimitive.Fallback>
  );
}

export { Avatar, AvatarImage, AvatarFallback, avatarVariants };
