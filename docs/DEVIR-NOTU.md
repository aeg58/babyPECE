# Devir notu

> **Yeni oturumun TEK giriş kapısı.** Oturum başında ilk okunan, oturum sonunda son yazılan.
> Dosya adı sabittir, üzerine yazılır; **sürüm adında değil, burada** durur.
>
> **TESLİM ÖLÇÜTÜ: yeni oturum bunu okuyup hiçbir şey sormadan devam edebilmeli.**
> Soru sormak zorunda kalıyorsa not eksiktir ve eksiklik, **notu yazan oturuma** aittir.

**Sürüm:** v1 · **Yazıldığı an:** 2026-08-28 22:30 +03 *(ölçülerek yazıldı)*

---

## 1 · Nerede kaldık — tek cümle

**Faz 0, 1, 2 ve 3 bitti:** sistem kuruldu, fikir sabitlendi, 13 parça kabul cümleleriyle
çıkarıldı, 27 teknik elementin hepsi karara bağlandı. **Tek satır kod yazılmadı.**

## 2 · İLK YAPILACAK İŞ — tek iş

**Faz 4 · Tasarım.** Kapı ölçütü: *gösterilebilir olup örneği onaylanmamış parça = 0.*
13 parçanın **10'u gösterilebilir** — yani Faz 4'ün yükü büyük.

Faz 4'te aynı anda kapanacak üç ertelenmiş satır var: **görünüş kaynağı**, **kimlik işareti**,
ve iki yazılı gerilim (2 saniye ↔ zengin 3B · 3B hareket ↔ bulantı riski).

**Başlatma kararı Erdem'indir.** Ajan önerir, kendiliğinden başlatmaz.

## 3 · Devredilen açık uçlar

| Uç | Sahibi | Durum |
|---|---|---|
| Görünüş kaynağı — ajan örnek hazırlar, Erdem seçer | Erdem | ertelendi — vade: **Faz 4** · **yasak:** hiçbir görsel varlık üretilmez |
| Kimlik işareti (babyPECE simgesi) | Erdem | ertelendi — vade: **Faz 4** |
| Gerilim: telefonda 2 sn ↔ "zengin üç boyutlu" | ajan → Erdem | Faz 4'te **ölçülecek**; çözülmezse Erdem'e geri gelinir |
| Risk: 3B hareket ↔ hamilelikte bulantı | ajan → Erdem | Faz 4'te sakin varsayılan **gösterilecek** |
| Özel alan adı | Erdem | ertelendi — site bitip beğenilince · **yasak:** alan adına bağlı hiçbir iş |
| Test araçları ve kapsam oranı | ajan | ertelendi — ilk kırılmadan sonra |
| "Başarı" tanımı (izleme) | ajan | ertelendi — site ilk yayına çıkınca · **yasak:** ölçüm kodu eklenmez |
| Doktorun **kendi** tahmini doğum tarihi | Erdem | iyileştirme — bekleyiş değil, iş onsuz durmaz |

**Vade kapıyı tutmaz, işlemi tutar.** Yukarıdaki *yasak* sütunları hangi işin durduğunu söyler.

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

1. **DEPO AÇIK (public) ve bu tek yönlü bir kapıydı.** Erdem 2026-08-28'de birebir
   `ONAYLIYORUM` yazarak onayladı. Gerekçe: GitHub Free planında **gizli depodan Pages yayını
   yapılamıyor** (doğrulandı). Açılan içerik: ham görüşme kaydı, çapa tarihi, ablasının
   hamileliği, Erdem'in adı, bütün kayıt geçmişi. **Geri dönüş yolu yok** — gizliye çevirmek
   ne kopyalanmış içeriği geri getirir ne siteyi ayakta tutar. Ajan uyardı, Erdem üstlendi.
   Ayrıntı ve alternatifler: `docs/KAPSAM.md` › Faz 3 › element 5.
2. **docs/FIKIR.md BİLEREK açılmadı** *(bağlantı biçiminde yazılmıyor — olmayan dosyaya atıf
   üretir)*. `KURULUM.md` defteri iş tanımını oraya yazdırıyor, `docs/KAPSAM.md` ise kendi
   tablosuna. İkisine birden yazmak *"bir bilgi tek dosyada durur"* kuralını çiğnerdi.
   **Tek kaynak `docs/KAPSAM.md`.** Şablonun v2'sine taşınacak ders adayı.
3. **"Gün gün" ölçü değil SAYIM.** Yayınlanmış bilimsel veri haftalık; ara gün değeri
   üretilmeyecek. Gün sayısı ve geri sayım günlük işler, boy/ağırlık/meyve haftalık kalır.
4. **Şablondan gelen iki artık, ikisi de bilerek öyle:** `ayarlar.conf`'taki `KAYIT_ONEKI`
   yorum satırına alındı; `SURUM.md`'deki iki boş işaret üst kaynağın kendi yayın tarihi.
5. **Ölçüm araçları modülü KAPALI ama `scripts/olcum` çalışıyor ve kullanılıyor.**
6. **Uzak depo `aeg58/babyPECE`**; şablon deposu `sablon` adıyla duruyor.
7. **Çapa tarihinin belirsizlikleri `docs/KAPSAM.md` › Faz 1'de yazılı** — tahmini doğum
   tarihi hesaplandı, ölçülmedi.


---

**Taşımaz:** kural metni · geçmiş anlatısı · çözüm ayrıntısı · makinenin üretebildiği liste.

**Tazelik:** bu not kurulum bittikten **sonra** yazıldı, bayat değil.
