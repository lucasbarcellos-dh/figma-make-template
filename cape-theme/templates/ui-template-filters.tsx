import SidenavPartnerPortal from "../patterns/sidenav-partner-portal";
import { HeaderPartnerPortal } from "../patterns/header-partner-portal";
import { Input } from "../components/ui/input";
import { Chip } from "../components/ui/chip";
import { Button } from "../components/ui/button";
import { Search, ChevronDown } from "lucide-react";
import userAvatar from "../assets/user-avatar.png";

interface FilterBarProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  filters?: Array<{
    label: string;
    selected?: boolean;
    onToggle?: () => void;
  }>;
  onAction?: () => void;
  actionLabel?: string;
}

function FilterBar({
  searchValue = "",
  onSearchChange,
  filters = [
    { label: "Filter label", selected: false },
    { label: "Filter label", selected: false }
  ],
  onAction,
  actionLabel = "Action"
}: FilterBarProps) {
  return (
    <div className="flex gap-3 items-center justify-between pb-8 w-full">
      {/* Filters Section */}
      <div className="flex gap-2 items-center flex-1">
        {/* Search Input */}
        <div className="w-80">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              type="text"
              size="medium"
              placeholder="Search for things…"
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="pl-10 rounded-full"
            />
          </div>
        </div>

        {/* Filter Chips */}
        {filters.map((filter, index) => (
          <Chip
            key={index}
            label={filter.label}
            size="large"
            selected={filter.selected}
            onClick={filter.onToggle}
            endIcon={<ChevronDown className="size-4" />}
          />
        ))}
      </div>

      {/* Actions Section */}
      <div className="flex gap-2 items-center">
        <Button 
          variant="primary" 
          size="medium"
          onClick={onAction}
          className="h-10 rounded-full"
        >
          {actionLabel}
        </Button>
      </div>
    </div>
  );
}

interface UITemplateFiltersProps {
  title?: string;
  userName?: string;
  userImage?: string;
  isOpen?: boolean;
  onOpenClick?: () => void;
  onHelpClick?: () => void;
  onNotificationClick?: () => void;
  onProfileClick?: () => void;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  filters?: Array<{
    label: string;
    selected?: boolean;
    onToggle?: () => void;
  }>;
  onAction?: () => void;
  actionLabel?: string;
  children?: React.ReactNode;
}

export default function UITemplateFilters({
  title = "Page title",
  userName = "User",
  userImage = userAvatar,
  isOpen = true,
  onOpenClick,
  onHelpClick,
  onNotificationClick,
  onProfileClick,
  searchValue,
  onSearchChange,
  filters,
  onAction,
  actionLabel,
  children
}: UITemplateFiltersProps) {
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
          {/* Filter Bar */}
          <FilterBar
            searchValue={searchValue}
            onSearchChange={onSearchChange}
            filters={filters}
            onAction={onAction}
            actionLabel={actionLabel}
          />
          
          {/* Content Area */}
          {children}
        </main>
      </div>
    </div>
  );
}