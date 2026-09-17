import { siteConfig } from "../config/site";
import { img, srcSet } from "../lib/img";
import { Icon } from "./Icon";

export function Hero() {
  const { village, district, state } = siteConfig.location;
  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate flex min-h-[92svh] flex-col overflow-hidden bg-pine-deep text-ivory">
      <img
        src={img("himalayan-peak-sunset")}
        srcSet={srcSet("himalayan-peak-sunset")}
        sizes="100vw"
        alt="Snow-covered Himalayan peak lit by golden evening clouds above a green ridge in the Garhwal Himalaya"
        width={1600}
        height={900}
        fetchPriority="high"
        decoding="async"
        className="hero-img absolute inset-0 -z-10 h-full w-full object-cover object-[60%_center]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(19,39,32,.55)_0%,rgba(19,39,32,.15)_35%,rgba(19,39,32,.35)_60%,rgba(19,39,32,.85)_100%)]" />

      <div className="container-x flex flex-1 flex-col justify-end pb-24 pt-32 sm:pb-28">
        <p className="rise eyebrow !text-brass-light" style={{ animationDelay: ".2s" }}>
          {village} Village · {district} · {state}
        </p>
        <h1 id="hero-title" className="rise mt-5 max-w-4xl text-[3rem] leading-[0.98] sm:text-[4.6rem] lg:text-[6rem]" style={{ animationDelay: ".35s" }}>
          Your Himalayan stay, <br className="hidden sm:block" />
          close to Madmaheshwar
        </h1>
        <p className="rise mt-6 max-w-xl text-[1.05rem] text-ivory/85 sm:text-lg" style={{ animationDelay: ".55s" }}>
          Experience the quiet beauty of the Garhwal Himalayas with warm local hospitality, mountain air and an
          authentic village stay in Ransi.
        </p>
        <div className="rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: ".7s" }}>
          <a href="#booking" className="btn-light group">
            Book Your Stay <Icon name="arrowRight" size={18} className="arrow" />
          </a>
          <a href="#stay" className="btn-ghost-light">
            Explore the Homestay
          </a>
        </div>
      </div>

      <aside
        className="rise absolute bottom-8 right-8 hidden w-72 rounded-2xl border border-ivory/15 bg-pine-deep/55 p-5 backdrop-blur-md lg:block"
        style={{ animationDelay: "1s" }}
        aria-label="Location summary"
      >
        <p className="font-display text-2xl leading-tight">Ransi Village</p>
        <p className="mt-1 text-sm text-ivory/70">Gateway to Madmaheshwar, Uttarakhand</p>
        <div className="mt-5 flex items-center gap-3 text-[0.78rem] text-ivory/80">
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-brass" />Ransi</span>
          <span aria-hidden="true" className="h-px flex-1 border-t border-dashed border-ivory/40" />
          <span className="flex items-center gap-1.5"><Icon name="temple" size={14} />Madmaheshwar</span>
        </div>
        <p className="mt-2 text-[0.72rem] text-ivory/55">The motor road ends here — the trek begins.</p>
      </aside>

      <a href="#about" aria-label="Scroll to introduction" className="scroll-cue absolute bottom-6 left-1/2 -translate-x-1/2 p-2 text-ivory/80 lg:left-12 lg:translate-x-0">
        <Icon name="chevronDown" size={22} />
      </a>
    </section>
  );
}
