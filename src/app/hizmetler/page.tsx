import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/services";
import { Container, PageHero } from "@/components/ui";
import { ServiceIcon } from "@/components/icons";
import { ContactBand } from "@/components/contact-band";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Fethiye'de sigara bırakma ve iştah kapatma seansları, anksiyete ve panik atak desteği, ruhsal dengeleme, bireysel danışmanlık, çocuk değerlendirme ve oyun terapisi.",
  alternates: { canonical: "/hizmetler/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetler"
        title="Size özel, adım adım."
        text="Her süreç ön görüşmeyle başlar. İhtiyaçlarınızı birlikte değerlendirir, size en uygun çalışma biçimini belirleriz."
      />

      <section className="py-16 sm:py-24">
        <Container className="space-y-5">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/hizmetler/${s.slug}/`}
              className="group grid gap-6 rounded-3xl border border-line bg-paper p-7 transition-[border-color,box-shadow] duration-300 hover:border-gold/40 hover:shadow-xl hover:shadow-forest/5 sm:p-10 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10"
            >
              <span className="flex items-center gap-5">
                <span className="font-display text-3xl text-gold/70">0{i + 1}</span>
                <span className="grid size-14 place-items-center rounded-2xl bg-sage-soft text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-gold-soft">
                  <ServiceIcon name={s.icon} className="size-6" />
                </span>
              </span>
              <span>
                <span className="block font-display text-3xl text-forest">{s.title}</span>
                <span className="mt-2 block max-w-2xl leading-relaxed text-ink-soft">{s.short}</span>
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap text-gold">
                İncele
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </Container>
      </section>

      <ContactBand title="Hangi hizmetin size uygun olduğundan emin değil misiniz?" text="Kısa bir ön görüşmede birlikte değerlendirelim." />
    </>
  );
}
