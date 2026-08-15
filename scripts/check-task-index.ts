// Görev index'i ile kayıt klasörü tutuyor mu?
//
// NEDEN VAR: Görev index'i, `docs/gorevler/` klasörünün bir KOPYASIDIR — ve kopya
// sessizce çürür. Kaynak projede üç kayıt index'e hiç girmedi ve açık üç görev
// boyunca fark edilmedi. Kural: kaydı kim açarsa index satırını da AYNI commit'te
// ekler; bu betik o kuralın ağıdır — bir açık en fazla bir gün yaşar.
//
// ⚠️ BU BETİĞİN ATASI KÖRDÜ. "86 kayıt / 86 index · OK" diyordu; gerçekte klasörde
// 89 dosya vardı, ikisinin numarası yoktu ve bir numara İKİ dosyadaydı. İki kör nokta:
//   1. `new Set(...)` numaraları tekilleştiriyordu → çakışma görünmez oluyordu, üstelik
//      index tarafında da tekilleştirdiği için iki taraf birbirini DOĞRULUYORDU.
//   2. Ad süzgeci, numarası olmayan dosyaları SESSİZCE eliyordu.
// Yanlış güven veren bir denetim, hiç denetim olmamasından tehlikelidir.
//
// NE YAPAR: klasör ↔ index iki yönlü karşılaştırma · çakışan numara · numarasız dosya ·
// durum satırı biçimi. HER SEFERİNDE ne ölçtüğünü basar — "sıfır" cevabı, sıfırın hangi
// evrende ölçüldüğü yazılmadan kanıt değildir.
//
// SALT OKUR. Çalıştırma: npm run docs:check-index  ·  sınav: npm run docs:check-index -- sinav

import { readdirSync, readFileSync } from "node:fs";

// ─────────────────────────────────────────────────────────────────────────────
// PROJE AYARLARI — ŞABLONU KURARKEN DOLDURULACAK TEK BLOK
// Bu dosyada başka hiçbir yere proje adı, yol ya da önek yazılmaz.
// ─────────────────────────────────────────────────────────────────────────────
const KAYIT_KLASORU = "docs/gorevler";
const INDEX_DOSYASI = "gorev-index.md";
/** Görev numarası kalıbı — anket 12. Örnek: /PRJ-2026-\d{3}/ */
const NUMARA = /PRJ-2026-\d{3}/;
const NUMARA_ORNEK = "PRJ-2026-001";   // sınavda kullanılır
// ─────────────────────────────────────────────────────────────────────────────
const DURUM_SATIRI = /^- Durum:/;

/**
 * Klasörde duran ama görev kaydı OLMAYAN dosyalar.
 * Buraya bir dosya eklemek "bunu görmezden gel" demek DEĞİLDİR — "bunun kayıt
 * olmadığı bilinçli bir karardır" demektir. Listede olmayan numarasız dosya
 * uyarı üretir; listede olan, gerekçesiyle birlikte raporda görünür.
 */
const KAYIT_DEGIL: Record<string, string> = {
  // "00-genel-program.md": "birden çok görevi kapsayan program — tek bir görevin kaydı değil",
};


/**
 * Bilinçli olarak aynı numarayı taşıyan kayıtlar.
 * Anahtar: numara · Değer: neden iki dosya olduğu.
 * Bu liste, çakışmayı GİZLEMEZ — raporda ayrıca "bilinçli" diye basılır.
 */
const BILINCLI_CAKISMA: Record<string, string> = {
  // "PRJ-2026-005": "biri gerçek kayıt, diğeri '(İPTAL — MÜKERRER)' olarak kapatıldı",
};


type Bulgu = {
  dosyaSayisi: number;
  numaralar: string[];
  cakisan: { numara: string; dosyalar: string[]; bilincli: boolean }[];
  kayitDegil: { dosya: string; gerekce: string | null }[];
  indexNumaralari: string[];
  eksik: string[];
  fazla: string[];
  dosyaAdi: Map<string, string[]>;
};

