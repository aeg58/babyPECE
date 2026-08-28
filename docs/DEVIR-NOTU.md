# Devir notu

> **Yeni oturumun TEK giriş kapısı.** Oturum başında ilk okunan, oturum sonunda son yazılan.
> Dosya adı sabittir, üzerine yazılır; **sürüm adında değil, burada** durur.
>
> **TESLİM ÖLÇÜTÜ: yeni oturum bunu okuyup hiçbir şey sormadan devam edebilmeli.**
> Soru sormak zorunda kalıyorsa not eksiktir ve eksiklik, **notu yazan oturuma** aittir.

**Sürüm:** v1 · **Yazıldığı an:** 2026-08-28 20:50 +03 *(ölçülerek yazıldı)*

---

## 1 · Nerede kaldık — tek cümle

Sistem kuruldu (Faz 0 bitti); **proje hakkında henüz hiçbir şey konuşulmadı.**

## 2 · İLK YAPILACAK İŞ — tek iş

**Faz 1 · Fikir turu.** Soruları `docs/KAPSAM.md` taşır. Çıktısı: tek cümlelik iş tanımı,
bitiş tanımı ("neyi görünce oldu denecek") ve ilk dış bekleyişler.

**Başlatma kararı Erdem'indir.** Ajan Faz 1'i önerir, kendiliğinden başlatmaz.

## 3 · Devredilen açık uçlar

| Uç | Sahibi | Durum |
|---|---|---|
| Tek cümlelik iş tanımı + bitiş tanımı | Erdem | ertelendi — vade: **Faz 1** |
| İlk dış bekleyişler (kimden ne bekleniyor) | Erdem | ertelendi — vade: **Faz 1** |
| Varlık kaynakları: bilgi · görünüş · kimlik (üçü ayrı) | Erdem | ertelendi — vade: **Faz 2** |
| Yedek: nerede, kim alır, **içi nasıl doğrulanır** | Erdem | ertelendi — vade: **Faz 3** |
| Kayıt numara öneki | — | **konu dışı** — görev kayıtları modülü kapalı |
| Eşzamanlı oturum sayısı | — | **konu dışı** — paralel oturum modülü kapalı |

**Vade kapıyı tutmaz, işlemi tutar:** vadesi ileride olan satır bir sonraki fazı bloke etmez;
ama o satıra ihtiyaç duyan tek tek işlem durur. En sert uygulaması: **kaynağı yazılmamış bir
varlık üretilmez** (Faz 2 satırları boşken görsel/kimlik varlığı üretilemez).

## 4 · Bekleyen onaylar

| Kimden | Ne |
|---|---|
| — | yok — kurulumun bütün kararları bu oturumda alındı |

## 5 · Ortam ve sayılar

| | |
|---|---|
| Ölçüm komutları | `./scripts/olcum sinav` · `./scripts/olcum kurulum` · `./scripts/olcum saglik` · `./scripts/olcum ortam` |
| Korunan dal | `main` · iş dalı öneki `is/` |
| Kanca | `.git/hooks/pre-commit` → `scripts/kancalar/pre-commit` (bağlı, **davranışla doğrulandı**) |
| Kod dışı sayılan yollar | `docs/` · `*.md` · LICENSE · `.gitignore` · `ayarlar.conf` — **geri kalan her şey kod** |

*Tavanların doluluğu buraya yazılmaz — `olcum saglik` üretiyor. Makinenin ürettiği liste
devir notunda durmaz.*

## 6 · Kayda geçmemiş ama bilinmesi gereken

**Bunlar kusur değil, bilinçli kararlardır — "düzeltmeye" kalkma:**

1. **Ölçüm araçları modülü KAPALI, ama `scripts/olcum` çalışıyor ve kurulumda kullanıldı.**
   Modülün şartı "beklenen oturum > 10" idi, cevap 5–10 geldi. Kapalı olması, günlük kuralların
   araca **bağlı olmaması** demek; aracın yokluğu demek değil.
2. **`ayarlar.conf` içindeki `KAYIT_ONEKI` satırı yorum satırına alındı.** Boş bırakılsaydı
   kurulum kapısındaki "boş ayar" sayacı takılırdı; uydurma bir önek yazmak ise kurulumun
   "cevabı ajan tamamlamaz" kuralını çiğnerdi. Görev kayıtları modülü açılırsa bu satır geri
   açılır ve önek **Erdem'e sorulur**.
3. **`SURUM.md` içinde iki ⬜ var** — üst kaynağın kendi v1 yayın tarihi. Bizim defterimize
   ait değil, kurulum kapısı da yalnız `CLAUDE.md`'yi sayıyor. Doldurulmayacak.
4. **Depo bu oturumda GitHub'dan yeni çekildi; hiç commit atılmadı.** Çalışma alanındaki
   değişiklikler (`CLAUDE.md`, `ayarlar.conf`, `SURUM.md`, `docs/REFLEKSLER.md`,
   `docs/DEVIR-NOTU.md`) **kaydedilmemiş** durumda. Kayıt ve gönderme Erdem'in isteğine bağlı.

---

**Taşımaz:** kural metni · geçmiş anlatısı · çözüm ayrıntısı · makinenin üretebildiği liste.

**Tazelik:** bu not kurulum bittikten **sonra** yazıldı, bayat değil.
