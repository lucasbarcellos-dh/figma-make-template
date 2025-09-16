import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "./utils";

const chipVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap font-medium transition-all border border-solid outline-none focus:outline-none disabled:pointer-events-none disabled:opacity-50 select-none box-border shrink-0",
  {
    variants: {
      size: {
        xsmall: "h-5 px-2 text-xs rounded-full gap-0.5 [&_svg]:size-3",
        small: "h-6 px-2.5 text-xs rounded-full gap-1 [&_svg]:size-3",
        medium: "h-8 px-3 text-sm rounded-full gap-1.5 [&_svg]:size-4",
        large: "h-10 px-4 text-m rounded-full gap-1.5 [&_svg]:size-4",
      },
      variant: {
        default: "bg-chip-background-default text-foreground hover:bg-chip-background-hover",
        selected: "text-primary border-primary hover:bg-chip-background-selected",
        disabled: "bg-muted/50 text-muted-foreground border-border cursor-not-allowed",
      },
      interactive: {
        true: "cursor-pointer active:scale-95",
        false: "",
      },
    },
    defaultVariants: {
      size: "medium",
      variant: "default",
      interactive: false,
    },
  }
);

export interface ChipProps
  extends Omit<React.ComponentProps<"div">, "children">,
    VariantProps<typeof chipVariants> {
  label?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  selected?: boolean;
  onSelectionChange?: (selected: boolean) => void;
  onDelete?: () => void;
  disabled?: boolean;
  closeButtonLabel?: string;
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ 
    className, 
    size = "medium",
    label,
    startIcon,
    endIcon,
    selected = false,
    onSelectionChange,
    onDelete,
    disabled = false,
    closeButtonLabel = "Remove",
    onClick,
    onKeyDown,
    ...props 
  }, ref) => {
    
    // Determine if chip is interactive (can be selected)
    const isInteractive = Boolean(onSelectionChange) && !disabled;
    const isDeletable = Boolean(onDelete) && !disabled;
    
    // Determine variant based on state
    const getVariant = () => {
      if (disabled) return "disabled";
      if (selected) return "selected";
      return "default";
    };

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return;
      
      if (isInteractive) {
        onSelectionChange?.(!selected);
      }
      
      onClick?.(event);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (disabled) return;
      
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        if (isInteractive) {
          onSelectionChange?.(!selected);
        }
      }
      
      onKeyDown?.(event);
    };

    const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onDelete?.();
    };

    const handleDeleteKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      event.stopPropagation();
    };

    return (
      <div
        ref={ref}
        className={cn(
          chipVariants({ 
            size, 
            variant: getVariant(), 
            interactive: isInteractive 
          }), 
          className
        )}
        role={isInteractive ? "button" : undefined}
        tabIndex={isInteractive ? 0 : undefined}
        aria-pressed={isInteractive ? selected : undefined}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {startIcon && (
          <span className="inline-flex items-center justify-center shrink-0">
            {startIcon}
          </span>
        )}
        
        {label && (
          <span className="truncate">
            {label}
          </span>
        )}
        
        {endIcon && !isDeletable && (
          <span className="inline-flex items-center justify-center shrink-0">
            {endIcon}
          </span>
        )}
        
        {isDeletable && (
          <button
            type="button"
            onClick={handleDeleteClick}
            onKeyDown={handleDeleteKeyDown}
            aria-label={closeButtonLabel}
            className={cn(
              "inline-flex items-center justify-center shrink-0 rounded-full transition-colors",
              "hover:bg-black/10 focus:bg-black/10 focus:outline-none",
              size === "xsmall" && "size-3 p-0.5",
              size === "small" && "size-3 p-0.5", 
              size === "medium" && "size-4 p-0.5",
              size === "large" && "size-4 p-0.5"
            )}
          >
            <X className={cn(
              size === "xsmall" && "size-2",
              size === "small" && "size-2",
              size === "medium" && "size-3", 
              size === "large" && "size-3"
            )} />
          </button>
        )}
      </div>
    );
  }
);

Chip.displayName = "Chip";

export { Chip, chipVariants }; 