import SidenavPartnerPortal from "../patterns/sidenav-partner-portal";
import HeaderPartnerPortalWithTabs from "../patterns/header-partner-portal";

interface UITemplateTabsProps {
  title?: string;
  userName?: string;
  userImage?: string;
  isOpen?: boolean;
  onOpenClick?: () => void;
  onHelpClick?: () => void;
  onNotificationClick?: () => void;
  onProfileClick?: () => void;
  tabs?: Array<{
    value: string;
    label: string;
  }>;
  activeTab?: string;
  onTabChange?: (value: string) => void;
  children?: React.ReactNode;
}

export default function UITemplateTabs({
  title = "Page title",
  userName = "User",
  userImage = "https://github.com/shadcn.png",
  isOpen = true,
  onOpenClick,
  onHelpClick,
  onNotificationClick,
  onProfileClick,
  tabs = [
    { value: "tab1", label: "Label" },
    { value: "tab2", label: "Label" },
    { value: "tab3", label: "Label" },
    { value: "tab4", label: "Label" }
  ],
  activeTab = "tab1",
  onTabChange,
  children
}: UITemplateTabsProps) {
  return (
    <div className="flex h-screen w-full bg-background">
      {/* Left Sidebar */}
      <div className="max-w-[296px] w-[296px] flex-shrink-0">
        <SidenavPartnerPortal />
      </div>
      
      {/* Right Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header with Tabs */}
        <HeaderPartnerPortalWithTabs
          title={title}
          userName={userName}
          userImage={userImage}
          isOpen={isOpen}
          onOpenClick={onOpenClick}
          onHelpClick={onHelpClick}
          onNotificationClick={onNotificationClick}
          onProfileClick={onProfileClick}
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={onTabChange}
        />
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto px-10 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}