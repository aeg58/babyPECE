// Gün sonu kapanış denetimi — AGENTS.md §9 adım 2'nin yedi kontrolü, tek komutta.
//
// NEDEN VAR: Gün sonunda yedi kontrol elle çalıştırılıyordu; her biri ayrı komut,
// her biri unutulabilir. Daha kötüsü: bazı kontroller "temiz" görünüp aslında
// ölçülmemiş oluyordu (ör. ikinci çalışma alanı hiç bakılmadan geçiliyordu).
//
// ÜÇ DÜRÜSTLÜK ŞARTI (tasarım kararı, 2026-08-12):
//   1. Her maddenin yanına NEREDE ölçüldüğü yazılır.
//   2. Ölçülemeyen madde SESSİZCE ATLANMAZ — "ELLE" diye BASILIR. Sunucudaki süreç
//      durumu ve oturum içi görev listesi ölçülemez; bunlar ekranda görünür kalır.
//   3. Çıktı özetlenmeden gün sonu raporuna yapıştırılır.
// Yanlış güven veren bir denetim, hiç denetim olmamasından tehlikelidir (ders A24).
//
// SALT OKUR: hiçbir dosyayı değiştirmez, hiçbir süreç başlatmaz/durdurmaz.
// Çalıştırma : npm run gun:denetim
//              npm run gun:denetim -- sinav   ← aracı bilinen bir cevapla ayarla

import { execSync } from "node:child_process";
import { existsSync } from "node:fs";

// ─────────────────────────────────────────────────────────────────────────────
// PROJE AYARLARI — ŞABLONU KURARKEN DOLDURULACAK TEK BLOK
// Bu dosyada başka hiçbir yere proje adı, yol ya da önek yazılmaz.
// ─────────────────────────────────────────────────────────────────────────────
/** İkinci çalışma alanı (git worktree). Tek oturumla çalışılıyorsa: null */
const GOREV_ALANI: string | null = null;
/** Yerelde dinlenen geliştirme portu. */
const GELISTIRME_PORTU = 3000;
/** İkinci oturumun kayıt dalı. Yoksa: null */
const KAYIT_DALI: string | null = null;
// ─────────────────────────────────────────────────────────────────────────────

type Sonuc = { ad: string; nerede: string; durum: "temiz" | "dikkat" | "elle"; detay: string };

function kabuk(komut: string, cwd?: string): string {
  try {
    return execSync(komut, { encoding: "utf8", cwd, stdio: ["ignore", "pipe", "pipe"] }).trim();
  } catch (e) {
    const hata = e as { stdout?: string; stderr?: string };
    return (hata.stdout ?? "").trim() || `HATA: ${(hata.stderr ?? "").trim().split("\n")[0]}`;
  }
}

function calismaAlani(yol: string, ad: string): Sonuc[] {
  if (!existsSync(`${yol}/.git`) && !existsSync(yol)) {
    return [{ ad: `Commit edilmemiş değişiklik (${ad})`, nerede: yol, durum: "elle", detay: "klasör bulunamadı — elle bak" }];
  }
  const dal = kabuk("git branch --show-current", yol) || "develop";
  const kirli = kabuk("git status --porcelain", yol);
  const uzak = kabuk(`git log --oneline origin/${dal}..HEAD`, yol);
  return [
    {
      ad: `Commit edilmemiş değişiklik (${ad})`,
      nerede: `${yol} · dal ${dal}`,
      durum: kirli ? "dikkat" : "temiz",
      detay: kirli ? `${kirli.split("\n").length} dosya:\n      ${kirli.split("\n").join("\n      ")}` : "yok",
    },
    {
      ad: `Push edilmemiş commit (${ad})`,
      nerede: `${yol} · origin/${dal}..HEAD`,
      durum: uzak && !uzak.startsWith("HATA") ? "dikkat" : "temiz",
      detay: uzak ? uzak.split("\n").slice(0, 5).join("\n      ") : "yok",
    },
  ];
}

