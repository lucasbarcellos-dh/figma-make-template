import { cn } from "./utils";

export interface SkeletonProps extends React.ComponentProps<"div"> {
  animated?: boolean;
  variant?: 'text' | 'rectangular' | 'circular' | 'rounded';
}

function Skeleton({ 
  className, 
  animated = true,
  variant = "rounded",
  ...props 
}: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      data-variant={variant}
      data-animated={animated}
      className={cn(
        "block relative overflow-hidden",
        "bg-feedback-neutral-low",
        "w-[200px] h-auto",
        "rounded-md",
        "aspect-[1/0.25]",
        variant === 'text' && [
          "rounded-md",
          "aspect-[1/0.05]"
        ],
        variant === 'rectangular' && [
          "rounded-md",
          "aspect-[1/0.5]"
        ],
        variant === 'circular' && [
          "rounded-full",
          "aspect-square"
        ],
        // Animation - using simple pulse as fallback for better compatibility
        animated && "animate-pulse",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
