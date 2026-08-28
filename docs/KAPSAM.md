# Kapsam — fikirden ilk işe

> **Bu dosya hem TALİMAT hem DEFTERDİR.** Üst yarısı ajana fazların nasıl yürütüleceğini
> söyler; alt yarısı doldurulur ve projenin tek kapsam kaynağı olur.
>
> **Gün başı okuma listesinde DEĞİLDİR.** Yalnız faz yürütülürken ve iş sırası sorulduğunda
> açılır.

---

## Faz merdiveni

| Faz | Amaç | GEÇİŞ ÖLÇÜTÜ (sayı) |
|---|---|---|
| **0 · Kuruluş** | Sistem kuruldu, yetki ve sınır belli | vadesi gelmiş cevapsız defter satırı **= 0** · kırık atıf **= 0** · kapalı modüle atıf **= 0** |
| **1 · Fikir** | Fikir, sahibinin kelimeleriyle sabit | boş slot **= 0** · son turda sahibinin düzelttiği nokta **= 0** |
| **2 · İş kapsamı** | Fikir sayılabilir parçalara ayrıldı | karşılığı yazılmamış görüşme ifadesi **= 0** · kabul cümlesi olmayan parça **= 0** |
| **3 · Teknik kapsam** | Dil, yığın, mimari, altyapı **ve dışarısı** karara bağlandı | durumsuz element **= 0** · tetiksiz *konu dışı* **= 0** · yasağı yazılmamış *ertelendi* **= 0** |
| **4 · Tasarım** | Algılanacak her parçanın örneği onaylı | gösterilebilir olup örneği onaylanmamış parça **= 0** |
| **5 · Karar** | Her parça yap / yapma / ertele | kararı yazılmamış parça **= 0** |
| **6 · Sıra** | Bağımlılık sırası ve ilk iş kesildi | sırası / bağımlılığı / teslim ölçütü eksik iş **= 0** · *"listede olmayanlar"* bölümü boş **değil** |
| **7 · Yapım** | Uygulama, onay, teslim | — geri dönüş kuralı (aşağıda) |

**Her faz geçişinde ortak ikinci sayaç: vadesi geçmiş defter satırı = 0.**

### Faz atlanmaz, dosya birleşir

Küçük projede kapı kaldırılmaz — **tören masrafı** düşürülür. Ölçüt tahmin değil sayımdır ve
Faz 2 sonunda ölçülür:

> **parça ≤ 3 VE gösterilebilir parça ≤ 1** ise Faz 2 · 3 · 5 · 6 **tek tabloda, sütun olarak**
> yürür.

İki koruma: eşik projeye özel **bir kez** ve **yazılı olarak** değiştirilebilir (madde madde
esnetilemez); ve eşik **her yeni parçada yeniden ölçülür** — yapım sırasında parça sayısı
eşiği aşarsa birleşik tablo **o anda** ayrılır.

### Faz 7'nin geri dönüş kuralı

Yapım sırasında çıkan ve **algılanan çıktıyı değiştiren** her yeni istek **Faz 4'e döner**.
Üretilmez, önce gösterilir.

**İstisnalar — kuralla aynı cümlede yazılır, yoksa kural sessizce delinir:** yayındaki bir
bozukluğun düzeltilmesi · sahibin açık ve kayda geçmiş talebi · saf ölçüm ya da belge işi.
Bu üçü dışında hızlı başlangıç yoktur.

---

## Faz 1 · Fikir — nasıl yürütülür

**Amaç:** fikri ajanın değil, **sahibinin** kelimeleriyle sabitlemek.

**Dört soru, teker teker sorulur. Form olarak sunulmaz.**

1. **Bu iş bittiğinde ortada ne duruyor olacak, onu kim eline alacak?**
2. **Bugün bu olmadığında ne oluyor? Şu an bu işi kim, nasıl yapıyor?**
3. **"Oldu" diyeceğin an hangisi — neyi görünce bittiğine kanaat getirirsin?**
4. **Bu işin ne OLMADIĞINI söyle:** karıştırılacak ama kapsam dışı olan ne var?

> **2. soru akışın omurgasıdır.** Sıfır uzmanlık ister ve parça listesini bedavaya üretir —
> bugün işin nasıl yapıldığı anlatılırken adımlar kendiliğinden dökülür.
> **4. soru** kapsamın sonradan sessizce büyümesini ya da daralmasını ölçülebilir kılar.

**Sonra yankı testi — KAPI:** ajan dört slotu **sahibinin kelimeleriyle** geri yazar, sahibi
düzeltir, tur tekrarlanır. **Düzeltmesiz bir tur geçene kadar faz kapanmaz.**

> **Neden ölçülüyor:** damıtıldığı projede doğru yapılmış, doğru ölçülmüş bir iş, ajanın kendi
> ürettiği etiketlerle anlatıldığı için *"anlamadım"* cevabı aldı ve yapılmamış sayıldı.
> Anlaşılırlık bir üslup meselesi değil, **teslim ölçütüdür** — o hâlde ölçülmelidir.
> *"Anlattım"* bir sayı değildir; **"düzeltmesiz tur"** bir sayıdır.

### Fikir — dört slot

*Doldurulma tarihi: 2026-08-28 · sahibinin kelimeleriyle, yankı testinden geçirilerek.*

