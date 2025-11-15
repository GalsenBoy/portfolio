# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React, TypeScript, Vite, and SCSS. The portfolio showcases projects, skills (front-end and back-end), and includes a contact form integrated with EmailJS.

## Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production (runs TypeScript compiler + Vite build)
npm run build

# Lint TypeScript/TSX files
npm run lint

# Preview production build locally
npm run preview
```

## Architecture

### Component Structure

The application follows a single-page layout with a two-column design:

- **SideBar**: Left column containing navigation and social media links
- **Content**: Right column containing all main sections (About, Skills, Projects, Contact)

All sections are on the same page - there's only one route (`/`) despite React Router being set up.

### Key Directories

- `src/components/`: React components (Nav, SideBar, Content, Contact, SkillsFront, SkillsBack, Projets, etc.)
- `src/pages/`: Single Home page that combines SideBar and Content
- `src/data/`: Static data files for projects, skills, navigation items, and form inputs
- `src/utils/`: Animation utilities (primarily Framer Motion animation variants)
- `src/css/`: SCSS stylesheets (one per major component)

### Data Files Pattern

Static content is centralized in `src/data/` as TypeScript arrays of objects:

- `ProjectData.ts`: Project showcases with image paths, titles, and links
- `Front.ts` / `Back.ts`: Technology stack items for skills display
- `InputFields.ts`: Form field configurations
- `Navs.ts`: Navigation items
- `IconesData.ts`: Social media links

When adding new projects, skills, or navigation items, update the corresponding data file rather than modifying component code.

### Styling Architecture

All styles use SCSS with a shared mixins file:

- `src/_mixins.scss`: Global mixins for flexbox layouts (automatically imported via Vite config)
- Component-specific styles in `src/css/` import and use these mixins

The Vite config automatically includes `_mixins.scss` in all SCSS files, so mixins are globally available without explicit imports.

### Animation System

Animations use Framer Motion with reusable variants:

- `utils/animations.ts`: `generateAnimation()` creates animation variants with configurable delay and direction
- `utils/anime.ts`, `utils/animeAvatar.ts`, `utils/animateSkills.ts`: Specific animation configurations
- Components use `<motion.*>` components with `variants` prop

### Contact Form Integration

The Contact component uses EmailJS with hardcoded service IDs. The form uses:

- `@emailjs/browser` for sending emails
- `sonner` for toast notifications
- Form fields configured in `src/data/InputFields.ts`

## TypeScript Configuration

- Strict mode enabled with `noUnusedLocals` and `noUnusedParameters`
- Target: ES2020
- Module resolution: bundler mode (Vite-specific)
- JSX: react-jsx (new JSX transform)

## Linting

ESLint is configured for TypeScript + React with:

- `eslint:recommended`
- `plugin:@typescript-eslint/recommended`
- `plugin:react-hooks/recommended`
- `react-refresh/only-export-components` rule for Vite HMR
