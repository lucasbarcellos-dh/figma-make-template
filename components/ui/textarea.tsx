import * as React from "react";

import { cn } from "./utils";

export interface TextareaProps extends React.ComponentProps<"textarea"> {
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  validationState?: 'error' | 'success';
}

function Textarea({ 
  className, 
  size = "medium",
  validationState,
  disabled,
  ...props 
}: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      data-size={size}
      data-validation-state={validationState}
      data-disabled={disabled}
      disabled={disabled}
      className={cn(
        "w-full box-border flex resize-both outline-none transition-all duration-200",
        "px-3 py-3",
        "min-h-16",
        "border border-solid border-border",
        "rounded-lg",
        "font-normal",
        "placeholder:text-muted-foreground",
        "hover:border-border",
        "disabled:border-border",
        "disabled:bg-secondary",
        "disabled:text-muted-foreground",
        "disabled:cursor-not-allowed",
        size === 'xsmall' && [
          "px-3 py-1",
          "rounded-lg",
          "font-normal min-h-12"
        ],
        size === 'small' && [
          "px-3 py-3",
          "font-normal min-h-14"
        ],
        size === 'large' && [
          "px-3 py-3",
          "font-normal min-h-20"
        ],
        // Error state
        validationState === 'error' && [
          "border-destructive",
          "bg-feedback-danger-low",
          "hover:border-destructive",
          "hover:bg-feedback-danger-low",
        ],
        // Success state
        validationState === 'success' && [
          "border-success",
          "bg-feedback-success-low",
          "hover:border-success",
          "hover:bg-feedback-success-low",
        ],
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
