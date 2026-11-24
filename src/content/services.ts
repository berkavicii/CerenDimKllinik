// Hizmet içerikleri. Sağlık tanıtım mevzuatı gereği sonuç vaadi ("kesin", "garantili",
// "%100") içeren ifadelerden kaçınılır; dil "destek" ve "süreç" üzerine kuruludur.

export type IconKey = "wind" | "leaf" | "waves" | "sprout" | "chat" | "puzzle";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: IconKey;
  /** Hizmet sayfasının üst başlığı */
  headline: string;
  /** SEO açıklaması */
  description: string;
  intro: string[];
  forWhom: string[];
  approach: { title: string; text: string }[];
  /** Yüz yüze / online bilgisi */
  format: string;
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "sigara-birakma",
    title: "Sigara Bırakma Seansları",
    short:
      "Sigarayı bırakma kararınızı, alışkanlığın hem bedensel hem de duygusal tarafını ele alan kişiye özel seanslarla destekliyoruz.",
    icon: "wind",
    headline: "Bugün nefesinizi geri alın.",
    description:
      "Fethiye'de sigara bırakma seansları. Sigarayı bırakma sürecinizi tetikleyicileri, alışkanlıkları ve duygusal ihtiyaçları ele alan kişiye özel seanslarla destekliyoruz.",
    intro: [
      "Sigara çoğu zaman yalnızca bir madde kullanımı değil; güne başlama biçimimize, kahve molalarımıza, stresli anlarımıza ve rahatlama ritüellerimize yerleşmiş bir döngüdür. Bu yüzden bırakmak yalnızca irade meselesi değildir.",
      "Sigara bırakma seanslarında, bu döngüyü besleyen tetikleyicileri birlikte fark ediyor; bedeninizi ve zihninizi bu değişime hazırlayan kişiye özel bir süreç planlıyoruz. Amaç, bırakma kararınızı tek başınıza taşımak zorunda kalmamanız.",
    ],
    forWhom: [
      "Sigarayı bırakmaya karar vermiş ama nereden başlayacağını bilemeyenler",
      "Daha önce denemiş, bir süre sonra yeniden başlamış olanlar",
      "Stres, kaygı ya da alışkanlık anlarında sigaraya yönelenler",
      "Bırakma sürecinde profesyonel bir eşlikçi isteyenler",
    ],
    approach: [
      {
        title: "Ön görüşme",
        text: "Sigara kullanım öykünüzü, tetikleyicilerinizi ve hedeflerinizi konuşuyoruz.",
      },
      {
        title: "Dengeleme seansları",
        text: "Bedensel ve duygusal isteği dengelemeye yönelik, size özel planlanan seanslar uyguluyoruz.",
      },
      {
        title: "Davranışsal destek",
        text: "Kahve, mola, stres gibi tetikleyici anlar için yeni ve uygulanabilir alışkanlıklar oluşturuyoruz.",
      },
      {
        title: "Takip",
        text: "İlk haftalarda sürecinizi birlikte izliyor, zorlandığınız noktalarda yanınızda oluyoruz.",
      },
    ],
    format: "Seanslar Fethiye'deki ofiste yüz yüze yapılır.",
    faq: [
      {
        q: "Kaç seans gerekir?",
        a: "Seans sayısı kişinin kullanım süresine, günlük miktarına ve ihtiyaçlarına göre değişir. Ön görüşmede size özel bir plan oluşturuyoruz.",
      },
      {
        q: "Seans öncesinde sigarayı bırakmam gerekiyor mu?",
        a: "Hayır. Ön görüşmede nasıl ilerleyeceğimizi birlikte konuşuyor ve size uygun bir başlangıç günü belirliyoruz.",
      },
    ],
  },
  {
    slug: "istah-kapatma",
    title: "İştah Kapatma Seansları",
    short:
      "Yemekle olan ilişkinizi yeniden dengelemek; kontrol edilemeyen iştah, duygusal yeme ve gece atıştırmalarıyla baş etmek için destek.",
    icon: "leaf",
    headline: "Yemekle olan ilişkinizi yeniden dengeleyin.",
    description:
      "Fethiye'de iştah kapatma ve iştah kontrolü seansları. Duygusal yeme, kontrolsüz iştah ve atıştırma alışkanlıklarıyla baş etmek için kişiye özel destek.",
    intro: [
      "Bazen sorun irade eksikliği değildir. Kontrol edilemeyen iştah; duygusal yeme, stres, uyku düzeni ve yerleşmiş alışkanlıklarla iç içe geçmiş bir döngünün parçası olabilir.",
      "İştah kapatma seanslarında, sağlıklı beslenme sürecinizi destekleyecek şekilde yeme isteğini dengelemeyi ve bu döngüyü fark etmeyi hedefliyoruz. Her bireyin süreci farklıdır; seanslar kişiye özel değerlendirilerek planlanır.",
    ],
    forWhom: [
      "Sık sık acıkma ve atıştırma isteği yaşayanlar",
      "Stres, can sıkıntısı ya da üzüntü anlarında yemeğe yönelenler",
      "Tatlı ve abur cubur isteğini kontrol etmekte zorlananlar",
      "Diyet sürecini psikolojik olarak desteklemek isteyenler",
    ],
    approach: [
      {
        title: "Ön görüşme",
        text: "Yeme alışkanlıklarınızı, duygusal tetikleyicilerinizi ve hedeflerinizi değerlendiriyoruz.",
      },
      {
        title: "Dengeleme seansları",
        text: "Yeme isteğini ve tatlı ihtiyacını dengelemeye yönelik kişiye özel seanslar uyguluyoruz.",
      },
      {
        title: "Farkındalık çalışması",
        text: "Gerçek açlık ile duygusal açlığı ayırt etmeyi ve yeni baş etme yolları geliştirmeyi çalışıyoruz.",
      },
      {
        title: "Takip",
        text: "Sürecinizi düzenli aralıklarla değerlendirip planı ihtiyacınıza göre güncelliyoruz.",
      },
    ],
    format: "Seanslar Fethiye'deki ofiste yüz yüze yapılır.",
    faq: [
      {
        q: "Bu seanslar diyetin yerine geçer mi?",
        a: "Hayır. Seanslar, beslenme sürecinizi destekleyen tamamlayıcı bir çalışmadır. Gerekli durumlarda bir diyetisyenle birlikte ilerlemenizi öneririz.",
      },
      {
        q: "Seanslardan sonra neler gözlemlenebilir?",
        a: "Danışanlar genellikle atıştırma isteğinde azalma, tatlı isteğinde dengelenme ve yemekle daha bilinçli bir ilişki tarif eder. Her bireyin süreci farklıdır.",
      },
    ],
  },
  {
    slug: "anksiyete-ve-panik-atak",
    title: "Anksiyete ve Panik Atak",
    short:
      "Yoğun kaygı, ani panik hisleri ve bedensel belirtilerle baş etmek için güvenli bir alan ve kişiye özel dengeleme seansları.",
    icon: "waves",
    headline: "Kaygının dalgasında yalnız değilsiniz.",
    description:
      "Fethiye'de anksiyete ve panik atak için psikolojik destek ve dengeleme seansları. Kaygıyı anlamak ve onunla baş etmek için kişiye özel çalışma.",
    intro: [
      "Kalp çarpıntısı, nefes darlığı, kontrolü kaybetme korkusu ya da sürekli bir huzursuzluk hali… Anksiyete ve panik atak, gündelik hayatı sessizce daraltabilir.",
      "Bu süreçte amacımız; kaygınızı anlamak, sizi tetikleyen durumları birlikte fark etmek ve bedeninizin yeniden güvende hissetmesine yardımcı olacak yöntemlerle ilerlemektir. Dengeleme seanslarını, terapötik görüşmelerle birlikte planlıyoruz.",
    ],
    forWhom: [
      "Ani ve yoğun korku atakları yaşayanlar",
      "Sürekli endişe, gerginlik ve huzursuzluk hissedenler",
      "Kaygı nedeniyle bazı yerlerden ya da durumlardan kaçınanlar",
      "Uyku, odaklanma ve günlük işlevselliği kaygıdan etkilenenler",
    ],
    approach: [
      {
        title: "Değerlendirme",
        text: "Yaşadığınız belirtileri, ne zaman ve hangi durumlarda ortaya çıktığını birlikte anlıyoruz.",
      },
      {
        title: "Dengeleme seansları",
        text: "Bedeninizin gerginlik halinden sakinliğe geçmesini desteklemeye yönelik seanslar uyguluyoruz.",
      },
      {
        title: "Baş etme becerileri",
        text: "Bilişsel davranışçı yaklaşımdan yararlanarak nefes, düşünce ve davranış düzeyinde araçlar geliştiriyoruz.",
      },
      {
        title: "Süreklilik",
        text: "Kazanılan becerilerin günlük hayata yerleşmesi için düzenli takip yapıyoruz.",
      },
    ],
    format:
      "Dengeleme seansları ofiste yüz yüze, terapötik görüşmeler ise yüz yüze veya online yapılabilir.",
    faq: [
      {
        q: "Panik atak geçiriyorsam hemen ne yapmalıyım?",
        a: "Belirtiler ilk kez ortaya çıktıysa öncelikle bir hekime başvurarak fiziksel nedenleri dışlamanızı öneririz. Acil durumlarda 112'yi arayın.",
      },
      {
        q: "İlaç kullanıyorum, seanslara katılabilir miyim?",
        a: "Evet. Seanslar mevcut tedavinizin yerine geçmez, onu destekler. İlaç kullanımınızla ilgili kararları mutlaka hekiminizle birlikte verin.",
      },
    ],
  },
  {
    slug: "ruhsal-dengeleme",
    title: "Ruhsal Dengeleme Seansları",
    short:
      "Stres, yorgunluk ve duygusal dalgalanmalar karşısında iç dengenizi yeniden kurmanıza eşlik eden kişiye özel seanslar.",
    icon: "sprout",
    headline: "İç dünyanızda dengeyi yeniden kurun.",
    description:
      "Fethiye'de ruhsal dengeleme seansları. Stres, tükenmişlik, uyku düzensizliği ve duygusal dalgalanmalarla baş etmek için kişiye özel destek.",
    intro: [
      "Yoğun tempo, belirsizlikler ve biriken duygular zamanla kendimizi yorgun, gergin ya da kopuk hissetmemize yol açabilir. Bazen bir şeylerin yolunda gitmediğini hisseder ama ne olduğunu tam adlandıramayız.",
      "Ruhsal dengeleme seansları, kendinize yeniden alan açmanız için tasarlanmış kişiye özel bir çalışmadır. Bedensel gerginliği azaltmayı, duygusal yükü hafifletmeyi ve iç dengenizi güçlendirmeyi hedefler.",
    ],
    forWhom: [
      "Yoğun stres ve tükenmişlik hissi yaşayanlar",
      "Uyku düzeni bozulan, dinlenemediğini hissedenler",
      "Duygusal dalgalanmalar ve huzursuzluk yaşayanlar",
      "Kendine zaman ayırmak ve yenilenmek isteyenler",
    ],
    approach: [
      {
        title: "Tanışma",
        text: "Sizi yoran durumları ve bu süreçten beklentilerinizi konuşuyoruz.",
      },
      {
        title: "Kişisel plan",
        text: "İhtiyacınıza uygun seans sıklığını ve odak noktalarını birlikte belirliyoruz.",
      },
      {
        title: "Dengeleme seansları",
        text: "Rahat ve sakin bir ortamda, iç dengenizi desteklemeye yönelik seanslar uyguluyoruz.",
      },
      {
        title: "Gündelik pratikler",
        text: "Seans aralarında uygulayabileceğiniz basit ve etkili öz bakım alışkanlıkları öneriyoruz.",
      },
    ],
    format: "Seanslar Fethiye'deki ofiste yüz yüze yapılır.",
    faq: [
      {
        q: "Ruhsal dengeleme seansı terapi midir?",
        a: "Ruhsal dengeleme seansları terapötik görüşmeleri tamamlayan bir destek çalışmasıdır. İhtiyaç halinde bireysel danışmanlıkla birlikte planlanabilir.",
      },
    ],
  },
  {
    slug: "bireysel-danismanlik",
    title: "Bireysel Danışmanlık",
    short:
      "Yetişkinlerle, bilişsel davranışçı yaklaşım temelinde yüz yüze ve online bireysel psikolojik danışmanlık.",
    icon: "chat",
    headline: "Kendinizi anlamak için güvenli bir alan.",
    description:
      "Fethiye'de ve online bireysel psikolojik danışmanlık. Kaygı, stres, ilişki sorunları, özgüven ve yaşam geçişlerinde bilişsel davranışçı yaklaşımla destek.",
    intro: [
      "Bireysel danışmanlık, yaşadığınız zorlukları yargılanmadan konuşabileceğiniz, kendinizi daha iyi tanıyabileceğiniz gizli ve güvenli bir alandır.",
      "Görüşmelerde ağırlıklı olarak bilişsel davranışçı terapi (BDT) yaklaşımından yararlanıyorum. Düşünce, duygu ve davranışlarınız arasındaki bağı birlikte fark ediyor; size iyi gelmeyen döngüleri değiştirmek için somut adımlar atıyoruz.",
    ],
    forWhom: [
      "Kaygı, stres ve endişeyle baş etmekte zorlananlar",
      "İlişkilerinde tekrar eden sorunlar yaşayanlar",
      "Özgüven ve öz değer konularında destek arayanlar",
      "İş, taşınma, ayrılık gibi yaşam geçişlerinden geçenler",
    ],
    approach: [
      {
        title: "Ön görüşme",
        text: "Sizi danışmanlığa getiren konuyu ve beklentilerinizi konuşuyoruz.",
      },
      {
        title: "Hedef belirleme",
        text: "Süreç boyunca neye odaklanacağımızı birlikte netleştiriyoruz.",
      },
      {
        title: "Düzenli görüşmeler",
        text: "Genellikle haftalık görüşmelerle, size uygun tempoda ilerliyoruz.",
      },
      {
        title: "Değerlendirme",
        text: "Belirli aralıklarla sürecin nasıl gittiğini birlikte gözden geçiriyoruz.",
      },
    ],
    format: "Görüşmeler Fethiye'deki ofiste yüz yüze veya online yapılabilir.",
    faq: [
      {
        q: "Online görüşme yüz yüze kadar etkili mi?",
        a: "Pek çok konu için online görüşmeler yüz yüze görüşmeler kadar verimli ilerleyebilir. Size hangisinin uygun olduğunu ön görüşmede birlikte değerlendiririz.",
      },
      {
        q: "Görüşmeler gizli mi?",
        a: "Evet. Görüşmelerde paylaşılan her şey etik ilkeler ve KVKK çerçevesinde gizli tutulur.",
      },
    ],
  },
  {
    slug: "cocuk-degerlendirme-ve-oyun-terapisi",
    title: "Çocuk Değerlendirme ve Oyun Terapisi",
    short:
      "WISC-4 zeka ölçeği, MOXO dikkat testi ve çocuk değerlendirme testleri ile oyun terapisi temelli çalışmalar.",
    icon: "puzzle",
    headline: "Çocuğunuzun dünyasını birlikte anlayalım.",
    description:
      "Fethiye'de WISC-4 zeka testi, MOXO dikkat testi, çocuk değerlendirme testleri ve oyun terapisi. Çocuğunuzun gelişimini anlamak için bilimsel değerlendirme.",
    intro: [
      "Çocuklar duygularını ve zorlandıkları durumları çoğu zaman sözcüklerle değil, davranışları ve oyunlarıyla anlatırlar.",
      "Standart değerlendirme araçlarıyla çocuğunuzun güçlü yanlarını ve desteğe ihtiyaç duyduğu alanları belirliyor; gerektiğinde oyun terapisi temelli çalışmalarla duygusal dünyasına eşlik ediyoruz. Süreç boyunca aileyle düzenli paylaşım yapıyoruz.",
    ],
    forWhom: [
      "Dikkat ve odaklanma güçlüğü yaşayan çocuklar",
      "Okul başarısı ve öğrenme süreçleri hakkında bilgi almak isteyen aileler",
      "Duygusal ya da davranışsal zorluklar yaşayan çocuklar",
      "Çocuğunun zihinsel potansiyelini anlamak isteyen ebeveynler",
    ],
    approach: [
      {
        title: "WISC-4",
        text: "Wechsler Çocuklar İçin Zeka Ölçeği ile çocuğunuzun bilişsel profilini ayrıntılı olarak değerlendiriyoruz.",
      },
      {
        title: "MOXO Dikkat Testi",
        text: "Dikkat, zamanlama, dürtüsellik ve hiperaktivite boyutlarını objektif olarak ölçüyoruz.",
      },
      {
        title: "Gelişimsel testler",
        text: "Yaşa uygun çocuk değerlendirme testleriyle gelişim alanlarını inceliyoruz.",
      },
      {
        title: "Oyun terapisi",
        text: "Oyun aracılığıyla çocuğunuzun duygularını ifade etmesine ve baş etme becerileri geliştirmesine destek oluyoruz.",
      },
    ],
    format: "Değerlendirmeler ve oyun terapisi Fethiye'deki ofiste yüz yüze yapılır.",
    faq: [
      {
        q: "Test sonuçlarını nasıl öğreniyoruz?",
        a: "Değerlendirme tamamlandıktan sonra aileyle bir bilgilendirme görüşmesi yapıyor ve sonuçları yazılı rapor halinde paylaşıyoruz.",
      },
      {
        q: "Hangi yaştaki çocuklarla çalışıyorsunuz?",
        a: "Test ve çalışmaların uygun yaş aralıkları farklıdır. Çocuğunuzun yaşına ve ihtiyacına uygun yöntemi ön görüşmede birlikte belirleriz.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
