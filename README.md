# Bilgi Çekişmesi

Ben öğrencilerin sınıf ortamında oynayabileceği, Türkçe bilgi sorularından oluşan gerçek zamanlı 2 takımlı bir halat çekme yarışma oyunu yapmak istiyorum.

ÖNEMLİ:

Sana vereceğim görseli ana oyun ekranının TASARIM REFERANSI olarak kullan.

Görseldeki tasarımı mümkün olduğunca birebir koru.

- Görselin genel düzenini değiştirme.

- Halatın ortadaki konumunu koru.

- Sol ve sağ taraftaki öğrencilerin görünümünü koru.

- Ortadaki kırmızı bayrağı koru.

- Kesikli orta çizgiyi koru.

- Beyaz, temiz ve eğitim uygulamasına uygun görünümü koru.

- Görseldeki karakterleri ve halat çekme konseptini değiştirme.

- Gereksiz yeni görsel öğeler ekleme.

- Tasarım modern, temiz ve mobil/tablet uyumlu olsun.

Bu görsel sadece dekoratif bir ekran değil, oyunun gerçek zamanlı çalışan ana oyun alanı olacak.

==================================================

1. OYUNUN TEMEL MANTIĞI

==================================================

Oyun iki takım arasında oynanacak:

TAKIM 1 → SOL TARAF

TAKIM 2 → SAĞ TARAF

Her takımda sadece 1 öğrenci/oyuncu olacak.

Toplamda yarışmaya sadece 2 öğrenci katılabilecek.

Öğrenciler kendi telefonlarından yarışmaya katılacak.

Öğretmen veya oyun yöneticisi ana ekranı bilgisayarda, tablette veya büyük bir ekranda açabilecek.

==================================================

2. QR KOD İLE KATILIM

==================================================

Öğretmen "Yarışmayı Başlat" dediğinde sistem otomatik olarak bir yarışma odası oluştursun.

Ana ekranda büyük bir QR kod gösterilsin.

Öğrenciler telefonlarının kamerasıyla QR kodu okutsun.

QR kod öğrenciyi doğrudan yarışmaya katılma ekranına götürsün.

Öğrenciden:

- Adı

- Takım seçimi

istenebilir.

Ancak toplam sadece 2 oyuncuya izin verilsin.

Birinci öğrenci:

TAKIM 1 / SOL

İkinci öğrenci:

TAKIM 2 / SAĞ

Bir takım dolduğunda başka öğrenci o takıma katılamasın.

İki oyuncu da katıldığında öğretmen ekranında:

"2 OYUNCU HAZIR"

mesajı gösterilsin.

Ardından öğretmen "Oyunu Başlat" butonuna basabilsin.

==================================================

3. ANA OYUN EKRANI

==================================================

Ana oyun ekranının görünümü sana verdiğim görsel ile aynı mantıkta olsun.

Ekranın üst/orta bölümünde halat çekme alanı olacak.

SOLDA:

2 karakter/görsel

SAĞDA:

2 karakter/görsel

ORTADA:

Kırmızı bayrak

Ortada dikey kesikli çizgi

Halat yatay olarak ekranın ortasından geçecek.

Fakat oyun mantığında fiziksel karakter animasyonu yerine veya karakter animasyonunun yanında halatın konumu gerçek zamanlı olarak değişsin.

Halat başlangıçta tam ortada olsun.

Örneğin:

SOL ALAN |----- HALAT -----| SAĞ ALAN

Başlangıç:

        SOL       |       SAĞ

       ------🚩------

Doğru cevap geldikçe halat doğru cevap veren takımın tarafına doğru hareket etsin.

==================================================

4. SORU SİSTEMİ

==================================================

Her yarışmada toplam 10 Türkçe soru olacak.

Örnek:

SORU 1 / 10

Türkçede "..." kelimesinin anlamı nedir?

A) ...

B) ...

C) ...

D) ...

Oyuncular kendi telefonlarından soruyu ve cevap seçeneklerini görebilsin.

Ana ekranda da soru gösterilsin.

Her soru için cevap verme süresi olsun.

Varsayılan süre:

20 saniye

Sayaç:

20

19

18

17

...

şeklinde geri saysın.

Süre bittiğinde cevap verilemesin.

==================================================

5. DOĞRU CEVAP VE HALAT MEKANİĞİ

==================================================

En önemli oyun mekaniği:

Bir takım doğru cevap verdiğinde halat o takımın tarafına doğru hareket edecek.

Örneğin:

Başlangıç:

TAKIM 1 -------- 🚩 -------- TAKIM 2

