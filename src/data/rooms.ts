/**
 * Room details are based only on what is visible in the owner's photos.
 * Update occupancy, beds, amenities and price with confirmed information.
 * Set `price` to a string like "₹2,500 / night" — leave "" to show "Contact for price".
 */
export interface Room {
  id: string;
  name: string;
  description: string;
  image: string; // base name in /public/images
  imageAlt: string;
  occupancy: string;
  beds: string;
  amenities: string[];
  price: string;
}

export const rooms: Room[] = [
  {
    id: "pinewood-double",
    name: "Pinewood Double Room",
    description:
      "A calm room finished in knotty pine, with a low wooden double bed, crisp white linen and a thick duvet for cold mountain nights.",
    image: "pinewood-double-room",
    imageAlt: "Double bed with white linen against a knotty pinewood wall at Kailash Homestay, Ransi",
    occupancy: "2 guests",
    beds: "1 double bed",
    amenities: ["Pinewood interiors", "Warm duvet & fresh linen", "Bedside shelf", "Drinking water"],
    price: "",
  },
  {
    id: "family-room",
    name: "Family Room",
    description:
      "A bright, generous room under a pine ceiling with two beds, window seating and its own bathroom — easy for families and trekking groups.",
    image: "family-room-attached-bath",
    imageAlt: "Spacious family room with two beds, pine ceiling and attached bathroom at Kailash Homestay",
    occupancy: "Families & small groups",
    beds: "1 double bed + 1 wide bed",
    amenities: ["Attached bathroom", "Pine-panelled ceiling", "Ceiling fan", "Seating by the window"],
    price: "",
  },
];