/** Saf çözümleme — dosya sistemine dokunmaz, böylece sınav edilebilir. */
export function analiz(dosyalar: string[], indexSatirlari: string[]): Bulgu {
  const dosyaAdi = new Map<string, string[]>();
  const kayitDegil: Bulgu["kayitDegil"] = [];

  for (const d of dosyalar) {
    const m = d.match(NUMARA);
    if (!m) {
      kayitDegil.push({ dosya: d, gerekce: KAYIT_DEGIL[d] ?? null });
      continue;
    }
    const liste = dosyaAdi.get(m[0]) ?? [];
    liste.push(d);
    dosyaAdi.set(m[0], liste);
  }

  const numaralar = [...dosyaAdi.keys()].sort();
  const cakisan = numaralar
    .filter((n) => (dosyaAdi.get(n) ?? []).length > 1)
    .map((n) => ({
      numara: n,
      dosyalar: dosyaAdi.get(n) ?? [],
      bilincli: n in BILINCLI_CAKISMA,
    }));

  // Index tablosunun satırları: "| ÖNEK-YYYY-NNN | ad | bağlantı |"
  const indexNumaralari = indexSatirlari
    .filter((s) => new RegExp(`^\\|\\s*${NUMARA.source}\\s*\\|`).test(s))
    .map((s) => s.match(NUMARA)![0])
    .sort();

  const indexTekil = new Set(indexNumaralari);
  const eksik = numaralar.filter((n) => !indexTekil.has(n));
  const fazla = [...new Set(indexNumaralari)].filter((n) => !dosyaAdi.has(n));

  return {
    dosyaSayisi: dosyalar.length,
    numaralar,
    cakisan,
    kayitDegil,
    indexNumaralari,
    eksik,
    fazla,
    dosyaAdi,
  };
}

function rapor(b: Bulgu): boolean {
  // NE ÖLÇTÜM — her zaman basılır (A24)
  console.log(`Klasördeki dosya      : ${b.dosyaSayisi}`);
  console.log(`  ├ BY numaralı       : ${b.dosyaSayisi - b.kayitDegil.length}`);
  console.log(`  └ kayıt değil       : ${b.kayitDegil.length}`);
  console.log(`Benzersiz numara      : ${b.numaralar.length}`);
  console.log(`  └ çakışan numara    : ${b.cakisan.length}`);
  console.log(`Index satırı          : ${b.indexNumaralari.length}`);
  console.log("");

  let hata = false;

  if (b.kayitDegil.length) {
    const bilinmeyen = b.kayitDegil.filter((k) => !k.gerekce);
    console.log(`KAYIT DEĞİL — klasörde duruyor ama BY numarası yok (${b.kayitDegil.length}):`);
    for (const k of b.kayitDegil) {
      console.log(`  ${k.dosya}`);
      console.log(`     ${k.gerekce ? `bilinçli: ${k.gerekce}` : "⚠️  GEREKÇESİ YAZILI DEĞİL"}`);
    }
    if (bilinmeyen.length) {
      hata = true;
      console.log(
        "\n  Düzeltme: ya dosyaya numara ver, ya klasörden çıkar, ya da bu betikteki"
      );
      console.log("  KAYIT_DEGIL listesine gerekçesiyle ekle.");
    }
    console.log("");
  }

  if (b.cakisan.length) {
    const bilinmeyen = b.cakisan.filter((c) => !c.bilincli);
    console.log(`ÇAKIŞAN NUMARA — aynı numara birden çok dosyada (${b.cakisan.length}):`);
    for (const c of b.cakisan) {
      console.log(`  ${c.numara}${c.bilincli ? "  (bilinçli)" : "  ⚠️  BEKLENMEDİK"}`);
      for (const d of c.dosyalar) console.log(`     ${d}`);
      if (c.bilincli) console.log(`     gerekçe: ${BILINCLI_CAKISMA[c.numara]}`);
    }
    if (bilinmeyen.length) {
      hata = true;
      console.log(
        "\n  Kural (AGENTS.md §10.10/6): uygulaması BAŞLAMIŞ kayıt numarayı korur,"
      );
      console.log("  başlamamış olan taşınır; iki kayda da eski/yeni numara notu düşülür.");
    }
    console.log("");
  }

  if (b.eksik.length) {
    hata = true;
    console.log(`EKSİK — kaydı var, index'te yok (${b.eksik.length}):`);
    for (const n of b.eksik) {
      console.log(`  ${n}  →  ${(b.dosyaAdi.get(n) ?? []).join(", ")}`);
    }
    console.log("\n  Düzeltme: task-takip.md'deki 'Görev Index'i' tablosuna satırı ekle.");
    console.log(
      "  Kural (AGENTS.md §10.10/8): kaydı kim açarsa index satırını da AYNI commit'te ekler."
    );
    console.log("");
  }

  if (b.fazla.length) {
    hata = true;
    console.log(`FAZLA — index'te var, kaydı yok (${b.fazla.length}):`);
    for (const n of b.fazla) console.log(`  ${n}  →  kırık bağlantı`);
    console.log("");
  }

  if (!hata) {
    console.log("OK — görev index'i klasörle tutuyor.");
    console.log(
      `(Ölçülen evren: ${b.dosyaSayisi} dosya, ${b.numaralar.length} numara, ` +
        `${b.cakisan.length} bilinçli çakışma, ${b.kayitDegil.length} kayıt-değil dosya.)`
    );
  }
  return !hata;
}

