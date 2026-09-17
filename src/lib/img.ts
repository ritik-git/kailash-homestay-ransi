/** Image helpers. Files live in /public/images as <name>-800.webp and <name>-1600.webp */
const base = import.meta.env.BASE_URL;

export const img = (name: string, width: 800 | 1600 = 1600) => `${base}images/${name}-${width}.webp`;

export const srcSet = (name: string) => `${img(name, 800)} 800w, ${img(name, 1600)} 1600w`;

export const asset = (path: string) => `${base}${path.replace(/^\//, "")}`;
