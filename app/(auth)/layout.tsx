import React from "react";
import "./auth.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white bg-gradient-to-br from-gray-50 to-blue-50/30 px-4">
      {children}
    </div>
  );
}
