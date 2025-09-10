import * as React from "react"
import { cn } from "./utils"
import { Card, CardContent } from "./card"

interface TileCardProps {
  variant?: 'default' | 'minimal'
  title?: string
  icon?: React.ReactNode
  className?: string
}

function IconPlaceholder({ icon }: { icon?: React.ReactNode }) {
  if (icon) {
    return (
      <div className="flex items-center justify-center size-8">
        {icon}
      </div>
    )
  }

  // Simple placeholder icon using CSS border styling
  return (
    <div className="flex items-center justify-center size-8 rounded border-2 border-dashed border-muted-foreground/50 bg-muted/50">
      <div className="size-4 rounded border border-muted-foreground/30" />
    </div>
  )
}

export default function TileCard({ 
  variant = 'default', 
  title = 'Card title', 
  icon,
  className 
}: TileCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="flex flex-col items-start justify-between p-5 h-full">
        {/* Icon */}
        {variant === 'default' ? (
          <div className="flex items-center justify-center size-14 rounded-full bg-secondary shrink-0">
            <IconPlaceholder icon={icon} />
          </div>
        ) : (
          <div className="shrink-0">
            <IconPlaceholder icon={icon} />
          </div>
        )}
        
        {/* Title */}
        <div className="w-full mt-auto pt-4">
          <h3 className="font-semibold text-base leading-relaxed text-foreground">
            {title}
          </h3>
        </div>
      </CardContent>
    </Card>
  )
}