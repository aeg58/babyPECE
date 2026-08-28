# Sürüm

## v1 — ⬜ tarih

**Damıtıldığı yer:** tek bir web projesi, **~7 hafta** kesintisiz kullanım. Sistem orada
sıfırdan doğdu, şişti, ölçüldü; v0 bu deneyimden çıkarıldı ve v1, **v0'ın ölçülerek
denetlenmiş** hâlidir.

> ⚠️ **BU SÜRÜM İKİNCİ BİR İŞTE DENENMEDİ.** Kural değil, **hipotez** olarak uygula.
> Tutmayanı `docs/KURUCU-DERSLER.md`'ye yaz; v2 ondan doğacak.

### v0 → v1: neden yeniden yazıldı

v0 hiç kullanılmadan denetlendi ve **kendi teşhisine yakalandığı ölçüldü**:

| Ölçüm | v0 | v1 |
|---|---|---|
| Bölüm atfı, olmayan hedefe giden | **29 / 101 (%28)** | numarayla atıf **kaldırıldı** |
| Kurulum sınavı | **3/4** — kapı ilk gün açılmıyordu | **13/13**, sahte veriyle |
| Korunan dala kod kaydı | `master` · Python · Go · Rust · HTML **geçiyordu** | hepsi **durduruluyor** |
| Oturum açılış satırı | gün başı raporunu **hiç bulamıyordu** | ölçüldü, doğru |
| Git hatası | **"temiz"** sayılıyordu (üç yerde) | **`✋ ELLE`**, asla `✔` |
| Aynı tavan için değer | **3 farklı** (biri kaynak projenin satır sayısı) | tek kaynak: `ayarlar.conf` |
| Kayıt numarası kalıbı | yıl gömülü — sonraki yılda **çift kayıp** | yıldan bağımsız |
| Kural dosyası | 2 dosya · 42.109 B | 1 dosya · ~13.300 B |

### v1'de yeni olanlar

- **Yedi fazlı kuruluş akışı** (`docs/KAPSAM.md`): fikir → iş kapsamı → **teknik kapsam** →
  tasarım → karar → sıra → yapım. v0 projeyi zaten var sayıyordu.
- **Teknik kapsamın 27 elementi**, altı kolda; sıra **kilitlemeye** göre, maliyet ayırıcı.
- **Vadeli defter**: `Belirlenecek` kaldırıldı; `cevaplı` · `ertelendi + vade` · `konu dışı +
  gerekçe` — üçü de karar. Cevapsız satır kapıyı tutmaz, **kendisine ihtiyaç duyan işlemi** tutar.
- **Modül sistemi**: 9 modül, açılma şartları ölçülebilir. v0 *"kullanmayacağını sil"* diyordu
  ama neyi sileceğini soran yoktu.
- **Kalibrasyon**: sayaçlara bilerek bozuk örnek verilip **buldukları** ölçülüyor.
- **`docs/ELLE-DENETIM.md`**: kabuksuz ve kodsuz projeler için eşdeğer mod.

### v1'de BİLEREK olmayanlar

- **Oturum kapanma ölçütü ve bağlam tetiği yok.** Oturumun ne zaman kapanacağına ve bağlam
  takibine **çalışmanın sahibi** karar verir; ajan ölçüt üretmez, hatırlatmaz, önermez.
- **Takvime bağlı gözden geçirme yok.** Damıtıldığı çalışmada başarısız olan tam olarak
  takvime bağlı işlerdi; **tetiğe bağlı** olanlar çalıştı.

### Sürüm geçmişi

| Sürüm | Tarih | Ne değişti |
|---|---|---|
| v0 | 2026-08-15 | İlk damıtma. `v0` etiketiyle dondurulmuş, silinmedi |
| v1 | ⬜ | Denetim, yeniden yazım, kuruluş fazı, modül sistemi |

### Hangi projede hangi sürüm var

| Proje | Sürüm | Kurulum tarihi | Not |
|---|---|---|---|
| | | | |
