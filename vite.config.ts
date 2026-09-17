import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { siteConfig } from "./src/config/site";
import { reviews } from "./src/data/reviews";

// GitHub Pages serves a project site from /<repository-name>/.
// Change REPO_NAME if you rename the repository, or build with BASE_PATH="/" for a custom domain.
const REPO_NAME = "kailash-homestay-ransi";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/** Builds JSON-LD using ONLY information present in the config — nothing is invented. */
function structuredData() {
  const s = siteConfig;
  const real = reviews.filter((r) => !r.isPlaceholder);
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: s.name,
    description: s.description,
    url: `${s.url}/`,
    image: [`${s.url}${s.seo.ogImage}`],
    address: {
      "@type": "PostalAddress",
      addressLocality: s.location.village,
      addressRegion: s.location.state,
      addressCountry: s.location.countryCode,
      ...(s.location.postalCode ? { postalCode: s.location.postalCode } : {}),
    },
    geo: { "@type": "GeoCoordinates", latitude: s.location.geo.latitude, longitude: s.location.geo.longitude },
    hasMap: s.map.googleMapsUrl,
    sameAs: Object.values(s.social).filter(Boolean),
    containedInPlace: { "@type": "AdministrativeArea", name: `${s.location.district}, ${s.location.state}` },
  };
  if (s.contact.phone) data.telephone = s.contact.phone;
  if (s.contact.email) data.email = s.contact.email;
  if (s.priceRange) data.priceRange = s.priceRange;
  if (s.amenities.length)
    data.amenityFeature = s.amenities.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true }));
  if (real.length) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: (real.reduce((a, r) => a + r.rating, 0) / real.length).toFixed(1),
      reviewCount: real.length,
    };
    data.review = real.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    }));
  }
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function seo(): Plugin {
  let base = "/";
  return {
    name: "homestay-seo",
    configResolved(c) {
      base = c.base;
    },
    transformIndexHtml(html) {
      const s = siteConfig;
      const ogImage = `${s.url}${s.seo.ogImage}`;
      const head = `
    <title>${esc(s.seo.title)}</title>
    <meta name="description" content="${esc(s.seo.description)}" />
    <meta name="keywords" content="${esc(s.seo.keywords)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="theme-color" content="${s.seo.themeColor}" />
    <link rel="canonical" href="${s.url}/" />
    <meta name="geo.region" content="IN-UT" />
    <meta name="geo.placename" content="${esc(`${s.location.village}, ${s.location.district}`)}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${esc(s.name)}" />
    <meta property="og:title" content="${esc(s.seo.title)}" />
    <meta property="og:description" content="${esc(s.seo.description)}" />
    <meta property="og:url" content="${s.url}/" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="675" />
    <meta property="og:locale" content="en_IN" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(s.seo.title)}" />
    <meta name="twitter:description" content="${esc(s.seo.description)}" />
    <meta name="twitter:image" content="${ogImage}" />
    <link rel="preload" as="image" type="image/webp" fetchpriority="high" href="${base}images/himalayan-peak-sunset-1600.webp" imagesrcset="${base}images/himalayan-peak-sunset-800.webp 800w, ${base}images/himalayan-peak-sunset-1600.webp 1600w" imagesizes="100vw" />
    <script type="application/ld+json">${structuredData()}</script>`;
      return html.replace("<!--SEO-->", head);
    },
  };
}

export default defineConfig({
  plugins: [react(), seo()],
  base: process.env.BASE_PATH ?? `/${REPO_NAME}/`,
  build: { target: "es2020", assetsInlineLimit: 2048 },
});
