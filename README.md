# proje-cekirdegi

Bir yapay zekâ ajanıyla **kayıtlı, denetlenebilir ve devredilebilir** biçimde çalışmak için
proje kurulum ve ilerleyiş sistemi.

Konu fark etmez — içindekiler **süreç** kurallarıdır, alan bilgisi değil. Yazılım projesi,
içerik işi, veri çalışması, üç günlük küçük bir iş: hepsi kurar.

**Sürüm: v1** · Tek bir çalışmadan ~7 haftalık kullanımdan damıtıldı · **ikinci bir işte
denenmedi** (bkz. `SURUM.md`).

---

## Ne çözer

Bir ajanla uzun süre çalışınca dört şey olur ve dördü de sessizce olur:

1. **Oturum kapanınca bilgi kaybolur.** Yeni oturum sıfırdan başlar.
2. **Notlar şişer.** *"Ajan unutmasın"* diye yazılan her şey birikir; birikince okunmaz olur
   ve **tam da önlemek istediğin unutmayı kolaylaştırır.**
3. **Kurallar sessizce çürür.** Bir şey kalkar, onu anan kural kalır ve yanlış talimat vermeye
   devam eder.
4. **İşe kapsam çıkarmadan başlanır.** *"Hangi dille, neyin üstünde, kimin hesabıyla, kimin
   iznine bağlı"* soruları işin ortasında sorulur ve o noktada cevapları pahalıdır.

Mekanik cevaplar: **devir notu** · **büyüme freni ve tavanlar** · **atıf denetimi** ·
**yedi fazlı kuruluş akışı**.

## Kurulum

```
git clone <bu depo> <proje-klasörü>
```

Sonra ajana **"kurulumu yap"** de. Gerisini `KURULUM.md` yürütür: ortam ölçülür, sorular
teker teker sorulur, modüller seçilir, eşikler belirlenir, kapı ölçülür.

**Kurulum kod çalıştırmadan da yürür.** Kabuk yoksa `docs/ELLE-DENETIM.md` aynı kontrolleri
insan sorusu olarak taşır.

## İçindekiler

| Dosya | Kime | Ne işe yarar |
|---|---|---|
| `KURULUM.md` | **ajana** | Kurulum görüşmesini yürütür |
| `CLAUDE.md` | ajana | **Bütün kurallar.** Her oturumda kendiliğinden yüklenir |
| `ayarlar.conf` | makineye | Bütün eşikler ve sabitler — **tek kaynak** |
| `docs/KAPSAM.md` | ajana | Fikirden ilk işe: yedi faz, her kapının sayısı |
| `docs/DEVIR-NOTU.md` | ajana | Oturumlar arası **tek giriş kapısı** |
| `docs/KURUCU-DERSLER.md` | ajana | 21 evrensel ders — tavansız, okuma listesi dışı |
| `docs/REFLEKSLER.md` | ajana | Günlük kontrol — tavanlı |
| `docs/ELLE-DENETIM.md` | insana | Betiksiz eşdeğer mod |
| `docs/moduller/` | kuruluma | Açılınca `CLAUDE.md`'ye eklenen parçalar |
| `docs/sablonlar/` | ajana | Görev kaydı · oturum başı/sonu · faz kapısı · olay |
| `scripts/olcum` | makineye | Tek ölçüm aracı, **`sinav`** alt komutlu |
| `scripts/kancalar/pre-commit` | makineye | Korunan dala kod kaydını **reddeder** |

## Dört fikir

**1. Kapının ölçütü bir sayıdır.**
*"Tasarım yapıldı mı"* tartışılır; *"örneği onaylanmamış parça sayısı sıfır mı"* tartışılmaz.

**2. Kapsam, işten önce çıkarılır — ve yalnız "biz ne yapacağız" değil.**
Faz 3 dil, yığın, mimari ve altyapıyı sorar; ama **projenin dışını** (kimin hesabı, kimin
izni), **öncesini** (neyin yerine geçiyor) ve **okuyucusunu** (hangi dil, hangi ülke, hangi
engel) da sorar. Damıtıldığı çalışmada kırk günün sonunda kodlanacak iş kalmamıştı ve proje
yine durmuştu — duran işlerin **hiçbiri teknik değildi**.

**3. Sistemde "çıkar" fiili de var.**
Kural nasıl doğar, nasıl emekli olur, tavanı ne. **Zaman geçmesi emeklilik sebebi değildir.**

**4. Kalibre edilmemiş aletin çıktısı kanıt değildir.**
Boş sonuç *"yok"* demek değil, *"kalıbım eşleşmedi"* demektir. Bu yüzden `olcum sinav` saf
mantığı **sahte veriyle** sınar ve içinde **kalibrasyon** maddeleri vardır: sayaca bilerek
bozuk bir örnek verilir ve onu **bulduğu** ölçülür.

## Ne vaat etmiyor

- **Ölçülmedi.** v1 tek çalışmadan çıktı; ikincisinde denenmedi.
- **Alan bilgisi taşımaz.** Deploy, kimlik doğrulama, tasarım sistemi `⬜` gelir.
- **Disiplin yerine geçmez.** Yaptığı, ihlali **görünür** kılmaktır.
- **Ajan senin yerine karar vermez.** Ölçer, seçenekleri ve maliyetlerini sunar; kararı sen
  verirsin. Oturumun ne zaman kapanacağına da sen karar verirsin.
