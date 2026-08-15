# [PROJE ADI] — Çalışma Sistemi ve Ajan Kuralları

> Bu dosya, projede çalışan kişiler ve yapay zekâ ajanları için **bağlayıcı** çalışma
> kurallarını tanımlar. Proje kökünde `AGENTS.md` adıyla durur ve **gün başında baştan sona
> okunur** — özetten gidilmez.
>
> **Bu bir ŞABLONDUR (`ajan-cekirdegi` v0).** `[köşeli parantezli]` yerler doldurulur;
> `⬜ DOLDURULACAK` işaretli başlıklar projenin kendi alan bilgisiyle yazılır ya da **silinir**.
> Boş başlık bırakmak, doldurulmamış anketle aynı hatadır.
>
> **Tavan: 1550 satır** (§18.4). Aşarsa §18.4'ün üç seçeneğinden biri uygulanır.

## 1. Amaç

[Projeyi kişilere bağlı, sözlü ve takip edilmesi zor bir yapıdan çıkarıp; kayıtlı,
önceliklendirilmiş, ölçülebilir ve denetlenebilir bir çalışma sistemine dönüştürmek.]

Hedefler: her işin sahibini/durumunu/beklenen sonucunu görünür kılmak · aynı anda çok sayıda
yarım iş açılmasını önlemek · kararlarla uygulamayı ayırmak · onaysız yayını engellemek ·
gün başı/gün sonu disiplinini standartlaştırmak · **ajanın varsayımla değil kayıtlı kurallarla
çalışmasını sağlamak** · her iş için geriye dönük iz bırakmak.

## 2. Temel Çalışma İlkeleri

1. **Kayıtsız iş yoktur.** Her talep başlamadan önce görev sistemine kaydedilir.
2. **Tek aktif iş esastır.** Mevcut iş bitmeden veya resmen dondurulmadan yeni ana işe başlanmaz.
3. **Kaynak doğrulanmadan işlem yapılmaz.** Sözlü bilgi, doğrulanmış karar kaydı yerine geçmez.
4. **Belirsizlik gizlenmez.** Eksik bilgi, çelişki veya risk açıkça raporlanır.
5. **Onaysız yayın yoktur.** Yayına giden her şey yetkili onayından geçer.
6. **Geri alınamayacak işlem öncesi teyit alınır.** Silme, toplu değiştirme, ödeme, sözleşme,
   canlı yayın bu kapsamdadır.
7. **Yapılan iş doğrulanmadan tamamlandı denmez.** Her teslimin kontrol veya test kanıtı bulunur.
8. **Tek bir doğruluk kaynağı kullanılır.** Aynı bilgi farklı yerlerde çelişkili tutulmaz.
9. **Kişisel hafıza sistem değildir.** Kararlar, görevler ve sonuçlar yazılı kaydedilir.
10. **Yapay zekâ karar sahibi değil, kurallı uygulayıcıdır.** Yetki gerektiren konularda durur
    ve onay ister.

## 3. Roller

| Rol | Kim | Ne yapar |
|---|---|---|
| **Nihai karar sahibi** | [anket 3] | Onaylar; çakışan önceliklerde son sözü söyler |
| **Operasyon sorumlusu** | [anket 4] | Ajanın muhatabı; kapsamı netleştirir, onayları toplar |
| **Yapay zekâ ajanı** | — | Kuralları uygular, kaydeder, araştırır, onaylı işi yürütür |

**Ajanın yapamayacakları:** [anket 6]. Ajan; bütçe, sözleşme, hukuki yorum, nihai içerik
tercihi, canlı yayın ve **geri döndürülemez işlem** hakkında **kendiliğinden karar veremez** —
durur ve sorar.

## 4. Bilgi Mimarisi

### Yönlendirme tablosu — hangi bilgi nereye yazılır

**Bu tablo bağlayıcıdır.** Amacı kopya üretimini kaynağında kesmektir.

> **Neden var:** Damıtıldığı projede bu tablo yazılana kadar "bilgi nereye yazılır" üç ayrı
> yerde yarım yarım tanımlıydı. Ölçüldü: **tek bir ders yazıldığı gün dokuz yere kopyalandı**;
> aynı açık uç listesi bir günde beş kez yazıldı; aynı kural **altı ayrı dosyada** duruyordu.

| Gelen bilgi | Nereye yazılır | Ne zaman | Kim yazar |
|---|---|---|---|
| **Bağlayıcı çalışma kuralı** | `AGENTS.md` ilgili bölüm **+** `docs/KARAR-DEFTERI.md`'ye tek satır işaretçi | Fark edildiği gün | Fark eden oturum |
| **Günlük kontrol maddesi** (refleks) | `docs/REFLEKSLER.md` Bölüm 1 — tek satır + ders kodu (tavanlı) | Görev/gün sonu | Hatayı yapan oturum |
| **Kuralın gerekçesi / hikâyesi** | `docs/ogrenilen-dersler.md`. Kuralın yanında **yalnız tek cümlelik** gerekçe kalır | Kuralla aynı commit'te | Aynı oturum |
| **Ajanın İKİNCİ kez düştüğü tuzak** | Dersler (uzun) **+** Refleksler (tek satır) | Görev/gün sonu | Hatayı yapan oturum |
| **Ajanın TEK seferlik hatası** | Yalnız o günün gün sonu raporu — **derslere girmez** | Gün sonu | Yürütücü oturum |
| **Bu işe özel karar** | İlgili görev kaydının "Kararlar" tablosu | Karar anında | İşi yapan oturum |
| **Onay metni alındı** | Görev kaydının onay bölümü — tarih, saat, kapsam | Alındığı an | Yürütücü oturum |
| **İş sırası / öncelik değişikliği** | `docs/UYGULAMA-SIRASI.md` (**tek sıra kaynağı**) | Karar anında | Yürütücü oturum |
| **Faz ölçeğinde plan değişikliği** | `docs/YOL-HARITASI.md` — gün başında okunmaz | Faz kararı anında | Yürütücü oturum |
| **Dış kişiden beklenen** | `docs/BEKLEYENLER-LISTESI.md` | Talep doğduğunda | Herkes |
| **Kesinti / arıza** | `docs/olay-kayitlari.md` — `OLAY-NNN` | Olay kapanınca | Yürütücü oturum |
| **Geri dönüşü zor toplu işlem** | `docs/olay-kayitlari.md` — İşlem Kayıtları, **öncesi/sonrası ölçümüyle** | İşlem anında | İşlemi yapan oturum |
| **Yarına kalan her şey** | `docs/DEVIR-NOTU.md` — açık uçlar **etiketlenir**, raporlar tam metni tekrarlamaz | Gün sonunun **son** adımı | Gün sonu alan oturum |
| **Son 7 günün "sıcak" kuralları** | `docs/DEVIR-NOTU.md` §5 — tavanlı; yeni girerken en eski düşer | Gün sonu | Gün sonu alan oturum |
| **Henüz onaylanmamış fikir** | `docs/DEVIR-NOTU.md` §7 — **görev kaydı açılmaz, numara tüketilmez** | Gün sonu | Yürütücü oturum |
| **Tek seferlik analiz** | `docs/arsiv/arastirma/` + görev kaydından işaretçi. İlk üç satır zorunlu: tüketildiği görev · kapanış tarihi · **hâlâ geçerli** bulgular | Analiz kapanınca | Analizi yapan oturum |
| **Emekli edilen kural** | `docs/arsiv/emekli-kurallar.md` — birebir metin + sebep + yerine geçen | Çıkarıldığı commit'te | Çıkaran oturum |

