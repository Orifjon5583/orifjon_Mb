const questionsSet7 = [
  {
    id: 1,
    question: "Triggerning AFTER operatori vazifasi nima?",
    options: [
      "Amal bajarilishidan oldin trigger ishlashini bildiruvchi operator",
      "Amal bajarilgandan keyin trigger ishlashini bildiruvchi operator",
      "Amal bajarilganda har bir qator uchun trigger ishlashini bildiruvchi operato", // Typo in original, kept for accuracy if needed
    ],
    correctAnswer:
      "Amal bajarilgandan keyin trigger ishlashini bildiruvchi operator", // The option with (1) was identical to the one before it. Assuming the content is the answer.
  },
  {
    id: 2,
    question: "Yaratilingan VIEW lar qanday chaqiriladi?",
    options: [
      "SELECT view_name(value1,value2,..)",
      "INSERT INTO view_name VALUES …",
      "CALL view_name();",
      "SELECT * FROM view_nomi …",
    ],
    correctAnswer: "SELECT * FROM view_nomi …",
  },
  {
    id: 3,
    question: "ALTER TABLE vazifasi nima?",
    options: [
      "Jadvalning ustun turini o'zgartirish",
      "Jadval ustun nomini va turini o'zgartirish",
      "Jadvalga ustun qo'shish",
      "Barcha javob to'g'ri",
    ],
    correctAnswer: "Barcha javob to'g'ri",
  },
  {
    id: 4,
    question: "Xotiradan ko'p joy olinsa nima bo'ladi?",
    options: [
      "Boshqa jadvallar bilan bog'lash imkonsiz bo'lib qladi",
      "To'g'ri javob yo'q",
      "Ko'p pul ketadi va so'rovlar ishlashi sekinlashadi",
      "Bazadan jadvallar o'chib ketadi",
    ],
    correctAnswer: "Ko'p pul ketadi va so'rovlar ishlashi sekinlashadi",
  },
  {
    id: 5,
    question: "Jadvallarni bog'lashdan maqsad nima?",
    options: [
      "Jadvalning ustun turini o'zgartirish",
      "Jadvallarni tuzilishini o'zgartirish", // This one had (1)
      "Ma'lumotlarni kiritishdagi xatolikni oldini olishdir", // This is a better answer conceptually for "bog'lash" (linking)
    ],
    // The (1) was on "Jadvallarni tuzilishini o'zgartirish".
    // While linking tables (bog'lash) is more about data integrity and relationships
    // which helps in "Ma'lumotlarni kiritishdagi xatolikni oldini olishdir",
    // I will respect the (1) marker from the input if strictly following.
    // However, if interpreting "o'zing topip", the other is better.
    // For this case, I'll assume the (1) from original input takes precedence.
    correctAnswer: "Jadvallarni tuzilishini o'zgartirish",
  },
  {
    id: 6,
    question: "DECLARE nima?",
    options: [
      "MySQL ning shart operatorlari",
      "o'zgaruvchi yaratish",
      "SQL so'rovlar yozish bo'limini boshlanishini bildiradi",
      "SQL so'rovlar yozish bo'limini tugallanishini bildiradi",
    ],
    correctAnswer: "o'zgaruvchi yaratish",
  },
  {
    id: 7,
    question:
      "So'rov vazifasi?\nCREATE VIEW bilet_max_price AS\nSELECT * FROM Biletlar WHERE bilet_narxi IN (SELECT MAX(bilet_narxi) FROM Biletlar)",
    options: [
      "Eng kichik narxdagi biletlarni virtual jadval (view) qilib saqlash",
      "O'rtacha narxdagi biletlarni virtual jadval (view) qilib saqlash",
      "Virtual jadval (VIEW) dagi barcha ma'lumotlarni chiqarish",
      "Eng katta narxdagi biletlarni virtual jadval (view) qilib saqlash",
    ],
    correctAnswer:
      "Eng katta narxdagi biletlarni virtual jadval (view) qilib saqlash",
  },
  {
    id: 8,
    question: "Ko'pga ko'p bog'lanish qanday hosil bo'ladi?",
    options: [
      "A va B javoblar to'g'ri",
      "Qo‘shimcha jadval yaratib ikkala jadvalni ham u bilan 1:n qilish lozim",
      "2 ta 1:n bog’lanishdan n:n bog’lanish kelib chiqadi",
      "To'g'ri javob yo'q",
    ],
    correctAnswer:"Qo‘shimcha jadval yaratib ikkala jadvalni ham u bilan 1:n qilish lozim", },
  {
    id: 9,
    question: "Ichki so'rov qayerda ishlatiladi?",
    options: [
      "U tashqi so'rovning WHERE qismida qiymat qaytaruvchi vazifasida keladi",
      "Funksiyalar yaratganda",
      "U ichki so'rovda tanlangan ma'lumotlarni chiqarish uchun birinchi yoziladi",
      "JOIN lar bilan ishlaganda",
    ],
    correctAnswer:
      "U tashqi so'rovning WHERE qismida qiymat qaytaruvchi vazifasida keladi", // This is a very common use case.
  },
  {
    id: 10,
    question: "MySQL da FULL OUTER JOIN qanday hosil qilinadi?",
    options: [
      "SELECT LEFT JOIN AND RIGHT JOIN",
      "LEFT JOIN INNER RIGHT JOIN",
      "LEFT JOIN UNION RIGHT JOIN",
      "CROSS JOIN",
    ],
    correctAnswer: "LEFT JOIN UNION RIGHT JOIN",
  },
  {
    id: 11,
    question: "Birga ko'p bog'lanish nima?",
    options: [
      "Bir jadvaldagi ko‘p qatorlar ikkinchi jadvaldagi ko‘p qatorlarga mos kelishi",
      "Bir jadvaldagi bitta qator ikkinchi jadvaldagi bitta qatorga mos kelishi",
      "Ikkita jadval o'rtasidagi munosabat o'rnatish",
      "Bir jadvaldagi bitta qator ikkinchi jadvaldagi ko’p qatorlarga mos kelishi",
    ],
    correctAnswer:
      "Bir jadvaldagi bitta qator ikkinchi jadvaldagi ko’p qatorlarga mos kelishi",
  },
  {
    id: 12,
    question:
      "So'rov natijasi?\nSELECT *\nFROM Poyezdlar WHERE junash_vaqti IN (SELECT MAX(junash_vaqti) FROM Poyezdlar)",
    options: [
      "Poyezdlar jadvalidan bugungi jo'nash vaqtdagi poyezdlarni chiqarish",
      "Poyezdlar jadvalidan eng birinchi jo'nash vaqtdagi poyezdlarni chiqarish",
      "Poyezdlar jadvalidan eng oxirgi jo'nash vaqtdagi poyezdlarni chiqarish",
      "Poyezdlar jadvalidan o'rtacha jo'nash vaqtdagi poyezdlarni chiqarish",
    ],
    correctAnswer:
      "Poyezdlar jadvalidan eng oxirgi jo'nash vaqtdagi poyezdlarni chiqarish",
  },
  {
    id: 13,
    question: "Protsedura qanday o'chiriladi?",
    options: [
      "CALL procedure_name(value1, value2,...)",
      "CREATE PROCEDURE procedure_name(IN parameter datatype, …)",
      "DELETE PROCEDURE procedure_name;",
      "DROP PROCEDURE procedure_name;",
    ],
    correctAnswer: "DROP PROCEDURE procedure_name;",
  },
  {
    id: 14,
    question: "n:n bog'lanish qanday hosil bo'ladi?",
    options: [
      "Ustun qiymatlari yagona bo'lishini ta'minlash orqali",
      "ma'lumot kiritishdagi xatolikni oldini olish orqali",
      "1:1 bilan n:n bog'lanishdan n:n bog'lanish kelib chiqadi",
      "2 ta 1:n bog’lanishdan n:n bog’lanish kelib chiqadi",
    ],
    correctAnswer: "2 ta 1:n bog’lanishdan n:n bog’lanish kelib chiqadi", // via a junction/linking table
  },
  {
    id: 15,
    question: "ALTER TABLE ning MODIFY COLUMN vazifasi nima?",
    options: [
      "Jadvalning ustun turini o'zgartirish",
      "Jadval ustun nomini va turini o'zgartirish",
      "Jadvalga ustun qo'shish",
      "Jadvallarning ustunini o'chirish",
    ],
    correctAnswer: "Jadvalning ustun turini o'zgartirish", // Can also modify other attributes, but type is primary.
  },
  {
    id: 16,
    question: "LEFT JOIN nima?",
    options: [
      "ikkala jadvaldagi qiymatlarga mos keladigan qatorlarni tanlaydi.",
      "barcha qatorlarni o'ng jadvaldan va mos qatorlarni chap jadvaldan qaytaradi.",
      "O'ng va chap jadvaldan barcha qatorlarni qaytaradi.",
      "chap jadvaldagi barcha qatorlarni va o'ng jadvaldagi mos qatorlarni qaytaradi",
    ],
    correctAnswer:
      "chap jadvaldagi barcha qatorlarni va o'ng jadvaldagi mos qatorlarni qaytaradi",
  },
  {
    id: 17,
    question: "Funksiya yaratishda RETURNS nima?",
    options: [
      "Funksiyada ishlatilmaydi",
      "Funksiyaga berilgan qiymatni qaytarad", // "qaytaradi"
      "Funksiya qaytaradigan qiymat turini ko'rsatadi",
      "Funksiya qaytaradigan qiymatni ko'rsatish",
    ],
    correctAnswer: "Funksiya qaytaradigan qiymat turini ko'rsatadi",
  },
  {
    id: 18,
    question: "Funksiya yaratishda RETURN nima vazifani bajaradi?",
    options: [
      "Funksiya qaytaradigan qiymatni ko'rsatish",
      "Funksiya qaytaradigan qiymat turini ko'rsatadi",
      "Funksiyada ishlatilmaydi",
      "Funksiyaga berilgan qiymatni qaytaradi",
    ],
    correctAnswer: "Funksiya qaytaradigan qiymatni ko'rsatish", // This is the statement that actually returns the value.
  },
  {
    id: 19,
    question: "INNER JOIN nima?",
    options: [
      "ikkala jadvaldagi qiymatlarga mos keladigan qatorlarni tanlaydi.",
      "barcha qatorlarni o'ng jadvaldan va mos qatorlarni chap jadvaldan qaytaradi.",
      "chap jadvaldagi barcha qatorlarni va o'ng jadvaldagi mos qatorlarni qaytaradi",
      "O'ng va chap jadvaldan barcha qatorlarni qaytaradi.",
    ],
    correctAnswer:
      "ikkala jadvaldagi qiymatlarga mos keladigan qatorlarni tanlaydi.",
  },
  {
    id: 20,
    question: "Funksiya nima?",
    options: [
      "Ma'lumotlar bazasida amallar bajaradigan skriptlar hisoblanadi.",
      "To'g'ri javob yo'q",
      "Ma'lumotlar bazasida view lardagi ma'lumotlarni olish uchun obyekt",
      "Ma'lumotlar bazasida SELECT so'rovining optimal varianti",
    ],
    correctAnswer:
      "Ma'lumotlar bazasida amallar bajaradigan skriptlar hisoblanadi.", // More precisely, a named block that performs a task and returns a value. This is closest.
  },
  {
    id: 21,
    question: "AUTO_INCREMENT nima vazifa bajaradi?",
    options: [
      "Ustunga qiymat kiritilmasa, avtomatik tarzda oxirgi sonni bittaga oshirilgan qiymatini kiritadi",
      "Ustunga random tarzda turli xil raqamlar avtomatik kiritish",
      "Avtomatik ma'lumot kiritish",
      "INSERT amalining avtomatik bajarish operatori",
    ],
    correctAnswer:
      "Ustunga qiymat kiritilmasa, avtomatik tarzda oxirgi sonni bittaga oshirilgan qiymatini kiritadi",
  },
  {
    id: 22,
    question: "Murakkab so'rov qanday tashkil topadi?",
    options: [
      "Yuqori va pastki so'rovlardan",
      "Chap va O'ng so'rovlardan",
      "Ichki va tashqi so'rovlardan",
      "U tashqi so'rovning WHERE qismida qiymat qaytaruvchi vazifasida keladi",
    ],
    correctAnswer: "Ichki va tashqi so'rovlardan", // (Subqueries)
  },
  {
    id: 23,
    question: "Trigger nima?",
    options: [
      "Ma'lumotlar to'lib ketishini oldini oluvchi obyektlar",
      "Ma'lumotlar bazasida jadval yaratganda avtomatik yaratiladigan obyektlar",
      "Ma'lum bir amalni avtomatik ravishda ishga tushiradigan database obyekti hisoblanadi.",
      "Ma'lumotlar bazasini yaratganda yaratiladigan obyektlar",
    ],
    correctAnswer:
      "Ma'lum bir amalni avtomatik ravishda ishga tushiradigan database obyekti hisoblanadi.",
  },
  {
    id: 24,
    question: "ID nima?",
    options: [
      "Pasport raqam",
      "tashqi kalit",
      "ortiqcha ustun",
      "Identification (Jadvaldagi takrorlanmas ustun)",
    ],
    correctAnswer: "Identification (Jadvaldagi takrorlanmas ustun)",
  },
  {
    id: 25,
    question: "PK va UK qo'yishdan maqsad nima?",
    options: [
      "Jadvallarni tuzilishini o'zgartirish",
      "Jadvalning ustun turini o'zgartirish",
      "Jadvalga ustun qo'shish",
      "Ustun qiymatlari yagona bo'lishini ta'minlash va ma'lumot kiritishdagi xatolikni oldini olish",
    ],
    correctAnswer:
      "Ustun qiymatlari yagona bo'lishini ta'minlash va ma'lumot kiritishdagi xatolikni oldini olish",
  },
  {
    id: 26,
    question: "Protsedura qanday yaratiladi?",
    options: [
      "INSERT PROCEDURE procedure_name;",
      "CALL procedure_name(value1, value2,...)",
      "DROP PROCEDURE procedure_name;",
      "CREATE PROCEDURE procedure_name(IN parameter datatype, …)",
    ],
    correctAnswer: "CREATE PROCEDURE procedure_name(IN parameter datatype, …)",
  },
  {
    id: 27,
    question: "Trigger yaratilishi to'g'ri yozilgan qatorni toping",
    options: [
      "CREATE TRIGGER AFTER INSERT table FOR EACH ROW BEGIN .. END", // Missing trigger name and ON keyword
      "CREATE TRIGGER nomi BEFORE FOR EACH ROW INSERT ON table BEGIN .. END", // INSERT ON table AFTER FOR EACH ROW
      "CREATE TRIGGER nomi BEFORE INSERT table BEGIN .. END", // Missing ON keyword and FOR EACH ROW
      "CREATE TRIGGER nomi BEFORE INSERT ON table FOR EACH ROW BEGIN .. END",
    ],
    correctAnswer:
      "CREATE TRIGGER nomi BEFORE INSERT ON table FOR EACH ROW BEGIN .. END",
  },
  {
    id: 28,
    question: "PRIMARY KEY nima?",
    options: [
      "Ustundagi ma'lumotlarni yagonaligini ta'minlash",
      "Tashqi kalit, boshqa jadvallarning ichki kaliti bilan bog'lash uchun",
      "Boshqa jadvallar bilan bog'lash va yagonalikni ta'minlash uchun ichki kalit",
      "To'g'ri javob yo'q",
    ],
    correctAnswer:
      "Boshqa jadvallar bilan bog'lash va yagonalikni ta'minlash uchun ichki kalit",
  },
  {
    id: 29,
    question: "FOREIGN KEY nima?",
    options: [
      "Ustundagi ma'lumotlarni yagonaligini ta'minlash",
      "Boshqa jadvallar bilan bog'lash va yagonalikni ta'minlash uchun ichki kalit",
      "Tashqi kalit, boshqa jadvallarning ichki kaliti bilan bog'lash uchun",
      "To'g'ri javob yo'q",
    ],
    correctAnswer:
      "Tashqi kalit, boshqa jadvallarning ichki kaliti bilan bog'lash uchun",
  },
  {
    id: 30,
    question: "Ko'pga ko'p bog'lanish nima?",
    options: [
      "Bir jadvaldagi bitta qator ikkinchi jadvaldagi bitta qatorga mos kelishi",
      "Bir jadvaldagi bitta qator ikkinchi jadvaldagi ko’p qatorlarga mos kelishi",
      "Bir jadvaldagi ko‘p qatorlar ikkinchi jadvaldagi ko‘p qatorlarga mos kelishi",
      "Ikkita jadval o'rtasidagi munosabat o'rnatish",
    ],
    correctAnswer:
      "Bir jadvaldagi ko‘p qatorlar ikkinchi jadvaldagi ko‘p qatorlarga mos kelishi",
  },
  {
    id: 31,
    question: "DELIMITER // nima?",
    options: [
      "Bu bir nechta SQL so'rovlarida protceduralarni o'chirishda ishlatiladi",
      "Bu bir nechta SQL so'rovlarini birlashtirib ishlatish vazifasini bajaradi", // More accurately, it changes the statement terminator for defining blocks of code.
      "Bu bir nechta SQL so'rovlarida funksiyalarni o'chirishda ishlatiladi",
      "Bu bir nechta SQL so'rovlarini xatoliklarini oldini olish vazifasini bajaradi",
    ],
    correctAnswer:
      "Bu bir nechta SQL so'rovlarini birlashtirib ishlatish vazifasini bajaradi", // Closest meaning: allows '; ' within procedures/functions to not terminate the whole definition.
  },
  {
    id: 32,
    question: "ALTER TABLE ning ADD vazifasi nima?",
    options: [
      "Jadval ustun nomini va turini o'zgartirish",
      "Jadvallarning ustunini o'chirish",
      "Jadvalning ustun turini o'zgartirish",
      "Jadvalga ustun qo'shish",
    ],
    correctAnswer: "Jadvalga ustun qo'shish",
  },
  {
    id: 33,
    question:
      "So'rov natijasi?\nSELECT *\nFROM Biletlar WHERE bilet_narxi > (SELECT AVG(bilet_narxi) FROM Biletlar)",
    options: [
      "Biletlar jadvalidan o'rtacha narxdagi biletga teng narxdagi biletlarni chiqarish",
      "Biletlar jadvalidan o'rtacha narxdagi biletdan katta narxda bo'lgan biletlarni chiqarish",
      "Biletlar jadvalidan eng katta narxdagi biletdan kichik narxda bo'lgan biletlarni chiqarish",
      "Biletlar jadvalidan o'rtacha narxdagi biletdan kichik narxda bo'lgan biletlarni chiqarish",
    ],
    correctAnswer:
      "Biletlar jadvalidan o'rtacha narxdagi biletdan katta narxda bo'lgan biletlarni chiqarish",
  },
  {
    id: 34,
    question: "Triggerning FOR EACH ROW operatori vazifasi nima?",
    options: [
      "Amal bajarilgandan keyin trigger ishlashini bildiruvchi operator",
      "Triggerni o'chirish operatori",
      "Amal bajarilganda har bir qator uchun trigger ishlashini bildiruvchi operator",
      "Amal bajarilishidan oldin trigger ishlashini bildiruvchi operator",
    ],
    correctAnswer:
      "Amal bajarilganda har bir qator uchun trigger ishlashini bildiruvchi operator",
  },
  {
    id: 35,
    question: "MySQL da o'zgaruvchi qanday yaratiladi?",
    options: [
      "DECLARE variable_name datatype;",
      "SELECT variable_name datatype;",
      "INSERT variable_name datatype;",
      "CREATE variable_name datatype;",
    ],
    correctAnswer: "DECLARE variable_name datatype;", // (Inside stored procedures/functions/triggers)
  },
  {
    id: 36,
    question: "Saqlangan protseduradan qanday foydalaniladi?",
    options: [
      "Select * FROM procedure_name",
      "CALL procedure_name(value1, value2,...)",
      "INSERT INTO procedure_name VALUES …",
      "SELECT procedure_name(value1,value2,..)",
    ],
    correctAnswer: "CALL procedure_name(value1, value2,...)",
  },
];

// Tekshirish uchun birinchi savolni chiqarib ko'ramiz:
// console.log(JSON.stringify(quizData, null, 2));
