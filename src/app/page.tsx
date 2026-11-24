import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, HeartHandshake, ShieldCheck, Video } from "lucide-react";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { generalFaq } from "@/content/about";
import { Button, Container, LeafBackdrop, Ornament, SectionHeading } from "@/components/ui";
import { ServiceIcon, WhatsappIcon } from "@/components/icons";
import { Faq, faqJsonLd } from "@/components/faq";
import { ContactBand } from "@/components/contact-band";

const trust = [
  { icon: GraduationCap, title: "Klinik Psikoloji", text: "Yüksek lisans eğitimi" },
  { icon: HeartHandshake, title: "Bilişsel Davranışçı", text: "Terapi yaklaşımı" },
  { icon: Video, title: "Online & Yüz Yüze", text: "Size uygun görüşme biçimi" },
  { icon: ShieldCheck, title: "Gizlilik", text: "Etik ilkeler ve KVKK güvencesi" },
];

const steps = [
  {
    title: "İletişim",
    text: "WhatsApp ya da telefonla ulaşıyorsunuz; size uygun bir gün ve saat belirliyoruz.",
  },
  {
    title: "Ön görüşme",
    text: "Sizi buraya getiren konuyu, beklentilerinizi ve ihtiyaçlarınızı birlikte konuşuyoruz.",
  },
  {
    title: "Kişisel plan",
    text: "Size en uygun çalışma biçimini, seans sıklığını ve odak noktalarını belirliyoruz.",
  },
  {
    title: "Birlikte yol almak",
    text: "Seanslarla ilerliyor, süreci düzenli aralıklarla birlikte değerlendiriyoruz.",
  },
];