**İki bağlayıcı cümle:**

1. **Bir bilgi yalnız BİR dosyada güncel hâliyle durur;** ikincisinde ancak tek satırlık
   işaretçi olabilir. *Tarihli arşiv nüshası (gün sonu raporu, olay kaydı, görev kaydı) kopya
   sayılmaz* — o, o günün **donmuş** kaydıdır ve güncellenmez.
2. **Bu tabloda karşılığı olmayan bir bilgi türü çıkarsa satır aynı gün eklenir;** eklenmeden
   o bilgi hiçbir yere yazılmaz.

### Varlık kaynakları — her varlığın TEK doğru kaynağı ⬜ DOLDURULACAK

| Varlık | TEK doğru kaynak | Kural |
|---|---|---|
| **Veri** | [anket 16] | Başka hiçbir yerden veri alınmaz |
| **Tasarım dili** | [anket 17] | **Yalnız referans**; buradan **veri alınmaz** |
| **Marka / logo** | [anket 18] | Canlıdan çekilmez |

**Kaynağı doğrulamadan varlık üretilmez.**

> **Neden bu tablo bu kadar erken geliyor:** Damıtıldığı projedeki **en pahalı ders** buydu.
> Logo canlı siteden çekilip entegre edildi, yanlış kaynaktı ve **tamamen geri alındı**.
> Ayrıca: bu tablo bir dönem yalnız ikinci bir dosyada duruyordu; o dosya günlük okuma
> listesinden çıkarılınca refleks *"doğru kaynaktan mı geliyor?"* diye **soruyor** ama
> **cevabı hiçbir yerde kalmıyordu**. Soru sorulup cevabı bulunamıyorsa o kural değil, temennidir.

### Kaynak önceliği

Bilgiler çeliştiğinde: **1)** yazılı ve tarihli karar · **2)** onaylanmış brif ·
**3)** imzalı sözleşme/resmî belge · **4)** görev kaydı ve onaylı toplantı notu ·
**5)** güncel çalışma dokümanı · **6)** mesaj veya sözlü aktarım.
Çelişki çözülemezse **işlem durdurulur** ve operasyon sorumlusuna bildirilir.

## 5. Görev Yönetimi

Her talep, küçük görünse bile, şu bilgilerle kaydedilir (`docs/sablonlar/gorev-kaydi.md`):

```markdown
# Görev: [ÖNEK]-YYYY-NNN — Kısa görev adı

- Talep sahibi:
- Sorumlu:
- Oluşturulma tarihi:
- Öncelik: Kritik / Yüksek / Normal / Düşük
- Durum: Bekliyor / Hazır / Devam Ediyor / Onay Bekliyor / Engelli / Tamamlandı / İptal
- Amaç:
- Kapsam:
- Kapsam dışı:
- Teslim ölçütü:
- Bağımlılıklar:
- Riskler:
- Onaylayan:
```

**Durum satırının biçimi bağlayıcıdır:**

1. Her kayıtta **tam bir tane** durum satırı bulunur ve **kendi satırında** başlar:
   `- Durum: ...` — başka bir alanın arkasına `·` ile eklenmez.
   **Bu kural `npm run docs:check-index` ile ölçülür; ihlalinde betik çıkış kodu 1 döner.**
2. Alt bölümlerdeki geçiş/faz kayıtları **`- Durum:` ile başlamaz** — bağlayıcı durum
   **üst satırdır**. Alt bölüm etiketleri: `- Geçiş durumu:` · `- Faz N durumu:` ·
   `- Durum ayrıntısı:`.

> **Neden kural oldu:** Gün başı taraması durumu `grep "^- Durum:"` ile okuyor. Damıtıldığı
> projede 89 kaydın **26'sında** durum satır içine gömülüydü ve tarama onları **sessizce
> atlıyordu**; bir gün başı raporu *"açık yalnız 3 kayıt"* dedi, gerçekte **5** açıktı.
> Ayrıca 10 kayıtta ikinci bir durum satırı vardı ve birinde ikisi **çelişiyordu**.

### 5.0 Fikirden göreve akış — HER görevde, mini ya da kapsamlı

Operasyon sorumlusunun dile getirdiği fikirler **talimat değil girdidir**. Akış atlanamaz:

1. **Araştırma/Analiz** — fikir; prensiplere, kurallara ve mevcut koda karşı analiz edilir.
   Riskler ve maliyet çıkarılır. Fikir sisteme uymuyorsa **bu açıkça söylenir**.
2. **Plan** — analizden somut plan çıkarılır, birlikte netleştirilir.
3. **Onay** — plan onaylanmadan uygulamaya geçilmez.
4. **Uygulama → Test → Kontrol** — sırayla.

**Fikir aşamasında görev kaydı AÇILMAZ, numara tüketilmez.** İş, plan onaylandığı anda başlar;
böylece reddedilen fikirler numara tüketmez ve yarım kayıt kalmaz.

