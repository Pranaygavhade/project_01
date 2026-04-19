# 📁 Project Structure

## Visual Overview

```
portfolio/
│
├── 📱 app/                          # Next.js App Router
│   ├── layout.tsx                   # Root layout with metadata
│   ├── page.tsx                     # Main page (imports all sections)
│   └── globals.css                  # Global styles & animations
│
├── 🎨 components/                   # React Components
│   ├── Navbar.tsx                   # Fixed navigation bar
│   ├── Hero.tsx                     # Landing section
│   ├── OriginStory.tsx             # Personal story
│   ├── Struggles.tsx               # Challenges section
│   ├── Growth.tsx                  # Skills & stats
│   ├── Projects.tsx                # Project showcase
│   ├── Future.tsx                  # Future goals
│   ├── Contact.tsx                 # Contact form
│   ├── CustomCursor.tsx            # Custom cursor effect
│   └── ScrollProgress.tsx          # Progress bar
│
├── 🎭 public/                       # Static assets
│   └── (add your images here)
│
├── ⚙️ Configuration Files
│   ├── tailwind.config.ts          # Tailwind CSS config
│   ├── next.config.ts              # Next.js config
│   ├── tsconfig.json               # TypeScript config
│   └── package.json                # Dependencies
│
└── 📚 Documentation
    ├── README.md                    # Main documentation
    ├── QUICKSTART.md               # Quick setup guide
    ├── CUSTOMIZATION.md            # How to customize
    ├── DEPLOYMENT.md               # Deployment guide
    ├── PROJECT_SUMMARY.md          # Feature summary
    └── STRUCTURE.md                # This file
```

## Component Flow

```
page.tsx (Main Entry)
    │
    ├─→ CustomCursor (Global)
    ├─→ ScrollProgress (Global)
    ├─→ Navbar (Fixed)
    │
    └─→ Sections (Scroll Order)
        ├─→ Hero
        ├─→ OriginStory
        ├─→ Struggles
        ├─→ Growth
        ├─→ Projects
        ├─→ Future
        └─→ Contact
```

## Data Flow

```
User Interaction
    │
    ├─→ Mouse Movement → CustomCursor (tracks position)
    ├─→ Scroll → ScrollProgress (updates bar)
    ├─→ Scroll → Sections (trigger animations)
    └─→ Click → Navigation (smooth scroll)
```

## Styling Architecture

```
globals.css
    ├─→ Tailwind Base
    ├─→ Custom Utilities
    │   ├─→ .glow-text
    │   ├─→ .glow-box
    │   ├─→ .gradient-text
    │   └─→ .glass
    └─→ Cursor Styles

tailwind.config.ts
    ├─→ Custom Colors
    │   ├─→ dark (#0d0d0d)
    │   ├─→ darkGray (#1a1a1a)
    │   ├─→ neonPurple (#a855f7)
    │   ├─→ neonOrange (#fb923c)
    │   ├─→ neonGold (#fbbf24)
    │   └─→ neonPink (#ec4899)
    └─→ Custom Animations
```

## Animation System

```
Framer Motion
    │
    ├─→ Page Load Animations
    │   └─→ Stagger children (Hero)
    │
    ├─→ Scroll Animations
    │   ├─→ useInView hook
    │   └─→ Trigger on scroll
    │
    ├─→ Hover Animations
    │   ├─→ Scale transforms
    │   └─→ Glow effects
    │
    └─→ Continuous Animations
        ├─→ Scroll indicator
        └─→ Background gradients
```

## Section Breakdown

### 1. Hero Section
```
Hero.tsx
├─→ Animated Background (mouse-reactive)
├─→ Name & Title (stagger animation)
├─→ CTA Buttons (hover effects)
└─→ Scroll Indicator (pulse animation)
```

### 2. Story Sections
```
OriginStory.tsx → Personal narrative
Struggles.tsx → Challenge cards
Growth.tsx → Skills + Stats
```

### 3. Showcase
```
Projects.tsx
├─→ Grid Layout
├─→ Project Cards
│   ├─→ Title & Description
│   ├─→ Tech Stack Badges
│   └─→ Action Buttons
└─→ Hover Effects (scale + glow)
```

### 4. Future & Contact
```
Future.tsx → Goal Cards
Contact.tsx → Form + Social Links
```

## Key Files to Customize

### 🎯 Priority 1 (Essential)
1. `components/Hero.tsx` - Your name & title
2. `components/Contact.tsx` - Email, GitHub, LinkedIn
3. `components/Projects.tsx` - Your projects

### 🎨 Priority 2 (Important)
4. `components/Growth.tsx` - Skills & stats
5. `components/OriginStory.tsx` - Your story
6. `components/Future.tsx` - Your goals

### ⚙️ Priority 3 (Optional)
7. `tailwind.config.ts` - Colors & theme
8. `app/layout.tsx` - SEO metadata
9. `components/Struggles.tsx` - Challenges

## Dependencies

```json
{
  "next": "^15.1.6",           // React framework
  "react": "^19.0.0",          // UI library
  "framer-motion": "^11.18.0", // Animations
  "tailwindcss": "^3.4.1",     // Styling
  "typescript": "^5"           // Type safety
}
```

## Build Process

```
Development
    npm run dev
        ↓
    Next.js Dev Server (localhost:3000)
        ↓
    Hot Module Replacement
        ↓
    Live Preview

Production
    npm run build
        ↓
    TypeScript Compilation
        ↓
    Static Page Generation
        ↓
    Optimization
        ↓
    Production Build (.next/)
```

## File Size Reference

- Total Components: 10 files
- Total Lines of Code: ~1,500
- Build Size: ~500KB (optimized)
- Load Time: <2 seconds

## Navigation Structure

```
Navbar Links
    ├─→ Origin (#origin)
    ├─→ Growth (#growth)
    ├─→ Projects (#projects)
    ├─→ Future (#future)
    └─→ Contact (#contact)
```

## Responsive Breakpoints

```
Mobile:    < 768px   (base styles)
Tablet:    768px+    (md:)
Desktop:   1024px+   (lg:)
Wide:      1280px+   (xl:)
```

---

This structure provides a clean, maintainable, and scalable foundation for your portfolio!
