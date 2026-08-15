// Doküman sağlığı — okuma yükü, büyüme hızı ve rapor tazeliği.
//
// NEDEN VAR: 2026-08-11 incelemesinde ölçüldü — AGENTS.md 23 günde 479→1437 satıra,
// öğrenilen dersler 14 günde 144→1193 satıra çıkmıştı ve KİMSE BUNU GÜN GÜN GÖRMEDİ.
// Şişme, tek tek bakıldığında hep "bir satır daha" gibi görünür; ancak eğilim
// ölçüldüğünde fark edilir. Bu betik o eğilimi her gün görünür kılar.
//
// Ayrıca: 2026-08-08'de gün başı raporu sessizce atlanmış ve kimse fark etmemişti.
// Rapor tazeliği de buradan ölçülür.
//
// SALT OKUR. Çalıştırma: npm run docs:saglik   ·   sınav: npm run docs:saglik -- sinav

import { execSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";

/** AGENTS.md §7 gün başı okuma listesi — bu dosyalar her gün baştan sona okunur. */
// ─────────────────────────────────────────────────────────────────────────────
// PROJE AYARLARI — ŞABLONU KURARKEN DOLDURULACAK TEK BLOK
// ─────────────────────────────────────────────────────────────────────────────
/** AGENTS.md §6 gün başı okuma listesi — bu dosyalar her gün baştan sona okunur. */
const OKUMA_LISTESI = [
  "docs/DEVIR-NOTU.md",
  "AGENTS.md",
  "gorev-index.md",
  "docs/BEKLEYENLER-LISTESI.md",
  "docs/REFLEKSLER.md",
];
/** Üst sınırlar (AGENTS.md §16.4). Tavan bir KARAR eşiğidir; aşım sessizce geçilmez. */
const TAVAN: Record<string, number> = {
  "AGENTS.md": 900,
  "CLAUDE.md": 60,
  "docs/REFLEKSLER.md": 200,
  "docs/DEVIR-NOTU.md": 160,
};
/** Bölüm 1'in yürürlükteki madde tavanı (emekli yuvalar sayılmaz). */
const REFLEKS_MADDE_TAVANI = 30;
/** Gün başı okuma yükü hedefi, bayt. */
const HEDEF_OKUMA_YUKU = 120_000;
// ─────────────────────────────────────────────────────────────────────────────

function refleksMaddeSayisi(yol = "docs/REFLEKSLER.md"): number | null {
  if (!existsSync(yol)) return null;
  return refleksMaddeSay(readFileSync(yol, "utf8"));
}

/** Saf sayaç — sınavda bilinen metinle ayarlanabilsin diye ayrıldı (ders A24). */
function refleksMaddeSay(metin: string): number | null {
  const bas = metin.indexOf("## Bölüm 1");
  const son = metin.indexOf("## Bölüm 2");
  if (bas < 0) return null;
  const bolum1 = metin.slice(bas, son > bas ? son : undefined);
  let n = 0;
  for (const satir of bolum1.split("\n")) {
    if (!/^\d+\.\s/.test(satir)) continue;      // yalnız numaralı madde başlangıçları
    if (/^\d+\.\s*\*?\(emekli/.test(satir)) continue; // emekli yuva sayılmaz
    n++;
  }
  return n;
}

function kabuk(k: string): string {
  try { return execSync(k, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim(); }
  catch { return ""; }
}

function satirSayisi(yol: string, ref?: string): number | null {
  const c = ref ? kabuk(`git show ${ref}:${yol} | wc -l`) : kabuk(`wc -l < ${yol}`);
  const n = parseInt(c.trim(), 10);
  return Number.isFinite(n) ? n : null;
}

/**
 * Rapor dosyalarını TARİH + OTURUM sırasına dizer ve sonuncusunu döner.
 *
 * ⚠️ Düz `sort()` yetmez: aynı günün ikinci oturumu
 * `2026-08-14-2.md` adını alıyor ve ASCII'de `-` (0x2D) < `.` (0x2E) olduğu için düz
 * sıralama onu `2026-08-14.md`'den ÖNCE koyar — yani "en yeni" diye eski dosya seçilirdi.
 * Ad `YYYY-AA-GG[-N]` olarak ayrıştırılır; eki olmayan dosya **1. oturum** sayılır.
 * Kalıba uymayan dosyalar sıralamanın en başına düşer, "en yeni" olarak seçilmezler.
 */
export function enYeniAd(dosyalar: string[]): string | null {
  const anahtar = (f: string): [string, number] => {
    const m = /^(\d{4}-\d{2}-\d{2})(?:-(\d+))?\.md$/.exec(f);
    return m ? [m[1], m[2] ? parseInt(m[2], 10) : 1] : ["", 0];
  };
  const d = dosyalar
    .filter((f) => f.endsWith(".md"))
    .sort((a, b) => {
      const [ta, oa] = anahtar(a);
      const [tb, ob] = anahtar(b);
      return ta === tb ? oa - ob : ta < tb ? -1 : 1;
    });
  return d.length ? d[d.length - 1] : null;
}

function enYeni(klasor: string): string | null {
  if (!existsSync(klasor)) return null;
  return enYeniAd(readdirSync(klasor));
}

function main() {
  console.log("DOKÜMAN SAĞLIĞI\n");

  // 1) Okuma yükü
  const gunSonu = enYeni("docs/gun-sonu");
  const gunSonuYolu = gunSonu ? `docs/gun-sonu/${gunSonu}` : "";
  let sabit = 0;
  console.log("Gün başı okuma yükü (AGENTS.md §7):");
  for (const f of OKUMA_LISTESI) {
    if (!existsSync(f)) { console.log(`  ${"EKSİK".padStart(9)}  ${f}  ⚠️ DOSYA YOK`); continue; }
    const b = statSync(f).size; sabit += b;
    console.log(`  ${b.toLocaleString("tr-TR").padStart(9)}  ${f}`);
  }
  console.log(`  ${"─".repeat(9)}`);
  console.log(`  ${sabit.toLocaleString("tr-TR").padStart(9)}  SABİT ÇEKİRDEK  ← eğilim BU sayıdan okunur`);
  // Günün gün sonu raporu her gün DEĞİŞEN bir dosyadır; toplamın içinde eğilimi bozar.
  // (2026-08-12 gün başı bulgusu: en yeni rapor 27.762 B'tan 5.846 B'a inince toplam 21.916 B
  //  düştü ve "okuma yükü azaldı" gibi göründü — oysa hiçbir dosya küçülmemişti.)
  const gunSonuBoyut = gunSonuYolu && existsSync(gunSonuYolu) ? statSync(gunSonuYolu).size : 0;
  if (gunSonuYolu) console.log(`  ${gunSonuBoyut.toLocaleString("tr-TR").padStart(9)}  + ${gunSonuYolu}  (her gün değişir — eğilime katılmaz)`);
  const toplam = sabit + gunSonuBoyut;
  console.log(`  ${"─".repeat(9)}`);
  console.log(`  ${toplam.toLocaleString("tr-TR").padStart(9)}  TOPLAM   (hedef ≤ ${HEDEF_OKUMA_YUKU.toLocaleString("tr-TR")})`);
  const yukTemiz = toplam <= HEDEF_OKUMA_YUKU;
  if (!yukTemiz) console.log(`  ⚠️  Hedef ${(toplam - HEDEF_OKUMA_YUKU).toLocaleString("tr-TR")} bayt aşıldı.`);

  // 2) Yedi günlük büyüme
  console.log("\nYedi günlük değişim (satır):");
  const ref = kabuk('git rev-list -1 --before="7 days ago" HEAD') || "";
  let tavanTemiz = true;
  for (const [f, tavan] of Object.entries(TAVAN)) {
    const simdi = satirSayisi(f);
    if (simdi === null) { console.log(`  ${f}: ölçülemedi`); continue; }
    const once = ref ? satirSayisi(f, ref) : null;
    const fark = once === null ? "—" : `${simdi - once >= 0 ? "+" : ""}${simdi - once}`;
    const asim = simdi > tavan;
    if (asim) tavanTemiz = false;
    console.log(`  ${asim ? "⚠️" : "  "} ${f.padEnd(24)} ${String(simdi).padStart(5)} satır  (7 günde ${fark})  tavan ${tavan}`);
  }

  // 2b) Refleks madde tavanı — §18.4 SATIR değil MADDE sayar.
  const madde = refleksMaddeSayisi();
  if (madde === null) {
    console.log("  ⚠️  docs/REFLEKSLER.md Bölüm 1 madde sayısı ölçülemedi");
    tavanTemiz = false;
  } else {
    const asim = madde > REFLEKS_MADDE_TAVANI;
    if (asim) tavanTemiz = false;
    console.log(`  ${asim ? "⚠️" : "  "} ${"REFLEKSLER Bölüm 1".padEnd(24)} ${String(madde).padStart(5)} madde  (yürürlükte, emekli yuvalar hariç)  tavan ${REFLEKS_MADDE_TAVANI}`);
  }

  // 3) Rapor tazeliği
  console.log("\nRapor tazeliği:");
  const bugun = kabuk("date +%Y-%m-%d");
  const gb = enYeni("docs/gun-basi");
  const gs = enYeni("docs/gun-sonu");
  const devir = kabuk('git log -1 --format=%ad --date=format:"%Y-%m-%d %H:%M" -- docs/DEVIR-NOTU.md');
  console.log(`  bugün                : ${bugun}`);
  console.log(`  en yeni gün başı     : ${gb ?? "yok"}${gb?.startsWith(bugun) ? "  ✔" : "   (bugünün raporu YOK)"}`);
  console.log(`  en yeni gün sonu     : ${gs ?? "yok"}`);
  console.log(`  devir notu son değişim: ${devir || "ölçülemedi"}`);

  console.log(`\nÖZET: okuma yükü ${yukTemiz ? "hedefte" : "HEDEF AŞILDI"} · tavanlar ${tavanTemiz ? "temiz" : "AŞILDI"}`);
  console.log("Not: bu betik yalnız ÖLÇER, hiçbir şeyi düzeltmez. Tavan aşımı bir kararı tetikler,");
  console.log("otomatik kırpma yapılmaz (REFLEKSLER.md büyüme freni: birleştir ya da emekli et).");
  return yukTemiz && tavanTemiz;
}

/** SINAV — bilinen cevaplarla ayarla (ders A24). */
function sinav(): boolean {
  const t: { ad: string; gecti: boolean }[] = [];
  t.push({ ad: "okuma listesindeki her dosya gerçekten var", gecti: OKUMA_LISTESI.every(existsSync) });
  const a = satirSayisi("AGENTS.md");
  const b = parseInt(kabuk("wc -l < AGENTS.md").trim(), 10);
  t.push({ ad: `satır sayacı wc ile uyuşuyor (${a} = ${b})`, gecti: a === b });
  t.push({ ad: "olmayan dosya için null döner, 0 değil", gecti: satirSayisi("__yok__.md") === null });
  t.push({ ad: "en yeni gün sonu raporu bulunuyor", gecti: enYeni("docs/gun-sonu") !== null });

  // Oturum ekli ad sıralaması — bilinen cevaplı sahte listeyle ayarlanır (A24).
  // Düz sort() burada "2026-08-14.md" derdi; doğru cevap son OTURUMUN dosyasıdır.
  const sahteRapor = ["2026-08-13.md", "2026-08-14.md", "2026-08-14-2.md", "2026-08-14-3.md"];
  const sahteEnYeni = enYeniAd(sahteRapor);
  t.push({ ad: `aynı günün 3. oturumu en yeni sayılıyor (bulduğu: ${sahteEnYeni})`, gecti: sahteEnYeni === "2026-08-14-3.md" });
  t.push({ ad: "eksiz ad 1. oturum sayılıyor (13 < 14)", gecti: enYeniAd(["2026-08-14.md", "2026-08-13-9.md"]) === "2026-08-14.md" });

  // Refleks sayacı — bilinen cevaplı sahte metinle ayarlanır (A24: kırık alet de "temiz" der).
  const sahte = [
    "## Bölüm 1 — deneme",
    "1. birinci madde",
    "2. ikinci madde",
    "18. *(emekli — 17 ile birleştirildi.)*",
    "19. üçüncü madde",
    "   içerik satırı, madde değil",
    "## Bölüm 2 — burası sayılmaz",
    "1. Bölüm 2'nin maddesi sayılmamalı",
  ].join("\n");
  const sahteSayim = refleksMaddeSay(sahte);
  t.push({ ad: `sahte metinde 3 madde sayıyor, emekli yuvayı atlıyor (bulduğu: ${sahteSayim})`, gecti: sahteSayim === 3 });
  const gercek = refleksMaddeSayisi();
  t.push({ ad: `gerçek dosyada madde sayılıyor ve tavanı aşmıyor (${gercek}/${REFLEKS_MADDE_TAVANI})`, gecti: gercek !== null && gercek > 0 && gercek <= REFLEKS_MADDE_TAVANI });
  console.log("ÖLÇÜM ARACI SINAVI\n");
  for (const x of t) console.log(`  ${x.gecti ? "✔" : "✘"}  ${x.ad}`);
  const ok = t.every((x) => x.gecti);
  console.log(ok ? "\nSINAV GEÇİLDİ." : "\nSINAV KALDI — çıktısı KANIT DEĞİLDİR.");
  return ok;
}

if (process.argv.includes("sinav")) process.exit(sinav() ? 0 : 1);
process.exit(main() ? 0 : 1);
