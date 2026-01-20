# Vercel Deployment Guide

## Project Setup

This portfolio project is now ready for Vercel deployment. Here's what was configured:

## Changes Made

1. **Added vercel.json**: Configuration file for Vercel deployment with proper routing rules
2. **Updated vite.config.js**: Added `base: './'` for proper asset loading
3. **Updated index.html**: Changed asset paths to use relative paths (`./` instead of `/`)
4. **Added .vercelignore**: Excluded unnecessary files from deployment

## Deployment Steps

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

### Option 2: Deploy via Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" -> "Project"
3. Import your Git repository or drag and drop the project folder
4. Vercel will automatically detect the configuration

### Option 3: Connect Git Repository

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New" -> "Project"
4. Select your repository
5. Vercel will automatically deploy when you push changes

## Important Notes

- The project uses React Router for client-side navigation
- The `vercel.json` file ensures all routes are handled by the main `index.html`
- Assets are properly configured with relative paths for deployment
- The build command `npm run build` creates a `dist` folder that Vercel will deploy

## Environment Variables

No environment variables are required for this basic portfolio deployment.

## Post-Deployment

After deployment:
- Test all routes (`/`, `/about`, `/experience`)
- Verify all assets load correctly
- Check responsive design on different devices