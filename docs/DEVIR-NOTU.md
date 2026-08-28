# Devir notu

> **Yeni oturumun TEK giriş kapısı.** Oturum başında ilk okunan, oturum sonunda son yazılan.
> Dosya adı sabittir, üzerine yazılır; **sürüm adında değil, burada** durur.
>
> **TESLİM ÖLÇÜTÜ: yeni oturum bunu okuyup hiçbir şey sormadan devam edebilmeli.**
> Soru sormak zorunda kalıyorsa not eksiktir ve eksiklik, **notu yazan oturuma** aittir.

**Sürüm:** v1 · **Yazıldığı an:** 2026-08-28 21:44 +03 *(ölçülerek yazıldı)*

---

## 1 · Nerede kaldık — tek cümle

**Faz 0 ve Faz 1 bitti:** sistem kuruldu, fikir sahibinin kelimeleriyle sabitlendi, çapa tarihi
ölçüldü. **Faz 2 (iş kapsamı) hiç konuşulmadı** — henüz tek bir parça çıkarılmadı.

## 2 · İLK YAPILACAK İŞ — tek iş

**Faz 2 · İş kapsamı.** Yürütme talimatı `docs/KAPSAM.md`'de. Fikir sayılabilir parçalara
ayrılacak; her parçanın **kabul cümlesi** yazılacak.

**Faz 2'nin ilk ölçümü birleştirme eşiğidir:** *parça ≤ 3 VE gösterilebilir parça ≤ 1* ise
Faz 2·3·5·6 tek tabloda yürür. Bu iş **görsel bir site** olduğu için gösterilebilir parça
sayısının 1'i aşması bekleniyor — ama **tahmin değil, sayım** karar verir.

**Başlatma kararı Erdem'indir.** Ajan önerir, kendiliğinden başlatmaz.

## 3 · Devredilen açık uçlar

| Uç | Sahibi | Durum |
|---|---|---|
| Varlık kaynakları: bilgi · görünüş · kimlik (üçü ayrı) | Erdem | ertelendi — vade: **Faz 2** |
| Yedek: nerede, kim alır, **içi nasıl doğrulanır** | Erdem | ertelendi — vade: **Faz 3** |
| Doktorun **kendi** tahmini doğum tarihi | Erdem | iyileştirme — bekleyiş değil, iş onsuz durmaz |
| 6h4g teorik hesaptan mı ultrason ölçümünden mi | Erdem | ultrason varsayıldı; farklı çıkarsa günler kayar |
| Kayıt numara öneki | — | **konu dışı** — görev kayıtları modülü kapalı |
| Eşzamanlı oturum sayısı | — | **konu dışı** — paralel oturum modülü kapalı |

**Vade kapıyı tutmaz, işlemi tutar:** vadesi ileride olan satır bir sonraki fazı bloke etmez;
ama o satıra ihtiyaç duyan tek tek işlem durur. **Kaynağı yazılmamış varlık üretilmez** —
Faz 2 satırları boşken görsel ya da kimlik varlığı üretilemez.

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

1. **docs/FIKIR.md BİLEREK açılmadı** *(bağlantı biçiminde yazılmıyor — olmayan dosyaya
   atıf üretir).* Şablonun kendi içinde bir tutarsızlık var: `KURULUM.md` defteri iş tanımını
   oraya yazdırıyor, `docs/KAPSAM.md` ise aynı bilgiyi kendi
   dört slotluk tablosuna yazdırıyor. İkisine birden yazmak *"bir bilgi yalnız bir dosyada
   durur"* kuralını çiğnerdi. **Tek kaynak `docs/KAPSAM.md` seçildi**; `CLAUDE.md` oraya
   işaretçi veriyor. Bu, şablonun v2'sine taşınacak bir ders adayıdır.
2. **Ölçüm araçları modülü KAPALI, ama `scripts/olcum` çalışıyor ve kullanılıyor.** Şartı
   "beklenen oturum > 10" idi, cevap 5–10 geldi. Kapalı olması aracın yokluğu demek değil.
3. **Şablondan gelen iki artık, ikisi de bilerek öyle:** `ayarlar.conf`'taki `KAYIT_ONEKI`
   satırı yorum satırına alındı (görev kayıtları modülü kapalı, uydurma değer yazılmadı);
   `SURUM.md`'deki iki boş işaret ise üst kaynağın kendi v1 yayın tarihi — bizim değil.
4. **Uzak depo değişti.** `origin` artık `aeg58/babyPECE` (**gizli**); şablon deposu `sablon`
   adıyla duruyor. "Uzak depo ve inceleme" modülü yine de **kapalı** — şartı ≥2 kişi ve iş
   tek kişilik.
5. **Çapa tarihinin bilinen belirsizlikleri `docs/KAPSAM.md` › *Faz 1 · ÇAPA TARİHİ*'nde
   yazılı** — tahmini doğum tarihi hesaplandı, ölçülmedi. Buraya kopyalanmıyor.


---

**Taşımaz:** kural metni · geçmiş anlatısı · çözüm ayrıntısı · makinenin üretebildiği liste.

**Tazelik:** bu not kurulum bittikten **sonra** yazıldı, bayat değil.
