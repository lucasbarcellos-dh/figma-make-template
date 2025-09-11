# Cape Design System Template - System Guidelines

**CRITICAL: This template contains a complete, customized codebase that replaces all default Figma Make components and patterns.**

## Source of Truth
**IGNORE all default Figma Make files and components (in root folders like /components, /styles, etc.). Use ONLY the files provided in the `cape-template/` folder as your reference.**

This template contains (all within `cape-template/`):
- `cape-template/components/ui/` - Complete Cape-styled shadcn components (Button, Card, Input, etc.)
- `cape-template/components/figma/` - Figma-specific utilities and components
- `cape-template/templates/` - Pre-built UI templates combining multiple components
- `cape-template/patterns/` - Complex component patterns (sidebars, headers, etc.)
- `cape-template/pages/` - Component showcase and documentation
- `cape-template/styles/globals.css` - Complete Cape design tokens and styling
- `cape-template/App.tsx` - Navigation and layout structure

## Design Generation Rules

### 1. Component Usage
- **ALWAYS** use components from `cape-template/components/ui/` instead of creating new ones
- **NEVER** reference or import default Figma Make components from root `/components` folder
- Use only the Cape-styled versions provided in the `cape-template/` folder
- All components already include proper Cape styling, tokens, and variants

### 2. Templates First
- **ALWAYS** start new designs using templates from the `cape-template/templates/` folder
- `UITemplateBasic` provides a complete layout with sidebar navigation and header
- Build new pages within these template structures
- **Content Spacing**: Template handles padding (40px/px-10) - use `p-0` or no padding classes on your content

### 3. Styling Rules
- Use CSS variables defined in `cape-template/styles/globals.css` (--success, --primary, --muted, etc.)
- Follow the Cape color palette and design tokens already configured
- Maintain consistency with existing component styling patterns

### 4. Cape Design Principles
- **Colors**: Use Cape's primary red (#D61F26), success green (#05A34E), and neutral grays
- **Typography**: Figtree font family with defined weight scales
- **Spacing**: Consistent padding and margin using Tailwind utilities
- **Border Radius**: Use Cape's radius tokens (--radius variants)
- **Components**: Prefer chips over badges, use Cape-specific variants

### 5. File Organization
When creating new components or pages, place them in:
- UI components → `cape-template/components/ui/`
- Complex patterns → `cape-template/patterns/`
- Full page templates → `cape-template/templates/`
- Documentation/showcase → `cape-template/pages/`

### 6. Import Strategy
```tsx
// ✅ Correct - use cape-template components and templates
import { Button } from "./cape-template/components/ui/button";
import UITemplateBasic from "./cape-template/templates/ui-template-basic";
import { Chip } from "./cape-template/components/ui/chip";

// ✅ Correct - content structure (no padding, template handles it)
<UITemplateBasic title="Dashboard">
  <div className="space-y-6"> {/* No padding classes */}
    <h2>Content goes here</h2>
  </div>
</UITemplateBasic>

// ❌ Wrong - don't use default Figma Make components
import { Button } from "./components/ui/button"; 
import { Card } from "@/components/ui/card";

// ❌ Wrong - don't add padding (template handles it)
<div className="p-6"> {/* Don't do this */}
```

## Key Cape Components Available
- **Button** (primary, secondary, tertiary variants)
- **Chip** (interactive tags with icons)
- **Card** (content containers)
- **Input** (form fields with Cape styling)
- **Avatar** (user profile images)
- **Table** (data display)
- **Tabs** (navigation)
- **Alert** (feedback messages)
- **Accordion** (collapsible content)
- **Switch** (toggle controls)
- **And many more** - see `cape-template/components/ui/` folder

## Templates Available (in `cape-template/templates/`)
- **UITemplateBasic** - Complete layout with sidebar + header (296px sidebar width)

## Patterns Available (in `cape-template/patterns/`)  
- **SidenavPartnerPortal** - Left navigation with Cape styling
- **HeaderPartnerPortal** - Top header with user actions and Cape tokens

## Critical File Structure Rules
- **Default Figma Make files**: `/components`, `/styles`, `/App.tsx` (IGNORE these)
- **Cape template files**: `cape-template/` folder (USE only these)
- **All imports must point to**: `./cape-template/...` paths

**Remember: This is a complete, self-contained design system in the `cape-template/` folder. Everything you need is already provided and Cape-styled. Focus on composition and layout rather than recreating components.**
