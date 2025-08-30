# 🚀 Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## 📋 Prerequisites

- Node.js 18+ installed
- Git repository set up
- All dependencies installed (`npm install`)

## 🎯 Quick Deploy Options

### 1. Vercel (Recommended - Easiest)

**Step 1: Prepare Your Repository**
```bash
# Make sure all changes are committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

**Step 2: Deploy to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect Next.js settings
6. Click "Deploy"

**Step 3: Custom Domain (Optional)**
1. In your Vercel dashboard, go to project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS settings as instructed

### 2. Netlify

**Step 1: Build Settings**
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18

**Step 2: Deploy**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder or connect GitHub
3. Configure build settings
4. Deploy

### 3. Railway

**Step 1: Connect Repository**
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub account
3. Select your repository
4. Railway will auto-detect Next.js

**Step 2: Deploy**
- Railway will automatically build and deploy
- Get your live URL from the dashboard

## 🔧 Manual Deployment

### Build for Production
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test production build locally
npm run start
```

### Environment Variables
Create a `.env.local` file for any environment variables:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📱 Performance Optimization

### Before Deployment
1. **Optimize Images**: Use Next.js Image component
2. **Minimize Bundle**: Check bundle analyzer
3. **SEO**: Update metadata in `layout.tsx`
4. **Analytics**: Add Google Analytics or similar

### Post-Deployment
1. **Test Performance**: Use Lighthouse
2. **Check Mobile**: Test on various devices
3. **SEO**: Submit to search engines
4. **Monitor**: Set up error tracking

## 🔍 Troubleshooting

### Common Issues

**Build Fails**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

**Runtime Errors**
- Check browser console
- Verify all imports are correct
- Ensure all dependencies are installed

**Performance Issues**
- Optimize images
- Reduce bundle size
- Use dynamic imports for large components

## 📊 Analytics Setup

### Google Analytics
Add to `layout.tsx`:
```tsx
// Add Google Analytics script
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

### Vercel Analytics
```bash
npm install @vercel/analytics
```

## 🔒 Security

### Security Headers
Already configured in `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection

### Additional Security
- Use HTTPS only
- Implement CSP headers
- Regular dependency updates

## 📈 Monitoring

### Error Tracking
Consider adding:
- Sentry for error tracking
- LogRocket for session replay
- Vercel Analytics for performance

### Uptime Monitoring
- UptimeRobot
- Pingdom
- StatusCake

## 🎉 Success!

Your portfolio is now live! 

**Next Steps:**
1. Share your portfolio URL
2. Add to your resume/LinkedIn
3. Set up custom domain (optional)
4. Monitor performance
5. Regular updates and maintenance

---

**Need Help?** Check the main README.md for more detailed instructions.
