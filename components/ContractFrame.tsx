"use client";

import React from "react";

interface ContractFrameProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function ContractFrame({
  children,
  title,
  className = "",
}: ContractFrameProps) {
  return (
    <div className={`contract-container ${className}`}>
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-2xl font-cinzel-decorative font-bold text-gray-800 relative inline-block">
            {title}
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          </h2>
        </div>
      )}

      <div className="fancy-border">
        <span></span>
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
