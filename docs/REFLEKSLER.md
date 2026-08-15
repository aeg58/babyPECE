# Refleksler — ajanın günlük kontrol listesi

> **Ne zaman okunur:** Her `gün başı`nda, **tamamı** (`AGENTS.md` §6 okuma listesi).
> Bölüm 2 ayrıca **kod işine başlarken** okunur.
>
> **İki bölüm, iki derinlik:**
> **Bölüm 1** tek satırlık kontrollerdir — *"yaptım mı?"* diye bakılır.
> **Bölüm 2** aynı tuzakların ayrıntılı kural hâlidir — *"nasıl?"* diye bakılır.
> Ayrıntılı vaka anlatıları **`docs/ogrenilen-dersler.md`**'dedir; bu dosya günlük okunur,
> o dosya **arandığında** bakılır.

## Büyüme freni — bağlayıcı

- **Bölüm 1'in tavanı [proje kararı] YÜRÜRLÜKTEKİ maddedir.** Tavan doluyken yeni madde ancak
  (a) bir eskisi emekli edilerek, ya da (b) iki madde birleştirilerek girer.
- **Numaralar KİMLİKTİR, kaydırılmaz.** Bir madde emekli olduğunda ya da başkasıyla
  birleştiğinde numarası **boş yuva** olarak kalır; kalanlar yukarı çekilmez. Bu yüzden son
  numara ile yürürlükteki madde sayısı farklı olabilir — **normaldir** (`AGENTS.md` §16.3).
- **Emeklilik yalnız üç olayla olur:** makineye devredildi · ölçülerek yapısal olarak
  imkânsızlaştı · ölçümle çürütüldü. **Zaman geçmesi hiçbir koşulda sebep değildir.**
- **Emekli edilen madde silinmez**, `docs/arsiv/emekli-kurallar.md`'ye gerekçesiyle taşınır.
- Bir madde *"dikkatli ol / bil / unutma"* ile **başlayamaz**; *"şunu yaz / şunu ölç / şunu oku"*
  ile başlar. **İhlali gözle görülebilir olmalıdır.**

> ⚠️ **Tavan bir yasak değil, bir KARAR eşiğidir.** Doldu diye madde eklemeyi bırakma —
> ya emekli et, ya birleştir, ya da tavanı **gerekçesiyle ve tarihiyle** yükselt.
> **Sessizce aşmak seçeneklerden biri değildir.**

---

## Bölüm 1 — Günlük kontrol listesi

> Aşağıdaki **beş madde projeden bağımsızdır** ve şablonla birlikte gelir. Kalanını kendi
> projen dolduracak — ve her biri **yaşanmış bir olaydan** doğmalı, tahminden değil.

1. **Commit öncesi:** doğru dalda mıyım, çalışma alanında bana ait olmayan değişiklik var mı?

2. **Ölçüm yapmadan önce: kalıbımı BİLİNEN bir doğruya karşı denedim mi?** Denemediysem, çıkan
   `0` / `temiz` / `boş` sonucu **kanıt değildir** — kırık alet de aynı cevabı verir.
   Aynı disiplin sözleşme okumada da geçerli: bir alanın zorunlu mu opsiyonel mi olduğu
   **tip tanımından** okunur, hatırlanmaz.
   *(Bu, damıtıldığı projedeki en sık ihlal edilen kuraldı — tek oturumda dört kez.)*

3. **"Düzeldi / hızlandı / bozulmadı" demeden önce ÖLÇTÜM MÜ?** Görünür bir davranış iddiası
   rakamla kanıtlanır; düzeltmeden **önce ve sonra** ölçülür. **Yanlış alarm da hatadır.**

4. **Bir adı ararken: "bu ad başka türlü de yazılmış olabilir mi?"** — harf sırası, dil
   karakterleri, tire/alt çizgi, büyük/küçük harf. Boş sonuç *"yok"* değil,
   *"kalıbım eşleşmedi"* demektir.

5. **Bir koruma ağını (kanca, kilit, doğrulama, kısıt) sınayacaksan sınavı TEK KULLANIMLIK bir
   kopyada kur** — geçici depo, ayrı klasör, sahte veri. Gerçek depo/veritabanı/sunucu üzerinde
   sınanan koruma, çalışmadığı anda zararı **doğrudan korunan şeye** verir. Ayrıca **depoda
   yaşayan bir kanca, kendisinden önce açılmış dallarda YOKTUR** — birleşmeden önce koruma
   yok sayılır.

<!-- 6. … buradan itibaren proje kendi maddelerini ekler.
     Her madde: yapılacak bir ADIM + parantez içinde hangi dersten geldiği. -->

---

## Bölüm 2 — Tekrarlayan teknik tuzaklar

> ⬜ **BOŞ GELİR.** Buraya projenin kendi teknoloji yığınında **tekrarlanan** tuzaklar yazılır
> — tahminler değil, **ikinci kez** yaşanmış olanlar (`AGENTS.md` §16.1, kural olmanın 1. şartı).
>
> Biçim: numaralı madde · kalın başlık · ne olduğu · *Yaşanan:* satırı · ne yapılacağı.
> Bölüm 1'deki tek satırlık karşılığı bu maddeye işaret eder.
>
> **Proje bağımsız tek kural:** buraya bir madde, **aynı hata ikinci kez yaşanmadan** girmez.
> İlk seferinde yeri `docs/ogrenilen-dersler.md`'dir.
