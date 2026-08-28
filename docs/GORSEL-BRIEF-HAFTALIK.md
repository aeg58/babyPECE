# babyPEÇE — haftalık görsel serisi · üretim brifingi

> **Bu belge olduğu gibi bir görsel üretim modeline (ChatGPT vb.) verilmek üzere yazılmıştır.**
> Baştan sona okunmalı; promptlar en sonda. Bağlamı okumadan prompt çalıştırılırsa seri
> tutarsız çıkar.

---

## 1 · Bu nedir

Bir hediye sitesi için **34 adet kare görsel** üretilecek. Site, hamile bir kadına kardeşi
tarafından gönderilecek tek bir bağlantıdan ibaret. Site her gün açıldığında o günkü gebelik
haftasını gösteriyor ve o haftanın görselini bir **ultrason taraması** olarak canlandırıyor.

Görseller doğrudan ekranda gösterilmiyor. Sitede bir WebGL gölgelendiricisi bu görselleri
alıyor ve gerçek zamanlı olarak ultrasona çeviriyor: sepya renk eşlemesi, kıpırdayan benek,
dönen tarama yayı, derinlik boyunca zayıflayan sinyal, ve parlaklıktan türetilen bir derinlik
parallaksı.

**Bu, üretilecek görsellerin nasıl olması gerektiğini doğrudan belirliyor.** Aşağıdaki
"Teknik zorunluluklar" bölümü bunun sonucudur ve pazarlık konusu değildir.

## 2 · Süreç, baştan sona

Bu görseller boşlukta üretilmiyor. Sitenin kapsamı yedi fazlı bir akışla çıkarıldı ve
aşağıdakiler **karara bağlanmış**, değiştirilemez sınırlardır:

**Kapsam dışı bırakılanlar.** Site tıbbi tavsiye vermiyor. Tek bir kişi için; başkasının kendi
tarihini girip kullanacağı genel bir uygulama değil. Okuyan kişi hiçbir şey doldurmuyor,
sadece bakıyor. Doğumda bitiyor.

**Veri disiplini.** Sitedeki her sayının kaynağı yazılı olmak zorunda. Kaynağı doğrulanmamış
tek bir ölçü bile ekrana çıkmıyor. Bu yüzden **aşağıdaki boy değerleri sitede gösterilmez**;
yalnız görselin doğru şeyi çizmesi için buradadır. Sitenin gösterdiği sayılar ayrıca ve
kaynağıyla birlikte derlenir.

**Ölçü tanımı hafta 13'te değişir.** 13. haftaya kadar ölçü **baş-popo** (CRL) boyudur;
sonrasında **baş-topuk** boyudur. Aşağıdaki tabloda bu geçiş işaretlidir. Görselde de bu
fark görünmelidir: erken haftalarda gövde kıvrık ve bacaklar ölçüye dahil değildir.

**Bilimsel doğruluk şartı.** Bu seri "bilimsel" olarak sunuluyor. Bir haftanın görüntüsü o
haftanın gerçek gelişim evresine uymuyorsa görsel reddedilir. Özellikle erken haftalarda
yenidoğan oranlarına kaçmak en sık yapılan hatadır: 7 ila 12. haftalarda baş gövdeye göre
**orantısız büyüktür**, uzuvlar incedir, gözler kapalı ve yanlara dönüktür.

**Kimlik.** Serinin adı babyPEÇE. Peçe, bebeğin babasının ve annesinin soyadıdır. Görsellerde
hiçbir ad, yazı ya da işaret bulunmaz; kimlik sitenin kendisinde kurulur.

## 3 · Teknik zorunluluklar

Bunlar gölgelendiricinin çalışması için gereklidir. İhlal edilirse görsel sitede bozuk görünür.

1. **Kare çerçeve.** 1:1. En az 1024 × 1024 piksel.
2. **Arka plan düz ve AÇIK renk olmalı** — krem ya da çok açık şeftali. Desen, doku, gölge
   oyunu, vinyet, dekor yok. *Sebep: gölgelendirici özneyi arka plandan parlaklık farkıyla
   ayırıyor. Arka plan koyulaşırsa özne kaybolur.*
3. **Özne arka plandan belirgin biçimde KOYU olmalı.** Şeftali, ten, kızılımsı tonlar. Özne ile
   arka plan arasında net bir parlaklık farkı şarttır.
