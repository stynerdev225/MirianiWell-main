"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary:
            "bg-gradient-to-r from-[#7d55e6] to-[#38b6ff] hover:opacity-95 text-white py-3 text-base font-medium max-w-xs mx-auto rounded-full shadow-md",
          formInputGroup: "max-w-md mx-auto",
          formInput:
            "h-12 rounded-xl border border-gray-200 focus:border-[#38b6ff] focus:ring focus:ring-blue-200 focus:ring-opacity-30 px-4 text-base transition-all duration-200 shadow-sm text-center",
          logoBox: "w-full flex justify-center",
          identityPreviewText: "text-center",
          identityPreview: "flex justify-center flex-col",
          main: "flex flex-col items-center",
          form: "flex flex-col items-center w-full",
          headerTitle: "text-center text-2xl font-semibold text-gray-800",
          headerSubtitle: "text-center text-gray-500 mb-6",
          socialButtonsIconButton:
            "border border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-xl",
          formFieldInput__identifier: "mb-6",
          rootBox: "w-full md:w-[480px] flex flex-col items-center",
          card: "shadow-lg rounded-2xl border border-gray-50 flex flex-col items-center w-full bg-white",
          footer: "mt-6",
          footerAction: "text-center",
          footerActionText: "text-gray-600",
          footerActionLink: "text-[#38b6ff] font-medium hover:underline",
          dividerLine: "bg-gray-200",
          dividerText: "text-gray-400 px-3 bg-white",
        },
        layout: {
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "iconButton",
        },
        variables: {
          spacingUnit: "0.75rem",
          fontWeight: {
            normal: "500",
            medium: "600",
            bold: "700",
          },
          borderRadius: "0.75rem",
        },
      }}
    />
  );
}
