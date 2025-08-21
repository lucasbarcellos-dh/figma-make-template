import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "./utils";

// Default icons for each variant (using Lucide icons as placeholders)
const defaultIcons = {
  branded: (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  info: (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  success: (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  warning: (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
      <path d="M12 9v4"/>
      <path d="m12 17.02.01 0"/>
    </svg>
  ),
  error: (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="m15 9-6 6"/>
      <path d="m9 9 6 6"/>
    </svg>
  ),
  neutral: (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 16v-4"/>
      <path d="m12 8.02.01 0"/>
    </svg>
  ),
};

const alertVariants = cva(
  "relative w-full rounded-lg px-4 py-3 text-sm flex gap-3 items-start min-h-12",
  {
    variants: {
      variant: {
        branded: "bg-feedback-branded-low",
        info: "bg-feedback-info-low",
        success: "bg-feedback-success-low",
        warning: "bg-feedback-warning-low",
        error: "bg-feedback-danger-low",
        neutral: "bg-feedback-neutral-low text-foreground",
      },
    },
    defaultVariants: {
      variant: "branded",
    },
  },
);

interface AlertProps extends React.ComponentProps<"div">, VariantProps<typeof alertVariants> {
  icon?: React.ReactNode | false;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  action?: React.ReactNode;
  closeButtonLabel?: string;
}

function Alert({ 
  className, 
  variant = "branded", 
  icon, 
  onClose, 
  action,
  closeButtonLabel = "Close",
  children,
  ...props 
}: AlertProps) {
  // Determine which icon to show
  const getIcon = () => {
    if (icon === false) return null;
    if (icon) return icon;
    return defaultIcons[variant || "branded"];
  };

  const iconElement = getIcon();

  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {iconElement && (
        <div className="flex-shrink-0 pt-0.5">
          {iconElement}
        </div>
      )}
      <div className="flex-1 space-y-1">
        <div className="flex flex-col gap-1">
          {children}
        </div>
        {action && (
          <div className="mt-2">
            {action}
          </div>
        )}
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label={closeButtonLabel}
          className="flex-shrink-0 rounded-md p-1 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-colors"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-base font-medium leading-5",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-sm opacity-90 leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
