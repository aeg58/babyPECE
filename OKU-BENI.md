# Paralel Oturum Kılavuzu ⬜ TEK OTURUMLA ÇALIŞILACAKSA BU DOSYAYI SİL

Proje iki sohbet oturumundan yürütülecekse her birinin **ayrı çalışma alanı** olur:

| Klasör | Oturum | Dal | Ne yapar |
|---|---|---|---|
| `[proje]` | **Yürütücü** | görev dalları → `develop` | Kod, PR, deploy, doğrulama |
| `[proje]-gorev` | **Görev kaydı** | `docs/gorev-kayitlari` | Kayıt açar, plan yapar — **kod yazmaz** |

İkisi ayrı `git worktree`'dir: aynı depoyu paylaşır, **ayrı dalları** vardır.
Bağlayıcı kural: `AGENTS.md` §9.4.

## Görev kaydı oturumu için

1. **Kod yazma.** Analiz için kod **okumak** serbesttir; uygulamaya hiç geçilmez.
2. **Commit öncesi daima:** `git branch --show-current` + `git status --short`.
3. **Yeni görev numarası — İKİ dala birden bak.** Kayıt açmadan hemen önce en yüksek numara
   iki daldan okunur, sıradakisi alınır ve kayıt **aynı commit'te** işlenir.
4. **Kaydı aynı gün ana dala taşı.** Dal ucunda bırakma — diğer oturum gün başında göremez.
5. **Durum satırları gerçeği yansıtmalı.** Yazmadan önce güncel durumu doğrula.

## Çelişki çözümü

Aynı numara iki kayıtta kullanılmışsa: **uygulaması başlamış** kayıt numarayı korur,
**henüz başlanmamış** olan taşınır; iki kayda da eski/yeni numara notu düşülür.

**Çelişki hâlinde `AGENTS.md` geçerlidir; burası kural KAYNAĞI değildir.**
