import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Switch } from "../components/ui/switch";
import { Search } from "lucide-react";

export function FormPage() {
  return (
    <div className="space-y-12">
      {/* Text Input Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Text Input</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Basic Usage</h3>
            <div className="space-y-3 max-w-sm">
              <div>
                <Label>Email</Label>
                <Input placeholder="Enter your email" />
              </div>
              <div>
                <Label error>Error State</Label>
                <Input validationState="error" placeholder="Invalid input" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Sizes</h3>
            <div className="space-y-3 max-w-sm">
              <div>
                <Label>X-Small</Label>
                <Input size="xsmall" placeholder="Extra small input" />
              </div>
              <div>
                <Label>Small</Label>
                <Input size="small" placeholder="Small input" />
              </div>
              <div>
                <Label>Medium (Default)</Label>
                <Input size="medium" placeholder="Medium input" />
              </div>
              <div>
                <Label>Large</Label>
                <Input size="large" placeholder="Large input" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Search</h3>
            <div className="space-y-3 max-w-sm">
              <div>
                <Label>Search X-Small</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-3 text-muted-foreground" />
                  <Input size="xsmall" className="pl-9 rounded-full" placeholder="Search..." />
                </div>
              </div>
              <div>
                <Label>Search Small</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input size="small" className="pl-10 rounded-full" placeholder="Search..." />
                </div>
              </div>
              <div>
                <Label>Search Medium</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input size="medium" className="pl-10 rounded-full" placeholder="Search components..." />
                </div>
              </div>
              <div>
                <Label>Search Large</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-muted-foreground" />
                  <Input size="large" className="pl-12 rounded-full" placeholder="Search components..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Textarea Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Text Area</h2>
        
        <div className="space-y-6">
          <div className="max-w-sm">
            <h3 className="text-lg font-medium mb-3">Basic Usage</h3>
            <div className="space-y-3">
              <div>
                <Label>Message</Label>
                <Textarea placeholder="Write your message..." />
              </div>
              <div>
                <Label>Large</Label>
                <Textarea size="large" placeholder="Large textarea" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkbox Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Checkbox</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Basic Usage</h3>
            <div className="space-y-3">
              <Checkbox label="Default checkbox" />
              <Checkbox label="Checked checkbox" checked />
              <Checkbox label="Disabled checkbox" disabled />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Sizes</h3>
            <div className="space-y-3">
              <Checkbox size="small" label="Small" />
              <Checkbox size="medium" label="Medium" />
              <Checkbox size="large" label="Large" />
            </div>
          </div>
        </div>
      </section>

      {/* Switch Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Switch</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Basic Usage</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Switch id="switch-1" />
                <Label htmlFor="switch-1">Enable notifications</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Switch id="switch-2" defaultChecked />
                <Label htmlFor="switch-2">Auto-save</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Switch id="switch-3" disabled />
                <Label htmlFor="switch-3" disabled>Disabled</Label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Radio Button Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Radio Button</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Basic Usage</h3>
            <div>
              <Label>Payment Method</Label>
              <div className="space-y-2 mt-2">
                <div className="flex items-center space-x-2">
                  <input type="radio" id="credit" name="payment" className="h-4 w-4 text-primary" defaultChecked />
                  <Label htmlFor="credit">Credit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="paypal" name="payment" className="h-4 w-4 text-primary" />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dropdown Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Dropdown</h2>
        
        <div className="space-y-6">
          <div className="max-w-sm">
            <h3 className="text-lg font-medium mb-3">Basic Usage</h3>
            <div className="space-y-3">
              <div>
                <Label>Country</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Select country...</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}