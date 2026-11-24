import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";
import { Container, PageHero } from "@/components/ui";
import { InstagramIcon, WhatsappIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "İletişim",
  description: `Klinik Psikolog Ceren Dim ile iletişim ve randevu: ${site.phone}, ${site.email}. ${site.address.full}.`,
  alternates: { canonical: "/iletisim/" },
};

const channels = [
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    value: "Mesaj gönderin",
    href: site.whatsappHref,
    external: true,
  },
  { icon: Phone, label: "Telefon", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "E-posta", value: site.email, href: `mailto:${site.email}` },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: `@${site.instagram}`,
    href: site.instagramHref,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Randevu ve bilgi için ulaşın."
        text="En hızlı dönüş için WhatsApp üzerinden yazabilirsiniz. Size uygun bir gün ve saat birlikte belirleyelim."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            {channels.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-5 rounded-3xl border border-line bg-paper p-6 transition-[border-color,box-shadow] duration-300 hover:border-gold/50 hover:shadow-lg hover:shadow-forest/5"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sage-soft text-forest transition-colors group-hover:bg-forest group-hover:text-gold-soft">
                  <Icon className="size-5" strokeWidth={1.5} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold tracking-[0.18em] text-gold uppercase">{label}</span>
                  <span className="mt-1 block truncate text-lg font-medium text-forest">{value}</span>
                </span>
              </a>
            ))}

            <div className="rounded-3xl bg-forest p-7 text-paper">
              <p className="flex gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
                <span>
                  <span className="block text-xs font-semibold tracking-[0.18em] text-gold-soft uppercase">Adres</span>
                  <span className="mt-1.5 block leading-relaxed">{site.address.full}</span>
                </span>
              </p>
              <p className="mt-6 flex gap-4">
                <Clock className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
                <span>
                  <span className="block text-xs font-semibold tracking-[0.18em] text-gold-soft uppercase">
                    Çalışma Saatleri
                  </span>
                  <span className="mt-1.5 block leading-relaxed">
                    {site.hours} Bireysel danışmanlık görüşmeleri online olarak da yapılabilir.
                  </span>
                </span>
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-line bg-cream-2">
            <iframe
              title="Ofis konumu"
              src={site.mapEmbed}
              className="h-[420px] w-full lg:h-full lg:min-h-[560px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
