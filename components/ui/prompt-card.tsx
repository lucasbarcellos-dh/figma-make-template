import * as React from "react"
import { cn } from "./utils"
import { Button } from "./button"
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "./card"

interface PromptCardProps {
  variant?: "vertical" | "horizontal"
  title?: string
  description?: string
  primaryAction?: {
    label: string
    onClick?: () => void
  }
  secondaryAction?: {
    label: string
    onClick?: () => void
  }
  icon?: React.ReactNode
  className?: string
}

function IconPlaceholder({ icon }: { icon?: React.ReactNode }) {
  if (icon) {
    return (
      <div className="flex items-center justify-center size-8 shrink-0">
        {icon}
      </div>
    )
  }

  // Simple placeholder icon using CSS border styling
  return (
    <div className="flex items-center justify-center size-8 shrink-0 rounded border-2 border-dashed border-muted-foreground/50 bg-muted/50">
      <div className="size-4 rounded border border-muted-foreground/30" />
    </div>
  )
}

export function PromptCard({
  variant = "vertical",
  title = "Card title",
  description = "Raise your restaurant's position on the list for more orders, better visibility, and greater awareness.",
  primaryAction,
  secondaryAction,
  icon,
  className
}: PromptCardProps) {
  const isVertical = variant === "vertical"
  
  if (isVertical) {
    return (
      <Card className={cn("p-5", className)}>
        <CardHeader className="p-0 pb-3">
          <div className="flex flex-col gap-3">
            <IconPlaceholder icon={icon} />
            <div className="space-y-2">
              <CardTitle className="text-xl leading-tight">{title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        {(primaryAction || secondaryAction) && (
          <CardFooter className="p-0 flex-wrap gap-2">
            {primaryAction && (
              <Button 
                variant="primary"
                size="medium"
                onClick={primaryAction.onClick}
              >
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button 
                variant="tertiary"
                size="medium"
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.label}
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    )
  }

  // Horizontal layout
  return (
    <Card className={cn("p-5", className)}>
      <div className="flex gap-4">
        <IconPlaceholder icon={icon} />
        
        <div className="flex-1 min-w-0">
          <CardHeader className="p-0 pb-3">
            <div className="space-y-2">
              <CardTitle className="text-xl leading-tight">{title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {description}
              </CardDescription>
            </div>
          </CardHeader>
          
          {(primaryAction || secondaryAction) && (
            <CardFooter className="p-0 flex-wrap gap-2">
              {primaryAction && (
                <Button 
                  variant="primary"
                  size="medium"
                  onClick={primaryAction.onClick}
                >
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button 
                  variant="tertiary"
                  size="medium"
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.label}
                </Button>
              )}
            </CardFooter>
          )}
        </div>
      </div>
    </Card>
  )
}