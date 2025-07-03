import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal - Miriani Well",
  description:
    "Track your mental health journey with daily journaling and mood tracking",
  openGraph: {
    title: "Journal - Miriani Well",
    description:
      "Track your mental health journey with daily journaling and mood tracking",
    images: ["/Website-Thumbnail.png"],
  },
};

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