### 5.0.1 Faz kapıları — proje ölçeğinde sıra

§5.0 **bir görevin** sırasıdır. Bu bölüm aynı prensibin **proje ölçeğindeki** karşılığıdır:

> **Tasarım → tasarım revizeleri → plan → plan revizeleri → tüm radikal ve detay kararlar →
> finalize edilmiş görev listesi → ANCAK O ZAMAN kod.**

**Her kapının ölçütü bir SAYININ SIFIR olmasıdır.** *"Tasarım yapıldı mı"* tartışılır;
*"görseli onaylanmamış ekran sayısı sıfır mı"* tartışılmaz.

| Faz | Üretilen | KAPI |
|---|---|---|
| **0 · Kurulum** | Doldurulmuş `KURULUM.md` anketi | `Belirlenecek` yazan satır **= 0** |
| **1 · Keşif** | Ham kaynakların dökümü + kapsama tablosu | Karşılığı yazılmamış ("BOŞTA") ham madde **= 0** |
| **2 · Tasarım** | Görünecek **her** yüzeyin görseli + revize turları | **Görseli onaylanmamış ekran sayısı = 0** |
| **3 · Karar** | Her maddenin kararla işaretlendiği final liste | Kararı yazılmamış madde **= 0** (reddedilenlerin **gerekçesi** de yazılı) |
| **4 · Sıra** | Bağımlılık sırasına dizilmiş iş listesi + **"listede OLMAYANLAR"** | Sırası/bağımlılığı/teslim ölçütü eksik iş **= 0** |
| **5 · Kod** | Uygulama, test, onay kapıları, deploy | — |

**Faz 2'nin üç ek şartı** (hepsi yaşanmış ihlallerden doğdu):
- **Yönetim/ayar ekranları bu listeye DAHİLDİR.** *"Bu kullanıcı yüzü değil"* bahanesi
  geçersizdir — o ekranın kullanıcısı da bir insandır.
- **Elde gösterecek görsel yoksa görünüş sorusu SORULMAZ.**
- **Örnek gerçek ekrandan ve gerçek oranda olur; tel kafes taslak yasaktır.**

**Faz 5'in geri dönüş kuralı:** Kod aşamasında ortaya çıkan ve **görünüşü değiştiren** her yeni
istek **Faz 2'ye geri döner.** Kod yazılmaz, önce çizilir.

**Makine kapısı:** `docs/UYGULAMA-SIRASI.md`'nin her açık satırında **tasarım durumu** sütunu
vardır (`tasarım gerekmez` / `tasarım bekliyor` / `tasarım onaylı (tarih)`).
**Tasarım onaylı olmayan maddeye görev dalı açılmaz.**

**İSTİSNALAR** (kuralla **aynı cümlede** yazılır — yoksa kural sessizce delinir):
canlıdaki hata düzeltmesi · operasyon sorumlusunun açık talebi · saf ölçüm ya da doküman işi.
**MİNİ AKIŞ:** tek ekranlık işlerde Faz 1 ve Faz 4 tek sayfada birleşir;
**Faz 2 ile Faz 3 birleşmez** — tasarım görülmeden karar verilmez.

### 5.1 Tek aktif iş kuralı

Aynı anda yalnızca **bir** ana iş `Devam Ediyor` durumunda tutulur. Yeni iş çıkarsa kaydedilir
ama sıraya alınır. İki iş zorunlu olarak paralel yürüyecekse bu **açıkça karara bağlanır**.

### 5.2 Tamamlanma ölçütü

Bir iş, teslim ölçütünün **her maddesi tek tek işaretlenmeden** tamamlandı sayılmaz.
Ölçülemeyen bir ölçüt "tamam" sayılmaz: ya ölçülür, ya **açık feragatle** kapanır ve feragat
**kayda yazılır**.

## 6. Gün Başı Protokolü

1. **`docs/DEVIR-NOTU.md` okunur** — önceki oturumun bıraktığı **tek giriş kapısı**, ilk iş budur.
2. Bekleyen onaylar ve engeller kontrol edilir.
3. Yeni talepler kayıt altına alınır; **doğrudan uygulamaya geçilmez**.
4. Günün **tek** ana hedefi ve beklenen somut çıktısı yazılır.
5. **Kurallar SIFIRDAN okunur:** `AGENTS.md`'nin tamamı — özet/hafızadan gidilmez.
6. **Devralınan açık uçlar** tek tek ele alınır: ya bugüne alınır, ya kayda dönüştürülür, ya da
   **bilinçli olarak beklemeye bırakıldığı yazılır**. Sessizce düşen açık uç, veri kaybıdır.

### Gün başı okuma listesi — bağlayıcı ⬜ DOSYA ADLARI PROJEYE GÖRE

Bu protokolün varlık sebebi **devredilebilirliktir**: bir oturum kapanıp yenisi açıldığında
hiçbir bilgi kaybolmamalıdır. Kaybı önleyen tek şey, yeni oturumun **neyi okuyacağının
sabit olmasıdır**.

| Sıra | Dosya | Neden okunur |
|---|---|---|
| 1 | `docs/DEVIR-NOTU.md` | **İlk okunacak.** Nerede kaldık, bu oturuma özel ne okunmalı |
| 2 | `AGENTS.md` (tamamı) | Kurallar sıfırdan |
| 3 | `gorev-index.md` | Açık işler. **Okurken `npm run docs:check-index` çalıştırılır** |
| 4 | `docs/gun-sonu/` içindeki **en yeni** rapor | Açık riskler, tespit edilen kusurlar, ilk adım |
| 5 | Devir notunun işaret ettiği aktif görev kayıtları | — |
| 6 | `docs/BEKLEYENLER-LISTESI.md` | Kimden ne bekleniyor |
| 7 | `docs/REFLEKSLER.md` (**tamamı**) | Günlük kontrol listesi + teknik tuzaklar |

**Okundu kanıtı — okuduğunu söylemek yeterli değildir.** Rapora her dosyanın yanına o dosyadan
çıkarılmış **somut bir bilgi** yazılır. *"Okudum", "gözden geçirdim"* kanıt sayılmaz.
**Kanıt üretilemeyen dosya okunmamış kabul edilir ve okunur.**

### Gün başı ölçümü — tek komut, tek satır

