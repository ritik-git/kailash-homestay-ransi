/**
 * ─────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR BUSINESS DETAILS
 *  Anything in [SQUARE BRACKETS] is a placeholder — replace it.
 *  Empty strings ("") are hidden automatically on the site.
 * ─────────────────────────────────────────────────────────────
 */
export const siteConfig = {
  name: "Kailash Homestay",
  shortName: "Kailash Homestay",
  tagline: "A quiet Himalayan stay in Ransi, the road-head for Madmaheshwar",
  description:
    "A family-run homestay in Ransi Village, Rudraprayag — the last road-head village on the way to Madmaheshwar Temple in the Garhwal Himalayas.",

  /** Public URL after deployment (no trailing slash). Used for canonical, OG and sitemap. */
  url: "https://ritik-git.github.io/kailash-homestay-ransi",

  seo: {
    title: "Hotel in Madmaheshwar | Kailash Homestay in Ransi, Uttarakhand",
    description:
      "Stay at Kailash Homestay in Ransi Village near Madmaheshwar, Uttarakhand. Wood-panelled rooms, mountain air, local hospitality and easy access to the Madmaheshwar trek.",
    keywords:
      "hotel in Madmaheshwar, homestay near Madmaheshwar, Ransi village homestay, stay near Madmaheshwar temple, Madmaheshwar trek stay, Rudraprayag homestay",
    ogImage: "/og-image.jpg",
    themeColor: "#1E3A2F",
  },

  location: {
    village: "Ransi",
    district: "Rudraprayag",
    state: "Uttarakhand",
    country: "India",
    countryCode: "IN",
    postalCode: "", // e.g. "246469" — add once confirmed
    /** From the Google Maps embed supplied by the owner. Verify the pin before relying on it. */
    geo: { latitude: 30.5893, longitude: 79.1391 },
  },

  contact: {
    phone: "" as string, // "[PHONE NUMBER]"  e.g. "+91 98XXXXXXXX"
    whatsapp: "" as string, // "[WHATSAPP NUMBER]" digits only with country code, e.g. "9198XXXXXXXX"
    email: "" as string, // "[EMAIL]"
    whatsappMessage: "Namaste! I'd like to check availability at Kailash Homestay, Ransi.",
  },

  social: {
    instagram: "https://www.instagram.com/kailash.pahadi/",
    youtube: "https://www.youtube.com/@Kailashpahadi22",
  },

  map: {
    googleMapsUrl: "https://maps.app.goo.gl/u5sbFh8UBdSkHPin8",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.58348923805!2d79.13911207576979!3d30.589301292550104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39083113da47d7b7%3A0x2aac435cab2f8df7!2sKailash%20Homestay%20Ransi!5e0!3m2!1sen!2sin!4v1789634667899!5m2!1sen!2sin",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Kailash+Homestay+Ransi",
    reviewsUrl: "https://maps.app.goo.gl/u5sbFh8UBdSkHPin8",
  },

  /** Only list amenities you are sure of — these also feed structured data. */
  amenities: ["Attached bathroom", "Home-style hospitality"],
  priceRange: "", // e.g. "₹₹" or "₹1500–₹3000" — leave empty until confirmed

  nav: [
    { label: "Home", href: "#home" },
    { label: "Stay", href: "#stay" },
    { label: "Experience", href: "#experience" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/** Helpers — derived links that hide themselves when data is missing. */
export const links = {
  whatsapp: siteConfig.contact.whatsapp
    ? `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
        siteConfig.contact.whatsappMessage,
      )}`
    : "",
  phone: siteConfig.contact.phone ? `tel:${siteConfig.contact.phone.replace(/\s/g, "")}` : "",
  email: siteConfig.contact.email ? `mailto:${siteConfig.contact.email}` : "",
};

/** Best available "get in touch" link: WhatsApp → phone → Instagram. */
export const primaryContactHref =
  links.whatsapp || links.phone || siteConfig.social.instagram || "#contact";
