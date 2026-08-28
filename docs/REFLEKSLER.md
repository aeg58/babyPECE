# Refleksler — günlük kontrol listesi

> **Okuma listesindedir ve TAVANLIDIR.** Tavan `ayarlar.conf`'ta (`REFLEKS_TAVANI`); sayı
> yalnız orada yazılıdır.
>
> **Buradaki her madde bir eyleme çevrilmiştir.** *"Dikkatli ol"*, *"unutma"*, *"bil ki"* ile
> başlayan bir madde bu listeye giremez — bilgi, kullanım anında kendiliğinden devreye girmez.
>
> **Gerekçeler burada değil, `docs/KURUCU-DERSLER.md`'de.** Her maddenin sonundaki kod oraya
> işaret eder.

---

## Bölüm 1 · Yürürlükteki maddeler

**1. Kayıt işlemeden önce iki şeyi ölç: doğru yerde miyim, ve burada benim olmayan bir
değişiklik var mı?** Yabancı değişiklik varsa **dokunma** — sahibine bırak. *(Paylaşılan
alanda, sırf orada olduğun için sahibi olmadığın işi taşırsın.)*

**2. Bir aracın çıktısını kanıt saymadan önce, onu bilinen bir doğruya karşı sına.**
`0` · `temiz` · `boş` sonucu *"yok"* demek değil, *"kalıbım eşleşmedi"* demektir — **kırık alet
de tam olarak beklenen cevabı verir.** Sıfırdan farklı sonuç da kanıt değildir: **eşleşen satırı
oku**, çünkü eşleşme aradığın şeyin kendisine değil, adına düşmüş olabilir. → A1 · A2

**3. Kayda yazdığın her tarihi ve saati o an ölç.** Bir öncekinden taşıma, ileri yazma.
*Ölçülebilir ihlal: kayda yazılan damga, o kaydı taşıyan işlemin kendi zamanından ileride
olamaz.* → A9

**4. Arka planda başlattığın işin sonucunu görmeden ne teslim yap, ne kapanış al, ne de
"yapıldı" yaz.** → A10

**5. Bir kusur ilan etmeden önce sor: elimdeki ölçüm kusurun KENDİSİNİ mi gösteriyor, yoksa
kusuru önleyeceğini düşündüğüm şeyin yokluğunu mu?** Aynı soru tersten de geçerlidir: bir
dayanağı **bulamamak**, iddianın yanlış olduğunu göstermez — nerelere bakmadığını yaz. → A2 · A3

**6. Onay isterken sor: onaylattığım şey teslim edilecek çıktının kendisi mi, yoksa onu üreten
bir ayar mı?** Ayarsa çıktıyı **ayrıca** sun. Onaydan sonra onaylanan şeyin ölçüsünü ya da
biçimini kendiliğinden değiştirme; kusur görürsen **söyle**, kararı sahibi versin. → A15 · A16

**7. Bir işi kapsam dışı bırakırken hangisi olduğunu yaz: "yapılmayacak" mı, "şimdi
yapılmayacak" mı?** *"Şimdi değil"* diyorsan cümle **yetmez** — iş açık bir listeye satır olarak
çıkar. Kapanmış bir kaydın içine gömme. → A12

**8. Reddedilen, iptal edilen ya da yarıda kalan bir işlemin ardından yan etkisini ölç.**
*"Hata verdi ve durdu"* ile *"hiçbir şey olmadı"* aynı şey değildir. → A7

**9. Çalışma alanının dışına çıkacak bir sayı yazarken sor: bu sayıyı ÖLÇTÜM MÜ, hesapladım
mı?** Hesap, ancak bağımsız ikinci bir ölçümle karşılaştırıldıysa geçer. → A2

**10. Geri dönülemez bir işlemden önce yedeğin İÇİNİ say.** *"Yedek alındı"* yeterli değil;
içinde ne olduğu ölçülür ve sayı kayda yazılır. *(Boş yedek de hatasız "başarılı" der.)* → A1

**11. Bir ölçüm yaparken hangi zemini ölçtüğünü yaz.** Zemin değişiyorsa önce sabitle —
değişmekte olan bir hedef üzerinde alınan sayı tekrarlanabilir değildir. → A4

