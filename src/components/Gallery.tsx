import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { gallery, galleryCategories, type GalleryCategory } from "../data/gallery";
import { img, srcSet } from "../lib/img";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

type Filter = "All" | GalleryCategory;

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [index, setIndex] = useState<number | null>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  const available = useMemo(() => galleryCategories.filter((c) => gallery.some((g) => g.category === c)), []);
  const items = useMemo(() => (filter === "All" ? gallery : gallery.filter((g) => g.category === filter)), [filter]);

  const close = useCallback(() => {
    setIndex(null);
    lastFocus.current?.focus();
  }, []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (index === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  const current = index !== null ? items[index] : null;

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-parchment/60 py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading id="gallery-title" eyebrow="Gallery" title="Moments from Ransi and beyond" />
          <div role="group" aria-label="Filter photos" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0">
            {(["All", ...available] as Filter[]).map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
                className={`min-h-[40px] shrink-0 rounded-full border px-4 text-sm font-medium transition-colors duration-300 ${
                  filter === c ? "border-pine bg-pine text-ivory" : "border-pine/20 text-pine hover:border-pine/60"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <ul className="masonry mt-12">
          {items.map((g, i) => (
            <li key={g.image}>
              <button
                type="button"
                onClick={(e) => {
                  lastFocus.current = e.currentTarget;
                  setIndex(i);
                }}
                className="img-zoom group relative block w-full rounded-[2px] text-left"
                aria-label={`Open photo: ${g.caption}`}
              >
                <img
                  src={img(g.image, 800)}
                  srcSet={srcSet(g.image)}
                  sizes="(min-width:1024px) 33vw, (min-width:560px) 50vw, 100vw"
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: String(g.ratio) }}
                  className={`w-full object-cover ${g.ratio < 0.7 ? "max-h-[560px]" : ""}`}
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pine-deep/80 to-transparent p-4 pt-10 text-sm text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {g.caption}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {current && (
        <div role="dialog" aria-modal="true" aria-label={current.caption} className="fixed inset-0 z-[70] flex flex-col bg-pine-deep/95 backdrop-blur-sm" onClick={close}>
          <div className="flex items-center justify-between p-4 text-ivory sm:p-6">
            <p className="text-sm text-ivory/70">
              {index! + 1} / {items.length}
            </p>
            <button ref={closeBtn} type="button" onClick={close} aria-label="Close photo" className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-ivory/10">
              <Icon name="x" size={24} />
            </button>
          </div>
          <figure className="flex min-h-0 flex-1 flex-col items-center justify-center px-4 pb-6 sm:px-20" onClick={(e) => e.stopPropagation()}>
            <img key={current.image} src={img(current.image)} alt={current.alt} className="rise max-h-full min-h-0 w-auto max-w-full object-contain" style={{ animationDuration: ".5s" }} />
            <figcaption className="mt-4 text-center font-display text-xl text-ivory">{current.caption}</figcaption>
          </figure>
          {items.length > 1 && (
            <>
              <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous photo" className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/10 text-ivory hover:bg-ivory/20 sm:left-6">
                <Icon name="chevronLeft" size={26} />
              </button>
              <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next photo" className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/10 text-ivory hover:bg-ivory/20 sm:right-6">
                <Icon name="chevronRight" size={26} />
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}
