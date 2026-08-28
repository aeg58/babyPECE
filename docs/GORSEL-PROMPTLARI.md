# Görsel promptları — parça 14, 15, 16

> **Yazıldığı tarih: 2026-08-28.** Üretimi **Erdem kendi hesabında** yapar; ajan görsel üretmez.
> **Onaylanmamış görsel siteye girmez** (`docs/KAPSAM.md` › Faz 3 › element 26).
>
> Promptlar İngilizce, çünkü görsel modelleri İngilizce girdiyle belirgin biçimde daha iyi
> çalışıyor. Ne yaptıkları Türkçe açıklanmıştır.

---

## Prompt 1 — Aylık bilimsel gelişim serisi (parça 14)

**On kez çalıştırılır**, her seferinde `{{AY}}` bloğu değiştirilerek. Üslup bloğu **sabit
kalır** — on görselin aynı aileden görünmesini o sağlıyor.

**Anne baba fotoğrafı KULLANILMAZ.** Bu seri o ayki gerçek görünümü anlatır.

```text
A soft, warm, semi-realistic 3D-rendered illustration of human prenatal
development, shown against a clean, empty background with a single gentle
light source. Rounded forms, soft shadows, matte surfaces, muted pastel
palette (warm peach, soft cream, dusty rose). Calm and tender in mood —
never clinical, never frightening, never gory. No text, no labels,
no measurement lines, no medical instruments, no umbilical cord detail.
Centered composition, generous empty space around the subject.
Consistent style across the whole series.

SUBJECT FOR THIS IMAGE:
{{AY}}

Square 1:1 composition. No text anywhere in the image.
```

### `{{AY}}` blokları

| Ay | Yerine yazılacak |
|---|---|
| 1 | `A tiny cluster of cells, smaller than a poppy seed, glowing softly. Abstract and gentle — barely a shape.` |
| 2 | `A very early embryo, about 1.6 cm, curled in a C shape, oversized head, dark eye spots, small tail, limb buds not yet fingers.` |
| 3 | `A small fetus, about 6 cm, tail gone, distinct fingers and toes, large forehead, eyes still closed and wide-set.` |
| 4 | `A fetus about 12 cm, translucent delicate skin, visible fine features, arms and legs in proportion, peaceful curled pose.` |
| 5 | `A fetus about 20 cm, fine downy hair, more defined face, hands near the face.` |
| 6 | `A fetus about 30 cm, eyelids beginning to open, wrinkled reddish skin, thin body.` |
| 7 | `A fetus about 37 cm, rounder cheeks, fat beginning to fill out under the skin.` |
| 8 | `A fetus about 42 cm, fuller and softer body, smoother skin, snug in a curled position.` |
| 9 | `A fetus about 47 cm, plump and full-term in appearance, calm and sleeping.` |
| 10 | `A full-term newborn, about 50 cm, fully formed, peaceful and ready — the very last frame of the series.` |

> **Ölçüler nereden geldi:** gebelik ayına karşılık gelen haftaların yayınlanmış ortalama
> boy değerlerinden. Kesin sayı tablosu ayrıca derlenecek (parça 5); buradaki değerler
> **görselin doğru şeyi çizmesi** içindir, sitede gösterilecek sayı değildir.

---

## Prompt 2 — "Neye benzer" serisi (parça 15)

**On kez çalıştırılır.** Anne babanın fotoğrafları modele referans olarak verilir.

> ⚠️ **İlk üç ay için bu seri bilimsel olarak yanlıştır** — o aşamada yüz diye bir şey yoktur.
> Bu yüzden bu görseller sitede bilimsel serinin yanında **apayrı biçimde** sunulur ve
> yanlarında **"bu bir tahmindir, bilimsel dayanağı yoktur"** ibaresi durur. Bu ibare
> pazarlık konusu değildir: parça 15'in kabul cümlesinin yarısı odur.

```text
Using the two provided parent photographs as reference for facial features
only, create a portrait of their future child. Soft natural window light
from one side, plain warm neutral background, gentle and tender mood.
Photorealistic, shallow depth of field, head and shoulders only. No text.

CHILD'S AGE FOR THIS IMAGE: {{YAS}}
```

`{{YAS}}` için öneri: `a newborn`, `a 6-month-old baby`, `a 1-year-old toddler` … — yani
**ayları bebeğin yaşına** çevirerek. *(Gebelik ayını "çocuk şu an böyle görünüyor" diye
kullanmak yanlış olur; bu seri zaten hayalî, hiç değilse hayal tutarlı olsun.)*

---

## Prompt 3 — "Aramızda" final ekranı ve kimlik işareti (parça 16)

**Tek görsel.** Hem tahmini doğum tarihi geçince beliren son ekranda, hem küçültülmüş hâliyle
sitenin kimlik işareti olarak kullanılır.

```text
Using the two provided parent photographs as reference for facial features
only, create a single photorealistic portrait of a peaceful newborn baby,
around 2 weeks old, sleeping. The baby's features should plausibly blend
characteristics of both parents — face shape, nose, brow. Soft natural
window light from one side, plain warm neutral background, wrapped in a
simple cream blanket. Gentle, tender, quiet mood. Head and shoulders only.
Photorealistic, shallow depth of field. No text.
```

---

## Üretim sonrası — bağlayıcı

1. **Her görsel Erdem tarafından tek tek onaylanır.** Onaysız görsel siteye girmez.
2. **Görseller küçültülür ve kademeli yüklenir** — açılışta yalnız bulunulan ayınki yüklenir.
   Sebep: telefonda 2 saniye hedefi (`docs/KAPSAM.md` › Faz 3 › element 19).
3. **Yüz benzerliği taşıyan görseller açık bir sitede yayınlanacak.** Ablanın ve eşinin
   rızasının alınması Erdem'in sorumluluğundadır.
