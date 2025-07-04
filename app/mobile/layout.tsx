import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miriani Well - Mobile Version",
  description: "Mobile version of Miriani Well",
};

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mobile-layout">
      {children}
    </div>
  );
}
