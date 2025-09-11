import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../components/ui/tooltip";
import { Button } from "../components/ui/button";
import { Info } from "lucide-react";

export function OverlayPage() {
  return (
    <TooltipProvider>
      <div className="space-y-16">
        {/* Tooltip Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-medium">Tooltip</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Tooltip Sizes</h3>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="secondary" size="small">Small Tooltip</Button>
                    </TooltipTrigger>
                    <TooltipContent size="small">
                      This is a small tooltip with less padding and smaller text.
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="secondary">Medium Tooltip</Button>
                    </TooltipTrigger>
                    <TooltipContent size="medium">
                      This is a medium tooltip with standard sizing and padding.
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Tooltip Variants</h3>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="secondary">Default</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="default">
                      Default tooltip variant with standard styling.
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="primary" status="error">Error</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="error">
                      Error tooltip variant for critical information.
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Placement Examples</h3>
            <div className="flex flex-wrap gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  This tooltip appears on top
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary">Or me</Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  This one appears on the right
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary">Info Button</Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <div className="space-y-1">
                    <p className="font-medium">Component Information</p>
                    <p className="text-xs">Tooltips can contain multiple lines and formatted content.</p>
                  </div>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary">Left Side</Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  This tooltip appears on the left
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Icon with Tooltip</h3>
            <div className="flex items-center gap-2">
              <span>Cape Design System</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-muted text-muted-foreground hover:bg-accent">
                    <Info className="w-3 h-3" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  A comprehensive design system for building consistent user interfaces.
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Complex Content Tooltip</h3>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="primary">User Guide</Button>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <div className="space-y-2">
                    <p className="font-semibold">Getting Started</p>
                    <ul className="text-xs space-y-1">
                      <li>• Explore component documentation</li>
                      <li>• Review design guidelines</li>
                      <li>• Check implementation examples</li>
                    </ul>
                    <p className="text-xs text-muted-foreground">Click to open full guide</p>
                  </div>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary">Feature Info</Button>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <p className="font-medium text-xs">Available</p>
                    </div>
                    <p className="text-xs">This feature is fully implemented and ready for production use.</p>
                    <div className="pt-1 border-t border-border">
                      <p className="text-xs text-muted-foreground">Version 2.1.0+</p>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Interactive Elements with Tooltips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Form Fields</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Username</label>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        Must be 3-20 characters, letters and numbers only
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Password</label>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="space-y-1">
                          <p className="font-medium">Password Requirements:</p>
                          <ul className="text-xs space-y-0.5">
                            <li>• At least 8 characters</li>
                            <li>• One uppercase letter</li>
                            <li>• One number</li>
                            <li>• One special character</li>
                          </ul>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium">Action Buttons</h4>
                <div className="flex gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="primary" size="small">Save</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      Save changes to your profile (Ctrl+S)
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="secondary" size="small">Cancel</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      Discard changes and return to previous state
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="tertiary" size="small" status="error">Delete</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="error">
                      Permanently delete this item (cannot be undone)
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Delayed and Custom Behavior</h3>
            <p className="text-sm text-muted-foreground">
              Tooltips can be configured with different delay settings and behaviors for various use cases.
            </p>
            <div className="flex gap-4">
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Button variant="secondary">Instant</Button>
                </TooltipTrigger>
                <TooltipContent>
                  Shows immediately on hover
                </TooltipContent>
              </Tooltip>
              
              <Tooltip delayDuration={500}>
                <TooltipTrigger asChild>
                  <Button variant="secondary">Normal</Button>
                </TooltipTrigger>
                <TooltipContent>
                  Shows after 500ms delay
                </TooltipContent>
              </Tooltip>
              
              <Tooltip delayDuration={1000}>
                <TooltipTrigger asChild>
                  <Button variant="secondary">Delayed</Button>
                </TooltipTrigger>
                <TooltipContent>
                  Shows after 1000ms delay
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </section>
      </div>
    </TooltipProvider>
  );
}