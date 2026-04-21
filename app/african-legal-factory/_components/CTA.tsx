export function CTA({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const isExternal = external ?? /^https?:/.test(href);
  return (
    <a
      href={href}
      className="alf-btn"
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}
