import { notFound } from "next/navigation";
import { hasLocale } from "../../_lib/i18n";
import { academyContent } from "../../_content/pages/academy";
import { BlockRenderer } from "../../_components/BlockRenderer";
import { CTA } from "../../_components/CTA";
import { LogoWall } from "../../_components/LogoWall";

export default async function AcademyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const page = academyContent[lang];

  return (
    <>
      <section className="alf-container pt-20 pb-12">
        <p className="alf-label mb-4">{lang === "fr" ? "Formation" : "Training"}</p>
        <h1 className="text-4xl md:text-6xl leading-[1.1]">{page.h1}</h1>
        <div className="alf-prose mt-8 text-lg">
          <BlockRenderer blocks={page.intro} />
        </div>
      </section>

      <section className="alf-container py-12">
        <p className="alf-label mb-4">{lang === "fr" ? "Nos partenaires" : "Our partners"}</p>
        <LogoWall names={page.partners} />
      </section>

      {page.sections.map((s, i) => (
        <section key={i} className="alf-container py-12 border-t" style={{ borderColor: "var(--alf-border)" }}>
          <h2 className="text-3xl mb-6">{s.title}</h2>
          <div className="alf-prose">
            <BlockRenderer blocks={s.blocks} />
          </div>
          {s.cta ? <div className="mt-8"><CTA href={s.cta.href}>{s.cta.label}</CTA></div> : null}
        </section>
      ))}
    </>
  );
}
