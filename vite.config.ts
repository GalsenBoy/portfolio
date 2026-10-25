import { defineConfig, loadEnv, type HtmlTagDescriptor, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

// SEO qui exige une URL absolue (canonical, og:url, og:image, sitemap) : généré seulement si SITE_URL est défini
function seo(siteUrl?: string): Plugin {
  const base = siteUrl?.replace(/\/$/, "");
  const meta = (attr: "name" | "property", key: string, content: string): HtmlTagDescriptor => ({
    tag: "meta",
    attrs: { [attr]: key, content },
    injectTo: "head",
  });

  return {
    name: "seo",
    transformIndexHtml() {
      if (!base) return [];
      return [
        { tag: "link", attrs: { rel: "canonical", href: `${base}/` }, injectTo: "head" },
        meta("property", "og:url", `${base}/`),
        meta("property", "og:image", `${base}/og-image.png`),
        meta("property", "og:image:width", "1200"),
        meta("property", "og:image:height", "630"),
        meta("property", "og:image:alt", "Logo bc. et nom Bilaly Cissokho"),
        meta("name", "twitter:image", `${base}/og-image.png`),
      ];
    },
    generateBundle() {
      const robots = ["User-agent: *", "Allow: /", ...(base ? ["", `Sitemap: ${base}/sitemap.xml`] : [])];
      this.emitFile({ type: "asset", fileName: "robots.txt", source: robots.join("\n") + "\n" });
      if (!base) return;
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${base}/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </url>
</urlset>
`,
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), seo(loadEnv(mode, ".", "").SITE_URL)],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/_mixins.scss";',
      },
    },
  },
}));
