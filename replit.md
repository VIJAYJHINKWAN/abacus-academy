# AbacusLearn - Interactive Learning Platform

## Overview

AbacusLearn is a full-stack web application designed to teach abacus skills through interactive learning experiences. The platform combines traditional abacus methods with modern web technology to create an engaging educational tool for students of all ages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API endpoints
- **Development**: Hot reloading with Vite middleware in development

## Key Components

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Tables**: 
  - `users` - User authentication and profiles
  - `blog_posts` - Educational content and articles
- **Migrations**: Automated database migrations with Drizzle Kit

### Authentication & Authorization
- Currently using in-memory storage for development
- Prepared for user authentication with password-based system
- Session management infrastructure in place

### Content Management
- Blog system for educational resources and tutorials
- Categories for organizing content (Beginner, Intermediate, Technology)
- Rich content support with images and metadata

### Interactive Features
- Virtual abacus simulator with clickable beads
- Real-time calculation feedback
- Problem generation and answer checking
- Toast notifications for user feedback

## Data Flow

1. **Client Requests**: Browser makes requests to React application
2. **API Calls**: Frontend uses TanStack Query to fetch data from Express API
3. **Database Operations**: Express routes use Drizzle ORM to interact with PostgreSQL
4. **Response**: Data flows back through the same chain with proper error handling
5. **State Updates**: React Query manages caching and UI updates automatically

### Key Data Patterns
- Server state managed by TanStack Query with automatic caching
- Local UI state managed by React hooks (useState, custom hooks)
- Form state handled by React Hook Form
- Real-time abacus simulator state managed by custom `useAbacus` hook

## External Dependencies

### Core Technologies
- **Database**: Neon Database (serverless PostgreSQL)
- **UI Components**: Radix UI primitives for accessibility
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation
- **Validation**: Zod for runtime type validation

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Full type safety across frontend and backend
- **Database Tooling**: Drizzle Kit for migrations and schema management
- **Development**: Hot reloading and error overlays for Replit environment

## Deployment Strategy

The application is configured for deployment on Replit with the following approach:

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: esbuild bundles Node.js server code
3. **Output**: Combined build artifacts in `dist/` directory

### Environment Configuration
- **Development**: Uses Vite dev server with Express middleware
- **Production**: Serves static files from Express with API routes
- **Database**: Connects to PostgreSQL via DATABASE_URL environment variable

### Key Build Features
- Automatic static file serving in production
- Shared TypeScript configuration across client/server
- Path aliases for clean imports (`@/`, `@shared/`)
- ESM modules throughout the application stack

### Scalability Considerations
- Serverless-ready database connection (Neon)
- Stateless server design for horizontal scaling
- CDN-ready static asset structure
- Efficient bundling and code splitting via Vite

The architecture prioritizes developer experience with fast hot reloading, type safety, and modern tooling while maintaining production readiness with proper error handling, caching strategies, and deployment optimization.