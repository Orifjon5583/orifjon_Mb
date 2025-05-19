// Buni mavjud questions.js faylingizdagi questions massiviga qo'shishingiz mumkin.
// Yoki alohida `const newSetOfQuestions3 = [...]` qilib,
// keyin script.js da birlashtirishingiz mumkin.
// Agar mavjud `questions` massiviga qo'shsangiz, avvalgi oxirgi elementdan keyin vergul (,) qo'yishni unutmang.

const questionsSet3 = [
  {
    question: "Duplikatlar nima?",
    options: [
      "Jadvaldagi noyob yozuvlar",
      "Jadvaldagi bir xil, takrorlanuvchi yozuvlar yoki qiymatlar",
      "Jadvaldagi xato kiritilgan yozuvlar",
      "Jadvaldagi NULL qiymatga ega yozuvlar",
    ],
    answer: "Jadvaldagi bir xil, takrorlanuvchi yozuvlar yoki qiymatlar",
  },
  {
    question: "So'rovlarning ishlashi nega sekinlashadi?",
    options: [
      "Jadvalda ma'lumotlar juda kam bo'lgani uchun",
      "Indekslarning ko'pligi va ulardan noto'g'ri foydalanish tufayli",
      "Indekslarning yo'qligi, katta hajmdagi ma'lumotlar, optimallashtirilmagan so'rovlar, yomon jadval dizayni sababli",
      "Serverning resurslari haddan tashqari ko'pligi sababli",
    ],
    answer:
      "Indekslarning yo'qligi, katta hajmdagi ma'lumotlar, optimallashtirilmagan so'rovlar, yomon jadval dizayni sababli",
  },
  {
    question: "Xotiradan ko'p joy olinsa nima bo'ladi?",
    options: [
      "Ma'lumotlar bazasi tezroq ishlaydi",
      "Tizimning umumiy ishlashi sekinlashishi, boshqa ilovalar uchun xotira yetishmasligi, tizim 'qotib qolishi' mumkin",
      "Xotira avtomatik ravishda kengayadi",
      "Hech qanday o'zgarish bo'lmaydi",
    ],
    answer:
      "Tizimning umumiy ishlashi sekinlashishi, boshqa ilovalar uchun xotira yetishmasligi, tizim 'qotib qolishi' mumkin",
  },
  {
    question: "ID nima?",
    options: [
      "Jadvalning nomi",
      "Jadvaldagi yozuvni noyob tarzda aniqlovchi qiymat (identifikator), ko'pincha birlamchi kalit sifatida ishlatiladi",
      "Foydalanuvchining tizimga kirish nomi",
      "Ma'lumotlar bazasining versiya raqami",
    ],
    answer:
      "Jadvaldagi yozuvni noyob tarzda aniqlovchi qiymat (identifikator), ko'pincha birlamchi kalit sifatida ishlatiladi",
  },
  {
    question:
      "Jadvalni to'g'ri dizayn qilish uchun nimalar qilish kerak? Faqat to'g'ri yechim yozilgan qatorni toping.",
    options: [
      "Barcha ma'lumotlarni bitta katta jadvalda saqlash, ustun nomlarini qisqa qilish",
      "Ma'lumotlarni normallashtirish (takrorlanishni kamaytirish), to'g'ri ma'lumot turlarini tanlash, kerakli cheklovlar (constraints) va indekslarni qo'llash",
      "Har bir ustun uchun TEXT ma'lumot turini ishlatish, indekslardan foydalanmaslik",
      "Jadvallarni imkon qadar ko'p ustunlar bilan yaratish, nomlashda faqat raqamlardan foydalanish",
    ],
    answer:
      "Ma'lumotlarni normallashtirish (takrorlanishni kamaytirish), to'g'ri ma'lumot turlarini tanlash, kerakli cheklovlar (constraints) va indekslarni qo'llash",
  },
  {
    question: "UNIQUE cheklovi nima?",
    options: [
      "Ustundagi barcha qiymatlar bir xil bo'lishini ta'minlaydi",
      "Ustundagi qiymatlarning takrorlanmasligini (har biri noyob bo'lishini) ta'minlaydi, bir nechta NULL qiymatga ruxsat berishi mumkin (DBMS ga qarab)",
      "Ustun faqat NULL qiymat qabul qilishini ta'minlaydi",
      "Ustun qiymati har doim musbat bo'lishini ta'minlaydi",
    ],
    answer:
      "Ustundagi qiymatlarning takrorlanmasligini (har biri noyob bo'lishini) ta'minlaydi, bir nechta NULL qiymatga ruxsat berishi mumkin (DBMS ga qarab)",
  },
  {
    question: "PRIMARY KEY (Birlamchi kalit) nima?",
    options: [
      "Jadvaldagi istalgan matnli ustun",
      "Jadvaldagi har bir yozuvni noyob tarzda aniqlaydigan va NULL qiymat qabul qilmaydigan bir yoki bir nechta ustunlar to'plami",
      "Boshqa jadvalga ishora qiluvchi kalit",
      "Faqat o'qish uchun mo'ljallangan ustun",
    ],
    answer:
      "Jadvaldagi har bir yozuvni noyob tarzda aniqlaydigan va NULL qiymat qabul qilmaydigan bir yoki bir nechta ustunlar to'plami",
  },
  {
    question: "FOREIGN KEY (Tashqi kalit) nima?",
    options: [
      "Jadvalning asosiy identifikatori",
      "Bir jadvaldagi ustun(lar) bo'lib, boshqa jadvalning PRIMARY KEY yoki UNIQUE kalitiga murojaat qiladi va jadvallar o'rtasidagi aloqadorlikni (referential integrity) ta'minlaydi",
      "Yashirin ustun",
      "Vaqtinchalik saqlanadigan kalit",
    ],
    answer:
      "Bir jadvaldagi ustun(lar) bo'lib, boshqa jadvalning PRIMARY KEY yoki UNIQUE kalitiga murojaat qiladi va jadvallar o'rtasidagi aloqadorlikni (referential integrity) ta'minlaydi",
  },
  {
    question:
      "Jadvallarni bir-biriga bog'lashning (aloqa turlarining) barcha usullari to'g'ri ko'rsatilgan qatorni toping.",
    options: [
      "Birga bir, Birga ko'p, Ko'pga ko'p",
      "Oddiy, Murakkab, Aralash",
      "Ichki, Tashqi, To'liq",
      "Asosiy, Yordamchi, Vaqtinchalik",
    ],
    answer: "Birga bir, Birga ko'p, Ko'pga ko'p",
  },
  {
    question: "Birga bir bog'lanish nima?",
    options: [
      "Birinchi jadvaldagi bitta yozuv ikkinchi jadvaldagi bir nechta yozuvga mos kelishi mumkin",
      "Birinchi jadvaldagi bitta yozuv ikkinchi jadvaldagi faqat bitta yozuvga mos keladi va aksincha",
      "Birinchi jadvaldagi bir nechta yozuv ikkinchi jadvaldagi bir nechta yozuvga mos kelishi mumkin",
      "Jadvallar orasida hech qanday bog'lanish yo'q",
    ],
    answer:
      "Birinchi jadvaldagi bitta yozuv ikkinchi jadvaldagi faqat bitta yozuvga mos keladi va aksincha",
  },
  {
    question: "Birga ko'p bog'lanish nima?",
    options: [
      "Birinchi jadvaldagi bitta yozuv ikkinchi jadvaldagi faqat bitta yozuvga mos keladi",
      "Birinchi jadvaldagi bitta yozuv ikkinchi jadvaldagi bir nechta yozuvga mos kelishi mumkin, lekin ikkinchi jadvaldagi har bir yozuv birinchi jadvaldagi faqat bitta yozuvga mos keladi",
      "Har ikkala jadvaldagi yozuvlar bir-biriga ko'p marta mos kelishi mumkin",
      "Bu turdagi bog'lanish mavjud emas",
    ],
    answer:
      "Birinchi jadvaldagi bitta yozuv ikkinchi jadvaldagi bir nechta yozuvga mos kelishi mumkin, lekin ikkinchi jadvaldagi har bir yozuv birinchi jadvaldagi faqat bitta yozuvga mos keladi",
  },
  {
    question: "Ko'pga ko'p bog'lanish nima?",
    options: [
      "Birinchi jadvaldagi bitta yozuv ikkinchi jadvaldagi faqat bitta yozuvga mos keladi",
      "Birinchi jadvaldagi bir nechta yozuv ikkinchi jadvaldagi bir nechta yozuvga mos kelishi mumkin, odatda uchinchi (oraliq) jadval orqali amalga oshiriladi",
      "Faqat bitta jadval ichidagi bog'lanish",
      "Bog'lanish faqat bitta yo'nalishda ishlaydi",
    ],
    answer:
      "Birinchi jadvaldagi bir nechta yozuv ikkinchi jadvaldagi bir nechta yozuvga mos kelishi mumkin, odatda uchinchi (oraliq) jadval orqali amalga oshiriladi",
  },
  {
    question: "Ko'pga ko'p bog'lanish qanday hosil bo'ladi?",
    options: [
      "Ikki jadvalni to'g'ridan-to'g'ri FOREIGN KEY orqali bog'lash bilan",
      "Ikkala jadvalga ham bir xil nomdagi PRIMARY KEY qo'yish bilan",
      "Uchinchi (oraliq yoki bog'lovchi) jadval yordamida, bu jadval har ikki asosiy jadvalning PRIMARY KEY larini FOREIGN KEY sifatida saqlaydi",
      "Har bir jadvalga `ManyToManyField` ustunini qo'shish bilan (bu ORM terminologiyasi)",
    ],
    answer:
      "Uchinchi (oraliq yoki bog'lovchi) jadval yordamida, bu jadval har ikki asosiy jadvalning PRIMARY KEY larini FOREIGN KEY sifatida saqlaydi",
  },
  {
    question: "n:n bog'lanish qanday hosil bo'ladi? (n:n bu ko'pga ko'p)",
    options: [
      "Ikkala jadvalda ham bir xil PRIMARY KEY ishlatish bilan",
      "Oraliq (junction/linking) jadval orqali, har bir asosiy jadvalga BIRGA KO'P bog'lanish bilan",
      "Har bir jadvalga ko'p sonli FOREIGN KEY ustunlarini qo'shish bilan",
      "Maxsus `MANY TO MANY JOIN` operatori bilan",
    ],
    answer:
      "Oraliq (junction/linking) jadval orqali, har bir asosiy jadvalga BIRGA KO'P bog'lanish bilan",
  },
  {
    question: "`REFERENCES` kalit so'zi (FOREIGN KEY e'lon qilishda) nima?",
    options: [
      "Joriy jadval nomini ko'rsatadi",
      "Tashqi kalit murojaat qilayotgan (bog'lanayotgan) boshqa jadval va uning ustunini ko'rsatadi",
      "Ma'lumotlar bazasining manbasini ko'rsatadi",
      "Foydalanuvchi uchun qo'llanmani ko'rsatadi",
    ],
    answer:
      "Tashqi kalit murojaat qilayotgan (bog'lanayotgan) boshqa jadval va uning ustunini ko'rsatadi",
  },
  {
    question: "Jadvallarni bog'lashdan maqsad nima?",
    options: [
      "Jadvallarni murakkablashtirish",
      "Ma'lumotlar takrorlanishini kamaytirish, ma'lumotlar yaxlitligini ta'minlash, ma'lumotlar o'rtasidagi mantiqiy aloqalarni aks ettirish",
      "So'rovlar tezligini oshirish (har doim ham emas)",
      "Ma'lumotlar hajmini oshirish",
    ],
    answer:
      "Ma'lumotlar takrorlanishini kamaytirish, ma'lumotlar yaxlitligini ta'minlash, ma'lumotlar o'rtasidagi mantiqiy aloqalarni aks ettirish",
  },
  {
    question: "PK (Primary Key) va UK (Unique Key) qo'yishdan maqsad nima?",
    options: [
      "Jadvaldagi yozuvlarni sekinroq topish",
      "PK - yozuvni noyob aniqlash va NULL bo'lmasligini ta'minlash; UK - ustundagi qiymatlar noyobligini ta'minlash (NULLga ruxsat berishi mumkin)",
      "Faqat sonli ustunlarga cheklov qo'yish",
      "Ma'lumotlarni shifrlash",
    ],
    answer:
      "PK - yozuvni noyob aniqlash va NULL bo'lmasligini ta'minlash; UK - ustundagi qiymatlar noyobligini ta'minlash (NULLga ruxsat berishi mumkin)",
  },
  {
    question: "`ALTER TABLE` ning `ADD` vazifasi nima?",
    options: [
      "Jadvaldan ustunni o'chirish",
      "Jadvalga yangi ustun yoki cheklov (constraint) qo'shish",
      "Jadvaldagi mavjud ustunni o'zgartirish",
      "Jadval nomini o'zgartirish",
    ],
    answer: "Jadvalga yangi ustun yoki cheklov (constraint) qo'shish",
  },
  {
    question: "`ALTER TABLE` ning `DROP COLUMN` vazifasi nima?",
    options: [
      "Jadvalga yangi ustun qo'shish",
      "Jadvaldagi mavjud ustunni o'chirish",
      "Jadvaldagi ustunning ma'lumot turini o'zgartirish",
      "Jadvalni butunlay o'chirish",
    ],
    answer: "Jadvaldagi mavjud ustunni o'chirish",
  },
  {
    question: "`ALTER TABLE` ning `MODIFY COLUMN` vazifasi nima (MySQL'da)?",
    options: [
      "Ustun nomini o'zgartirish",
      "Mavjud ustunning ma'lumot turini yoki cheklovlarini o'zgartirish (nomini o'zgartirmaydi)",
      "Jadvalga yangi ustun qo'shish",
      "Ustundagi barcha ma'lumotlarni o'chirish",
    ],
    answer:
      "Mavjud ustunning ma'lumot turini yoki cheklovlarini o'zgartirish (nomini o'zgartirmaydi)",
  },
  {
    question: "`ALTER TABLE` ning `CHANGE COLUMN` vazifasi nima (MySQL'da)?",
    options: [
      "Faqat ustunning ma'lumot turini o'zgartirish",
      "Mavjud ustunning nomini, ma'lumot turini va cheklovlarini o'zgartirish imkonini beradi",
      "Jadvaldagi yozuvlarni o'zgartirish",
      "Jadvalga cheklov qo'shish",
    ],
    answer:
      "Mavjud ustunning nomini, ma'lumot turini va cheklovlarini o'zgartirish imkonini beradi",
  },
  {
    question:
      "Quyidagi so'rov vazifasi nima? `ALTER TABLE Reyslar ADD poyezdlar VARCHAR(50);`",
    options: [
      "`Reyslar` jadvalidagi `poyezdlar` ustunining turini VARCHAR(50) ga o'zgartiradi",
      "`Reyslar` jadvaliga `poyezdlar` nomli yangi, VARCHAR(50) turidagi ustun qo'shadi",
      "`poyezdlar` jadvaliga `Reyslar` nomli ustun qo'shadi",
      "`Reyslar` jadvalidan `poyezdlar` ustunini o'chiradi",
    ],
    answer:
      "`Reyslar` jadvaliga `poyezdlar` nomli yangi, VARCHAR(50) turidagi ustun qo'shadi",
  },
  {
    question:
      "Quyidagi so'rov vazifasi nima? `ALTER TABLE Kitoblar DROP COLUMN kitob_nomi;`",
    options: [
      "`Kitoblar` jadvaliga `kitob_nomi` ustunini qo'shadi",
      "`Kitoblar` jadvalidagi `kitob_nomi` ustunini o'chiradi",
      "`Kitoblar` jadvalidagi `kitob_nomi` ustunining nomini o'zgartiradi",
      "`kitob_nomi` jadvalini o'chiradi",
    ],
    answer: "`Kitoblar` jadvalidagi `kitob_nomi` ustunini o'chiradi",
  },
  {
    question:
      "Quyidagi so'rov vazifasi nima? `ALTER TABLE Reyslar MODIFY COLUMN poyezdlar VARCHAR(100);` (MySQL)",
    options: [
      "`Reyslar` jadvalidagi `poyezdlar` ustunining nomini VARCHAR(100) ga o'zgartiradi",
      "`Reyslar` jadvalidagi `poyezdlar` ustunining ma'lumot turini VARCHAR(100) ga o'zgartiradi",
      "`Reyslar` jadvaliga `poyezdlar` nomli yangi VARCHAR(100) ustun qo'shadi",
      "`poyezdlar` ustunini `VARCHAR` jadvaliga qo'shadi",
    ],
    answer:
      "`Reyslar` jadvalidagi `poyezdlar` ustunining ma'lumot turini VARCHAR(100) ga o'zgartiradi",
  },
  {
    question:
      "Quyidagi so'rov vazifasi nima? `ALTER TABLE Reyslar CHANGE COLUMN poyezdlar trains VARCHAR(100);` (MySQL)",
    options: [
      "`Reyslar` jadvalidagi `poyezdlar` ustunining ma'lumot turini `trains` ga o'zgartiradi",
      "`Reyslar` jadvalidagi `poyezdlar` ustunining nomini `trains` ga o'zgartiradi va turini VARCHAR(100) qiladi",
      "`trains` jadvalini `Reyslar` jadvali bilan birlashtiradi",
      "`poyezdlar` ustunini o'chirib, `trains` ustunini qo'shadi",
    ],
    answer:
      "`Reyslar` jadvalidagi `poyezdlar` ustunining nomini `trains` ga o'zgartiradi va turini VARCHAR(100) qiladi",
  },
  {
    question: "`AUTO_INCREMENT` nima vazifa bajaradi?",
    options: [
      "Ustun qiymatini avtomatik ravishda kamaytiradi",
      "Yangi qator qo'shilganda ustun uchun avtomatik ravishda noyob sonli qiymat generatsiya qiladi (odatda 1 ga oshirib)",
      "Matnli ustunlarni avtomatik to'ldiradi",
      "Sanani avtomatik ravishda yangilaydi",
    ],
    answer:
      "Yangi qator qo'shilganda ustun uchun avtomatik ravishda noyob sonli qiymat generatsiya qiladi (odatda 1 ga oshirib)",
  },
  {
    question:
      "Quyidagi so'rov vazifasi nima? `ALTER TABLE Kitobxonlar CHANGE COLUMN nomer id INT PRIMARY KEY AUTO_INCREMENT;` (MySQL)",
    options: [
      "`Kitobxonlar` jadvalidagi `nomer` ustunining turini `id` ga o'zgartiradi",
      "`Kitobxonlar` jadvalidagi `nomer` ustunining nomini `id` ga o'zgartiradi, turini INT qiladi va uni Birlamchi Kalit hamda AUTO_INCREMENT xususiyatli qiladi",
      "`id` jadvalini yaratib, uni `Kitobxonlar`ga bog'laydi",
      "`nomer` ustuniga AUTO_INCREMENT cheklovini qo'shadi",
    ],
    answer:
      "`Kitobxonlar` jadvalidagi `nomer` ustunining nomini `id` ga o'zgartiradi, turini INT qiladi va uni Birlamchi Kalit hamda AUTO_INCREMENT xususiyatli qiladi",
  },
  {
    question:
      "Quyidagi so'rov vazifasi nima? `ALTER TABLE Kitobxonlar ADD FOREIGN KEY (kitob_id) REFERENCES Kitoblar(id);`",
    options: [
      "`Kitobxonlar` jadvaliga `kitob_id` nomli yangi ustun qo'shadi",
      "`Kitobxonlar` jadvalidagi `kitob_id` ustunini `Kitoblar` jadvalidagi `id` ustuniga ishora qiluvchi Tashqi Kalit sifatida belgilaydi",
      "`Kitoblar` jadvaliga `kitob_id` ustunini Tashqi Kalit qiladi",
      "`Kitobxonlar` va `Kitoblar` jadvallarini birlashtiradi",
    ],
    answer:
      "`Kitobxonlar` jadvalidagi `kitob_id` ustunini `Kitoblar` jadvalidagi `id` ustuniga ishora qiluvchi Tashqi Kalit sifatida belgilaydi",
  },
  {
    question:
      "So'rovdagi `CONSTRAINT FK_KitobxonKitobi` qanday vazifa bajaradi? (masalan, `ADD CONSTRAINT FK_KitobxonKitobi FOREIGN KEY...`)",
    options: [
      "Yangi jadval yaratadi",
      "Yaratilayotgan Tashqi Kalit chekloviga nom beradi (bu nom orqali keyinchalik cheklovni boshqarish oson bo'ladi)",
      "Ustun nomini o'zgartiradi",
      "Foydalanuvchiga xabar chiqaradi",
    ],
    answer:
      "Yaratilayotgan Tashqi Kalit chekloviga nom beradi (bu nom orqali keyinchalik cheklovni boshqarish oson bo'ladi)",
  },
  {
    question:
      "Bog'lanishlarni (masalan, Tashqi Kalit cheklovini) o'chirish uchun qanday amal bajariladi?",
    options: [
      "`DELETE CONSTRAINT constraint_nomi;`",
      "`ALTER TABLE jadval_nomi DROP FOREIGN KEY constraint_nomi;` (MySQL) yoki `DROP CONSTRAINT constraint_nomi;` (boshqa DB'larda)",
      "`ERASE FOREIGN KEY constraint_nomi FROM jadval_nomi;`",
      "`REMOVE CONSTRAINT constraint_nomi ON jadval_nomi;`",
    ],
    answer:
      "`ALTER TABLE jadval_nomi DROP FOREIGN KEY constraint_nomi;` (MySQL) yoki `DROP CONSTRAINT constraint_nomi;` (boshqa DB'larda)",
  },
  {
    question: "`INNER JOIN` nima?",
    options: [
      "Birinchi jadvaldagi barcha yozuvlarni va ikkinchi jadvaldagi mos yozuvlarni qaytaradi",
      "Faqat har ikkala jadvalda ham bog'lanish shartiga mos keladigan yozuvlarni qaytaradi",
      "Ikkinchi jadvaldagi barcha yozuvlarni va birinchi jadvaldagi mos yozuvlarni qaytaradi",
      "Ikkala jadvaldagi barcha yozuvlarni qaytaradi, moslik bo'lmasa NULL bilan",
    ],
    answer:
      "Faqat har ikkala jadvalda ham bog'lanish shartiga mos keladigan yozuvlarni qaytaradi",
  },
  {
    question: "`LEFT JOIN` (yoki `LEFT OUTER JOIN`) nima?",
    options: [
      "Faqat ikkala jadvalda mos keladigan yozuvlarni qaytaradi",
      "Chap (birinchi) jadvaldagi BARCHA yozuvlarni va o'ng (ikkinchi) jadvaldagi mos keluvchi yozuvlarni (moslik bo'lmasa NULL) qaytaradi",
      "O'ng (ikkinchi) jadvaldagi BARCHA yozuvlarni va chap (birinchi) jadvaldagi mos keluvchi yozuvlarni (moslik bo'lmasa NULL) qaytaradi",
      "Jadvallarning Dekart ko'paytmasini qaytaradi",
    ],
    answer:
      "Chap (birinchi) jadvaldagi BARCHA yozuvlarni va o'ng (ikkinchi) jadvaldagi mos keluvchi yozuvlarni (moslik bo'lmasa NULL) qaytaradi",
  },
  {
    question: "`RIGHT JOIN` (yoki `RIGHT OUTER JOIN`) nima?",
    options: [
      "Chap jadvaldagi barcha yozuvlarni qaytaradi",
      "Faqat ikkala jadvalda mos keladigan yozuvlarni qaytaradi",
      "O'ng (ikkinchi) jadvaldagi BARCHA yozuvlarni va chap (birinchi) jadvaldagi mos keluvchi yozuvlarni (moslik bo'lmasa NULL) qaytaradi",
      "Hech qanday yozuv qaytarmaydi",
    ],
    answer:
      "O'ng (ikkinchi) jadvaldagi BARCHA yozuvlarni va chap (birinchi) jadvaldagi mos keluvchi yozuvlarni (moslik bo'lmasa NULL) qaytaradi",
  },
  {
    question: "`FULL OUTER JOIN` nima?",
    options: [
      "Faqat chap jadvaldagi yozuvlarni qaytaradi",
      "Har ikkala jadvaldagi BARCHA yozuvlarni qaytaradi. Agar bir jadvalda mos yozuv bo'lmasa, ikkinchi jadval ustunlari uchun NULL qiymatlar qaytariladi",
      "Faqat o'ng jadvaldagi yozuvlarni qaytaradi",
      "Faqat ikkala jadvalda ham mos keladigan yozuvlarni qaytaradi",
    ],
    answer:
      "Har ikkala jadvaldagi BARCHA yozuvlarni qaytaradi. Agar bir jadvalda mos yozuv bo'lmasa, ikkinchi jadval ustunlari uchun NULL qiymatlar qaytariladi",
  },
  {
    question: "MySQL da `FULL OUTER JOIN` qanday hosil qilinadi?",
    options: [
      "Maxsus `FULL OUTER JOIN` kalit so'zi bilan",
      "`LEFT JOIN` natijasini `RIGHT JOIN` natijasi bilan `UNION` (yoki `UNION ALL`) qilish orqali (takrorlanishni hisobga olgan holda)",
      "Faqat `INNER JOIN` dan foydalanib",
      "MySQL da `FULL OUTER JOIN` ni amalga oshirib bo'lmaydi",
    ],
    answer:
      "`LEFT JOIN` natijasini `RIGHT JOIN` natijasi bilan `UNION` (yoki `UNION ALL`) qilish orqali (takrorlanishni hisobga olgan holda)",
  },
  {
    question:
      "So'rov vazifasi: `SELECT Reyslar.yunalish, Poyezdlar.vaqt FROM Reyslar INNER JOIN Poyezdlar ON Reyslar.id = Poyezdlar.reys_id;`",
    options: [
      "Barcha reyslar va poyezdlarni qaytaradi",
      "`Reyslar` va `Poyezdlar` jadvallaridan, reys IDsi mos kelgan yozuvlar uchun reys yo'nalishi va poyezd vaqtini qaytaradi",
      "Faqat `Reyslar` jadvalidagi yo'nalishlarni qaytaradi",
      "Faqat `Poyezdlar` jadvalidagi vaqtlarni qaytaradi",
    ],
    answer:
      "`Reyslar` va `Poyezdlar` jadvallaridan, reys IDsi mos kelgan yozuvlar uchun reys yo'nalishi va poyezd vaqtini qaytaradi",
  },
  {
    question:
      "So'rov vazifasi: `SELECT Reyslar.yunalish, Poyezdlar.vaqt FROM Reyslar LEFT JOIN Poyezdlar ON Reyslar.id = Poyezdlar.reys_id;`",
    options: [
      "Faqat `Poyezdlar` jadvalidagi mos kelgan yozuvlarni qaytaradi",
      "`Reyslar` jadvalidagi barcha yo'nalishlarni va ularga mos keladigan `Poyezdlar` jadvalidagi vaqtlarni (moslik bo'lmasa vaqt uchun NULL) qaytaradi",
      "`Poyezdlar` jadvalidagi barcha vaqtlarni va ularga mos `Reyslar` yo'nalishlarini qaytaradi",
      "Xato so'rov",
    ],
    answer:
      "`Reyslar` jadvalidagi barcha yo'nalishlarni va ularga mos keladigan `Poyezdlar` jadvalidagi vaqtlarni (moslik bo'lmasa vaqt uchun NULL) qaytaradi",
  },
  {
    question:
      "So'rov vazifasi: `SELECT Reyslar.yunalish, Poyezdlar.vaqt FROM Reyslar RIGHT JOIN Poyezdlar ON Reyslar.id = Poyezdlar.reys_id;`",
    options: [
      "`Reyslar` jadvalidagi barcha yo'nalishlarni qaytaradi",
      "`Poyezdlar` jadvalidagi barcha vaqtlarni va ularga mos keladigan `Reyslar` jadvalidagi yo'nalishlarni (moslik bo'lmasa yo'nalish uchun NULL) qaytaradi",
      "Faqat ikkala jadvalda mos keladigan yozuvlarni qaytaradi",
      "Hech qanday natija qaytarmaydi",
    ],
    answer:
      "`Poyezdlar` jadvalidagi barcha vaqtlarni va ularga mos keladigan `Reyslar` jadvalidagi yo'nalishlarni (moslik bo'lmasa yo'nalish uchun NULL) qaytaradi",
  },
  {
    question: "Murakkab so'rov qanday tashkil topadi?",
    options: [
      "Faqat bitta `SELECT` operatoridan",
      "Bir nechta `SELECT` operatorlari, `JOIN`lar, ichki so'rovlar (subqueries), `UNION` va boshqa murakkab mantiqlarni o'z ichiga olishi mumkin",
      "Faqat `WHERE` bandi bilan",
      "Faqat `GROUP BY` bandi bilan",
    ],
    answer:
      "Bir nechta `SELECT` operatorlari, `JOIN`lar, ichki so'rovlar (subqueries), `UNION` va boshqa murakkab mantiqlarni o'z ichiga olishi mumkin",
  },
  {
    question: "Ichki so'rov (subquery) qayerda ishlatiladi?",
    options: [
      "Faqat `SELECT` bandining boshida",
      "`SELECT` (ustunlar ro'yxatida), `FROM`, `WHERE`, `HAVING` bandlarida, shuningdek `INSERT`, `UPDATE`, `DELETE` so'rovlarida ishlatilishi mumkin",
      "Faqat jadval nomlari o'rniga",
      "Faqat ma'lumotlarni tartiblash uchun",
    ],
    answer:
      "`SELECT` (ustunlar ro'yxatida), `FROM`, `WHERE`, `HAVING` bandlarida, shuningdek `INSERT`, `UPDATE`, `DELETE` so'rovlarida ishlatilishi mumkin",
  },
  {
    question: "Tashqi so'rov (outer query) qayerda ishlatiladi?",
    options: [
      "Ichki so'rovning ichida",
      "Ichki so'rovni (subquery) o'z ichiga olgan asosiy so'rov",
      "Faqat `JOIN` operatsiyalarida",
      "Faqat ma'lumotlarni o'chirishda",
    ],
    answer: "Ichki so'rovni (subquery) o'z ichiga olgan asosiy so'rov",
  },
  {
    question: "Murakkab so'rov nima?",
    options: [
      "Faqat bitta jadvaldan ma'lumot oladigan so'rov",
      "Bir nechta operatsiyalarni (masalan, `JOIN`, ichki so'rov, agregat funksiyalar, `UNION`) o'z ichiga olgan, ko'pincha bir nechta jadvallardan ma'lumot oladigan so'rov",
      "Natijasi har doim bitta qator bo'lgan so'rov",
      "Faqat matnli ma'lumotlar bilan ishlaydigan so'rov",
    ],
    answer:
      "Bir nechta operatsiyalarni (masalan, `JOIN`, ichki so'rov, agregat funksiyalar, `UNION`) o'z ichiga olgan, ko'pincha bir nechta jadvallardan ma'lumot oladigan so'rov",
  },
  {
    question:
      "Quyidagi so'rov natijasi nima? `SELECT * FROM Kitobxonlar WHERE kitob_id IN (SELECT id FROM Kitoblar);`",
    options: [
      "`Kitoblar` jadvalidagi barcha kitoblarning ro'yxati",
      "`Kitobxonlar` jadvalidan, `kitob_id` si `Kitoblar` jadvalida mavjud bo'lgan `id` larga mos keladigan barcha kitobxonlar ro'yxati",
      "Faqat `Kitobxonlar` jadvalidagi birinchi kitobxon",
      "Xato, chunki `IN` operatori ichki so'rov bilan ishlamaydi",
    ],
    answer:
      "`Kitobxonlar` jadvalidan, `kitob_id` si `Kitoblar` jadvalida mavjud bo'lgan `id` larga mos keladigan barcha kitobxonlar ro'yxati",
  },
  {
    question:
      'So\'rov natijasi? `SELECT * FROM Kitobxonlar WHERE kitob_id IN (SELECT id FROM Kitoblar WHERE kitob_nomi LIKE "dasturlash%");`',
    options: [
      "Nomi 'dasturlash' so'zi bilan boshlanadigan barcha kitoblar",
      "`Kitobxonlar` jadvalidan, nomi 'dasturlash' so'zi bilan boshlanadigan kitoblarni olgan kitobxonlar ro'yxati",
      "Barcha kitobxonlar ro'yxati",
      "`Kitoblar` jadvalidagi barcha yozuvlar",
    ],
    answer:
      "`Kitobxonlar` jadvalidan, nomi 'dasturlash' so'zi bilan boshlanadigan kitoblarni olgan kitobxonlar ro'yxati",
  },
  {
    question:
      "So'rov natijasi? `SELECT * FROM Poyezdlar WHERE junash_vaqti IN (SELECT MAX(junash_vaqti) FROM Poyezdlar);`",
    options: [
      "Barcha poyezdlar ro'yxati",
      "Eng kech jo'naydigan poyezd(lar) haqidagi ma'lumotlar",
      "Eng ertajo'naydigan poyezd haqidagi ma'lumot",
      "Hech qanday natija qaytarmaydi",
    ],
    answer: "Eng kech jo'naydigan poyezd(lar) haqidagi ma'lumotlar",
  },
  {
    question:
      "So'rov natijasi? `SELECT * FROM Biletlar WHERE bilet_narxi > (SELECT AVG(bilet_narxi) FROM Biletlar);`",
    options: [
      "Barcha biletlar ro'yxati",
      "Narxi o'rtacha bilet narxidan yuqori bo'lgan biletlar ro'yxati",
      "Narxi o'rtacha bilet narxidan past bo'lgan biletlar ro'yxati",
      "Eng qimmat bilet",
    ],
    answer: "Narxi o'rtacha bilet narxidan yuqori bo'lgan biletlar ro'yxati",
  },
  {
    question:
      "So'rov natijasi? `SELECT * FROM Biletlar WHERE bilet_narxi IN (SELECT MIN(bilet_narxi) FROM Biletlar);`",
    options: [
      "Eng qimmat bilet(lar) haqidagi ma'lumotlar",
      "Eng arzon bilet(lar) haqidagi ma'lumotlar",
      "Barcha biletlar ro'yxati",
      "O'rtacha narxdagi biletlar",
    ],
    answer: "Eng arzon bilet(lar) haqidagi ma'lumotlar",
  },
  {
    question: "SQL da Funksiya nima?",
    options: [
      "Jadval nomi",
      "Ma'lum bir amalni bajaruvchi va qiymat qaytaruvchi nomlangan kod bloki (masalan, `SUM()`, `AVG()`, `COUNT()` yoki foydalanuvchi tomonidan yaratilgan funksiyalar)",
      "So'rovning bir qismi",
      "Ma'lumotlar bazasining obyekti emas",
    ],
    answer:
      "Ma'lum bir amalni bajaruvchi va qiymat qaytaruvchi nomlangan kod bloki (masalan, `SUM()`, `AVG()`, `COUNT()` yoki foydalanuvchi tomonidan yaratilgan funksiyalar)",
  },
];
