# [PROJE ADI] — kapı dosyası

> **Bu dosya kural İÇERMEZ, yalnız işaretçi taşır.** Bağlayıcı kuralların tamamı
> `AGENTS.md`'dedir ve **gün başında baştan sona okunur**. Buraya kural **kopyalanmaz** —
> kopya, güncellenmediği anda sessizce çürür ve kuralların ikinci deposu doğar.
>
> **Tavan: 60 satır.** Aşarsa bir şey buraya değil, `AGENTS.md`'ye aittir.
>
> **Neden bu dosya var:** Yapay zekâ aracının her oturumda **kendiliğinden** yüklediği tek
> dosya budur; `AGENTS.md` ise ancak ajan okumaya *karar verirse* yüklenir. Bu dosya olmadan
> bütün kural mimarisi tek bir varsayıma dayanır: *"ajan gün başı adımını atlamasın."*
> Atlarsa hiçbir şey uyarmaz.

## Proje

[Tek cümlelik tanım — anket 2.]
[Teknoloji yığını — anket 15.] Ortamlar: [yerel] · [test] · [canlı] (anket 7-9).

**[Operasyon sorumlusunun adı] geliştirici [değildir / dir]** — anlatım dili buna göre
kurulur (`AGENTS.md` §12.1/B).

## Önce bunları oku — hiçbiri burada tanımlı değildir

| Konu | Tek doğru kaynak |
|---|---|
| **Oturum türü** — bu oturum ne yapabilir | `AGENTS.md` **§7.1/0**. Ölçüt klasör ya da dal değil, **tetik cümlesidir**; tetik yoksa **sorulur, varsayılmaz** |
| **Çalışma sırası** — tasarım → plan → karar → kod | `AGENTS.md` **§5.0** ve **§5.0.1** (faz kapıları). Görünüşü değişen hiçbir iş doğrudan kodlanmaz |
| **Onay kapıları** — bağlayıcı metinler | `AGENTS.md` **§11.1**. Birebir eşleşme zorunlu; yalnız ortam geçişleri içindir |
| **Bilgi nereye yazılır** | `AGENTS.md` **§4** yönlendirme tablosu |
| **Varlık kaynakları** — veri/tasarım/marka nereden | `AGENTS.md` **§4** "Varlık kaynakları" |
| **Kural nasıl doğar / emekli olur** | `AGENTS.md` **§18** |

## Bilgi nereye yazılır — kısa hâl

Tam tablo **`AGENTS.md` §4**'tedir (bağlayıcı). Özet:

kural → `AGENTS.md` · refleks → `docs/REFLEKSLER.md` (tavanlı) · gerekçe/hikâye →
`docs/ogrenilen-dersler.md` · işe özel karar → görev kaydı · bağlayıcı karar →
`docs/KARAR-DEFTERI.md` · iş sırası → `docs/UYGULAMA-SIRASI.md` · dış bekleyiş →
`docs/BEKLEYENLER-LISTESI.md` · olay ve geri dönülemez işlem → `docs/olay-kayitlari.md` ·
yarına kalan her şey → `docs/DEVIR-NOTU.md` · emekli kural → `docs/arsiv/emekli-kurallar.md`.

**Bir bilgi yalnız bir dosyada güncel hâliyle durur;** ikincisinde ancak işaretçi olur.

## Nereden başlanır

1. **`docs/DEVIR-NOTU.md`** — önceki oturumun bıraktığı **tek giriş kapısı**. İlk okunacak.
2. **`AGENTS.md`** — tamamı, özetten gidilmez.
3. Gün başı okuma listesi, **okundu kanıtı** ve günlük ölçüm: **`AGENTS.md` §7**.

`NEREDE-KALDIK.md` **insana** yazılmıştır — ajan onu günceller, okumaz.
Çelişki hâlinde **`AGENTS.md` geçerlidir.**
