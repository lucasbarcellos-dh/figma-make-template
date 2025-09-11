import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "../components/ui/table";
import { Avatar, AvatarFallback } from "../components/ui/avatar";

export function ContentPage() {
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
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card variant="outlined">
                <CardHeader>
                  <CardTitle>Outlined</CardTitle>
                  <CardDescription>Default card with border</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Card content goes here</p>
                </CardContent>
              </Card>

              <Card variant="filled">
                <CardHeader>
                  <CardTitle>Filled</CardTitle>
                  <CardDescription>Filled background</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Card content goes here</p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Elevated</CardTitle>
                  <CardDescription>Shadow elevation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Card content goes here</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* List Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">List</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Simple List</h3>
            <div className="space-y-2 max-w-md">
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
              </div>
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