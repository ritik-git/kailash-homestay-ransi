export type GalleryCategory = "Rooms" | "Homestay" | "Mountains" | "Village" | "Food" | "Trek";

export interface GalleryImage {
  image: string; // base name in /public/images
  alt: string;
  caption: string;
  category: GalleryCategory;
  /** Aspect ratio w/h, used to reserve space and avoid layout shift */
  ratio: number;
}

/** Categories with no images are hidden automatically. Add Village / Food / Homestay photos when available. */
export const galleryCategories: GalleryCategory[] = ["Rooms", "Homestay", "Mountains", "Village", "Food", "Trek"];

export const gallery: GalleryImage[] = [
  { image: "himalayan-peak-sunset", alt: "Snow-covered Himalayan peak glowing under golden sunset clouds", caption: "Evening light on the high peaks", category: "Mountains", ratio: 16 / 9 },
  { image: "pinewood-double-room", alt: "Pinewood double room with white bedding at Kailash Homestay", caption: "Pinewood Double Room", category: "Rooms", ratio: 16 / 9 },
  { image: "high-altitude-lake-brahma-kamal", alt: "Green high-altitude lake ringed by snow-dusted rocky ridges with Brahma Kamal flowers in front", caption: "A high-altitude lake after fresh snowfall", category: "Trek", ratio: 16 / 9 },
  { image: "alpine-meadow-snow-peak", alt: "Wildflower meadow with a snow peak rising through the clouds", caption: "Monsoon wildflowers below the snowline", category: "Trek", ratio: 3 / 4 },
  { image: "family-room-attached-bath", alt: "Family room with two beds and a pine ceiling", caption: "Family Room", category: "Rooms", ratio: 4 / 3 },
  { image: "brahma-kamal-flower", alt: "Brahma Kamal, the state flower of Uttarakhand, growing among alpine grasses", caption: "Brahma Kamal, Uttarakhand's state flower", category: "Trek", ratio: 9 / 16 },
  { image: "wildflower-valley-himalaya", alt: "Valley of red and yellow wildflowers with a stream and misty snow mountains", caption: "A valley in bloom", category: "Mountains", ratio: 16 / 9 },
];
