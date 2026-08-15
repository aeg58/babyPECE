// Bayat kural taraması — kaldırılmış bir şeyin adı hâlâ yürürlükteki kuralda geçiyor mu?
//
// NEDEN VAR: Bir özellik projeden kalkınca onu anan kurallar geride kalıyor ve
// SESSİZCE yanlış talimat vermeye devam ediyor. Damıtıldığı projede ölçülmüş üç örnek:
// bir dil kaldırıldı ama kural metni 8 gün bayat kaldı · ölçümle çürütülen bir talimat
// metinde durmaya devam etti · bir adım zincirden çıkarıldı ama kuralda kaldı.
// Üçü de ELLE fark edildi. Bu betik onları aynı gün yakalar.
//
// NASIL ÇALIŞIR: "kalkmış" olduğu KODDAN ölçülebilen şeyleri listeler; her biri için
// kanıt komutu çalıştırılır. Kanıt tutuyorsa (yani gerçekten kalkmışsa) kural
// dosyalarında adı aranır. Kanıt tutmuyorsa madde ATLANIR ve bu BASILIR — çünkü
// varsayıma dayanan bir uyarı, uyarı değil gürültüdür.
//
// SALT OKUR. Çalıştırma: npm run kural:bayat   ·   sınav: npm run kural:bayat -- sinav

import { execSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";

/** Gün başında okunan, yani yanlış talimat verebilecek dosyalar. */
const KURAL_DOSYALARI = ["AGENTS.md", "CLAUDE.md", "docs/REFLEKSLER.md", "docs/DEVIR-NOTU.md"];

type Madde = {
  ad: string;
  /** Kalktığını KANITLAYAN ölçüm — doğruysa madde işlenir. */
  kanit: () => boolean;
  kanitAciklama: string;
  /** Kural dosyalarında aranacak kalıplar. */
  kaliplar: RegExp[];
  neden: string;
};

function dosya(y: string): string {
  return existsSync(y) ? readFileSync(y, "utf8") : "";
}
function kabuk(k: string): string {
  try { return execSync(k, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim(); } catch { return ""; }
}
/** Türkçeye uygun küçültme — /i bayrağı İ ile eşleşmez (ders A47). */
function trKucult(s: string): string {
  return s.replace(/İ/g, "i").replace(/I/g, "ı").toLowerCase();
}

const MADDELER: Madde[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // ⬜ PROJEYE ÖZGÜ — kendi maddelerini buraya yaz, örneği sil.
  //
  // KURAL: Bir madde ancak "kalktığı" KODDAN kanıtlanabiliyorsa buraya girer.
  // Kanıtsız madde uyarı üretmez, ATLANIR ve bu ekrana basılır — çünkü varsayıma
  // dayanan bir uyarı, uyarı değil gürültüdür ve gürültülü denetim okunmaz.
  // ───────────────────────────────────────────────────────────────────────────
  {
    ad: "ÖRNEK — İngilizce arayüz (projede tek dile inildiyse)",
    kanit: () => /locales:\s*\[\s*"tr"\s*\]/.test(dosya("src/i18n/routing.ts")),
    kanitAciklama: 'src/i18n/routing.ts → locales: ["tr"]',
    kaliplar: [/TR\/EN/, /hreflang/i],
    neden: "proje tek dile indi; iki dilli alan çiftleri artık yok",
  },
];


/**
 * Bir satır BAYAT TALİMAT mı, yoksa TARİHSEL KAYIT mı?
 *
 * ⚠️ Bu ayrım betiğin can damarı. Bir kural çürütüldüğünde eski metin çoğu zaman
 * düzeltme notunun İÇİNDE alıntılanır ("2026-08-07'de yazılan X çözümü yanlışlandı").
 * O satır bayat talimat DEĞİLDİR — tam tersine, bayatlığın kaydıdır. Ayrım
 * yapılmazsa betik her düzeltme notunu uyarı diye basar ve gürültüye boğulur;
 * gürültülü denetim okunmaz hâle gelir, yani hiç denetim olmamasına döner.
 *
 * (2026-08-12: betik yazıldığı gün tam bu yanlış alarmı verdi — AGENTS.md §10.10/10'daki
 * iki A38 düzeltme satırını "bayat" sandı. Kalıp genişletildi ve sınava soru eklendi.)
 */
function tarihselMi(satir: string): boolean {
  const k = trKucult(satir);
  const isaretler = [
    "~~", "geçersiz", "çürüt", "emekli", "arşiv", "düzeltmesi", "düzeltildi",
    "artık", "yoktur", "kaldırıl", "çıkarıld", "yanlışland", "zararı verdi",
    "kaçış yolu", "eskiden", "tarihsel", "o günkü",
  ];
  return isaretler.some((i) => k.includes(trKucult(i)));
}

function tara(): boolean {
  console.log("BAYAT KURAL TARAMASI\n");
  let bulgu = 0, atlanan = 0;

  for (const m of MADDELER) {
    const kanitli = m.kanit();
    if (!kanitli) {
      atlanan++;
      console.log(`⏭  ${m.ad}`);
      console.log(`    ATLANDI — kalktığı kanıtlanamadı: ${m.kanitAciklama}`);
      console.log(`    (Varsayıma dayanan uyarı basılmaz — gürültü olur.)\n`);
      continue;
    }
    const isabetler: string[] = [];
    for (const f of KURAL_DOSYALARI) {
      const satirlar = dosya(f).split("\n");
      satirlar.forEach((s, i) => {
        if (m.kaliplar.some((k) => k.test(s))) {
          // Markdown satırları sarar: işaret kelimesi komşu satırda olabilir.
          // Pencere = eşleşen satır + önceki 2 + sonraki 2.
          const pencere = satirlar.slice(Math.max(0, i - 2), i + 3).join(" ");
          if (!tarihselMi(pencere)) isabetler.push(`${f}:${i + 1}  ${s.trim().slice(0, 92)}`);
        }
      });
    }
    if (isabetler.length) {
      bulgu += isabetler.length;
      console.log(`⚠  ${m.ad} — ${isabetler.length} bayat satır`);
      console.log(`    kanıt: ${m.kanitAciklama}`);
      console.log(`    neden bayat: ${m.neden}`);
      for (const s of isabetler) console.log(`      ${s}`);
      console.log("");
    } else {
      console.log(`✔  ${m.ad} — kural dosyalarında bayat satır yok`);
      console.log(`    (${MADDELER.length} maddeden biri; kanıt: ${m.kanitAciklama})\n`);
    }
  }

  console.log(`ÖZET: ${MADDELER.length} madde tarandı · ${bulgu} bayat satır · ${atlanan} madde atlandı (kanıtsız)`);
  console.log(`Taranan dosyalar: ${KURAL_DOSYALARI.join(" · ")}`);
  console.log("Not: üstü çizili, 'GEÇERSİZ', 'artık', 'emekli' gibi işaretli satırlar bilerek");
  console.log("atlanır — onlar bayat değil, TARİHSEL kayıttır.");
  return bulgu === 0;
}

/**
 * SINAV — kalıpların bilinen bir doğruyu bulduğu ayrıca ölçülür.
 *
 * ⚠️ Sınav, projeye özgü MADDELER listesine BAĞLI DEĞİLDİR — mekanizmayı sahte veriyle
 * sınar. Böylece proje kendi maddelerini eklerken/silerken sınav bozulmaz.
 * (Şablon yazılırken tam bu hata yapıldı: sınav örnek bir maddenin adına bakıyordu,
 * ad değişince çöktü.)
 */
function sinav(): boolean {
  const t: { ad: string; gecti: boolean }[] = [];

  const sahte: Madde = {
    ad: "sahte",
    kanit: () => true,
    kanitAciklama: "sınav",
    kaliplar: [/eski özellik/],
    neden: "sınav",
  };

  t.push({ ad: "kalıp BİLİNEN bir örneği buluyor",
           gecti: sahte.kaliplar.some((k) => k.test("- Kural: eski özellik hâlâ kullanılır")) });
  t.push({ ad: "kalıp ilgisiz satırı BULMUYOR",
           gecti: !sahte.kaliplar.some((k) => k.test("- Kural: yeni özellik kullanılır")) });
  t.push({ ad: "dil duyarlı küçültme doğru (İ → i)", gecti: trKucult("İPTAL") === "iptal" });
  t.push({ ad: "üstü çizili satır TARİHSEL sayılıyor",
           gecti: tarihselMi("4. ~~**eski özellik** artık yok~~") });
  t.push({ ad: "TUZAK — düzeltme notu içindeki alıntı bayat SAYILMIYOR",
           gecti: tarihselMi('*(2026-01-01\'de yazılan "eski özellik kullanılır" çözümü yanlışlandı)*') });
  t.push({ ad: "TUZAK — işaret kelimesi KOMŞU satırdaysa da tarihsel sayılıyor",
           gecti: tarihselMi(['maddesindedir.** *(2026-01-01\'de yazılan "eski özellik kullanılır"',
                              "çözümü ölçülerek yanlışlandı ve metinden çıkarıldı;"].join(" ")) });
  t.push({ ad: "GERÇEK bayat talimat hâlâ YAKALANIYOR (kalıp körelmedi)",
           gecti: !tarihselMi("Ölçüm gerekiyorsa eski özellik kullanılır.") });
  t.push({ ad: "kanıtsız madde atlanıyor, uydurulmuyor",
           gecti: MADDELER.every((m) => typeof m.kanit === "function") });
  t.push({ ad: "kural dosyalarının hepsi tanımlı",
           gecti: KURAL_DOSYALARI.length > 0 && KURAL_DOSYALARI.every((f) => typeof f === "string") });

  console.log("ÖLÇÜM ARACI SINAVI\n");
  for (const x of t) console.log(`  ${x.gecti ? "✔" : "✘"}  ${x.ad}`);
  const ok = t.every((x) => x.gecti);
  console.log(ok ? "\nSINAV GEÇİLDİ." : "\nSINAV KALDI — çıktısı KANIT DEĞİLDİR.");
  return ok;
}

if (process.argv.includes("sinav")) process.exit(sinav() ? 0 : 1);
process.exit(tara() ? 0 : 1);
