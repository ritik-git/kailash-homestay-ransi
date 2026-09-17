import { links, siteConfig } from "../config/site";
import { img, srcSet } from "../lib/img";
import { Icon } from "./Icon";

export function BookingCTA() {
  const ext = (href: string) => (href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {});
  const availabilityHref = links.whatsapp || links.phone || "#contact";
  return (
    <section id="booking" aria-labelledby="booking-title" className="relative isolate overflow-hidden py-28 text-ivory sm:py-40">
      <img
        src={img("alpine-meadow-snow-peak")}
        srcSet={srcSet("alpine-meadow-snow-peak")}
        sizes="100vw"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[center_35%]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-pine-deep/70" />
      <div className="container-x text-center">
        <h2 id="booking-title" className="mx-auto max-w-3xl text-[2.8rem] leading-[1.02] sm:text-6xl lg:text-7xl">
          Ready for the Mountains?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/85">
          Plan your stay in Ransi and experience the Himalayas at your own pace.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          {links.whatsapp && (
            <a href={links.whatsapp} {...ext(links.whatsapp)} className="btn-light">
              <Icon name="whatsapp" size={18} /> WhatsApp Us
            </a>
          )}
          {links.phone && (
            <a href={links.phone} className="btn-ghost-light">
              <Icon name="phone" size={18} /> Call Us
            </a>
          )}
          {!links.whatsapp && !links.phone && (
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener" className="btn-light">
              <Icon name="instagram" size={18} /> Message on Instagram
            </a>
          )}
          <a href={availabilityHref} {...ext(availabilityHref)} className="btn-ghost-light group">
            Check Availability <Icon name="arrowRight" size={18} className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