/**
 * SINAV — aracı kullanmadan önce BİLİNEN bir cevapla ayarla (§10.12/5, ders A24).
 * Betik, bilerek bozulmuş durumlarda hatayı yakalamak ZORUNDA. Diske dokunmaz.
 */
function sinav(): boolean {
  const sorular: { ad: string; dosyalar: string[]; index: string[]; bekle: (b: Bulgu) => boolean }[] =
    [
      {
        ad: "temiz durum — hata bulmamalı",
        dosyalar: ["PRJ-2026-001-a.md", "PRJ-2026-002-b.md"],
        index: ["| PRJ-2026-001 | a | x |", "| PRJ-2026-002 | b | x |"],
        bekle: (b) => !b.eksik.length && !b.fazla.length && !b.cakisan.length,
      },
      {
        ad: "ÇAKIŞMA — aynı numara iki dosyada",
        dosyalar: ["PRJ-2026-001-a.md", "PRJ-2026-001-b.md"],
        index: ["| PRJ-2026-001 | a | x |"],
        bekle: (b) => b.cakisan.length === 1 && b.cakisan[0].numara === "PRJ-2026-001",
      },
      {
        ad: "NUMARASIZ — klasörde BY numarası olmayan dosya",
        dosyalar: ["PRJ-2026-001-a.md", "serbest-notlar.md"],
        index: ["| PRJ-2026-001 | a | x |"],
        bekle: (b) => b.kayitDegil.length === 1 && b.kayitDegil[0].gerekce === null,
      },
      {
        ad: "EKSİK — kaydı var, index'te yok",
        dosyalar: ["PRJ-2026-001-a.md", "PRJ-2026-002-b.md"],
        index: ["| PRJ-2026-001 | a | x |"],
        bekle: (b) => b.eksik.length === 1 && b.eksik[0] === "PRJ-2026-002",
      },
      {
        ad: "FAZLA — index'te var, kaydı yok",
        dosyalar: ["PRJ-2026-001-a.md"],
        index: ["| PRJ-2026-001 | a | x |", "| PRJ-2026-009 | yok | x |"],
        bekle: (b) => b.fazla.length === 1 && b.fazla[0] === "PRJ-2026-009",
      },
    ];

  console.log("ÖLÇÜM ARACI SINAVI (§10.12/5, ders A24)");
  console.log("Bilinen hatalar kuruluyor; betik hepsini yakalamak zorunda.\n");

  let hepsiGecti = true;
  for (const s of sorular) {
    const gecti = s.bekle(analiz(s.dosyalar, s.index));
    console.log(`  ${gecti ? "✔" : "✘"}  ${s.ad}`);
    if (!gecti) hepsiGecti = false;
  }

  // Durum sınıflayıcısı — özellikle "satırdaki geçmiş notu" tuzağı (A43)
  const durumSorulari: { ad: string; satir: string; bekle: "acik" | "kapali" }[] = [
    { ad: "durum: sade kapalı", satir: "- Durum: **Tamamlandı** (2026-08-01)", bekle: "kapali" },
    { ad: "durum: sade açık", satir: "- Durum: **Engelli — dış bağımlılık**", bekle: "acik" },
    {
      ad: "TUZAK — açık durum, ama notta 'Tamamlandı' geçiyor (A43)",
      satir:
        '- Durum: **TEST OK bekleniyor** — iş bitti. *(düzeltme: bu satır "Tamamlandı" yazıyordu)*',
      bekle: "acik",
    },
    {
      ad: "TUZAK — kapalı durum, ama notta 'bekleniyor' geçiyor",
      satir: "- Durum: **İptal** — sahibinin kararı; önce onay bekleniyor sanılmıştı",
      bekle: "kapali",
    },
  ];
  for (const s of durumSorulari) {
    const gecti = durumSinifi(s.satir) === s.bekle;
    console.log(`  ${gecti ? "✔" : "✘"}  ${s.ad}`);
    if (!gecti) hepsiGecti = false;
  }

  console.log(
    hepsiGecti
      ? "\nSINAV GEÇİLDİ — aracın çıktısı kanıt sayılabilir."
      : "\nSINAV KALDI — bu betiğin 'OK' çıktısı KANIT DEĞİLDİR."
  );
  return hepsiGecti;
}

