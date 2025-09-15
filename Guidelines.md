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

## When Referencing Existing Figma Designs

**CRITICAL: When users reference/paste existing Partner Portal Figma designs, you MUST identify and reuse matching elements from this cape-template bundle instead of recreating them from scratch.**

### Component Reuse Priority
**MANDATORY SEARCH ORDER**: Before creating any new component, search cape-template in this order:

1. **Templates** (`cape-template/templates/`) - For overall page layouts
2. **Patterns** (`cape-template/patterns/`) - For navigation, headers, and complex UI patterns
3. **UI Components** (`cape-template/components/ui/`) - For individual interface elements

### Element Categories That Must Be Reused

#### Layout & Structure
- **Page layouts with sidebars, headers, navigation** → Check `cape-template/templates/` first
- **Navigation patterns and menu structures** → Check `cape-template/patterns/` first
- **Content organization and sections** → Always use existing content organization patterns

#### Interface Components
- **Buttons, inputs, selects, and form elements** → NEVER recreate - all standard UI components exist
- **Data display (tables, cards, lists)** → NEVER recreate - comprehensive data components available
- **Interactive elements (chips, tabs, switches)** → NEVER recreate - all interaction patterns covered
- **Feedback elements (alerts, tooltips, dialogs)** → NEVER recreate - complete feedback system exists

#### Specialized Components
- **Metrics, statistics, and dashboard elements** → Check for existing metric/data display components
- **User interface patterns (avatars, profiles)** → Check for existing user-related components
- **Content cards and information displays** → Check for existing card and content components

### Reuse Enforcement Rules
- **NEVER create layouts from scratch** - Templates provide complete layout foundations
- **NEVER recreate navigation/headers** - Patterns contain production-ready navigation systems
- **NEVER rebuild basic UI elements** - All standard components are comprehensively covered
- **NEVER duplicate content organization** - Existing patterns handle content structure
- **STRICT SEARCH REQUIREMENT**: Must search all three cape-template directories before creating anything new

### When Custom Components Are Acceptable
- **Only after exhaustive search** of templates, patterns, and UI components
- **Truly unique functionality** not covered by existing components
- **Composition needs** that combine existing components in new ways
- **Domain-specific elements** unique to the specific feature being built

## Design Generation Rules

### 1. Component Usage
- **ALWAYS** use components from `cape-template/components/ui/` instead of creating new ones
- **NEVER** reference or import default Figma Make components from root `/components` folder
- Use only the Cape-styled versions provided in the `cape-template/` folder
- All components already include proper Cape styling, tokens, and variants

### 2. Templates First - Application Layout
- **ALWAYS** start new designs using templates from the `cape-template/templates/` folder
- **CRITICAL**: Use templates as complete, unmodified application frames - DO NOT customize the sidebar or header styling
- Templates provide complete page layouts with navigation, headers, and content areas
- Choose templates based on functionality needs (basic layout, tab navigation, filtering capabilities)
- Build new pages within these template structures
- **Content Spacing**: Templates handle padding - use `p-0` or no padding classes on your content

#### Template Selection Guide
**When analyzing Figma designs, check in this order:**
1. **Has filter/search controls?** → Use `UITemplateFilters`
2. **Has tabbed navigation in header?** → Use `UITemplateTabs`
3. **Simple layout only?** → Use `UITemplateBasic`

**Visual indicators:**
- **UITemplateFilters**: Search bars, filter chips, action buttons, data tables/grids
- **UITemplateTabs**: Horizontal tabs below page title, content switching
- **UITemplateBasic**: Clean header with just title, direct content display

#### Template Usage Rules
- **NEVER modify sidebar styling**: Do not add background colors, change spacing, or alter navigation styling
- **NEVER modify header styling**: Do not change background colors, borders, or existing header patterns
- **NEVER add borders between header and content**: Do not add dividers or borders to separate template sections
- **ONLY modify content areas**: Focus changes on the main content area inside the template
- **Navigation content changes**: Only add/remove navigation items when explicitly requested by users
- **Header content changes**: Only change page titles, breadcrumbs, or actions when explicitly requested by users
- **Template frame is sacred**: The overall layout structure (sidebar width, header height, positioning) must remain unchanged

### 3. Content Organization with Sections
- **ALWAYS** organize first-level page content using standardized content section components
- **NEVER** add extra containers around content sections or change their styling
- **Use content sections for top-level page organization only** - content inside sections doesn't need additional section wrapping
- **Never create manual content containers** for first-level content - use existing section patterns instead
- **Container Guidelines**: When sections contain self-contained elements (cards, tables, lists), render them directly without additional container wrapping
- **Spacing Guidelines**: Components with internal padding should be rendered directly without additional spacing containers
- **REFERENCE EXAMPLES**: See content organization patterns for concrete examples of correct usage

### 4. Styling Rules
- **CRITICAL**: Always import Cape styles first: `import "./cape-template/styles/globals.css";`
- Use CSS variables defined in Cape globals.css (--success, --primary, --muted, etc.)
- Follow the Cape color palette and design tokens already configured
- Maintain consistency with existing component styling patterns
- **Font**: All text should use Figtree font family (defined in Cape globals.css)
- **NEVER modify global navigation pattern styling**: Core navigation patterns must be preserved exactly as written
- **Pattern Style Preservation**: Do not change background colors, borders, or spacing in existing patterns - they use Cape design tokens correctly

