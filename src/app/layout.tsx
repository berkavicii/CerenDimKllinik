import type { Metadata, Viewport } from "next";
import "./globals.css";
import { display, sans } from "@/lib/fonts";
import { site } from "@/content/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsappFloat } from "@/components/whatsapp-float";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Klinik Psikolog Ceren Dim | Fethiye Psikolog",
    template: "%s | Klinik Psikolog Ceren Dim",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.title,
    images: [{ url: "/img/ceren-dim.jpg", width: 605, height: 807, alt: site.title }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#fbf8f3" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: site.title,
  url: site.url,
  image: `${site.url}/img/ceren-dim.jpg`,
  telephone: "+905304668487",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.district,
    addressRegion: site.address.province,
    addressCountry: "TR",
  },
  areaServed: ["Fethiye", "Muğla", "Online"],
  sameAs: [site.instagramHref],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-dvh">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
