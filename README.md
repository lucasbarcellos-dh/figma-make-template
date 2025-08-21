# Figma Make Template (Partner Portal)

A simple React TypeScript project with shadcn/ui components and Tailwind CSS.

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
figma-make-base/
├── components/
│   ├── figma/          # Figma-specific components
│   └── ui/             # shadcn/ui components
├── styles/
│   └── globals.css     # Global styles and CSS variables
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

### Design System

This project uses:
- **Figtree** font family
- Custom CSS variables for theming
- Dark mode support
- shadcn/ui component library
- Tailwind CSS for styling

### Notes

- The project maintains Figma Make folder structure for easy integration
- Components use CSS variables for consistent theming
- All UI components are compatible with the Figma Make design system 