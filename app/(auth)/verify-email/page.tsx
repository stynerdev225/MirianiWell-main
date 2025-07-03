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
    <div className="text-center shadow-lg px-10 py-10 rounded-2xl border border-gray-50 bg-white w-full md:w-[480px]">
      <div className="mb-6 flex justify-center">
        <img
          src="/logo.png"
          alt="Miriani Well Logo"
          width={160}
          height={160}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold mb-4">Email Verification</h3>
      <p className="text-gray-600 dark:text-gray-400">
        Redirecting to sign in...
      </p>
    </div>
  );
}
