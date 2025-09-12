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
- `UITemplateTabs` adds tab navigation below the header
- `UITemplateFilters` includes a filter bar with search input, filter chips, and action button
- Build new pages within these template structures
- **Content Spacing**: Template handles padding - use `p-0` or no padding classes on your content

### 3. Content Organization with Sections
- **ALWAYS** organize first-level page content using the `ContentSection` pattern from `cape-template/patterns/content-section`
- **NEVER** add extra containers around content sections or change its styling
- **Use ContentSection for top-level page organization only** - content inside sections doesn't need additional ContentSection wrapping
- **Never create manual content containers** for first-level content - use ContentSection instead
- **Container Guidelines**: When a section contains already-contained elements (Cards, Tables, etc.), render them directly without additional container wrapping since they are already self-contained
- **Spacing Guidelines**: Components with internal padding (Tables, Lists, etc.) should be rendered directly without additional spacing containers, as they already provide proper internal spacing
- **REFERENCE EXAMPLES**: See `cape-template/patterns/content-section` for concrete examples of correct structure with Cards, Tables, and Lists

### 4. Styling Rules
- **CRITICAL**: Always import Cape styles first: `import "./cape-template/styles/globals.css";`
- Use CSS variables defined in `cape-template/styles/globals.css` (--success, --primary, --muted, etc.)
- Follow the Cape color palette and design tokens already configured
- Maintain consistency with existing component styling patterns
- **Font**: All text should use Figtree font family (defined in Cape globals.css)
- **NEVER modify global navigation pattern styling**: Core navigation patterns (SidenavPartnerPortal, HeaderPartnerPortal) must be preserved exactly as written
- **Pattern Style Preservation**: Do not change background colors, borders, or spacing in existing patterns - they use Cape design tokens correctly

### 5. Cape Design Principles
- **Colors**: Use Cape's primary red (#D61F26), success green (#05A34E), and neutral grays
- **Typography**: Figtree font family with defined weight scales
- **Spacing**: Consistent padding and margin using Tailwind utilities
- **Border Radius**: Use Cape's radius tokens (--radius variants)
- **Components**: Prefer chips over badges, use Cape-specific variants

### 6. File Organization
When creating new components or pages, place them in:
- UI components → `cape-template/components/ui/`
- Complex patterns → `cape-template/patterns/`
- Full page templates → `cape-template/templates/`
- Documentation/showcase → `cape-template/pages/`

### 7. Pattern and Template Preservation
- **CRITICAL**: Existing patterns and templates in `cape-template/patterns/` and `cape-template/templates/` are production-ready and must not be modified
- **SidenavPartnerPortal**: Background uses `bg-sidebar` CSS variable - do not change to hardcoded colors like `bg-white`
- **HeaderPartnerPortal**: Uses Cape design tokens for colors and spacing - preserve all existing classes
- **UITemplateBasic/UITemplateTabs**: Layout and spacing are optimized - do not modify template structure
- **When generating code**: If Figma Make suggests style changes to existing patterns, reject them and keep the original Cape-styled classes
- **CSS Variable Usage**: All patterns use CSS variables (like `bg-sidebar`, `text-foreground`, `border-border`) instead of hardcoded values - this enables proper theming

