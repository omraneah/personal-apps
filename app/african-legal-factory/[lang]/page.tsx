import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../_lib/i18n";
import { Hero } from "../_components/Hero";
import { SectionHeader } from "../_components/SectionHeader";
import { Card } from "../_components/Card";
import { CTA } from "../_components/CTA";
import { LogoWall } from "../_components/LogoWall";
import { FAQ } from "../_components/FAQ";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.home;

  return (
    <>
      <Hero
        eyebrow={t.heroEyebrow}
        headline={t.heroHeadline}
        subhead={t.heroSubhead}
        cta={t.heroCta}
      />

      <hr className="alf-hairline alf-container" />

      <section className="alf-container py-16">
        <SectionHeader eyebrow={t.pillarsEyebrow} headline={t.pillarsHeadline} />
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {t.pillars.map((p) => (
            <Card key={p.title} title={p.title}>
              <p className="alf-muted">{p.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <hr className="alf-hairline alf-container" />

      <section className="alf-container py-16">
        <SectionHeader eyebrow={t.toolsEyebrow} headline={t.toolsHeadline} />
        <blockquote className="mt-8 max-w-[48ch] text-xl italic alf-muted border-l-2 pl-5"
                    style={{ borderColor: "var(--alf-accent)" }}>
          {t.toolsQuote}
        </blockquote>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {t.tools.map((tool) => (
            <Card key={tool.title} title={tool.title}>
              <ul className="list-disc pl-5 alf-muted space-y-1">
                {tool.body.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <CTA href={t.toolsCta.href}>{t.toolsCta.label}</CTA>
        </div>
      </section>

      <hr className="alf-hairline alf-container" />

      <section className="alf-container py-16">
        <SectionHeader eyebrow={t.trainingEyebrow} headline={t.trainingHeadline} />
        <p className="mt-6 max-w-[52ch] alf-muted text-lg">{t.trainingIntro}</p>
        {t.trainingPullquote ? (
          <blockquote className="mt-8 max-w-[52ch] text-xl italic">
            &ldquo;{t.trainingPullquote}&rdquo;
          </blockquote>
        ) : null}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {t.trainingTracks.map((track) => (
            <Card key={track.title} title={track.title}>
              <p className="alf-label">{track.partners}</p>
              <ul className="list-disc pl-5 alf-muted space-y-1">
                {track.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <CTA href={t.trainingCta.href}>{t.trainingCta.label}</CTA>
        </div>
      </section>

      <hr className="alf-hairline alf-container" />

      <section className="alf-container py-16">
        <SectionHeader eyebrow={t.trustEyebrow} headline={t.trustHeadline} />
        <p className="mt-6 max-w-[52ch] alf-muted">{t.trustIntro}</p>
        <div className="mt-10">
          <LogoWall names={t.trustPartners} />
        </div>
      </section>

      <hr className="alf-hairline alf-container" />

      <section className="alf-container py-16">
        <SectionHeader eyebrow={t.ecosystemEyebrow} headline={t.ecosystemHeadline} />
        <p className="mt-6 max-w-[52ch] alf-muted text-lg">{t.ecosystemIntro}</p>
        <ul className="mt-8 space-y-3 max-w-[52ch]">
          {t.ecosystemPoints.map((p, i) => (
            <li key={i} className="flex gap-3">
              <span aria-hidden className="alf-accent">—</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <CTA href={t.ecosystemCta.href}>{t.ecosystemCta.label}</CTA>
        </div>
      </section>

      <hr className="alf-hairline alf-container" />

      <section className="alf-container py-16">
        <SectionHeader eyebrow={t.faqEyebrow} headline={t.faqHeadline} />
        <div className="mt-10">
          <FAQ items={t.faq} />
        </div>
      </section>
    </>
  );
}
