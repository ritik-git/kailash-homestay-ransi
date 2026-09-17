import { img, srcSet } from "../lib/img";
import { useReveal } from "../lib/useReveal";
import { Icon } from "./Icon";

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 sm:py-32">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div ref={ref} className="lg:col-span-7">
          <div className="relative">
            <img
              src={img("wildflower-valley-himalaya")}
              srcSet={srcSet("wildflower-valley-himalaya")}
              sizes="(min-width:1024px) 58vw, 100vw"
              alt="Red and yellow wildflowers in a green Himalayan valley with a stream and misty snow peaks"
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
              className={`reveal aspect-[4/3] w-full rounded-[2px] object-cover sm:aspect-[16/10] ${visible ? "is-visible" : ""}`}
            />
            <img
              src={img("pinewood-double-room", 800)}
              alt="Pinewood room with a double bed and white linen at Kailash Homestay"
              width={800}
              height={450}
              loading="lazy"
              decoding="async"
              className="absolute -bottom-10 right-4 hidden w-[42%] rounded-[2px] border-[6px] border-ivory object-cover shadow-xl sm:block lg:-right-10"
            />
          </div>
        </div>

        <div className="lg:col-span-5">
          <p className="eyebrow">A stay in the Himalayas</p>
          <h2 id="about-title" className="mt-4 text-[2.6rem] leading-[1.02] text-pine-deep sm:text-[3.4rem]">
            Slow mornings.
            <br />
            Mountain air.
            <br />
            Local warmth.
          </h2>
          <svg aria-hidden="true" viewBox="0 0 160 24" className="mt-6 h-6 w-40 text-brass" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M0 22 L28 10 L40 16 L62 2 L84 14 L98 8 L122 20 L160 20" />
          </svg>
          <div className="mt-6 space-y-4 text-[1.05rem] text-charcoal/75">
            <p>
              Kailash Homestay is a family-run home in Ransi, the last village the road reaches before the walk to
              Madmaheshwar Temple. Rooms are finished in warm pinewood, beds are made with fresh white linen, and the
              village moves at the pace of the mountains.
            </p>
            <p>
              Stay a night before your trek, rest on the way back, or simply spend a few quiet days in the Madmaheshwar
              valley of Rudraprayag district.
            </p>
          </div>
          <a href="#stay" className="group mt-8 inline-flex items-center gap-2 font-semibold text-pine">
            <span className="link-underline">Discover Our Stay</span>
            <Icon name="arrowRight" size={18} className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
