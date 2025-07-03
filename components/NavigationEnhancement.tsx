// This is a client-side only effect to enhance the NavItems after hydration
"use client";

import { useEffect } from "react";

export function useNavigationEnhancement() {
  useEffect(() => {
    // This code runs only in the browser after hydration is complete
    const enhanceNavigation = () => {
      // You can use DOM manipulation here to add classes or behaviors
      // to the navigation elements after React has hydrated the page

      // Example: Add hover animations to navigation items
      const navItems = document.querySelectorAll(".nav-item-enhance");
      navItems.forEach((item) => {
        item.classList.add("hover:-translate-y-[2px]", "duration-300");
      });

      // Example: Add animations to mobile navigation items
      const mobileNavItems = document.querySelectorAll(
        ".mobile-nav-item-enhance"
      );
      mobileNavItems.forEach((item) => {
        const icon = item.querySelector("svg");
        if (icon) {
          icon.classList.add(
            "transition-transform",
            "hover:scale-110",
            "duration-300"
          );
        }
      });

      // Add animation to the tagline
      const taglines = document.querySelectorAll(".tagline");
      taglines.forEach((tagline) => {
        tagline.classList.add("opacity-0");
        setTimeout(() => {
          tagline.classList.remove("opacity-0");
          tagline.classList.add(
            "transition-opacity",
            "duration-700",
            "opacity-100"
          );
        }, 800); // Delay the appearance after the logo animation
      });
    };

    enhanceNavigation();

    // Clean up function if needed
    return () => {
      // Any cleanup code here
    };
  }, []); // Empty dependency array means this runs once after initial render

  return null;
}