/**
 * Bir durum satırını "açık" / "kapalı" diye sınıflar.
 *
 * ⚠️ Yalnız DURUM DEĞERİNE bakar — satırın başındaki ilk **kalın** öbek. Satırın
 * gerisinde geçmişe dönük not bulunabilir ("bu satır önce 'Tamamlandı' yazıyordu")
 * ve tüm satıra bakan bir kalıp ona eşleşip yanlış alarm üretir. 2026-08-11'de tam
 * bu yaşandı: PRJ-2026-003'ün iki satırı düzeltildikten SONRA bile "çelişiyor" dedi,
 * çünkü kalıp düzeltme notundaki kelimeye takılmıştı (ders A43).
 */
export function durumSinifi(satir: string): "acik" | "kapali" {
  const deger = satir.match(/^- Durum:\s*[^*]*\*\*(.+?)\*\*/)?.[1] ?? satir;
  return /tamamland|iptal/.test(trKucult(deger)) ? "kapali" : "acik";
}

/**
 * Türkçeye uygun küçültme.
 *
 * ⚠️ JavaScript'in `/i` bayrağı Türkçe **İ** (U+0130) ile eşleşmez: standart eşleme
 * onu `i` + birleşen nokta hâline getirir, düz `i` ile tutmaz. Yani `/iptal/i`
 * kalıbı **"İptal"** yazan bir durumu KAÇIRIR ve o kayıt sessizce "açık" sayılır.
 * Bu tuzak 2026-08-11 sınavında yakalandı — ders A47'nin (yazım biçimi farkı kalıbı
 * boşa düşürür) birebir örneği, üstelik dersi yazan betiğin kendisinde.
 */
function trKucult(s: string): string {
  return s.replace(/İ/g, "i").replace(/I/g, "ı").toLowerCase();
}

/**
 * Durum satırı denetimi — gün başı taramasının (`grep "^- Durum:"`) güvenilir
 * olup olmadığını ölçer. UYARI üretir, betiği düşürmez: birden çok durum satırı
 * olan kayıtların düzeltilmesi biçim değil İÇERİK kararıdır (ders A6b: durum
 * satırı bağlayıcıdır, sessizce yeniden yazılmaz).
 */