| Slot | Cevap |
|---|---|
| Sonunda ortada ne duracak, kim alacak | Bir **link**; ablası açacak. Esprili bir site: bebeğin **o günkü** boyutu, hangi **meyve/sebze/obje/yiyeceğe** benzediği, **gün gün** büyüyüşü. Veriler **bilimsel kaynaklı**; kaynakların doğruluğu **araştırılıp onaylandıktan sonra** kullanılacak. **Zengin, üç boyutlu** arayüz kütüphaneleri. **Tek parça** sayfa — Apple sitelerindeki gibi **kaydırdıkça akan**. Slogan: *"babyPECE şu kadar hafta şu kadar gün sonra aramızda olacak"* |
| Bugün bu olmadığında ne oluyor | **Hiçbir uygulama kullanmıyor.** Birkaç gün önce doktora gitti; doktor önce **teorik hesabı**, sonra *"ama bizim ultrason ölçümüz bu kadar"* diyerek **hafta ve gün** olarak kendi tahminini verdi. O gün **altı hafta birkaç gündü**; bugün (2026-08-28) **yedinci haftaya başlıyor**. Aradan geçen günleri **kafadan sayarak** takip ediyor |
| **Bitiş tanımı** — neyi görünce "oldu" | *"Linki gönderdiğimde ablam açıp gülümsediğinde bitti sayarım."* — Erdem |
| Bu işin ne OLMADIĞI | **Tıbbi tavsiye yok** (ne yemeli, neye dikkat etmeli, belirti yorumu — hiçbiri) · **sadece ablası için**, başkasının kendi tarihini girebileceği genel bir site değil · **ablası hiçbir şey doldurmayacak** *(şu anlık: veri girişi, not, fotoğraf, yorum yok)* · **doğumda bitiyor**, doğum sonrası yok · **anı defteri değil** *(ileride yeğeni için düşünülebilir, şu anki plana dahil değil)* · **teslim tarihi baskısı yok** |

`Düzeltmesiz tur: 1` *(2026-08-28 · Erdem: "düzeltme yok")*

### Faz 1 · ÇAPA TARİHİ — sitedeki her sayının tek kaynağı

**Sitedeki bütün sayılar bu tek tarihten türer.** Yanlışsa site baştan sona ve *sessizce*
yanlış olur; ekranda ikna edici bir sayı görünmeye devam eder.

