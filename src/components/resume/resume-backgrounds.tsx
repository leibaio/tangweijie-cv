import type { ResumeBackgroundKey } from "@/config/resume-style";

interface ResumeBackgroundProps {
  kind: ResumeBackgroundKey | null;
}

export function ResumeBackground({ kind }: ResumeBackgroundProps) {
  switch (kind) {
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
    case "brutalist":
      return (
        <>
          <div className="absolute top-0 left-0 w-full h-1.5 -z-10" style={{ backgroundColor: "#000" }} />
          <div
            className="absolute -z-10 pointer-events-none hidden md:block"
            style={{
              width: 200,
              height: 200,
              border: "3px solid #000",
              top: -40,
              right: -40,
              transform: "rotate(8deg)",
              opacity: 0.04,
            }}
          />
        </>
      );
    case "synthwave":
      return (
        <>
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, #0D0221 0%, #150734 30%, #261447 50%, transparent 100%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 -z-10 pointer-events-none"
            style={{
              height: "30vh",
              background: [
                "linear-gradient(transparent 0%, rgba(13,2,33,0.95) 100%)",
                "repeating-linear-gradient(90deg, rgba(255,0,255,0.08) 0px, transparent 1px, transparent 80px)",
                "repeating-linear-gradient(0deg, rgba(255,0,255,0.08) 0px, transparent 1px, transparent 80px)",
              ].join(", "),
              transform: "perspective(400px) rotateX(55deg)",
              transformOrigin: "center top",
            }}
          />
        </>
      );
    case "japanese":
      return (
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.02'/%3E%3C/svg%3E")`,
            opacity: 0.6,
          }}
        />
      );
    case "newspaper":
      return (
        <div
          className="absolute inset-0 -z-10 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px",
          }}
        />
      );
    default:
      return null;
  }
}