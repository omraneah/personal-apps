import { notFound } from "next/navigation";
import { hasLocale } from "../../../_lib/i18n";
import { legalPages } from "../../../_content/legal";
import { BlockRenderer } from "../../../_components/BlockRenderer";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ lang: "fr", slug }));
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  if (lang !== "fr") notFound();
  const page = legalPages[slug];
  if (!page) notFound();

  return (
    <article className="alf-container pt-20 pb-20">
      <h1 className="text-3xl md:text-4xl leading-[1.2] mb-2">{page.h1}</h1>
      {page.subtitle ? <p className="alf-label mb-10">{page.subtitle}</p> : null}
      <div className="alf-prose">
        <BlockRenderer blocks={page.blocks} />
      </div>
    </article>
  );
}
