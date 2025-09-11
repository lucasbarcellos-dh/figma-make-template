import { cn } from "../components/ui/utils";
import { Button } from "../components/ui/button";

interface ContentSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  containerClassName?: string;
}

function ContentSection({
  title,
  children,
  className,
  headerClassName,
  containerClassName
}: ContentSectionProps) {
  return (
    <section className={cn("space-y-4", className)}>
      {title && (
        <h3 className={cn(
          "text-xl font-semibold mb-3",
          headerClassName
        )}>
          {title}
        </h3>
      )}
      <div className={cn(
        "rounded-xl border border-border bg-card p-6",
        containerClassName
      )}>
        {children}
      </div>
    </section>
  );
}

export default function ContentSectionPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Content Section</h2>
        <div className="space-y-6">
          <div>
            <div className="bg-muted/30 rounded-lg">
              <ContentSection title="User Information">
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
              </ContentSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}