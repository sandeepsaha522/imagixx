import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  // ignoredRoutes: ["/api/webhooks(.*)"],
  publicRoutes: ["/","/api/webhooks/clerk","/api/webhooks/stripe"],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};