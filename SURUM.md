# Sürüm — ajan-cekirdegi

## v0 — 2026-08-15

**Damıtıldığı yer:** Tek bir web projesi, **25 gün** kesintisiz kullanım.
O projede bu sistem sıfırdan doğdu, şişti, ölçüldü ve toparlandı; bu paket **toparlanmış
hâlinden** çıkarıldı.

> ⚠️ **BU SÜRÜM ÖLÇÜLMEDİ.**
> Kaynak projede toparlamanın ardından **iki haftalık kullanım ölçümü** planlanmıştı; bu paket
> o ölçüm **tamamlanmadan** çıkarıldı (proje sahibinin açık talebiyle). Yani şablon, işe
> yaradığı **kanıtlanmış** değil, işe yaradığı **gözlemlenmiş** bir yapıyı taşıyor.
>
> **Pratik sonucu:** İkinci projede bir şey tutmazsa bu beklenen bir durumdur — kural değil,
> **hipotez** olarak uygula. Tutmayanı `SURUM.md`'ye yaz; v1 ondan doğacak.

### İçinde ne var

| Katman | Ne | Durum |
|---|---|---|
| Kapı dosyası | `CLAUDE.md` — otomatik yüklenen, yalnız işaretçi | dolu |
| Süreç kuralları | `AGENTS.md` — §1–§16 | **dolu** (alan bilgisi boş başlık) |
| Günlük kontrol | `docs/REFLEKSLER.md` | 5 evrensel madde + büyüme freni |
| Kayıt iskeleti | devir notu · karar defteri · dersler · olaylar · bekleyenler · sıra · yol haritası | boş şablon |
| Rapor şablonları | görev kaydı · gün başı · gün sonu · **faz kapısı** · olay kaydı | dolu |
| Denetim | 4 betik, hepsinin **`sinav`** komutu var | dolu, parametreli |
| Mekanik ağ | commit öncesi dal kancası · oturum açılış ekranı | dolu |
| İnsan sayfası | `NEREDE-KALDIK.md` | boş şablon |

### Kaynak projeden ÖLÇÜLMÜŞ sayılar

Bunlar şablonun **gerekçesidir**, vaadi değil:

- Kural dosyası 23 günde **479 → 1437** satır (3 kat); dersler 14 günde **144 → 1193** (8 kat).
- Gün başı zorunlu okuma yükü **298 KB**'a ulaştı (~93 bin kelime birimi).
- Ekleme/silme oranı: kural dosyası **+1498 / −77**; dersler **+1193 / −5**.
- 69 dersin **23'ü** aynı ilkenin tekrarıydı.
- Bir ders başlığı birebir *"…üçüncü kez düşüldü"* diyordu — **kuralı yazmak tekrarını
  önlemiyordu.**
- Toparlamadan sonra okuma yükü **%32–36** düştü.

### Neden bu şablon "çıkar" fiiliyle geliyor

Kaynak projede **en pahalı yapısal hata** buydu: sisteme her şey **eklendi**, hiçbir şey
**çıkarılmadı**. Bu yüzden şablon **ilk günden**: büyüme freni · tavan · emeklilik kuralı ·
"okuma listesinden çıkarmadan önce ölç" kuralı ile geliyor. Bunlar sonradan eklenirse geç kalır.

### Geri akış — şablon nasıl güncel kalır

**Her faz kapısında ve her 10. gün sonunda tek soru sorulur:**
*"Bu turda çıkan derslerden hangisi projeden bağımsız?"*
Cevap varsa şablona işlenir ve **sürüm artar**.

> **Takvime bağlı gözden geçirme BİLEREK kullanılmadı.** Kaynak projenin kural dosyasının son
> satırında *"Gözden geçirme sıklığı: ayda bir"* yazıyordu ve **23 gün boyunca uygulanmadı**.
> O projede başarısız olan tam olarak **takvime bağlı** işlerdi; **tetiğe bağlı** olanlar
> (gün sonu, faz kapısı) çalıştı.

### Sürüm geçmişi

| Sürüm | Tarih | Ne değişti | Hangi projeden |
|---|---|---|---|
| v0 | 2026-08-15 | İlk damıtma | [kaynak proje] |

### Hangi projede hangi sürüm var

| Proje | Sürüm | Kurulum tarihi | Not |
|---|---|---|---|
| | | | |
