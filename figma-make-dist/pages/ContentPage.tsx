import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from "../components/ui/table";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Chip } from "../components/ui/chip";
import { Avatar, AvatarFallback } from "../components/ui/avatar";

export function ContentPage() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <div className="space-y-16">
      {/* Table Section */}
      <section className="space-y-4">
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

      {/* List Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">List</h2>
        <p className="text-sm text-muted-foreground">Structured content display for items, typically using cards or list items for consistent presentation.</p>
        
        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Simple List</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent">
                <div className="flex items-center space-x-3">
                  <Avatar size="small">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
                <Button size="xsmall" variant="tertiary">View</Button>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent">
                <div className="flex items-center space-x-3">
                  <Avatar size="small">
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Jane Smith</p>
                    <p className="text-xs text-muted-foreground">UX Designer</p>
                  </div>
                </div>
                <Button size="xsmall" variant="tertiary">View</Button>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent">
                <div className="flex items-center space-x-3">
                  <Avatar size="small">
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Mike Johnson</p>
                    <p className="text-xs text-muted-foreground">Product Manager</p>
                  </div>
                </div>
                <Button size="xsmall" variant="tertiary">View</Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Card List</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card variant="outlined">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar size="small">
                      <AvatarFallback>P1</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Project Alpha</p>
                      <p className="text-xs text-muted-foreground">Web Application</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Chip size="small" label="Active" selected />
                    <p className="text-xs text-muted-foreground">Due: Jan 15</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card variant="outlined">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar size="small">
                      <AvatarFallback>P2</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Project Beta</p>
                      <p className="text-xs text-muted-foreground">Mobile App</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Chip size="small" label="In Review" />
                    <p className="text-xs text-muted-foreground">Due: Jan 22</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card variant="outlined">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar size="small">
                      <AvatarFallback>P3</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Project Gamma</p>
                      <p className="text-xs text-muted-foreground">API Service</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Chip size="small" label="Completed" selected />
                    <p className="text-xs text-muted-foreground">Completed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section className="space-y-4">
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

      {/* Divider Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Divider</h2>
        <p className="text-sm text-muted-foreground">Visual elements that separate content sections. Currently using basic implementation - enhanced divider component to be developed.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Horizontal Dividers</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm mb-2">Content above divider</p>
                <hr className="border-border" />
                <p className="text-sm mt-2">Content below divider</p>
              </div>
              
              <div>
                <p className="text-sm mb-2">Another section</p>
                <hr className="border-border border-dashed" />
                <p className="text-sm mt-2">With dashed divider</p>
              </div>
              
              <div>
                <p className="text-sm mb-2">Thicker divider</p>
                <hr className="border-border border-2" />
                <p className="text-sm mt-2">For stronger separation</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Vertical Dividers</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <p className="text-sm">Left content</p>
                <div className="h-8 border-l border-border"></div>
                <p className="text-sm">Right content</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <p className="text-sm">Section A</p>
                <div className="h-8 border-l-2 border-border"></div>
                <p className="text-sm">Section B</p>
                <div className="h-8 border-l border-border border-dashed"></div>
                <p className="text-sm">Section C</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Dividers in Content</h3>
          <Card variant="outlined">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">User Information</h4>
                  <p className="text-sm text-muted-foreground">Basic account details and preferences</p>
                </div>
                
                <hr className="border-border" />
                
                <div>
                  <h4 className="font-medium">Security Settings</h4>
                  <p className="text-sm text-muted-foreground">Password and two-factor authentication</p>
                </div>
                
                <hr className="border-border" />
                
                <div>
                  <h4 className="font-medium">Notifications</h4>
                  <p className="text-sm text-muted-foreground">Email and push notification preferences</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}