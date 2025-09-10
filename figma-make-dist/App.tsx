import { useState, useRef } from "react";
import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Button } from "./components/ui/button";
import { Chip } from "./components/ui/chip";
import { Input } from "./components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./components/ui/card";
import { Checkbox } from "./components/ui/checkbox";
import { Label } from "./components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./components/ui/accordion";
import { Textarea } from "./components/ui/textarea";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./components/ui/tooltip";
import { Switch } from "./components/ui/switch";
import { Skeleton } from "./components/ui/skeleton";
import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from "./components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { PromptCard } from "./components/ui/prompt-card";
import TileCard from "./components/ui/tile-card";
import { 
  Plus, 
  ArrowRight, 
  Users, 
  BarChart3, 
  Check, 
  Info, 
  AlertTriangle, 
  Heart, 
  CheckCircle, 
  Download, 
  Moon, 
  Star, 
  Layout, 
  FolderOpen, 
  User, 
  FileBarChart,
  FileText, 
  HelpCircle, 
  MessageSquare, 
  RefreshCw, 
  Settings, 
  Monitor, 
  Shield, 
  Cloud, 
  Home,
  Menu,
  Bell,
  X,
  Flag,
  Ban,
  ArrowDown,
  Layers,
  Zap
} from "lucide-react";

