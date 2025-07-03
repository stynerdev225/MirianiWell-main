"use client";

import Head from "next/head";
import { useEffect } from "react";

interface MetaTagsProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  canonicalUrl?: string;
}

/**
 * This component adds extra meta tags for social sharing
 * Use it in addition to the Next.js metadata API for client-side enhancements
 */
export default function MetaTags({
  title = "Miriani Well - Your AI Wellness Companion",
  description = "An AI-powered wellness platform designed to support your mental health journey",
  imageUrl = "/Website-Thumbnail.png",
  imageAlt = "Miriani Well App Screenshot",
  canonicalUrl,
}: MetaTagsProps) {
  // Get the base URL
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    (typeof window !== "undefined" ? window.location.origin : "");

  // Create full image URL
  const fullImageUrl = imageUrl.startsWith("http")
    ? imageUrl
    : `${baseUrl}${imageUrl}`;

  // Create canonical URL
  const fullCanonicalUrl = canonicalUrl
    ? canonicalUrl.startsWith("http")
      ? canonicalUrl
      : `${baseUrl}${canonicalUrl}`
    : typeof window !== "undefined"
    ? window.location.href
    : "";

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OpenGraph Meta Tags for Facebook, LinkedIn, etc */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Canonical Link */}
      {canonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
    </Head>
  );
}