function denetle(): Sonuc[] {
  const s: Sonuc[] = [];
  s.push(...calismaAlani(".", "ana klasör"));
  if (GOREV_ALANI) s.push(...calismaAlani(GOREV_ALANI, "ikinci çalışma alanı"));

  const pr = kabuk("gh pr list --state open --json number,title --jq '.[] | \"#\\(.number) \\(.title)\"'");
  s.push({
    ad: "Açık pull request",
    nerede: "gh pr list --state open",
    durum: pr && !pr.startsWith("HATA") ? "dikkat" : pr.startsWith("HATA") ? "elle" : "temiz",
    detay: pr || "yok",
  });

  kabuk("git fetch origin");
  const dallar = kabuk("git branch -a --no-merged develop");
  s.push({
    ad: "Gerçekten açık dal",
    nerede: "git branch -a --no-merged develop",
    durum: dallar ? "dikkat" : "temiz",
    detay: dallar || "yok (birleşmiş ama silinmemiş dallar buraya düşmez — §10.10/9)",
  });

  const kayitDali = KAYIT_DALI ? kabuk(`git log --oneline develop..origin/${KAYIT_DALI}`) : "";
  s.push({
    ad: "Kayıt dalı develop'a indi mi",
    nerede: "develop..origin/docs/gorev-kayitlari",
    durum: kayitDali && !kayitDali.startsWith("HATA") ? "dikkat" : "temiz",
    detay: kayitDali || "develop'a inmemiş kayıt yok",
  });

  const port3000 = kabuk(`lsof -nP -iTCP:${GELISTIRME_PORTU} -sTCP:LISTEN`);
  s.push({
    ad: `Yereldeki çalışan süreç (${GELISTIRME_PORTU})`,
    nerede: `lsof -nP -iTCP:${GELISTIRME_PORTU} -sTCP:LISTEN`,
    durum: port3000 && !port3000.startsWith("HATA") ? "dikkat" : "temiz",
    detay: port3000 ? port3000.split("\n").slice(1).join("\n      ") : "dinleyen yok",
  });

  const index = kabuk("npx tsx scripts/check-task-index.ts");
  s.push({
    ad: "Görev index'i + durum satırları",
    nerede: "npm run docs:check-index",
    durum: index.includes("OK — görev index'i") ? "temiz" : "dikkat",
    detay: index.split("\n").filter((l) => /^(Klasördeki|OK|EKSİK|FAZLA|⚠)/.test(l)).join("\n      ") || index.slice(0, 200),
  });

  // ÖLÇÜLEMEYENLER — sessizce atlanmaz
  s.push({
    ad: "Sunucudaki süreçler ve yeniden başlatma sayacı",
    nerede: "uzak sunucu — bu betik sunucuya BAĞLANMAZ",
    durum: "elle",
    detay: "ELLE: sunucudaki süreç listesi ve yeniden başlatma sayacı elle okunur.\n      Ad ararken yazım varyantlarına dikkat (refleks 4).",
  });
  s.push({
    ad: "Oturum içi görev listesi",
    nerede: "sohbetin kendi görev takibi — dosyaya yansımaz",
    durum: "elle",
    detay: "ELLE: bu oturumda 'devam ediyor' kalan madde var mı, sohbet baştan taranır (§9 adım 1).",
  });

  return s;
}

function bas(sonuclar: Sonuc[]): boolean {
  const simge = { temiz: "✔", dikkat: "⚠", elle: "✋" };
  console.log("GÜN SONU KAPANIŞ DENETİMİ (AGENTS.md §9 adım 2)");
  console.log("Bu çıktı ÖZETLENMEDEN gün sonu raporuna yapıştırılır.\n");
  for (const s of sonuclar) {
    console.log(`${simge[s.durum]}  ${s.ad}`);
    console.log(`    nerede: ${s.nerede}`);
    console.log(`    ${s.detay}`);
    console.log("");
  }
  const dikkat = sonuclar.filter((s) => s.durum === "dikkat").length;
  const elle = sonuclar.filter((s) => s.durum === "elle").length;
  console.log(`ÖZET: ${sonuclar.length - dikkat - elle} temiz · ${dikkat} dikkat · ${elle} ELLE ölçülecek`);
  if (elle) console.log("⚠️  ELLE maddeleri bu betik ÖLÇMEDİ. Ölçülmemiş madde 'temiz' sayılmaz.");
  return dikkat === 0;
}

/** SINAV — bilinen bir cevapla ayarla (§10.12/5, ders A24). */
function sinav(): boolean {
  console.log("ÖLÇÜM ARACI SINAVI\n");
  const t: { ad: string; gecti: boolean }[] = [];

  // 1. Kirli çalışma alanı gerçekten yakalanıyor mu? (bilinen doğru: git status)
  const gercekKirli = kabuk("git status --porcelain") !== "";
  const olculen = calismaAlani(".", "ana").find((s) => s.ad.startsWith("Commit"))!;
  t.push({ ad: `kirlilik ölçümü git status ile uyuşuyor (gerçek: ${gercekKirli ? "kirli" : "temiz"})`,
           gecti: (olculen.durum === "dikkat") === gercekKirli });

  // 2. Var olmayan klasör "temiz" değil "ELLE" dönmeli
  t.push({ ad: "olmayan çalışma alanı 'temiz' demiyor, ELLE diyor",
           gecti: calismaAlani("../__yok__", "sınav")[0].durum === "elle" });

  // 3. Ölçülemeyenler listede görünüyor mu?
  const hepsi = ["Sunucudaki süreçler", "Oturum içi görev listesi"];
  const s = denetle();
  t.push({ ad: "ölçülemeyen iki madde ekranda ELLE olarak basılıyor",
           gecti: hepsi.every((a) => s.some((x) => x.ad.startsWith(a) && x.durum === "elle")) });

  for (const x of t) console.log(`  ${x.gecti ? "✔" : "✘"}  ${x.ad}`);
  const hepsiGecti = t.every((x) => x.gecti);
  console.log(hepsiGecti ? "\nSINAV GEÇİLDİ." : "\nSINAV KALDI — bu betiğin çıktısı KANIT DEĞİLDİR.");
  return hepsiGecti;
}

if (process.argv.includes("sinav")) process.exit(sinav() ? 0 : 1);
process.exit(bas(denetle()) ? 0 : 1);
