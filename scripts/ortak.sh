#!/bin/sh
# ortak.sh — olcum ile commit kancasının PAYLAŞTIĞI mantık.
# İki yere kopyalanmaz: kopya, güncellenmediği anda sessizce çürür.

# Kod yolu mu? BEYAZ LİSTE: kod dışı kalıplar DIŞINDAKİ her yol koddur.
# (Kara liste kullanan bir önceki sürümde Python, Go, Rust ve düz HTML korumasızdı.)
kod_yolu_mu() {  # $1 = yol, $2 = kod dışı kalıplar
  y=$1
  for k in $2; do
    case "$y" in $k) return 1;; esac
    case "$k" in */) case "$y" in $k*) return 1;; esac;; esac
    case "$k" in *[!/]) case "$y" in "$k"/*) return 1;; esac;; esac
  done
  return 0
}

# Korunan dal listesi. ASLA boş dönmez ve hangi kaynaktan geldiğini ikinci satırda söyler.
# (Bir önceki sürümde liste "develop main" sabitti; `git init` `master` ürettiği için
#  kanca yeni depoların hepsinde SESSİZCE hiçbir şey korumuyordu.)
korunan_dallar() {  # $1 = ayarlardaki KORUNAN_DALLAR, $2 = ayarlardaki ANA_DAL
  if [ -n "${1:-}" ]; then printf '%s\nayarlar.conf\n' "$1"; return 0; fi
  if [ -n "${2:-}" ]; then printf '%s\nayarlar.conf (ANA_DAL)\n' "$2"; return 0; fi
  h=$(git symbolic-ref --quiet --short refs/remotes/origin/HEAD 2>/dev/null | sed 's#^origin/##')
  if [ -n "$h" ]; then printf '%s\norigin/HEAD\n' "$h"; return 0; fi
  printf 'main master develop trunk\nyapılandırılmadı — yaygın adlar\n'
}
