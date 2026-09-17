import { siteConfig } from "../config/site";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function Location() {
  const { map, location } = siteConfig;
  return (
    <section id="location" aria-labelledby="location-title" className="bg-parchment/60 py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            id="location-title"
            eyebrow="Location"
            title="Find Your Way to Ransi"
            intro={
              <>
                Ransi sits high in the Madmaheshwar valley of {location.district} district, {location.state}, above
                Ukhimath. It is the last village on the motor road and the usual starting point for the walk to
                Madmaheshwar Temple — which makes it the most practical place to stay before and after the trek.
              </>
            }
          />

          <address className="mt-10 flex items-start gap-4 rounded-[2px] bg-ivory p-6 not-italic ring-1 ring-pine/10">
            <Icon name="pin" size={22} className="mt-1 shrink-0 text-earth" />
            <div>
              <p className="font-display text-2xl leading-tight text-pine-deep">{siteConfig.name}</p>
              <p className="mt-1 text-charcoal/75">
                {location.village} Village
                <br />
                {location.district}, {location.state}
                <br />
                {location.country}
              </p>
            </div>
          </address>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a href={map.googleMapsUrl} target="_blank" rel="noopener" className="btn-primary group">
              <Icon name="pin" size={18} /> Open in Google Maps
            </a>
            <a href={map.directionsUrl} target="_blank" rel="noopener" className="btn-outline">
              <Icon name="navigation" size={18} /> Get Directions
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          {map.googleMapsEmbedUrl ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-parchment ring-1 ring-pine/10 lg:aspect-auto lg:h-full lg:min-h-[520px]">
              <iframe
                src={map.googleMapsEmbedUrl}
                title={`Map showing ${siteConfig.name} in ${location.village}, ${location.district}`}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0 grayscale-[35%]"
              />
            </div>
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center rounded-[2px] bg-parchment text-stone">Map coming soon</div>
          )}
        </div>
      </div>
    </section>
  );
}
