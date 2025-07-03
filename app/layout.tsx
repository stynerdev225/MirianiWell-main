import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter, Cinzel_Decorative } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cinzelDecorative = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miriani Well",
  description: "An AI-powered platform for preparing for mock interviews",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || // First check for custom URL
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000")
  ),
  openGraph: {
    title: "Miriani Well",
    description:
      "An AI-powered wellness platform for your mental health journey",
    images: [
      {
        url: "/Website-Thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Miriani Well",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miriani Well",
    description:
      "An AI-powered wellness platform for your mental health journey",
    images: ["/Website-Thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#38b6ff",
          colorTextOnPrimaryBackground: "#ffffff",
          colorBackground: "#ffffff",
          colorInputBackground: "#ffffff",
          colorInputText: "#000000",
          colorDanger: "#ff66c4",
        },
        layout: {
          socialButtonsVariant: "iconButton",
          socialButtonsPlacement: "bottom",
        },
        elements: {
          formButtonPrimary:
            "bg-gradient-to-r from-[#0cc0df] to-[#38b6ff] hover:opacity-90",
          card: "shadow-md",
        },
      }}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl="/"
      afterSignUpUrl="/dashboard"
    >
      <html lang="en" className={`${cinzelDecorative.variable}`}>
        <body
          className={`${inter.className} antialiased`}
          suppressHydrationWarning
        >
          {children}
          <Toaster position="top-right" />

          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