Okuma listesi bitince **`npm run docs:saglik`** çalıştırılır ve **tek satır** rapora yazılır:

```text
ÖLÇÜM: okuma yükü <N> B · AGENTS <a> · REFLEKSLER <r> · aranan kural <k> adımda bulundu
```

`<k>` = o gün ihtiyaç duyulan ilk kuralı bulmak için kaç dosya açıldığı. Diğerleri **boyut**
ölçer, bu **kullanılabilirlik** ölçer.

> **Neden zorunlu:** Damıtıldığı projede kural dosyası 23 günde üç katına, dersler 14 günde
> sekiz katına çıktı ve **kimse bunu gün gün görmedi**. Şişme tek tek bakıldığında hep "bir
> satır daha"dır; yalnız **eğilim** ölçülünce fark edilir.

### 6.1 Görev Başı — GÖREV SOHBETİ (tetik: `görev başı`)

0. **Oturum türü belirlenir — ATLANAMAZ İLK ADIM.** Klasör ve dal tek başına kanıt değildir.
   **Ölçüt, açılan tetik cümlesidir:**

   | Tetik | Oturum türü | Yetki |
   |---|---|---|
   | `gün başı` / `gün sonu` | **Yürütücü oturum** | Kod, görev dalı, PR, test deploy |
   | `görev başı` / `görev sonu` | **Görev sohbeti** | Yalnız araştırma, plan, kayıt — **kod yok** |

   **Hiçbir tetik kullanılmamışsa SORULUR, varsayılmaz.** İkisi karıştırılmaz, tür gün içinde
   değişmez.
1. **Çalışma alanı kontrolü:** `git branch --show-current` + `git status --short`.
   **Yabancı değişiklik varsa dokunulmaz**, sahibi olan oturuma bırakılır.
2. **Plan okuması:** `docs/UYGULAMA-SIRASI.md` → sıradaki iş; ardından ilgili kayıt.
3. **Kural taraması:** son görevden bu yana `AGENTS.md`'ye eklenenler okunur.
4. **Görev kaydı:** numara tahsis kuralıyla açılır. Zorunlu alanlar: amaç · kapsam ·
   **kapsam dışı** · teslim ölçütü · bağımlılıklar · riskler · onaylayan.
5. **§5.0 akışı işletilir.** Onay alınsa bile **uygulama bu oturumda yapılmaz**.
6. **Dış bilgi ihtiyaçları baştan listelenir** — görev ortasında beklemeye düşmemek için.

### 6.2 Görev Sonu — GÖREV SOHBETİ (tetik: `görev sonu`)

Çıktı koda değil, **devredilebilir bir kayda** dönüşür.

1. §5.0 akışı kayda geçti mi: analiz · plan · karar ve **gerekçesi** · **reddedilen seçenekler**.
2. Kayıt tamlığı — eksik alan bırakılmaz, *"sonra doldururum"* denmez.
3. Numara doğrulaması yapıldı ve kayıt **aynı commit'te** işlendi.
4. Durum satırı gerçeğin aynası mı — açık bir görev dalı varsa o iş fiilen "Devam Ediyor"dur.
5. **Devir:** yürütücünün ihtiyacı olan her şey kayıtta — önerilen dal adı · şema/veri göçü
   gerekiyor mu · dış bağımlılık · hangi kararlar sahibine ait · uygulama sırası.
   **Yürütücü bu kaydı okuyup hiçbir şey sormadan başlayabilmeli.**
6. Kayıt **aynı gün** ana dala taşınır — dal ucunda bırakılmaz.
7. Yeni ders çıktıysa `docs/ogrenilen-dersler.md`'ye; refleks karşılığı varsa
   `docs/REFLEKSLER.md`'ye (§18.1).
8. **Uygulamaya geçilmez.** Plan onaylı olsa bile kod §6.3'ün işidir.

### 6.3 Uygulama ve Teslim — YÜRÜTÜCÜ OTURUM (tetiği yoktur)

Bu bölümün ayrı tetiği **yoktur**: yürütücü oturum `gün başı` ile açılır ve hazırlanmış bir
görevi eline alır.

**A) Görevi eline alırken**
1. **Kayıt baştan sona okunur** — kapsam **dışı** bırakılanlar sessizce geri alınmaz.
2. **Onay kontrolü:** planın onaylandığı kayıtta görünüyor mu? Görünmüyorsa başlanmaz.
3. **Görev dalı** güncel ana daldan açılır. Doğrudan korunan dalda geliştirme yapılmaz.
4. Durum satırı gerçeğe çekilir, dal adı yazılır.
5. **Şema/veri göçü ihtiyacı baştan tespit edilir** ve deploy adımları şimdiden kayda yazılır.

**B) Teslimden önce**
6. **Teslim ölçütü tek tek doğrulanır.**
7. **`npm run dogrula`** — lint + tip + build temiz olmalı.
8. **Gerçek kullanım testi:** uçtan uca senaryo. **Ara bildirimlere güvenilmez**, sonuç
   kaynağından doğrulanır.
9. **Görev kaydı güncellenir:** yapılanlar, kontroller ve **sonuçları**, açık riskler.
   Tamamlanmayan iş tamamlanmış gibi yazılmaz. **Yol boyunca kırılıp düzeltilen şey de yazılır.**
10. **Onay sunumu:** numaralı test senaryoları verilir; onay **birebir metinle** beklenir.
    *"Tamam/olur"* onay değildir.

**C) Onay sonrası**
11. Geçiş yapılır ve **§10.6 doğrulaması** uygulanır.
12. **Kapanış kayıtları:** geçiş kaydı; hata çıktıysa olay kaydı; ders çıktıysa dersler dosyası.
    **Kaydın ÜST durum satırı aynı commit'te çevrilir** — ayrıntı bölümünün doğru olması yetmez;
    başka oturumlar ve gün başı okuması **üst satıra** bakar.
13. **Sonraki adım** yazılır. Yeni işe, mevcut işin onay süreci bitmeden başlanmaz.

## 7. Gün İçinde Çalışma Kuralları

