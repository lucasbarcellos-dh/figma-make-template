import { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Switch } from "../components/ui/switch";
import { Search } from "lucide-react";

export function FormPage() {
  const [isNewsletterChecked, setIsNewsletterChecked] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");

  return (
    <div className="space-y-16">
      {/* Text Input Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Text Input</h2>
        
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
                <Input size="small" placeholder="Small input" />
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

      {/* Search Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Search</h2>
        <p className="text-sm text-muted-foreground">Specialized input component optimized for search functionality.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Search Variants</h3>
            <div className="space-y-3">
              <div>
                <Label>Basic Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input className="pl-10" placeholder="Search components..." />
                </div>
              </div>
              <div>
                <Label>Search with Clear</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input className="pl-10 pr-10" placeholder="Search documentation..." />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Search Sizes</h3>
            <div className="space-y-3">
              <div>
                <Label size="small">Small Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-3 text-muted-foreground" />
                  <Input size="small" className="pl-9" placeholder="Small search..." />
                </div>
              </div>
              <div>
                <Label>Medium Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input size="medium" className="pl-10" placeholder="Medium search..." />
                </div>
              </div>
              <div>
                <Label size="large">Large Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-muted-foreground" />
                  <Input size="large" className="pl-12" placeholder="Large search..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkbox Section */}
      <section className="space-y-4">
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

      {/* Switch Section */}
      <section className="space-y-4">
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

      {/* Radio Button Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Radio Button</h2>
        <p className="text-sm text-muted-foreground">Single selection from a group of mutually exclusive options. Currently using placeholder implementation - full radio group component to be implemented.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Radio Button Groups</h3>
            <div className="space-y-4">
              <div>
                <Label>Payment Method</Label>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="credit" name="payment" className="h-4 w-4 text-primary" />
                    <Label htmlFor="credit">Credit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="debit" name="payment" className="h-4 w-4 text-primary" />
                    <Label htmlFor="debit">Debit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="paypal" name="payment" className="h-4 w-4 text-primary" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Radio Button States</h3>
            <div className="space-y-4">
              <div>
                <Label>Notification Frequency</Label>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="daily" name="frequency" className="h-4 w-4 text-primary" defaultChecked />
                    <Label htmlFor="daily">Daily</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="weekly" name="frequency" className="h-4 w-4 text-primary" />
                    <Label htmlFor="weekly">Weekly</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="never" name="frequency" className="h-4 w-4 text-primary" disabled />
                    <Label htmlFor="never" disabled>Never (Disabled)</Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dropdown Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Dropdown</h2>
        <p className="text-sm text-muted-foreground">Select component for choosing from a list of options. Currently using placeholder implementation - full select component to be implemented.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Basic Dropdown</h3>
            <div className="space-y-3">
              <div>
                <Label>Country</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Select a country...</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                </select>
              </div>
              <div>
                <Label>Language</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" defaultValue="en">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Dropdown States</h3>
            <div className="space-y-3">
              <div>
                <Label>Priority Level</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" defaultValue="medium">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
              <div>
                <Label error>Error State</Label>
                <select className="flex h-10 w-full rounded-md border border-destructive bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Please select an option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
              </div>
              <div>
                <Label disabled>Disabled State</Label>
                <select disabled className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Disabled dropdown</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Area Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Text Area</h2>
        
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
    </div>
  );
}