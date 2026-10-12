import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rafid Dwi Prakoso | Web & Game Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56,189,248,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 22px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#38bdf8",
              }}
            />
            <span style={{ color: "#e2e8f0", fontSize: "20px", fontWeight: 600 }}>
              rafiddwiprakoso.vercel.app
            </span>
          </div>

          <span style={{ color: "#94a3b8", fontSize: "20px", fontWeight: 500 }}>
            Portfolio 2026
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "20px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Rafid Dwi Prakoso
          </h1>

          <p
            style={{
              fontSize: "30px",
              fontWeight: 600,
              color: "#38bdf8",
              margin: 0,
            }}
          >
            Web Developer • Game Developer • Creative Coder
          </p>

          <p
            style={{
              fontSize: "22px",
              color: "#cbd5e1",
              maxWidth: "850px",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Building thoughtful digital products, robust web systems, and interactive experiences with Next.js, Laravel, and Unity.
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
          {["Next.js", "React", "Laravel", "Tailwind CSS", "Unity", "C#", "Go"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 18px",
                borderRadius: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#f1f5f9",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
