# 🚀 Quick Start Guide

Get your portfolio running in 3 minutes!

## Step 1: Install Dependencies

```bash
cd portfolio
npm install
```

## Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## Step 3: Customize Your Content

### Essential Updates (5 minutes)

1. **Your Name & Info** - `components/Hero.tsx`
   - Line 48: Your name
   - Line 55: Your role/title

2. **Contact Links** - `components/Contact.tsx`
   - Update email, GitHub, LinkedIn URLs

3. **Projects** - `components/Projects.tsx`
   - Replace with your actual projects
   - Add real GitHub/Live Demo links

4. **Skills** - `components/Growth.tsx`
   - Update skill levels (0-100)
   - Modify stats to match your achievements

### Optional Customization

See `CUSTOMIZATION.md` for detailed instructions on:
- Changing colors
- Adding new sections
- Modifying animations
- SEO optimization

## 🎨 What You Get

✅ Cinematic hero section with animated background  
✅ Storytelling journey (Origin → Struggles → Growth → Future)  
✅ Animated project showcase  
✅ Custom cursor with glow effect  
✅ Scroll progress bar  
✅ Glassmorphism UI  
✅ Fully responsive  
✅ Dark mode with neon accents  

## 🐛 Troubleshooting

### Port already in use?
```bash
npm run dev -- -p 3001
```

### Build errors?
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Animations not smooth?
- Check if hardware acceleration is enabled in your browser
- Reduce motion effects in `components/` files

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy

### Vercel (Easiest)
1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Deploy! ✨

### Netlify
```bash
npm run build
```
Upload `.next` folder to Netlify

## 💡 Pro Tips

1. Test on mobile devices early
2. Add real project screenshots
3. Keep content concise and impactful
4. Update meta tags for SEO
5. Add Google Analytics (optional)

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

Need help? Check README.md or CUSTOMIZATION.md