4. **Tek özne, ortada.** Etrafında bol boşluk. Özne çerçeveye taşmaz, kenara yapışmaz.
5. **Metin yok.** Etiket, ölçü çizgisi, ok, filigran, imza, rakam yok.
6. **Tıbbi araç yok.** Rahim duvarı, kese, plasenta, göbek kordonu ayrıntısı, kan, tıbbi alet yok.
7. **Tek yumuşak ışık.** Sert gölge, çoklu ışık, parlama yok.
8. **Üslup seri boyunca AYNI kalmalı.** 34 görsel tek bir elden çıkmış gibi durmalı.
9. **Sakin ve şefkatli ton.** Klinik, ürkütücü ya da rahatsız edici olmamalı.

## 4 · Sabit üslup bloğu

Aşağıdaki blok **34 üretimin hepsinde harfi harfine aynı** kullanılır. Değiştirilmez.
Yalnız `{{HAFTA}}` satırı değişir.

```text
A soft, warm, semi-realistic 3D-rendered illustration of human prenatal
development. Single centered subject on a plain, flat, LIGHT cream background
with generous empty space around it. The subject must be clearly DARKER than
the background: warm peach and skin tones against pale cream. One soft light
source from the upper left. Rounded forms, matte surfaces, gentle shadows.
Calm and tender in mood, never clinical, never frightening.

No text, no labels, no numbers, no measurement lines, no arrows, no watermark.
No womb wall, no sac, no placenta, no umbilical cord detail, no medical
instruments, no blood.

Keep the rendering style absolutely consistent across the whole series.

SUBJECT FOR THIS IMAGE:
{{HAFTA}}

Square 1:1 composition, at least 1024x1024. No text anywhere in the image.
```

## 5 · Haftalık özne blokları

`{{HAFTA}}` yerine sırayla aşağıdakiler konur. Boy değerleri **çizim rehberidir**, sitede
gösterilmez.

