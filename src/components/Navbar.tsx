import { useEffect, useState } from "react";
import { siteConfig } from "../config/site";
import { Icon } from "./Icon";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(y > 40);
        setProgress(max > 0 ? y / max : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-500 ease-calm ${
        open ? "bg-ivory text-pine-deep shadow-lg" : solid ? "bg-ivory/90 text-pine-deep shadow-[0_1px_0_rgba(30,58,47,0.08)] backdrop-blur-md" : "bg-transparent text-ivory"
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-ivory focus:px-4 focus:py-2 focus:text-pine">
        Skip to content
      </a>
      <nav aria-label="Main" className="container-x flex h-[72px] items-center justify-between gap-6">
        <a href="#home" className="flex items-baseline gap-2" aria-label={`${siteConfig.name} — home`}>
          <span className="font-display text-[1.6rem] font-semibold leading-none tracking-tight">Kailash</span>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] opacity-80">Homestay · Ransi</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {siteConfig.nav.slice(1).map((item) => (
            <li key={item.href}>
              <a href={item.href} className="link-underline pb-1 text-[0.9rem] font-medium">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#booking" className={`hidden sm:inline-flex ${solid ? "btn-primary" : "btn-light"} !min-h-[42px] !px-5 !text-[0.88rem]`}>
            Book Your Stay
          </a>
          <button
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "x" : "menu"} size={24} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-calm lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        hidden={!open}
      >
        <ul className="container-x min-h-0 pb-6">
          {siteConfig.nav.map((item) => (
            <li key={item.href} className="border-t border-pine/10">
              <a href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between py-3.5 font-display text-2xl">
                {item.label}
                <Icon name="chevronRight" size={18} className="opacity-40" />
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a href="#booking" onClick={() => setOpen(false)} className="btn-primary w-full">
              Book Your Stay
            </a>
          </li>
        </ul>
      </div>

      <div aria-hidden="true" className="absolute bottom-0 left-0 h-px bg-brass transition-opacity duration-500" style={{ width: `${progress * 100}%`, opacity: scrolled ? 1 : 0 }} />
    </header>
  );
}
