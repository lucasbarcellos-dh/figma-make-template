import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../components/ui/tooltip";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerBody, DrawerFooter, DrawerClose } from "../components/ui/drawer";
import { List, ListItem, ListItemText } from "../components/ui/list";
import { Button } from "../components/ui/button";
import { ContentSection } from "../components/ui/content-section";
import { Info, X, Users, Bell, Shield, CreditCard, HelpCircle } from "lucide-react";

export function OverlayPage() {
  return (
    <TooltipProvider>
      <div className="space-y-12">
        <ContentSection title="Basic Tooltip" noBorder>
          <div className="flex gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                This is a tooltip
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="primary" status="error">Error</Button>
              </TooltipTrigger>
              <TooltipContent variant="error">
                Error tooltip variant
              </TooltipContent>
            </Tooltip>
          </div>
        </ContentSection>

        <ContentSection title="Tooltip with Icon" noBorder>
          <div className="flex items-center gap-2">
            <span>Help text</span>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-muted text-muted-foreground hover:bg-accent">
                  <Info className="w-3 h-3" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                Additional information
              </TooltipContent>
            </Tooltip>
          </div>
        </ContentSection>

        <ContentSection title="Drawer" noBorder>
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button variant="secondary">Open Settings</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <DrawerTitle>Settings</DrawerTitle>
                    <DrawerDescription>
                      Configure your preferences
                    </DrawerDescription>
                  </div>
                  <DrawerClose asChild>
                    <Button variant="tertiary" size="small">
                      <X className="h-4 w-4 text-foreground" />
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerHeader>
              <DrawerBody>
                <List>
                  <ListItem onClick={() => console.log('Account clicked')}>
                    <Users className="h-5 w-5 text-foreground" />
                    <ListItemText
                      primary="Account Settings"
                      secondary="Manage your profile and preferences"
                    />
                  </ListItem>
                  <ListItem onClick={() => console.log('Notifications clicked')}>
                    <Bell className="h-5 w-5 text-foreground" />
                    <ListItemText
                      primary="Notifications"
                      secondary="Configure alerts and updates"
                    />
                  </ListItem>
                  <ListItem onClick={() => console.log('Security clicked')}>
                    <Shield className="h-5 w-5 text-foreground" />
                    <ListItemText
                      primary="Security & Privacy"
                      secondary="Password, two-factor authentication"
                    />
                  </ListItem>
                  <ListItem onClick={() => console.log('Billing clicked')}>
                    <CreditCard className="h-5 w-5 text-foreground" />
                    <ListItemText
                      primary="Billing & Plans"
                      secondary="Manage subscriptions and payments"
                    />
                  </ListItem>
                  <ListItem onClick={() => console.log('Support clicked')} divider={false}>
                    <HelpCircle className="h-5 w-5 text-foreground" />
                    <ListItemText
                      primary="Help & Support"
                      secondary="Documentation, contact support"
                    />
                  </ListItem>
                </List>
              </DrawerBody>
              <DrawerFooter>
                <div className="flex justify-end gap-2">
                  <DrawerClose asChild>
                    <Button variant="secondary">Cancel</Button>
                  </DrawerClose>
                  <Button variant="primary">Save Changes</Button>
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </ContentSection>
      </div>
    </TooltipProvider>
  );
}