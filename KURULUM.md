# Kurulum — ajan bunu okur, kullanıcı cevaplar

> **Bu dosya AJANA yazılmıştır.** Kurulumu ajan yürütür; kullanıcı yalnız sorulara cevap verir.
> Kullanıcı bu dosyayı okumak zorunda değildir.
>
> **Tetik:** kullanıcı *"kurulumu yap"* dediğinde bu dosya baştan sona okunur ve adımlar
> **sırayla** uygulanır. Adım atlanmaz.

---

## 0. Kurulumdan ÖNCE — üç bağlayıcı kural

**1. Klasörün içeriğinden çıkarım yapılmaz.** Depoda ne olduğu, bu projenin ne olduğuna dair
kanıt değildir. Kurulan şablonun kendi dosyaları, kullanıcının işine dair hiçbir şey söylemez.
Boş bir klasörde de, dolu bir klasörde de sorular **aynıdır** ve sorulur.

**2. Sorular teker teker sorulur.** Tablo, form ya da toplu liste hâlinde sorulmaz. Kullanıcı
cevap verir, ajan bir sonrakine geçer. *(Gerekçe: toplu sorulan sorulara toplu, yüzeysel cevap
verilir; kurulumun tamamı bir kez daha yapılamaz.)*

**3. Cevabı ajan tamamlamaz.** Kullanıcı *"bilmiyorum"* derse, ajan makul bir değer **uydurmaz**.
Satır `ertelendi` olarak yazılır ve bir **vade** alır. Vadesi olmayan erteleme yoktur.

---

## 1. Adım — ORTAM ENVANTERİ (makine)

İlk iş, konuşmadan önce ortamı **ölçmektir**:

```
olcum ortam
```

Ölçtükleri: sürüm kontrolü var mı · uzak depo var mı · hangi kabuk · hangi işletim sistemi ·
klasörde hangi dosya türleri var. Araç yoksa `olcum ortam` yerine `docs/ELLE-DENETIM.md`
Bölüm 1 elle yürütülür ve sonuçlar aynı biçimde yazılır.

**Neden makine:** ajanın *"sanırım sürüm kontrolü var"* demesi kanıt değildir. Modül şartlarının
yarısı doğrudan bu envanterden okunur; ölçülmemiş envanter, yanlış modül seçimi demektir.

---

## 2. Adım — TUR 0: yetki ve sınır (konuşma)

Fikirden **önce**, fikirle **ilgisiz**. Üç soru, teker teker:

1. **Bu işi sonunda kim onaylayacak — sen mi, başkası mı?**
2. **Ben neye dokunamam?** Nereye erişimim yok, neyi asla senin adına yapmamalıyım?
3. **Sana anlatırken ayrıntı seviyesi ne olsun** — bu işin yapım tekniğini biliyor musun?

İkinci soru bir **güvenlik** sorusudur ve proje küçüldükçe ucuzlar; hiçbir ölçekte atlanmaz.
Cevabı doğrudan `CLAUDE.md`'nin "Ajanın yapamayacakları" bölümüne yazılır.

Üçüncü sorunun cevabı **anlatım dilini kurar**: kullanıcı yapım tekniğini bilmiyorsa hiçbir
açıklama teknik terimle başlamaz, ayrıntı **eksiltilmez** ama sade dille kurulur.

---

## 3. Adım — VADELİ DEFTER (konuşma)

v0'ın anketi bir **kapıydı** ve `Belirlenecek` diye bir değeri vardı. İkisi de kaldırıldı.

> **Neden kaldırıldı:** *"henüz bilinmiyor"* ile *"kimse bakmadı"* aynı işaretle yazıldığı
> sürece hiçbir sayı dürüst olamaz. Damıtıldığı projede 12 satırın 11'i 23 gün boyunca
> `Belirlenecek` kaldı ve tablo, yürürlükteki kuralı **yalanlıyordu**.

Artık her satırın **üç durumu** var ve **üçü de karardır**:

| Durum | Yazılışı | Anlamı |
|---|---|---|
| **Cevaplı** | değer + tarih | bilinen |
| **Ertelendi** | `ertelendi — vade: Faz N` | bilinçli erteleme, vadesi var |
| **Konu dışı** | `konu dışı — gerekçe` | bu proje bu şekle sahip değil |

### İki farklı ölçü — karıştırılmaz

- **VADE KAPIYI TUTMAZ.** Faz N kapısı yalnız *vadesi N ya da öncesi* olan satırları sayar.
  Vadesi ileride olan satır kapıyı bloke etmez.
