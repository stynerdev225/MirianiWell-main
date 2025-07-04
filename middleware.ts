import { clerkMiddleware } from "@clerk/nextjs/server";

// Define public paths that don't require authentication
const publicPaths = ['/sign-in', '/sign-up', '/', '/about', '/contact'];

function isPublicPath(pathname: string): boolean {
  return publicPaths.some(path => pathname === path || pathname.startsWith(path + '/'));
}

export const config = {
  // Matches all routes except for static files and Next.js internals
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
export default clerkMiddleware(async (auth, req) => {
  // Skip Clerk for the debug page to avoid static generation issues
  if (req.nextUrl.pathname.startsWith('/clerk-debug')) {
    return;
  }
  
  // Skip auth for public paths
  if (isPublicPath(req.nextUrl.pathname)) {
    return;
  }
  
  // Optional: Add any logic to run before the route handler
  // For example, redirecting unauthenticated users
  // if (!auth.userId && !isPublicPath(req.nextUrl.pathname)) {
  //   const signInUrl = new URL('/sign-in', req.url);
  //   signInUrl.searchParams.set('redirect_url', req.url);
  //   return Response.redirect(signInUrl);
  // }
});
