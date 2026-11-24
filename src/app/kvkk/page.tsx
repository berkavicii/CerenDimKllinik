import type { Metadata } from "next";
import { site } from "@/content/site";
import { Container, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.",
  alternates: { canonical: "/kvkk/" },
  robots: { index: false },
};

// Not: Genel bir şablondur; yayın öncesi bir hukukçuya kontrol ettirilmesi önerilir.
export default function KvkkPage() {
  return (
    <>
      <PageHero eyebrow="Yasal" title="KVKK Aydınlatma Metni" />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="prose-calm space-y-8 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:text-forest">
            <div>
              <p>
                Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca veri
                sorumlusu sıfatıyla {site.title} tarafından, kişisel verilerinizin işlenmesine ilişkin olarak sizleri
                bilgilendirmek amacıyla hazırlanmıştır.
              </p>
            </div>
            <div>
              <h2>İşlenen kişisel veriler</h2>
              <p>
                Randevu ve iletişim süreçlerinde paylaştığınız ad-soyad, telefon numarası, e-posta adresi gibi
                kimlik ve iletişim bilgileriniz ile danışmanlık sürecinde paylaştığınız ve özel nitelikli kişisel veri
                sayılabilecek sağlık bilgileriniz işlenebilir.
              </p>
            </div>
            <div>
              <h2>İşleme amaçları</h2>
              <p>
                Kişisel verileriniz; randevu oluşturulması ve yönetilmesi, sizinle iletişim kurulması, psikolojik
                danışmanlık ve değerlendirme hizmetlerinin sunulması ve yasal yükümlülüklerin yerine getirilmesi
                amaçlarıyla işlenir.
              </p>
            </div>
            <div>
              <h2>Aktarım</h2>
              <p>
                Kişisel verileriniz, yasal zorunluluklar ve yetkili kamu kurumlarının talepleri dışında üçüncü kişilerle
                paylaşılmaz. Görüşme içerikleri mesleki gizlilik ilkeleri çerçevesinde korunur.
              </p>
            </div>
            <div>
              <h2>Toplama yöntemi ve hukuki sebep</h2>
              <p>
                Verileriniz telefon, WhatsApp, e-posta ve yüz yüze görüşmeler aracılığıyla; KVKK&apos;nın 5. ve 6.
                maddelerinde belirtilen sözleşmenin ifası, hukuki yükümlülük ve açık rızanız hukuki sebeplerine
                dayanılarak toplanır.
              </p>
            </div>
            <div>
              <h2>Haklarınız</h2>
              <p>
                KVKK&apos;nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse
                bilgi talep etme, düzeltilmesini veya silinmesini isteme ve işlemeye itiraz etme haklarına sahipsiniz.
                Taleplerinizi <a className="text-forest underline" href={`mailto:${site.email}`}>{site.email}</a>{" "}
                adresine iletebilirsiniz.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
