// Sitenin tek kaynaklı iletişim ve kimlik bilgileri.
// Adres, alan adı gibi teyit bekleyen bilgiler için NOTLAR.md dosyasına bakın.

export const site = {
  name: "Ceren Dim",
  title: "Klinik Psikolog Ceren Dim",
  role: "Klinik Psikolog",
  url: "https://klinikpsikologcerendim.com",
  city: "Fethiye / Muğla",
  description:
    "Fethiye'de Klinik Psikolog Ceren Dim ile bireysel danışmanlık, sigara bırakma ve iştah kapatma seansları, anksiyete, panik atak ve ruhsal dengeleme seansları. Online ve yüz yüze.",
  phone: "0530 466 84 87",
  phoneHref: "tel:+905304668487",
  whatsappHref:
    "https://wa.me/905304668487?text=" +
    encodeURIComponent("Merhaba, randevu ve bilgi almak istiyorum."),
  email: "psk.cerendim@gmail.com",
  instagram: "klinikpsikologcerendim",
  instagramHref: "https://www.instagram.com/klinikpsikologcerendim/",
  address: {
    street: "Akarca Mah. Mustafa Kemal Bul. No:166/1",
    district: "Fethiye",
    province: "Muğla",
    full: "Akarca Mah. Mustafa Kemal Bul. No:166/1, Fethiye / Muğla",
  },
  mapEmbed:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Akarca Mahallesi Mustafa Kemal Bulvarı 166 Fethiye Muğla") +
    "&output=embed",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Akarca Mahallesi Mustafa Kemal Bulvarı 166 Fethiye Muğla"),
  hours: "Görüşmeler randevu ile yapılır.",
} as const;

export const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda/", label: "Hakkımda" },
  { href: "/hizmetler/", label: "Hizmetler" },
  { href: "/sss/", label: "Sık Sorulanlar" },
  { href: "/iletisim/", label: "İletişim" },
] as const;
