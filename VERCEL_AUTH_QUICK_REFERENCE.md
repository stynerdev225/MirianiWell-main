# 🚀 Quick Reference: Vercel Auth Deployment

## THE GOLDEN RULE
**Never put environment variables with `@` symbols in `vercel.json`!**

## 3-Step Fix for Any Auth Deployment Issue

### Step 1: Clean `vercel.json`
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "npm install"
}
```

### Step 2: Add Environment Variables
```bash
vercel env add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY production
vercel env add CLERK_SECRET_KEY production
# Add all your auth variables...
```

### Step 3: Deploy
```bash
vercel --prod
```

## Quick Commands
```bash
# Check what's set
vercel env list production

# Remove problematic variable
vercel env remove VARIABLE_NAME production

# Add variable
vercel env add VARIABLE_NAME production
```

## Common Auth Variables
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLERK_FRONTEND_API`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`

**Save this for every auth project!** 📌