| # | Hafta | `{{HAFTA}}` bloğu | Ölçü |
|---|---|---|---|
| 01 | 7 | `A 7-week embryo, about 10 mm crown to rump, curled in a tight C shape, head disproportionately large with a prominent forehead, a single dark eye spot, small dimples where nose and ears will form, flat paddle-like limb buds, a small tapering tail still present.` | baş-popo |
| 02 | 8 | `An 8-week embryo, about 16 mm crown to rump, C-curve softening, tail almost gone, limb paddles beginning to show finger ridges, elbows starting to bend, eye spots darker under fusing lids.` | baş-popo |
| 03 | 9 | `A 9-week fetus, about 23 mm crown to rump, distinct separated fingers and toes, head still nearly half the body, eyes closed with fused lids, neck barely defined.` | baş-popo |
| 04 | 10 | `A 10-week fetus, about 31 mm crown to rump, all limbs clearly formed, fingers separated with faint nail beds, head large and rounded, body still tightly curled.` | baş-popo |
| 05 | 11 | `An 11-week fetus, about 41 mm crown to rump, head about half of total length, very thin translucent skin, slender arms reaching toward the face.` | baş-popo |
| 06 | 12 | `A 12-week fetus, about 53 mm crown to rump, fully formed in miniature, tiny fingernails, hands able to curl, face becoming recognisably human, eyes wide-set and closed.` | baş-popo |
| 07 | 13 | `A 13-week fetus, about 7 cm crown to rump, body beginning to grow faster than the head, neck clearly defined, limbs in better proportion.` | son baş-popo haftası |
| 08 | 14 | `A 14-week fetus, about 15 cm head to heel, thin translucent skin with the first fine downy hair, neck lengthened, arms proportional to body.` | baş-topuk |
| 09 | 15 | `A 15-week fetus, about 17 cm head to heel, slender limbs, bones beginning to harden, delicate features, eyes still closed.` | baş-topuk |
| 10 | 16 | `A 16-week fetus, about 18 cm head to heel, ears close to final position, more upright posture, hands able to meet at the chest.` | baş-topuk |
| 11 | 17 | `A 17-week fetus, about 20 cm head to heel, the very first fat forming under thin skin, stronger limbs, calm curled pose.` | baş-topuk |
| 12 | 18 | `An 18-week fetus, about 22 cm head to heel, ears standing out from the head, mouth making small movements, body still very slender.` | baş-topuk |
| 13 | 19 | `A 19-week fetus, about 24 cm head to heel, a faint waxy coating on the skin, first fine hair on the scalp, thin reddish limbs.` | baş-topuk |
| 14 | 20 | `A 20-week fetus, about 25 cm head to heel, halfway point, face more defined, eyebrows faintly visible, skin still wrinkled and translucent.` | baş-topuk |
| 15 | 21 | `A 21-week fetus, about 27 cm head to heel, eyebrows and eyelids clearly present, limbs longer, body lean.` | baş-topuk |
| 16 | 22 | `A 22-week fetus, about 28 cm head to heel, wrinkled reddish skin, lips clearly distinct, tiny fingernails complete.` | baş-topuk |
| 17 | 23 | `A 23-week fetus, about 29 cm head to heel, slightly more fat under still-translucent skin, face fuller than before.` | baş-topuk |
| 18 | 24 | `A 24-week fetus, about 30 cm head to heel, eyelids beginning to part, very fine hair over the body, thin but filling out.` | baş-topuk |
| 19 | 25 | `A 25-week fetus, about 34 cm head to heel, noticeably more subcutaneous fat, cheeks beginning to round.` | baş-topuk |
| 20 | 26 | `A 26-week fetus, about 35 cm head to heel, eyes open for the first time, eyelashes present, skin less wrinkled.` | baş-topuk |
| 21 | 27 | `A 27-week fetus, about 36 cm head to heel, calmer fuller face, limbs rounder, quiet resting pose.` | baş-topuk |
| 22 | 28 | `A 28-week fetus, about 37 cm head to heel, growing fat layer, smoother skin, hands near the face.` | baş-topuk |
| 23 | 29 | `A 29-week fetus, about 38 cm head to heel, stronger muscles, rounder cheeks, more compact posture.` | baş-topuk |
| 24 | 30 | `A 30-week fetus, about 39 cm head to heel, downy hair beginning to shed, skin becoming opaque.` | baş-topuk |
| 25 | 31 | `A 31-week fetus, about 41 cm head to heel, plumper arms and legs, less empty space around the body.` | baş-topuk |
| 26 | 32 | `A 32-week fetus, about 42 cm head to heel, skin no longer translucent, nails reaching fingertips.` | baş-topuk |
| 27 | 33 | `A 33-week fetus, about 43 cm head to heel, tightly curled, limbs folded close, clearly running out of room.` | baş-topuk |
| 28 | 34 | `A 34-week fetus, about 45 cm head to heel, rounded by fat, smooth full cheeks, peaceful sleeping pose.` | baş-topuk |
| 29 | 35 | `A 35-week fetus, about 46 cm head to heel, chubby limbs, very little space, arms tucked in.` | baş-topuk |
| 30 | 36 | `A 36-week fetus, about 47 cm head to heel, thicker waxy coating on the skin, tightly folded posture.` | baş-topuk |
| 31 | 37 | `A 37-week fetus, about 48 cm head to heel, early term, plump and smooth, calm and still.` | baş-topuk |
| 32 | 38 | `A 38-week fetus, about 49 cm head to heel, full cheeks, rounded body, deeply asleep.` | baş-topuk |
| 33 | 39 | `A 39-week fetus, about 50 cm head to heel, term, smooth skin, fully developed and quiet.` | baş-topuk |
| 34 | 40 | `A full-term newborn at 40 weeks, about 51 cm head to heel, fully formed, peaceful and ready. This is the final frame of the series.` | baş-topuk |

## 6 · Dosya adları

Dosyalar şu adla teslim edilir, başka isim kabul edilmez:

```
hafta-07.png  hafta-08.png  hafta-09.png  ...  hafta-39.png  hafta-40.png
```

Hafta numarası **iki basamaklıdır** (`hafta-07`, `hafta-40`).

## 7 · Üretimden sonra

1. **Her görsel tek tek gözden geçirilir.** Beğenilmeyen kare yeniden üretilir; seride
   boşluk bırakılmaz.
2. **Üslup kayması kontrol edilir.** 34 görsel yan yana konur; biri diğerlerinden farklı bir
   dünyadan geliyorsa yeniden üretilir.
3. **Erken haftalar ayrıca kontrol edilir.** 7 ila 12. haftalar yenidoğana benziyorsa
   yanlıştır ve yeniden üretilir.
4. Görseller sonra küçültülüp siteye alınır (900 piksel, JPEG). Bunu ajan yapar.

## 8 · Bu belge kimin

Yön ve kararlar Erdem'e aittir. Bu belge onun kararlarını yazıya geçirir; içindeki hiçbir
kural ajanın kendi tercihi değildir. Kaynak kararlar: `docs/KAPSAM.md` ve `docs/GORUNUS.md`.
