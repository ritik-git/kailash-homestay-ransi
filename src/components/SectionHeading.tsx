import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  id?: string;
}

export function SectionHeading({ eyebrow, title, intro, align = "left", tone = "dark", id }: Props) {
  const center = align === "center";
  const light = tone === "light";
  return (
    <header className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow && <p className={`eyebrow ${light ? "text-brass-light" : ""}`}>{eyebrow}</p>}
      <h2 id={id} className={`mt-4 text-[2.4rem] leading-[1.05] sm:text-5xl lg:text-[3.6rem] ${light ? "text-ivory" : "text-pine-deep"}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 max-w-prose text-[1.05rem] ${center ? "mx-auto" : ""} ${light ? "text-ivory/75" : "text-charcoal/70"}`}>
          {intro}
        </p>
      )}
    </header>
  );
}
