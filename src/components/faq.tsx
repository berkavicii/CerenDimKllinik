import { Plus } from "lucide-react";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex items-start justify-between gap-6 py-6">
            <span className="font-display text-xl text-forest sm:text-2xl">{item.q}</span>
            <Plus className="faq-icon mt-1.5 size-5 shrink-0 text-gold transition-transform duration-300" strokeWidth={1.5} />
          </summary>
          <p className="-mt-1 max-w-3xl pb-7 leading-relaxed text-ink-soft">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}
