import { useState } from "react";
import { Button } from "../components/ui/button";
import { Chip } from "../components/ui/chip";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { 
  Plus, 
  ArrowRight, 
  X, 
  Check, 
  Star, 
  Info, 
  Flag, 
  Ban
} from "lucide-react";

export function ActionPage() {
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const handleChipSelection = (chipId: string, selected: boolean) => {
    setSelectedChips(prev => 
      selected 
        ? [...prev, chipId]
        : prev.filter(id => id !== chipId)
    );
  };

  return (
    <div className="space-y-16">
      {/* Button Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Button</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Button Variants (Branded)</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="xsmall">XSmall</Button>
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Status Variants</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">Error Status</h4>
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary" status="error">Primary Error</Button>
                  <Button variant="secondary" status="error">Secondary Error</Button>
                  <Button variant="tertiary" status="error">Tertiary Error</Button>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">Success Status</h4>
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary" status="success">Primary Success</Button>
                  <Button variant="secondary" status="success">Secondary Success</Button>
                  <Button variant="tertiary" status="success">Tertiary Success</Button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Interactive States</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">Loading States</h4>
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary" loading>Loading Primary</Button>
                  <Button variant="secondary" loading>Loading Secondary</Button>
                  <Button variant="tertiary" loading>Loading Tertiary</Button>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2 text-muted-foreground">Disabled States</h4>
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary" disabled>Disabled Primary</Button>
                  <Button variant="secondary" disabled>Disabled Secondary</Button>
                  <Button variant="tertiary" disabled>Disabled Tertiary</Button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">With Icons</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant="primary" 
                  startIcon={<Plus className="size-4" />}
                >
                  Add Item
                </Button>
                
                <Button 
                  variant="secondary" 
                  endIcon={<ArrowRight className="size-4" />}
                >
                  Continue
                </Button>

                <Button 
                  variant="tertiary" 
                  status="error"
                  startIcon={<X className="size-4" />}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chip Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Chip</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Chip Sizes</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Extra Small</p>
                <div className="flex flex-wrap gap-1">
                  <Chip size="xsmall" label="Tag" />
                  <Chip size="xsmall" label="Selected" selected />
                  <Chip size="xsmall" label="With Icon" startIcon={<Check className="size-3" />} />
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Small</p>
                <div className="flex flex-wrap gap-1">
                  <Chip size="small" label="Tag" />
                  <Chip size="small" label="Selected" selected />
                  <Chip size="small" label="Deletable" onDelete={() => console.log('Deleted')} />
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Medium (Default)</p>
                <div className="flex flex-wrap gap-2">
                  <Chip size="medium" label="Tag" />
                  <Chip size="medium" label="Selected" selected />
                  <Chip size="medium" label="Interactive" onSelectionChange={() => {}} />
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Large</p>
                <div className="flex flex-wrap gap-2">
                  <Chip size="large" label="Large Tag" />
                  <Chip size="large" label="Selected" selected />
                  <Chip size="large" label="Complete" startIcon={<Check className="size-4" />} onDelete={() => console.log('Deleted')} />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Chip States</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Default States</p>
                <div className="flex flex-wrap gap-2">
                  <Chip label="Default" />
                  <Chip label="With Icon" startIcon={<Star className="size-4" />} />
                  <Chip label="Read Only" endIcon={<Info className="size-4" />} />
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Selected States</p>
                <div className="flex flex-wrap gap-2">
                  <Chip label="Selected" selected />
                  <Chip label="Selected with Icon" selected startIcon={<Check className="size-4" />} />
                  <Chip label="Important" selected endIcon={<Flag className="size-4" />} />
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Interactive & Deletable</p>
                <div className="flex flex-wrap gap-2">
                  <Chip label="Clickable" onSelectionChange={(selected) => console.log('Selected:', selected)} />
                  <Chip label="Deletable" onDelete={() => console.log('Deleted')} />
                  <Chip label="Both" 
                    onSelectionChange={(selected) => console.log('Selected:', selected)}
                    onDelete={() => console.log('Deleted')} />
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Disabled State</p>
                <div className="flex flex-wrap gap-2">
                  <Chip label="Disabled" disabled />
                  <Chip label="Disabled Selected" disabled selected />
                  <Chip label="Disabled with Icon" disabled startIcon={<Ban className="size-4" />} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Interactive Filter Example</h3>
          <div className="flex flex-wrap gap-2">
            {["Technology", "Design", "Frontend", "React", "TypeScript", "JavaScript", "CSS", "HTML", "Node.js", "Python"].map((topic) => (
              <Chip
                key={topic}
                label={topic}
                selected={selectedChips.includes(topic)}
                onSelectionChange={(selected) => handleChipSelection(topic, selected)}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Selected: {selectedChips.length > 0 ? selectedChips.join(", ") : "None"}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Tag Categories Example</h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-medium mb-2">Skills</h4>
              <div className="flex flex-wrap gap-1">
                {["React", "TypeScript", "Design Systems", "UI/UX"].map((skill) => (
                  <Chip key={skill} size="small" label={skill} startIcon={<Check className="size-3" />} />
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Interests</h4>
              <div className="flex flex-wrap gap-1">
                {["Photography", "Travel", "Music", "Reading", "Cooking"].map((interest) => (
                  <Chip key={interest} size="small" label={interest} />
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Project Tags (Deletable)</h4>
              <div className="flex flex-wrap gap-2">
                {["Important", "In Progress", "Review Needed", "Approved"].map((tag) => (
                  <Chip 
                    key={tag} 
                    label={tag} 
                    onDelete={() => console.log(`Deleted: ${tag}`)}
                    closeButtonLabel={`Remove ${tag}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Icon Button Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Icon Button</h2>
        <p className="text-sm text-muted-foreground">Icon-only buttons for actions where space is limited or the icon is self-explanatory.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Icon Button Variants</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="primary" size="medium">
                <Plus className="size-4" />
              </Button>
              <Button variant="secondary" size="medium">
                <Star className="size-4" />
              </Button>
              <Button variant="tertiary" size="medium">
                <Info className="size-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Icon Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="primary" size="xsmall">
                <Check className="size-3" />
              </Button>
              <Button variant="primary" size="small">
                <Check className="size-4" />
              </Button>
              <Button variant="primary" size="medium">
                <Check className="size-4" />
              </Button>
              <Button variant="primary" size="large">
                <Check className="size-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Icon Button States</h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-medium mb-2 text-muted-foreground">Interactive States</h4>
              <div className="flex flex-wrap gap-2">
                <Button variant="primary" loading>
                  <Plus className="size-4" />
                </Button>
                <Button variant="secondary" disabled>
                  <Star className="size-4" />
                </Button>
                <Button variant="tertiary" status="error">
                  <X className="size-4" />
                </Button>
                <Button variant="primary" status="success">
                  <Check className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avatar Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Avatar</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Avatar sizes</h3>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <Avatar size="small">
                  <AvatarFallback size="small">JS</AvatarFallback>
                </Avatar>
                <p className="text-xs mt-1">Small</p>
              </div>
              <div className="text-center">
                <Avatar size="medium">
                  <AvatarFallback size="medium">AM</AvatarFallback>
                </Avatar>
                <p className="text-xs mt-1">Medium</p>
              </div>
              <div className="text-center">
                <Avatar size="large">
                  <AvatarFallback size="large">KS</AvatarFallback>
                </Avatar>
                <p className="text-xs mt-1">Large</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Avatar variants</h3>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <Avatar variant="filled">
                  <AvatarFallback size="medium">F</AvatarFallback>
                </Avatar>
                <p className="text-xs mt-1">Filled</p>
              </div>
              <div className="text-center">
                <Avatar variant="outlined">
                  <AvatarFallback size="medium">O</AvatarFallback>
                </Avatar>
                <p className="text-xs mt-1">Outlined</p>
              </div>
              <div className="text-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                  <AvatarFallback size="medium">SC</AvatarFallback>
                </Avatar>
                <p className="text-xs mt-1">With Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}