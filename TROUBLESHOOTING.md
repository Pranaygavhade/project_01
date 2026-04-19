# 🔧 Troubleshooting Guide

Common issues and their solutions.

## Installation Issues

### Problem: `npm install` fails

**Solution 1**: Clear cache and retry
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Solution 2**: Use different Node version
```bash
# Install nvm (Node Version Manager)
# Then use Node 18 or 20
nvm install 20
nvm use 20
npm install
```

**Solution 3**: Check internet connection
- Ensure you have stable internet
- Try using a VPN if corporate firewall blocks npm

---

## Development Server Issues

### Problem: Port 3000 already in use

**Solution**: Use different port
```bash
npm run dev -- -p 3001
```

Or kill the process using port 3000:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Problem: Changes not reflecting

**Solution 1**: Hard refresh browser
- Windows/Linux: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

**Solution 2**: Clear Next.js cache
```bash
rm -rf .next
npm run dev
```

**Solution 3**: Restart dev server
- Stop server (Ctrl + C)
- Run `npm run dev` again

---

## Build Issues

### Problem: Build fails with TypeScript errors

**Solution 1**: Check for type errors
```bash
npx tsc --noEmit
```

**Solution 2**: Update dependencies
```bash
npm update
```

**Solution 3**: Reinstall dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problem: "Module not found" error

**Solution**: Check import paths
```typescript
// ❌ Wrong
import Hero from 'components/Hero'

// ✅ Correct
import Hero from '@/components/Hero'
```

---

## Animation Issues

### Problem: Animations are laggy

**Solution 1**: Reduce motion complexity
- Decrease number of animated elements
- Simplify animation properties

**Solution 2**: Enable hardware acceleration
```css
/* Add to animated elements */
.animated-element {
  will-change: transform;
  transform: translateZ(0);
}
```

**Solution 3**: Disable animations on low-end devices
```typescript
import { useReducedMotion } from 'framer-motion';

const shouldReduceMotion = useReducedMotion();
```

### Problem: Custom cursor not showing

**Solution 1**: Check if on desktop
- Custom cursor only shows on desktop (hidden on mobile)

**Solution 2**: Verify CSS is loaded
- Check browser console for CSS errors
- Ensure `globals.css` is imported

---

## Styling Issues

### Problem: Tailwind classes not working

**Solution 1**: Check Tailwind config
- Ensure `tailwind.config.ts` includes all paths
- Restart dev server after config changes

**Solution 2**: Purge and rebuild
```bash
rm -rf .next
npm run dev
```

**Solution 3**: Use JIT mode (already enabled)
- Tailwind JIT should be working by default

### Problem: Custom colors not applying

**Solution**: Check color names in `tailwind.config.ts`
```typescript
// Use exact names from config
className="text-neonPurple" // ✅
className="text-purple-500" // ❌ (not defined)
```

---

## Deployment Issues

### Problem: Vercel deployment fails

**Solution 1**: Check build locally first
```bash
npm run build
```

**Solution 2**: Check environment variables
- Ensure all required env vars are set in Vercel

**Solution 3**: Check Node version
- Vercel uses Node 18 by default
- Ensure your code is compatible

### Problem: Images not loading after deployment

**Solution 1**: Use Next.js Image component
```typescript
import Image from 'next/image';

<Image src="/image.jpg" alt="..." width={500} height={300} />
```

**Solution 2**: Check image paths
- Images should be in `public/` folder
- Reference without `/public` prefix

### Problem: 404 on refresh (GitHub Pages)

**Solution**: Add 404.html redirect
```html
<!-- public/404.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0;url=/" />
  </head>
</html>
```

---

## Performance Issues

### Problem: Slow page load

**Solution 1**: Optimize images
```bash
# Use WebP format
# Compress images before adding
```

**Solution 2**: Lazy load components
```typescript
import dynamic from 'next/dynamic';

const Projects = dynamic(() => import('@/components/Projects'));
```

**Solution 3**: Check bundle size
```bash
npm run build
# Check output for large bundles
```

### Problem: High memory usage

**Solution**: Reduce animation complexity
- Limit number of simultaneous animations
- Use CSS animations for simple effects
- Debounce scroll events

---

## Browser Compatibility

### Problem: Animations not working in Safari

**Solution**: Add vendor prefixes
```css
.element {
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
```

### Problem: Layout broken in older browsers

**Solution**: Check browser support
- Test in Chrome, Firefox, Safari, Edge
- Use autoprefixer (included in Tailwind)

---

## Content Issues

### Problem: Text overflowing on mobile

**Solution**: Use responsive classes
```typescript
className="text-base md:text-lg lg:text-xl"
```

### Problem: Links not working

**Solution**: Check href format
```typescript
// ✅ Correct
<a href="#contact">Contact</a>
<a href="https://github.com/username">GitHub</a>

// ❌ Wrong
<a href="contact">Contact</a>
```

---

## Git Issues

### Problem: Large node_modules committed

**Solution**: Remove from git
```bash
git rm -r --cached node_modules
echo "node_modules/" >> .gitignore
git add .gitignore
git commit -m "Remove node_modules"
```

### Problem: .next folder in git

**Solution**: Add to .gitignore
```bash
echo ".next/" >> .gitignore
git rm -r --cached .next
git commit -m "Remove .next"
```

---

## TypeScript Issues

### Problem: Type errors in components

**Solution 1**: Check prop types
```typescript
interface Props {
  title: string;
  count: number;
}

export default function Component({ title, count }: Props) {
  // ...
}
```

**Solution 2**: Use type assertion carefully
```typescript
const element = document.getElementById('id') as HTMLElement;
```

---

## Framer Motion Issues

### Problem: "useInView is not a function"

**Solution**: Check import
```typescript
import { useInView } from 'framer-motion';
```

### Problem: Animation not triggering

**Solution**: Check ref is attached
```typescript
const ref = useRef(null);
const isInView = useInView(ref);

return <div ref={ref}>...</div>
```

---

## Quick Fixes Checklist

When something breaks, try these in order:

1. [ ] Hard refresh browser (Ctrl + Shift + R)
2. [ ] Restart dev server
3. [ ] Clear Next.js cache (`rm -rf .next`)
4. [ ] Check browser console for errors
5. [ ] Check terminal for errors
6. [ ] Reinstall dependencies
7. [ ] Check file paths and imports
8. [ ] Verify TypeScript types
9. [ ] Test in different browser
10. [ ] Check documentation

---

## Still Having Issues?

### Check These Resources:

1. **Next.js Docs**: https://nextjs.org/docs
2. **Framer Motion Docs**: https://www.framer.com/motion/
3. **Tailwind Docs**: https://tailwindcss.com/docs
4. **Stack Overflow**: Search for specific error messages
5. **GitHub Issues**: Check if it's a known issue

### Get Help:

1. Copy the exact error message
2. Note what you were doing when it happened
3. Check if it happens in a fresh install
4. Search for the error online
5. Ask in relevant Discord/Slack communities

---

## Prevention Tips

1. **Commit often**: Small commits are easier to debug
2. **Test locally**: Always test before deploying
3. **Use TypeScript**: Catch errors before runtime
4. **Read error messages**: They usually tell you what's wrong
5. **Keep dependencies updated**: But test after updating
6. **Use version control**: Git is your friend
7. **Document changes**: Comment complex code

---

**Remember**: Most issues have simple solutions. Don't panic, debug systematically! 🔍
