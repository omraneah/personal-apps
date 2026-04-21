import { notFound } from "next/navigation";
import { hasLocale } from "../../_lib/i18n";
import { offresContent } from "../../_content/pages/offres";
import { BlockRenderer } from "../../_components/BlockRenderer";
import { CTA } from "../../_components/CTA";

export default async function OffresPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const page = offresContent[lang];

  return (
    <>
      <section className="alf-container pt-20 pb-12">
        <h1 className="text-4xl md:text-5xl leading-[1.15] max-w-[22ch]">{page.h1}</h1>
        <div className="alf-prose mt-8 text-lg">
          <BlockRenderer blocks={page.intro} />
        </div>
      </section>
      {page.sections.map((s, i) => (
        <section key={i} className="alf-container py-12 border-t" style={{ borderColor: "var(--alf-border)" }}>
          <h2 className="text-3xl mb-6">{s.title}</h2>
          <div className="alf-prose">
            <BlockRenderer blocks={s.blocks} />
          </div>
          <div className="mt-8"><CTA href={s.cta.href}>{s.cta.label}</CTA></div>
        </section>
      ))}
    </>
  );
}