function App() {
  // State for managing selected chips
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [filterChips, setFilterChips] = useState<string[]>(["featured", "new"]);
  
  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewsletterChecked, setIsNewsletterChecked] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  
  // State for new components
  const [accordionValues, setAccordionValues] = useState<string[]>([]);
  const [textareaValue, setTextareaValue] = useState("");
  const [switchChecked, setSwitchChecked] = useState(false);

  // Navigation state
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Refs for scrolling to sections
  const sectionRefs = {
    overview: useRef<HTMLDivElement>(null),
    button: useRef<HTMLDivElement>(null),
    alert: useRef<HTMLDivElement>(null),
    input: useRef<HTMLDivElement>(null),
    card: useRef<HTMLDivElement>(null),
    checkbox: useRef<HTMLDivElement>(null),
    label: useRef<HTMLDivElement>(null),
    avatar: useRef<HTMLDivElement>(null),
    chip: useRef<HTMLDivElement>(null),
    accordion: useRef<HTMLDivElement>(null),
    textarea: useRef<HTMLDivElement>(null),
    tooltip: useRef<HTMLDivElement>(null),
    switch: useRef<HTMLDivElement>(null),
    skeleton: useRef<HTMLDivElement>(null),
    table: useRef<HTMLDivElement>(null),
    tabs: useRef<HTMLDivElement>(null),
    promptcard: useRef<HTMLDivElement>(null),
    tilecard: useRef<HTMLDivElement>(null),
    form: useRef<HTMLDivElement>(null),
    status: useRef<HTMLDivElement>(null),
  };

  const navigationItems = [
    { id: "overview", label: "Overview" },
    { id: "button", label: "Button", status: "completed" },
    { id: "alert", label: "Alert", status: "completed" },
    { id: "input", label: "Input", status: "completed" },
    { id: "card", label: "Card", status: "completed" },
    { id: "checkbox", label: "Checkbox", status: "completed" },
    { id: "label", label: "Label", status: "completed" },
    { id: "avatar", label: "Avatar", status: "completed" },
    { id: "chip", label: "Chip", status: "completed" },
    { id: "accordion", label: "Accordion", status: "completed" },
    { id: "textarea", label: "Textarea", status: "completed" },
    { id: "tooltip", label: "Tooltip", status: "completed" },
    { id: "switch", label: "Switch", status: "completed" },
    { id: "skeleton", label: "Skeleton", status: "completed" },
    { id: "table", label: "Table", status: "completed" },
    { id: "tabs", label: "Tabs", status: "completed" },
    { id: "promptcard", label: "Prompt Card", status: "completed" },
    { id: "tilecard", label: "Tile Card", status: "completed" },
    { id: "form", label: "Form Example" },
    { id: "status", label: "Status" },
  ];

  const scrollToSection = (sectionId: string) => {
    const ref = sectionRefs[sectionId as keyof typeof sectionRefs];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setSidebarOpen(false); // Close mobile sidebar after navigation
    }
  };

  const handleChipSelection = (chipId: string, selected: boolean) => {
    setSelectedChips(prev => 
      selected 
        ? [...prev, chipId]
        : prev.filter(id => id !== chipId)
    );
  };

  const handleFilterToggle = (filterId: string, selected: boolean) => {
    setFilterChips(prev => 
      selected
        ? [...prev, filterId]
        : prev.filter(id => id !== filterId)
    );
  };

  const handleChipDelete = (chipId: string) => {
    console.log(`Deleted chip: ${chipId}`);
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background flex">
        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform transition-transform duration-200 ease-in-out
          lg:translate-x-0 lg:static lg:inset-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex flex-col h-full">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold">Components</h2>
            </div>
            
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2 text-left rounded-md transition-colors
                    ${activeSection === item.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-accent hover:text-accent-foreground'
                    }
                  `}
                >
                  <span className="flex-1">{item.label}</span>
                  {item.status === 'completed' && (
                    <span className="text-xs bg-success/20 text-success px-2 py-0.5 rounded-full">
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </nav>
            
            <div className="p-4 border-t">
              <p className="text-xs text-muted-foreground">
                17/17 Core components completed
              </p>
              <div className="w-full bg-secondary rounded-full h-2 mt-2">
                <div className="bg-success h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile backdrop */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 lg:ml-0">
          {/* Mobile header */}
          <header className="lg:hidden bg-card border-b p-4 flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-accent rounded-md"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold">Cape Design System</h1>
          </header>

          <div className="p-8 space-y-16 max-w-6xl mx-auto">
            {/* Overview Section */}
            <section ref={sectionRefs.overview} id="overview" className="space-y-4">
              <div>
                <h1 className="text-3xl font-semibold mb-2">Cape Design System Components</h1>
                <p className="text-muted-foreground">Updated components with Cape design patterns, variants, and styling.</p>
              </div>

            </section>

            {/* Button Section */}
            <section ref={sectionRefs.button} id="button" className="space-y-4">
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

            {/* Alert Section */}
            <section ref={sectionRefs.alert} id="alert" className="space-y-4">
              <h2 className="text-2xl font-medium">Alert</h2>
              
              <div className="space-y-4">
                <Alert variant="info">
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>This is an informational alert message.</AlertDescription>
                </Alert>
                
                <Alert variant="success">
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>Your action was completed successfully.</AlertDescription>
                </Alert>
                
                <Alert variant="warning">
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription>Please review your input before proceeding.</AlertDescription>
                </Alert>
                
                <Alert variant="error">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>Something went wrong. Please try again.</AlertDescription>
                </Alert>
              </div>
            </section>

            {/* Input Component Tests */}
            <section ref={sectionRefs.input} id="input" className="space-y-4">
              <h2 className="text-2xl font-medium">Input</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Input sizes</h3>
                  <div className="space-y-3">
                    <div>
                      <Label size="small">Extra Small Input</Label>
                      <Input size="xsmall" placeholder="Extra small input" />
                    </div>
                    <div>
                      <Label size="small">Small Input</Label>
                      <Input size="small" />
                    </div>
                    <div>
                      <Label>Medium Input (Default)</Label>
                      <Input size="medium" placeholder="Medium input" />
                    </div>
                    <div>
                      <Label size="large">Large Input</Label>
                      <Input size="large" placeholder="Large input" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Input States</h3>
                  <div className="space-y-3">
                    <div>
                      <Label>Default State</Label>
                      <Input placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label error>Error State</Label>
                      <Input validationState="error" placeholder="Invalid email" />
                    </div>
                    <div>
                      <Label>Success State</Label>
                      <Input validationState="success" placeholder="Valid email" />
                    </div>
                    <div>
                      <Label disabled>Disabled State</Label>
                      <Input disabled placeholder="Disabled input" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Card Component Tests */}
            <section ref={sectionRefs.card} id="card" className="space-y-4">
              <h2 className="text-2xl font-medium">Card</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card variant="outlined">
                  <CardHeader>
                    <CardTitle>Outlined Card</CardTitle>
                    <CardDescription>Default card variant with border</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">This is the default outlined card variant following Cape patterns.</p>
                  </CardContent>
                </Card>

                <Card variant="filled">
                  <CardHeader>
                    <CardTitle>Filled Card</CardTitle>
                    <CardDescription>Filled background variant</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">This card has a filled background with no border.</p>
                  </CardContent>
                </Card>

                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle>Elevated Card</CardTitle>
                    <CardDescription>Shadow-based elevation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">This card uses shadows for elevation instead of borders.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Interactive cards</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Option A", "Option B", "Option C"].map((option) => (
                    <Card
                      key={option}
                      variant="outlined"
                      selected={selectedCard === option}
                      onSelectionChange={(selected) => setSelectedCard(selected ? option : null)}
                    >
                      <CardContent className="pt-6">
                        <h4 className="font-medium">{option}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Click to select this option
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Selected: {selectedCard || "None"}
                </p>
              </div>
            </section>

            {/* Checkbox Component Tests */}
            <section ref={sectionRefs.checkbox} id="checkbox" className="space-y-4">
              <h2 className="text-2xl font-medium">Checkbox</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Checkbox sizes</h3>
                  <div className="space-y-3">
                    <Checkbox size="small" label="Small checkbox" />
                    <Checkbox size="medium" label="Medium checkbox (default)" />
                    <Checkbox size="large" label="Large checkbox" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Checkbox states</h3>
                  <div className="space-y-3">
                    <Checkbox label="Default checkbox" />
                    <Checkbox label="Checked checkbox" checked />
                    <Checkbox label="Indeterminate checkbox" indeterminate checked />
                    <Checkbox label="Error checkbox" error />
                    <Checkbox label="Disabled checkbox" disabled />
                    <Checkbox label="Disabled checked" disabled checked />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Form Integration</h3>
                <div className="space-y-2">
                  <Checkbox 
                    label="Subscribe to newsletter" 
                    checked={isNewsletterChecked}
                    onCheckedChange={(checked) => setIsNewsletterChecked(checked === true)}
                  />
                  <Checkbox label="I agree to the terms and conditions" required />
                  <Checkbox label="Send me promotional emails" />
                </div>
              </div>
            </section>

            {/* Label Component Tests */}
            <section ref={sectionRefs.label} id="label" className="space-y-4">
              <h2 className="text-2xl font-medium">Label</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Label sizes</h3>
                  <div className="space-y-3">
                    <div>
                      <Label size="small">Small Label</Label>
                      <Input size="small" />
                    </div>
                    <div>
                      <Label size="medium">Medium Label</Label>
                      <Input size="medium" />
                    </div>
                    <div>
                      <Label size="large">Large Label</Label>
                      <Input size="large" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Label states</h3>
                  <div className="space-y-3">
                    <div>
                      <Label required>Required Field</Label>
                      <Input placeholder="This field is required" />
                    </div>
                    <div>
                      <Label error>Error Field</Label>
                      <Input validationState="error" placeholder="Something went wrong" />
                    </div>
                    <div>
                      <Label disabled>Disabled Field</Label>
                      <Input disabled placeholder="This field is disabled" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Avatar Component Tests */}
            <section ref={sectionRefs.avatar} id="avatar" className="space-y-4">
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

            {/* Chip Component Tests */}
            <section ref={sectionRefs.chip} id="chip" className="space-y-4">
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

            {/* Accordion Section */}
            <section ref={sectionRefs.accordion} id="accordion" className="space-y-4">
              <h2 className="text-2xl font-medium">Accordion</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Basic Accordion</h3>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is Cape Design System?</AccordionTrigger>
                      <AccordionContent>
                        Cape Design System is a comprehensive design language and component library that provides 
                        consistent patterns, guidelines, and reusable components for building digital products.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How do I get started?</AccordionTrigger>
                      <AccordionContent>
                        You can start by exploring the component documentation, understanding the design principles, 
                        and implementing the components in your project using the provided code examples.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Can I customize the components?</AccordionTrigger>
                      <AccordionContent>
                        Yes! All components are built with customization in mind. You can override styles, 
                        extend functionality, and adapt components to match your specific brand requirements.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Multiple Selection Accordion</h3>
                  <Accordion type="multiple" value={accordionValues} onValueChange={setAccordionValues}>
                    <AccordionItem value="features">
                      <AccordionTrigger>Key Features</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Consistent design patterns</li>
                          <li>Accessible components</li>
                          <li>TypeScript support</li>
                          <li>Responsive design</li>
                          <li>Dark mode support</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="components">
                      <AccordionTrigger>Available Components</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-wrap gap-1">
                          {["Button", "Alert", "Input", "Card", "Checkbox", "Label", "Avatar", "Chip", "Accordion", "Textarea", "Tooltip", "Switch", "Skeleton"].map((component) => (
                            <Chip key={component} size="small" label={component} />
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="benefits">
                      <AccordionTrigger>Benefits</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 text-sm">
                          <p><strong>Consistency:</strong> Unified design language across all products</p>
                          <p><strong>Efficiency:</strong> Pre-built components speed up development</p>
                          <p><strong>Quality:</strong> Well-tested, accessible components</p>
                          <p><strong>Maintainability:</strong> Centralized updates and improvements</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <p className="text-sm text-muted-foreground mt-2">
                    Open sections: {accordionValues.length > 0 ? accordionValues.join(", ") : "None"}
                  </p>
                </div>
              </div>
            </section>

            {/* Textarea Section */}
            <section ref={sectionRefs.textarea} id="textarea" className="space-y-4">
              <h2 className="text-2xl font-medium">Textarea</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Textarea sizes</h3>
                  <div className="space-y-3">
                    <div>
                      <Label size="small">Extra Small Textarea</Label>
                      <Textarea size="xsmall" placeholder="Extra small textarea" />
                    </div>
                    <div>
                      <Label size="small">Small Textarea</Label>
                      <Textarea size="small" placeholder="Small textarea" />
                    </div>
                    <div>
                      <Label>Medium Textarea (Default)</Label>
                      <Textarea size="medium" placeholder="Medium textarea" />
                    </div>
                    <div>
                      <Label size="large">Large Textarea</Label>
                      <Textarea size="large" placeholder="Large textarea" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Textarea States</h3>
                  <div className="space-y-3">
                    <div>
                      <Label>Default State</Label>
                      <Textarea placeholder="Write your message here..." />
                    </div>
                    <div>
                      <Label error>Error State</Label>
                      <Textarea validationState="error" placeholder="Something went wrong" />
                    </div>
                    <div>
                      <Label>Success State</Label>
                      <Textarea validationState="success" placeholder="Looks good!" />
                    </div>
                    <div>
                      <Label disabled>Disabled State</Label>
                      <Textarea disabled placeholder="This textarea is disabled" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Interactive Example</h3>
                <div>
                  <Label>Feedback Message</Label>
                  <Textarea 
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                    placeholder="Tell us what you think about our components..."
                    className="mt-1"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {textareaValue.length}/500 characters
                  </p>
                </div>
              </div>
            </section>

            {/* Tooltip Section */}
            <section ref={sectionRefs.tooltip} id="tooltip" className="space-y-4">
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
            </section>

            {/* Switch Section */}
            <section ref={sectionRefs.switch} id="switch" className="space-y-4">
              <h2 className="text-2xl font-medium">Switch</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Switch Sizes</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Switch size="medium" id="medium-switch" />
                      <Label htmlFor="medium-switch">Medium Switch (Default)</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Switch size="large" id="large-switch" />
                      <Label htmlFor="large-switch" size="large">Large Switch</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Switch States</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Switch id="default-switch" />
                      <Label htmlFor="default-switch">Default Switch</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Switch id="checked-switch" defaultChecked />
                      <Label htmlFor="checked-switch">Checked Switch</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Switch id="disabled-switch" disabled />
                      <Label htmlFor="disabled-switch" disabled>Disabled Switch</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Switch id="disabled-checked-switch" disabled defaultChecked />
                      <Label htmlFor="disabled-checked-switch" disabled>Disabled Checked</Label>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skeleton Section */}
            <section ref={sectionRefs.skeleton} id="skeleton" className="space-y-4">
              <h2 className="text-2xl font-medium">Skeleton</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Skeleton Variants</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Text Skeleton</p>
                      <div className="space-y-2">
                        <Skeleton variant="text" className="w-3/4" />
                        <Skeleton variant="text" className="w-1/2" />
                        <Skeleton variant="text" className="w-5/6" />
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Rectangular Skeleton</p>
                      <Skeleton variant="rectangular" className="w-full h-32" />
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Rounded Skeleton (Default)</p>
                      <Skeleton variant="rounded" className="w-full h-24" />
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Circular Skeleton</p>
                      <div className="flex gap-2">
                        <Skeleton variant="circular" className="w-12 h-12" />
                        <Skeleton variant="circular" className="w-16 h-16" />
                        <Skeleton variant="circular" className="w-20 h-20" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Animation Control</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">With Animation (Default)</p>
                      <div className="space-y-2">
                        <Skeleton animated className="w-3/4 h-4" />
                        <Skeleton animated className="w-1/2 h-4" />
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Without Animation</p>
                      <div className="space-y-2">
                        <Skeleton animated={false} className="w-3/4 h-4" />
                        <Skeleton animated={false} className="w-1/2 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Loading Card Example</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card variant="outlined">
                    <CardHeader>
                      <CardTitle>Actual Content</CardTitle>
                      <CardDescription>This card shows real content</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                          <AvatarFallback>UN</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">John Doe</p>
                          <p className="text-sm text-muted-foreground">Software Engineer</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm">
                        This is the actual content that would be displayed after loading is complete.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="outlined">
                    <CardHeader>
                      <div className="space-y-2">
                        <Skeleton variant="text" className="w-1/2 h-6" />
                        <Skeleton variant="text" className="w-3/4 h-4" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-4">
                        <Skeleton variant="circular" className="w-10 h-10" />
                        <div className="space-y-2 flex-1">
                          <Skeleton variant="text" className="w-24 h-4" />
                          <Skeleton variant="text" className="w-32 h-3" />
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <Skeleton variant="text" className="w-full h-3" />
                        <Skeleton variant="text" className="w-3/4 h-3" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">List Loading Example</h3>
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <Skeleton variant="circular" className="w-8 h-8" />
                      <div className="flex-1 space-y-2">
                        <Skeleton variant="text" className="w-1/3 h-4" />
                        <Skeleton variant="text" className="w-1/2 h-3" />
                      </div>
                      <Skeleton variant="rounded" className="w-16 h-6" />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Table Section */}
            <section ref={sectionRefs.table} id="table" className="space-y-4">
              <h2 className="text-2xl font-medium">Table</h2>
              
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Table Sizes</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-3">Medium Size (Default)</p>
                      <Table size="medium">
                        <TableCaption>Employee Information</TableCaption>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead className="text-right">Salary</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>Engineering</TableCell>
                            <TableCell>Senior Developer</TableCell>
                            <TableCell className="text-right">$95,000</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Jane Smith</TableCell>
                            <TableCell>Design</TableCell>
                            <TableCell>UX Designer</TableCell>
                            <TableCell className="text-right">$80,000</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Mike Johnson</TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell>Product Manager</TableCell>
                            <TableCell className="text-right">$90,000</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-3">Small Size</p>
                      <Table size="small">
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Task 1</TableCell>
                            <TableCell>Complete</TableCell>
                            <TableCell>View</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Task 2</TableCell>
                            <TableCell>In Progress</TableCell>
                            <TableCell>Edit</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Bordered Table</h3>
                  <Table bordered size="medium">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>MacBook Pro</TableCell>
                        <TableCell>Laptop</TableCell>
                        <TableCell>15</TableCell>
                        <TableCell className="text-right">$1,999</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>iPhone 15</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>32</TableCell>
                        <TableCell className="text-right">$799</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>iPad Air</TableCell>
                        <TableCell>Tablet</TableCell>
                        <TableCell>8</TableCell>
                        <TableCell className="text-right">$599</TableCell>
                      </TableRow>
                    </TableBody>
                    <TableFooter>
                      <TableRow>
                        <TableCell colSpan={3} className="font-medium">Total Items</TableCell>
                        <TableCell className="text-right font-medium">55</TableCell>
                      </TableRow>
                    </TableFooter>
                  </Table>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Row States</h3>
                  <Table bordered>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>Order Status</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Alice Brown</TableCell>
                        <TableCell>Shipped</TableCell>
                        <TableCell>$150.00</TableCell>
                        <TableCell>2024-01-15</TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>Bob Wilson</TableCell>
                        <TableCell>Processing</TableCell>
                        <TableCell>$89.99</TableCell>
                        <TableCell>2024-01-16</TableCell>
                      </TableRow>
                      <TableRow disabled>
                        <TableCell>Carol Davis</TableCell>
                        <TableCell>Cancelled</TableCell>
                        <TableCell>$45.50</TableCell>
                        <TableCell>2024-01-14</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>David Lee</TableCell>
                        <TableCell>Delivered</TableCell>
                        <TableCell>$299.99</TableCell>
                        <TableCell>2024-01-13</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <p className="text-sm text-muted-foreground">
                    Second row is selected, third row is disabled. Hover over enabled rows to see hover effect.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Sticky Header Table</h3>
                  <div className="h-64 overflow-auto border rounded-lg">
                    <Table>
                      <TableHeader sticky>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Department</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {Array.from({ length: 20 }, (_, i) => (
                          <TableRow key={i}>
                            <TableCell>{i + 1}</TableCell>
                            <TableCell>Employee {i + 1}</TableCell>
                            <TableCell>employee{i + 1}@company.com</TableCell>
                            <TableCell>{i % 3 === 0 ? 'Engineering' : i % 3 === 1 ? 'Design' : 'Product'}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Scroll within the container to see the sticky header in action.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Table with Interactive Elements</h3>
                  <Table bordered>
                    <TableHeader>
                      <TableRow>
                        <TableHead>
                          <Checkbox />
                        </TableHead>
                        <TableHead>Task</TableHead>
                        <TableHead>Assignee</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>Update user dashboard</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            John Doe
                          </div>
                        </TableCell>
                        <TableCell>
                          <Chip label="High" size="small" selected />
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button size="xsmall" variant="tertiary">Edit</Button>
                            <Button size="xsmall" variant="tertiary">View</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>Fix navigation bug</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar size="small">
                              <AvatarFallback>JS</AvatarFallback>
                            </Avatar>
                            Jane Smith
                          </div>
                        </TableCell>
                        <TableCell>
                          <Chip label="Medium" size="small" />
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button size="xsmall" variant="tertiary">Edit</Button>
                            <Button size="xsmall" variant="tertiary">View</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Checkbox checked />
                        </TableCell>
                        <TableCell>Update documentation</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar size="small">
                              <AvatarFallback>MJ</AvatarFallback>
                            </Avatar>
                            Mike Johnson
                          </div>
                        </TableCell>
                        <TableCell>
                          <Chip label="Low" size="small" selected />
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button size="xsmall" variant="tertiary">Edit</Button>
                            <Button size="xsmall" variant="tertiary">View</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </section>

            {/* Tabs Section */}
            <section ref={sectionRefs.tabs} id="tabs" className="space-y-4">
              <h2 className="text-2xl font-medium">Tabs</h2>
              
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Tab Sizes</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-3">Small Size</p>
                      <Tabs defaultValue="overview" size="small">
                        <TabsList>
                          <TabsTrigger value="overview">Overview</TabsTrigger>
                          <TabsTrigger value="details">Details</TabsTrigger>
                          <TabsTrigger value="settings">Settings</TabsTrigger>
                        </TabsList>
                        <TabsContent value="overview">
                          <Card>
                            <CardContent className="pt-6">
                              <p className="text-sm">This is the overview tab content with small sizing.</p>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        <TabsContent value="details">
                          <Card>
                            <CardContent className="pt-6">
                              <p className="text-sm">This is the details tab content.</p>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        <TabsContent value="settings">
                          <Card>
                            <CardContent className="pt-6">
                              <p className="text-sm">This is the settings tab content.</p>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </Tabs>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-3">Medium Size (Default)</p>
                      <Tabs defaultValue="dashboard" size="medium">
                        <TabsList>
                          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                          <TabsTrigger value="analytics">Analytics</TabsTrigger>
                          <TabsTrigger value="reports">Reports</TabsTrigger>
                          <TabsTrigger value="team">Team</TabsTrigger>
                        </TabsList>
                        <TabsContent value="dashboard">
                          <Card>
                            <CardContent className="pt-6">
                              <h4 className="font-medium mb-2">Dashboard Overview</h4>
                              <p className="text-sm text-muted-foreground">Your main dashboard with key metrics and insights.</p>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        <TabsContent value="analytics">
                          <Card>
                            <CardContent className="pt-6">
                              <h4 className="font-medium mb-2">Analytics</h4>
                              <p className="text-sm text-muted-foreground">Detailed analytics and performance data.</p>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        <TabsContent value="reports">
                          <Card>
                            <CardContent className="pt-6">
                              <h4 className="font-medium mb-2">Reports</h4>
                              <p className="text-sm text-muted-foreground">Generate and view detailed reports.</p>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        <TabsContent value="team">
                          <Card>
                            <CardContent className="pt-6">
                              <h4 className="font-medium mb-2">Team Management</h4>
                              <p className="text-sm text-muted-foreground">Manage your team members and permissions.</p>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </Tabs>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-3">Large Size</p>
                      <Tabs defaultValue="projects" size="large">
                        <TabsList>
                          <TabsTrigger value="projects">Projects</TabsTrigger>
                          <TabsTrigger value="tasks">Tasks</TabsTrigger>
                          <TabsTrigger value="calendar">Calendar</TabsTrigger>
                        </TabsList>
                        <TabsContent value="projects">
                          <Card>
                            <CardContent className="pt-6">
                              <h4 className="font-medium mb-2">Project Management</h4>
                              <p className="text-sm text-muted-foreground">Manage your projects and track progress with large tabs.</p>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        <TabsContent value="tasks">
                          <Card>
                            <CardContent className="pt-6">
                              <h4 className="font-medium mb-2">Task Management</h4>
                              <p className="text-sm text-muted-foreground">View and manage your tasks and to-dos.</p>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        <TabsContent value="calendar">
                          <Card>
                            <CardContent className="pt-6">
                              <h4 className="font-medium mb-2">Calendar View</h4>
                              <p className="text-sm text-muted-foreground">View your schedule and upcoming events.</p>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Divider Options</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-3">With Divider (Default)</p>
                      <Tabs defaultValue="home" divider>
                        <TabsList>
                          <TabsTrigger value="home">Home</TabsTrigger>
                          <TabsTrigger value="about">About</TabsTrigger>
                          <TabsTrigger value="contact">Contact</TabsTrigger>
                        </TabsList>
                        <TabsContent value="home">
                          <p className="text-sm">Home page content with bottom divider line visible.</p>
                        </TabsContent>
                        <TabsContent value="about">
                          <p className="text-sm">About page content.</p>
                        </TabsContent>
                        <TabsContent value="contact">
                          <p className="text-sm">Contact page content.</p>
                        </TabsContent>
                      </Tabs>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-3">Without Divider</p>
                      <Tabs defaultValue="products" divider={false}>
                        <TabsList>
                          <TabsTrigger value="products">Products</TabsTrigger>
                          <TabsTrigger value="services">Services</TabsTrigger>
                          <TabsTrigger value="support">Support</TabsTrigger>
                        </TabsList>
                        <TabsContent value="products">
                          <p className="text-sm">Products content without divider line.</p>
                        </TabsContent>
                        <TabsContent value="services">
                          <p className="text-sm">Services content.</p>
                        </TabsContent>
                        <TabsContent value="support">
                          <p className="text-sm">Support content.</p>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Tab States and Icons</h3>
                  <Tabs defaultValue="notifications">
                    <TabsList>
                      <TabsTrigger value="notifications">
                        <Bell className="mr-2 size-4" />
                        Notifications
                      </TabsTrigger>
                      <TabsTrigger value="messages">
                        <MessageSquare className="mr-2 size-4" />
                        Messages
                      </TabsTrigger>
                      <TabsTrigger value="disabled" disabled>
                        <X className="mr-2 size-4" />
                        Disabled
                      </TabsTrigger>
                      <TabsTrigger value="settings">
                        <Settings className="mr-2 size-4" />
                        Settings
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="notifications">
                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="font-medium mb-2">Notifications</h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-3 p-2 border rounded">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <div>
                                <p className="text-sm font-medium">New message received</p>
                                <p className="text-xs text-muted-foreground">2 minutes ago</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-2 border rounded">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <div>
                                <p className="text-sm font-medium">Task completed</p>
                                <p className="text-xs text-muted-foreground">1 hour ago</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="messages">
                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="font-medium mb-2">Messages</h4>
                          <p className="text-sm text-muted-foreground">Your recent messages and conversations.</p>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="settings">
                      <Card>
                        <CardContent className="pt-6">
                          <h4 className="font-medium mb-2">Settings</h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <Label>Email notifications</Label>
                              <Switch />
                            </div>
                            <div className="flex items-center justify-between">
                              <Label>Push notifications</Label>
                              <Switch defaultChecked />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                  <p className="text-sm text-muted-foreground">
                    Third tab is disabled. Notice the hover effects and active indicators on enabled tabs.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Complex Content Example</h3>
                  <Tabs defaultValue="users" size="medium">
                    <TabsList>
                      <TabsTrigger value="users">Users</TabsTrigger>
                      <TabsTrigger value="roles">Roles</TabsTrigger>
                      <TabsTrigger value="permissions">Permissions</TabsTrigger>
                    </TabsList>
                    <TabsContent value="users">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">User Management</h4>
                          <Button size="small">Add User</Button>
                        </div>
                        <Table size="small">
                          <TableHeader>
                            <TableRow>
                              <TableHead>Name</TableHead>
                              <TableHead>Email</TableHead>
                              <TableHead>Role</TableHead>
                              <TableHead>Status</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>John Doe</TableCell>
                              <TableCell>john@example.com</TableCell>
                              <TableCell>Admin</TableCell>
                              <TableCell>
                                <Chip size="small" label="Active" selected />
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Jane Smith</TableCell>
                              <TableCell>jane@example.com</TableCell>
                              <TableCell>Editor</TableCell>
                              <TableCell>
                                <Chip size="small" label="Active" selected />
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                    <TabsContent value="roles">
                      <div className="space-y-4">
                        <h4 className="font-medium">Role Management</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Card>
                            <CardHeader>
                              <CardTitle className="text-base">Admin</CardTitle>
                              <CardDescription>Full system access</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground">Can manage users, roles, and system settings.</p>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader>
                              <CardTitle className="text-base">Editor</CardTitle>
                              <CardDescription>Content management</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground">Can create and edit content.</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="permissions">
                      <div className="space-y-4">
                        <h4 className="font-medium">Permission Settings</h4>
                        <div className="space-y-3">
                          {["Read users", "Write users", "Delete users", "Manage roles"].map((permission) => (
                            <div key={permission} className="flex items-center justify-between p-3 border rounded">
                              <Label>{permission}</Label>
                              <Checkbox />
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </section>

            {/* Prompt Card Section */}
            <section ref={sectionRefs.promptcard} id="promptcard" className="space-y-4">
              <h2 className="text-2xl font-medium">Prompt Card</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Vertical Layout (Default)</h3>
                  <div className="space-y-4">
                    <PromptCard
                      variant="vertical"
                      title="Get Started with Cape Design System"
                      description="Explore our comprehensive component library and start building beautiful, consistent user interfaces."
                      primaryAction={{
                        label: "Get Started",
                        onClick: () => console.log("Get Started clicked")
                      }}
                      secondaryAction={{
                        label: "Learn More",
                        onClick: () => console.log("Learn More clicked")
                      }}
                      icon={<Download className="size-8 text-primary" />}
                    />
                    
                    <PromptCard
                      variant="vertical"
                      title="Boost Your Productivity"
                      description="Streamline your workflow with our powerful automation tools and integrations."
                      primaryAction={{
                        label: "Try Now",
                        onClick: () => console.log("Try Now clicked")
                      }}
                      icon={<Zap className="size-8 text-success" />}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Horizontal Layout</h3>
                  <div className="space-y-4">
                    <PromptCard
                      variant="horizontal"
                      title="Team Collaboration"
                      description="Work together seamlessly with real-time collaboration features and shared workspaces."
                      primaryAction={{
                        label: "Invite Team",
                        onClick: () => console.log("Invite Team clicked")
                      }}
                      secondaryAction={{
                        label: "View Features",
                        onClick: () => console.log("View Features clicked")
                      }}
                      icon={<Users className="size-8 text-primary" />}
                    />
                    
                    <PromptCard
                      variant="horizontal"
                      title="Advanced Analytics"
                      description="Get deep insights into your performance with detailed analytics and reporting tools."
                      primaryAction={{
                        label: "View Analytics",
                        onClick: () => console.log("View Analytics clicked")
                      }}
                      icon={<BarChart3 className="size-8 text-primary" />}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Different Action Configurations</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <PromptCard
                    variant="vertical"
                    title="Primary Action Only"
                    description="Sometimes you only need one clear call to action."
                    primaryAction={{
                      label: "Continue",
                      onClick: () => console.log("Continue clicked")
                    }}
                    icon={<Check className="size-8 text-primary" />}
                  />
                  
                  <PromptCard
                    variant="vertical"
                    title="Secondary Action Only"
                    description="Sometimes the secondary action is all you need."
                    secondaryAction={{
                      label: "Learn More",
                      onClick: () => console.log("Learn More clicked")
                    }}
                    icon={<Info className="size-8 text-primary" />}
                  />
                  
                  <PromptCard
                    variant="vertical"
                    title="No Actions"
                    description="Pure informational cards without any actions. Great for announcements or feature highlights."
                    icon={<AlertTriangle className="size-8 text-primary" />}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">With Icon Placeholder</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <PromptCard
                    variant="vertical"
                    title="Custom Icon"
                    description="This card uses a custom SVG icon to enhance the visual appeal."
                    primaryAction={{
                      label: "Explore",
                      onClick: () => console.log("Explore clicked")
                    }}
                    icon={<Heart className="size-8 text-primary" />}
                  />
                  
                  <PromptCard
                    variant="vertical"
                    title="Default Icon Placeholder"
                    description="When no icon is provided, a subtle placeholder is shown using design system colors."
                    primaryAction={{
                      label: "Discover",
                      onClick: () => console.log("Discover clicked")
                    }}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Real-world Examples</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-muted-foreground">Onboarding Flow</h4>
                    <div className="space-y-3">
                      <PromptCard
                        variant="horizontal"
                        title="Welcome to Cape Design System"
                        description="Let's get you set up with everything you need to build amazing user interfaces."
                        primaryAction={{
                          label: "Start Setup",
                          onClick: () => console.log("Start Setup clicked")
                        }}
                        secondaryAction={{
                          label: "Skip",
                          onClick: () => console.log("Skip clicked")
                        }}
                        icon={<CheckCircle className="size-8 text-primary" />}
                      />
                      
                      <PromptCard
                        variant="horizontal"
                        title="Install Dependencies"
                        description="We've detected that some required packages are missing. Install them now to continue."
                        primaryAction={{
                          label: "Install Now",
                          onClick: () => console.log("Install Now clicked")
                        }}
                        secondaryAction={{
                          label: "Manual Setup",
                          onClick: () => console.log("Manual Setup clicked")
                        }}
                        icon={<Download className="size-8 text-primary" />}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium text-muted-foreground">Feature Promotion</h4>
                    <div className="space-y-3">
                      <PromptCard
                        variant="vertical"
                        title="New Dark Mode Available"
                        description="Experience Cape Design System in a beautiful dark theme. Perfect for late-night coding sessions."
                        primaryAction={{
                          label: "Enable Dark Mode",
                          onClick: () => console.log("Enable Dark Mode clicked")
                        }}
                        secondaryAction={{
                          label: "Remind Later",
                          onClick: () => console.log("Remind Later clicked")
                        }}
                        icon={<Moon className="size-8 text-primary" />}
                      />
                      
                      <PromptCard
                        variant="vertical"
                        title="Pro Tips Available"
                        description="Unlock advanced techniques and best practices from our design system experts."
                        primaryAction={{
                          label: "View Tips",
                          onClick: () => console.log("View Tips clicked")
                        }}
                        icon={<Star className="size-8 text-primary" />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tile Card Section */}
            <section ref={sectionRefs.tilecard} id="tilecard" className="space-y-4">
              <h2 className="text-2xl font-medium">Tile Card</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Default Variant</h3>
                  <p className="text-sm text-muted-foreground">
                    The default variant features a circular background around the icon, perfect for feature highlights and navigation tiles.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <TileCard
                      variant="default"
                      title="Design System"
                      icon={<Layout className="size-8 text-primary" />}
                    />
                    
                    <TileCard
                      variant="default"
                      title="Components"
                      icon={<Layers className="size-8 text-primary" />}
                    />
                    
                    <TileCard
                      variant="default"
                      title="Analytics"
                      icon={<BarChart3 className="size-8 text-primary" />}
                    />
                    
                    <TileCard
                      variant="default"
                      title="Settings"
                      icon={<Settings className="size-8 text-primary" />}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Minimal Variant</h3>
                  <p className="text-sm text-muted-foreground">
                    The minimal variant displays the icon without a background circle, ideal for simpler, more subtle presentations.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <TileCard
                      variant="minimal"
                      title="Documentation"
                      icon={<FileText className="size-8 text-primary" />}
                    />
                    
                    <TileCard
                      variant="minimal"
                      title="Support"
                      icon={<HelpCircle className="size-8 text-primary" />}
                    />
                    
                    <TileCard
                      variant="minimal"
                      title="Community"
                      icon={<Users className="size-8 text-primary" />}
                    />
                    
                    <TileCard
                      variant="minimal"
                      title="Updates"
                      icon={<RefreshCw className="size-8 text-primary" />}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Icon Placeholder Examples</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <TileCard
                    variant="default"
                    title="Custom Icon"
                    icon={<Heart className="size-8 text-primary" />}
                  />
                  
                  <TileCard
                    variant="default"
                    title="Default Placeholder"
                  />
                  
                  <TileCard
                    variant="minimal"
                    title="Custom Minimal"
                    icon={<Star className="size-8 text-primary" />}
                  />
                  
                  <TileCard
                    variant="minimal"
                    title="Minimal Placeholder"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Navigation Menu Example</h3>
                <p className="text-sm text-muted-foreground">
                  Perfect for dashboard navigation, feature discovery, or category selection.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <TileCard
                    variant="default"
                    title="Dashboard"
                    icon={<Layout className="size-8 text-primary" />}
                  />
                  
                  <TileCard
                    variant="default"
                    title="Projects"
                    icon={<FolderOpen className="size-8 text-primary" />}
                  />
                  
                  <TileCard
                    variant="default"
                    title="Team"
                    icon={<Users className="size-8 text-primary" />}
                  />
                  
                  <TileCard
                    variant="default"
                    title="Reports"
                    icon={<FileBarChart className="size-8 text-primary" />}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Feature Showcase</h3>
                <p className="text-sm text-muted-foreground">
                  Highlight key features or services with descriptive titles and meaningful icons.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <TileCard
                    variant="minimal"
                    title="Real-time Collaboration"
                    icon={<User className="size-8 text-primary" />}
                  />
                  
                  <TileCard
                    variant="minimal"
                    title="Advanced Security"
                    icon={<Shield className="size-8 text-primary" />}
                  />
                  
                  <TileCard
                    variant="minimal"
                    title="Cloud Storage"
                    icon={<Cloud className="size-8 text-primary" />}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Different Heights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <TileCard
                    variant="default"
                    title="Short Title"
                    icon={<CheckCircle className="size-8 text-primary" />}
                    className="h-32"
                  />
                  
                  <TileCard
                    variant="default"
                    title="Medium Length Title Here"
                    icon={<AlertTriangle className="size-8 text-primary" />}
                    className="h-40"
                  />
                  
                  <TileCard
                    variant="default"
                    title="Very Long Title That Might Wrap to Multiple Lines"
                    icon={<Info className="size-8 text-primary" />}
                    className="h-48"
                  />
                </div>
              </div>
            </section>

            {/* Complete Form Example */}
            <section ref={sectionRefs.form} id="form" className="space-y-4">
              <h2 className="text-2xl font-medium">Form example</h2>
              
              <Card variant="outlined" className="max-w-md">
                <CardHeader>
                  <CardTitle>Sign Up</CardTitle>
                  <CardDescription>Create your account to get started</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label required>Email Address</Label>
                    <Input 
                      type="email" 
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label required>Password</Label>
                    <Input 
                      type="password" 
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Checkbox label="I agree to the terms and conditions" />
                    <Checkbox 
                      label="Subscribe to newsletter" 
                      checked={isNewsletterChecked}
                      onCheckedChange={(checked) => setIsNewsletterChecked(checked === true)}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Create Account</Button>
                </CardFooter>
              </Card>
            </section>

            {/* Component Status */}
            <section ref={sectionRefs.status} id="status" className="space-y-4">
              <h2 className="text-2xl font-medium">Component status</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card variant="filled">
                  <CardHeader>
                    <CardTitle className="text-success">✅ Completed Components</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>• Button - Cape variants and states</li>
                      <li>• Alert - Cape variants with actions</li>
                      <li>• Chip - New interactive component</li>
                      <li>• Input - Cape sizes and validation</li>
                      <li>• Card - Cape variants and selection</li>
                      <li>• Checkbox - Cape sizes and states</li>
                      <li>• Label - Cape sizes and states</li>
                      <li>• Avatar - Cape sizes and variants</li>
                      <li>• Accordion - Cape styling with Radix UI</li>
                      <li>• Textarea - Cape sizes and validation</li>
                      <li>• Tooltip - Cape sizes and error states</li>
                      <li>• Switch - Cape sizes and interactive states</li>
                      <li>• Skeleton - Cape variants and animation</li>
                      <li>• Table - Cape sizes, borders, and row states</li>
                      <li>• Tabs - Cape sizes, dividers, and interactive states</li>
                      <li>• Prompt Card - Vertical/horizontal layouts with actions</li>
                      <li>• Tile Card - Default/minimal variants with icon placeholders</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card variant="outlined">
                  <CardHeader>
                    <CardTitle className="text-muted-foreground">🔄 Next Up</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Radio Group (Radio)</li>
                      <li>• Select</li>
                      <li>• Badge → Tag transformation</li>
                      <li>• Dialog</li>
                      <li>• Drawer</li>
                      <li>• Dropdown Menu</li>
                      <li>• Pagination</li>
                      <li>• Popover</li>
                      <li>• Progress Bar</li>
                      <li>• Table</li>
                      <li>• Tabs</li>
                      <li>• More components...</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </main>
      </div>
    </TooltipProvider>
  );
}

export default App;