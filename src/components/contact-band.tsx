import { Phone } from "lucide-react";
import { site } from "@/content/site";
import { WhatsappIcon } from "./icons";
import { Button, Container, LeafBackdrop } from "./ui";

/** Sayfa sonlarındaki randevu çağrısı */
export function ContactBand({
  title = "İlk adımı atmak için hazır olduğunuzda buradayım.",
  text = "Sorularınız için ya da randevu oluşturmak için WhatsApp veya telefonla ulaşabilirsiniz.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-forest px-6 py-14 text-center sm:px-12 sm:py-20">
          <LeafBackdrop className="text-paper/[0.06]" />
          <LeafBackdrop className="top-auto right-auto -bottom-16 -left-16 rotate-180 text-paper/[0.06]" />
          <p className="eyebrow relative text-gold-soft">Randevu & Bilgi</p>
          <h2 className="relative mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-paper sm:text-5xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-paper/70">{text}</p>
          <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={site.whatsappHref} variant="light">
              <WhatsappIcon className="size-4.5" />
              WhatsApp ile Yazın
            </Button>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-paper/10"
            >
              <Phone className="size-4" strokeWidth={1.6} />
              {site.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
