import { useState } from "react";
import { Menu } from "lucide-react";

// Import all page components
import { OverviewPage } from "./pages/OverviewPage";
import { ActionPage } from "./pages/ActionPage";
import { FormPage } from "./pages/FormPage";
import { ContentPage } from "./pages/ContentPage";
import { OverlayPage } from "./pages/OverlayPage";
import { FeedbackPage } from "./pages/FeedbackPage";
import { NavigationPage } from "./pages/NavigationPage";

function App() {
  // Navigation state
  const [currentPage, setCurrentPage] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationItems = [
    { id: "overview", label: "Overview", component: OverviewPage },
    { id: "action", label: "Action", status: "completed", component: ActionPage },
    { id: "form", label: "Form", status: "completed", component: FormPage },
    { id: "content", label: "Content", status: "completed", component: ContentPage },
    { id: "overlay", label: "Overlay", status: "completed", component: OverlayPage },
    { id: "feedback", label: "Feedback", status: "completed", component: FeedbackPage },
    { id: "navigation", label: "Navigation", status: "completed", component: NavigationPage },
  ];

  const navigateToPage = (pageId: string) => {
    setCurrentPage(pageId);
    setSidebarOpen(false); // Close mobile sidebar after navigation
  };

  const renderCurrentPage = () => {
    const currentItem = navigationItems.find(item => item.id === currentPage);
    if (currentItem && currentItem.component) {
      const PageComponent = currentItem.component;
      return <PageComponent />;
    }
    return <OverviewPage />; // fallback
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform transition-transform duration-200 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Components</h2>
          </div>
          
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToPage(item.id)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2 text-left rounded-md transition-colors
                  ${currentPage === item.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-accent hover:text-accent-foreground'
                  }
                `}
              >
                <span className="flex-1">{item.label}</span>
                {item.status === 'completed' && (
                  <span className="text-xs bg-success/20 text-success px-2 py-0.5 rounded-full">
                    ✓
                  </span>
                )}
              </button>
            ))}
          </nav>
          
          <div className="p-4 border-t">
            <p className="text-xs text-muted-foreground">
              6/6 Component categories completed
            </p>
            <div className="w-full bg-secondary rounded-full h-2 mt-2">
              <div className="bg-success h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 lg:ml-0">
        {/* Mobile header */}
        <header className="lg:hidden bg-card border-b p-4 flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-accent rounded-md"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-semibold">Cape Design System</h1>
        </header>

        <div className="p-8 max-w-6xl mx-auto">
          {renderCurrentPage()}
        </div>
      </main>
    </div>
  );
}

export default App;