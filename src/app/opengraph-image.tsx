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
        background: "#FAF8F5",
        fontFamily: "sans-serif",
      }}
    >
      {/* Red accent bar */}
      <div style={{ width: 8, height: "100%", background: "#C44536", flexShrink: 0 }} />

      {/* Main content area */}
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Small label */}
        <div
          style={{
            display: "flex",
            fontSize: 14,
            color: "#999",
            letterSpacing: 6,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          FULL STACK DEVELOPER
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: 108,
            fontWeight: 900,
            color: "#1A1A1A",
            letterSpacing: 16,
            lineHeight: 1,
            marginBottom: 16,
          }}
        >
          汤伟杰
        </div>

        {/* Red underline accent */}
        <div
          style={{
            display: "flex",
            width: 120,
            height: 5,
            background: "#C44536",
            marginBottom: 24,
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#555",
            letterSpacing: 8,
            marginBottom: 36,
          }}
        >
          全栈开发工程师
        </div>

        {/* Divider line */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: 1,
            background: "#DDD",
            marginBottom: 28,
          }}
        />

        {/* Tech stack tags */}
        <div style={{ display: "flex", gap: 10 }}>
          {["Vue", "React", "Next.js", "Spring Boot", "Node.js"].map((tech) => (
            <div
              key={tech}
              style={{
                fontSize: 15,
                color: "#666",
                padding: "8px 20px",
                border: "1px solid #DDD",
                letterSpacing: 2,
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* URL - bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 80,
            display: "flex",
            fontSize: 14,
            color: "#999",
            letterSpacing: 3,
          }}
        >
          {siteConfig.url.replace("https://", "")}
        </div>

        {/* Issue/edition number - top right */}
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 4,
          }}
        >
          <div style={{ fontSize: 11, color: "#BBB", letterSpacing: 4 }}>
            PORTFOLIO
          </div>
          <div style={{ fontSize: 42, fontWeight: 900, color: "#1A1A1A", lineHeight: 1 }}>
            01
          </div>
        </div>

        {/* Issue label - bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div style={{ width: 30, height: 2, background: "#C44536" }} />
          <div style={{ fontSize: 11, color: "#BBB", letterSpacing: 4 }}>
            个人站点
          </div>
        </div>
      </div>
    </div>,
    { ...size }
  );
}
