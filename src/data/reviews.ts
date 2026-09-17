export interface Review {
  name: string;
  location: string;
  rating: number; // 1–5
  text: string;
  date?: string;
  source?: "Google" | "Direct" | "Instagram";
  /** Placeholders are only rendered in `npm run dev`, never in production builds. */
  isPlaceholder?: boolean;
}

/**
 * REAL guest reviews go here (copy them from Google Maps with the guest's words unchanged).
 * The Reviews section shows an invitation to leave a review until this list has entries.
 * AggregateRating in structured data is only emitted from real reviews.
 */
export const reviews: Review[] = [];

/** SAMPLE DATA — for layout testing during development only. Not real guests. */
export const placeholderReviews: Review[] = [
  { name: "[GUEST NAME]", location: "[CITY]", rating: 5, text: "[Sample review text — replace with a real guest review.]", date: "[MONTH YEAR]", isPlaceholder: true },
  { name: "[GUEST NAME]", location: "[CITY]", rating: 5, text: "[Sample review text — replace with a real guest review.]", isPlaceholder: true },
  { name: "[GUEST NAME]", location: "[CITY]", rating: 4, text: "[Sample review text — replace with a real guest review.]", isPlaceholder: true },
];
