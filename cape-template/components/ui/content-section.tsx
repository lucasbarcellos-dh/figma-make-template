import * as React from "react";
import { cn } from "./utils";

interface ContentSectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Optional title for the content section
   */
  title?: string;
  /**
   * Optional description text below the title
   */
  description?: string;
  /**
   * Content of the section
   */
  children: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Disable the default border styling (useful for cards and other components with their own borders)
   */
  noBorder?: boolean;
}

/**
 * ContentSection provides a standardized container for organizing first-level page content.
 * Use this for top-level page organization - content inside sections doesn't need additional ContentSection wrapping.
 * 
 * Components with internal padding (Tables, Lists, etc.) should be rendered directly without additional spacing containers.
 */
export function ContentSection({
  title,
  description,
  children,
  className,
  noBorder = false,
  ...props
}: ContentSectionProps) {
  return (
    <section
      className={cn("space-y-3", className)}
      {...props}
    >
      {(title || description) && (
        <div className="space-y-1">
          {title && (
            <h3 className="text-xl font-semibold text-foreground">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      )}
      <div className={cn(
        noBorder ? "space-y-4" : "rounded-xl border border-border bg-card"
      )}>
        {children}
      </div>
    </section>
  );
}

ContentSection.displayName = "ContentSection";