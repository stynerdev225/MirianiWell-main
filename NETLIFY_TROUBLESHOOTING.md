# Netlify Deployment and Troubleshooting Guide

This guide covers common issues and solutions for deploying this Next.js application to Netlify.

## Deployment Steps

For a clean deployment, use the comprehensive deployment script:

```bash
# Deploy with complete build process and cache clearing
npm run deploy:complete
```

## Troubleshooting 404 Errors

If you're experiencing "Page not found" errors on your Netlify deployment, try these solutions:

### 1. Clear Cache and Redeploy

```bash
# Use the fresh deployment script
npm run deploy:fresh
```

### 2. Check Netlify Configuration

Ensure your `netlify.toml` has the correct settings:

- `publish` directory should be `.next`
- The Next.js plugin should be enabled
- Redirects should be properly configured

### 3. Verify File Structure

Make sure these files are properly set up:

- `_redirects` in the public folder
- `404.html` in the public folder
- `.next` directory contains copied public assets

### 4. Middleware Issues

If authentication middleware is causing problems, temporarily disable it for testing:

- Check `middleware.ts` and simplify/disable authentication
- Comment out the route protection

### 5. Try the New Config

If problems persist, try the alternative Next.js configuration:

```bash
# Backup the current config
mv next.config.js next.config.js.original
# Use the new config
mv next.config.js.new next.config.js
# Deploy with the new config
npm run deploy:complete
```

### 6. Check for Trailing Slash Issues

Next.js and Netlify can sometimes have conflicts with trailing slashes in URLs. Try both versions:

- With trailing slash: `/dashboard/`
- Without trailing slash: `/dashboard`

## Image Loading Issues

For images that don't load properly on Netlify:

1. Move images to Cloudflare R2 storage
2. Update image references to use the R2 URLs
3. Ensure the R2 domain is in the `remotePatterns` in `next.config.js`

## Netlify Functions Debugging

If you're having routing issues related to Netlify Functions:

1. Check the Functions tab in the Netlify dashboard
2. Look for errors in the function logs
3. Verify that the `@netlify/plugin-nextjs` plugin is working correctly

## Common Fixes

- Use `output: "standalone"` in `next.config.js`
- Add `trailingSlash: true` to standardize URLs
- Ensure `_redirects` file prioritizes Next.js handler
- Verify all routes are handled correctly in `middleware.ts`

## Ultimate 404 Fix: Static Export Approach

When other methods fail, converting to a static export often resolves persistent 404 issues with Next.js on Netlify:

### Step 1: Prepare Static Configuration

The static configuration is already available in `next.config.static.js`. It contains:

- `output: "export"` to enable static site generation
- `trailingSlash: true` for consistent URLs
- `unoptimized: true` for images
- Proper configuration for Cloudflare R2 image domains

### Step 2: Deploy as Static Site

```bash
# This script handles the entire process
npm run deploy:static
```

This approach:

1. Temporarily switches to static export configuration
2. Builds the site as static HTML/CSS/JS files
3. Uses a different Netlify configuration optimized for static sites
4. Deploys to Netlify with proper routing

### Step 3: Verify Functionality

After deployment, check:

- Homepage loads correctly
- Navigation between pages works
- Authentication still functions (may require adjustments)
- Images display properly

### When to Use This Approach

Use the static export approach when:

- You've tried all other troubleshooting steps
- Server-side functionality isn't critical
- You prioritize reliable routing over dynamic features

### Limitations

Be aware that static export has some limitations:

- No server-side rendering
- No API routes (must use external APIs)
- No middleware functionality
- Authentication must be client-side only

### Reverting Back

If needed, you can revert to the server-rendered approach:

```bash
# Revert to regular deployment
npm run deploy
```
