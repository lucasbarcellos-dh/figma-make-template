import { Button } from "../components/ui/button";
import { Chip } from "../components/ui/chip";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Plus, Check } from "lucide-react";
import userAvatar from "../assets/user-avatar.png";

export function ActionPage() {
  return (
    <div className="space-y-12">
      {/* Button Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Button</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Variants</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Sizes</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">States</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary" loading>Loading</Button>
              <Button variant="secondary" disabled>Disabled</Button>
              <Button variant="primary" status="error">Error</Button>
              <Button variant="primary" startIcon={<Plus className="size-4" />}>With Icon</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Chip Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Chip</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Basic Usage</h3>
            <div className="flex flex-wrap gap-2">
              <Chip label="Default" />
              <Chip label="Selected" selected />
              <Chip label="With Icon" startIcon={<Check className="size-4" />} />
              <Chip label="Deletable" onDelete={() => console.log('Deleted')} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Sizes</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Chip size="small" label="Small" />
              <Chip size="medium" label="Medium" />
              <Chip size="large" label="Large" />
            </div>
          </div>
        </div>
      </section>

      {/* Avatar Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-medium">Avatar</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Sizes</h3>
            <div className="flex items-center gap-4">
              <Avatar size="small">
                <AvatarFallback size="small">S</AvatarFallback>
              </Avatar>
              <Avatar size="medium">
                <AvatarFallback size="medium">M</AvatarFallback>
              </Avatar>
              <Avatar size="large">
                <AvatarFallback size="large">L</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Variants</h3>
            <div className="flex items-center gap-4">
              <Avatar variant="filled">
                <AvatarFallback size="medium">F</AvatarFallback>
              </Avatar>
              <Avatar variant="outlined">
                <AvatarFallback size="medium">O</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src={userAvatar} alt="User" />
                <AvatarFallback size="medium">U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}