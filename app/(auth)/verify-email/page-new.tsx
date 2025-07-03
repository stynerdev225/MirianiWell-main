"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VerifyEmailPage() {
  const router = useRouter();

  useEffect(() => {
    // Clerk handles email verification automatically
    // Redirect to sign-in page
    router.push("/sign-in");
  }, [router]);

  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold mb-4">Email Verification</h3>
      <p className="text-gray-600 dark:text-gray-400">
        Redirecting to sign in...
      </p>
    </div>
  );
}
