import { useState, type FormEvent } from "react";
import { links, siteConfig } from "../config/site";
import { Icon, type IconName } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const { contact, social, map, location } = siteConfig;
  const [note, setNote] = useState("");

  const rows: { icon: IconName; label: string; value: string; href: string }[] = [
    { icon: "phone", label: "Phone", value: contact.phone, href: links.phone },
    { icon: "whatsapp", label: "WhatsApp", value: contact.whatsapp ? "Chat with us" : "", href: links.whatsapp },
    { icon: "mail", label: "Email", value: contact.email, href: links.email },
    { icon: "pin", label: "Google Maps", value: `${location.village}, ${location.district}`, href: map.googleMapsUrl },
    { icon: "instagram", label: "Instagram", value: "@kailash.pahadi", href: social.instagram },
    { icon: "youtube", label: "YouTube", value: "@Kailashpahadi22", href: social.youtube },
  ];
  const visibleRows = rows.filter((r) => r.value && r.href);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = [
      `Namaste! Booking enquiry for ${siteConfig.name}`,
      `Name: ${f.get("name")}`,
      `Check-in: ${f.get("checkin") || "-"}  Check-out: ${f.get("checkout") || "-"}`,
      `Guests: ${f.get("guests") || "-"}`,
      `${f.get("message") || ""}`,
    ].join("\n");

    if (links.whatsapp) {
      window.open(`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
      setNote("WhatsApp has opened with your message — press send to reach us.");
    } else if (links.email) {
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("Stay enquiry — " + siteConfig.name)}&body=${encodeURIComponent(text)}`;
      setNote("Your email app has opened with your message — press send to reach us.");
    } else {
      navigator.clipboard?.writeText(text).catch(() => undefined);
      window.open(social.instagram, "_blank", "noopener");
      setNote("Your message is copied. Paste it into an Instagram message to @kailash.pahadi.");
    }
  }

  const field =
    "mt-1.5 w-full rounded-[2px] border border-pine/20 bg-white/70 px-4 py-3 text-[0.95rem] outline-none transition-colors focus:border-pine focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/60";

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <SectionHeading id="contact-title" eyebrow="Contact" title="Talk to your hosts" intro="The quickest way to plan your stay is to message us directly. We are happy to help with trek timing and travel too." />
          <ul className="mt-10 divide-y divide-pine/10 border-y border-pine/10">
            {visibleRows.map((r) => (
              <li key={r.label}>
                <a
                  href={r.href}
                  {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                  className="group flex items-center gap-4 py-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-parchment text-pine">
                    <Icon name={r.icon} size={19} />
                  </span>
                  <span className="flex-1">
                    <span className="block text-[0.78rem] text-stone">{r.label}</span>
                    <span className="font-medium text-pine-deep">{r.value}</span>
                  </span>
                  <Icon name="arrowUpRight" size={18} className="arrow text-stone" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-[2px] bg-parchment/70 p-6 sm:p-10 lg:col-span-7" aria-describedby="form-help">
          <h3 className="font-display text-3xl text-pine-deep">Send an enquiry</h3>
          <p id="form-help" className="mt-2 text-sm text-charcoal/65">
            This form doesn't store anything. It opens {links.whatsapp ? "WhatsApp" : links.email ? "your email app" : "Instagram"} with your message ready to send.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium sm:col-span-2">
              Your name
              <input required name="name" autoComplete="name" className={field} />
            </label>
            <label className="text-sm font-medium">
              Check-in
              <input type="date" name="checkin" className={field} />
            </label>
            <label className="text-sm font-medium">
              Check-out
              <input type="date" name="checkout" className={field} />
            </label>
            <label className="text-sm font-medium sm:col-span-2">
              Guests
              <input type="number" min={1} max={30} name="guests" inputMode="numeric" className={field} />
            </label>
            <label className="text-sm font-medium sm:col-span-2">
              Message
              <textarea name="message" rows={4} placeholder="Trek plans, arrival time, questions…" className={field} />
            </label>
          </div>
          <button type="submit" className="btn-primary group mt-7 w-full sm:w-auto">
            {links.whatsapp ? "Send on WhatsApp" : links.email ? "Send by email" : "Copy & open Instagram"}
            <Icon name="arrowRight" size={18} className="arrow" />
          </button>
          <p role="status" aria-live="polite" className="mt-4 min-h-[1.5em] text-sm text-pine">{note}</p>
        </form>
      </div>
    </section>
  );
}
