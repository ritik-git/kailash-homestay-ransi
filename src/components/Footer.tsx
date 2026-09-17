import { links, siteConfig } from "../config/site";
import { Icon } from "./Icon";

export function Footer() {
  const { location, social, contact } = siteConfig;
  return (
    <footer className="bg-pine-deep pb-28 pt-20 text-ivory/75 lg:pb-12">
      <div className="container-x grid gap-12 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-display text-4xl text-ivory">{siteConfig.name}</p>
          <p className="mt-3 max-w-sm">A peaceful mountain stay in Ransi Village, Uttarakhand — at the start of the Madmaheshwar trek.</p>
          <div className="mt-6 flex gap-2">
            <a href={social.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 hover:border-ivory hover:text-ivory">
              <Icon name="instagram" size={19} />
            </a>
            <a href={social.youtube} target="_blank" rel="noopener" aria-label="YouTube" className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 hover:border-ivory hover:text-ivory">
              <Icon name="youtube" size={19} />
            </a>
          </div>
        </div>
        <nav aria-label="Footer" className="lg:col-span-3">
          <p className="text-sm font-semibold text-ivory">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2">
            {siteConfig.nav.map((n) => (
              <li key={n.href}><a href={n.href} className="link-underline hover:text-ivory">{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="lg:col-span-4">
          <p className="text-sm font-semibold text-ivory">Visit</p>
          <address className="mt-4 not-italic">
            {location.village} Village, {location.district}
            <br />
            {location.state}, {location.country}
          </address>
          <ul className="mt-4 space-y-1">
            {contact.phone && <li><a href={links.phone} className="link-underline hover:text-ivory">{contact.phone}</a></li>}
            {contact.email && <li><a href={links.email} className="link-underline hover:text-ivory">{contact.email}</a></li>}
            <li><a href={siteConfig.map.googleMapsUrl} target="_blank" rel="noopener" className="link-underline hover:text-ivory">View on Google Maps</a></li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-16 flex flex-col justify-between gap-2 border-t border-ivory/10 pt-6 text-sm text-ivory/50 sm:flex-row">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>Homestay near Madmaheshwar Temple · Rudraprayag, Uttarakhand</p>
      </div>
    </footer>
  );
}
