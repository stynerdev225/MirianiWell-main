import Link from "next/link";

export default function MobileOptimizedPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mobile Optimized Experience</h1>
      <p className="mb-4">
        Welcome to the mobile-optimized version of Miriani Well. This page has been
        specially designed for smaller screens.
      </p>
      <div className="mt-6">
        <Link href="/dashboard" className="block w-full py-3 px-4 bg-purple-600 text-white text-center rounded-lg mb-3">
          Go to Dashboard
        </Link>
        <Link href="/journal" className="block w-full py-3 px-4 bg-blue-600 text-white text-center rounded-lg mb-3">
          Open Journal
        </Link>
        <Link href="/affirmations" className="block w-full py-3 px-4 bg-green-600 text-white text-center rounded-lg mb-3">
          View Affirmations
        </Link>
        <Link href="/healing-companion" className="block w-full py-3 px-4 bg-indigo-600 text-white text-center rounded-lg">
          Visit Healing Companion
        </Link>
      </div>
    </div>
  );
}
