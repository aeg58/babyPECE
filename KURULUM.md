# Kurulum — buradan başla

> **Bu dosya İNSANA yazılmıştır.** Diğer her şey yapay zekâ ajanına yazılmıştır.
> Şablonun geri kalanına dokunmadan önce buradaki anketi doldur.

Bu paket, bir yapay zekâ ajanıyla **kayıtlı, denetlenebilir ve devredilebilir** biçimde
çalışmak için gereken çalışma sistemidir. Konu fark etmez: web sitesi, mobil uygulama,
içerik projesi, veri işi. İçindeki kurallar **süreç** kurallarıdır, alan bilgisi değil.

---

## A. Anket — BU BİR KAPIDIR

**Aşağıda `Belirlenecek` yazan tek bir satır kaldığı sürece hiçbir işe başlanmaz.**
Bu, şablonun **Faz 0 kapısıdır** (`AGENTS.md` §5.0.1): geçiş ölçütü *"«Belirlenecek» yazan
satır sayısı = 0"*.

> **Neden kapı:** Damıtıldığı projede bu tablo vardı ama **doldurulmadı** — 12 satırın 11'i
> 23 gün boyunca `Belirlenecek` kaldı. Daha kötüsü, tablo yürürlükteki kuralı **yalanlıyordu**:
> *"Standart onay ifadesi: Belirlenecek"* yazıyordu, oysa üç onay metni ilk günden beri
> bağlayıcıydı. Kuralları baştan okuyan bir ajan o tabloya bakıp *"onay metni tanımlanmamış"*
> sonucuna varabilirdi. Doldurulmayan anket, yanlış bilgi kaynağıdır.

| # | Alan | Değer | Bunu hangi bölüm kullanıyor |
|---|---|---|---|
| 1 | Proje adı | `Belirlenecek` | her yer |
| 2 | Projenin tek cümlelik tanımı | `Belirlenecek` | `CLAUDE.md` · `AGENTS.md` §1 |
| 3 | **Nihai karar sahibi** (kim onaylar) | `Belirlenecek` | §11 · §11.1 |
| 4 | **Günlük operasyon sorumlusu** (ajanın muhatabı) | `Belirlenecek` | §12.1 · tüm protokoller |
| 5 | Operasyon sorumlusu **geliştirici mi?** (evet/hayır) | `Belirlenecek` | §12.1/B — **anlatım dili buna göre kurulur** |
| 6 | **Ajanın YAPAMAYACAKLARI** (erişemediği yerler, yasak işlemler) | `Belirlenecek` | §11 · devir notu |
| 7 | Yerel ortam (nasıl çalıştırılır) | `Belirlenecek` | §10.5 |
| 8 | **Test ortamı** adresi ve nasıl deploy edildiği | `Belirlenecek` | §10.5 · §10.6 |
| 9 | **Canlı ortam** adresi ve nasıl deploy edildiği | `Belirlenecek` | §10.5 · §11.1 |
| 10 | Korunan dal adları | `develop` · `main` | §10.1 · commit kancası |
| 11 | Görev dalı önekleri | `feat/` · `fix/` · `chore/` · `content/` | §10.2 |
| 12 | **Görev kaydı numara öneki** (ör. `PRJ-2026-NNN`) | `Belirlenecek` | §5 · `scripts/check-task-index.ts` |
| 13 | **Onay metinleri** (birebir eşleşecek) | `LOKAL OK` · `TEST OK` · `CANLI OK` | §11.1 |
| 14 | Kaç oturumla çalışılacak (tek / yürütücü+görev) | `Belirlenecek` | §10.10 · `OKU-BENI.md` |
| 15 | Teknoloji yığını | `Belirlenecek` | §10 boş başlıkları |
| 16 | **VERİ**nin tek doğru kaynağı | `Belirlenecek` | §4 "Varlık kaynakları" |
| 17 | **TASARIM DİLİ**nin tek doğru kaynağı | `Belirlenecek` | §4 "Varlık kaynakları" |
| 18 | **MARKA/LOGO**nun tek doğru kaynağı | `Belirlenecek` | §4 "Varlık kaynakları" |
| 19 | Yedek nerede, kim alıyor, nasıl doğrulanıyor | `Belirlenecek` | §15.1 |
| 20 | Dış bekleyişler (kimden ne bekleniyor) | `Belirlenecek` | `docs/BEKLEYENLER-LISTESI.md` |
| 21 | İletişim dili (ajan hangi dilde konuşacak) | `Belirlenecek` | §12.1/B |
| 22 | Şablon sürümü | `v0` | `SURUM.md` |

