import { 
  HelpCircle, 
  Bell
} from "lucide-react";
import { Chip } from "../components/ui/chip";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import userAvatar from "../assets/user-avatar.png";

interface HeaderPartnerPortalProps {
  title?: string;
  userName?: string;
  userImage?: string;
  isOpen?: boolean;
  onOpenClick?: () => void;
  onHelpClick?: () => void;
  onNotificationClick?: () => void;
  onProfileClick?: () => void;
}

interface HeaderPartnerPortalWithTabsProps extends HeaderPartnerPortalProps {
  tabs?: Array<{
    value: string;
    label: string;
  }>;
  activeTab?: string;
  onTabChange?: (value: string) => void;
}

export function HeaderPartnerPortal({
  title = "Page title",
  userName = "User",
  userImage = "https://github.com/shadcn.png",
  isOpen = true,
  onOpenClick,
  onHelpClick,
  onNotificationClick,
  onProfileClick
}: HeaderPartnerPortalProps) {
  return (
    <div className="flex flex-col w-full px-10">
      <div className="flex items-start justify-between gap-4 w-full">
        {/* Start - Title Section */}
        <div className="flex-1 pt-10 pb-0">
          <h1 className="text-[36px] font-bold text-foreground leading-[1.25]" style={{ fontFamily: 'Figtree, sans-serif' }}>
            {title}
          </h1>
        </div>

        {/* Actions - Right Side */}
        <div className="flex items-center gap-2 pt-10 pb-4">
          {/* Open Status Chip */}
          <Chip 
            label="Open"
            size="medium"
            selected={false}
            startIcon={
              <div 
                className="size-4 rounded-full" 
                style={{ backgroundColor: isOpen ? 'var(--success)' : 'var(--muted-foreground)' }} 
              />
            }
            onClick={onOpenClick}
            className="min-h-[48px] px-4 bg-chip-background-default border-border rounded-[200px] gap-2.5 [&_span]:text-[16px] [&_span]:font-semibold"
            style={{ fontFamily: 'Figtree, sans-serif' }}
          />

          {/* Help Chip */}
          <Chip 
            label="Help"
            size="medium"
            selected={false}
            startIcon={<HelpCircle style={{ width: '20px', height: '20px' }} />}
            onClick={onHelpClick}
            className="min-h-[48px] px-4 bg-chip-background-default border-border rounded-[200px] gap-2.5 [&_span]:text-[16px] [&_span]:font-semibold"
            style={{ fontFamily: 'Figtree, sans-serif' }}
          />

          {/* Notification Button */}
          <button
            onClick={onNotificationClick}
            className="relative min-h-[48px] min-w-[48px] max-h-[48px] max-w-[48px] rounded-[200px] border border-border bg-chip-background-default flex items-center justify-center p-3 hover:bg-accent transition-colors"
          >
            <Bell className="size-6" />
          </button>

          {/* User Avatar */}
          <Avatar 
            className="min-h-[48px] min-w-[48px] max-h-[48px] max-w-[48px] cursor-pointer"
            onClick={onProfileClick}
          >
            <AvatarImage src={userAvatar} alt="User" />
            <AvatarFallback className="bg-accent text-foreground font-medium">
              {userName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default function HeaderPartnerPortalWithTabs({
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
  onTabChange
}: HeaderPartnerPortalWithTabsProps) {
  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <div>
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
      </div>

      {/* Tabs Section */}
      <div>
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full px-10">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}