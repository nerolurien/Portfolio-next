import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rafid Dwi Prakoso | Full-Stack & Game Developer";
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
          backgroundColor: "#0b0b0c",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 22px",
              backgroundColor: "#141417",
              border: "1px solid #27272a",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "#f59e0b",
              }}
            />
            <span style={{ color: "#ece8df", fontSize: "20px", fontWeight: 600 }}>
              rafid-three.vercel.app
            </span>
          </div>

          <span style={{ color: "#a1a1aa", fontSize: "20px", fontWeight: 500 }}>
            Bogor, Indonesia
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "20px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#ece8df",
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
              color: "#f59e0b",
              margin: 0,
            }}
          >
            Full-Stack • Backend • Game Developer
          </p>

          <p
            style={{
              fontSize: "22px",
              color: "#a1a1aa",
              maxWidth: "850px",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Building web apps, REST APIs, and 2D/3D games with Next.js, Vue, Laravel, Go, Java, Docker, and Unity.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
            {["Next.js", "Vue", "Laravel", "Go", "Java", "Docker", "Unity"].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#141417",
                  border: "1px solid #27272a",
                  color: "#ece8df",
                  fontSize: "17px",
                  fontWeight: 500,
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 26px",
              backgroundColor: "#ece8df",
              color: "#0b0b0c",
              fontSize: "19px",
              fontWeight: 700,
            }}
          >
            <span>See Portfolio</span>
            <span style={{ fontSize: "20px" }}>→</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