Takım 1 doğru cevap verdi:

TAKIM 1 ----- 🚩 ----- TAKIM 2

Bir sonraki doğru cevap:

TAKIM 1 --- 🚩 ------- TAKIM 2

Bir sonraki:

TAKIM 1 -- 🚩 --------- TAKIM 2

Yani halat/merkez bayrağı doğru cevap veren takımın alanına doğru kademeli olarak ilerleyecek.

Yanlış cevap veren takım halatı çekemesin.

Doğru cevap veren takım halatı 1 adım kendisine çeksin.

Örneğin toplam 10 soru için:

Başlangıç = 0

Takım 1 doğru = +1 sol

Takım 2 doğru = +1 sağ

Halat tamamen bir takımın alanına ulaştığında oyun hemen kazanılabilir.

==================================================

6. HALATIN KAZANMA SINIRI

==================================================

Halatın hareket alanı belirli bir sınır içinde olsun.

Örneğin:

-100 = Takım 1 kazandı

0 = merkez

+100 = Takım 2 kazandı

Her doğru cevap:

Takım 1 → -10

Takım 2 → +10

Örneğin:

Takım 1 doğru cevap:

position = position - 10

Takım 2 doğru cevap:

position = position + 10

Halat tamamen takımın alanına geldiğinde:

"TAKIM 1 KAZANDI!"

veya

"TAKIM 2 KAZANDI!"

gösterilsin.

==================================================

7. ÇOK ÖNEMLİ: GERÇEK ZAMANLI SİSTEM

==================================================

İki öğrencinin telefonları ile ana oyun ekranı aynı anda çalışmalı.

Öğrenci telefonundan cevap verdiğinde:

1. Cevap sunucuya gönderilsin.

2. Cevap doğru veya yanlış kontrol edilsin.

3. Ana oyun ekranı anında güncellensin.

4. Halat animasyonlu şekilde hareket etsin.

5. İki telefonun ekranı da güncellensin.

6. Soru durumu herkes için aynı olsun.

Gecikme minimum olmalı.

WebSocket / realtime database veya uygun gerçek zamanlı teknoloji kullan.

==================================================

8. ÖĞRENCİ TELEFON EKRANI

==================================================

Öğrencinin telefonunda çok sade bir ekran olsun.

Üstte:

TAKIM 1

veya

TAKIM 2

Sonra:

SORU 1 / 10

Sorunun kendisi.

Altında büyük cevap butonları:

A

B

C

D

Öğrenci sadece bir cevap seçebilsin.

Cevap verdikten sonra:

"Cevabınız gönderildi"

gösterilsin.

Aynı soruya ikinci kez cevap veremesin.

Doğru cevap sonrası:

"DOĞRU! 🎉"

Yanlış cevap sonrası:

"YANLIŞ"

gösterilsin.

==================================================

9. ÖĞRETMEN / YÖNETİCİ PANELİ

==================================================

Bir yönetici ekranı oluştur.

Yönetici şunları yapabilsin:

- Yeni yarışma oluştur

- QR kod oluştur

- Oyuncuları gör

- Takımları gör

- Oyunu başlat

- Soruyu başlat

- Soruyu değiştirmek

- Oyunu duraklatmak

- Oyunu devam ettirmek

- Yarışmayı yeniden başlatmak

- Oyunu bitirmek

Panelde:

TAKIM 1

Oyuncu adı

Durum: HAZIR

TAKIM 2

Oyuncu adı

Durum: HAZIR

gösterilsin.

==================================================

10. SORU VERİTABANI

==================================================

Sorular veritabanında tutulmalı.

Her soru şu alanlara sahip olsun:

id

question

optionA

optionB

optionC

optionD

correctAnswer

category

difficulty

timeLimit

Örneğin:

{

  "question": "Türkiye'nin başkenti neresidir?",

  "optionA": "İstanbul",

  "optionB": "Ankara",

  "optionC": "İzmir",

  "optionD": "Bursa",

  "correctAnswer": "B",

  "category": "Genel Kültür",

  "difficulty": "Kolay",

  "timeLimit": 20

}

İlk aşamada sisteme en az 10 örnek Türkçe soru ekle.

Sorular eğitim amaçlı, öğrencilere uygun ve Türkçe olsun.

==================================================

11. SORU EKRANINDAKİ TASARIM

==================================================

Verdiğim görseldeki tasarım dilini koru.

Örneğin:

SORU 2 / 10 • GENEL KÜLTÜR

başlığı kullanılabilir.

Sorunun büyük ve okunabilir olması gerekiyor.

Öğrencilerin sınıf ekranından rahat okuyabileceği büyüklükte tasarla.

