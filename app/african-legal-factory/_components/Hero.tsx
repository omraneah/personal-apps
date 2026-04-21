import { CTA } from "./CTA";

export function Hero({
  eyebrow,
  headline,
  subhead,
  cta,
}: {
  eyebrow?: string;
  headline: string;
  subhead: string;
  cta: { label: string; href: string };
}) {
  return (
    <section className="alf-container pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-[52rem]">
        {eyebrow ? <p className="alf-label mb-6">{eyebrow}</p> : null}
        <h1 className="text-4xl md:text-6xl leading-[1.1] mb-8">{headline}</h1>
        <p className="text-lg md:text-xl max-w-[44ch] alf-muted mb-10">
          {subhead}
        </p>
        <CTA href={cta.href}>{cta.label}</CTA>
      </div>
    </section>
  );
}
