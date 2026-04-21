import { notFound } from "next/navigation";
import { hasLocale } from "../../_lib/i18n";
import { contactContent } from "../../_content/pages/contact";

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const page = contactContent[lang];

  return (
    <section className="alf-container pt-20 pb-20">
      <h1 className="text-4xl md:text-5xl mb-8">{page.h1}</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="alf-muted text-lg mb-8">{page.body}</p>
          <p className="alf-label mb-2">{lang === "fr" ? "Adresse" : "Address"}</p>
          <p className="mb-6">{page.address}</p>
          <p className="alf-label mb-2">{lang === "fr" ? "Téléphone" : "Phone"}</p>
          <p className="mb-6"><a href={`tel:${page.phone.replace(/\s/g, "")}`}>{page.phone}</a></p>
          <p className="alf-label mb-2">Email</p>
          <p><a href={`mailto:${page.email}`}>{page.email}</a></p>
        </div>
        <div className="alf-card">
          <p className="alf-label mb-6">{page.formLabel}</p>
          <form action={`mailto:${page.email}`} method="post" className="space-y-4">
            <label className="block">
              <span className="alf-label block mb-1">{lang === "fr" ? "Nom" : "Name"}</span>
              <input type="text" name="name" className="w-full bg-transparent border-b py-2"
                     style={{ borderColor: "var(--alf-border)" }} required />
            </label>
            <label className="block">
              <span className="alf-label block mb-1">Email</span>
              <input type="email" name="email" className="w-full bg-transparent border-b py-2"
                     style={{ borderColor: "var(--alf-border)" }} required />
            </label>
            <label className="block">
              <span className="alf-label block mb-1">{lang === "fr" ? "Message" : "Message"}</span>
              <textarea name="message" rows={5} className="w-full bg-transparent border-b py-2"
                        style={{ borderColor: "var(--alf-border)" }} required />
            </label>
            <button type="submit" className="alf-btn">
              {lang === "fr" ? "Envoyer" : "Send"} <span aria-hidden>→</span>
            </button>
          </form>
          <p className="alf-muted text-sm mt-8">{page.privacyNotice}</p>
        </div>
      </div>
    </section>
  );
}
