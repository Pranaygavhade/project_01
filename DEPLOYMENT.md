# 🚀 Deployment Guide

## Quick Deploy Options

### 1. Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the best integration.

#### Steps:
1. Push your code to GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

That's it! Your site will be live in ~2 minutes.

**Custom Domain:**
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS instructions

---

### 2. Netlify

#### Steps:
1. Build your project
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder
4. Your site is live!

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

### 3. GitHub Pages

#### Setup:
1. Update `next.config.ts`:
   ```typescript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     basePath: '/your-repo-name', // Only if not using custom domain
   };
   ```

2. Build and export:
   ```bash
   npm run build
   ```

3. Push to GitHub:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

4. Enable GitHub Pages:
   - Go to repo Settings → Pages
   - Select branch: `main`
   - Select folder: `/out`
   - Save

---

### 4. Custom Server (VPS/Cloud)

#### Requirements:
- Node.js installed
- PM2 for process management

#### Steps:
```bash
# On your server
git clone YOUR_REPO_URL
cd portfolio
npm install
npm run build

# Install PM2
npm install -g pm2

# Start the app
pm2 start npm --name "portfolio" -- start

# Make it run on startup
pm2 startup
pm2 save
```

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Environment Variables

If you add any environment variables, create `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

Then add them in your deployment platform:
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables

---

## Pre-Deployment Checklist

- [ ] Update all personal information
- [ ] Add real project links
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Update meta tags for SEO
- [ ] Add favicon (place in `public/` folder)
- [ ] Test build locally: `npm run build && npm start`
- [ ] Remove console.logs (if any)
- [ ] Update README with your info

---

## SEO Optimization

### Update Metadata
Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name | Developer Portfolio",
  description: "Your custom description for SEO",
  keywords: ["developer", "portfolio", "your skills"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name | Developer Portfolio",
    description: "Your description",
    url: "https://yourdomain.com",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};
```

### Add Favicon
Place these in `public/` folder:
- `favicon.ico`
- `apple-touch-icon.png`
- `og-image.jpg` (for social sharing)

---

## Analytics (Optional)

### Google Analytics

1. Get your GA4 ID from [analytics.google.com](https://analytics.google.com)

2. Create `app/components/Analytics.tsx`:
```typescript
import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR_GA_ID');
        `}
      </Script>
    </>
  );
}
```

3. Add to `app/layout.tsx`:
```typescript
import Analytics from './components/Analytics';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## Performance Tips

1. **Optimize Images**: Use Next.js Image component
2. **Lazy Load**: Components below fold
3. **Reduce Motion**: For users with motion preferences
4. **CDN**: Vercel/Netlify provide this automatically
5. **Compression**: Enable gzip/brotli (automatic on most platforms)

---

## Troubleshooting

### Build Fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Animations Laggy
- Reduce motion complexity
- Use `will-change` CSS property sparingly
- Test on target devices

### Images Not Loading
- Check image paths are correct
- Use Next.js Image component
- Ensure images are in `public/` folder

---

## Post-Deployment

1. Test on multiple devices
2. Check loading speed: [PageSpeed Insights](https://pagespeed.web.dev/)
3. Verify SEO: [Google Search Console](https://search.google.com/search-console)
4. Share on social media
5. Add to your resume/LinkedIn

---

**Need Help?**
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)
- [Netlify Docs](https://docs.netlify.com/)

Good luck with your deployment! 🚀
