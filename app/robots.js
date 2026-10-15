export default function robots() {
  const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rafid-three.vercel.app";
  const baseUrl = rawBaseUrl.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
