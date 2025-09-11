import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../components/ui/tooltip";
import { Button } from "../components/ui/button";
import { Info } from "lucide-react";

export function OverlayPage() {
  return (
    <TooltipProvider>
      <div className="space-y-12">
        {/* Tooltip Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-medium">Tooltip</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Basic Usage</h3>
              <div className="flex gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="secondary">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    This is a tooltip
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="primary" status="error">Error</Button>
                  </TooltipTrigger>
                  <TooltipContent variant="error">
                    Error tooltip variant
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">With Icon</h3>
              <div className="flex items-center gap-2">
                <span>Help text</span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-muted text-muted-foreground hover:bg-accent">
                      <Info className="w-3 h-3" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Additional information
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </section>
      </div>
    </TooltipProvider>
  );
}