import { primaryContactHref } from "../config/site";
import { rooms } from "../data/rooms";
import { img, srcSet } from "../lib/img";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function Rooms() {
  return (
    <section id="stay" aria-labelledby="stay-title" className="bg-parchment/60 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          id="stay-title"
          eyebrow="Rooms"
          title="Stay With Us"
          intro="Simple, comfortable spaces designed for mountain travellers — clean linen, wood-panelled walls and a warm welcome after the road."
        />

        <div className="mt-16 space-y-20 lg:space-y-28">
          {rooms.map((room, i) => (
            <article key={room.id} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
              <div className={`img-zoom lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                <img
                  src={img(room.image)}
                  srcSet={srcSet(room.image)}
                  sizes="(min-width:1024px) 58vw, 100vw"
                  alt={room.imageAlt}
                  width={1600}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-[2px] object-cover lg:aspect-[3/2]"
                />
              </div>
              <div className="lg:col-span-5">
                <h3 className="text-[2.2rem] leading-tight text-pine-deep sm:text-[2.6rem]">{room.name}</h3>
                <p className="mt-4 max-w-prose text-charcoal/75">{room.description}</p>

                <dl className="mt-7 grid grid-cols-2 gap-4 border-y border-pine/15 py-5 text-sm">
                  <div className="flex gap-3">
                    <Icon name="users" size={18} className="mt-0.5 shrink-0 text-earth" />
                    <div><dt className="text-stone">Guests</dt><dd className="font-medium">{room.occupancy}</dd></div>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="bed" size={18} className="mt-0.5 shrink-0 text-earth" />
                    <div><dt className="text-stone">Beds</dt><dd className="font-medium">{room.beds}</dd></div>
                  </div>
                </dl>

                <ul className="mt-5 grid gap-x-6 gap-y-2 text-[0.95rem] sm:grid-cols-2" aria-label={`${room.name} amenities`}>
                  {room.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-2">
                      <Icon name="check" size={16} className="shrink-0 text-pine-soft" /> {a}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <p className="font-display text-2xl text-pine-deep">{room.price || "Contact for price"}</p>
                  <a href={primaryContactHref} target={primaryContactHref.startsWith("http") ? "_blank" : undefined} rel="noopener" className="btn-primary group">
                    Enquire <span className="sr-only">about the {room.name}</span>
                    <Icon name="arrowRight" size={18} className="arrow" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
