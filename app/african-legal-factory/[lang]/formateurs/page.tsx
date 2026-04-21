import { notFound } from "next/navigation";
import { hasLocale } from "../../_lib/i18n";
import { expertsContent } from "../../_content/pages/experts";

export default async function ExpertsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const page = expertsContent[lang];

  return (
    <>
      <section className="alf-container pt-20 pb-10">
        <p className="alf-label mb-4">THE ALF SQUAD</p>
        <h1 className="text-4xl md:text-5xl leading-[1.15]">{page.h1}</h1>
        <p className="mt-6 alf-muted max-w-[52ch]">{page.intro}</p>
      </section>
      <section className="alf-container py-12 border-t" style={{ borderColor: "var(--alf-border)" }}>
        <ul className="grid md:grid-cols-2 gap-6">
          {page.experts.map((e) => (
            <li key={e.name} className="alf-card">
              <p className="alf-label mb-2">{e.flags}</p>
              <h3 className="text-xl mb-1">{e.name}</h3>
              <p className="alf-accent mb-3 italic">{e.title}</p>
              <p className="alf-muted mb-4">{e.bio}</p>
              <a href={e.linkedin} target="_blank" rel="noopener noreferrer" className="alf-label">
                LinkedIn →
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