const homeFaq = generalFaq.slice(0, 4);

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(homeFaq)) }} />

      {/* Karşılama */}
      <section className="relative overflow-hidden bg-paper">
        <LeafBackdrop className="-top-6 right-auto -left-24 hidden w-[28rem] -scale-x-100 lg:block" />
        {/*
          Mobil/tablet: silüet üstte, gövdesi aşağı doğru sayfaya karışır; ortalanmış metin bu erimenin
          üzerinden başlar. Masaüstü: iki sütun, silüet bölümün tabanına oturur.
        */}
        <Container className="relative grid items-center pt-6 pb-16 sm:pb-20 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:py-24">
          <div className="relative z-10 order-2 -mt-24 text-center sm:-mt-20 lg:order-1 lg:mt-0 lg:text-left">
            <p className="eyebrow rise">{site.city} · Online & Yüz Yüze</p>
            <h1 className="rise rise-2 mt-4 font-display text-[2.75rem] leading-[1.04] text-forest sm:text-6xl lg:mt-5 lg:text-7xl">
              İç dünyanızda dengeyi <em className="text-gold">birlikte</em> yeniden kuralım.
            </h1>
            <p className="rise rise-3 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft lg:mx-0 lg:mt-7">
              Bireysel danışmanlıktan sigara bırakma ve iştah kapatma seanslarına, anksiyete ve panik atak
              desteğinden ruhsal dengelemeye; güvenli, yargısız ve size özel bir alan.
            </p>
            <div className="rise rise-3 mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:mt-9 lg:justify-start">
              <Button href={site.whatsappHref}>
                <WhatsappIcon className="size-4.5" />
                Randevu Al
              </Button>
              <Button href="/hizmetler/" variant="outline">
                Hizmetleri İncele
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          <div className="rise relative order-1 mx-auto w-full max-w-[17rem] sm:max-w-xs lg:order-2 lg:-mb-24 lg:max-w-md lg:self-end">
            <div
              className="absolute inset-x-[-25%] top-[-6%] aspect-square rounded-full bg-[radial-gradient(closest-side,var(--sage-soft),transparent)] lg:inset-x-[-10%] lg:top-[4%]"
              aria-hidden
            />
            {/* Görsel kaynağı: Magnific (Freepik) */}
            <Image
              src="/img/hero-silhouette.webp"
              alt="Doğayla iç içe bir insan silüeti: başında gökyüzü, gövdesinde yeşil bir vadi"
              width={900}
              height={1200}
              priority
              sizes="(min-width: 1024px) 28rem, 18rem"
              className="relative h-auto w-full [mask-image:linear-gradient(to_bottom,black_40%,transparent_80%)] lg:[mask-image:none]"
            />
          </div>
        </Container>
      </section>

      {/* Güven şeridi */}
      <section className="border-y border-line bg-cream">
        <Container className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4">
          {trust.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sage-soft text-forest">
                <Icon className="size-5" strokeWidth={1.5} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-forest">{title}</span>
                <span className="mt-0.5 block text-sm text-ink-soft">{text}</span>
              </span>
            </div>
          ))}
        </Container>
      </section>

      {/* Hizmetler */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Hizmetler"
              title="Size nasıl destek olabilirim?"
              text="Her süreç, ön görüşmede birlikte belirlediğimiz ihtiyaçlarınıza göre kişiye özel olarak planlanır."
            />
            <Link href="/hizmetler/" className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold">
              Tüm hizmetler <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetler/${s.slug}/`}
                className="group flex flex-col rounded-3xl border border-line bg-paper p-7 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-forest/5"
              >
                <span className="grid size-13 place-items-center rounded-2xl bg-sage-soft text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-gold-soft">
                  <ServiceIcon name={s.icon} className="size-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl leading-snug text-forest">{s.title}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  Detaylı bilgi
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Hakkımda özeti */}
      <section className="bg-sage-soft/60 py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <figure className="relative rounded-[2rem] bg-forest p-10 text-paper sm:p-14">
            <span className="font-display text-8xl leading-none text-gold/70" aria-hidden>
              “
            </span>
            <blockquote className="-mt-6 font-display text-3xl leading-snug sm:text-4xl">
              Her danışanın hikâyesi kendine özgüdür. Benim görevim, o hikâyeyi sizin temponuza saygı duyarak birlikte
              dinlemek.
            </blockquote>
            <figcaption className="mt-8 text-sm font-semibold tracking-[0.18em] text-gold-soft uppercase">
              Klinik Psikolog Ceren Dim
            </figcaption>
          </figure>

          <div>
            <SectionHeading eyebrow="Hakkımda" title="Güvenli, sıcak ve yargısız bir alan." />
            <div className="prose-calm mt-6">
              <p>
                Nişantaşı Üniversitesi Psikoloji lisansının ardından İstanbul Arel Üniversitesi&apos;nde Klinik Psikoloji
                yüksek lisansımı tamamladım. Psikiyatri polikliniğinden özel eğitim merkezlerine, farklı klinik
                ortamlarda yetişkinler ve çocuklarla çalıştım.
              </p>
              <p>
                Bugün Fethiye&apos;de ve online olarak; bilişsel davranışçı yaklaşım temelinde bireysel danışmanlık, çocuk
                değerlendirme ve kişiye özel dengeleme seansları sunuyorum.
              </p>
            </div>
            <Button href="/hakkimda/" variant="outline" className="mt-8">
              Daha fazlası
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Süreç */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Süreç"
            title="Süreç nasıl işler?"
            text="İlk adım çoğu zaman en zor olanıdır. Bu yüzden süreci olabildiğince sade ve anlaşılır tutuyoruz."
          />
          <Ornament className="mt-8 justify-center" />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="rounded-3xl bg-paper p-7">
                <span className="font-display text-5xl text-gold/80">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl text-forest">{step.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* SSS */}
      <section className="bg-paper py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading eyebrow="Sık Sorulanlar" title="Aklınızdaki sorular" />
            <Link href="/sss/" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold">
              Tüm sorular <ArrowRight className="size-4" />
            </Link>
          </div>
          <Faq items={homeFaq} />
        </Container>
      </section>

      <ContactBand />
    </>
  );
}
