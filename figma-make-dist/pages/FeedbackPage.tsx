import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert";
import { Skeleton } from "../components/ui/skeleton";

export function FeedbackPage() {
  return (
    <div className="space-y-12">
      {/* Alert Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Alert</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Variants</h3>
            <div className="space-y-3">
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
          </div>
        </div>
      </section>

      {/* Skeleton Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Skeleton</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Basic Usage</h3>
            <div className="space-y-3">
              <div className="space-y-2">
                <Skeleton variant="text" className="w-3/4" />
                <Skeleton variant="text" className="w-1/2" />
              </div>
              
              <Skeleton variant="rectangular" className="w-full h-32" />
              
              <div className="flex gap-2">
                <Skeleton variant="circular" className="w-12 h-12" />
                <Skeleton variant="circular" className="w-16 h-16" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}