# 🎨 Customization Guide

## Quick Personalization Checklist

### 1. Personal Information

**Hero Section** (`components/Hero.tsx`)
- Line 48: Update your name
- Line 55: Update your title/role
- Line 61: Update your tagline

**Contact Section** (`components/Contact.tsx`)
```typescript
const socials = [
  {
    name: "Email",
    icon: "📧",
    link: "mailto:YOUR_EMAIL@example.com", // ← Update
    handle: "YOUR_EMAIL@example.com", // ← Update
  },
  {
    name: "GitHub",
    icon: "💻",
    link: "https://github.com/YOUR_USERNAME", // ← Update
    handle: "@YOUR_USERNAME", // ← Update
  },
  {
    name: "LinkedIn",
    icon: "💼",
    link: "https://linkedin.com/in/YOUR_USERNAME", // ← Update
    handle: "Your Name", // ← Update
  },
];
```

### 2. Projects

**Projects Section** (`components/Projects.tsx`)

Replace the example projects with your real projects:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Brief description of what it does",
    tech: ["Tech1", "Tech2", "Tech3"],
    gradient: "from-neonPurple to-neonPink", // Choose gradient
  },
  // Add more projects...
];
```

Available gradients:
- `from-neonPurple to-neonPink`
- `from-neonOrange to-neonGold`
- `from-neonPink to-neonPurple`
- `from-neonGold to-neonOrange`

### 3. Skills & Stats

**Growth Section** (`components/Growth.tsx`)

Update your skills:
```typescript
const skills = [
  { name: "Your Skill", level: 75, color: "neonPurple" },
  // Adjust level (0-100) based on your proficiency
];
```

Update your stats:
```typescript
{ number: "500+", label: "Problems Solved" }, // ← Update numbers
{ number: "10+", label: "Projects Built" },
{ number: "3+", label: "Languages Learned" },
```

### 4. Story Sections

**Origin Story** (`components/OriginStory.tsx`)
- Update the paragraphs to tell YOUR story
- Keep it personal and authentic

**Struggles** (`components/Struggles.tsx`)
- Modify the challenges array with your real struggles
- Make it relatable

**Future Vision** (`components/Future.tsx`)
- Update goals to reflect YOUR aspirations
- Be specific about what you want to achieve

### 5. Colors & Theme

**Tailwind Config** (`tailwind.config.ts`)

Change accent colors:
```typescript
colors: {
  dark: "#0d0d0d",
  darkGray: "#1a1a1a",
  neonPurple: "#a855f7", // ← Change these
  neonOrange: "#fb923c",
  neonGold: "#fbbf24",
  neonPink: "#ec4899",
}
```

### 6. Fonts

**Layout** (`app/layout.tsx`)

Current: Inter (from Google Fonts)

To change:
1. Update the import in `globals.css`
2. Update `tailwind.config.ts` fontFamily

### 7. Add New Sections

1. Create new component in `components/`
2. Import in `app/page.tsx`
3. Add to navigation in `components/Navbar.tsx`

Example:
```typescript
// components/NewSection.tsx
export default function NewSection() {
  return (
    <section id="newsection" className="min-h-screen">
      {/* Your content */}
    </section>
  );
}
```

### 8. SEO & Metadata

**Layout** (`app/layout.tsx`)
```typescript
export const metadata: Metadata = {
  title: "Your Name | Developer Portfolio",
  description: "Your custom description",
};
```

## 🎯 Pro Tips

1. **Keep animations smooth**: Don't overdo motion effects
2. **Test on mobile**: Ensure responsive design works
3. **Optimize images**: Use Next.js Image component for project screenshots
4. **Add real links**: Connect Live Demo and GitHub buttons to actual URLs
5. **Personal touch**: Add your personality to the copy

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload 'out' folder to Netlify
```

### GitHub Pages
Add to `next.config.js`:
```javascript
output: 'export',
images: { unoptimized: true }
```

---

Need help? Check the main README.md or create an issue!
