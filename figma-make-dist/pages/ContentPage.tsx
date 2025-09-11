import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "../components/ui/table";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Chip } from "../components/ui/chip";
import TileCard from "../components/ui/tile-card";
import { PromptCard } from "../components/ui/prompt-card";
import { List, ListItem, ListItemText } from "../components/ui/list";

export function ContentPage() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      {/* Table Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Table</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Basic Usage</h3>
            <Table size="medium">
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell>Developer</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>Designer</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Bordered</h3>
            <Table bordered size="small">
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>MacBook Pro</TableCell>
                  <TableCell>$1,999</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>iPhone 15</TableCell>
                  <TableCell>$799</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Card</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Basic Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Tile Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <TileCard 
                variant="default"
                title="Analytics"
              />
              <TileCard 
                variant="default"
                title="User Management"
              />
              <TileCard 
                variant="minimal"
                title="Settings"
              />
              <TileCard 
                variant="minimal"
                title="Reports"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Prompt Cards</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PromptCard
                  variant="vertical"
                  title="Boost your visibility"
                  description="Raise your restaurant's position on the list for more orders, better visibility, and greater awareness."
                  primaryAction={{
                    label: "Get started",
                    onClick: () => console.log("Primary action clicked")
                  }}
                  secondaryAction={{
                    label: "Learn more",
                    onClick: () => console.log("Secondary action clicked")
                  }}
                />
                <PromptCard
                  variant="vertical"
                  title="Enable notifications"
                  description="Stay updated with real-time alerts about your orders, customer feedback, and business insights."
                  primaryAction={{
                    label: "Enable now",
                    onClick: () => console.log("Enable clicked")
                  }}
                />
              </div>
              
              <PromptCard
                variant="horizontal"
                title="Complete your profile"
                description="Add more details to your business profile to attract more customers and improve search ranking."
                primaryAction={{
                  label: "Complete profile",
                  onClick: () => console.log("Complete profile clicked")
                }}
                secondaryAction={{
                  label: "Skip",
                  onClick: () => console.log("Skip clicked")
                }}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Interactive Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["Option A", "Option B", "Option C"].map((option) => (
                <Card
                  key={option}
                  variant="outlined"
                  selected={selectedCard === option}
                  onSelectionChange={(selected) => setSelectedCard(selected ? option : null)}
                  className="cursor-pointer"
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
            <p className="text-sm text-muted-foreground mt-2">
              Selected: {selectedCard || "None"}
            </p>
          </div>
        </div>
      </section>

      {/* List Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">List</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-3">List Sizes</h3>
            <div className="space-y-6">
              <div className="max-w-md">
                <p className="text-sm text-muted-foreground mb-3">Small Size</p>
                <List size="small">
                  <ListItem>
                    <Avatar size="small">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <ListItemText 
                      primary="John Doe" 
                      secondary="Software Engineer" 
                    />
                  </ListItem>
                  <ListItem>
                    <Avatar size="small">
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <ListItemText 
                      primary="Jane Smith" 
                      secondary="UX Designer" 
                    />
                  </ListItem>
                </List>
              </div>

              <div className="max-w-md">
                <p className="text-sm text-muted-foreground mb-3">Medium Size (Default)</p>
                <List size="medium">
                  <ListItem>
                    <Avatar>
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <ListItemText 
                      primary="Mike Johnson" 
                      secondary="Product Manager" 
                    />
                  </ListItem>
                  <ListItem>
                    <Avatar>
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <ListItemText 
                      primary="Alice Brown" 
                      secondary="DevOps Engineer" 
                    />
                  </ListItem>
                </List>
              </div>

              <div className="max-w-md">
                <p className="text-sm text-muted-foreground mb-3">Large Size</p>
                <List size="large">
                  <ListItem>
                    <Avatar size="large">
                      <AvatarFallback>CD</AvatarFallback>
                    </Avatar>
                    <ListItemText 
                      primary="Carol Davis" 
                      secondary="Senior Developer" 
                    />
                  </ListItem>
                  <ListItem>
                    <Avatar size="large">
                      <AvatarFallback>DL</AvatarFallback>
                    </Avatar>
                    <ListItemText 
                      primary="David Lee" 
                      secondary="UI Designer" 
                    />
                  </ListItem>
                </List>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Interactive Lists</h3>
            <div className="space-y-6">
              <div className="max-w-md">
                <p className="text-sm text-muted-foreground mb-3">Clickable Items</p>
                <List>
                  <ListItem onClick={() => console.log("Clicked John")}>
                    <Avatar size="small">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <ListItemText 
                      primary="John Doe" 
                      secondary="Click to view profile" 
                    />
                  </ListItem>
                  <ListItem onClick={() => console.log("Clicked Jane")}>
                    <Avatar size="small">
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <ListItemText 
                      primary="Jane Smith" 
                      secondary="Click to view profile" 
                    />
                  </ListItem>
                </List>
              </div>

              <div className="max-w-md">
                <p className="text-sm text-muted-foreground mb-3">With Secondary Actions</p>
                <List>
                  <ListItem 
                    secondaryAction={
                      <Button size="xsmall" variant="tertiary">
                        Edit
                      </Button>
                    }
                  >
                    <Avatar size="small">
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <ListItemText 
                      primary="Mike Johnson" 
                      secondary="Product Manager" 
                    />
                  </ListItem>
                  <ListItem 
                    secondaryAction={
                      <Button size="xsmall" variant="tertiary">
                        Edit
                      </Button>
                    }
                  >
                    <Avatar size="small">
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <ListItemText 
                      primary="Alice Brown" 
                      secondary="DevOps Engineer" 
                    />
                  </ListItem>
                </List>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">List States</h3>
            <div className="max-w-md">
              <List>
                <ListItem>
                  <Avatar size="small">
                    <AvatarFallback>N1</AvatarFallback>
                  </Avatar>
                  <ListItemText 
                    primary="Normal Item" 
                    secondary="Default state" 
                  />
                </ListItem>
                <ListItem selected>
                  <Avatar size="small">
                    <AvatarFallback>S1</AvatarFallback>
                  </Avatar>
                  <ListItemText 
                    primary="Selected Item" 
                    secondary="Currently selected" 
                  />
                </ListItem>
                <ListItem disabled>
                  <Avatar size="small">
                    <AvatarFallback>D1</AvatarFallback>
                  </Avatar>
                  <ListItemText 
                    primary="Disabled Item" 
                    secondary="Cannot be interacted with" 
                  />
                </ListItem>
              </List>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Without Dividers</h3>
            <div className="max-w-md">
              <List divider={false}>
                <ListItem>
                  <Avatar size="small">
                    <AvatarFallback>T1</AvatarFallback>
                  </Avatar>
                  <ListItemText 
                    primary="Task 1" 
                    secondary="No divider below" 
                  />
                </ListItem>
                <ListItem>
                  <Avatar size="small">
                    <AvatarFallback>T2</AvatarFallback>
                  </Avatar>
                  <ListItemText 
                    primary="Task 2" 
                    secondary="Clean design" 
                  />
                </ListItem>
                <ListItem>
                  <Avatar size="small">
                    <AvatarFallback>T3</AvatarFallback>
                  </Avatar>
                  <ListItemText 
                    primary="Task 3" 
                    secondary="Seamless appearance" 
                  />
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </section>

      {/* Divider Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Divider</h2>
        
        <div className="space-y-6">
          <div className="max-w-md">
            <h3 className="text-lg font-medium mb-3">Basic Usage</h3>
            <div>
              <p className="text-sm mb-2">Content above</p>
              <hr className="border-border" />
              <p className="text-sm mt-2">Content below</p>
            </div>
          </div>

          <div className="max-w-md">
            <h3 className="text-lg font-medium mb-3">Vertical</h3>
            <div className="flex items-center space-x-4">
              <p className="text-sm">Left content</p>
              <div className="h-8 border-l border-border"></div>
              <p className="text-sm">Right content</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}