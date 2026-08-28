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

| # | Parça (sahibinin kelimeleriyle) | Kabul cümlesi | Gösterilebilir mi | Kaynak (bilgi/görünüş/kimlik) |
|---|---|---|---|---|
| | | | | |

`Karşılığı yazılmamış görüşme ifadesi: ⬜` · `Kabul cümlesi olmayan parça: ⬜`
`Parça sayısı: ⬜` · `Gösterilebilir parça sayısı: ⬜` → **birleşme eşiği:** ⬜

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

| # | Element | Durum | Kim verir | Karar | Gerekçe | Reddedilenler | Pencere |
|---|---|---|---|---|---|---|---|
| | | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | |

`Durumsuz element: ⬜` · `Tetiksiz KONU DIŞI: ⬜` · `Yasağı yazılmamış ERTELENDİ: ⬜`

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
