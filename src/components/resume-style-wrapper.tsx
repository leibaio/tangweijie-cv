"use client";

import { HomeStyle } from "@/config/home-style";
import { useEffect, useState } from "react";

interface ResumeStyleWrapperProps {
  children: React.ReactNode;
  toolbar: React.ReactNode;
}

const styleConfigs: Record<HomeStyle, {
  wrapperClass: string;
  wrapperStyle: React.CSSProperties;
  cssVars: Record<string, string>;
  paperClass: string;
  paperStyle: React.CSSProperties;
  dividerClass: string;
}> = {
  tech: {
    wrapperClass: "min-h-screen",
    wrapperStyle: {},
    cssVars: {},
    paperClass: "",
    paperStyle: {},
    dividerClass: "",
  },
  minimal: {
    wrapperClass: "min-h-screen",
    wrapperStyle: {},
    cssVars: {},
    paperClass: "",
    paperStyle: {},
    dividerClass: "",
  },
  terminal: {
    wrapperClass: "min-h-screen",
    wrapperStyle: { backgroundColor: "#0d1117" },
    cssVars: {
      "--background": "#0d1117",
      "--foreground": "#c9d1d9",
      "--card": "#161b22",
      "--card-foreground": "#c9d1d9",
      "--primary": "#7ee787",
      "--primary-foreground": "#0d1117",
      "--secondary": "#21262d",
      "--secondary-foreground": "#c9d1d9",
      "--muted": "#21262d",
      "--muted-foreground": "#8b949e",
      "--accent": "#21262d",
      "--accent-foreground": "#c9d1d9",
      "--border": "#30363d",
      "--input": "#30363d",
      "--ring": "#7ee787",
    },
    paperClass: "",
    paperStyle: { fontFamily: "'Geist Mono', 'Fira Code', monospace" },
    dividerClass: "bg-[#30363d]!",
  },
  chinese: {
    wrapperClass: "min-h-screen",
    wrapperStyle: { backgroundColor: "#F5F0E8" },
    cssVars: {
      "--background": "#F5F0E8",
      "--foreground": "#3D2B1F",
      "--card": "#FAF6EE",
      "--card-foreground": "#3D2B1F",
      "--primary": "#8B6914",
      "--primary-foreground": "#F5F0E8",
      "--secondary": "#EDE5D5",
      "--secondary-foreground": "#3D2B1F",
      "--muted": "#EDE5D5",
      "--muted-foreground": "#8B7355",
      "--accent": "#EDE5D5",
      "--accent-foreground": "#3D2B1F",
      "--border": "#D4C5A0",
      "--input": "#D4C5A0",
      "--ring": "#C5A33A",
    },
    paperClass: "",
    paperStyle: {},
    dividerClass: "",
  },
  magazine: {
    wrapperClass: "min-h-screen",
    wrapperStyle: { backgroundColor: "#FAF8F5" },
    cssVars: {
      "--background": "#FAF8F5",
      "--foreground": "#1A1A1A",
      "--card": "#FFFFFF",
      "--card-foreground": "#1A1A1A",
      "--primary": "#1A1A1A",
      "--primary-foreground": "#FAF8F5",
      "--secondary": "#F0EDE8",
      "--secondary-foreground": "#1A1A1A",
      "--muted": "#F0EDE8",
      "--muted-foreground": "#777",
      "--accent": "#F0EDE8",
      "--accent-foreground": "#1A1A1A",
      "--border": "#DDD",
      "--input": "#DDD",
      "--ring": "#C44536",
    },
    paperClass: "",
    paperStyle: {},
    dividerClass: "",
  },
  bauhaus: {
    wrapperClass: "min-h-screen",
    wrapperStyle: { backgroundColor: "#F5F2EB" },
    cssVars: {
      "--background": "#F5F2EB",
      "--foreground": "#1A1A1A",
      "--card": "#FFFFFF",
      "--card-foreground": "#1A1A1A",
      "--primary": "#1A1A1A",
      "--primary-foreground": "#F5F2EB",
      "--secondary": "#EAE7E0",
      "--secondary-foreground": "#1A1A1A",
      "--muted": "#EAE7E0",
      "--muted-foreground": "#666",
      "--accent": "#EAE7E0",
      "--accent-foreground": "#1A1A1A",
      "--border": "#1A1A1A33",
      "--input": "#1A1A1A33",
      "--ring": "#D0342D",
    },
    paperClass: "",
    paperStyle: { fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" },
    dividerClass: "",
  },
  retro: {
    wrapperClass: "min-h-screen",
    wrapperStyle: { backgroundColor: "#0A0A1A" },
    cssVars: {
      "--background": "#0A0A1A",
      "--foreground": "#EEEEFF",
      "--card": "#12122A",
      "--card-foreground": "#EEEEFF",
      "--primary": "#00FFFF",
      "--primary-foreground": "#0A0A1A",
      "--secondary": "#1A1A3A",
      "--secondary-foreground": "#EEEEFF",
      "--muted": "#1A1A3A",
      "--muted-foreground": "#8888AA",
      "--accent": "#1A1A3A",
      "--accent-foreground": "#EEEEFF",
      "--border": "#FF00FF33",
      "--input": "#FF00FF33",
      "--ring": "#FF00FF",
    },
    paperClass: "",
    paperStyle: { fontFamily: "'Press Start 2P', monospace", fontSize: "0.6rem" },
    dividerClass: "bg-[#FF00FF22]!",
  },
  glass: {
    wrapperClass: "min-h-screen",
    wrapperStyle: { backgroundColor: "#0C0E1A" },
    cssVars: {
      "--background": "#0C0E1A",
      "--foreground": "#FFFFFF",
      "--card": "rgba(255,255,255,0.04)",
      "--card-foreground": "#FFFFFF",
      "--primary": "#818CF8",
      "--primary-foreground": "#FFFFFF",
      "--secondary": "rgba(255,255,255,0.06)",
      "--secondary-foreground": "#FFFFFF",
      "--muted": "rgba(255,255,255,0.06)",
      "--muted-foreground": "rgba(255,255,255,0.5)",
      "--accent": "rgba(255,255,255,0.06)",
      "--accent-foreground": "#FFFFFF",
      "--border": "rgba(255,255,255,0.08)",
      "--input": "rgba(255,255,255,0.08)",
      "--ring": "#818CF8",
    },
    paperClass: "",
    paperStyle: {},
    dividerClass: "bg-white/[0.06]!",
  },
  f1: {
    wrapperClass: "min-h-screen",
    wrapperStyle: { backgroundColor: "#0A0A0A" },
    cssVars: {
      "--background": "#0A0A0A",
      "--foreground": "#FFFFFF",
      "--card": "#111111",
      "--card-foreground": "#FFFFFF",
      "--primary": "#E10600",
      "--primary-foreground": "#FFFFFF",
      "--secondary": "#1A1A1A",
      "--secondary-foreground": "#FFFFFF",
      "--muted": "#1A1A1A",
      "--muted-foreground": "rgba(255,255,255,0.5)",
      "--accent": "#1A1A1A",
      "--accent-foreground": "#FFFFFF",
      "--border": "rgba(225,6,0,0.2)",
      "--input": "rgba(225,6,0,0.2)",
      "--ring": "#E10600",
    },
    paperClass: "",
    paperStyle: { fontFamily: "'Geist Mono', 'Fira Code', monospace" },
    dividerClass: "bg-[#E10600]/15!",
  },
};

export function ResumeStyleWrapper({ children, toolbar }: ResumeStyleWrapperProps) {
  const [style, setStyle] = useState<HomeStyle>("tech");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("home-style") as HomeStyle | null;
    if (saved && Object.keys(styleConfigs).includes(saved)) {
      setStyle(saved);
    }
    setMounted(true);

    const handleChange = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail && Object.keys(styleConfigs).includes(detail)) {
        setStyle(detail as HomeStyle);
      }
    };
    window.addEventListener("home-style-change", handleChange);
    return () => window.removeEventListener("home-style-change", handleChange);
  }, []);

  const config = styleConfigs[style];

  // Background decorations per style
  const renderBackground = () => {
    switch (style) {
      case "tech":
        return (
          <>
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            <div className="noise-overlay" />
          </>
        );
      case "terminal":
        return (
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)",
            }}
          />
        );
      case "chinese":
        return (
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
              opacity: 0.8,
            }}
          />
        );
      case "retro":
        return (
          <>
            <div
              className="absolute inset-0 -z-10 pointer-events-none"
              style={{
                background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
              }}
            />
            <div
              className="absolute inset-0 -z-10 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%)",
              }}
            />
          </>
        );
      case "glass":
        return (
          <>
            <div
              className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl -z-10 pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(99,102,241,0.25), transparent 70%)",
                top: "-15%",
                left: "-10%",
              }}
            />
            <div
              className="absolute w-[500px] h-[500px] rounded-full blur-3xl -z-10 pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(6,182,212,0.2), transparent 70%)",
                top: "40%",
                right: "-5%",
              }}
            />
            <div
              className="absolute w-[400px] h-[400px] rounded-full blur-3xl -z-10 pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(236,72,153,0.15), transparent 70%)",
                bottom: "5%",
                left: "25%",
              }}
            />
          </>
        );
      case "magazine":
        return (
          <div
            className="absolute inset-0 -z-10 pointer-events-none opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
        );
      case "f1":
        return (
          <>
            {/* Carbon fiber pattern */}
            <div
              className="absolute inset-0 -z-10 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0zM30 30h30v30H30z' fill='%23111'/%3E%3Cpath d='M15 0h30v15H15zM0 15h15v30H0zM30 30h30v15H30zM15 45h15v15H15z' fill='%23161616'/%3E%3C/svg%3E")`,
                opacity: 0.6,
              }}
            />
            {/* Red speed lines */}
            <div
              className="absolute inset-0 -z-10 pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent 14.5%, rgba(225,6,0,0.04) 15%, rgba(225,6,0,0.04) 15.5%, transparent 16%, transparent 29.5%, rgba(225,6,0,0.04) 30%, rgba(225,6,0,0.04) 30.5%, transparent 31%, transparent 44.5%, rgba(225,6,0,0.04) 45%, rgba(225,6,0,0.04) 45.5%, transparent 46%, transparent 59.5%, rgba(225,6,0,0.04) 60%, rgba(225,6,0,0.04) 60.5%, transparent 61%, transparent 74.5%, rgba(225,6,0,0.04) 75%, rgba(225,6,0,0.04) 75.5%, transparent 76%)",
              }}
            />
          </>
        );
      default:
        return null;
    }
  };

  // Paper/card style for the resume content
  const paperBg = style === "terminal"
    ? { backgroundColor: "#161b22", border: "1px solid #30363d", borderRadius: 8 }
    : style === "glass"
    ? {
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
      }
    : style === "retro"
    ? { border: "2px solid #FF00FF33" }
    : style === "magazine"
    ? { borderLeft: "3px solid #C44536" }
    : style === "bauhaus"
    ? { borderTop: "4px solid #1A1A1A" }
    : style === "f1"
    ? { border: "1px solid rgba(225,6,0,0.15)", borderTop: "3px solid #E10600" }
    : {};

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <div
      className={`relative ${config.wrapperClass} print:bg-white! print:min-h-0`}
      style={{
        ...config.wrapperStyle,
        ...config.cssVars as React.CSSProperties,
      }}
    >
      <div className="print:hidden">{renderBackground()}</div>
      {toolbar}
      <div
        className="resume-content container mx-auto px-6 py-8 w-full md:max-w-4xl lg:max-w-4xl print:max-w-none print:px-8 print:py-0 relative z-10"
        style={{
          ...paperBg,
          padding: style === "glass" ? "2rem" : undefined,
        }}
      >
        {children}
      </div>
    </div>
  );
}
