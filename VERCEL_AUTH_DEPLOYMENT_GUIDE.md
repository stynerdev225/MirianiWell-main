# 🚀 Vercel Authentication Deployment Guide

## The Problem We Solved
When deploying Next.js apps with authentication (Clerk, Auth0, etc.) to Vercel, you might encounter:
- **500 Internal Server Error** in production
- **Environment variables not found** errors
- **Authentication not working** despite local development working fine
- **"Secret does not exist"** errors during deployment

## ⚡ Quick Fix Checklist (Do This First!)

### 1. **Check Your `vercel.json` File**
❌ **WRONG - This will cause deployment failures:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "npm install",
  "env": {
    "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY": "@next_public_clerk_publishable_key",
    "CLERK_SECRET_KEY": "@clerk_secret_key"
  }
}
```

✅ **CORRECT - Simple configuration:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "npm install"
}
```

### 2. **Add Environment Variables to Vercel Dashboard**
Two ways to do this:

#### Option A: Via Vercel CLI (Recommended)
```bash
# Navigate to your project directory
cd /path/to/your/project

# Add each environment variable to production
vercel env add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY production
vercel env add CLERK_SECRET_KEY production
vercel env add NEXT_PUBLIC_CLERK_FRONTEND_API production
vercel env add NEXT_PUBLIC_CLERK_SIGN_IN_URL production
vercel env add NEXT_PUBLIC_CLERK_SIGN_UP_URL production
vercel env add NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL production
vercel env add NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL production
# Add any other environment variables your app needs

# Verify they were added
vercel env list production
```

#### Option B: Via Vercel Dashboard
1. Go to your project on vercel.com
2. Click **Settings** → **Environment Variables**
3. Add each variable for the **Production** environment
4. Copy values from your `.env.local` file

### 3. **Clean Deploy**
```bash
# Deploy to production
vercel --prod
```

## 🔍 Complete Step-by-Step Troubleshooting

### Step 1: Identify the Issue
Common error messages that indicate auth environment variable issues:
- `Environment Variable "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY" references Secret "next_public_clerk_publishable_key", which does not exist`
- `500 Internal Server Error` in production (but works locally)
- Authentication redirects not working

### Step 2: Clean Your `vercel.json`
Remove any `env` section that references secrets with `@` symbols:
```bash
# Edit vercel.json to remove the env section entirely
```

### Step 3: Set Up Environment Variables Properly
```bash
# Create a clean environment file for reference
cat > .env.vercel <<EOF
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here
NEXT_PUBLIC_CLERK_FRONTEND_API=your_frontend_api_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
EOF

# Add each variable to Vercel production environment
vercel env add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY production
# (Enter the value when prompted)
vercel env add CLERK_SECRET_KEY production
# (Enter the value when prompted)
# ... continue for all variables

# Clean up the temporary file
rm .env.vercel
```

### Step 4: Handle Duplicate Environment Variables
If you get errors about existing variables:
```bash
# Remove the problematic variable
vercel env remove VARIABLE_NAME production

# Add it back fresh
vercel env add VARIABLE_NAME production
```

### Step 5: Deploy and Verify
```bash
# Deploy to production
vercel --prod

# Verify environment variables are set
vercel env list production
```

## 🎯 Authentication-Specific Tips

### For Clerk Authentication
Required environment variables:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (from Clerk dashboard)
- `CLERK_SECRET_KEY` (from Clerk dashboard)
- `NEXT_PUBLIC_CLERK_FRONTEND_API` (usually auto-generated)
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL` (usually `/sign-in`)
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL` (usually `/sign-up`)
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` (redirect after login)
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` (redirect after signup)

### For Auth0
Required environment variables:
- `AUTH0_SECRET`
- `AUTH0_BASE_URL`
- `AUTH0_ISSUER_BASE_URL`
- `AUTH0_CLIENT_ID`
- `AUTH0_CLIENT_SECRET`

### For NextAuth.js
Required environment variables:
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- Provider-specific variables (Google, GitHub, etc.)

## 🚨 Common Pitfalls to Avoid

### 1. **Don't Use Secrets in `vercel.json`**
❌ Avoid: `"@secret_name"` syntax in vercel.json
✅ Use: Regular environment variables added via CLI/dashboard

### 2. **Don't Mix Environment Types**
❌ Avoid: Adding the same variable to multiple environments without intention
✅ Use: Specific environment variables for each deployment stage

### 3. **Don't Forget Public Variables**
❌ Avoid: Missing `NEXT_PUBLIC_` prefix for client-side variables
✅ Use: Proper prefixes for variables that need to be available in the browser

### 4. **Don't Deploy Without Verification**
❌ Avoid: Deploying without checking environment variables are set
✅ Use: `vercel env list` to verify before deployment

## 🔧 Quick Commands Reference

```bash
# Check current environment variables
vercel env list

# Check specific environment
vercel env list production

# Add new environment variable
vercel env add VARIABLE_NAME production

# Remove environment variable
vercel env remove VARIABLE_NAME production

# Deploy to production
vercel --prod

# Check deployment status
vercel list

# Check project settings
vercel project
```

## 📋 Pre-Deployment Checklist

Before deploying any authentication-enabled project:

- [ ] `vercel.json` is clean (no `env` section with `@` references)
- [ ] All required environment variables are added to Vercel production
- [ ] Environment variables are verified with `vercel env list production`
- [ ] Local `.env.local` file is NOT committed to git
- [ ] Authentication provider (Clerk/Auth0) is properly configured
- [ ] Redirect URLs are set correctly in auth provider dashboard
- [ ] Test authentication flow works locally

## 💡 Pro Tips

1. **Keep a Reference File**: Create a `.env.example` file with variable names (not values) for future reference
2. **Use Different Keys**: Use different authentication keys for development and production
3. **Test Locally First**: Always test authentication locally before deploying
4. **Document Your Setup**: Keep notes of your authentication configuration
5. **Version Control**: Never commit actual environment variables to git

## 🆘 If You're Still Having Issues

1. **Check Vercel Function Logs**: Go to Vercel dashboard → Functions → View logs
2. **Clear Build Cache**: Redeploy with `vercel --prod --force`
3. **Check Domain Settings**: Ensure your domain is properly configured
4. **Verify Provider Settings**: Double-check authentication provider configuration

---

**Save this guide and reference it for every authentication deployment!** 📌

*Last updated: July 4, 2025*
