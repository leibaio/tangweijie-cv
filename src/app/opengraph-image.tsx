import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "汤伟杰 - 全栈开发工程师";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0d1117 0%, #161b22 100%)",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            color: "#c9d1d9",
            letterSpacing: 4,
          }}
        >
          汤伟杰
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 36,
            color: "#7ee787",
            padding: "8px 24px",
            border: "1px solid #30363d",
            borderRadius: 8,
            backgroundColor: "#161b22",
          }}
        >
          全栈开发工程师
        </div>

        {/* Tech stack */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 16,
          }}
        >
          {["Vue", "React", "Next.js", "Spring Boot", "Node.js"].map((tech) => (
            <div
              key={tech}
              style={{
                fontSize: 20,
                color: "#8b949e",
                padding: "6px 16px",
                border: "1px solid #30363d",
                borderRadius: 6,
                backgroundColor: "#0d1117",
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 200,
            height: 2,
            background: "linear-gradient(90deg, transparent, #7ee787, transparent)",
            marginTop: 8,
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: 22,
            color: "#484f58",
          }}
        >
          tangweijie-cv.vercel.app
        </div>
      </div>
    </div>,
    { ...size }
  );
}
