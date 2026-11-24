import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav, site } from "@/content/site";
import { InstagramIcon, LogoMark, WhatsappIcon } from "./icons";
import { Container } from "./ui";

const social =
  "grid size-8 place-items-center rounded-full border border-paper/20 transition-colors hover:border-gold hover:text-gold";

export function Footer() {
  return (
    <footer className="bg-forest-2 text-sm text-paper/75">
      {/* Kompakt üst bölüm: marka · menü · iletişim */}
      <Container className="flex flex-col items-center gap-6 py-9 text-center xl:flex-row xl:items-center xl:justify-between xl:gap-8 xl:text-left [&_a]:whitespace-nowrap">
        <div className="flex shrink-0 items-center gap-5">
          <Link href="/" className="flex items-center gap-2.5 text-paper">
            <LogoMark className="size-8 text-gold-soft" />
            <span className="leading-none">
              <span className="block font-display text-xl">{site.name}</span>
              <span className="mt-0.5 block text-[0.6rem] font-semibold tracking-[0.22em] text-gold uppercase">
                {site.role}
              </span>
            </span>
          </Link>
          <div className="flex gap-2">
            <a href={site.instagramHref} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={social}>
              <InstagramIcon className="size-4" />
            </a>
            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={social}>
              <WhatsappIcon className="size-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Alt menü" className="flex flex-wrap justify-center gap-x-5 gap-y-2 xl:flex-nowrap xl:gap-x-4">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="transition-colors hover:text-gold">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-1.5 xl:items-end">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5">
            <a href={site.phoneHref} className="flex items-center gap-2 transition-colors hover:text-paper">
              <Phone className="size-3.5 text-gold" strokeWidth={1.6} />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-paper">
              <Mail className="size-3.5 text-gold" strokeWidth={1.6} />
              {site.email}
            </a>
          </div>
          <a
            href={site.mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-paper/60 transition-colors hover:text-paper max-sm:whitespace-normal!"
          >
            <MapPin className="size-3.5 shrink-0 text-gold" strokeWidth={1.6} />
            {site.address.full}
          </a>
        </div>
      </Container>

      <div className="border-t border-paper/10">
        {/* Mobilde sabit WhatsApp butonu yazıların üstüne binmesin diye alt boşluk */}
        <Container className="flex flex-col items-center gap-1.5 pt-4 pb-20 text-center text-[0.72rem] text-paper/45 sm:pb-4 lg:flex-row lg:justify-between lg:text-left">
          <p>
            © {new Date().getFullYear()} {site.title}
            <span className="mx-1.5 text-paper/25">·</span>
            <Link href="/kvkk/" className="hover:text-paper">
              KVKK
            </Link>
            <span className="mx-1.5 text-paper/25">·</span>
            Bilgilendirme amaçlıdır, tıbbi tanı ve tedavinin yerine geçmez.
          </p>
          <p>
            Designed by{" "}
            <a
              href="https://berkavci.com"
              target="_blank"
              rel="noopener"
              className="font-semibold text-paper/70 transition-colors hover:text-gold"
            >
              berkavci
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
