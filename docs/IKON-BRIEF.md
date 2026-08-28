# babyPEÇE — benzetme ikonları · üretim brifingi

> **Bu belge olduğu gibi bir görsel üretim modeline verilmek üzere yazılmıştır.**
> Baştan sona okunmalı; liste en sonda.

---

## 1 · Ne üretilecek

**34 küçük ikon.** Her biri bir meyve, sebze ya da yiyecek. Bunlar bir hamilelik sitesinde
*"bu hafta bebek yaklaşık bir üzüm kadar"* cümlesinin **yanında** duracak.

Benzetmelerin hepsi NHS'in hafta sayfalarından alınmıştır; **liste değiştirilemez**, meyve
eklenip çıkarılamaz.

## 2 · Nerede görünecekler

Sitenin zemini **neredeyse siyah, sıcak tonda** (#0A0603). İkon **58 piksellik yuvarlak bir
alanda**, hafif amber bir ışık halesinin içinde duruyor. Yani:

- **Arka plan ŞEFFAF olmalı** (PNG). Beyaz ya da renkli zemin sitede kutu gibi görünür.
- **Karanlık zeminde okunmalı.** Çok koyu renkli bir ikon kaybolur.
- **58 pikselde tanınmalı.** Bu, en sert kısıttır: ayrıntı değil **siluet** taşır.

## 3 · Üslup

Aynı sitede halihazırda 34 haftalık gelişim görseli var ve bu ikonlar **onlarla aynı elden
çıkmış gibi** durmalı: yumuşak, yarı gerçekçi 3B render, mat yüzey, **sol üstten tek yumuşak
ışık**, sert gölge yok.

**Palet dar tutulur.** Sitenin renkleri: koyu amber `#8A4A20`, amber `#D98B45`, açık amber
`#F7D3A6`, krem `#FFF3E4`. İkonlar bu sıcak aralıkta kalmalı; nesnenin kendi rengi korunur
ama **doygunluğu düşürülür** ve sıcağa çekilir. Parlak yeşil, parlak kırmızı, neon yok.

## 4 · Teknik zorunluluklar

1. **Kare, 512 × 512 piksel, şeffaf arka planlı PNG.**
2. **Tek nesne, ortada**, çerçevenin %70'ini geçmeyecek şekilde, etrafında boşluk.
3. **Zemin gölgesi yok**, tabak yok, kâse yok, masa yok, el yok, dekor yok.
4. **Metin yok**, ölçü çizgisi yok, filigran yok.
5. **Sap ve yaprak**, nesneyi tanınır kılıyorsa kalır (ananasın tepesi, pırasanın yeşili).
6. **Kesit yok** — nesne bütün hâliyle gösterilir.
7. **Üslup 34 ikonda aynı kalır.**

## 5 · Sabit üslup bloğu

`{{NESNE}}` dışındaki her şey **34 üretimde birebir aynı** kalır.

```text
A single object rendered as a soft, semi-realistic 3D icon on a fully
transparent background. Matte surfaces, rounded soft forms, one gentle light
from the upper left, no harsh shadows, no ground shadow. Warm muted palette:
deep amber, amber, pale amber and cream. Keep the object's own colour but
desaturate it and pull it toward warm; no bright greens, no bright reds,
no neon. The object is centered with generous empty margin and fills no more
than 70 percent of the frame. Whole object, not a cross-section. No plate,
no bowl, no table, no hand, no props, no text, no watermark.

The icon must stay recognisable when shown at 58 pixels: strong simple
silhouette, minimal surface detail.

OBJECT: {{NESNE}}

Square 1:1, 512x512, transparent background PNG.
```

## 6 · Liste

| Dosya | Hafta | Benzetme | `{{NESNE}}` |
|---|---|---|---|
| `ikon-07.png` | 7 | üzüm | `a single grape` |
| `ikon-08.png` | 8 | ahududu | `a single raspberry` |
| `ikon-09.png` | 9 | çilek | `a single strawberry` |
| `ikon-10.png` | 10 | küçük kayısı | `a single apricot` |
| `ikon-11.png` | 11 | incir | `a single fresh fig` |
| `ikon-12.png` | 12 | erik | `a single plum` |
| `ikon-13.png` | 13 | şeftali | `a single peach` |
| `ikon-14.png` | 14 | kivi | `a whole kiwi fruit` |
| `ikon-15.png` | 15 | elma | `a single apple` |
| `ikon-16.png` | 16 | avokado | `a whole avocado` |
| `ikon-17.png` | 17 | nar | `a whole pomegranate` |
| `ikon-18.png` | 18 | dolmalık biber | `a single bell pepper` |
| `ikon-19.png` | 19 | domates | `a single large beef tomato` |
| `ikon-20.png` | 20 | muz | `a single banana` |
| `ikon-21.png` | 21 | havuç | `a single carrot with its top trimmed` |
| `ikon-22.png` | 22 | tatlı patates | `a single sweet potato` |
| `ikon-23.png` | 23 | büyük mango | `a single large mango` |
| `ikon-24.png` | 24 | mısır koçanı | `a corn cob with the husk peeled back` |
| `ikon-25.png` | 25 | kabak | `a single courgette (zucchini)` |
| `ikon-26.png` | 26 | salatalık | `a single cucumber` |
| `ikon-27.png` | 27 | karnabahar | `a whole head of cauliflower` |
| `ikon-28.png` | 28 | patlıcan | `a single aubergine (eggplant)` |
| `ikon-29.png` | 29 | kestane kabağı | `a single butternut squash, long-necked and pale tan` |
| `ikon-30.png` | 30 | lahana | `a whole round cabbage` |
| `ikon-31.png` | 31 | hindistan cevizi | `a whole brown coconut` |
| `ikon-32.png` | 32 | demet kereviz | `a bunch of celery stalks` |
| `ikon-33.png` | 33 | ananas | `a whole pineapple with its crown` |
| `ikon-34.png` | 34 | kavun | `a whole cantaloupe melon, netted rind` |
| `ikon-35.png` | 35 | bal kavunu | `a whole honeydew melon, smooth pale rind` |
| `ikon-36.png` | 36 | marul | `a head of romaine lettuce, long upright leaves` |
| `ikon-37.png` | 37 | pırasa | `a single leek with its green top` |
| `ikon-38.png` | 38 | ravent sapı | `a single stick of rhubarb` |
| `ikon-39.png` | 39 | karpuz | `a whole watermelon, oval and striped` |
| `ikon-40.png` | 40 | balkabağı | `a whole round pumpkin with a stem, NOT carved` |

## 7 · İki nesne birbirine karışmamalı

**29. hafta kestane kabağı** (*butternut squash*) uzun boyunlu ve soluk devetüyü rengindedir.
**40. hafta balkabağı** (*pumpkin*) yuvarlak, dilimli ve turuncudur. **İkisi 58 pikselde
birbirinden ayırt edilebilmelidir.** Balkabağı **oyulmuş cadılar bayramı kabağı olmayacak.**

## 8 · Üretimden sonra

1. **Hepsi yan yana konup bakılır.** Biri diğerlerinden farklı bir dünyadan geliyorsa yeniden
   üretilir.
2. **58 piksele küçültülüp bakılır.** Tanınmayan ikon yeniden üretilir; bu ikonların tek işi
   o boyutta çalışmak.
3. **Şeffaflık kontrol edilir.** Beyaz zeminli çıkan dosya kullanılamaz.
4. Ajan küçültüp siteye alır ve emoji kullanımını tamamen kaldırır.

## 9 · Bu belge kimin

Benzetme listesi NHS kaynaklıdır ve `docs/OLCULER.md`'de kaynak cümleleriyle yazılıdır.
Üslup kararları `docs/GORUNUS.md`'ye dayanır. Üretimi Erdem yapar, her ikonu tek tek onaylar.