Ana oyun ekranı özellikle büyük ekran/projeksiyon için optimize edilmeli.

==================================================

12. ANİMASYON

==================================================

Halat hareket ederken ani şekilde ışınlanmasın.

Yumuşak animasyon kullan.

Örneğin:

transform: translateX(...)

veya uygun animasyon sistemi.

Doğru cevap geldiğinde:

- Halat hareket etsin.

- Ortadaki bayrak halatla birlikte hareket etsin.

- Görsel hafif bir çekilme efekti verebilir.

- Doğru cevap veren takım kısa süreli görsel geri bildirim alsın.

Ama tasarımı bozacak aşırı animasyon kullanma.

==================================================

13. OYUN SONU

==================================================

Bir takım kazanırsa ana ekranda büyük şekilde:

🏆 TAKIM 1 KAZANDI!

veya

🏆 TAKIM 2 KAZANDI!

göster.

Altında:

10 SORU TAMAMLANDI

veya halatın tamamen takım tarafına çekildiğini göster.

İki öğrencinin telefonunda da sonuç gösterilsin.

Örneğin:

🏆 KAZANDINIZ!

ve diğer telefonda:

OYUN SONA ERDİ

==================================================

14. YENİDEN OYNA

==================================================

Yönetici panelinde:

"YENİ YARIŞMA"

butonu olsun.

Buna basıldığında yeni oda ve yeni QR kod oluşturulsun.

Eski oyuncular otomatik olarak yeni oyuna taşınmasın.

==================================================

15. ODA SİSTEMİ

==================================================

Her yarışmaya benzersiz bir oda kodu oluştur.

Örneğin:

ABX729

Öğrenciler QR kodla girebildiği gibi gerekirse oda kodunu manuel de yazabilsin.

Her yarışmanın kendi:

roomId

olmalı.

Aynı anda birden fazla yarışma odasının karışmasını engelle.

==================================================

16. GÜVENLİK

==================================================

Bir yarışma odasına maksimum 2 oyuncu alınsın.

Aynı oyuncunun birden fazla cihazdan katılmasını engelle.

Oyuncu bir takıma katıldıktan sonra takımını değiştiremesin.

Cevap gönderme işlemi sunucu tarafından doğrulansın.

Doğru cevabı frontend kodunda açık şekilde kullanıcıya göndermemeye çalış.

Oyuncuların birbirlerinin cevaplarını görmesini engelle.

==================================================

17. RESPONSIVE TASARIM

==================================================

Ana oyun ekranı:

- Bilgisayar

- Tablet

- Akıllı tahta

- Televizyon

- Projeksiyon

üzerinde düzgün çalışmalı.

Öğrenci ekranı:

- iPhone

- Android

- küçük ekran

- büyük ekran

üzerinde düzgün çalışmalı.

==================================================

18. TEKNOLOJİ

==================================================

Modern web application olarak geliştir.

Frontend:

React + TypeScript

Styling:

Tailwind CSS

Backend/realtime:

Supabase veya Firebase gibi gerçek zamanlı çalışan uygun bir sistem.

Database:

PostgreSQL/Supabase veya uygun veritabanı.

QR kod:

Dinamik QR kod oluştur.

Gerçek zamanlı oyun durumu:

Realtime subscription / WebSocket kullan.

==================================================

19. VERİTABANI YAPISI

==================================================

Aşağıdaki tabloları oluştur:

rooms

- id

- room_code

- status

- created_at

- current_question

- rope_position

- winner

players

- id

- room_id

- name

- team

- connected

- created_at

questions

- id

- question

- option_a

- option_b

- option_c

- option_d

- correct_answer

- category

- difficulty

- time_limit

answers

- id

- room_id

- player_id

- question_id

- answer

- is_correct

- created_at

==================================================

20. OYUN DURUMU

==================================================

Room status değerleri:

WAITING

READY

PLAYING

PAUSED

FINISHED

WAITING:

Oyuncular bekliyor.

READY:

2 oyuncu hazır.

PLAYING:

Oyun devam ediyor.

PAUSED:

Oyun duraklatıldı.

FINISHED:

Oyun tamamlandı.

==================================================

21. TASARIMDA DEĞİŞTİRME

==================================================

EN ÖNEMLİ KURAL:

Sana verdiğim görselin ana görünümünü değiştirme.

Görselde:

- beyaz arka plan

- yuvarlatılmış büyük beyaz panel

- iki tarafta öğrenciler

- ortada halat

- ortada kırmızı bayrak

- dikey kesikli çizgi

- soru başlığı