function durumDenetimi(): boolean {
  const dosyalar = readdirSync(KAYIT_KLASORU).filter((d) => d.endsWith(".md"));
  const yok: string[] = [];
  const gomulu: string[] = [];
  const coklu: { dosya: string; satirlar: string[] }[] = [];

  for (const d of dosyalar) {
    if (d in KAYIT_DEGIL) continue;
    const tum = readFileSync(`${KAYIT_KLASORU}/${d}`, "utf8").split("\n");
    const satirlar = tum.filter((s) => DURUM_SATIRI.test(s));
    if (satirlar.length === 0) {
      // Kural 1 ihlali: durum başka bir alanın arkasına "·" ile gömülmüş olabilir
      if (tum.some((s) => s.startsWith("- ") && /\s·\s\*{0,2}Durum:/.test(s))) gomulu.push(d);
      else yok.push(d);
    } else if (satirlar.length > 1) coklu.push({ dosya: d, satirlar });
  }

  console.log("");
  console.log(`Durum satırı denetimi : ${dosyalar.length - Object.keys(KAYIT_DEGIL).length} kayıt tarandı`);
  console.log(`  ├ durum satırı yok  : ${yok.length}`);
  console.log(`  ├ satır içine gömülü: ${gomulu.length}   (kural 1 ihlali — DÜŞÜRÜR)`);
  console.log(`  └ birden çok durum  : ${coklu.length}   (kural 2 — uyarı, düşürmez)`);

  if (yok.length) {
    console.log("\n⚠️  DURUM SATIRI YOK — gün başı taraması bu kayıtları GÖREMEZ:");
    for (const d of yok) console.log(`  ${d}`);
    console.log("\n  Kural (AGENTS.md §5): her kayıtta başlık bloğunda tam bir tane");
    console.log('  "- Durum:" satırı bulunur, kendi satırında.');
  }

  if (coklu.length) {
    console.log("\n⚠️  BİRDEN ÇOK DURUM SATIRI — tarama bu kayıtları çift sayar:");
    for (const c of coklu) {
      // ⚠️ Kalıp, satırın TAMAMINA değil yalnız DURUM DEĞERİNE bakar. Değer, satırın
      // başındaki ilk **kalın** öbektir. Satırın gerisinde geçmişe dönük not ("bu satır
      // önce 'Tamamlandı' yazıyordu") bulunabilir ve tüm satıra bakan bir kalıp ona
      // eşleşip yanlış alarm üretir — 2026-08-11'de tam bu yaşandı (ders A43).
      const celiski = new Set(c.satirlar.map(durumSinifi)).size > 1;
      console.log(`  ${c.dosya}${celiski ? "   ⚠️ SATIRLAR ÇELİŞİYOR" : ""}`);
      for (const s of c.satirlar) console.log(`     ${s.slice(0, 96)}`);
    }
    console.log("\n  Alt bölümdeki geçiş/faz kayıtları '- Durum:' ile başlamamalı;");
    console.log("  bağlayıcı durum ÜST satırdır (ders A6b, AGENTS.md §7.3/13).");
    console.log("  Düzeltme İÇERİK kararıdır — sahibine sorulmadan yeniden yazılmaz.");
    console.log("  Alt bölüm etiketleri: '- Geçiş durumu:' · '- Faz N durumu:' · '- Durum ayrıntısı:'");
  }

  if (gomulu.length) {
    console.log("\n⚠️  SATIR İÇİNE GÖMÜLÜ DURUM — kural 1 ihlali (AGENTS.md §5):");
    for (const d of gomulu) console.log(`  ${d}`);
    console.log("\n  Durum kendi satırında başlamalı: '- Durum: ...'");
  }

  // Kural 1 ihlalleri (yok / gömülü) betiği düşürür; kural 2 uyarıda kalır.
  return yok.length === 0 && gomulu.length === 0;
}

function main() {
  if (process.argv.includes("sinav")) {
    process.exit(sinav() ? 0 : 1);
  }

  const dosyalar = readdirSync(KAYIT_KLASORU).filter((d) => d.endsWith(".md"));
  const index = readFileSync(INDEX_DOSYASI, "utf8").split("\n");
  const temiz = rapor(analiz(dosyalar, index));
  const durumTemiz = durumDenetimi();
  process.exit(temiz && durumTemiz ? 0 : 1);
}

main();