- Önemli kararlar mesajlarda bırakılmaz; karar defterine ya da görev kaydına işlenir.
- Dosya adlarında sürüm karmaşası oluşturulmaz (`final-son-v2-yeni` gibi adlar kullanılmaz).
- Orijinal dosya korunur; onaysız üzerine yazılmaz.
- **Yeni kapsam ortaya çıkarsa aktif göreve sessizce eklenmez**; görev kaydı güncellenir.
- **Bir engel görüldüğünde iş gizlice başka yöne çevrilmez**; engel raporlanır.
- Kişisel veri, sözleşme veya finans bilgileri yetkisiz sistemlere yüklenmez.

## 8. Gün Sonu Protokolü

Gün sonu, oturumun **devredilmesi** anıdır. Amaç günü bitirmek değil, **bu oturumda oluşmuş
hiçbir bilginin kaybolmamasıdır.** Tetik çoğu zaman sohbetin bağlamı dolduğunda gelir; *"sonra
hallederim"* diye bırakılan her şey kalıcı kayıptır.

**1. Sohbet taraması — kayda geçmemiş ne var? (ilk adım, atlanamaz)**

Oturum **baştan sona** taranır ve beş başlık çıkarılır: alınan **kararlar** · dile getirilip
**kayda dönüşmemiş** istek ve fikirler · **tespit edilen kusurlar** · **verilen sözler** ·
**yarım kalan işler**.

Her madde ya doğru dosyasına yazılır (§4 tablosu), ya da raporun **"kayda geçmemiş konuşmalar"**
bölümünde *neden kaydedilmediği* ile listelenir. Sessizce atlanamaz.
*Ölçüt: "bu oturum silinse, bu bilgi nereden bulunur?" — cevabı yoksa yazılır.*

**2. Kapanış denetimi — `npm run gun:denetim`**

Tek komut yedi kontrolü yapar. **Çıktı özetlenmeden rapora yapıştırılır.** Betik ölçemediğini
`✋ ELLE` diye **basar**; **ölçülmemiş madde "temiz" sayılmaz.**
Yanına `npm run docs:saglik` ve `npm run kural:bayat` çalıştırılır.

Denetimden çıkan her açık uç **sahibiyle** yazılır. **Sahipsiz açık uç bırakılmaz.**

**3. Kapanış kayıtları** (karar alındıktan sonra): yapılanlar · aktif görevin durumu ·
kontrol sonuçları · açık riskler · yarının ilk adımı · **tamamlanmayan iş tamamlanmış gibi
raporlanmaz** · `NEREDE-KALDIK.md` güncellenir · **son adım: `docs/DEVIR-NOTU.md`.**

### 8.1 Devir Notu — yeni oturumun TEK giriş kapısı

Gün sonu raporu **arşivdir, geriye bakar**; devir notu **işlemseldir, ileriye bakar**.

- **Dosya adı sabittir ve üzerine yazılır.** Sürüm numarası **dosya adında değil, içinde**.
- **Zorunlu alanları:** nerede kaldık (tek cümle) · o güne özel okunacaklar · devredilen açık
  uçlar **ve sahipleri** · bekleyen onaylar · sıcak kural listesi (tavanlı) · ilk yapılacak adım ·
  kayda geçmemiş ama bilinmesi gerekenler.
- **Teslim ölçütü:** Yeni oturum bu notu okuyup **hiçbir şey sormadan** devam edebilmelidir.
  Soru sormak zorunda kalıyorsa **not eksiktir ve eksiklik notu yazan oturuma aittir.**

> ⚠️ **Devir notu, birleştirmeden ÖNCE yazıldıysa birleştikten SONRA bayatlar.** *"İlk iş: şu
> PR'ı birleştir"* satırı, PR birleşince yeni oturumu **yapılmış bir işi yapmaya** yönlendirir.
> Birleştirmeden sonra not **aynı gün** gerçeğe çekilir.

## 9. Sürüm Kontrolü ve Dallar

### 9.1 Korunan dallar
- `main` — canlıya hazır, onaylı sürüm
- `develop` — test ortamında doğrulanan birleşik sürüm

Korunan dallara **doğrudan kod commit'i yapılmaz** — yalnız PR ile girer.
Bu kural `scripts/kancalar/pre-commit` ile **mekanik olarak** uygulanır (`npm run kanca:kur`).

### 9.2 Görev dalı
Her görev kendi dalında: `feat/...` · `fix/...` · `chore/...` · `content/...`
Dal adı görev numarasını taşır. Birleşen dal silinir — **birleşmiş ama silinmemiş dal**,
"açık dal" denetimini yanıltır.

### 9.3 Commit ve PR
- Commit mesajı **ne yapıldığını ve neden** yapıldığını söyler; "fix", "update" yetmez.
- **Birleştirmeden önce `npm run dogrula`** çalıştırılır ve sonucu PR'a yazılır.
- PR açıklaması: görev bağlantısı · değişiklik özeti · **kapsam dışı** · yapılan testler ·
  riskler · geri alma yöntemi · onay beklenen kişi.
- **Kendi kendine onaysız birleştirme yapılmaz.**

### 9.4 Paralel oturum disiplini ⬜ TEK OTURUMLA ÇALIŞILACAKSA SİL

İki oturum aynı depoda çalışacaksa **ayrı `git worktree`** kullanılır ve **bölgesel sahiplik**
disipline değil **dosya sınırına** dayanır: hangi dosyayı hangi oturum yazar, tabloyla yazılır.

1. Commit öncesi **iki kontrol**: doğru dalda mıyım · çalışma alanında bana ait olmayan
   değişiklik var mı.
2. **Kayıt commit'i dal ucunda bırakılmaz** — aynı gün ana dala taşınır; aksi hâlde diğer
   oturum göremez.
3. **Numara tahsisi:** kayıt açmadan hemen önce en yüksek numara **iki daldan birden** okunur.
4. **Aktif iş panodan değil DALLARDAN okunur** — açık bir görev dalı varsa o iş fiilen
   "Devam Ediyor"dur; **dal gerçeği, durum satırını ezer.**
5. Başka bölgede düzeltilecek bir şey görülürse **düzeltilmez, sahibine bildirilir.**

### 9.5 Deploy sonrası doğrulama standardı ⬜ DOLDURULACAK

**Durum kodu (200) yetmez.** Her deploy sonrası şunlar **ölçülür** ve sonucu kayda yazılır:

- [Projeye özgü: hangi adres, hangi çıktı, hangi log] `Belirlenecek`
- **Süreç gerçekten yeniden başladı mı** — sayaç arttı mı, taze logda hata var mı?
  Eski süreç portu tutuyorsa **yeni kod yayına girmez** ve her şey normal görünür.
- Korumalı alanlar oturumsuz denendi mi?

### 9.6–9.9 ⬜ PROJEYE ÖZGÜ BAŞLIKLAR — doldur ya da SİL

- **9.6 Kimlik doğrulama ve yetki korumaları** — `Belirlenecek`
- **9.7 Kullanıcı yüklemeleri** — `Belirlenecek`
- **9.8 Arama motoru / ölçümleme standardı** — `Belirlenecek`
- **9.9 Form ve arayüz metni yazımı** — `Belirlenecek`

> Boş başlık bırakma. Doldurmayacaksan **sil** — doldurulmamış başlık, doldurulmamış anketle
> aynı hatadır ve ajanı yanlış yönlendirir.

## 10. Onay Gerektiren Kritik İşlemler

Ajan şunlardan **önce durur**, işlemi ve riskini açıklar, onay ister:
canlı yayın · geri döndürülemez silme/taşıma · toplu veri değişikliği · ödeme/sözleşme ·
dış sisteme veri gönderimi · şema değişikliği · üçüncü tarafa görünür her çıktı.

### 10.1 Onay Metinleri — BAĞLAYICI ⬜ DOLDURULACAK

Ortam geçişleri **yalnızca birebir onay metinleriyle** yapılır. Metinler kelime kelime aranır.
*"Tamam", "olur", "devam et"* onay **sayılmaz**; ajan beklediği metni hatırlatır.
Her onay yalnızca **o anki iş** için geçerlidir, sonraki işlere **devretmez**.
Alınan her onay **tarih/saat ve kapsamıyla** kayda geçirilir.

| Onay metni | Geçiş | Ajanın yapacakları |
|---|---|---|
| `LOKAL OK` | Görev dalı → `develop` | PR ile birleştir, test ortamına kur, test adımlarını sun, **dur** |
| `TEST OK` | `develop` → `main` | Birleştir, **dur** |
| `CANLI OK` | Sürüm etiketi + canlı yayın | Etiketle, yayınla, doğrula, raporla |

> ⚠️ **Bir onay metni başka hiçbir anlamda kullanılamaz.** Bir kayda *"X OK sonrası"* yazarken
> X'in tanımı **bu tablodan okunur**: o metin verildiğinde ajanın yapacakları, beklenenle
> birebir örtüşüyor mu? Örtüşmüyorsa **yanlış kapı yazılıyordur** — onay metinleri **yalnız**
> ortam geçişleri içindir.

## 11. Ajan İçin Zorunlu Davranış Kuralları

**Her görevin başında:** bu dosyayı okur · aktif görev kaydını kontrol eder · ilgili kaynakları
okur · çalışma alanı ve sürüm durumunu doğrular · kapsamı ve tamamlanma ölçütünü netleştirir ·
riskli/belirsiz kararları listeler.

### Doğrulama ve teşhis disiplini

- **Ölçmeden "düzeldi" denmez.** Görünür bir davranış iddiası rakamla kanıtlanır; düzeltmeden
  **önce ve sonra** ölçülür.
- **Yanlış alarm da hatadır.** Bir bulgu bildirilmeden önce ölçüm aracının **ne saydığı**,
  tolerans payı ve ilgili kaydın **güncel durumu** kontrol edilir.
- **Önce ortam, sonra kod.** Beklenmedik davranışta ortam etkileri elenmeden koda müdahale
  edilmez.
- **Hata bulununca kalıp taranır.** Aynı hatanın başka nerede olduğu aranır; tek yer düzeltilip
  geçilmez.
- **Ajan kendi hatasını saklamaz.** Yol boyunca kırdığı ve düzelttiği şeyi bildirir; kayda yazar.
- **Sahibinin "burada hata yaptın" dedikleri de aynı oturumda kayda geçer.** Tekrarlanabilir
  olanlar kurala çevrilir. **Kural yazılmadan geri bildirim kapanmış sayılmaz.**

### Çalışma sırasında

Kullanıcının istemediği **kapsam genişletmesi yapmaz** · eksik bilgiye dayalı kesin hüküm
vermez · **sahte test, onay, kaynak veya tamamlanma kanıtı üretmez** · düzenli ve kısa durum
güncellemeleri verir · mevcut dosya ve kullanıcı değişikliklerini korur · silme/üzerine yazma
öncesi hedefi doğrular · ilgisiz dosyaları değiştirmez · **kırık bağlantı veya bilinen hata
bıraktığı alanı tamamlandı saymaz.**

**Ajan; bütçe, sözleşme, hukuki yorum, nihai içerik tercihi, canlı yayın veya geri döndürülemez
işlem hakkında kendiliğinden karar veremez.**

### 11.1 Çalışma standardı ve iletişim dili

**A) Çalışma standardı — kıdemli geliştirici gibi**

1. Yüzeysel çözüm değil **kök nedene** inen çözüm; belirti bastırılmaz.
2. **Kenar durumlar** baştan düşünülür: boş/uç değerler, eşzamanlılık, hata yolu, geri alma.
3. **Güvenlik, erişilebilirlik, performans ve ölçülebilirlik varsayılan gereksinimdir** —
   "sonra bakarız" listesine atılmaz.
4. **Mevcut desene uyulur:** yeni yaklaşım getirmeden önce projede o iş nasıl yapılmış diye
   bakılır; tutarlılık kişisel tercihten önce gelir.
5. **Ölçmeden iddia edilmez.**
6. Riskli veya geri dönüşü zor yerde **durulur ve sorulur.**

**B) İletişim dili — detay eksiltmeden, sade dille** ⬜ HEDEF OKUYUCU ANKET 5'TEN

> Bu bir üslup tercihi değil, **teslim ölçütüdür**: muhatap anlamadıysa iş yapılmamış sayılır.
> Doğru çalışmış ama anlaşılmayacak biçimde anlatmış olmak **tamamlanmış iş değildir.**

