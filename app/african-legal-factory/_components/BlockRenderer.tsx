import type { Block } from "../_content/blocks";

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.t) {
          case "p": return <p key={i} className="mb-5">{b.c}</p>;
          case "h2": return <h2 key={i} className="mt-12 mb-4 text-2xl">{b.c}</h2>;
          case "h3": return <h3 key={i} className="mt-8 mb-3 text-xl">{b.c}</h3>;
          case "h4": return <h4 key={i} className="mt-6 mb-2 text-lg alf-accent">{b.c}</h4>;
          case "ul": return (
            <ul key={i} className="list-disc pl-6 mb-5 space-y-1 alf-muted">
              {b.c.map((li, j) => <li key={j}>{li}</li>)}
            </ul>
          );
          case "ol": return (
            <ol key={i} className="list-decimal pl-6 mb-5 space-y-1 alf-muted">
              {b.c.map((li, j) => <li key={j}>{li}</li>)}
            </ol>
          );
          case "quote": return (
            <blockquote
              key={i}
              className="border-l-2 pl-5 my-8 italic alf-muted"
              style={{ borderColor: "var(--alf-accent)" }}
            >
              {b.c}
            </blockquote>
          );
          case "hr": return <hr key={i} className="alf-hairline" />;
        }
      })}
    </>
  );
}