- büyük soru metni

bulunuyor.

Bu düzeni koru.

Sadece sistemi çalıştırmak için gerekli interaktif özellikleri ekle.

Görselin havasını değiştirme.

Uygulamayı çocuklara uygun, eğlenceli fakat temiz ve eğitimsel bir yarışma uygulaması olarak hazırla.

==================================================

22. İLK AÇILIŞ EKRANI

==================================================

Uygulama açıldığında:

"HALAT YARIŞI"

başlığı.

Altında:

"2 TAKIM • TÜRKÇE BİLGİ YARIŞMASI"

butonu:

"YARIŞMA OLUŞTUR"

Yönetici bu butona bastığında yarışma odası oluşturulsun.

Ardından QR kod ekranı açılsın.

==================================================

23. QR KOD BEKLEME EKRANI

==================================================

Ekranda büyük QR kod.

Altında:

"TELEFONUNUZLA QR KODU OKUTUN"

Sonra:

TAKIM 1

🟢 Oyuncu bağlandı

TAKIM 2

🟢 Oyuncu bağlandı

İki kişi bağlandığında:

"İKİ OYUNCU HAZIR!"

ve:

"OYUNU BAŞLAT"

butonu.

==================================================

24. OYUN AKIŞI

==================================================

Tam akış:

1. Yönetici uygulamayı açar.

2. "Yarışma Oluştur" seçilir.

3. Yeni oda oluşturulur.

4. QR kod gösterilir.

5. Öğrenci 1 QR kodu okutur.

6. Öğrenci 1 adını girer.

7. Takım 1'e katılır.

8. Öğrenci 2 QR kodu okutur.

9. Öğrenci 2 adını girer.

10. Takım 2'ye katılır.

11. Sistem artık üçüncü öğrenciyi kabul etmez.

12. Yönetici "Oyunu Başlat" der.

13. Soru 1 açılır.

14. 20 saniyelik sayaç başlar.

15. Öğrenciler cevap verir.

16. Doğru cevap veren takım halatı kendisine çeker.

17. Soru 2 açılır.

18. Aynı işlem devam eder.

19. Toplam 10 soru oynanır.

20. Halat tamamen bir takımın alanına gelirse o takım kazanır.

21. Eğer 10 soru sonunda hiç kimse kazanma sınırına ulaşmadıysa, halatın son konumuna göre önde olan takım kazanır.

22. Kazanan ekranı gösterilir.

==================================================

25. ÖRNEK OYUN

==================================================

Başlangıç:

Takım 1: 0

Takım 2: 0

Halat: MERKEZ

Soru 1:

Takım 1 doğru.

Halat:

-10

Soru 2:

Takım 2 doğru.

Halat:

0

Soru 3:

Takım 2 doğru.

Halat:

+10

Soru 4:

Takım 2 doğru.

Halat:

+20

Bu şekilde oyun devam eder.

==================================================

26. HATA DURUMLARI

==================================================

İnternet bağlantısı kesilirse:

"Bağlantı yeniden kuruluyor..."

göster.

Oyuncu bağlantısı koparsa yönetici ekranında:

"OYUNCU BAĞLANTISI KESİLDİ"

göster.

Bağlantı tekrar gelirse oyuncu kaldığı yerden devam edebilsin.

==================================================

27. SON TASARIM HEDEFİ

==================================================

Uygulama kesinlikle basit bir soru-cevap sitesi gibi görünmemeli.

Gerçek bir sınıf yarışması uygulaması hissi vermeli.

Ana ekran verdiğim görsele çok yakın olmalı.

Oyuncular telefonlarından yarışmalı.

Öğretmen/yönetici büyük ekrandan oyunu yönetmeli.

Sadece 2 oyuncu olmalı.

2 takım birbirine karşı yarışmalı.

10 Türkçe soru bulunmalı.

Doğru cevap = halatı kendi tarafına çekme.

Yanlış cevap = hareket yok.

Halat tamamen kendi alanına gelirse = kazanma.

QR kod = hızlı katılım.

Gerçek zamanlı sistem = telefon ve ana ekran aynı anda güncellenmeli.

Öncelikle çalışan MVP'yi oluştur, sonra tasarımı ve animasyonları geliştir.

Kodları düzenli, modüler ve üretime uygun yaz.

Gereksiz özellik ekleme.

Bana verdiğim görselin tasarımını temel al ve bu sistemi doğrudan çalışan bir uygulama haline getir. Yukarı da gördüğün fotoğraf gibi olacak tasarım

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/65acfe69-fa34-455e-bb78-7ff5b1811adc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
