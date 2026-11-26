"use client";

import { ResumeBackground } from "@/components/resume/resume-backgrounds";
import { resumeStyleThemes } from "@/config/resume-style";
import { useHomeStyle } from "@/contexts/home-style-context";
import type { CSSProperties } from "react";

interface ResumeStyleWrapperProps {
  children: React.ReactNode;
  toolbar: React.ReactNode;
}

export function ResumeStyleWrapper({ children, toolbar }: ResumeStyleWrapperProps) {
  const { style, mounted } = useHomeStyle();
  const config = resumeStyleThemes[style];

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <div
      className="relative min-h-screen print:bg-white! print:min-h-0"
      style={{ ...config.wrapperStyle, ...config.cssVars } as CSSProperties}
    >
      <div className="print:hidden">
        <ResumeBackground kind={config.background} />
      </div>
      {toolbar}
      <div
        className="resume-content container mx-auto px-6 py-8 w-full md:max-w-4xl lg:max-w-4xl print:max-w-none print:px-8 print:py-0 relative z-10"
        style={{
          ...config.paperBg,
          padding: config.paperPadding,
        }}
      >
        {children}
      </div>
    </div>
  );
}