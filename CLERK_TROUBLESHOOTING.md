# Clerk Authentication Troubleshooting

This document provides detailed solutions for common Clerk authentication issues encountered during deployment, particularly to Vercel.

## Common Error: `useUser can only be used within the <ClerkProvider /> component`

This error occurs during static site generation (SSG) when Clerk hooks are used outside of the `ClerkProvider` context.

### Causes

1. **Static Generation of Authentication-dependent Pages**:
   Next.js tries to statically generate pages that use Clerk hooks during build time, but the `ClerkProvider` is not available in this context.

2. **Multiple Versions of Clerk Packages**:
   Having multiple versions of `@clerk/shared` or other Clerk packages can cause compatibility issues.

### Solutions

#### 1. Use Dynamic Rendering for Auth Pages

Add the following directive to any page using Clerk hooks:

```tsx
export const dynamic = "force-dynamic";
```

Example:

```tsx
// clerk-debug/page.tsx
"use client";

import { useUser, useClerk } from "@clerk/nextjs";
import { useEffect } from "react";

// Force dynamic rendering
export const dynamic = "force-dynamic";

export default function ClerkDebugPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  // rest of the component
}
```

#### 2. Add Loading States

Always include loading states to handle cases when Clerk isn't initialized:

```tsx
if (!isLoaded) {
  return (
    <div className="loading-container">
      <h1>Loading authentication...</h1>
    </div>
  );
}
```

#### 3. Check for Multiple Clerk Package Versions

Run the provided script to check for package conflicts:

```bash
npm run check:clerk
```

If multiple versions are found, you can fix dependencies automatically:

```bash
npm run fix:clerk
```

Or manually deduplicate your packages:

```bash
npm run dedupe
```

#### 4. Update Middleware Configuration

Ensure your middleware properly excludes authentication-sensitive pages from static generation:

```typescript
// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(async (auth, req) => {
  // Skip Clerk for debugging pages
  if (req.nextUrl.pathname.startsWith("/clerk-debug")) {
    return;
  }

  // List of public paths that don't require authentication
  const publicPaths = ["/", "/about", "/sign-in", "/sign-up"];

  // Check if the current path is public
  const isPublicPath = publicPaths.some(
    (path) =>
      req.nextUrl.pathname === path ||
      req.nextUrl.pathname.startsWith(`${path}/`)
  );

  // Skip auth for public paths
  if (isPublicPath) {
    return;
  }

  // Optional: Protect routes that require authentication
  // if (!auth.userId) {
  //   return auth.redirectToSignIn();
  // }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

## Deploying with Fixed Configuration

We've created specialized scripts to address these issues during deployment:

1. **Use the Clerk-fixed deployment script**:

   ```bash
   npm run deploy:clerk-fixed
   ```

1. **Use the Vercel-specific deployment script**:

   ```bash
   npm run deploy:vercel-fixed
   ```

These scripts:

- Create optimized Next.js configuration for deployment
- Configure the middleware to handle authentication properly
- Set up environment variables for Clerk
- Skip problematic pages during static generation

## Environment Variables

Ensure these Clerk-related environment variables are properly set in your Vercel project settings:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

## Additional Resources

- [Clerk Documentation](https://clerk.com/docs)
- [Next.js Authentication Guide](https://nextjs.org/docs/authentication)
- [Vercel Deployment Guide](https://vercel.com/docs/deployments/overview)
