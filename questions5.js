const questionsSet5 = [
  {
    id: 1,
    question: "LEFT JOIN nima?",
    options: [
      "ikkala jadvaldagi qiymatlarga mos keladigan qatorlarni tanlaydi.",
      "O'ng va chap jadvaldan barcha qatorlarni qaytaradi.",
      "barcha qatorlarni o'ng jadvaldan va mos qatorlarni chap jadvaldan qaytaradi.",
      "chap jadvaldagi barcha qatorlarni va o'ng jadvaldagi mos qatorlarni qaytaradi",
    ],
    answer:
      "chap jadvaldagi barcha qatorlarni va o'ng jadvaldagi mos qatorlarni qaytaradi",
  },
  {
    id: 2,
    question: "INNER JOIN nima?",
    options: [
      "chap jadvaldagi barcha qatorlarni va o'ng jadvaldagi mos qatorlarni qaytaradi",
      "O'ng va chap jadvaldan barcha qatorlarni qaytaradi.",
      "barcha qatorlarni o'ng jadvaldan va mos qatorlarni chap jadvaldan qaytaradi.",
      "ikkala jadvaldagi qiymatlarga mos keladigan qatorlarni tanlaydi.",
    ],
    answer: "ikkala jadvaldagi qiymatlarga mos keladigan qatorlarni tanlaydi.",
  },
  {
    id: 3,
    question: "Birga ko'p bog'lanish nima?",
    options: [
      "Bir jadvaldagi bitta qator ikkinchi jadvaldagi bitta qatorga mos kelishi",
      "Bir jadvaldagi ko‘p qatorlar ikkinchi jadvaldagi ko‘p qatorlarga mos kelishi",
      "Ikkita jadval o'rtasidagi munosabat o'rnatish",
      "Bir jadvaldagi bitta qator ikkinchi jadvaldagi ko’p qatorlarga mos kelishi",
    ],
    answer:
      "Bir jadvaldagi bitta qator ikkinchi jadvaldagi ko’p qatorlarga mos kelishi",
  },
  {
    id: 4,
    question: "Trigger yaratilishi to'g'ri yozilgan qatorni toping",
    options: [
      "CREATE TRIGGER AFTER INSERT table FOR EACH ROW BEGIN .. END",
      "CREATE TRIGGER nomi BEFORE INSERT table BEGIN .. END",
      "CREATE TRIGGER nomi BEFORE FOR EACH ROW INSERT ON table BEGIN .. END",
      "CREATE TRIGGER nomi BEFORE INSERT ON table FOR EACH ROW BEGIN .. END",
    ],
    answer:
      "CREATE TRIGGER nomi BEFORE INSERT ON table FOR EACH ROW BEGIN .. END",
  },
  {
    id: 5,
    question: "FOREIGN KEY nima?",
    options: [
      "Tashqi kalit, boshqa jadvallarning ichki kaliti bilan bog'lash uchun",
      "Ustundagi ma'lumotlarni yagonaligini ta'minlash",
      "Boshqa jadvallar bilan bog'lash va yagonalikni ta'minlash uchun ichki kalit",
      "To'g'ri javob yo'q",
    ],
    answer:
      "Tashqi kalit, boshqa jadvallarning ichki kaliti bilan bog'lash uchun",
  },
  {
    id: 6,
    question: "Yaratilingan VIEW lar qanday chaqiriladi?",
    options: [
      "INSERT INTO view_name VALUES …",
      "SELECT view_name(value1,value2,..)",
      "SELECT * FROM view_nomi …",
      "CALL view_name();",
    ],
    answer: "SELECT * FROM view_nomi …",
  },
  {
    id: 7,
    question: "Ko'pga ko'p bog'lanish nima?",
    options: [
      "Bir jadvaldagi bitta qator ikkinchi jadvaldagi bitta qatorga mos kelishi",
      "Bir jadvaldagi ko‘p qatorlar ikkinchi jadvaldagi ko‘p qatorlarga mos kelishi",
      "Ikkita jadval o'rtasidagi munosabat o'rnatish",
      "Bir jadvaldagi bitta qator ikkinchi jadvaldagi ko’p qatorlarga mos kelishi",
    ],
    answer:
      "Bir jadvaldagi ko‘p qatorlar ikkinchi jadvaldagi ko‘p qatorlarga mos kelishi",
  },
  {
    id: 8,
    question: "Protsedura qanday yaratiladi?",
    options: [
      "DROP PROCEDURE procedure_name;",
      "CREATE PROCEDURE procedure_name(IN parameter datatype, …)",
      "CALL procedure_name(value1, value2,...)",
      "INSERT PROCEDURE procedure_name;",
    ],
    answer: "CREATE PROCEDURE procedure_name(IN parameter datatype, …)",
  },
  {
    id: 9,
    question:
      "So'rov natijasi?\nSELECT *\nFROM Biletlar WHERE bilet_narxi IN (SELECT MIN(bilet_narxi) FROM Biletlar)",
    options: [
      "Biletlar jadvalidan eng kam narxdagi biletlarni chiqarish",
      "Biletlar jadvalidan eng ko'p narxdagi biletlarni chiqarish",
      "Biletlar jadvalidan eng kam narxdagi biletlarnining o'rtacha narxdagilarini chiqarish",
      "Biletlar jadvalidan o'rtacha kam narxdagi biletlarni chiqarish",
    ],
    answer: "Biletlar jadvalidan eng kam narxdagi biletlarni chiqarish",
  },
  {
    id: 10,
    question: "VIEW qachon ishlatiladi?",
    options: [
      "Ko‘p foydalanadigan so‘rovlarni virtual jadval sifatida saqlab qo‘yish uchun",
      "Ma'lumotlar bazasida amallar bajaradigan skriptlar yozganda.",
      "Murakkab so'rovlarni birlashtirganda",
      "JOIN lar bilan bajariladigan so'rovlarni jadval sifatida saqlaganda",
    ],
    answer:
      "Ko‘p foydalanadigan so‘rovlarni virtual jadval sifatida saqlab qo‘yish uchun",
  },
  {
    id: 11,
    question: "MySQL da Shart operatorlari qanday yoziladi?",
    options: [
      "IF <shart> THEN SET body…;",
      "IF <shart> THEN body…;", // To'g'ri javob (odatda END IF; bilan tugaydi)
      "THEN SET IF body ...",
      "IF <shart> SET body…;",
    ],
    answer: "IF <shart> THEN body…;",
  },
  {
    id: 12,
    question: "VIEW qanday o'chiriladi?",
    options: [
      "CREATE VIEW view_name AS …",
      "SELECT VIEW view_name AS …",
      "INSERT VIEW view_name AS …",
      "DROP VIEW view_name;",
    ],
    answer: "DROP VIEW view_name;",
  },
  {
    id: 13,
    question: "Saqlangan protseduradan qanday foydalaniladi?",
    options: [
      "SELECT procedure_name(value1,value2,..)",
      "INSERT INTO procedure_name VALUES …",
      "Select * FROM procedure_name",
      "CALL procedure_name(value1, value2,...)",
    ],
    answer: "CALL procedure_name(value1, value2,...)",
  },
  {
    id: 14,
    question: "Funksiya yaratishda RETURN nima vazifani bajaradi?",
    options: [
      "Funksiya qaytaradigan qiymatni ko'rsatish",
      "Funksiya qaytaradigan qiymat turini ko'rsatadi", // Bu RETURNS ning vazifasi
      "Funksiyada ishlatilmaydi",
      "Funksiyaga berilgan qiymatni qaytaradi",
    ],
    answer: "Funksiya qaytaradigan qiymatni ko'rsatish",
  },
  {
    id: 15,
    question: "Xotiradan ko'p joy olinsa nima bo'ladi?",
    options: [
      "Boshqa jadvallar bilan bog'lash imkonsiz bo'lib qladi",
      "Ko'p pul ketadi va so'rovlar ishlashi sekinlashadi",
      "Bazadan jadvallar o'chib ketadi",
      "To'g'ri javob yo'q",
    ],
    answer: "Ko'p pul ketadi va so'rovlar ishlashi sekinlashadi",
  },
  {
    id: 16,
    question: "Funksiya yaratishda RETURNS nima?",
    options: [
      "Funksiya qaytaradigan qiymat turini ko'rsatadi",
      "Funksiya qaytaradigan qiymatni ko'rsatish", // Bu RETURN ning vazifasi
      "Funksiyada ishlatilmaydi",
      "Funksiyaga berilgan qiymatni qaytaradi",
    ],
    answer: "Funksiya qaytaradigan qiymat turini ko'rsatadi",
  },
  {
    id: 17,
    question:
      "Quyidagi so'rov vazifasi nima?\nALTER TABLE Kitobxonlar CHANGE COLUMN nomer id INT PRIMARY KEY AUTO_INCREMENT",
    options: [
      "Kitobxonlar jadvaliga random tarzda avtomatik qiymatlar berish",
      "Kitobxonlar jadvalidagi nomer ustunini id nomli ichki kalitli avto qiymatga o'tkazish",
      "Kitobxonlar jadvali bilan Kitoblar jadvalini FK_KitobxonKitobi nomi bilan bog'lash",
      "Kitobxonlar jadvali bilan Kitoblar jadvalini bog'lash",
    ],
    answer:
      "Kitobxonlar jadvalidagi nomer ustunini id nomli ichki kalitli avto qiymatga o'tkazish",
  },
  {
    id: 18,
    question:
      "So'rov vazifasi?\nSELECT Reyslar.yunalish, Poyezdlar.vaqt\nFROM Reyslar INNER JOIN Poyezdlar ON Reyslar.id = Poyezdlar.reys_id",
    options: [
      "Reyslar jadvalidan barcha qatorni, Poyezdlar jadvalidan unga mos qiymat qatorlarini olish",
      "Reyslar va Poyezdlar jadvallarida mos qiymat qatorlarini olish",
      "Reyslar va Poyezdlar jadvallarining ikkalasidan barcha qatorni olish",
      "Poyezdlar jadvalidan barcha qatorni, Reyslar jadvalidan unga mos qiymat qatorlarini olish",
    ],
    answer: "Reyslar va Poyezdlar jadvallarida mos qiymat qatorlarini olish",
  },
  {
    id: 19,
    question: "Tashqi so'rov qayerda ishlatiladi?",
    options: [
      "Funksiyalar yaratganda",
      "U ichki so'rovda tanlangan ma'lumotlarni chiqarish uchun birinchi yoziladi", // Bu eng yaxshi ta'rif
      "U tashqi so'rovning WHERE qismida qiymat qaytaruvchi vazifasida keladi", // Bu ichki so'rovning bir ishlatilishi
      "JOIN lar bilan ishlaganda",
    ],
    answer:
      "U ichki so'rovda tanlangan ma'lumotlarni chiqarish uchun birinchi yoziladi",
  },
  {
    id: 20,
    question:
      'Quyidagi so\'rov vazifasi nima?\nCREATE FUNCTION Words(matn VARCHAR(50))\nRETURNS VARCHAR(50) RETURN CONCAT("Qisqartma: ", LEFT(matn, 1), RIGHT(matn, 1))',
    options: [
      "matn berilganda uning o'ng tomonidan oxirgi belgisigacha kesib oluvchi funksiya",
      "matn berilganda uning chap tomonidan oxirgi belgisigacha kesib oluvchi funksiya",
      "matnni chap va chap tomonidan bitta belgi qirqib, qisqartma yozuvi bilan chiqarish funksiyasi", // "chap va chap" xato yozilgan
      "matnni chap va o'ng tomonidan bitta belgi qirqib, qisqartma yozuvi bilan chiqarish funksiyasi",
    ],
    answer:
      "matnni chap va o'ng tomonidan bitta belgi qirqib, qisqartma yozuvi bilan chiqarish funksiyasi",
  },
  {
    id: 21,
    question: "Birga bir bog'lanish nima?",
    options: [
      "Bir jadvaldagi ko‘p qatorlar ikkinchi jadvaldagi ko‘p qatorlarga mos kelishi",
      "Ikkita jadval o'rtasidagi munosabat o'rnatish",
      "Bir jadvaldagi bitta qator ikkinchi jadvaldagi ko’p qatorlarga mos kelishi",
      "Bir jadvaldagi bitta qator ikkinchi jadvaldagi bitta qatorga mos kelishi",
    ],
    answer:
      "Bir jadvaldagi bitta qator ikkinchi jadvaldagi bitta qatorga mos kelishi",
  },
  {
    id: 22, // 11-savol bilan bir xil
    question: "MySQL da Shart operatorlari qanday yoziladi?",
    options: [
      "IF <shart> THEN SET body…;",
      "IF <shart> THEN body…;",
      "THEN SET IF body ...",
      "IF <shart> SET body…;",
    ],
    answer: "IF <shart> THEN body…;",
  },
  {
    id: 23,
    question: "Bog'lanishlarni o'chirish uchun qanday amal bajariladi?",
    options: [
      "DROP FOREIGN KEY constraint_name", // table_name yetishmayapti
      "ALTER TABLE table_name DROP FOREIGN KEY constraint_name",
      "ALTER TABLE DROP constraint_name", // FOREIGN KEY kalit so'zi yo'q
      "ALTER TABLE DROP FOREIGN KEY constraint_name", // table_name yetishmayapti, lekin birinchi variantdan ko'ra to'liqroq
    ],
    answer: "ALTER TABLE table_name DROP FOREIGN KEY constraint_name", // To'liq sintaksis
  },
  {
    id: 24,
    question: "So'rovdagi CONSTRAINT FK_KitobxonKitobi qanday vazifa bajaradi?",
    options: [
      "Jadvallar bog'lanishiga nom berish",
      "Foreign key yordamida Kitobxonning Kitoblarini aniqlash",
      "Kitobxon va Kitoblar jadvalini yaratish",
      "Kitobxon va Kitoblar jadvallariga ichki va tashqi kalit berish",
    ],
    answer: "Jadvallar bog'lanishiga nom berish",
  },
  {
    id: 25,
    question: "DELIMITER // nima?",
    options: [
      "Bu bir nechta SQL so'rovlarida funksiyalarni o'chirishda ishlatiladi",
      "Bu bir nechta SQL so'rovlarini xatoliklarini oldini olish vazifasini bajaradi",
      "Bu bir nechta SQL so'rovlarida protceduralarni o'chirishda ishlatiladi",
      "Bu bir nechta SQL so'rovlarini birlashtirib ishlatish vazifasini bajaradi", // Aniqrog'i, protsedura/funksiya tanasidagi ';' ni asosiy terminator bilan adashtirmaslik uchun terminatorni o'zgartiradi
    ],
    answer:
      "Bu bir nechta SQL so'rovlarini birlashtirib ishlatish vazifasini bajaradi", // Umumiy ma'noda shu to'g'ri keladi
  },
  {
    id: 26,
    question: "ALTER TABLE ning DROP COLUMN vazifasi nima?",
    options: [
      "Jadvallarning ustunini o'chirish",
      "Jadvalning ustun turini o'zgartirish",
      "Jadvalga ustun qo'shish",
      "Jadval ustun nomini va turini o'zgartirish",
    ],
    answer: "Jadvallarning ustunini o'chirish",
  },
  {
    id: 27,
    question: "END Nima?",
    options: [
      "SQL so'rovlar yozish bo'limini tugallanishini bildiradi", // Masalan, BEGIN...END, CASE...END
      "SQL ning shart operatolari",
      "O'zgaruvchi yaratish",
      "SQL so'rovlar yozish bo'limini boshlanishini bildiradi",
    ],
    answer: "SQL so'rovlar yozish bo'limini tugallanishini bildiradi",
  },
  {
    id: 28,
    question: "ALTER TABLE ning MODIFY COLUMN vazifasi nima?",
    options: [
      "Jadvalga ustun qo'shish",
      "Jadvalning ustun turini o'zgartirish", // va boshqa atributlarini
      "Jadval ustun nomini va turini o'zgartirish", // Bu CHANGE COLUMN
      "Jadvallarning ustunini o'chirish",
    ],
    answer: "Jadvalning ustun turini o'zgartirish",
  },
  {
    id: 29,
    question:
      'So\'rov natijasi?\nSELECT *\nFROM Kitobxonlar WHERE kitob_id IN (SELECT id FROM Kitoblar WHERE kitob_nomi LIKE "dasturlash")',
    options: [
      "dasturlashga oid kitoblarni o'qiydigan Kitobxonlarni chiqarish",
      "Kitoblar jadvalidan eng oxirgi olingan vaqtdagi kitoblarni chiqarish",
      "Kitoblar jadvalidagi barcha kitobga tegishli Kitobxonlarni chiqarish",
      "Kitoblar jadvalidan o'rtacha narxdagi kitobdan katta narxda bo'lgan kitoblarni chiqarish",
    ],
    answer: "dasturlashga oid kitoblarni o'qiydigan Kitobxonlarni chiqarish",
  },
  {
    id: 30,
    question: "REFERENCES nima?",
    options: [
      "Ikkita jadval o'rtasidagi munosabat o'rnatish", // FOREIGN KEY ning bir qismi sifatida
      "Jadvallarni tuzilishini o'zgartirish",
      "Ma'lumotlarni kiritishdagi xatolikni oldini olishdir",
      "Ustun qiymatlari yagona bo'lishini ta'minlash va ma'lumot kiritishdagi xatolikni oldini olish",
    ],
    answer: "Ikkita jadval o'rtasidagi munosabat o'rnatish",
  },
  {
    id: 31,
    question:
      "So'rov vazifasi?\nALTER TABLE Kitobxonlar ADD CONSTRAINT FK_KitobxonKitobi FOREIGN KEY (kitob_id) REFERENCES Kitoblar(id)",
    options: [
      "Kitobxon va Kitoblar jadvallariga ichki va tashqi kalit berish",
      "Kitobxonlar jadvali bilan Kitoblar jadvalini FK_KitobxonKitobi nomi bilan bog'lash",
      "Jadvallar bog'lanishiga nom berish", // Bu CONSTRAINT FK_KitobxonKitobi ning vazifasi, lekin so'rov umumiyroq
      "Foreign key yordamida Kitobxonning Kitoblarini aniqlash",
    ],
    answer:
      "Kitobxonlar jadvali bilan Kitoblar jadvalini FK_KitobxonKitobi nomi bilan bog'lash",
  },
  {
    id: 32,
    question: "Jadvallarni bog'lashdan maqsad nima?",
    options: [
      "Ma'lumotlarni kiritishdagi xatolikni oldini olishdir", // Asosiy maqsadlardan biri - ma'lumotlar yaxlitligi
      "Jadvallarni tuzilishini o'zgartirish (1)", // Bu maqsad emas, amal
      "Jadvalning ustun turini o'zgartirish", // Bu ham maqsad emas
      "Jadvallarni tuzilishini o'zgartirish", // Bu ham maqsad emas
    ],
    answer: "Ma'lumotlarni kiritishdagi xatolikni oldini olishdir",
  },
  {
    id: 33,
    question: "Protsedura qanday o'chiriladi?",
    options: [
      "DELETE PROCEDURE procedure_name;",
      "CREATE PROCEDURE procedure_name(IN parameter datatype, …)",
      "CALL procedure_name(value1, value2,...)",
      "DROP PROCEDURE procedure_name;",
    ],
    answer: "DROP PROCEDURE procedure_name;",
  },
  {
    id: 34,
    question: "UNIQUE nima?",
    options: [
      "Ichki kalit",
      "Tashqi kalit",
      "Tashqi va Ichki kalit",
      "Ustundagi ma'lumotlarni yagonaligini ta'minlash",
    ],
    answer: "Ustundagi ma'lumotlarni yagonaligini ta'minlash",
  },
  {
    id: 35,
    question:
      "Quyidagi so'rov vazifasi nima?\nALTER TABLE Reyslar CHANGE COLUMN poyezdlar trains VARCHAR(100)",
    options: [
      "Reyslar jadvalidan Poyezdlar ustunini o'chirish",
      "Reyslar jadvalidagi poyezdlar ustunini 50 belgili varcharga o'tkazish",
      "Reyslar jadvalidagi poyezdlar ustuni turini 100 belgili songa o'tkazish",
      "Reyslar jadvalidagi poyezdlar ustuni nomini trains va turini 100 belgili varcharga o'tkazish",
    ],
    answer:
      "Reyslar jadvalidagi poyezdlar ustuni nomini trains va turini 100 belgili varcharga o'tkazish",
  },
  {
    id: 36,
    question:
      "Jadvallarni bir biriga bog'lashning barcha usullari to'g'ri ko'rsatilgan qatorni toping.",
    options: [
      "1:1, 1:n, n:1, n:n", // n:1 odatda 1:n bilan bir xil qaraladi
      "1:n:m, n:n, 1:m, 1:n, 1:1",
      "n:1:1:m, n:m",
      "n:m, 1:1, 1:n", // n:m = n:n, 1:m = 1:n
    ],
    answer: "1:1, 1:n, n:1, n:n", // Eng keng tarqalgan va to'liq ro'yxat
  },
  {
    id: 37,
    question: "DECLARE nima?",
    options: [
      "MySQL ning shart operatorlari",
      "SQL so'rovlar yozish bo'limini tugallanishini bildiradi",
      "o'zgaruvchi yaratish", // Protsedura va funksiyalar ichida
      "SQL so'rovlar yozish bo'limini boshlanishini bildiradi",
    ],
    answer: "o'zgaruvchi yaratish",
  },
  {
    id: 38,
    question: "Trigger qanday yaratiladi?",
    options: [
      "DROP TRIGGER trigger_name;",
      "DELETE TRIGGER trigger_name;",
      "CREATE TRIGGER trigger_name …",
      "ALTER TRIGGER trigger_name;",
    ],
    answer: "CREATE TRIGGER trigger_name …",
  },
  {
    id: 39,
    question: "Parametrlarga Funksiya ega bo'ladimi yoki Protsedurami?",
    options: [
      "Protsedura",
      "Ikkalasi ham parametrli bo'lishi mumkin",
      "Ikkalasida ham parametr bo'lmaydi",
      "Funksiya",
    ],
    answer: "Ikkalasi ham parametrli bo'lishi mumkin",
  },
  {
    id: 40,
    question: "PRIMARY KEY nima?",
    options: [
      "Boshqa jadvallar bilan bog'lash va yagonalikni ta'minlash uchun ichki kalit",
      "To'g'ri javob yo'q",
      "Tashqi kalit, boshqa jadvallarning ichki kaliti bilan bog'lash uchun",
      "Ustundagi ma'lumotlarni yagonaligini ta'minlash", // Bu UNIQUE ning ham vazifasi, PRIMARY KEY bundan kuchliroq
    ],
    answer:
      "Boshqa jadvallar bilan bog'lash va yagonalikni ta'minlash uchun ichki kalit", // Eng to'liq ta'rif
  },
  {
    id: 41,
    question: "ALTER TABLE ning CHANGE COLUMN vazifasi nima?",
    options: [
      "Jadvalga ustun qo'shish",
      "Jadvallarning ustunini o'chirish",
      "Jadval ustun nomini va turini o'zgartirish",
      "Jadvalning ustun turini o'zgartirish", // Bu MODIFY COLUMN
    ],
    answer: "Jadval ustun nomini va turini o'zgartirish",
  },
];

// Misol uchun, birinchi savolni konsolga chiqarish:
// console.log(quizData[0].question);
// console.log(quizData[0].options);
// console.log("To'g'ri javob: " + quizData[0].answer);
