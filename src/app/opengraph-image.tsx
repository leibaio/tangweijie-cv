import { siteConfig } from "@/config/site";
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
        alignItems: "center",
        justifyContent: "center",
        background: "#F5F0E8",
        fontFamily: "serif",
      }}
    >
      {/* Outer gold border frame */}
      <div
        style={{
          display: "flex",
          width: 1140,
          height: 570,
          border: "2px solid #C5A33A",
          padding: 3,
          borderRadius: 4,
        }}
      >
        {/* Inner border */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            border: "1px solid #D4C5A0",
            borderRadius: 2,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Corner decorations */}
          {["top-left", "top-right", "bottom-left", "bottom-right"].map((pos) => (
            <div
              key={pos}
              style={{
                position: "absolute",
                width: 20,
                height: 20,
                border: "2px solid #C5A33A",
                ...(pos === "top-left" ? { top: 16, left: 16, borderRight: "none", borderBottom: "none" } : {}),
                ...(pos === "top-right" ? { top: 16, right: 16, borderLeft: "none", borderBottom: "none" } : {}),
                ...(pos === "bottom-left" ? { bottom: 16, left: 16, borderRight: "none", borderTop: "none" } : {}),
                ...(pos === "bottom-right" ? { bottom: 16, right: 16, borderLeft: "none", borderTop: "none" } : {}),
              }}
            />
          ))}

          {/* Decorative top line */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <div style={{ width: 60, height: 1, background: "#C5A33A" }} />
            <div style={{ fontSize: 14, color: "#B8963E", letterSpacing: 8 }}>个人站点</div>
            <div style={{ width: 60, height: 1, background: "#C5A33A" }} />
          </div>

          {/* Name - main focus */}
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: "bold",
              color: "#3D2B1F",
              letterSpacing: 24,
              marginBottom: 12,
            }}
          >
            汤伟杰
          </div>

          {/* Gold divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 20,
            }}
          >
            <div style={{ width: 120, height: 1, background: "linear-gradient(90deg, transparent, #C5A33A)" }} />
            <div
              style={{
                width: 8,
                height: 8,
                background: "#C5A33A",
                transform: "rotate(45deg)",
              }}
            />
            <div style={{ width: 120, height: 1, background: "linear-gradient(270deg, transparent, #C5A33A)" }} />
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#6B5B4F",
              letterSpacing: 12,
              marginBottom: 32,
            }}
          >
            全栈开发工程师
          </div>

          {/* Tech stack tags */}
          <div
            style={{
              display: "flex",
              gap: 12,
            }}
          >
            {["Vue", "React", "Next.js", "Spring Boot", "Node.js"].map((tech) => (
              <div
                key={tech}
                style={{
                  fontSize: 16,
                  color: "#8B7355",
                  padding: "6px 18px",
                  border: "1px solid #D4C5A0",
                  borderRadius: 2,
                  letterSpacing: 2,
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Bottom URL */}
          <div
            style={{
              position: "absolute",
              bottom: 24,
              display: "flex",
              fontSize: 14,
              color: "#B8A88A",
              letterSpacing: 4,
            }}
          >
            {siteConfig.url.replace("https://", "")}
          </div>
        </div>
      </div>
    </div>,
    { ...size }
  );
}
