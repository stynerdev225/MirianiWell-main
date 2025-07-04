import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miriani Well - Mobile Optimized",
  description: "Mobile optimized version of Miriani Well",
};

export default function MobileOptimizedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mobile-optimized-layout">
      {children}
    </div>
  );
}
