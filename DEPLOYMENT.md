# Deployment Guide

This guide will help you deploy the AI Exam Grading Guide to Vercel.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account
- A Vercel account (free tier is sufficient)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to Git Repository**
   ```bash
   # Create a new repository on GitHub, GitLab, or Bitbucket
   # Then add it as a remote and push
   git remote add origin YOUR_REPOSITORY_URL
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will automatically detect Next.js settings
   - Click "Deploy"

3. **Done!**
   - Your app will be live at a Vercel URL (e.g., `your-app.vercel.app`)
   - Vercel provides automatic HTTPS and global CDN

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Log in to your Vercel account
   - Confirm project settings
   - Deploy!

## Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS records as instructed

## Environment Variables

This application doesn't require any environment variables for basic functionality. If you add API integrations in the future:

1. Go to Project Settings → Environment Variables in Vercel
2. Add your variables
3. Redeploy the application

## Continuous Deployment

Once connected to your Git repository, Vercel automatically:
- Deploys on every push to the main branch
- Creates preview deployments for pull requests
- Provides deployment previews with unique URLs

## Monitoring

- Visit your Vercel dashboard to monitor:
  - Deployment status
  - Build logs
  - Analytics (available on paid plans)
  - Performance metrics

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure `npm run build` works locally
- Verify all dependencies are in `package.json`

### Runtime Errors
- Check the Function Logs in Vercel
- Ensure the app runs properly with `npm run start` locally

### Slow Performance
- Next.js static generation is already optimized
- Consider upgrading to Vercel Pro for better performance
- Enable analytics to identify bottlenecks

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
