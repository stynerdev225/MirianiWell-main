"use client";

import { useNavigationEnhancement } from "@/components/NavigationEnhancement";

export default function ClientEnhancement() {
  // This will run only on the client after hydration
  useNavigationEnhancement();

  // This component doesn't render anything visible
  return null;
}
