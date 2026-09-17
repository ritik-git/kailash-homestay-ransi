import { links, siteConfig } from "../config/site";
import { Icon, type IconName } from "./Icon";

/** Thumb-friendly action bar on small screens. Items without data are hidden. */
export function MobileBar() {
  const items: { label: string; href: string; icon: IconName }[] = [
    { label: "WhatsApp", href: links.whatsapp, icon: "whatsapp" },
    { label: "Call", href: links.phone, icon: "phone" },
    { label: "Instagram", href: !links.whatsapp && !links.phone ? siteConfig.social.instagram : "", icon: "instagram" },
    { label: "Directions", href: siteConfig.map.directionsUrl, icon: "navigation" },
  ].filter((i) => i.href) as { label: string; href: string; icon: IconName }[];

  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-40 border-t border-pine/10 bg-ivory/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden">
      <ul className="flex divide-x divide-pine/10">
        {items.map((i) => (
          <li key={i.label} className="flex-1">
            <a
              href={i.href}
              {...(i.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
              className="flex min-h-[58px] flex-col items-center justify-center gap-1 text-[0.72rem] font-semibold text-pine"
            >
              <Icon name={i.icon} size={20} />
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
