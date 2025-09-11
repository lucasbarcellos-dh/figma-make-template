import { 
  ShoppingBag, 
  LayoutDashboard, 
  BarChart3, 
  History, 
  Star, 
  Trophy, 
  TrendingUp, 
  Megaphone, 
  Tag, 
  Menu, 
  Clock, 
  Building2, 
  GraduationCap, 
  Settings,
  LucideIcon
} from "lucide-react";
import { cn } from "../components/ui/utils";
import { DeliveryHeroLogo } from "../assets/delivery-hero-logo";

interface NavItem {
  icon: LucideIcon;
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

interface NavSection {
  title?: string;
  items: NavItem[];
}

function PartnerLogo() {
  return (
    <div className="h-[114px] flex items-center px-8 pt-10 pb-8">
      <DeliveryHeroLogo className="h-7 w-[186.667px] text-primary" />
    </div>
  );
}

function SidenavItem({ icon: Icon, label, selected, onClick }: NavItem) {
  return (
    <div className="relative w-full">
      <div 
        className={cn(
          "flex items-center gap-4 px-8 py-2 cursor-pointer hover:bg-accent/50 transition-colors",
          selected && "text-primary"
        )}
        onClick={onClick}
      >
        <Icon className="h-5 w-5 shrink-0" />
        <span className={cn(
          "flex-1 text-[16px] leading-[1.5]",
          selected ? "font-semibold" : "font-medium"
        )}>
          {label}
        </span>
        {selected && (
          <div className="absolute left-0 top-2 bottom-2 w-[1.5px] bg-primary rounded-[4px]" />
        )}
      </div>
    </div>
  );
}

function SidenavSection({ title, items }: NavSection) {
  return (
    <div className="flex flex-col gap-1">
      {title && (
        <div className="px-8 py-0">
          <p className="text-[14px] leading-[1.45] text-muted-foreground font-medium">
            {title}
          </p>
        </div>
      )}
      <div className="flex flex-col">
        {items.map((item, index) => (
          <SidenavItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function SidenavPartnerPortal() {
  // Navigation data structure
  const navigationSections: NavSection[] = [
    {
      title: "Stay on top",
      items: [
        { icon: ShoppingBag, label: "Live orders", selected: true },
        { icon: LayoutDashboard, label: "Overview" }
      ]
    },
    {
      title: "Monitor your performance",
      items: [
        { icon: BarChart3, label: "Reports" },
        { icon: History, label: "Order history" },
        { icon: Star, label: "Reviews" },
        { icon: Trophy, label: "Rewards" }
      ]
    },
    {
      title: "Grow your business",
      items: [
        { icon: TrendingUp, label: "Smart Marketer" },
        { icon: Megaphone, label: "Advertising" },
        { icon: Tag, label: "Promotions" }
      ]
    },
    {
      title: "Manage your business",
      items: [
        { icon: Menu, label: "Menu" },
        { icon: Clock, label: "Opening times" },
        { icon: Building2, label: "Finances" },
        { icon: GraduationCap, label: "University" },
        { icon: Settings, label: "Settings" }
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <div className="flex h-full w-full bg-white">
          <aside className="flex flex-col w-full bg-white border-r border-[#f4f5f6]">
            {/* Header with Logo */}
            <PartnerLogo />
            
            {/* Navigation Sections */}
            <nav className="flex-1 overflow-y-auto">
              <div className="flex flex-col gap-5">
                {navigationSections.map((section, index) => (
                  <SidenavSection 
                    key={index}
                    title={section.title}
                    items={section.items}
                  />
                ))}
              </div>
            </nav>
          </aside>
        </div>
      </section>
    </div>
  );
}