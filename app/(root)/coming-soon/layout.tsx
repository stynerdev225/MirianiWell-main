import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon - Miriani Well",
  description: "Join the waitlist for the newest addition to the Miriani Well wellness platform.",
  openGraph: {
    title: "Coming Soon - Miriani Well",
    description: "Join the waitlist for the newest addition to the Miriani Well wellness platform.",
    images: ["/Website-Thumbnail.png"],
  },
};

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
