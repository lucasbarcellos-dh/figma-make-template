import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X, CheckCircle, Info, AlertTriangle, XCircle, Star } from "lucide-react";

import { cn } from "./utils";

// Default icons for each variant using Lucide icons
const defaultIcons = {
  branded: <Star className="size-4" />,
  info: <Info className="size-4" />,
  success: <CheckCircle className="size-4" />,
  warning: <AlertTriangle className="size-4" />,
  error: <XCircle className="size-4" />,
  neutral: <Info className="size-4" />,
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
