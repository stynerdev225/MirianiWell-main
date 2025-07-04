# Deployment Guide for Miriani Well

This guide covers how to deploy the Miriani Well application to Netlify and set up all required environment variables and configurations.

## Prerequisites

- Node.js 18.x or newer
- npm or yarn
- Git
- Netlify CLI (`npm install -g netlify-cli`)
- Clerk account (for authentication)

## Setting Up Clerk

1. Create a Clerk application at [https://dashboard.clerk.com/](https://dashboard.clerk.com/)
2. Configure your Clerk application settings:
   - In the Clerk dashboard, go to **API Keys**
   - Note your **Publishable Key** and **Secret Key**
   - Set up your application URL in the allowed origins (e.g., `https://miriani-well.netlify.app`)

## Deploying to Netlify

### Automatic Deployment Script

We've created a script to simplify the deployment process:

```bash
# Make the script executable (if needed)
chmod +x setup-clerk-netlify.sh

# Run the setup script
./setup-clerk-netlify.sh
```

The script will:

1. Check if Netlify CLI is installed
2. Prompt you to log in to Netlify if needed
3. Ask for your Clerk API keys
4. Set up all environment variables in Netlify
5. Trigger a deployment

### Manual Deployment Steps

If you prefer to deploy manually:

1. **Push your code to GitHub**:

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Link your project to Netlify**:

   ```bash
   netlify login
   netlify sites:create --name miriani-well
   ```

3. **Set up environment variables**:

   ```bash
   netlify env:set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY "your_publishable_key"
   netlify env:set CLERK_SECRET_KEY "your_secret_key"
   netlify env:set NEXT_PUBLIC_APP_URL "https://miriani-well.netlify.app"
   ```

4. **Deploy your site**:

   ```bash
   npm run build
   netlify deploy --prod
   ```

## Troubleshooting

### Clerk Authentication Issues

If you see errors like:

```text
@clerk/nextjs: Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.
```

Make sure that:

1. You've set `CLERK_SECRET_KEY` in your Netlify environment variables
2. You've redeployed after setting the environment variables
3. Your keys are correctly formatted and not expired

### Mobile Optimization Issues

If mobile views don't look right, check:

1. The mobile-specific components in `app/mobile/` and `app/mobile-optimized/`
2. The device detection logic in the middleware
3. The responsive design classes in the Tailwind CSS files

## Updating Your Deployment

To update your deployed site:

1. Make your changes locally
2. Test them thoroughly
3. Commit and push to GitHub
4. The site will automatically redeploy if you have CI/CD set up, or run:

   ```bash
   npm run deploy
   ```

## Custom Domains

To set up a custom domain:

1. Go to the Netlify dashboard
2. Navigate to your site settings
3. Go to "Domain management"
4. Follow the instructions to add your custom domain
5. Update your Clerk settings to include the new domain in allowed origins
