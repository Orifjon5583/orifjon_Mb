const questionsSet6 = [
  {
    id: 1,
    question:
      "Quyidagi so'rov vazifasi nima?\nCREATE FUNCTION Words(matn VARCHAR(50))\nRETURNS VARCHAR(50) RETURN LEFT(matn, LENGTH(matn)-1)",
    options: [
      "matnni chap va o'ng tomonidan bitta belgi qirqib, qisqartma yozuvi bilan chiqarish funksiyasi",
      "matn berilganda uning chap tomonidan oxirgi belgisigacha kesib oluvchi funksiya",
      "matn berilganda uning o'ng tomonidan oxirgi belgisigacha kesib oluvchi funksiya",
      "matnni chap va chap tomonidan bitta belgi qirqib, qisqartma yozuvi bilan chiqarish funksiyasi",
    ],
    correctAnswer:
      "matn berilganda uning chap tomonidan oxirgi belgisigacha kesib oluvchi funksiya", // Removes the last character
  },
  {
    id: 2,
    question: "Funksiya yaratishda RETURN nima vazifani bajaradi?",
    options: [
      "Funksiyada ishlatilmaydi",
      "Funksiya qaytaradigan qiymat turini ko'rsatadi", // This is RETURNS
      "Funksiyaga berilgan qiymatni qaytaradi",
      "Funksiya qaytaradigan qiymatni ko'rsatish",
    ],
    correctAnswer: "Funksiya qaytaradigan qiymatni ko'rsatish", // Specifies the value to be returned
  },
  {
    id: 3,
    question:
      'Quyidagi so\'rov vazifasi nima?\nCREATE FUNCTION Words(matn VARCHAR(50))\nRETURNS VARCHAR(50) RETURN CONCAT("Qisqartma: ", LEFT(matn, 1), RIGHT(matn, 1))',
    options: [
      "matn berilganda uning chap tomonidan oxirgi belgisigacha kesib oluvchi funksiya",
      "matn berilganda uning o'ng tomonidan oxirgi belgisigacha kesib oluvchi funksiya",
      "matnni chap va o'ng tomonidan bitta belgi qirqib, qisqartma yozuvi bilan chiqarish funksiyasi",
      "matnni chap va chap tomonidan bitta belgi qirqib, qisqartma yozuvi bilan chiqarish funksiyasi",
    ],
    correctAnswer:
      "matnni chap va o'ng tomonidan bitta belgi qirqib, qisqartma yozuvi bilan chiqarish funksiyasi",
  },
  {
    id: 4,
    question: "Yaratilingan funksiyalardan qanday foydalaniladi?",
    options: [
      "SELECT funksiya_nomi(qiymat) FROM …",
      "INSERT INTO funksiya_name VALUES …",
      "SELECT * FROM funksiya_nomi …",
      "CALL funksiya_nomi(qiymat);",
    ],
    correctAnswer: "SELECT funksiya_nomi(qiymat) FROM …", // Or SELECT funksiya_nomi(qiymat);
  },
  {
    id: 5,
    question: "Bog'lanishlarni o'chirish uchun qanday amal bajariladi?",
    options: [
      "ALTER TABLE table_name DROP FOREIGN KEY constraint_name",
      "DROP FOREIGN KEY constraint_name",
      "ALTER TABLE DROP FOREIGN KEY constraint_name",
      "ALTER TABLE DROP constraint_name",
    ],
    correctAnswer: "ALTER TABLE table_name DROP FOREIGN KEY constraint_name",
  },
  {
    id: 6,
    question: "ALTER TABLE ning ADD vazifasi nima?",
    options: [
      "Jadval ustun nomini va turini o'zgartirish",
      "Jadvalning ustun turini o'zgartirish",
      "Jadvalga ustun qo'shish",
      "Jadvallarning ustunini o'chirish",
    ],
    correctAnswer: "Jadvalga ustun qo'shish",
  },
  {
    id: 7,
    question:
      "So'rov vazifasi?\nSELECT Reyslar.yunalish, Poyezdlar.vaqt\nFROM Reyslar INNER JOIN Poyezdlar ON Reyslar.id = Poyezdlar.reys_id",
    options: [
      "Reyslar va Poyezdlar jadvallarida mos qiymat qatorlarini olish",
      "Poyezdlar jadvalidan barcha qatorni, Reyslar jadvalidan unga mos qiymat qatorlarini olish",
      "Reyslar jadvalidan barcha qatorni, Poyezdlar jadvalidan unga mos qiymat qatorlarini olish",
      "Reyslar va Poyezdlar jadvallarining ikkalasidan barcha qatorni olish",
    ],
    correctAnswer:
      "Reyslar va Poyezdlar jadvallarida mos qiymat qatorlarini olish",
  },
  {
    id: 8,
    question: "Funksiya qanday o'chiriladi?",
    options: [
      "DROP FUNCTION funksiya_nomi;",
      "CREATE FUNCTION funksiya_nomi;",
      "DELETE FUNCTION funksiya_nomi;",
      "DROP BEGIN FUNCTION funksiya_nomi END;",
    ],
    correctAnswer: "DROP FUNCTION funksiya_nomi;",
  },
  {
    id: 9,
    question: "PRIMARY KEY nima?",
    options: [
      "Tashqi kalit, boshqa jadvallarning ichki kaliti bilan bog'lash uchun",
      "To'g'ri javob yo'q",
      "Ustundagi ma'lumotlarni yagonaligini ta'minlash",
      "Boshqa jadvallar bilan bog'lash va yagonalikni ta'minlash uchun ichki kalit",
    ],
    correctAnswer:
      "Boshqa jadvallar bilan bog'lash va yagonalikni ta'minlash uchun ichki kalit",
  },
  {
    id: 10,
    question:
      "Quyidagi so'rov vazifasi nima?\nALTER TABLE Reyslar CHANGE COLUMN poyezdlar trains VARCHAR(100)",
    options: [
      "Reyslar jadvalidagi poyezdlar ustuni turini 100 belgili songa o'tkazish",
      "Reyslar jadvalidagi poyezdlar ustunini 50 belgili varcharga o'tkazish",
      "Reyslar jadvalidagi poyezdlar ustuni nomini trains va turini 100 belgili varcharga o'tkazish",
      "Reyslar jadvalidan Poyezdlar ustunini o'chirish",
    ],
    correctAnswer:
      "Reyslar jadvalidagi poyezdlar ustuni nomini trains va turini 100 belgili varcharga o'tkazish",
  },
  {
    id: 11,
    question: "Funksiya yaratishda RETURNS nima?",
    options: [
      "Funksiya qaytaradigan qiymat turini ko'rsatadi",
      "Funksiyada ishlatilmaydi",
      "Funksiyaga berilgan qiymatni qaytaradi",
      "Funksiya qaytaradigan qiymatni ko'rsatish",
    ],
    correctAnswer: "Funksiya qaytaradigan qiymat turini ko'rsatadi",
  },
  {
    id: 12,
    question:
      "Quyidagi so'rov vazifasi nima?\nALTER TABLE Kitolar DROP COLUMN kitob_nomi", // Typo in original: Kitolar -> Kitoblar
    options: [
      "Kitoblar jadvalidan kitob_nomi ustunini o'chirish",
      "Kitoblar jadvalidagi kitob_nomi ustunini 50 belgili varcharga o'tkazish",
      "Kitoblar jadvaliga kitob_nomi ustunini qo'shish",
    ],
    correctAnswer: "Kitoblar jadvalidan kitob_nomi ustunini o'chirish",
  },
  {
    id: 13,
    question: "MySQL da o'zgaruvchi qanday yaratiladi?",
    options: [
      "DECLARE variable_name datatype;",
      "INSERT variable_name datatype;",
      "SELECT variable_name datatype;",
      "CREATE variable_name datatype;",
    ],
    correctAnswer: "DECLARE variable_name datatype;",
  },
  {
    id: 14,
    question:
      "So'rov vazifasi?\nCREATE PROCEDURE Kitobxonlar()\nBEGIN     SELECT * FROM Kitobxonlar     WHERE kitoblar_soni > 5 END",
    options: [
      "Kitobxonlar soni 5 dan ko'p bo'lganlarni beruvchi protsedura",
      "Kitobxonlar soni 5 dan kam bo'lganlarni beruvchi protsedura",
      "Kitoblari soni 5 dan ko'p Kitobxonlarni olib beruvchi protsedura",
      "Kitoblari soni 5 dan kam Kitobxonlarni olib beruvchi protsedura",
    ],
    correctAnswer:
      "Kitoblari soni 5 dan ko'p Kitobxonlarni olib beruvchi protsedura",
  },
  {
    id: 15,
    question:
      "So'rov natijasi?\nSELECT *\nFROM Biletlar WHERE bilet_narxi > (SELECT AVG(bilet_narxi) FROM Biletlar)",
    options: [
      "Biletlar jadvalidan o'rtacha narxdagi biletdan kichik narxda bo'lgan biletlarni chiqarish",
      "Biletlar jadvalidan o'rtacha narxdagi biletga teng narxdagi biletlarni chiqarish",
      "Biletlar jadvalidan o'rtacha narxdagi biletdan katta narxda bo'lgan biletlarni chiqarish",
      "Biletlar jadvalidan eng katta narxdagi biletdan kichik narxda bo'lgan biletlarni chiqarish",
    ],
    correctAnswer:
      "Biletlar jadvalidan o'rtacha narxdagi biletdan katta narxda bo'lgan biletlarni chiqarish",
  },
  {
    id: 16,
    question:
      'So\'rov natijasi?\nSELECT *\nFROM Kitobxonlar WHERE kitob_id IN (SELECT id FROM Kitoblar WHERE kitob_nomi LIKE "dasturlash")',
    options: [
      "Kitoblar jadvalidan eng oxirgi olingan vaqtdagi kitoblarni chiqarish",
      "Kitoblar jadvalidagi barcha kitobga tegishli Kitobxonlarni chiqarish",
      "dasturlashga oid kitoblarni o'qiydigan Kitobxonlarni chiqarish",
      "Kitoblar jadvalidan o'rtacha narxdagi kitobdan katta narxda bo'lgan kitoblarni chiqarish",
    ],
    correctAnswer:
      "dasturlashga oid kitoblarni o'qiydigan Kitobxonlarni chiqarish",
  },
  {
    id: 17,
    question: "ALTER TABLE ning CHANGE COLUMN vazifasi nima?",
    options: [
      "Jadvalning ustun turini o'zgartirish",
      "Jadvallarning ustunini o'chirish",
      "Jadvalga ustun qo'shish",
      "Jadval ustun nomini va turini o'zgartirish",
    ],
    correctAnswer: "Jadval ustun nomini va turini o'zgartirish",
  },
  {
    id: 18,
    question:
      "So'rov vazifasi?\nSELECT Reyslar.yunalish, Poyezdlar.vaqt\nFROM Reyslar RIGHT JOIN Poyezdlar ON Reyslar.id = Poyezdlar.reys_id",
    options: [
      "Poyezdlar jadvalidan barcha qatorni, Reyslar jadvalidan unga mos qiymat qatorlarini olish",
      "Reyslar va Poyezdlar jadvallarining ikkalasidan barcha qatorni olish",
      "Reyslar jadvalidan barcha qatorni, Poyezdlar jadvalidan unga mos qiymat qatorlarini olish",
      "Reyslar va Poyezdlar jadvallarida mos qiymat qatorlarini olish",
    ],
    correctAnswer:
      "Poyezdlar jadvalidan barcha qatorni, Reyslar jadvalidan unga mos qiymat qatorlarini olish",
  },
  {
    id: 19,
    question: "VIEW qachon ishlatiladi?",
    options: [
      "Murakkab so'rovlarni birlashtirganda",
      "Ma'lumotlar bazasida amallar bajaradigan skriptlar yozganda.",
      "JOIN lar bilan bajariladigan so'rovlarni jadval sifatida saqlaganda",
      "Ko‘p foydalanadigan so‘rovlarni virtual jadval sifatida saqlab qo‘yish uchun",
    ],
    correctAnswer:
      "Ko‘p foydalanadigan so‘rovlarni virtual jadval sifatida saqlab qo‘yish uchun",
  },
  {
    id: 20,
    question: "UNIQUE nima?",
    options: [
      "Tashqi va Ichki kalit",
      "Tashqi kalit",
      "Ustundagi ma'lumotlarni yagonaligini ta'minlash",
      "Ichki kalit",
    ],
    correctAnswer: "Ustundagi ma'lumotlarni yagonaligini ta'minlash",
  },
  {
    id: 21,
    question: "Trigger yaratilishi to'g'ri yozilgan qatorni toping",
    options: [
      "CREATE TRIGGER nomi BEFORE FOR EACH ROW INSERT ON table BEGIN .. END",
      "CREATE TRIGGER nomi BEFORE INSERT table BEGIN .. END",
      "CREATE TRIGGER AFTER INSERT table FOR EACH ROW BEGIN .. END",
      "CREATE TRIGGER nomi BEFORE INSERT ON table FOR EACH ROW BEGIN .. END",
    ],
    correctAnswer:
      "CREATE TRIGGER nomi BEFORE INSERT ON table FOR EACH ROW BEGIN .. END",
  },
  {
    id: 22,
    question:
      "Quyidagi so'rov vazifasi nima?\nALTER TABLE Kitobxonlar CHANGE COLUMN nomer id INT PRIMARY KEY AUTO_INCREMENT",
    options: [
      "Kitobxonlar jadvali bilan Kitoblar jadvalini FK_KitobxonKitobi nomi bilan bog'lash",
      "Kitobxonlar jadvalidagi nomer ustunini id nomli ichki kalitli avto qiymatga o'tkazish",
      "Kitobxonlar jadvali bilan Kitoblar jadvalini bog'lash",
      "Kitobxonlar jadvaliga random tarzda avtomatik qiymatlar berish",
    ],
    correctAnswer:
      "Kitobxonlar jadvalidagi nomer ustunini id nomli ichki kalitli avto qiymatga o'tkazish",
  },
  {
    id: 23,
    question:
      "Quyidagi so'rov natijasi nima?\nSELECT *\nFROM Kitobxonlar WHERE kitob_id IN (SELECT id FROM Kitoblar)",
    options: [
      "dasturlashga oid kitoblarni o'qiydigan Kitobxonlarni chiqarish",
      "Kitoblar jadvalidan eng oxirgi olingan vaqtdagi kitoblarni chiqarish",
      "Kitoblar jadvalidan o'rtacha narxdagi kitobdan katta narxda bo'lgan kitoblarni chiqarish",
      "Kitoblar jadvalidagi barcha kitobga tegishli Kitobxonlarni chiqarish",
    ],
    correctAnswer:
      "Kitoblar jadvalidagi barcha kitobga tegishli Kitobxonlarni chiqarish",
  },
  {
    id: 24,
    question: "AUTO_INCREMENT nima vazifa bajaradi?",
    options: [
      "Ustunga random tarzda turli xil raqamlar avtomatik kiritish",
      "Avtomatik ma'lumot kiritish",
      "INSERT amalining avtomatik bajarish operatori",
      "Ustunga qiymat kiritilmasa, avtomatik tarzda oxirgi sonni bittaga oshirilgan qiymatini kiritadi",
    ],
    correctAnswer:
      "Ustunga qiymat kiritilmasa, avtomatik tarzda oxirgi sonni bittaga oshirilgan qiymatini kiritadi",
  },
  {
    id: 25,
    question: "ALTER TABLE ning DROP COLUMN vazifasi nima?",
    options: [
      "Jadvalning ustun turini o'zgartirish",
      "Jadval ustun nomini va turini o'zgartirish",
      "Jadvalga ustun qo'shish",
      "Jadvallarning ustunini o'chirish",
    ],
    correctAnswer: "Jadvallarning ustunini o'chirish",
  },
  {
    id: 26,
    question:
      "So'rov natijasi?\nSELECT *\nFROM Biletlar WHERE bilet_narxi IN (SELECT MIN(bilet_narxi) FROM Biletlar)",
    options: [
      "Biletlar jadvalidan o'rtacha kam narxdagi biletlarni chiqarish",
      "Biletlar jadvalidan eng kam narxdagi biletlarni chiqarish",
      "Biletlar jadvalidan eng kam narxdagi biletlarnining o'rtacha narxdagilarini chiqarish",
      "Biletlar jadvalidan eng ko'p narxdagi biletlarni chiqarish",
    ],
    correctAnswer: "Biletlar jadvalidan eng kam narxdagi biletlarni chiqarish",
  },
  {
    id: 27,
    question: "REFERENCES nima?",
    options: [
      "Ikkita jadval o'rtasidagi munosabat o'rnatish",
      "Jadvallarni tuzilishini o'zgartirish",
      "Ma'lumotlarni kiritishdagi xatolikni oldini olishdir",
      "Ustun qiymatlari yagona bo'lishini ta'minlash va ma'lumot kiritishdagi xatolikni oldini olish",
    ],
    correctAnswer: "Ikkita jadval o'rtasidagi munosabat o'rnatish", // Key part of FOREIGN KEY constraint
  },
  {
    id: 28,
    question: "RIGHT JOIN nima?",
    options: [
      "ikkala jadvaldagi qiymatlarga mos keladigan qatorlarni tanlaydi.",
      "O'ng va chap jadvaldan barcha qatorlarni qaytaradi.",
      "barcha qatorlarni o'ng jadvaldan va mos qatorlarni chap jadvaldan qaytaradi.",
      "chap jadvaldagi barcha qatorlarni va o'ng jadvaldagi mos qatorlarni qaytaradi",
    ],
    correctAnswer:
      "barcha qatorlarni o'ng jadvaldan va mos qatorlarni chap jadvaldan qaytaradi.",
  },
  {
    id: 29,
    question: "Ko'pga ko'p bog'lanish qanday hosil bo'ladi?",
    options: [
      "To'g'ri javob yo'q",
      "Qo‘shimcha jadval yaratib ikkala jadvalni ham u bilan 1:n qilish lozim",
      "A va B javoblar to'g'ri",
      "2 ta 1:n bog’lanishdan n:n bog’lanish kelib chiqadi",
    ],
    correctAnswer:
      "Qo‘shimcha jadval yaratib ikkala jadvalni ham u bilan 1:n qilish lozim",
  },
  {
    id: 30,
    question: "Saqlangan protseduradan qanday foydalaniladi?",
    options: [
      "Select * FROM procedure_name",
      "SELECT procedure_name(value1,value2,..)",
      "CALL procedure_name(value1, value2,...)",
      "INSERT INTO procedure_name VALUES …",
    ],
    correctAnswer: "CALL procedure_name(value1, value2,...)",
  },
  {
    id: 31,
    question: "So'rovlarni ishlashi nega sekinlashadi?",
    options: [
      "Bazada jadvallar ko'p bo'lsa",
      "Jadvallarda dublikatlar ko'paysa",
      "Server to'lib qolsa",
      "Kompyuter qotib qolsa",
    ],
    correctAnswer: "Server to'lib qolsa", // General resource exhaustion
  },
  {
    id: 32,
    question: "Birga bir bog'lanish nima?",
    options: [
      "Bir jadvaldagi bitta qator ikkinchi jadvaldagi bitta qatorga mos kelishi",
      "Ikkita jadval o'rtasidagi munosabat o'rnatish",
      "Bir jadvaldagi ko‘p qatorlar ikkinchi jadvaldagi ko‘p qatorlarga mos kelishi",
      "Bir jadvaldagi bitta qator ikkinchi jadvaldagi ko’p qatorlarga mos kelishi",
    ],
    correctAnswer:
      "Bir jadvaldagi bitta qator ikkinchi jadvaldagi bitta qatorga mos kelishi",
  },
  {
    id: 33,
    question: "Xotiradan ko'p joy olinsa nima bo'ladi?",
    options: [
      "Ko'p pul ketadi va so'rovlar ishlashi sekinlashadi",
      "To'g'ri javob yo'q",
      "Bazadan jadvallar o'chib ketadi",
      "Boshqa jadvallar bilan bog'lash imkonsiz bo'lib qladi",
    ],
    correctAnswer: "Ko'p pul ketadi va so'rovlar ishlashi sekinlashadi",
  },
  {
    id: 34,
    question: "Murakkab so'rov qanday tashkil topadi?",
    options: [
      "Chap va O'ng so'rovlardan",
      "Ichki va tashqi so'rovlardan",
      "U tashqi so'rovning WHERE qismida qiymat qaytaruvchi vazifasida keladi",
      "Yuqori va pastki so'rovlardan",
    ],
    correctAnswer: "Ichki va tashqi so'rovlardan",
  },
  {
    id: 35,
    question: "VIEW qanday o'chiriladi?",
    options: [
      "SELECT VIEW view_name AS …",
      "DROP VIEW view_name;",
      "CREATE VIEW view_name AS …",
      "INSERT VIEW view_name AS …",
    ],
    correctAnswer: "DROP VIEW view_name;",
  },
  {
    id: 36,
    question: "Protsedura qanday o'chiriladi?",
    options: [
      "DELETE PROCEDURE procedure_name;",
      "CREATE PROCEDURE procedure_name(IN parameter datatype, …)",
      "CALL procedure_name(value1, value2,...)",
      "DROP PROCEDURE procedure_name;",
    ],
    correctAnswer: "DROP PROCEDURE procedure_name;",
  },
  {
    id: 37,
    question: "BEGIN nima?",
    options: [
      "MySQL ning shart operatorlari",
      "o'zgaruvchi yaratish",
      "SQL so'rovlar yozish bo'limini boshlanishini bildiradi",
      "SQL so'rovlar yozish bo'limini tugallanishini bildiradi",
    ],
    correctAnswer: "SQL so'rovlar yozish bo'limini boshlanishini bildiradi",
  },
  {
    id: 38,
    question: "Murakkab so'rov nima?",
    options: [
      "Bu so‘rov ichida yana so‘rov yaratishdir. U tashqi va ichki so’rovlardan tashkil topadi",
      "Funksiyalar, Protseduralar murakkab so'rovdir",
      "Murakkab shartlar yoziladigan qism",
      "Ko'p so'rovlar takroran qayta yozilsa murakkab so'rov deyiladi",
    ],
    correctAnswer:
      "Bu so‘rov ichida yana so‘rov yaratishdir. U tashqi va ichki so’rovlardan tashkil topadi",
  },
  {
    id: 39,
    question: "Tashqi so'rov qayerda ishlatiladi?",
    options: [
      "U tashqi so'rovning WHERE qismida qiymat qaytaruvchi vazifasida keladi",
      "Funksiyalar yaratganda",
      "U ichki so'rovda tanlangan ma'lumotlarni chiqarish uchun birinchi yoziladi",
      "JOIN lar bilan ishlaganda",
    ],
    correctAnswer:
      "U ichki so'rovda tanlangan ma'lumotlarni chiqarish uchun birinchi yoziladi",
  },
  {
    id: 40,
    question: "LEFT JOIN nima?",
    options: [
      "ikkala jadvaldagi qiymatlarga mos keladigan qatorlarni tanlaydi.",
      "barcha qatorlarni o'ng jadvaldan va mos qatorlarni chap jadvaldan qaytaradi.",
      "chap jadvaldagi barcha qatorlarni va o'ng jadvaldagi mos qatorlarni qaytaradi",
      "O'ng va chap jadvaldan barcha qatorlarni qaytaradi.",
    ],
    correctAnswer:
      "chap jadvaldagi barcha qatorlarni va o'ng jadvaldagi mos qatorlarni qaytaradi",
  },
];

// Tekshirish uchun birinchi savolni chiqarib ko'ramiz:
// console.log(JSON.stringify(quizDataNew, null, 2));
