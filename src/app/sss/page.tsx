import type { Metadata } from "next";
import { generalFaq } from "@/content/about";
import { Container, PageHero } from "@/components/ui";
import { Faq, faqJsonLd } from "@/components/faq";
import { ContactBand } from "@/components/contact-band";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular",
  description:
    "İlk görüşme, online seanslar, seans sayısı, gizlilik ve randevu hakkında sık sorulan sorular. Klinik Psikolog Ceren Dim, Fethiye.",
  alternates: { canonical: "/sss/" },
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(generalFaq)) }} />
      <PageHero
        eyebrow="Sık Sorulanlar"
        title="Aklınızdaki sorular"
        text="Burada yanıtını bulamadığınız sorular için bana WhatsApp veya telefonla ulaşabilirsiniz."
      />
      <section className="py-16 sm:py-24">
        <Container className="max-w-4xl">
          <Faq items={generalFaq} />
        </Container>
      </section>
      <ContactBand title="Başka bir sorunuz mu var?" />
    </>
  );
}