**12. Bir kayıt atmadan önce, o oturumda dosya yazdıysan atıf denetimini çalıştır.**
*Ölçülebilir ihlal: kayıttan sonra çalıştırılan denetimde kırık atıf çıkması.*
*(2026-08-28'de doğdu: devir notuna olmayan bir dosyaya atıf yazıldı ve ölçülmeden kayda girdi.)*

---

## Büyüme freni

**Tavan bir yasak değil, bir KARAR EŞİĞİDİR.** Dolduğunda üç seçenek vardır ve **sessizce
aşmak bunlardan biri değildir:**

**(a)** bir maddeyi emekli et · **(b)** iki maddeyi birleştir · **(c)** tavanı **gerekçesiyle
ve tarihiyle yazarak** yükselt.

> **(c) bir BORÇ doğurur ve borç aynı gün kapanır:** yükseltmeyle birlikte bir **ayıklama turu**
> yapılır (emekli et · birleştir · makineye devret) ve turun dökümü aşağıya yazılır.
> **Reddedilen birleştirmeler de yazılır** — yoksa her turda yeniden önerilir.
>
> Ayıklama tavanı geri çekmez: **tavanın işlevi sıkıştırmak değil, büyümeyi görünür kılmaktır.**
> Ölçülmeden yazılmış bir tavan da geri çekilemez — yalnızca yanlış bir sayıdır.

**İki şey ayrı ölçülür:** madde sayısı ve satır sayısı. Madde sayısı sabitken satırlar şişebilir.

### Tavan geçmişi

| Tarih | Eski | Yeni | Gerekçe | Ayıklama turunun dökümü |
|---|---|---|---|---|
| 2026-08-28 kurulum | — | `ayarlar.conf` › `REFLEKS_TAVANI` ve `REFLEKS_SATIR_TAVANI` | ilk değer, kurulumda belirlendi | — |
| 2026-08-28 | 90 | `ayarlar.conf` › `DEVIR_TAVANI` | **Devir notu (`DEVIR_TAVANI`).** Faz 0+1 tek oturumda bittiği için not 88/90'a çıktı; iki fazın kararları aynı nota sığmıyor. Erdem yükseltti | **Ayıklama turu yapıldı, aynı gün:** ① `SURUM.md` boş işaret maddesi `KAYIT_ONEKI` maddesiyle BİRLEŞTİRİLDİ (ikisi de "şablon artığı, düzeltme") ② tahmini doğum tarihi maddesi `docs/KAPSAM.md`'ye işaretçiye İNDİRİLDİ (bilgi orada tek kaynakta duruyordu) · **REDDEDİLEN birleştirme:** "ölçüm araçları kapalı ama araç çalışıyor" ile `KAYIT_ONEKI` maddesi — ikisi de kapalı modül artığı ama biri *aracı kullanabilirsin* diyor, diğeri *bu satıra dokunma* diyor; birleşince hangisine ne yapılacağı bulanıklaşıyor |

---

## Bölüm 2 · Emekli maddeler

**Numaralar kimliktir — kaydırılmaz.** Bir madde emekli olursa yuvası **boş kalır** ve numarası
bir daha kullanılmaz. *(Kaydırılan numara, depodaki bütün atıfları sessizce yanlış maddeye
yöneltir.)*

**Emeklilik yalnız üç olayla olur:** makineye devredildi · dayandığı şey kalktı · ölçülerek
yanlış çıktı. **Zaman geçmesi emeklilik sebebi değildir** — en pahalı maddeler doğaları gereği
seyrek tetiklenir.

| # | Madde | Emeklilik olayı | Tarih | Nereye taşındı |
|---|---|---|---|---|
| — | *(henüz yok)* | | | |

---

## Yeni madde eklerken

1. **Dersi önce `docs/KURUCU-DERSLER.md`'ye yaz** — orası tavansızdır, beklemez.
2. **Refleks satırı AYRI bir karardır.** Tavan doluysa ders yine kayıtlıdır ve sırasını bekler;
   *"refleks yeri yok"* bir dersi yazmamanın gerekçesi olamaz.
3. **Cümle "şunu yap" ya da "şunu ölç" ile başlamalı.** Başlamıyorsa henüz refleks değildir.
4. **İhlali nasıl görüleceğini yaz.** Görülemiyorsa madde temenni olur.