### 8. Import Strategy
```tsx
// ✅ Correct - ALWAYS import Cape styles first
import "./cape-template/styles/globals.css";

// ✅ Correct - use cape-template components and templates
import { Button } from "./cape-template/components/ui/button";
import UITemplateBasic from "./cape-template/templates/ui-template-basic";
import { Chip } from "./cape-template/components/ui/chip";
import { ContentSection } from "./cape-template/patterns/content-section";

// ✅ Correct - content structure using ContentSection for first-level organization
<UITemplateBasic title="Dashboard">
  <div className="space-y-6"> {/* No padding classes */}
    <ContentSection title="User Stats">
      <div className="space-y-4"> {/* Regular divs and styling inside sections */}
        <p>User information here</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-muted rounded">Stat 1</div>
          <div className="p-4 bg-muted rounded">Stat 2</div>
        </div>
      </div>
    </ContentSection>
    
    <ContentSection title="Analytics">
      <div className="grid grid-cols-3 gap-4">
        {/* Metrics cards - no nested ContentSections */}
        <MetricCard title="Orders" value="1,248" />
        <MetricCard title="Revenue" value="$45,230" />
      </div>
    </ContentSection>
  </div>
</UITemplateBasic>

// ❌ Wrong - don't use default Figma Make components
import { Button } from "./components/ui/button"; 
import { Card } from "@/components/ui/card";

// ❌ Wrong - forgetting to import Cape styles
// Missing: import "./cape-template/styles/globals.css";

// ❌ Wrong - modifying existing pattern styling
<aside className="flex flex-col w-full bg-white border-r border-gray-200"> 
  {/* Don't change bg-sidebar to bg-white or CSS variables to hardcoded colors */}
</aside>

// ✅ Correct - preserve existing pattern styling
<aside className="flex flex-col w-full bg-sidebar border-r border-sidebar-border">
  {/* Keep original Cape CSS variables and classes */}
</aside>

// ❌ Wrong - don't create manual first-level content containers
<div className="border rounded-lg p-4"> {/* Use ContentSection for first-level */}
  <h3>Manual Section</h3>
  <p>Content here</p>
</div>

// ❌ Wrong - don't nest ContentSections inside ContentSections
<ContentSection title="Main Section">
  <ContentSection title="Nested Section"> {/* Don't do this */}
    <p>Over-organized content</p>
  </ContentSection>
</ContentSection>

// ✅ Correct - Cards and self-contained components don't need extra containers
<ContentSection title="Overview">
  <div className="grid grid-cols-4 gap-4">
    <MetricCard title="Total Orders" value="1,248" /> {/* Cards are already contained */}
    <MetricCard title="Revenue" value="$45,230" />
    <MetricCard title="Active Users" value="892" />
    <MetricCard title="Conversion Rate" value="3.4%" />
  </div>
</ContentSection>

// ❌ Wrong - don't wrap already-contained elements in additional containers
<ContentSection title="Overview">
  <div className="border rounded-lg p-4"> {/* Unnecessary container */}
    <div className="grid grid-cols-4 gap-4">
      <MetricCard title="Total Orders" value="1,248" />
      <MetricCard title="Revenue" value="$45,230" />
    </div>
  </div>
</ContentSection>

// ✅ Correct - Tables and Lists render directly without extra spacing
<ContentSection title="Recent Orders">
  <Table> {/* Table has internal padding - no wrapper needed */}
    <TableHeader>
      <TableRow>
        <TableHead>Order ID</TableHead>
        <TableHead>Customer</TableHead>
        <TableHead>Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>ORD-001</TableCell>
        <TableCell>Alice Johnson</TableCell>
        <TableCell>$245.00</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</ContentSection>

// ❌ Wrong - don't add extra spacing around components with internal padding
<ContentSection title="Recent Orders">
  <div className="p-4"> {/* Unnecessary padding */}
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>ORD-001</TableCell>
          <TableCell>Alice Johnson</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</ContentSection>
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
- **UITemplateTabs** - Layout with sidebar, header, and tab navigation
- **UITemplateFilters** - Layout with sidebar, header, and filter bar (search, chips, action button)

## Patterns Available (in `cape-template/patterns/`)  
- **SidenavPartnerPortal** - Left navigation with Cape styling
- **HeaderPartnerPortal** - Top header with user actions and Cape tokens
- **ContentSection** - Standardized content containers with borders and section headers

## Critical File Structure Rules
- **Default Figma Make files**: `/components`, `/styles`, `/App.tsx` (IGNORE these)
- **Cape template files**: `cape-template/` folder (USE only these)
- **All imports must point to**: `./cape-template/...` paths

**Remember: This is a complete, self-contained design system in the `cape-template/` folder. Everything you need is already provided and Cape-styled. Focus on composition and layout rather than recreating components.**
