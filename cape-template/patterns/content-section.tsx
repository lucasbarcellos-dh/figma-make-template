import { Button } from "../components/ui/button";

export default function ContentSectionPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Content Section</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Pattern Overview</h3>
            <p className="text-muted-foreground mb-4">
              The ContentSection pattern provides consistent styling for organizing first-level page content with 
              bordered containers, rounded corners (12px), and section headers with proper spacing.
            </p>
            
            <div className="bg-muted/30 p-4 rounded-lg">
              {/* Example ContentSection structure */}
              <section className="space-y-4">
                <h3 className="text-xl font-semibold mb-3">
                  User Information
                </h3>
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium">Name</p>
                        <p className="text-muted-foreground">John Doe</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-muted-foreground">john@example.com</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button size="small" variant="primary">Edit Profile</Button>
                      <Button size="small" variant="secondary">View Details</Button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Key Features</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Consistent section headers with proper spacing</li>
              <li>12px rounded corners using Cape border radius tokens</li>
              <li>Consistent border styling with --border color token</li>
              <li>Internal padding (24px) for proper content spacing</li>
              <li>For first-level page organization only - no nesting</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}