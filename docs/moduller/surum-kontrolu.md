## Sürüm kontrolü

**Korunan dala doğrudan kod yazılmaz.** İş bir dalda yapılır, incelenir, sonra birleşir.
Korunan dallar ve iş dalı önekleri `ayarlar.conf`'ta.

**Kayıt işlemeden önce iki şey ölçülür:** doğru dalda mıyım · burada benim olmayan değişiklik
var mı. Yabancı değişiklik varsa dokunulmaz, sahibine bırakılır.

**Makinesi:** `scripts/kancalar/pre-commit`. Kanca bağlı değilse **koruma yoktur** —
bağlanması kurulum adımıdır ve `olcum kurulum` bunu ölçer.