> **Kural (§18.5'in kardeşi):** Bir bölüm yeni bir alanı bağlayıcı hâle getirirse, anket
> **aynı commit'te** güncellenir. Anketin bir bölümü yalanlaması, yukarıdaki tam olarak
> kaçınılmaya çalışılan hatadır.

### 16–18 neden ayrı ayrı soruluyor

Damıtıldığı projede **en pahalı ders** buydu: logo canlı siteden çekilip entegre edildi,
yanlış kaynaktı ve **tamamen geri alındı**. Üç kaynak birbirine karıştırılmaz —
veri bir yerden, tasarım dili başka yerden, marka varlıkları üçüncü bir yerden gelir.
Tabloyu `AGENTS.md` §4 "Varlık kaynakları" taşır.

---

## B. Kurulum listesi

1. Bu klasörü projenin köküne kopyala (`.git` klasörünü **kopyalama**).
2. **Anketi doldur.** `Belirlenecek` kalmayana kadar devam etme.
3. `CLAUDE.md` içindeki köşeli parantezli yerleri anketten doldur.
4. `AGENTS.md` §1 · §4 "Varlık kaynakları" · §10 boş başlıkları · §11.1 · §15.1 doldur.
5. Kullanmayacağın modülleri **sil** — boş başlık bırakmak, doldurulmamış anketle aynı hatadır.
6. `npm install` sonrası **komutları `package.json`'a ekle** (aşağıdaki tablo).
7. **`npm run kanca:kur`** — commit kancasını bağla. *(Bağlanmazsa koruma yoktur.)*
8. `npm run denetim:sinav` — dört betiğin sınavı **4/4** geçmeli. Geçmiyorsa çıktıları kanıt değildir.
9. `docs/DEVIR-NOTU.md`'yi ilk hâliyle doldur (nerede kaldık = "proje yeni kuruldu").
10. İlk `gün başı`nı yap: `AGENTS.md` §7'yi uygula, raporu `docs/gun-basi/` altına yaz.

### `package.json` komutları

```json
"docs:check-index": "tsx scripts/check-task-index.ts",
"gun:denetim":      "tsx scripts/gun-sonu-denetim.ts",
"docs:saglik":      "tsx scripts/docs-saglik.ts",
"kural:bayat":      "tsx scripts/kural-bayat.ts",
"dogrula":          "npm run lint && npx tsc --noEmit && npm run build",
"denetim:sinav":    "tsx scripts/check-task-index.ts sinav && tsx scripts/gun-sonu-denetim.ts sinav && tsx scripts/docs-saglik.ts sinav && tsx scripts/kural-bayat.ts sinav",
"kanca:kur":        "git config core.hooksPath scripts/kancalar && echo 'Kanca baglandi'"
```

*Projede `tsx` yoksa: `npm i -D tsx`. TypeScript kullanmıyorsan betikleri kendi diline
çevir — **ama `sinav` komutlarını koru**, onlar olmadan çıktılar kanıt değildir.*

---

## C. Bu şablon neyi VAAT ETMİYOR

- **Ölçülmedi.** `v0`, tek bir projede 25 gün kullanılan sistemden damıtıldı;
  **ikinci bir projede denenmedi.** Bkz. `SURUM.md`.
- **Alan bilgisi taşımaz.** Deploy, kimlik doğrulama, form yazımı, tasarım sistemi gibi
  başlıklar `AGENTS.md` §10'da **boş** gelir. Onları kendi projen dolduracak.
- **Disiplin yerine geçmez.** Kurallar ihlal edilebilir; şablonun yaptığı, ihlali
  **görünür** kılmaktır.
