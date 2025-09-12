import { useState } from "react";
import { Menu, Component, Layout, Layers } from "lucide-react";

// Import all page components
import { OverviewPage } from "./pages/OverviewPage";
import { ActionPage } from "./pages/ActionPage";
import { FormPage } from "./pages/FormPage";
import { ContentPage } from "./pages/ContentPage";
import { OverlayPage } from "./pages/OverlayPage";
import { FeedbackPage } from "./pages/FeedbackPage";
import { NavigationPage } from "./pages/NavigationPage";

// Import patterns
import SidenavPartnerPortal from "./patterns/sidenav-partner-portal";
import HeaderPartnerPortal from "./patterns/header-partner-portal";
import ContentSectionPage from "./patterns/content-section";

// Import templates
import UITemplateBasic from "./templates/ui-template-basic";

type NavSection = "components" | "patterns" | "templates";

interface NavigationItem {
  id: string;
  label: string;
  component: React.ComponentType;
  section: NavSection;
}

function App() {
  // Navigation state
  const [currentPage, setCurrentPage] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    // Components section
    { id: "overview", label: "Overview", component: OverviewPage, section: "components" },
    { id: "action", label: "Action", component: ActionPage, section: "components" },
    { id: "form", label: "Form", component: FormPage, section: "components" },
    { id: "content", label: "Content", component: ContentPage, section: "components" },
    { id: "overlay", label: "Overlay", component: OverlayPage, section: "components" },
    { id: "feedback", label: "Feedback", component: FeedbackPage, section: "components" },
    { id: "navigation", label: "Navigation", component: NavigationPage, section: "components" },
    
    // Patterns section
    { id: "patterns-showcase", label: "Content Sections", component: ContentSectionPage, section: "patterns" },
    { id: "sidenav-partner", label: "Partner Portal Sidenav", component: SidenavPartnerPortal, section: "patterns" },
    { id: "header-partner", label: "Partner Portal Header", component: HeaderPartnerPortal, section: "patterns" },
    
    // Templates section
    { id: "ui-template-basic", label: "UI Template Basic", component: UITemplateBasic, section: "templates" },
  ];

  const componentItems = navigationItems.filter(item => item.section === "components");
  const patternItems = navigationItems.filter(item => item.section === "patterns");
  const templateItems = navigationItems.filter(item => item.section === "templates");

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

  const renderNavSection = (title: string, icon: React.ReactNode, items: NavigationItem[]) => {
    if (items.length === 0) return null;
    
    return (
      <div className="space-y-1">
        <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {icon}
          <span>{title}</span>
        </div>
        {items.map((item) => (
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
          </button>
        ))}
      </div>
    );
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
            <h2 className="text-lg font-semibold">Figma Make template</h2>
          </div>
          
          <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
            {renderNavSection(
              "Components",
              <Component className="w-4 h-4" />,
              componentItems
            )}
            
            {renderNavSection(
              "Patterns",
              <Layout className="w-4 h-4" />,
              patternItems
            )}
            
            {renderNavSection(
              "Templates",
              <Layers className="w-4 h-4" />,
              templateItems
            )}
          </nav>
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