**Hedef okuyucu:** [Projeyi hiç bilmeyen, teknik terimlere yabancı, ama zeki ve karar verecek
bir kişi.] Metin ona okutulsa anlaşılmıyorsa **yeniden yazılır**.

1. **Önce sonuç, sonra gerekçe.** "Ne oldu → neden önemli → sana ne getiriyor."
2. **Teknik terim yasak değil, açıklamasız kullanımı yasak.** **Uzun sohbetlerde açıklama
   tekrarlanır**; *"yukarıda tanımlamıştım"* savunma değildir.
3. **Kendi ürettiğin kısaltma ve kodlar açıklanmadan kullanılmaz.** Görev numaraları, iç
   etiketler muhatap için anlamsızdır — her geçtiğinde yanına **ne olduğu** yazılır.
4. **Ham log, ham JSON, ham kod dökümü yapıştırılmaz;** yorumlanmış hâli verilir.
5. **Sayılar saklanmaz** ama tek başına bırakılmaz: ne anlama geldiği ve karara nasıl etki
   ettiği yazılır.
6. **Basitleştirme doğruluğu bozmaz.** Bilinmeyen bir şey *"bilmiyorum"* diye söylenir.
7. **Risk küçültülmez, abartılmaz.**
8. **Fazla açıklamaktan çekinilmez.** Şüphe hâlinde **açıklama eklenir, çıkarılmaz.**
9. **Uzunluk gerekçe değildir.** Ama dolgu cümle de yazılmaz.
10. **Karar gerektiren yerde** seçenekler + öneri + gerekçe sunulur; her sorunun yanında
    **"bunu bilmezsem ne olur"** karşılığı yazılır.
11. **Kendi hatası da aynı dille anlatılır:** ne yanlış gitti, nasıl fark edildi, ne yapıldı,
    tekrarını ne engelleyecek.
12. **"Anlamadım" gelirse tartışılmaz, yeniden anlatılır** — kısaltarak değil, **baştan ve daha
    sade kurarak**. *"Nesini anlamadın"* diye sorulmaz.
13. **Görünüşle ilgili bir karar sorulurken seçenekler ÇİZİLEREK sunulur.** Sınav sorusu:
    *"Bu soruya cevap vermek için karşımdakinin kafasında bir ekran canlandırması gerekiyor mu?"*
    Cevap evetse **çizilir** — *"şöyle görünür"* cümlesi çizimin yerine geçmez.

### 11.2 Tasarım işlerinde akış: önce çizim, sonra kod

**Görünüşü değişen hiçbir iş doğrudan kodlanmaz.** Sıra bağlayıcıdır:
tasarım üretilir → sunulur, revize alınır, karar kılınır → **ancak ondan sonra kod yazılır.**

**Neden:** Kodlanmış bir tasarımın revizesi, çizilmiş bir tasarımın revizesinden **kat kat
pahalıdır**; ayrıca "yanlış hedefe kodlama" riski yalnız görsel onayla kapanır.

**Kapsam:** kullanıcının gördüğü **her** yüzey — **yönetim/ayar ekranları dâhil.**
Kapsam dışı: yalnız davranış değiştiren, görünüşe dokunmayan işler.

### 11.3 Öneri ve soru da tasarlanarak sunulur

Bir konuyu sahibine getirmeden önce **üç soru**: *bunu görür mü · kararını değiştirir mi ·
geri dönüşü zor mu.* Herhangi biri evetse **getirilir**; üçü de hayırsa ajan çözer ve
**raporda tek satırla bildirir**.

### 11.4 Karar turu ile uygulama turu dengesi

Karar üretmek işi ilerletmez. İki gün üst üste hiç iş teslim edilmediyse, ertesi günün ana
hedefi **uygulama** olarak açılır ya da **neden açılmadığı yazılır.**

### 11.5 Karar sunmadan önce zorunlu üç ölçüm

1. **Kaç yerde kullanılıyor?** — değişecek bileşen/alan kaç yerde geçiyor.
2. **Mobil karşılığı ne?** — kararın dar ekrandaki hâli yazılmadan karar tamamlanmış sayılmaz.
3. **Geri dönüşü var mı?** — varsa nasıl, yoksa bu açıkça söylenir.

## 12. Test ve Teslim — dürüst kayıt

**Teslim ölçütleri tek tek işaretlenir.** Ölçülemeyen bir ölçüt "tamam" sayılmaz: ya ölçülür,
ya **açık feragatle** kapanır ve feragat **kayda yazılır**. Gözle doğrulanan maddeler
*"ölçüldü"* diye raporlanmaz — **nasıl** doğrulandığı yazılır.

## 13. Hata, Acil Durum ve Geri Alma

Bir şey bozulduğunda: **önce durdur** · etkiyi ölç ve yaz · geri alma yolunu **uygulamadan
önce** söyle · geri al · kök nedeni bul · **olay kaydı** aç · önlem kuralını yaz.
**Olay kaydı yazılmadan olay kapanmış sayılmaz.**

## 14. Gizlilik ve Güvenlik ⬜ DOLDURULACAK

Kişisel veri, kimlik bilgisi ve gizli anahtarlar yetkisiz sistemlere yüklenmez.
**Yedekleme:** [nerede · kim alıyor · nasıl doğrulanıyor — anket 19] `Belirlenecek`

> ⚠️ **Yedek "alındı" ile "dolu" ayrı şeylerdir.** Yedek aldıktan sonra: kaynak yolu gerçekten
> var mıydı · yedeğin boyutu kaynağa yakın mı · **içindeki kayıtlar sayıldı mı?**
> Üçü birden sağlanmadan yedek **güvence sayılmaz**.

## 15. Kısa Başlangıç Talimatı

```text
Bu proje [PROJE ADI]'na aittir. Proje kökündeki AGENTS.md dosyasını tamamen oku ve bağlayıcı
çalışma kuralları olarak uygula. İşe başlamadan önce docs/DEVIR-NOTU.md'yi oku, aktif görevi,
onay durumunu ve çalışma alanını kontrol et. Kayıtsız yeni işe başlama, tek aktif iş kuralını
koru, belirsiz veya kritik kararlarda durup onay iste. Her teslimde değişiklikleri,
kontrolleri, riskleri ve test adımlarını raporla.
```

## 16. Kural Yaşam Döngüsü — bir kural nasıl doğar, nasıl emekli olur

