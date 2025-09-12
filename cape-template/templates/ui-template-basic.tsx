import SidenavPartnerPortal from "../patterns/sidenav-partner-portal";
import { HeaderPartnerPortal } from "../patterns/header-partner-portal";

interface UITemplateBasicProps {
  title?: string;
  userName?: string;
  userImage?: string;
  isOpen?: boolean;
  onOpenClick?: () => void;
  onHelpClick?: () => void;
  onNotificationClick?: () => void;
  onProfileClick?: () => void;
  children?: React.ReactNode;
}

export default function UITemplateBasic({
  title = "Page title",
  userName = "User",
  userImage = "https://github.com/shadcn.png",
  isOpen = true,
  onOpenClick,
  onHelpClick,
  onNotificationClick,
  onProfileClick,
  children
}: UITemplateBasicProps) {
  return (
    <div className="flex h-screen w-full bg-background">
      {/* Left Sidebar */}
      <div className="max-w-[296px] w-[296px] flex-shrink-0">
        <SidenavPartnerPortal />
      </div>
      
      {/* Right Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <HeaderPartnerPortal
          title={title}
          userName={userName}
          userImage={userImage}
          isOpen={isOpen}
          onOpenClick={onOpenClick}
          onHelpClick={onHelpClick}
          onNotificationClick={onNotificationClick}
          onProfileClick={onProfileClick}
        />
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto px-10 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}