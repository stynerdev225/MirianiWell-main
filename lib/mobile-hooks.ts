import { useState, useEffect } from "react";

// Hook for checking mobile device
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the device is mobile
    const checkIsMobile = () => {
      // Check for mobile user agent
      const userAgent =
        typeof navigator !== "undefined"
          ? navigator.userAgent ||
            navigator.vendor ||
            (window as Window as { opera?: string }).opera ||
            ""
          : "";
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

      // Also check screen width as a backup
      const isMobileWidth = window.innerWidth < 768;

      setIsMobile(mobileRegex.test(userAgent) || isMobileWidth);
    };

    // Check immediately on mount
    checkIsMobile();

    // Set up event listener for resize
    window.addEventListener("resize", checkIsMobile);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return isMobile;
}

// Hook to detect when to show mobile version
export function useMobileRedirect() {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile && window.location.pathname === "/") {
      // Check if we're not already on the mobile version
      if (!window.location.pathname.includes("mobile")) {
        window.location.href = "/mobile-home";
      }
    }
  }, [isMobile]);

  return isMobile;
}

// Animation hooks for mobile
export function useSwipeAnimation() {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(
    null
  );

  // The minimum distance the user needs to swipe to trigger a swipe event
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    setIsSwiping(false);

    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setSwipeDirection("left");
    } else if (isRightSwipe) {
      setSwipeDirection("right");
    } else {
      setSwipeDirection(null);
    }

    // Reset
    setTouchStart(0);
    setTouchEnd(0);
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    isSwiping,
    swipeDirection,
  };
}

// Hook for scroll animations on mobile
export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    scrollY,
    isScrolled,
  };
}
