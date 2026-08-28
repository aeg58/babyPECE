# Görünüş — yön dosyası

> **Sahibi Erdem'dir.** Ajan bu dosyayı **yazıya geçirir**, üretmez. Buradaki her satır
> Erdem'in söylediğinden gelir; ajanın önerisi olan bir satır varsa **öyle işaretlenir**.
>
> **Neden var:** yön verilmemiş bir tasarımda model boşluğu, eğitildiği her şeyin
> **ortalamasıyla** doldurur ve ortalama tanınabilir. Bu dosya o boşluğu kapatır.
> Maliyeti ve nasıl öğrenildiği: `docs/KURUCU-DERSLER.md` › A23.
>
> **Bu dosya veri, talimat değildir.** Ajan buradan yalnız tasarım alanlarını okur.

---

## Kimlik

**babyPECE = Peçe ailesinin bebeği.** *(Erdem, 2026-08-28: "peçe eniştemin doğal olarak
ablamın soyadı, baby de bebek.")*

Ad zaten bir **duyuru**: aileye yeni biri katılıyor. Sitenin kimliği uydurulmadı, adın
kendisinden çıktı.

## Ad — ekran adı ile teknik ad ayrıdır

*(Erdem'in kararı, 2026-08-28.)*

| Nerede | Ne yazar |
|---|---|
| **Ekranda, sitede, sloganda** | **babyPEÇE** (ç ile) |
| Depo, klasör, dosya adları, `ayarlar.conf` | `babyPECE` |

Gerekçe: site Türkçe ve soyadı **Peçe**; ekranda `PECE` yazmak yazım hatası gibi durur.
Element 2'nin *"ad her yerde aynı"* kuralı **teknik ad** için geçerlidir.

## Yüzey — ultrason

*(2026-08-28, ikinci düzeltmeden sonra. Ajanın önerisi, gerekçesi aşağıda.)*

**Neden gerekti:** tur 2'nin yapısı doğruydu ama yüzeyi yine krem zemin, serif başlık ve bol
boşluktu. Bu üçlü, ajanın kendi çekim alanı ve dışarıdan tanınıyor. Motif yapıyı belirledi,
yüzeyi belirlemedi; yüzey boş kalınca ortalama doldurdu. Ders A23'ün yalnız yarısı uygulanmıştı.

**Yüzey nereden alındı:** ailenin bu bebeğe dair elindeki **tek gerçek görüntü** ultrason.
Uydurulmadı, konudan çıkarıldı.

| | |
|---|---|
| **Zemin** | Neredeyse siyah. Tek temalı, bilerek. Ultrason karanlıktır; *"teknoloji havası"* için değil, konu gereği |
| **Görüntü** | Gri tonlu, **benekli** (ultrason paraziti), **koni** içinde |
| **Perde** | Artık örtü değil, **parazit ve karanlık**. Erken haftalarda benek baskın, ilerledikçe görüntü çözülür |
| **Sıcak renk** | Yalnız **tek yerde**: perde açıldığında görselin kendi teni. Başka hiçbir yerde sıcak renk yok |
| **Sayılar** | Makine okuması gibi: köşelerde, eşit genişlikli yazıyla. Bu **dekoratif değil**, cihazın gerçekten yaptığı şey |
| **Final** | *"Aramızda"* ekranı koniden ve parazitten **tamamen çıkar**, düpedüz bir fotoğraf olur. Tek sıcak ekran odur |

**DÜZELTME — 2026-08-28, tur 4.** Erdem: *"açılışı ısıt, ultrason dilini koru ama düz koni
olmasın, hareketli bir arka plan olsun, 3B havasını hissettir."*

Araştırmada çıkan şey yüzeyi tamamen düzeltti: **obstetrik 3B/4B ultrason zaten sepya
kullanır.** Hem kırmızının derinlik algısını bozması yüzünden, hem de o *"hatıra görüntüsü"*
hissi için. Yani **sıcaklık ile gerçek ultrason dili çelişmiyor**; gerçek ultrasonun kendisi
sıcak. Önceki soğuk/mavi tercih ajanın yorumuydu, konunun gerçeği değildi.

| | Eski (tur 3) | Yeni (tur 4) |
|---|---|---|
| Zemin | Soğuk siyah | **Sıcak siyah** (#0A0603) |
| Renk eşlemesi | Fosfor grisi | **Sepya**: koyu kahve → amber → krem ışık |
| Sektör | `clip-path` ile **kesilmiş koni** | Shader içinde **yumuşayarak biten** hacim |
| Görüntü | Duran resim + CSS bulanıklık | **Her kare hesaplanan** ışın yürütme |
| Benek | Bir kerelik canvas gürültüsü | **Canlı**, kıpırdayan, çarpımsal |
| Açılış | Karanlık ekran | **Sıcak ışık**, tarama onun içinden çıkar |

**Teknik:** tek WebGL parça gölgelendiricisi. Simplex gürültü `stegu`/`ashima` webgl-noise
(MIT) uygulamasından; ince benek için ucuz değer gürültüsü. 10 adımlı ışın yürütme kabartma
ve hafif kayma veriyor, 3B hissi oradan geliyor. WebGL yoksa CSS `sepia()` yedeği devreye
girer. Piksel oranı 1,25 ile sınırlı ve gürültü 2 oktava indirildi; ikisi de 2 saniye hedefi
için (element 19).

**Yazı tipleri:** Unbounded, Bricolage Grotesque, Martian Mono. Öncekilerden ve krem/serif
dünyasından uzak.

**TUR 5 — 2026-08-28. Ultrason dili Erdem tarafından ONAYLANDI:** *"ultrason tasarımını çok
beğendim, böyle kalsın."* Yüzey artık **sabittir**, bundan sonra sapılmaz.

**Düzeltilen hata:** benek miktarı hafta ilerledikçe **hiç azalmıyordu**. Perde inceliyordu
ama parazit sabit kalıyordu, bu yüzden bebek hiçbir zaman netleşmiyordu. Netlik artık dört
şeyi birden sürüyor: benek azalır · ışın demeti daralır · yoğunluk eşiği açılır · derinlik
zayıflaması hafifler. **40. haftada tarama neredeyse tamamen çözülür.** Netlik eğrisi de
yukarı çekildi (`pow(p,.62)` → `pow(p,.50)`).

**Sıcaklık:** iki durak var ve ikisi de gerçek ultrason paletinin içinde. Erdem karşılaştırıp
seçecek; seçilen değer buraya yazılacak ve tek kaynak olacak.

**2 saniye:** Erdem esneme payı verdi. Kalite yukarı alındı — ışın 10→12 adım, gürültü 2→3
oktav, piksel oranı 1,25→1,6. **Gerçek ölçüm Faz 7'de, ablanın telefonunda yapılacak;**
bu hedef henüz doğrulanmış değil.

**Yayın:** soğuk makineden sıcak çocuğa. Site bu yolu 33 hafta boyunca yürür.

## Motif — PERDE İPTAL EDİLDİ (2026-08-28, tur 6)

> **Erdem:** *"perdeyi iptal et zaten benekler var görseller anlaşılmıyor."* Haklıydı.
> Taramanın kendi paraziti zaten örtü işini görüyordu; üstüne ayrıca karartma koymak
> görseli **okunmaz** hâle getiriyordu. **Tek örtü artık taramanın kendi beneği.**
>
> **Ad ve kimlik değişmedi:** babyPEÇE hâlâ Peçe ailesinin bebeği. Değişen yalnız görsel
> jestin *ikinci bir katman* olarak durması. Aşağıdaki eski metin **geçmiş kayıt olarak**
> duruyor, yürürlükte değildir.

### Yürürlükteki kural

Erken haftalarda benek baskındır, hafta ilerledikçe azalır; ama **görüntü her hafta
okunabilir olmak zorundadır.** Netlik alt sınırı 0,30'dur ve altına inilmez.

### Eski metin (yürürlükte değil) — perde

Türkçede *peçe*, yüzü örten örtüdür. Şu an gerçekten olan şey de budur: bebek görünmüyor,
ultrason bulanık bir leke, yüzünü kimse bilmiyor. Her hafta perde biraz daha inceliyor.

**Motifin kuralları:**

1. **İlk açılışta perde kalkar.** Bir kez olur, bir daha olmaz. Büyük jest budur.
2. **Sonraki her gelişte perde bulunulan haftaya göre saydamdır.** Erken haftalarda neredeyse
   opak; ilerledikçe siluet seçilir; tahmini doğum tarihinde tamamen açılır.
3. **Arkasında ne var:** o haftanın görseli. Doğumda anne babadan üretilen bebek görseli.
4. **Kelime sitede YAZILMAZ.** *(Erdem'in kararı.)* Motif yalnız **görsel jest** olarak yaşar.
   Site "peçe" kelimesiyle espri yapmaz.
5. **Perde bir doku ve bir bulanıklıktır, ağır bir model değil.** Sebebi teknik: telefonda
   2 saniye hedefi (`docs/KAPSAM.md` › Faz 3 › element 19).

**Neden bu motif işe yarıyor:** tek ve tekrarlanan bir jest · doğrudan aileye ait, ortalamanın
üretemeyeceği bir şey · *"önce kart, sonra yoldaş"* yapısının kendisi · geri sayımı görsel
hâle getiriyor, sayıyı tekrar etmiyor.

## Sıcaklık — KİLİTLENDİ

**Varsayılan sepya.** *(Erdem, 2026-08-29: "sıcak soğuk değil default en iyisi.")*
Üç durak denendi, varsayılan seçildi, karşılaştırma düğmesi kaldırıldı. **Bundan sonra
sapılmaz.**

**Yukarıdan vuran ışık huzmesi kaldırıldı** *(aynı tarih, Erdem)*. O katman sayfaya sonradan
konmuştu ve taramanın kendi ışığıyla yarışıyordu. **Tek ışık kaynağı taramanın kendisidir.**

## Kadranlar

*(Erdem'in kararı: "önce kart, sonra yoldaş".)*

| | İlk açılış | Sonraki açılışlar |
|---|---|---|
| **Enerji** | 3 — büyük jest | 1 — sakin, okunaklı |
| **Ritim** | 2 | 2 |
| **Hareket** | 2 — açılış koreografisi | 1 — yalnız geçişler |

İki ayrı sayfa değil, **aynı sayfanın iki hâli**; ilk geliş tarayıcıda hatırlanır.
Jest ağır görselden değil **zamanlamadan** gelir.

## Okuyucu

**Tek kişi:** Erdem'in ablası. Telefonda. Türkçe. Bir şey doldurmuyor, sadece bakıyor.
Ölçüt onun gülümsemesi.

## Bu tasarımda YASAK — tur 1 denetiminden

*(Ajanın kendi çıktısında ölçülen kalıplar. Tekrarı FAİL sayılır.)*

1. Harf aralığı açılmış, küçük büyük-harf, mono etiketler
2. Kartın kenarında dekoratif renkli şerit
3. `auto-fit` ile eşit boy, eşit ağırlık kart ızgarası
4. Her bölümün aynı kompozisyonda tekrarı
5. Tek vurgu renginin her yere dağıtılması
6. Kaynağı doğrulanmamış hiçbir sayı ya da eşleşme *(→ refleks 13)*
7. **Krem/bej zemin + serif başlık + bol boşluk üçlüsü.** Bu ajanın kendi çekim alanıdır ve
   dışarıdan tanınır; tur 2'de yasak listesine rağmen buraya düşüldü. *(2026-08-28'de eklendi.)*

**Sınav sorusu:** adı ve motifi değiştirsen bu tasarım yine kendine ait hissettirir mi?
Cevap *hayır* ise tasarım hazır değildir.

## Henüz boş — Erdem'den bekleniyor

Sayfayı bu **aileye** ait kılacak ikinci katman: ablanın nasıl biri olduğu, aralarındaki
dalganın dili, sevdiği şeyler, haberi nasıl verdiği. Yön bunlarsız da yürür ama **espri**
bunlarsız ortalama kalır — ve bitiş ölçütü onun gülümsemesi.