**Neden var:** Bu tür sistemlerde **"ekle" fiili vardır, "çıkar" fiili yoktur.** Damıtıldığı
projede ölçüldü: kural dosyasına **1498 satır eklenmiş, 77 satır silinmişti** (%5); dersler
dosyasına **1193 eklenmiş, 5 silinmişti** (binde 4). Sonuç: 23 günde kural dosyası üç katına
çıktı, gün başı okuma yükü 298 KB'a ulaştı ve **69 dersin 23'ü aynı ilkenin tekrarı** oldu.

Daha kötüsü: **kuralı yazmak tekrarını önlemiyordu.** Bir dersin başlığı birebir *"…üçüncü kez
düşüldü"* diyordu. Liste uzadıkça okunma ihtimali düşüyor, okunmayınca hata tekrarlıyor,
tekrarlayınca **yeni bir kural daha** yazılıyordu. Bu bölüm o döngüyü kırar.

### 16.1 Üç seviye — her gözlem kural olmaz

| Seviye | Nedir | Nerede durur |
|---|---|---|
| **GÖZLEM** | Tek seferlik, kök nedeni bilinmiyor | Yalnız o günün gün sonu raporu |
| **DERS** | Olay + **ölçülmüş** kök neden | `docs/ogrenilen-dersler.md` |
| **KURAL** | Üç şart **birden** sağlanmışsa | `AGENTS.md` ya da `docs/REFLEKSLER.md` |

**Kural olmanın üç şartı — üçü birden:**
1. **Bedeli ağır ya da tekrarlanmış olmalı.** Bir kez olmuş, ucuz atlatılmış şey derstir.
2. **Cümle *"dikkatli ol / bil / unutma"* ile BAŞLAYAMAZ**; *"şunu yaz / şunu ölç / şunu oku"*
   ile başlar. *(Damıtıldığı projede bir kural "ölçüm aracının ne saydığını **bil**" diye
   yazılmıştı ve tutmadı — ajan tek oturumda **dört kez** ihlal etti. Bilgi, kullanım anında
   kendiliğinden devreye girmez; kural **adıma** çevrilince tuttu.)*
3. **İhlali gözle görülebilir olmalı.** Ölçülemeyen kural temenni olur.

### 16.2 Emeklilik — yalnız üç olay tetikler

1. **Makineye devredildi** → metin silinir, yerine **komut adı** kalır.
2. **Yapısal olarak imkânsızlaştığı ÖLÇÜLDÜ** — *"artık olamaz"* iddiası **ölçülmeden yazılamaz.**
3. **Ölçümle çürütüldü** → **silinir**, üstü çizilmez.

> ⛔ **ZAMAN GEÇMESİ HİÇBİR KOŞULDA emeklilik sebebi değildir.** *"60 gün ihlal edilmedi,
> kalksın"* cazip görünür ama **en pahalı** kurallar doğaları gereği **seyrek tetiklenir**
> (boş yedek, sahte doğrulama, uzun oturumda tarih ölçümü). Zaman kuralı ilk onları öldürürdü.

**Emekli edilen kural SİLİNMEZ**, `docs/arsiv/emekli-kurallar.md`'ye taşınır. Zorunlu alanlar:
nereden çıkarıldı · ne zaman yazıldı ve ne zaman çıkarıldı · emeklilik sebebi (üç olaydan biri) ·
**çıkarılan metin birebir** · yerine ne geçti · **birlikte silinmeyen komşular** (en sık hata:
bayat bir ifadeyle aynı satırda duran **yürürlükteki** bir kuralı da götürmek).

### 16.3 Numaralar kimliktir — kaydırılmaz

Bölüm, ders ve refleks numaraları **kimliktir**. Bir madde emekli olduğunda ya da başkasıyla
birleştiğinde numarası **boş yuva** olarak kalır; kalanlar yukarı çekilmez. Bu yüzden son
numara ile yürürlükteki madde sayısı farklı olabilir — **normaldir**.

> *(Bu kural ihlal edildikten sonra yazıldı: iki refleks birleştirilince sonraki numaralar
> topluca kaydı ve depodaki atıflar — devir notu dâhil — **yanlış maddeyi** göstermeye başladı.
> Bir refleks bir anda tamamen başka bir şeye dönüştü.)*

### 16.4 Üst sınırlar — bir KARAR eşiği

| Dosya | Tavan | Ölçen |
|---|---|---|
| `AGENTS.md` | **[proje kararı]** satır | `npm run docs:saglik` |
| `docs/REFLEKSLER.md` Bölüm 1 | **[proje kararı]** yürürlükteki madde (emekli yuvalar sayılmaz) | aynı |
| `CLAUDE.md` | **60 satır** | aynı |
| `docs/DEVIR-NOTU.md` | **[proje kararı]** satır | aynı |
| Gün başı okuma yükü | **[proje kararı]** bayt | aynı |

**Tavan bir yasak değil, bir KARAR EŞİĞİDİR.** Dolduğunda üç seçenek vardır ve **sessizce
aşmak bunlardan biri değildir**: **(a)** bir maddeyi emekli et · **(b)** iki maddeyi birleştir ·
**(c)** tavanı **gerekçesiyle ve tarihiyle yazarak** yükselt.

### 16.5 Bir dosya okuma listesinden çıkarılmadan önce

**Zorunlu ölçüm:** dosyadaki her **somut değer** (eşik sayısı, adres, dosya yolu, komut, kaynak
adı, port) için *"bu değer başka nerede yazılı?"* diye **aranır**. Tek nüshaysa, çıkarmadan
önce kalıcı bir adrese **taşınır**.

> *(Damıtıldığı projede bu tuzağa **tek bir günde üç kez** düşüldü: dersler dosyası günlük
> okumadan çıkınca üç ayrı kural — biri projenin **en pahalı** dersi — erişilemez oldu.
> Refleks *"doğru kaynaktan mı geliyor?"* diye **soruyordu** ama cevabı okuma listesinde
> kalmamıştı.)*

---

**Belge durumu:** `ajan-cekirdegi` v0'dan türetildi · **Gözden geçirme:** tetiğe bağlı
(faz kapısı ve her 10. gün sonu) — **takvime bağlı değil**
