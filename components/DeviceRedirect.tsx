import { useEffect } from "react";
import { useRouter } from "next/router";

type DeviceType = "mobile" | "desktop";

// Function to detect device type
const detectDevice = (): DeviceType => {
  // Client-side only
  if (typeof window === "undefined") {
    return "desktop"; // Default to desktop for SSR
  }

  // Check screen width (common breakpoint for mobile is 768px)
  return window.innerWidth < 768 ? "mobile" : "desktop";
};

export default function DeviceRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Only run client-side
    if (typeof window === "undefined") return;

    const handleRedirect = () => {
      const device = detectDevice();
      const isHomePage = router.pathname === "/" || router.pathname === "/home";
      const isMobilePage = router.pathname === "/mobile-home";

      // Redirect to appropriate version if needed
      if (isHomePage && device === "mobile" && !isMobilePage) {
        router.replace("/mobile-home");
      } else if (isMobilePage && device === "desktop") {
        router.replace("/");
      }
    };

    // Check on initial load
    handleRedirect();

    // Also check when window is resized
    window.addEventListener("resize", handleRedirect);

    return () => {
      window.removeEventListener("resize", handleRedirect);
    };
  }, [router]);

  // This component doesn't render anything
  return null;
}
