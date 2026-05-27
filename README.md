# FastExpert

A modern platform for hiring home service professionals across the United States. Browse top-rated contractors, specialists, and service providers for all your home improvement, maintenance, and real estate needs.

## 🚀 Features

- **Service Directory** — Browse 25+ home service categories including:
  - Construction & Remodeling (roofing, HVAC, kitchen, bathroom)
  - Maintenance & Repairs (plumbing, electrical, general contracting)
  - Specialized Services (landscaping, power washing, carpet cleaning)
  - Real Estate Services (inspectors, agents, movers, photographers)

- **Trust Indicators** — Verified professionals with fast response times and local expertise
- **Responsive Design** — Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** — Clean, intuitive interface built with Radix UI components and Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **React 19** — Modern UI library
- **TanStack Start** — Full-stack React framework
- **TanStack Router** — File-based routing
- **TanStack React Query** — Data fetching and caching
- **TypeScript** — Type-safe development

### Styling & Components
- **Tailwind CSS v4** — Utility-first CSS framework
- **Radix UI** — Unstyled, accessible component library
- **Lucide React** — Beautiful SVG icon library
- **Class Variance Authority** — Component variant management

### Forms & Validation
- **React Hook Form** — Efficient form state management
- **Zod** — TypeScript-first schema validation

### Build Tools
- **Vite 7** — Fast build tool and dev server
- **ESLint & Prettier** — Code quality and formatting
- **Nitro** — Backend/SSR runtime

## 📦 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/alexiscaasi/ui-rekindler.git
   cd ui-rekindler
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or with bun
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:8080`

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Development build with source maps
npm run build:dev

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code with Prettier
npm run format
```

## 📁 Project Structure

```
src/
├── routes/                          # File-based routing
│   ├── __root.tsx                   # Root layout & QueryClientProvider
│   ├── index.tsx                    # Home page (FastExpert landing)
│   └── README.md                    # Routing documentation
├── components/
│   └── ui/                          # Reusable UI components (shadcn-style)
├── hooks/
│   └── use-mobile.tsx               # Mobile detection hook
├── lib/
│   ├── config.server.ts             # Server configuration
│   ├── error-capture.ts             # Error handling utilities
│   ├── error-page.ts                # Error page components
│   └── utils.ts                     # General utilities
├── router.tsx                       # Router setup with context
├── start.ts                         # Client entry point
├── server.ts                        # Server entry point (SSR wrapper)
└── styles.css                       # Global styles
```

## 🎨 Key Components

### Hero Section
- Eye-catching banner with call-to-action
- Trust indicators (Verified, Fast, Local, Remote)
- Optimized typography and spacing

### Featured Home Services
- 25 service categories in a responsive grid
- Interactive cards with hover effects:
  - Border color changes to #006ADC
  - Subtle lift animation
  - Icon and label styling
- Quick access to service categories

### Navigation
- Header with logo and primary navigation
- Breadcrumb navigation in hero section
- Responsive menu for mobile devices

## 🎯 Design System

### Colors
- **Primary**: Used for buttons and accents
- **Service Links**: #006ADC (blue)
- **Text**: #333333 (description text)
- **Backgrounds**: Light, minimal grid pattern

### Typography
- **Headings**: Bold, large sizes (4xl-6xl)
- **Body**: Clear, readable sizes (base-lg)
- **Labels**: Semibold service names

### Spacing & Sizing
- **Grid**: 4-column layout on desktop, 2 on tablet, 1 on mobile
- **Cards**: 6px padding with 2xl border radius
- **Icons**: 24px on cards, 40px in hero section

## 🚢 Deployment

The project is configured for Cloudflare deployment via Nitro. Build artifacts are optimized for edge computing.

```bash
npm run build
```

## 📝 File-Based Routing

FastExpert uses TanStack Router's file-based routing. Key conventions:

| File | URL |
|------|-----|
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `users/index.tsx` | `/users` |
| `users/$id.tsx` | `/users/:id` |
| `__root.tsx` | App shell (wraps all routes) |

For more details, see `src/routes/README.md`

## 🔧 Development Tips

1. **Hot Module Reload** — Changes automatically reflect in the browser
2. **Type Safety** — Full TypeScript support with strict mode enabled
3. **ESLint** — Run `npm run lint` to check code quality
4. **Prettier** — Run `npm run format` to auto-format code
5. **Browser DevTools** — React DevTools extension recommended

## 📚 Resources

- [TanStack Router Docs](https://tanstack.com/router/latest)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Radix UI Docs](https://www.radix-ui.com)
- [Zod Documentation](https://zod.dev)

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

Created with ❤️ for finding the right home service professionals.

---

**Last Updated:** May 27, 2026
