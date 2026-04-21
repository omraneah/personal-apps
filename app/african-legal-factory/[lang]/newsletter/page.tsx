import { notFound } from "next/navigation";
import { hasLocale } from "../../_lib/i18n";
import { newsletterContent } from "../../_content/pages/newsletter";

export default async function NewsletterPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const page = newsletterContent[lang];

  return (
    <section className="alf-container pt-20 pb-20">
      <h1 className="text-4xl md:text-5xl mb-6">{page.h1}</h1>
      <p className="alf-prose text-lg alf-muted mb-10">{page.tagline}</p>
      <ul className="space-y-2 mb-10">
        {page.bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span aria-hidden className="alf-accent">—</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <form action="https://africanlegalfactory.com/newsletter/" method="post"
            className="alf-card max-w-md flex items-center gap-3">
        <input type="email" name="email" placeholder="you@example.com"
               className="flex-1 bg-transparent border-b py-2"
               style={{ borderColor: "var(--alf-border)" }} required />
        <button type="submit" className="alf-btn">{page.buttonLabel} <span aria-hidden>→</span></button>
      </form>
      <p className="alf-label mt-12">{page.archiveLabel}</p>
      <p className="alf-muted">{page.archiveNote}</p>
    </section>
  );
}
