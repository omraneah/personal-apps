import { notFound } from "next/navigation";
import { hasLocale } from "../../_lib/i18n";
import { missionContent } from "../../_content/pages/mission";
import { BlockRenderer } from "../../_components/BlockRenderer";
import { Card } from "../../_components/Card";

export default async function MissionPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const page = missionContent[lang];

  return (
    <>
      <section className="alf-container pt-20 pb-10">
        <h1 className="text-4xl md:text-5xl leading-[1.15] max-w-[26ch]">{page.h1}</h1>
      </section>
      <section className="alf-container py-10 border-t" style={{ borderColor: "var(--alf-border)" }}>
        <p className="alf-label mb-2">{lang === "fr" ? "Mission" : "Mission"}</p>
        <p className="alf-prose text-lg mb-8">{page.mission}</p>
        <p className="alf-label mb-2">{lang === "fr" ? "Vision" : "Vision"}</p>
        <p className="alf-prose text-lg">{page.vision}</p>
      </section>
      <section className="alf-container py-10 border-t" style={{ borderColor: "var(--alf-border)" }}>
        <p className="alf-label mb-4">{lang === "fr" ? "Valeurs" : "Values"}</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 alf-muted">
          {page.values.map((v) => <li key={v}>{v}</li>)}
        </ul>
      </section>
      <section className="alf-container py-10 border-t" style={{ borderColor: "var(--alf-border)" }}>
        <h2 className="text-2xl mb-6">{lang === "fr" ? "Notre histoire" : "Our story"}</h2>
        <div className="alf-prose"><BlockRenderer blocks={page.story} /></div>
      </section>
      <section className="alf-container py-10 border-t" style={{ borderColor: "var(--alf-border)" }}>
        <h2 className="text-2xl mb-6">{lang === "fr" ? "Détail des valeurs" : "Value definitions"}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {page.valueDefs.map((v) => (
            <Card key={v.title} title={v.title}><p className="alf-muted">{v.body}</p></Card>
          ))}
        </div>
      </section>
      <section className="alf-container py-10 border-t" style={{ borderColor: "var(--alf-border)" }}>
        <h2 className="text-2xl mb-6">{lang === "fr" ? "Philosophie client" : "Customer philosophy"}</h2>
        <ol className="space-y-4 alf-prose list-decimal pl-6">
          {page.philosophy.map((p) => (
            <li key={p.title}>
              <strong>{p.title}.</strong> <span className="alf-muted">{p.body}</span>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
