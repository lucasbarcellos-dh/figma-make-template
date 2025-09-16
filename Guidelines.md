# Cape Design System Template - Guidelines

## 🚀 Design Ideation Purpose

**CRITICAL: This template is optimized for rapid design ideation, not production development.**

### Code Generation Principles
- **Minimal Code**: Generate the least amount of code possible to communicate design ideas
- **Maximum Reuse**: Always use existing components, patterns, and templates over custom code
- **Speed Over Perfection**: Focus on rapid idea communication, not production implementation
- **Template-First**: Use existing templates as-is with minimal customization

### ❌ Forbidden for Design Ideation
- Custom component creation when existing ones work
- Style overrides unless absolutely critical
- Complex state management or logic
- Error handling, loading states, edge cases
- Performance optimization (memoization, virtualization)
- Custom utilities or helper functions

### ✅ Preferred for Design Ideation
- Direct template usage without modification
- Component composition without changes
- Static/hardcoded example data
- Simple grid/flex layouts with existing components
- Placeholder content
- Mock UI states instead of full functionality

---

## 📂 Source of Truth

**IGNORE all default Figma Make files. Use ONLY `cape-theme/` folder.**

```
cape-theme/
├── components/ui/     # Complete Cape-styled components
├── templates/         # Pre-built page layouts
├── patterns/          # Navigation, headers, complex UI
├── styles/globals.css # Cape design tokens
└── App.tsx           # Navigation structure
```

---

## 🎯 Component Reuse Priority

**MANDATORY SEARCH ORDER** before creating anything new:

1. **Templates** (`cape-theme/templates/`) - Complete page layouts
2. **Patterns** (`cape-theme/patterns/`) - Navigation, headers
3. **UI Components** (`cape-theme/components/ui/`) - Individual elements

### Template Selection (Choose closest, don't customize)
- **UITemplateFilters** - Has search/filter controls, data tables
- **UITemplateTabs** - Has tabbed navigation in header
- **UITemplateBasic** - Simple layout with just title

---

## 🔧 Critical Usage Rules

### Template Usage
- ✅ Use templates exactly as provided
- ✅ Only modify content areas inside templates
- ❌ NEVER modify sidebar/header styling
- ❌ NEVER add borders between header and content
- ❌ NEVER change sidebar background or spacing

### Content Organization - MANDATORY STRUCTURE

**REFERENCE: Use `cape-theme/pages/ContentPage.tsx` as the definitive example for content organization.**
- ✅ **ALWAYS wrap first-level content in `ContentSection`**
- ✅ **Border Control**: Use `noBorder` prop for components with their own styling (cards, buttons, chips)
- ✅ **No Border**: Lists and tables get automatic ContentSection borders
- ❌ Don't nest `ContentSection` inside `ContentSection`
- ❌ Don't add extra containers between `ContentSection` and components
- ❌ Don't group multiple different examples in one ContentSection

#### Perfect Examples from ContentPage.tsx:
```tsx
// ✅ Table - gets border automatically
<ContentSection title="Basic Usage">
  <Table size="medium">
    {/* table content */}
  </Table>
</ContentSection>

// ✅ List - gets border automatically
<ContentSection title="Small Size List">
  <List size="small">
    {/* list items */}
  </List>
</ContentSection>

// ✅ Cards - no border (cards have their own)
<ContentSection title="Card Examples" noBorder>
  <div className="grid grid-cols-3 gap-4">
    <Card variant="outlined">{/* card content */}</Card>
  </div>
</ContentSection>
```

### Imports (Always use cape-theme paths)
```tsx
// ✅ Correct
import "./cape-theme/styles/globals.css";
import { Button } from "./cape-theme/components/ui/button";
import UITemplate from "./cape-theme/templates/ui-template-basic";

// ❌ Wrong - don't use default Figma Make paths
import { Button } from "./components/ui/button";
```

---

## ⚡ Speed Guidelines

1. **Choose closest template** - Don't perfect-match designs
2. **Accept template constraints** - Work within existing layouts
3. **Use hardcoded data** - Skip dynamic content for ideation
4. **Placeholder everything** - Text, images, interactions
5. **Compose, don't create** - Combine existing components only

**Goal: Rapid design communication, not production implementation.**