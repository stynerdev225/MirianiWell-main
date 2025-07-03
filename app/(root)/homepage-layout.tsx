import { Metadata } from "next";

// This enhances the metadata for the home page specifically
export const metadata: Metadata = {
  title: "Miriani Well - Your AI Wellness Companion",
  description: "An AI-powered wellness platform designed to support your mental health journey with personalized guidance and tools",
  openGraph: {
    title: "Miriani Well - Your AI Wellness Companion",
    description: "An AI-powered wellness platform designed to support your mental health journey with personalized guidance and tools",
    images: [
      {
        url: "/Website-Thumbnail.png",
        width: 1200,
        height: 1200,
        alt: "Miriani Well App Screenshot",
      }
    ],
  },
};

// This is just a layout wrapper for the home page
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
