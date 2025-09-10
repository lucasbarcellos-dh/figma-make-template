# Figma Make Template - Cape Design System

A customized shadcn/ui template adapted to use the Cape Design System for Figma Make.

## Purpose

This project transforms Figma Make's base shadcn/ui code to match Cape's design patterns and tokens, creating a reusable template.

## Development Setup

```bash
npm install
npm run dev
```

## Project Structure

- `figma-make-dist/` - Clean template files for Figma Make transfer
- `cape-design-system/` - Cape design tokens and components for reference
- Development files (configs, etc.) remain in root

## Usage

The `figma-make-dist/` folder contains the final template files to upload back to Figma Make with Cape styling applied to all shadcn components.

### Uploading to Figma Make

1. Copy all files from `figma-make-dist/` folder
2. Paste them into Figma Make with this prompt:

```
Replace all current code with the contents from the figma-make-dist folder I've uploaded. This folder contains:

- components/ui/ - Updated shadcn components styled with Cape Design System
- components/figma/ - Figma-specific components  
- styles/globals.css - Updated global styles and design tokens
- App.tsx - Component showcase/demo page
- Guidelines.md - Usage guidelines

Please maintain the exact folder structure and replace all existing files with these updated versions that implement the Cape Design System styling.
``` 