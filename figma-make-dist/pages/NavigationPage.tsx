import { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { Chip } from "../components/ui/chip";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "../components/ui/table";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Checkbox } from "../components/ui/checkbox";
import { Bell, MessageSquare, X, Settings } from "lucide-react";

export function NavigationPage() {
  const [accordionValues, setAccordionValues] = useState<string[]>([]);

  return (
    <div className="space-y-16">
      {/* Tabs Section */}
      <section className="space-y-4">
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

      {/* Accordion Section */}
      <section className="space-y-4">
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
    </div>
  );
}