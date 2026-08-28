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

**Yayın:** soğuk makineden sıcak çocuğa. Site bu yolu 33 hafta boyunca yürür.

## Motif — perde

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
