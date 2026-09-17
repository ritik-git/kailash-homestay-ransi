import { travelNotes, travelRoutes } from "../data/routes";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function HowToReach() {
  return (
    <section id="reach" aria-labelledby="reach-title" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          id="reach-title"
          eyebrow="How to reach us"
          title="The road to Ransi"
          intro="The journey climbs from the plains through the river valleys of Garhwal. Here is the usual way up."
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-[2px] bg-pine/15 md:grid-cols-2 lg:grid-cols-4">
          {travelRoutes.map((r, i) => (
            <li key={r.from} className="flex flex-col bg-ivory p-7">
              <span className="font-display text-5xl leading-none text-brass">{i + 1}</span>
              <h3 className="mt-5 text-[1.7rem] leading-tight text-pine-deep">From {r.from}</h3>
              <p className="mt-3 flex-1 text-[0.95rem] text-charcoal/75">{r.route}</p>
              {(r.approximateDistance || r.approximateTime) && (
                <p className="mt-5 border-t border-pine/10 pt-4 text-sm text-stone">
                  {[r.approximateDistance && `≈ ${r.approximateDistance}`, r.approximateTime && `≈ ${r.approximateTime}`].filter(Boolean).join("  ·  ")}
                </p>
              )}
            </li>
          ))}
        </ol>

        <ul className="mt-10 grid gap-4 text-[0.95rem] text-charcoal/75 md:grid-cols-3">
          {travelNotes.map((n) => (
            <li key={n} className="flex gap-3">
              <Icon name="leaf" size={18} className="mt-0.5 shrink-0 text-earth" /> {n}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
