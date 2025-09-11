import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert";
import { Skeleton } from "../components/ui/skeleton";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";

export function FeedbackPage() {
  return (
    <div className="space-y-16">
      {/* Alert Section */}
      <section className="space-y-4">
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

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Alert Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">System Messages</h4>
              <Alert variant="info">
                <AlertTitle>System Maintenance</AlertTitle>
                <AlertDescription>Scheduled maintenance will occur tonight from 2-4 AM UTC. Some features may be temporarily unavailable.</AlertDescription>
              </Alert>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Form Feedback</h4>
              <Alert variant="success">
                <AlertTitle>Profile Updated</AlertTitle>
                <AlertDescription>Your profile changes have been saved successfully.</AlertDescription>
              </Alert>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Validation Issues</h4>
              <Alert variant="error">
                <AlertTitle>Validation Failed</AlertTitle>
                <AlertDescription>Please check the highlighted fields and correct any errors before submitting.</AlertDescription>
              </Alert>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Important Notes</h4>
              <Alert variant="warning">
                <AlertTitle>Data Export Limit</AlertTitle>
                <AlertDescription>You can export up to 10,000 records per request. Larger exports will be split into multiple files.</AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </section>

      {/* Skeleton Section */}
      <section className="space-y-4">
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

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Table Loading Example</h3>
          <div className="border rounded-lg">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <Skeleton variant="text" className="w-32 h-6" />
                <Skeleton variant="rounded" className="w-20 h-8" />
              </div>
            </div>
            <div className="divide-y">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="p-4 flex items-center space-x-4">
                  <Skeleton variant="circular" className="w-6 h-6" />
                  <div className="flex-1 space-y-2">
                    <Skeleton variant="text" className="w-1/4 h-4" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Skeleton variant="text" className="w-1/3 h-4" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Skeleton variant="text" className="w-1/5 h-4" />
                  </div>
                  <Skeleton variant="rounded" className="w-16 h-6" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Form Loading Example</h3>
          <Card variant="outlined" className="max-w-md">
            <CardHeader>
              <div className="space-y-2">
                <Skeleton variant="text" className="w-1/2 h-6" />
                <Skeleton variant="text" className="w-3/4 h-4" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Skeleton variant="text" className="w-16 h-4" />
                <Skeleton variant="rounded" className="w-full h-10" />
              </div>
              <div className="space-y-2">
                <Skeleton variant="text" className="w-20 h-4" />
                <Skeleton variant="rounded" className="w-full h-10" />
              </div>
              <div className="space-y-2">
                <Skeleton variant="text" className="w-24 h-4" />
                <Skeleton variant="rounded" className="w-full h-20" />
              </div>
              <div className="flex items-center space-x-2">
                <Skeleton variant="rounded" className="w-4 h-4" />
                <Skeleton variant="text" className="w-32 h-4" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Dashboard Loading Example</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <Card key={item} variant="outlined">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Skeleton variant="circular" className="w-8 h-8" />
                      <Skeleton variant="text" className="w-16 h-4" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton variant="text" className="w-3/4 h-5" />
                      <Skeleton variant="text" className="w-1/2 h-8" />
                    </div>
                    <Skeleton variant="rounded" className="w-full h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}