- **VADE İŞLEMİ TUTAR.** Ertelenmiş bir satırın cevabına ihtiyaç duyan **tek tek işlem** durur.
  En kritik uygulaması: **kaynağı yazılmamış bir varlık üretilmez.** Satır boşken de çalışır —
  cevap *"o varlığı henüz üretemezsin"*dir.
- **Üçüncü sayaç: vadesi geçmiş satır = 0.** Her faz geçişinde ölçülür. Erteleme ancak süresi
  dolduğunda acıtırsa dürüsttür.

### Defter

| # | Alan | Vade | Nereye yazılır |
|---|---|---|---|
| 1 | Çalışmanın adı | Faz 0 | `CLAUDE.md` başlığı |
| 2 | Nihai karar sahibi (kim onaylar) | Faz 0 | `CLAUDE.md` › Roller |
| 3 | Günlük muhatap (ajanın konuştuğu kişi) | Faz 0 | `CLAUDE.md` › Roller |
| 4 | Muhatap yapım tekniğini biliyor mu | Faz 0 | `CLAUDE.md` › Anlatım dili |
| 5 | **Ajanın yapamayacakları** | Faz 0 | `CLAUDE.md` › Yasaklar |
| 6 | İletişim dili | Faz 0 | `CLAUDE.md` › Anlatım dili |
| 7 | Onay birebir metinle mi alınacak (+ metinler) | Faz 0 | `CLAUDE.md` › Onay |
| 8 | Sistem sürümü | Faz 0 | `SURUM.md` |
| 9 | Tek cümlelik iş tanımı | Faz 1 | `docs/FIKIR.md` (işaretçi) |
| 10 | **Bitiş tanımı** — neyi görünce "oldu" denecek | Faz 1 | `docs/FIKIR.md` |
| 11 | İlk dış bekleyişler (kimden ne bekleniyor) | Faz 1 | `docs/BEKLEYENLER.md` |
| 12 | **Bilginin** tek doğru kaynağı | Faz 2 | `CLAUDE.md` › Varlık kaynakları |
| 13 | **Görünüşün** tek doğru kaynağı | Faz 2 | aynı |
| 14 | **Kimlik/marka varlıklarının** tek doğru kaynağı | Faz 2 | aynı |
| 15 | Yedek: nerede, kim alır, **içi nasıl doğrulanır** | Faz 3 | `CLAUDE.md` › Yedek |
| 16 | Kayıt numara öneki | Faz 6 | `ayarlar.conf` |
| 17 | Kaç oturumla çalışılacak | Faz 6 | `ayarlar.conf` |
| 18 | Korunan dal adları | Faz 7 / koşullu | `ayarlar.conf` |
| 19 | İş dalı önekleri | Faz 7 / koşullu | `ayarlar.conf` |

> **12–14 neden ayrı ayrı soruluyor:** damıtıldığı projede **en pahalı ilk gün hatası** buydu —
> bir kimlik varlığı doğrulanmamış kaynaktan üretildi ve **tamamen geri alındı**. Üç kaynak
> birbirine karışmaz: bilgi bir yerden, görünüş başka yerden, kimlik üçüncü bir yerden gelir.

> **Bir bölüm yeni bir alanı bağlayıcı yaparsa, defter AYNI düzenlemede güncellenir.**
> Defterin bir bölümü yalanlaması, kaçınılmaya çalışılan asıl hatadır.

---

## 4. Adım — MODÜL SEÇİMİ (konuşma, envantere dayanarak)

> **v0'da eksik olan adım budur.** v0 *"kullanmayacağını sil"* diyordu ama **neyi sileceğini
> soran kimse yoktu** — bu yüzden örtük varsayımlar (müşteri var, üç ortam var, deploy var,
> görsel arayüz var, iki oturum var) sessizce açık kalıyordu.

Ajan **önce profil sorar**, sonra modülleri tek tek teyit eder:

| Profil | Açılan modüller |
|---|---|
| **a · Tek kişilik küçük iş** | yalnız çekirdek + Olay/geri alma |
| **b · Yazılım projesi + yayın** | çekirdek + Sürüm kontrolü · Ortam geçişleri · Görsel yüzey · Görev kayıtları · Ölçüm araçları · Olay |
| **c · Çok oturumlu büyük proje** | hepsi |

### Modüller ve açılma şartları

