# Deployment Guide

## GitHub Setup

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `portfolio` (or your preferred name)
   - Description: "Premium portfolio website - Khiasu 2vis"
   - Set to **Public** (or Private if you prefer)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
   
   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Vercel Deployment

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign in with your GitHub account

2. **Import your repository:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure project:**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete (usually 1-2 minutes)
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Login to Vercel
   - Link to existing project or create new
   - Confirm settings
   - Deploy!

3. **Production deployment:**
   ```bash
   vercel --prod
   ```

## Post-Deployment

1. **Update README.md:**
   - Replace `https://your-vercel-url.vercel.app` with your actual Vercel URL

2. **Custom Domain (Optional):**
   - In Vercel dashboard → Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

3. **Environment Variables (if needed):**
   - In Vercel dashboard → Project Settings → Environment Variables
   - Add any required variables (currently none needed)

## Continuous Deployment

Vercel automatically deploys:
- Every push to `main` branch → Production
- Every push to other branches → Preview deployment

## Troubleshooting

### Build Errors
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Verify `next.config.mjs` is correct

### Image Issues
- Ensure `next.config.mjs` has correct `remotePatterns` for external images
- Check image URLs are accessible

### Performance
- Vercel automatically optimizes Next.js apps
- Images are automatically optimized via Next.js Image component

## Support

For issues:
- Check Vercel documentation: https://vercel.com/docs
- Next.js deployment guide: https://nextjs.org/docs/deployment
