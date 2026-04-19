# How to Start Your Portfolio Server

## Quick Start

Open your terminal and run these commands:

```bash
cd portfolio
npm run dev
```

Then open your browser to: **http://localhost:3000**

## If Port 3000 is Already in Use

If you see "Port 3000 is in use", stop the existing process:

```bash
# Find the process
netstat -ano | findstr :3000

# Kill it (replace XXXX with the PID number)
taskkill /PID XXXX /F
```

Then run `npm run dev` again.

## EmailJS Contact Form Setup

Your contact form is ready! Just make sure you've:

1. ✅ Created account at https://www.emailjs.com/
2. ✅ Set up email service (Gmail recommended)
3. ✅ Created email template with fields: `user_name`, `user_email`, `message`
4. ✅ Updated `.env.local` with your keys (already done!)

## Troubleshooting

### "Missing script: dev" error
- Make sure you're in the `portfolio` folder (the one with `package.json`)
- Run `pwd` to check your current directory

### Changes not showing up
- Restart the dev server (Ctrl+C, then `npm run dev`)
- Clear browser cache (Ctrl+Shift+R)

### Environment variables not working
- Restart the server after changing `.env.local`
- Make sure variable names start with `NEXT_PUBLIC_`

## Build for Production

```bash
npm run build
npm start
```

Your portfolio is ready to go! 🚀
