# Cape Design System Template - Guidelines

## 🚀 Design Ideation Philosophy

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
- Placeholder content (Lorem ipsum)
- Mock UI states instead of full functionality

---

## 📂 Source of Truth

**IGNORE all default Figma Make files. Use ONLY `cape-template/` folder.**

```
cape-template/
├── components/ui/     # Complete Cape-styled components
├── templates/         # Pre-built page layouts
├── patterns/          # Navigation, headers, complex UI
├── styles/globals.css # Cape design tokens
└── App.tsx           # Navigation structure
```

---

## 🎯 Component Reuse Priority

**MANDATORY SEARCH ORDER** before creating anything new:

1. **Templates** (`cape-template/templates/`) - Complete page layouts
2. **Patterns** (`cape-template/patterns/`) - Navigation, headers
3. **UI Components** (`cape-template/components/ui/`) - Individual elements

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

### Content Organization
- ✅ Use `ContentSection` for first-level page organization
- ✅ Render components with internal padding directly
- ❌ Don't nest `ContentSection` inside `ContentSection`
- ❌ Don't add extra containers around tables, cards, lists

### Imports (Always use cape-template paths)
```tsx
// ✅ Correct
import "./cape-template/styles/globals.css";
import { Button } from "./cape-template/components/ui/button";
import UITemplate from "./cape-template/templates/ui-template-basic";

// ❌ Wrong - don't use default Figma Make paths
import { Button } from "./components/ui/button";
```

---

## 📋 Available Components

**Complete catalog in `cape-template/components/ui/`:**

**Core UI**: button, input, textarea, select, checkbox, radio, switch, label
**Data Display**: table, card, list, avatar, badge, chip, skeleton
**Navigation**: tabs, accordion, drawer, pagination
**Feedback**: alert, dialog, tooltip, progress
**Layout**: content-section, separator, divider
**Specialized**: metric-card, tile-card, prompt-card

**All components are Cape-styled and ready to use.**

---

## 🎨 Cape Design Tokens

- **Colors**: Primary red (#D61F26), success green (#05A34E), neutral grays
- **Typography**: Figtree font family
- **Spacing**: Consistent Tailwind utilities
- **Components**: Use chips (not badges), Cape-specific variants

---

## ⚡ Speed Guidelines

1. **Choose closest template** - Don't perfect-match designs
2. **Accept template constraints** - Work within existing layouts
3. **Use hardcoded data** - Skip dynamic content for ideation
4. **Placeholder everything** - Text, images, interactions
5. **Compose, don't create** - Combine existing components only

**Goal: Rapid design communication, not production implementation.**