import { 
  HelpCircle, 
  Bell
} from "lucide-react";
import { Chip } from "../components/ui/chip";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
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

export default function HeaderPartnerPortal({
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
    <div className="flex flex-col gap-6 w-full px-10">
      <div className="flex items-start justify-between gap-4 w-full">
        {/* Start - Title Section */}
        <div className="flex-1 pt-10 pb-0">
          <h1 className="text-[36px] font-bold text-[#141415] leading-[1.25]" style={{ fontFamily: 'Figtree, sans-serif' }}>
            {title}
          </h1>
        </div>

        {/* Actions - Right Side */}
        <div className="flex items-center gap-2 pt-10 pb-0">
          {/* Open Status Chip */}
          <Chip 
            label="Open"
            size="medium"
            selected={false}
            startIcon={
              <div 
                className="size-4 rounded-full" 
                style={{ backgroundColor: isOpen ? 'var(--success)' : '#9ca3af' }} 
              />
            }
            onClick={onOpenClick}
            className="min-h-[48px] px-4 bg-[rgba(255,255,255,0.01)] border-[#e9eaec] rounded-[200px] gap-2.5 [&_span]:text-[16px] [&_span]:font-semibold"
            style={{ fontFamily: 'Figtree, sans-serif' }}
          />

          {/* Help Chip */}
          <Chip 
            label="Help"
            size="medium"
            selected={false}
            startIcon={<HelpCircle style={{ width: '20px', height: '20px' }} />}
            onClick={onHelpClick}
            className="min-h-[48px] px-4 bg-[rgba(255,255,255,0.01)] border-[#e9eaec] rounded-[200px] gap-2.5 [&_span]:text-[16px] [&_span]:font-semibold"
            style={{ fontFamily: 'Figtree, sans-serif' }}
          />

          {/* Notification Button */}
          <button
            onClick={onNotificationClick}
            className="relative min-h-[48px] min-w-[48px] max-h-[48px] max-w-[48px] rounded-[200px] border border-[#e9eaec] bg-[rgba(255,255,255,0.01)] flex items-center justify-center p-3 hover:bg-accent transition-colors"
          >
            <Bell className="size-6" />
          </button>

          {/* User Avatar */}
          <Avatar 
            className="min-h-[48px] min-w-[48px] max-h-[48px] max-w-[48px] cursor-pointer"
            onClick={onProfileClick}
          >
            <AvatarImage src={userAvatar} alt="User" />
            <AvatarFallback className="bg-[#ccc0dd] text-[#141415] font-medium">
              {userName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}