| | |
|---|---|
| Kaynak | Erdem, ablasına **2026-08-28** günü sordu: *"geçtiğimiz salı 6 hafta 4 günlüktü"* |
| O gün | 2026-08-25 (Salı) · 46. gün |
| **Gebeliğin 0. günü — ÇAPA** | **2026-07-10** *(hesaplanan; 2026-08-28'de ölçüldü)* |
| Bugün (2026-08-28) | 7 hafta 0 gün · 49. gün |
| Tahmini doğum (40h0g) | 2027-04-16, Cuma *(280 günden **hesaplandı**)* |

**İki açık kayıt — kusur değil, bilinen belirsizlik:**

1. **Tahmini doğum tarihini doktor söylediyse onunki geçerlidir**, buradaki hesap değil.
   Doktorun tarihi öğrenilirse bu satır **onunla değiştirilir** ve çapa yeniden hesaplanır.
2. **6h4g'nin teorik hesaptan mı ultrason ölçümünden mi geldiği kesin değil.** Erdem doktorun
   *"bizim ultrason ölçümümüz bu kadar"* dediğini aktardığı için **ultrason kaynaklı** varsayıldı.
   İkisi farklı çıkarsa günler kayar.

---

## Faz 2 · İş kapsamı — nasıl yürütülür

**Amaç:** fikri sayılabilir parçalara ayırmak. Henüz *"nasıl yapılacağı"* konuşulmaz.

**a.** Ajan 2. sorunun cevabını **adım adım yürür**, her adımı bir **aday parçaya** çevirir —
sahibinin kelimeleriyle, ajanın ürettiği hiçbir kısaltma ya da etiket kullanmadan.

**b.** Her aday için tek soru: **içeride mi, dışarıda mı?**

**c.** İçerideki her parça için **kabul cümlesi**: *"şunu görürsen bu parça olmuş sayılır."*
Ajan önerir, sahibi düzeltir. **Kabul cümlesi olmayan parça, parça değildir.**

**d.** Varlık gerektiren parçalar için üç kaynak sorusu: *"bunun içine girecek **bilgi** /
**görünüş** / **kimlik** nereden gelecek? Tek bir yer söyle."* Cevap *"bilmiyorum"* ise defter
satırı `ertelendi` olur ve **o parçanın üretimi bloke edilir** — kapı değil, işlem bloğu.

**e. BOŞTA taraması — KAPI:** ajan `docs/GORUSME-KAYDI.md`'yi **baştan** okur, hiçbir parçaya
girmemiş her ifadeyi işaretler ve geri okur: *"bunları hiçbir parçaya koymadım, doğru mu?"*
Her biri ya parça olur ya **gerekçesiyle** dışlanır.

> **Ham görüşme kaydı neden ayrı ve dondurulmuş:** görüşme yalnız parça listesine *özetlenirse*
> BOŞTA sayacı **yapısal olarak ölçülemez** hâle gelir — neyin düştüğünü söyleyecek "önceki hâl"
> kalmaz. `docs/GORUSME-KAYDI.md` yalnız **eklenir**, düzeltilmez, Faz 2 bitince **dondurulur**.
>
> Bu, elinde hazır bir iş listesi olmayan projede de "envanter" sağlar: **görüşmenin kendisi
> ham kaynaktır.**

### Parçalar

*Doldurulma tarihi: 2026-08-28 · adaylar `docs/GORUSME-KAYDI.md`'den [G1]–[G7] etiketleriyle
çıkarıldı; kabul cümlelerini ajan önerdi, Erdem düzeltti.*

| # | Parça (sahibinin kelimeleriyle) | Kabul cümlesi | Göst. | Kaynak |
|---|---|---|---|---|
| 1 | *"çocuğun o günkü boyutunu"* [G1] | Sayfa açıldığında **bulunulan haftanın** boyu ve ağırlığı görünüyor; her değerin yanında hangi kaynaktan geldiği yazılı. *(2026-08-28'de daraltıldı: ölçüler haftalık, ara gün değeri üretilmez.)* | ✔ | **bilgi** — bloke |
| 2 | *"hangi objeye, meyveye, yiyeceğe, sebzeye benzediğini"* [G1] | Bulunulan haftanın benzetmesi görünüyor; **40 haftanın her haftası** için bir karşılığı var, boş hafta yok. *(2026-08-28'de daraltıldı: haftalık — kaynaklar haftalık yayınlıyor.)* | ✔ | **bilgi** — bloke |
| 3 | *"gün gün büyüyüşünü"* + *"kaydırdıkça bütün haftalar gezilsin ama ana focus içinde bulunulan zamanın şekli sayısı alanında olsun, focus o tarihte"* [G1, G7] | Sayfa **bugüne odaklanmış** açılıyor; aşağı kaydırınca geçmiş ve gelecek haftalar geziliyor, bugünün merkez olduğu her an belli. **Gün sayısı günlük işler** ("7 hafta 3 gün", geri sayım); **ölçüler haftalık** | ✔ | **bilgi** — bloke |
| 4 | *"verilerin bilimsel şeylerle desteklendiği"* [G1] | Her sayının yanında nereden geldiği görülebiliyor | ✔ | **bilgi** — bloke |
| 5 | *"kaynakların doğrulukları araştırılarak, kesin onaylandıktan sonra"* [G1] | Kullanılan her kaynağın adı, tarihi ve **neden güvenilir sayıldığı** depoda yazılı; onaylanmamış kaynaktan tek sayı bile girmemiş | ✘ | **bilgi** — bloke |
| 6 | *"esprili bir şekilde" / "esprili bir site"* [G1, G3] | Her haftanın benzetmesinin yanında bir espri cümlesi var, **hiçbiri boş değil** | ✔ | üretilecek metin — Erdem onaylar |
| 7 | *"zengin, üç boyutlu UI UX kütüphaneleri"* [G1] | Sayfada üç boyutlu, hareket eden bir görsel var ve ablasının telefonunda takılmadan çalışıyor | ✔ | **görünüş** — bloke |
| 8 | *"şu kadar haftalık şu kadar gün sonra aramızda olacak diye bir slogan"* [G1] | Slogan üstte duruyor; içindeki gün sayısı her gün kendiliğinden güncelleniyor | ✔ | bilgi (çapa) + **kimlik** — bloke |
| 9 | *"tek parça"* sayfa [G1] | Tek sayfa; menü, sekme, başka sayfaya geçiş yok | ✔ | **görünüş** — bloke |
| 10 | *"Apple'ın scroll mantığıyla kaydırdıkça site devam ediyor"* [G1] | Aşağı kaydırdıkça içerik akıyor; kesik geçiş ya da zıplama yok | ✔ | **görünüş** — bloke |
| 11 | *"ona ileteceğim link"* [G1] | Tek bağlantı; tıklayınca kurulum, giriş, kayıt olmadan açılıyor | ✘ | — |
| 12 | *"ablam açıp"* — telefonunda açılması [G3] | Ablasının telefonunda düzgün açılıyor ve okunuyor | ✔ | — |
| 13 | *"hesapladığımızda şu an tam yedinci haftası oluyor"* [G2, G6] | Bütün sayılar tek bir tarihten türüyor; o tarih tek yerde yazılı, değişince her şey birlikte değişiyor | ✘ | bilgi — **cevaplı**: ablasının beyanı, çapa yukarıda yazılı |

**"Bloke" ne demek:** o parçanın **yapımı** başlamaz; tasarımı, araştırması, planı yapılabilir.
Kaynak satırları `CLAUDE.md` › *Varlık kaynakları*'nda, vadeleriyle birlikte.

### BOŞTA taraması — hiçbir parçaya girmemiş ifadeler

`docs/GORUSME-KAYDI.md` baştan okundu. Parçaya dönüşmeyen ifadeler ve **gerekçeleri**:

| İfade | Neden parça değil |
|---|---|
| *"Repoları arayabilirsin. Araştırmalar yapabilirsin."* [G1] | **Çalışma yöntemi talimatı**, teslim edilecek çıktı değil. Faz 3'te uygulanır |
| *"Belki ileride yeğenim için bir anı defteri"* [G4] | Sahibi **kapsam dışı** ilan etti: *"şu anki plana dahil değil"* |
| *"teslim tarihi baskısı yok doğuma epey var"* [G5] | **Kısıt kaydı**, parça değil. Sıra kararlarını etkiler (Faz 6) |
| *"Bir tavsiye yok"*, *"sadece ablam için"*, *"ablam bir şey yapmayacak"*, *"doğumda bitsin"* [G4] | **Kapsam dışı bırakma** ifadeleri; *Fikir — dört slot* › *Bu işin ne OLMADIĞI*'nda yazılı |
| *"Ben Erdem'im"*, *"ablam hamile"* [G1] | **Bağlam**; Roller ve çapa bölümlerinde karşılığı var |
| *"Pardon, tam dün gitti... pardon dün gitmedi"* [G2] | Sahibinin **kendi düzelttiği** ifade; son hâli [G6]'da kesinleşti |

`Karşılığı yazılmamış görüşme ifadesi: 0` · `Kabul cümlesi olmayan parça: 0`
`Parça sayısı: 13` · `Gösterilebilir parça sayısı: 10` → **birleşme eşiği: SAĞLANMIYOR**
*(eşik: parça ≤ 3 **ve** gösterilebilir ≤ 1 · ölçüldü 2026-08-28 — Faz 2·3·5·6 ayrı yürür)*

---

## Faz 3 · Teknik kapsam — nasıl yürütülür

**Amaç:** *hangi dille, hangi yığınla, hangi mimariyle, hangi altyapıyla* sorularının
**işe başlamadan** karara bağlanması.

> **Bu fazın en pahalı hatası, elementleri "biz ne yapacağız" sorusuyla sınırlamaktır.**
> Damıtıldığı projede kırk günün sonunda kodlanacak açık iş kalmamıştı ve proje **yine
> durmuştu** — duran işlerin **hiçbiri teknik değildi**: bir kısmı sahibinde karar bekliyordu,
> bir kısmı üçüncü taraftan erişim, bir kısmı müşteriden içerik ve onay. Bu yüzden liste üç
> kola ayrılır: **biz** · **dışarısı** · **öncesi ve okuyucusu**.

### Sıra: KİLİTLEME kazanır, maliyet ayırıcıdır

Elementler üç kuvvete göre dizilir:

| Kuvvet | Ne söyler |
|---|---|
| **Kilitleme** | A cevaplanmadan B **sorulamaz** bile — sıranın birinci ölçütü |
| **Geri dönüş maliyeti** | Yanlışsa ne kadar acıtır — kilitleme eşitken ayırıcı |
| **Pencere** | Karar ancak belli bir zaman aralığında verilebilir — sıra değil, **ayrı alan** |

**Neden kilitleme kazanır:** maliyet sırası neye *dikkat edileceğini* söyler; kilitleme sırası
neyin *cevaplanabilir* olduğunu söyler. Bir konuşmada sıra cevaplanabilirliktir — kilidi
çözülmemiş bir soruya gürültü cevap gelir.

**Pencere ayrı bir alandır.** Bazı kararların vadesi maliyetle değil bir **olayla** belirlenir:
devralınan sistem kapanınca o karar pahalı olmaz, **imkânsız** olur. Penceresi olan element,
sırası ne olursa olsun listeyi ezip öne geçer.

### Her element için yazılacaklar

| Alan | Neden zorunlu |
|---|---|
| **Kararı kim verir** | `kullanıcı` · `ajan verir, kullanıcı onaylar` · `dışarıdan gelir` |
| **Karar** | Ne seçildi |
| **Gerekçe** | Neden bu |
| **Reddedilen seçenekler ve neden** | Yazılmazsa aynı tartışma haftalar sonra sıfırdan yapılır ve önceki karar savunulamaz |
| **Geri dönüş maliyeti** | Sıralamayı ve ne zaman yeniden açılabileceğini belirler |
| **Pencere** | *(çoğunda boş)* Hangi olaydan önce cevaplanmış olmalı |

> **BAĞLAYICI: alternatifsiz karar, karar değildir.** Reddedilenler yazılmamışsa element
> `durumsuz` sayılır ve kapı sayacına girer.

### Soru, kullanıcının cevaplayabileceği soru olmalı

Ajan teknik seçenek listesi dayatmaz, ama kararı da kullanıcının yerine vermez. **"Kararı kim
verir" alanı bunu yönetir:**

| Değer | Ajan ne yapar | Kullanıcının cümlesi |
|---|---|---|
| **kullanıcı verir** | Sonucu anlatır, seçenek listesi sunmaz | *"Bunu seçtim"* |
| **ajan verir, kullanıcı onaylar** | Karar verir; **gerekçesini ve reddettiklerini yazar** | *"Bunu anladım"* |
| **dışarıdan gelir** | Soruyu ve **gelmezse ne olacağını** yazar | *"Bunu soracağım"* |

**"Ajan verir" olan elementlerde soru seçeneği değil KISITI sorar:**

| Sorulmaz | Sorulur |
|---|---|
| "Monolit mi, mikroservis mi?" | "İki kişi aynı anda aynı kaydı değiştirirse ne olmalı?" · "Bu bir gün senin bilgisayarın dışında da çalışacak mı?" |
| "Hangi çatı?" | "Bunu üç yıl sonra senden başkası sürdürebilmeli mi?" · "Hiç para veremeyeceğimiz bir kalem var mı?" |
| "Hangi programlama dili?" | "Bu işi ileride devralacak kişiyi nereden bulacağız?" |
| "Dal düzeni ne olsun?" | "Yanlış bir şey yayına çıkarsa **kaç dakika içinde** geri alınmış olmalı?" |
| "Birim test mi, uçtan uca mı?" | "**Neyin bozulması kabul edilemez?** Hangi kusuru müşteriden önce senin görmen şart?" |

---

### A · KARAR DÜZENİ — önce bu, istisnasız

| # | Element | Ne sorulur | Kim verir | Maliyet |
|---|---|---|---|---|
| 1 | **Karar ve onay düzeni** | Kim neyi onaylar? "Tamam" hangi cümleyle söylenecek? Sen bir hafta ulaşılamaz olursan iş durur mu? | kullanıcı | sonsuz |

> **Bu elementte yalnız `KARAR` durumu geçerlidir.** `ertelendi` ve `konu dışı` kabul edilmez —
> kim onaylar sorusu ertelenirse geriye kalan bütün elementlerin onay kaydı da geçersizdir.

### B · KİMLİK VE OKUYUCU — kilitleyiciler

| # | Element | Ne sorulur | Kim verir | Maliyet |
|---|---|---|---|---|
| 2 | **Ad, adres ve kimlik numaraları** | Bu şeyin adı ne? Her yerde **aynı** mı yazılacak — klasör, depo, alan adı, sunucu, mağaza? Kayıtlara nasıl numara vereceğiz? | kullanıcı | ucuz verilir, **geri alınmaz** |
| 3 | **Dil, bölge ve zaman** | Bunu kim okuyacak? Hepsi aynı dili mi konuşuyor, aynı ülkede mi, aynı saatte mi? Başka ülkeye açılma ihtimali var mı — *"yok"* demek **bugün bedava, sonra pahalı** | kullanıcı | pahalı |
| 4 | **Devralınan sistem ve göç** | Bu bir şeyin yerine mi geçiyor? Eskisi çalışıyor mu? **Eskisi kapandıktan sonra bir daha elde edemeyeceğimiz ne var?** | kullanıcı | pahalı · **pencereli** |

### C · DIŞARISI — başkasının takvimi

| # | Element | Ne sorulur | Kim verir | Maliyet |
|---|---|---|---|---|
| 5 | **Dış servisler ve hesap sahipliği** | Hangi şirketlerin hizmetine muhtaç olacağız? Hesap **kimin adına** açılacak? O kişi kaybolursa ne olur? Hangi bilgiyi kimden isteyeceğiz — **gelmezse ne yapacağız?** | dışarıdan | servis orta · **sahiplik pahalı** |
| 6 | **Yasal izin ve mevzuat** | Yayına almak için birinden **izin** gerekiyor mu? Kimin kişisel bilgisini, ne kadar süre tutacağız? Bir kurumun onayı gerekiyorsa **takvimi ne?** | dışarıdan | pahalı · **pencereli** |
| 7 | **İçerik, varlık ve haklar** | Metinler, görseller, veriler nereden gelecek, kim üretecek? **Başkasının malı olan bir şey kullanacak mıyız — hakkımız yazılı mı?** | kullanıcı + dışarıdan | pahalı |

### D · YAPI — geri dönüşü pahalı

| # | Element | Ne sorulur | Kim verir | Maliyet |
|---|---|---|---|---|
| 8 | **Kayıt verisi** | Hangi bilgiler saklanacak, nerede durur, biçimi değişirse göç nasıl yapılır | ajan → onay | pahalı |
| 9 | **Dosya ve varlık depolama** | Yüklenen dosyalar nerede durur, adresi nasıl üretilir, aynı adla yenisi gelirse ne olur | ajan → onay | pahalı |
| 10 | **Mimari kalıp** | *(kısıt sorusu)* İki kişi aynı anda aynı kaydı değiştirirse ne olmalı? Bu senin bilgisayarın dışında da çalışacak mı? | ajan → onay | pahalı |
| 11 | **Ortamlar** | Test ortamı, nihai ortamla **aynı biçimde mi** olacak — aynı adres yapısı, aynı sürümler, aynı sınırlar? | ajan → onay | pahalı · **9'u kilitler** |
| 12 | **Kimlik ve yetki** | Kullanıcı olacak mı, nereden doğrulanacak? Korumalar **hataya karşı kapalı** mı — ölçemezse geçirmesin mi? | ajan → onay | pahalı |
| 13 | **Yedekleme ve geri alma** | **Yedek nerede durur, kaç kopya, hangi makinede?** Kim alır, **içi nasıl doğrulanır?** | kullanıcı | pahalı |
| 14 | **Güvenlik ve gizlilik** | Hangi veri hassas, nerede saklanmaz, kim erişir | ajan → onay | pahalı |
| 15 | **Programlama dili ve çalışma ortamı** | *(kısıt sorusu)* Bu işi ileride devralacak kişiyi nereden bulacağız? | ajan → onay | pahalı |

### E · YAPIM — orta ve ucuz

| # | Element | Ne sorulur | Kim verir | Maliyet |
|---|---|---|---|---|
| 16 | **Çatı, kütüphaneler ve bağımlılık politikası** | *(kısıt)* Üç yıl sonra başkası sürdürebilmeli mi? Başkasının yazdığı parça ücretli olur ya da bakımsız kalırsa ne yaparız? | ajan → onay | orta |
| 17 | **Arayüz ve erişilebilirlik** | İnsanın gördüğü yüzey var mı, nasıl sunulur, **hangi erişilebilirlik seviyesi** hedefleniyor | kullanıcı + ajan | orta · seviye **ertelenemez** |
| 18 | **Barındırma ve altyapı** | Nerede çalışacak, kim yönetir, maliyeti ne | ajan → onay | orta |
| 19 | **Ölçek ve hız hedefi** | Aynı anda kaç kişi — bugün, bir yıl sonra? Kaç kayıt birikecek? **Ne kadar yavaş olursa insan vazgeçer?** | kullanıcı | orta |
| 20 | **Test ve doğrulama** | *(kısıt)* **Neyin bozulması kabul edilemez?** | kullanıcı | orta |
| 21 | **Ölçüm ve izleme** | Bozulduğunu nereden anlarız | ajan → onay | orta |
| 22 | **Teslim ve yayın yolu** | Çıktı son kullanıcıya hangi yoldan gider | ajan → onay | orta |
| 23 | **Sürüm kontrolü ve dal düzeni** | *(kısıt)* Yanlış bir şey yayına çıkarsa **kaç dakikada** geri alınmış olmalı? | ajan → onay | ucuz |
| 24 | **Bakım ve devir** | İş bitince kim sürdürür, nasıl devredilir | kullanıcı | ucuz |

### F · KOŞULLU — proje türü açarsa

| # | Element | Ne sorulur | Hangi türde |
|---|---|---|---|
| 25 | **Para ve ticari akış** | İçinden para geçecek mi? Kim kime, hangi para birimiyle? İade olacak mı? Fatura kim keser? | satış yapan her iş |
| 26 | **Model, veri ve değerlendirme** | Yapay zekâ kullanacak mıyız? İyi çalıştığını **neye bakarak** anlayacağız? Verimiz dışarı çıkacak mı? | YZ · veri · otomasyon |
| 27 | **Cihaz ve saha** | Kullanıcının cihazına kurulacak mı? Kurulduktan sonra **güncellenebilecek mi?** Geri çağırabilir miyiz? | mobil · gömülü · masaüstü · oyun |

---

### Erteleme — her pahalı elementin iki yarısı vardır

Bazı elementler Faz 3'te tam karara bağlanamaz. Kural: **ertelenemeyen bir çekirdeği,
ertelenebilen bir detayı vardır** ve erteleme kararı **hangi yarısının ertelendiğini yazmadan
geçerli değildir.**

| Element | Ertelenemeyen çekirdek | Ertelenen detay | Yeniden açan OLAY |
|---|---|---|---|
| Kimlik ve yetki | Kimlik nereden gelir · korumalar hataya kapalı mı | Rol matrisi, ekran bazlı yetki | Üçüncü kişi sisteme eklendiğinde |
| Ölçek ve hız | Üst sınır tahmini | Altyapı değişimi | İlk gerçek veri kümesi geldiğinde |
| Ölçüm ve izleme | Bozulduğunu nereden anlarız | Hangi davranış "başarı" sayılır | İlk parça yayına çıktığında |
| Test ve doğrulama | *"Neyin bozulması kabul edilemez"* listesi | Araçlar, kapsam oranı | İlk kırılmadan sonra |
| Para ve ticari akış | Veri modelinde paranın **yeri** olacak mı | Sağlayıcı, iade akışı, vergi | İlk fiyat konuşulduğunda |
| Arayüz ve erişilebilirlik | Hedeflenen **seviye** | Ekranların kendisi (Faz 4) | — seviye ertelenemez |

### Kapı — dört durum, üç sıfır

*"Eksik yok"* bir iddia değil, bir **ölçümdür**. Her element **dört yazılı durumdan** birini
taşır; durumun **yokluğu** sayılır.

| Durum | Zorunlu alanlar |
|---|---|
| **KARAR** | karar · gerekçe · **reddedilenler ve neden** · maliyet |
| **KONU DIŞI** | neden bu proje türünde yok · **hangi gözlem bizi yanılmış çıkarır** |
| **ERTELENDİ** | hangi yarısı · **hangi olay yeniden açar** · **bu erteleme hangi işi yasaklıyor** |
| **DIŞARIDAN BEKLENİYOR** | kimden · tam olarak ne · **gelmezse ne olur** · bu arada ne yapıyoruz |

**Üç sayı sıfır olmalı:**

1. **Durumu yazılmamış element = 0** — sessizlik *"konu dışı"* sayılmaz
2. **Tetik cümlesi olmayan KONU DIŞI = 0** — konu dışı demek serbest, **bedava değil**
3. **Yasakladığı işi yazılmamış ERTELENDİ = 0** — ertelemenin görünür bir bedeli olur

*(2 ve 3 kapıyı kilitlemez: bir kütüphane projesi mevzuat elementine "konu dışı" diyebilir,
yalnız tetiğini yazar — "kullanıcıdan veri toplamıyoruz; telemetri eklenirse bu madde açılır."
Tek cümle.)*

### Doldurulacak tablo

*Doldurulmaya 2026-08-28'de başlandı. Sıra kilitlemeye göre: A kolu, sonra B kolu.*

#### A · Karar düzeni

| # | Element | Durum | Kim verir | Karar | Gerekçe | Reddedilenler ve neden | Pencere |
|---|---|---|---|---|---|---|---|
| 1 | Karar ve onay düzeni | **KARAR** | kullanıcı | Onayı **yalnız Erdem** verir; birebir metin `ONAYLIYORUM`. Erdem ulaşılamazsa **iş durur ve bekler** | Tek kişilik iş; doğuma 33 hafta var, beklemenin bedeli düşük. Maliyet: **sonsuz** — bu element ertelenemez | **(a) "Geri alınabilir işler devam etsin"** — reddedildi: *"geri alınabilir"*in sınırını ajanın kendisi yorumlar, bu da onayın kapsamını sessizce genişletir. **(b) "İkinci bir onaylayan"** — reddedildi: dış paydaş modülünü açar, tek kişilik hediye işine ağırlık ekler | — |

#### B · Kimlik ve okuyucu

| # | Element | Durum | Kim verir | Karar | Gerekçe | Reddedilenler ve neden | Pencere |
|---|---|---|---|---|---|---|---|
| 2 | Ad, adres ve kimlik numaraları | **KARAR** (çekirdek) + **ERTELENDİ** (detay) | kullanıcı | **Ad her yerde `babyPECE`** — klasör, depo, site başlığı, slogan. Adres: **önce ücretsiz barındırma adresi**. Kayıt numarası: konu dışı (görev kayıtları modülü kapalı) | Ad ucuz verilir ama **geri alınmaz**; tek yazımda sabitlendi. Ücretsiz adres bugün kurulur, para gerektirmez, ablan zaten adrese değil linke tıklıyor | **Özel alan adı şimdi alınması** — reddedildi: yıllık ücret gerektirir ve satın almayı Erdem'in kendisi yapmalı; site bitmeden şıklık kararı vermek erken. **Ertelenen yarı:** özel alan adı · **yeniden açan olay:** site bitip Erdem beğendiğinde · **yasakladığı iş:** alan adına bağlı hiçbir iş (DNS, sertifika, adres taşıma) başlatılmaz. **Bilinen bedel:** taşınırsa link değişir, ablana ikinci kez gönderilir | — |
| 3 | Dil, bölge ve zaman | **KARAR** | kullanıcı | Site dili **Türkçe**. *"Bugün"* **ablanın cihaz saatine** göre hesaplanır | Tek okuyucu var ve Türkçe konuşuyor. Cihaz saati, ablanın telefonunda gördüğü tarih ile sitenin gösterdiği günün **aynı** olmasını sağlar | **(a) Sabit Türkiye saati** — reddedildi: ablan yurt dışına çıkarsa telefonundaki tarihle site farklı gün gösterir. **(b) İki dilli** — reddedildi: *"sadece ablam için"* kapsam kararıyla çelişir, iş ekler. **Kabul edilen bedel:** cihaz saati yanlışsa site yanlış gün gösterir; bu görünür bir risktir ve kabul edilmiştir | — |
| 4 | Devralınan sistem ve göç | **KONU DIŞI** | kullanıcı | Yerine geçilecek bir sistem **yok** | [G2]: *"Şu an bir uygulama kullanmıyor bildiğim kadarıyla."* Takip kafadan sayarak yapılıyor; kapanınca kaybolacak bir veri kaynağı yok. Çapa tarihi zaten yazılı hâlde alındı | — | **Tetik (bizi yanılmış çıkaracak gözlem):** ablan bir hamilelik uygulaması kullanmaya başlar ve oradaki veri/not siteye taşınmak istenirse **bu madde açılır**. İkinci tetik: doktorun ultrason raporuna erişim gerekirse |

#### C · Dışarısı

| # | Element | Durum | Kim verir | Karar | Gerekçe | Reddedilenler ve neden | Pencere |
|---|---|---|---|---|---|---|---|
| 5 | Dış servisler ve hesap sahipliği | **KARAR** | dışarıdan → kullanıcı onayı | Barındırma **GitHub Pages**, Erdem'in mevcut `aeg58` hesabından, `babyPECE` deposu **açık** olarak. Yeni hesap açılmaz, yeni servise bağımlılık kurulmaz | Hesap zaten var ve Erdem'in adına. **Doğrulandı:** GitHub Free planında Pages yalnız açık depolarda çalışır; gizliye çevrilirse site kendiliğinden yayından kalkar. Erdem depoyu açığa çevirmeyi **birebir `ONAYLIYORUM` ile** kabul etti (2026-08-28) | **(a) Ayrı açık depo** (ajanın önerisiydi: çalışma gizli, yalnız site açık) — Erdem tek depo basitliğini seçti. **(b) Vercel/Netlify** — gizli depodan yayın yapabiliyorlar ama yeni hesap açılmasını gerektirir; hesap açmak ajanın yasakları arasında. **(c) GitHub Pro** — aylık ücret; tek hediye sitesi için gereksiz görüldü | — |

> **GERİ DÖNÜŞ YOLU — işlemden ÖNCE yazıldı (olay ve geri alma modülü gereği):**
> **Yok.** Depo sonradan gizliye çevrilebilir, ama o arada kopyalanmış, çatallanmış ya da
> önbelleğe alınmış içerik **geri alınamaz** ve gizliye çevirmek siteyi de yayından kaldırır.
> Bu **tek yönlü bir kapıdır**, bilerek ve birebir onayla geçilmiştir.
> **Açılan içerik:** ham görüşme kaydı (*"ablam hamile"*, doktor ziyareti, tarihler) · çapa
> tarihi 2026-07-10 · tahmini doğum 2027-04-16 · Erdem'in adı · üç kaydın tamamı.
> **Ajanın bildirdiği ve Erdem'in üstlendiği husus:** bilgi yalnız Erdem'in değil; ablasının
> 7 haftalık hamileliği kamuya açılıyor ve bu karar onun adına verilmiştir.

| # | Element | Durum | Kim verir | Karar | Gerekçe | Reddedilenler ve neden | Pencere |
|---|---|---|---|---|---|---|---|
| 6 | Yasal izin ve mevzuat | **KONU DIŞI** | dışarıdan | Yayına almak için kimsenin izni gerekmiyor; kişisel veri **toplanmıyor** | Site giriş, kayıt, form, yorum, ziyaretçi ölçümü içermiyor — [G4]: *"ablam bir şey yapmayacak"*. İşlenen veri yok, yalnız gösterilen sabit içerik var | — | **Tetik:** ziyaretçi ölçümü (analytics), yorum, form ya da **herhangi bir veri girişi** eklenirse bu madde açılır. İkinci tetik: site ablası dışında birine dağıtılırsa |
| 7 | İçerik, varlık ve haklar | **KARAR** (çekirdek) + **ERTELENDİ** (görseller) | kullanıcı + dışarıdan | **Sayısal veri:** erken haftalar CRL referansları, 14. haftadan sonra WHO / INTERGROWTH-21st. **Meyve eşleşmesi:** NHS İskoçya + Avustralya Sağlık Bakanlığı. **Her hücrenin kaynağı depoda yazılı.** **Telifli görsel kullanılmaz** — meyveler ve üç boyutlu biçimler kendimiz üretilir. **Kütüphaneler:** `react-three-fiber` + `drei`, ikisi de MIT | Kurumsal ve hakemli kaynaklar Erdem tarafından onaylandı. Kendi ürettiğimiz biçimler hak sorunu doğurmaz. MIT lisansı ticari ve kişisel kullanımda kısıt getirmez | **(a) Hazır hamilelik uygulamalarının verisini kopyalamak** — reddedildi: kaynağı yazılmamış ve telifli. **(b) Stok meyve fotoğrafları** — reddedildi: lisans takibi gerektirir, ücretli olabilir. **(c) `Hubref/40Weeks` gibi GitHub depoları** — reddedildi: verinin kaynağı yazılı değil, doğrulanamaz. **Ertelenen yarı:** görsellerin kendisi · **yeniden açan olay:** Faz 4'te görünüş kararı verildiğinde · **yasakladığı iş:** hiçbir görsel varlık üretilmez ya da eklenmez | — |

`Durumsuz element: 0 / 7 işlenen` · `Tetiksiz KONU DIŞI: 0` · `Yasağı yazılmamış ERTELENDİ: 0`
*(Kalan 20 element henüz işlenmedi — Faz 3 açık.)*

## Faz 4 · Tasarım

**Yalnız gösterilebilir parçalar için.** *Gösterilebilir* = çıktısını bir insan doğrudan
algılayacak: bakacak, okuyacak, eline alacak. Yönetim ve iç kullanım yüzeyleri **dahildir**.

Üç şart: **elde örnek yokken görünüş sorusu sorulmaz** · örnek **gerçek içerikten ve gerçek
oranda** olur, taslak kabul edilmez · sorunun cevabı için sahibinin kafasında bir şey
**canlandırması** gerekiyorsa, o şey **çizilir** — metni kısaltmak işe yaramaz.

**Faz 4 ile Faz 5 hiçbir ölçekte birleşmez. Görülmeden karar verilmez.**

---

## Faz 5 · Karar

Parça başına **yap / yapma / ertele** + gerekçe. Gruplar hâlinde sorulur, önüne çözülmemiş
yığın bırakılmaz; her sorunun yanında **"bunu bilmezsem ne olur"** karşılığı verilir.

> **Peş peşe ikinci karar turu açılacaksa gerekçesi yazılır.** Karar üretmek ilerleme hissi
> verir, ürün vermez — damıtıldığı projede bir haftalık dönemde 20 değişikliğin 19'u belgeye
> gitti; bir günde 22 kalem karara bağlandı, 1 üretim çıktı.

---

## Faz 6 · Sıra

Bağımlılık sırası, teslim ölçütü, ilk iş. Ve **zorunlu bir bölüm: "bu listede OLMAYANLAR"** —
kapsam dışının yazılı hâli. Bölüm boşsa faz kapanmaz.

> **"Şimdi değil" ile "yapılmayacak" ayrı yazılır.** İkisi aynı cümle kalıbıyla yazılınca
> erteleme sessizce karara dönüşür. Ertelenen iş **kapanmış bir kaydın içine gömülmez** —
> kapanmış kayıtlar bir daha okunmaz; oraya yazılan cümle **yazıldığı gün son kez görülmüştür.**
> Damıtıldığı projede açık iş envanterinin **%46'sı** böyle kaybolmuştu.

### İş sırası

| Sıra | İş | Hangi parçadan | Bağımlılık | Teslim ölçütü |
|---|---|---|---|---|
| | | | | |

### Bu listede OLMAYANLAR

| Ne | Neden | *"yapılmayacak"* mı *"şimdi değil"* mi |
|---|---|---|
| | | |
