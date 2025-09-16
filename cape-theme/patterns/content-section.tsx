import MetricCard from "../components/ui/metric-card";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "../components/ui/table";
import { List, ListItem, ListItemText } from "../components/ui/list";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { ContentSection } from "../components/ui/content-section";

export default function ContentSectionPage() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-medium">Content Section</h2>
        <p className="text-muted-foreground mb-8">
          Use ContentSection for organizing first-level page content. Examples below show correct usage patterns.
        </p>
        
        <div className="space-y-8">
          {/* Cards Example - CORRECT */}
          <div className="bg-muted/30 p-4 rounded-lg">
            <ContentSection 
              title="Key Metrics" 
              description="Performance overview for this month"
              noBorder
            >
              <div className="grid grid-cols-4 gap-4">
                <MetricCard
                  title="Total Revenue"
                  value="$4,230"
                  variation="+12.5%"
                  subtitle="This month"
                  footer="Last updated: 1 hour ago"
                  isPositive={true}
                />
                <MetricCard
                  title="Orders"
                  value="1,248"
                  unit="orders"
                  variation="+8.2%"
                  subtitle="This month"
                  footer="Last updated: 1 hour ago"
                  isPositive={true}
                />
                <MetricCard
                  title="Active Users"
                  value="892"
                  unit="users"
                  variation="-2.1%"
                  subtitle="This week"
                  footer="Last updated: 1 hour ago"
                  isPositive={false}
                />
                <MetricCard
                  title="Conversion Rate"
                  value="3.4"
                  unit="%"
                  variation="+0.8%"
                  subtitle="This month"
                  footer="Last updated: 1 hour ago"
                  isPositive={true}
                />
              </div>
            </ContentSection>
          </div>

          {/* Table Example - CORRECT */}
          <div className="bg-muted/30 p-4 rounded-lg">
            <ContentSection title="Recent Orders">
              {/* Table renders directly inside ContentSection - no extra container needed */}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>ORD-001</TableCell>
                    <TableCell>Alice Johnson</TableCell>
                    <TableCell>$245.00</TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell>2024-01-15</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ORD-002</TableCell>
                    <TableCell>Bob Smith</TableCell>
                    <TableCell>$189.50</TableCell>
                    <TableCell>Processing</TableCell>
                    <TableCell>2024-01-14</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ORD-003</TableCell>
                    <TableCell>Carol Davis</TableCell>
                    <TableCell>$356.25</TableCell>
                    <TableCell>Shipped</TableCell>
                    <TableCell>2024-01-13</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ContentSection>
          </div>

          {/* List Example - CORRECT */}
          <div className="bg-muted/30 p-4 rounded-lg">
            <ContentSection title="Recent Activity">
              {/* List renders directly inside ContentSection - no extra container needed */}
              <List>
                <ListItem>
                  <Avatar size="small">
                    <AvatarFallback>🛒</AvatarFallback>
                  </Avatar>
                  <ListItemText 
                    primary="New order received" 
                    secondary="Order #ORD-001 from Alice Johnson" 
                  />
                  <span className="text-sm text-muted-foreground">2 minutes ago</span>
                </ListItem>
                <ListItem>
                  <Avatar size="small">
                    <AvatarFallback>✅</AvatarFallback>
                  </Avatar>
                  <ListItemText 
                    primary="Payment processed" 
                    secondary="Payment for order #ORD-003 completed" 
                  />
                  <span className="text-sm text-muted-foreground">15 minutes ago</span>
                </ListItem>
                <ListItem divider={false}>
                  <Avatar size="small">
                    <AvatarFallback>👤</AvatarFallback>
                  </Avatar>
                  <ListItemText 
                    primary="User registered" 
                    secondary="New user David Wilson signed up" 
                  />
                  <span className="text-sm text-muted-foreground">1 hour ago</span>
                </ListItem>
              </List>
            </ContentSection>
          </div>
        </div>
      </section>
    </div>
  );
}