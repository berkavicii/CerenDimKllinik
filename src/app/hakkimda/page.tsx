import type { Metadata } from "next";
import Image from "next/image";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import { about } from "@/content/about";
import { Container, PageHero } from "@/components/ui";
import { ContactBand } from "@/components/contact-band";

export const metadata: Metadata = {
  title: "Hakkımda",
  description:
    "Klinik Psikolog Ceren Dim: Nişantaşı Üniversitesi Psikoloji lisansı, İstanbul Arel Üniversitesi Klinik Psikoloji yüksek lisansı, BDT, WISC-4, MOXO ve oyun terapisi eğitimleri.",
  alternates: { canonical: "/hakkimda/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Hakkımda" title={about.lead} />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.4fr]">
          <div className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28 lg:self-start">
            <div className="arch absolute inset-0 -translate-x-4 translate-y-4 border border-gold/60" aria-hidden />
            <div className="arch relative aspect-[3/4] overflow-hidden bg-cream-2">
              <Image
                src="/img/ceren-dim.jpeg"
                alt="Klinik Psikolog Ceren Dim"
                fill
                sizes="(min-width: 1024px) 24rem, 90vw"
                className="object-cover object-[50%_30%]"
              />
            </div>
          </div>

          <div>
            <div className="prose-calm text-lg">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <Block icon={GraduationCap} title="Eğitim">
              <ul className="space-y-5">
                {about.education.map((e) => (
                  <li key={e.school} className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-6">
                    <span>
                      <span className="block font-semibold text-forest">{e.school}</span>
                      <span className="text-ink-soft">{e.degree}</span>
                    </span>
                    <span className="shrink-0 text-sm text-gold">{e.years}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block icon={Briefcase} title="Klinik Deneyim">
              <ul className="space-y-6 border-l border-gold/40 pl-6">
                {about.experience.map((e) => (
                  <li key={e.place} className="relative">
                    <span className="absolute top-2 -left-[1.69rem] size-2.5 rounded-full bg-gold" aria-hidden />
                    <span className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-6">
                      <span className="font-semibold text-forest">{e.place}</span>
                      <span className="shrink-0 text-sm text-gold">{e.years}</span>
                    </span>
                    <span className="block text-sm text-ink-soft/80">{e.role}</span>
                    <span className="mt-1.5 block leading-relaxed text-ink-soft">{e.text}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block icon={Award} title="Eğitimler ve Sertifikalar">
              <ul className="grid gap-3 sm:grid-cols-2">
                {about.certificates.map((c) => (
                  <li key={c.name} className="rounded-2xl border border-line bg-paper p-5">
                    <span className="block font-semibold text-forest">{c.name}</span>
                    <span className="mt-1 block text-sm text-ink-soft">{c.by}</span>
                  </li>
                ))}
              </ul>
            </Block>
          </div>
        </Container>
      </section>

      <ContactBand />
    </>
  );
}

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-14">
      <h2 className="mb-6 flex items-center gap-3 font-display text-3xl text-forest">
        <Icon className="size-6 text-gold" strokeWidth={1.4} />
        {title}
      </h2>
      {children}
    </div>
  );
}
