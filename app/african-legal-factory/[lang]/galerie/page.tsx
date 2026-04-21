import Image from "next/image";
import { notFound } from "next/navigation";
import { hasLocale } from "../../_lib/i18n";
import { galleryContent, galleryImages } from "../../_content/pages/gallery";

export default async function GalleryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const page = galleryContent[lang];

  return (
    <>
      <section className="alf-container pt-20 pb-10">
        <h1 className="text-4xl md:text-5xl leading-[1.15]">{page.h1}</h1>
        <p className="mt-6 alf-muted max-w-[52ch]">{page.intro}</p>
      </section>
      <section className="alf-container py-10 border-t" style={{ borderColor: "var(--alf-border)" }}>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.map((src) => (
            <li key={src} className="relative aspect-square overflow-hidden border"
                style={{ borderColor: "var(--alf-border)" }}>
              <Image
                src={`/african-legal-factory/gallery/${src}`}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
