import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { getService, services } from "@/content/services";
import { site } from "@/content/site";
import { Button, Container, LeafBackdrop } from "@/components/ui";
import { ServiceIcon, WhatsappIcon } from "@/components/icons";
import { Faq, faqJsonLd } from "@/components/faq";
import { ContactBand } from "@/components/contact-band";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/hizmetler/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.title} Fethiye`,
    description: s.description,
    alternates: { canonical: `/hizmetler/${s.slug}/` },
  };
}

export default async function ServicePage({ params }: PageProps<"/hizmetler/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const others = services.filter((o) => o.slug !== s.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(s.faq)) }} />

      <section className="relative overflow-hidden border-b border-line bg-paper">
        <LeafBackdrop />
        <Container className="relative py-14 sm:py-20">
          <nav className="rise text-sm text-ink-soft" aria-label="Sayfa yolu">
            <Link href="/hizmetler/" className="hover:text-forest">
              Hizmetler
            </Link>
            <span className="mx-2 text-gold">/</span>
            <span className="text-forest">{s.title}</span>
          </nav>
          <span className="rise mt-10 grid size-16 place-items-center rounded-2xl bg-forest text-gold-soft">
            <ServiceIcon name={s.icon} className="size-7" />
          </span>
          <p className="eyebrow rise rise-2 mt-8">{s.title}</p>
          <h1 className="rise rise-2 mt-4 max-w-3xl font-display text-5xl leading-[1.05] text-forest sm:text-6xl">
            {s.headline}
          </h1>
          <div className="rise rise-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={site.whatsappHref}>
              <WhatsappIcon className="size-4.5" />
              Bilgi ve Randevu
            </Button>
            <Button href={site.phoneHref} variant="outline">
              {site.phone}
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="prose-calm text-lg">
              {s.intro.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <h2 className="mt-16 font-display text-4xl text-forest">Süreç nasıl ilerler?</h2>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2">
              {s.approach.map((step, i) => (
                <li key={step.title} className="rounded-3xl border border-line bg-paper p-6">
                  <span className="font-display text-3xl text-gold/80">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-2xl text-forest">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{step.text}</p>
                </li>
              ))}
            </ol>

            <h2 className="mt-16 font-display text-4xl text-forest">Sık sorulanlar</h2>
            <div className="mt-6">
              <Faq items={s.faq} />
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-sage-soft/70 p-7">
              <h2 className="font-display text-2xl text-forest">Kimler için?</h2>
              <ul className="mt-5 space-y-3.5">
                {s.forWhom.map((f) => (
                  <li key={f} className="flex gap-3 leading-relaxed text-ink-soft">
                    <Check className="mt-1 size-4 shrink-0 text-forest" strokeWidth={2} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-line bg-paper p-7">
              <p className="flex items-start gap-3 text-ink-soft">
                <MapPin className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
                {s.format}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft/80">
                Her bireyin süreci farklıdır. Seans sayısı ve sıklığı ön görüşmede kişiye özel belirlenir.
              </p>
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-t border-line bg-paper py-16 sm:py-20">
        <Container>
          <p className="eyebrow">Diğer hizmetler</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/hizmetler/${o.slug}/`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-line p-6 transition-colors hover:border-gold/50"
              >
                <span className="flex items-center gap-4">
                  <ServiceIcon name={o.icon} className="size-6 text-forest" />
                  <span className="font-display text-xl text-forest">{o.title}</span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-gold transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ContactBand />
    </>
  );
}
