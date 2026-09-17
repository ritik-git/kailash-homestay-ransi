# Kailash Homestay — Ransi, Madmaheshwar (Uttarakhand)

A fast, static website for **Kailash Homestay** in Ransi Village, Rudraprayag — the road-head for the Madmaheshwar trek.
Built with React, Vite, TypeScript and Tailwind CSS. No backend; all content lives in a few editable files.

## Features

- Full-screen hero, editorial intro, room showcase, experiences, Madmaheshwar trek guide, filterable gallery with keyboard-friendly lightbox, reviews, Google Map, travel routes, booking CTA, contact form and footer
- Mobile action bar (WhatsApp · Call · Directions) — buttons hide automatically when a number isn't set
- SEO: title/description, canonical, Open Graph, Twitter card, robots, sitemap, and `LodgingBusiness` JSON-LD generated at build time **only from data you've provided**
- Responsive WebP images (800w / 1600w), lazy loading, no icon or animation libraries, reduced-motion support, visible focus states, skip link
- GitHub Actions deployment to GitHub Pages

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev       # http://localhost:5173/kailash-homestay-ransi/
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build
```

## Deploy to GitHub Pages

1. Create a GitHub repository named **`kailash-homestay-ransi`** (or change `REPO_NAME` in `vite.config.ts`).
2. Push this project:
   ```bash
   git remote add origin https://github.com/<your-username>/kailash-homestay-ransi.git
   git push -u origin main
   ```
3. In the repository go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.
   Your site will be at `https://<your-username>.github.io/kailash-homestay-ransi/`.
5. Replace `YOUR-GITHUB-USERNAME` in `src/config/site.ts` (`url`), `public/robots.txt` and `public/sitemap.xml`, then push again.

**Custom domain?** Add `public/CNAME` containing your domain, build with `BASE_PATH=/` (set it in the workflow's build step as `env: BASE_PATH: /`), and update `url` in `site.ts`.

## Updating homestay information

| What | Where |
| --- | --- |
| Name, phone, WhatsApp, email, social links, map links, SEO title/description, price range | `src/config/site.ts` |
| Rooms (occupancy, beds, amenities, price) | `src/data/rooms.ts` |
| Gallery photos, captions, categories | `src/data/gallery.ts` |
| Guest reviews | `src/data/reviews.ts` |
| Travel routes, distances, times | `src/data/routes.ts` |
| Madmaheshwar trek facts | `src/data/trek.ts` |

Empty values (`""`) are hidden on the site, so nothing unconfirmed is ever shown.

### Configure WhatsApp and phone

In `src/config/site.ts`:

```ts
contact: {
  phone: "+91 98XXXXXXXX",
  whatsapp: "9198XXXXXXXX", // country code + number, digits only
  email: "you@example.com",
}
```

Once set, the WhatsApp/Call buttons appear everywhere, and the enquiry form opens WhatsApp with the guest's details pre-filled. Until then, the site falls back to Instagram.

### Configure Google Maps

`map.googleMapsUrl` (share link) and `map.googleMapsEmbedUrl` (the `src` from Google Maps → Share → Embed a map) are already set for *Kailash Homestay Ransi*. The `location.geo` coordinates were taken from that embed — confirm the pin is correct.

### Add reviews

Paste real reviews (unchanged wording) into `reviews` in `src/data/reviews.ts`. Star rating and review count in structured data are calculated from these automatically. The `placeholderReviews` are shown **only** in `npm run dev`, labelled as samples.

## Replacing or adding images

1. Export the photo at around 1600 px wide.
2. Create two WebP versions in `public/images/`: `<name>-800.webp` and `<name>-1600.webp` (e.g. with [Squoosh](https://squoosh.app) or `cwebp -q 78`).
3. Use descriptive names like `homestay-exterior`, `pahadi-thali`, `ransi-village-morning`.
4. Reference the base name (without `-800.webp`) in the data file with a meaningful `alt`.

Gallery categories without photos (Village, Food, Homestay) are hidden until you add images for them.

## SEO notes

- Primary target: *hotel in Madmaheshwar*; secondary: homestay near Madmaheshwar, Ransi village homestay, Madmaheshwar trek stay, Rudraprayag homestay.
- Keywords appear naturally in headings and copy — avoid adding lists of keywords.
- After going live: add the site to Google Search Console, submit `sitemap.xml`, and add the website link to the Google Business Profile.
- `public/og-image.jpg` (1200×675) is used for social previews.

## Still to be supplied

- Phone number, WhatsApp number, email
- Room prices and confirmed amenities (Wi-Fi, heating, meals, hot water — only add what's available)
- Real guest reviews
- Photos of the house exterior, village and food
- Road distances and travel times (`src/data/routes.ts`)
- Postal code
