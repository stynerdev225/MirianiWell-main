import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healing Companion - Miriani Well",
  description:
    "Your AI wellness companion for mental health support, personalized guidance, and mindfulness practices",
  openGraph: {
    title: "Healing Companion - Miriani Well",
    description:
      "Your AI wellness companion for mental health support, personalized guidance, and mindfulness practices",
    images: ["/Website-Thumbnail.png"],
  },
};

export default function HealingCompanionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
