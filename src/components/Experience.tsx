import { img, srcSet } from "../lib/img";
import { Icon, type IconName } from "./Icon";
import { SectionHeading } from "./SectionHeading";

interface Item {
  title: string;
  text: string;
  image?: { name: string; alt: string };
  icon: IconName;
  className: string;
}

const items: Item[] = [
  {
    title: "Madmaheshwar Trek",
    text: "The trail to the second of the Panch Kedar temples starts at Ransi. Rest here the night before and set off at first light.",
    image: { name: "alpine-meadow-snow-peak", alt: "Alpine meadow of wildflowers beneath a snow peak wrapped in cloud" },
    icon: "mountain",
    className: "md:col-span-2 lg:col-span-5 lg:row-span-2 min-h-[440px] lg:min-h-[640px]",
  },
  {
    title: "Mountain Views",
    text: "Clear mornings and golden evenings over the high snow peaks of the Garhwal Himalaya.",
    image: { name: "himalayan-peak-sunset", alt: "Snow-covered peak under golden sunset clouds" },
    icon: "sunrise",
    className: "md:col-span-2 lg:col-span-7 min-h-[300px]",
  },
  {
    title: "Village Life",
    text: "Terraced fields, stone paths and neighbours who greet you by name. Ransi is a working mountain village, not a resort.",
    icon: "home",
    className: "lg:col-span-4 bg-pine text-ivory",
  },
  {
    title: "Local Food",
    text: "Ask us about home-cooked Pahadi meals when you book — simple, warm food suited to trekking days.",
    icon: "utensils",
    className: "lg:col-span-3 bg-parchment",
  },
  {
    title: "Peace & Nature",
    text: "No traffic, no crowds — just birdsong, forest and flowers like the Brahma Kamal, Uttarakhand's state flower, higher on the trails.",
    image: { name: "brahma-kamal-flower", alt: "Brahma Kamal flower growing among alpine grasses" },
    icon: "leaf",
    className: "md:col-span-2 lg:col-span-12 min-h-[320px]",
  },
];

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Days shaped by the mountains"
          intro="Whether you are here for the pilgrimage, the trek or simply the quiet, Ransi keeps life unhurried."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {items.map((item) =>
            item.image ? (
              <article key={item.title} className={`img-zoom group relative flex items-end rounded-[2px] ${item.className}`}>
                <img
                  src={img(item.image.name)}
                  srcSet={srcSet(item.image.name)}
                  sizes="(min-width:1024px) 50vw, 100vw"
                  alt={item.image.alt}
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-cover ${item.image.name === "brahma-kamal-flower" ? "object-[center_30%]" : ""}`}
                />
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 ${
                    item.image.name === "brahma-kamal-flower"
                      ? "bg-gradient-to-t from-pine-deep/90 via-pine-deep/50 to-pine-deep/10 lg:bg-gradient-to-r lg:from-pine-deep/95 lg:via-pine-deep/60 lg:to-transparent"
                      : "bg-gradient-to-t from-pine-deep/85 via-pine-deep/20 to-transparent"
                  }`}
                />
                <div className="relative max-w-md p-7 text-ivory sm:p-9">
                  <Icon name={item.icon} size={22} className="text-brass-light" />
                  <h3 className="mt-3 text-[2rem] leading-tight">{item.title}</h3>
                  <p className="mt-2 text-ivory/80">{item.text}</p>
                </div>
              </article>
            ) : (
              <article key={item.title} className={`flex flex-col justify-between rounded-[2px] p-7 sm:p-9 ${item.className}`}>
                <Icon name={item.icon} size={26} className="text-brass" />
                <div className="mt-10">
                  <h3 className="text-[2rem] leading-tight">{item.title}</h3>
                  <p className="mt-2 opacity-80">{item.text}</p>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
