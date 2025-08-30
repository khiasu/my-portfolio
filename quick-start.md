# ⚡ Quick Start Guide

## 🚀 Get Your Portfolio Live in 5 Minutes

### Step 1: Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

### Step 2: Customize Your Content
Edit `src/app/page.tsx` and update:
- Your name in the hero section
- Your description and skills
- Your projects list
- Your contact information

### Step 3: Deploy to Vercel
1. Push to GitHub: `git push origin main`
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

## 🎨 Quick Customization

### Change Colors
Edit `src/app/globals.css` - modify the CSS variables at the top

### Add Projects
Update the `projects` array in `src/app/page.tsx`:
```typescript
const projects = [
  {
    title: "Your Project",
    description: "Description here",
    tech: ["React", "Node.js"],
    github: "your-github-link",
    live: "your-live-link"
  }
]
```

### Update Skills
Modify the `skills` array:
```typescript
const skills = [
  { name: "Your Skill", level: 90 }
]
```

## 📱 Test Responsive Design
- Open browser dev tools
- Test on mobile, tablet, and desktop
- All animations work on all devices

## 🎯 Ready to Deploy?
Your portfolio is production-ready! Just push to GitHub and deploy to Vercel.

---

**Need more details?** Check `README.md` and `DEPLOYMENT.md`
