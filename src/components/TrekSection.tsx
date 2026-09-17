import { trek } from "../data/trek";
import { img, srcSet } from "../lib/img";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function TrekSection() {
  return (
    <section id="madmaheshwar" aria-labelledby="trek-title" className="relative overflow-hidden bg-pine-deep py-24 text-ivory sm:py-32">
      <svg aria-hidden="true" className="pointer-events-none absolute -right-40 top-0 h-full w-[900px] text-ivory/[0.05]" viewBox="0 0 600 600" fill="none" stroke="currentColor">
        {Array.from({ length: 9 }).map((_, i) => (
          <ellipse key={i} cx="420" cy="260" rx={60 + i * 42} ry={36 + i * 30} transform={`rotate(-18 420 260)`} />
        ))}
      </svg>

      <div className="container-x relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeading tone="light" id="trek-title" eyebrow="Madmaheshwar Trek" title="Your Gateway to Madmaheshwar" intro={trek.summary} />

          <dl className="mt-10 grid gap-px overflow-hidden rounded-[2px] bg-ivory/10 sm:grid-cols-2">
            {trek.facts.map((f) => (
              <div key={f.label} className="bg-pine-deep p-5">
                <dt className="text-[0.78rem] text-brass-light">{f.label}</dt>
                <dd className="mt-1 text-ivory/90">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="img-zoom mt-10 hidden rounded-[2px] lg:block">
            <img
              src={img("high-altitude-lake-brahma-kamal")}
              srcSet={srcSet("high-altitude-lake-brahma-kamal")}
              sizes="45vw"
              alt="Green alpine lake below snow-dusted ridges with Brahma Kamal flowers in the foreground"
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <h3 className="font-display text-3xl">The trail, stage by stage</h3>
          <ol className="relative mt-8 space-y-7 border-l border-dashed border-ivory/30 pl-8">
            {trek.stages.map((s, i) => (
              <li key={s.name} className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[41px] top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full border ${
                    i === 0 ? "border-brass bg-brass" : "border-ivory/50 bg-pine-deep"
                  }`}
                />
                <p className="font-display text-2xl leading-none">
                  {s.name}
                  {i === 0 && <span className="ml-3 align-middle font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brass-light">You stay here</span>}
                </p>
                <p className="mt-1.5 text-[0.95rem] text-ivory/70">{s.note}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-[2px] border border-ivory/15 p-6">
            <h3 className="font-display text-2xl">Before you set out</h3>
            <ul className="mt-4 space-y-2 text-[0.95rem] text-ivory/80">
              {trek.prepare.map((p) => (
                <li key={p} className="flex gap-2.5">
                  <Icon name="check" size={16} className="mt-1 shrink-0 text-brass-light" /> {p}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-ivory/55">{trek.winterNote}</p>
          </div>

          <a href="#booking" className="btn-light group mt-10">
            Plan Your Stay <Icon name="arrowRight" size={18} className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
