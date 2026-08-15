# ajan-cekirdegi

Bir yapay zekâ ajanıyla **kayıtlı, denetlenebilir ve devredilebilir** biçimde çalışmak için
proje başlangıç şablonu. Konu fark etmez — içindekiler **süreç** kurallarıdır, alan bilgisi değil.

**Sürüm: v0** · Tek bir projeden 25 günlük kullanımdan damıtıldı · **ikinci bir projede
denenmedi** (bkz. `SURUM.md`).

---

## Ne çözer

Bir ajanla uzun süre çalışınca üç şey olur ve üçü de sessizce olur:

1. **Oturum kapanınca bilgi kaybolur.** Sohbetin bağlamı dolar, yeni oturum sıfırdan başlar.
2. **Notlar şişer.** "Ajan unutmasın" diye yazılan her şey birikir; birikince okunmaz olur ve
   **tam da önlemek istediğin unutmayı kolaylaştırır.**
3. **Kurallar sessizce çürür.** Bir özellik kalkar, onu anan kural kalır ve yanlış talimat
   vermeye devam eder.

Bu paket üçüne de mekanik cevap verir: **devir notu** · **büyüme freni ve tavanlar** ·
**bayat kural taraması**.

## Kurulum

1. Bu klasörü projenin köküne kopyala (`.git`'i kopyalama).
2. **`KURULUM.md`'yi aç ve anketi doldur.** `Belirlenecek` kalmayana kadar işe başlanmaz —
   bu bir kapıdır, süs değil.
3. `npm run kanca:kur` · `npm run denetim:sinav` (**4/4** geçmeli).

## İçindekiler

| Dosya | Kime yazılmış | Ne işe yarar |
|---|---|---|
| `KURULUM.md` | **insana** | Anket (kapı) + kurulum listesi |
| `NEREDE-KALDIK.md` | **insana** | Proje sahibinin tek sayfası — teknik terim yok |
| `CLAUDE.md` | ajana | Otomatik yüklenen kapı dosyası — **yalnız işaretçi**, 60 satır tavanı |
| `AGENTS.md` | ajana | Bağlayıcı süreç kuralları (§1–§16) |
| `docs/REFLEKSLER.md` | ajana | Günlük kontrol listesi + büyüme freni |
| `docs/DEVIR-NOTU.md` | ajana | Oturumlar arası **tek giriş kapısı** |
| `docs/sablonlar/` | ajana | Görev kaydı · gün başı · gün sonu · **faz kapısı** · olay kaydı |
| `scripts/` | makineye | 4 denetim betiği, hepsinin **`sinav`** komutu var |
| `scripts/kancalar/pre-commit` | makineye | Korunan dala kod commit'ini **reddeder** |

## Üç fikir

**1. Faz kapıları — her kapının ölçütü bir sayının sıfır olması.**
*"Tasarım yapıldı mı"* tartışılır; *"görseli onaylanmamış ekran sayısı sıfır mı"* tartışılmaz.
Tasarım → plan → kararlar → **ancak o zaman** kod. (`AGENTS.md` §5.0.1)

**2. Kural yaşam döngüsü — sistemde "çıkar" fiili de var.**
Kural nasıl doğar, nasıl emekli olur, tavanı ne. **Zaman geçmesi emeklilik sebebi değildir** —
en pahalı kurallar doğaları gereği seyrek tetiklenir. (`AGENTS.md` §16)

**3. Ölçüm aracı kalibre edilmeden çıktısı kanıt değildir.**
Boş sonuç *"yok"* demek değil, *"kalıbım eşleşmedi"* demektir. Bu yüzden **her betiğin
`sinav` komutu vardır** ve bilinen hatalara karşı kendini sınar.

## Ne vaat etmiyor

- **Ölçülmedi.** v0 tek projeden çıktı, ikincisinde denenmedi.
- **Alan bilgisi taşımaz.** Deploy, kimlik doğrulama, form yazımı `⬜ DOLDURULACAK` gelir.
- **Disiplin yerine geçmez.** Yaptığı, ihlali **görünür** kılmaktır.

## Katkı

Her faz kapısında ve her 10. gün sonunda tek soru: *"Bu turda çıkan derslerden hangisi
projeden bağımsız?"* Cevap varsa şablona işlenir, sürüm artar. Takvime bağlı gözden geçirme
**bilerek** yok — kaynak projede başarısız olan tam olarak takvime bağlı işlerdi.