#### Application Frame Styling Restrictions
**FORBIDDEN MODIFICATIONS** - These changes are commonly made by Figma Make but must be avoided:
- ❌ **Changing sidebar background colors** - sidebar should always be white
- ❌ **Modifying header background colors** or adding custom borders
- ❌ **Adding borders between header and content areas** - template sections should flow seamlessly
- ❌ **Altering navigation item styling** beyond content changes
- ❌ **Adding custom spacing** to sidebar or header containers
- ❌ **Overriding Cape CSS variables** with hardcoded colors in templates
- ❌ **Changing the overall layout dimensions** (sidebar width, header height)

**PERMITTED MODIFICATIONS** - Only these content changes are allowed:
- ✅ **Page title changes** in header (when requested by user)
- ✅ **Navigation item additions/removals** (when explicitly requested by user)
- ✅ **Content area modifications** (main page content only)
- ✅ **Adding user-specific actions** to header (when requested by user)

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
- **CRITICAL**: Existing patterns and templates are production-ready and must not be modified
- **Navigation patterns**: Background uses CSS variables - do not change to hardcoded colors
- **Header patterns**: Use Cape design tokens for colors and spacing - preserve all existing classes
- **Template layouts**: Layout and spacing are optimized - do not modify template structure
- **When generating code**: If Figma Make suggests style changes to existing patterns, reject them and keep the original Cape-styled classes
- **CSS Variable Usage**: All patterns use CSS variables (like `bg-sidebar`, `text-foreground`, `border-border`) instead of hardcoded values - this enables proper theming

### 8. Import Strategy
```tsx
// ✅ Correct - ALWAYS import Cape styles first
import "./cape-template/styles/globals.css";

// ✅ Correct - use cape-template components and templates
import { Button } from "./cape-template/components/ui/button";
import UITemplate from "./cape-template/templates/ui-template-basic"; // Use appropriate template
import { Chip } from "./cape-template/components/ui/chip";
import { ContentSection } from "./cape-template/components/ui/content-section";

// ✅ Correct - content structure using content sections for first-level organization
<UITemplate title="Dashboard">
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
        {/* Metrics cards - no nested content sections */}
        <MetricCard title="Orders" value="1,248" />
        <MetricCard title="Revenue" value="$45,230" />
      </div>
    </ContentSection>
  </div>
</UITemplate>

// ❌ Wrong - don't use default Figma Make components
import { Button } from "./components/ui/button"; 
import { Card } from "@/components/ui/card";

// ❌ Wrong - forgetting to import Cape styles
// Missing: import "./cape-template/styles/globals.css";

// ❌ Wrong - modifying template sidebar/header styling (common Figma Make error)
<div className="flex h-screen">
  <aside className="flex flex-col w-full bg-gray-100 border-r border-gray-200"> {/* Don't change sidebar background - keep white */}
    {/* Sidebar content */}
  </aside>
  <header className="bg-white border-b border-gray-300"> {/* Don't override header styling */}
    {/* Header content */}
  </header>
</div>

// ✅ Correct - preserve existing template structure and styling
<UITemplate title="Dashboard"> {/* Use template as-is, only change content */}
  <div className="space-y-6"> {/* Only modify content area */}
    {/* Your page content here */}
  </div>
</UITemplate>

// ❌ Wrong - changing CSS variables to hardcoded colors in templates
<aside className="flex flex-col w-full bg-white border-r border-gray-200">
  {/* Don't change CSS variables to hardcoded colors */}
</aside>

// ✅ Correct - preserve existing pattern styling with CSS variables
<aside className="flex flex-col w-full bg-sidebar border-r border-sidebar-border">
  {/* Keep original Cape CSS variables and classes */}
</aside>

// ❌ Wrong - don't create manual first-level content containers
<div className="border rounded-lg p-4"> {/* Use content section patterns for first-level */}
  <h3>Manual Section</h3>
  <p>Content here</p>
</div>

// ❌ Wrong - don't nest content sections inside content sections
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

## Key Component Categories Available
- **Interactive Elements** (buttons, chips, switches, etc.)
- **Form Components** (inputs, selects, textareas, etc.)
- **Data Display** (tables, cards, lists, etc.)
- **Navigation** (tabs, accordions, etc.)
- **Feedback** (alerts, tooltips, dialogs, etc.)
- **Layout & Organization** (content sections, grids, etc.)
- **User Interface** (avatars, badges, progress, etc.)
- **Specialized Components** (metrics, tiles, prompts, etc.)
- **Complete catalog** - see `cape-template/components/ui/` folder for all available components

## Templates Available (in `cape-template/templates/`)
- **Basic Layout** - Complete page structure with sidebar navigation and header
- **Tabbed Layout** - Layout with sidebar, header, and tab navigation
- **Filtered Layout** - Layout with sidebar, header, and filter bar capabilities
- **All templates** provide complete page foundations with proper spacing and navigation

## Patterns Available (in `cape-template/patterns/`)
- **Navigation Patterns** - Left sidebar navigation with Cape styling
- **Header Patterns** - Top headers with user actions and Cape design tokens
- **Content Organization** - Examples and documentation for proper content structure
- **All patterns** are production-ready and use proper Cape design tokens

## Critical File Structure Rules
- **Default Figma Make files**: `/components`, `/styles`, `/App.tsx` (IGNORE these)
- **Cape template files**: `cape-template/` folder (USE only these)
- **All imports must point to**: `./cape-template/...` paths

**Remember: This is a complete, self-contained design system in the `cape-template/` folder. Everything you need is already provided and Cape-styled. Focus on composition and layout rather than recreating components.**
