import Link from "next/link";

export default function MobilePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mobile Version</h1>
      <p>
        This page is optimized for mobile devices. You&apos;ve been redirected here because 
        you&apos;re accessing from a mobile device.
      </p>
      <div className="mt-4">
        <Link href="/" className="text-blue-500 underline">
          Go to full site anyway
        </Link>
      </div>
    </div>
  );
}
