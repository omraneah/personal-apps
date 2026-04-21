import { notFound } from "next/navigation";
import { hasLocale } from "../../_lib/i18n";
import { aboutContent } from "../../_content/pages/about";
import { BlockRenderer } from "../../_components/BlockRenderer";
import { Card } from "../../_components/Card";

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const page = aboutContent[lang];

  return (
    <>
      <section className="alf-container pt-20 pb-10">
        <h1 className="text-4xl md:text-5xl leading-[1.15] max-w-[22ch]">{page.h1}</h1>
      </section>
      {page.sections.map((s, i) => (
        <section key={i} className="alf-container py-10 border-t" style={{ borderColor: "var(--alf-border)" }}>
          <h2 className="text-2xl mb-4">{s.title}</h2>
          <div className="alf-prose"><BlockRenderer blocks={s.blocks} /></div>
        </section>
      ))}
      <section className="alf-container py-12 border-t" style={{ borderColor: "var(--alf-border)" }}>
        <h2 className="text-2xl mb-6">{lang === "fr" ? "Valeurs phares" : "Core values"}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {page.values.map((v) => (
            <Card key={v.title} title={v.title}>
              <p className="alf-muted">{v.body}</p>
            </Card>
          ))}
        </div>
      </section>
      <section className="alf-container py-12 border-t" style={{ borderColor: "var(--alf-border)" }}>
        <h2 className="text-2xl mb-6">{lang === "fr" ? "Équipe" : "Team"}</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {page.team.map((name) => (
            <li key={name} className="alf-card text-center">{name}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
