import { Metadata } from "next";

export const generateMetadata = async ({
  params: _, // eslint-disable-line @typescript-eslint/no-unused-vars
  searchParams,
}: {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { product?: string };
}): Promise<Metadata> => {
  const product = searchParams?.product || "New Product";

  return {
    title: `${product} - Coming Soon | Miriani Well`,
    description: `Join the waitlist for ${product} - the newest addition to the Miriani Well wellness platform.`,
    openGraph: {
      title: `${product} - Coming Soon | Miriani Well`,
      description: `Join the waitlist for ${product} - the newest addition to the Miriani Well wellness platform.`,
      images: ["/Website-Thumbnail.png"],
    },
  };
};

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