| Modül | Açılma şartı | Kapalıyken |
|---|---|---|
| **Sürüm kontrolü** | *makine:* depo bir VCS altında mı | Kayıtlar tarihli dosya; kanca yok |
| **Uzak depo ve inceleme** | Sürüm kontrolü açık **ve** uzak depo var **ve** ≥2 kişi | Yerel kayıt yeter |
| **Ortam geçişleri** | *soru:* çıktının yayınlandığı ayrı bir ortam var mı | Onay ilkesi kalır, birebir metin kapısı yok |
| **Görsel yüzey** | *soru:* insanın doğrudan gördüğü bir yüzey var mı | Faz 4 tasarım kapısı düşer |
| **Görev kayıtları** | *soru:* eşzamanlı izlenecek iş sayısı > 5 | İşler devir notunda satır |
| **Paralel oturum** | *soru:* aynı depoda eşzamanlı iki oturum | Roller tek role iner |
| **Dış paydaş** | *soru:* karar veren ayrı bir kişi/kurum var mı | Onay = kullanıcının kendi sözü |
| **Ölçüm araçları** | *soru:* beklenen oturum > 10 **ve** *makine:* kabuk var | `docs/ELLE-DENETIM.md` |
| **Olay ve geri alma** | *soru:* geri dönüşü zor işlem olacak mı | Genel onay ilkesi yeter |

**Envanter modülü kapatıyorsa soru SORULMAZ.** Sürüm kontrolü yoksa ilk iki modül hiç
sorulmaz, otomatik `kapalı` işaretlenir ve gerekçesi yazılır.

**Açılan modülün metni `CLAUDE.md`'ye EKLENİR.** `docs/moduller/` altındaki dosyalar kurulum
**kaynağıdır, kural değildir** — eklendikten sonra tek doğru kaynak `CLAUDE.md`'dir.
*(Gerekçe: kural metni iki yerde dururken biri sessizce çürür.)*

---

## 5. Adım — EŞİKLER (konuşma, varsayılan önerili)

v0'ın en sinsi kalıntısı sayılardı: aynı tavan üç yerde üç farklı değerdeydi ve **hiç kimse
karar vermemişti**. Artık bütün eşikler `ayarlar.conf`'ta durur ve **kurulumda sorulur**.

Ajan önce **beklenen oturum sayısını** sorar, tavanı ondan **önerir**, kullanıcı onaylar:

| Eşik | Ne sınırlar |
|---|---|
| `KURAL_TAVANI` | `CLAUDE.md` satır sayısı |
| `REFLEKS_TAVANI` | günlük kontrol maddesi sayısı |
| `DEVIR_TAVANI` | devir notu satır sayısı |
| `OKUMA_YUKU_HEDEFI` | oturum başı okunan toplam bayt |
| `PENCERE_GUN` | kronolojik defterlerde tutulan gün sayısı |

**Hiçbir eşik betiğin içine yazılmaz.** Sabitin koda gömülmesi, v0'da bulunan sessiz
kırılmaların ortak köküydü.

---

## 6. Adım — KURULUM KAPISI (makine)

```
olcum sinav        # önce bu — kalırsa aşağıdaki çıktılar KANIT DEĞİLDİR
olcum kurulum
```

**Üç sayı sıfır olmalı:**

| Sayaç | Neden var |
|---|---|
| Vadesi gelmiş, cevapsız defter satırı **= 0** | Doldurulmayan defter, yanlış bilgi kaynağıdır |
| Kırık iç atıf **= 0** | v0'da 101 atfın 29'u olmayan bölüme gidiyordu — hiç kullanılmadan |
| **Kapalı modüle yapılan atıf = 0** | Modül silinince ona atıf yapan kural sahipsiz kalır |

Son iki sayaç v0'ın denetiminden doğdu. *"Atıflara dikkat et"* tutmaz; **ölçülen adım tutar.**

---

## 7. Adım — İLK DEVİR NOTU (konuşma)

`docs/DEVIR-NOTU.md` ilk hâliyle yazılır. "Nerede kaldık" = *"sistem kuruldu, fikir konuşulmadı."*
İlk yapılacak iş = **Faz 1 · Fikir turu.**

---

## Kurulum bitti — sırada ne var

Kurulum yalnız **Faz 0**'dır. Sistem kuruldu, proje hakkında hiçbir şey bilinmiyor.

Bundan sonrası `docs/KAPSAM.md`'de: **Fikir → İş kapsamı → Teknik kapsam → Tasarım → Karar →
Sıra → Yapım.** Ajan kurulum biter bitmez Faz 1'i **önerir**, başlatmaz — başlatma kararı
kullanıcınındır.
