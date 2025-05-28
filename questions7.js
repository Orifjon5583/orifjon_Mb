const questionsSet7 = [
  {
    id: 1,
    question: "Triggerning AFTER operatori vazifasi nima?",
    options: [
      "Amal bajarilishidan oldin trigger ishlashini bildiruvchi operator",
      "Amal bajarilgandan keyin trigger ishlashini bildiruvchi operator",
      "Amal bajarilganda har bir qator uchun trigger ishlashini bildiruvchi operato",
    ],
    answer: // O'zgartirildi
      "Amal bajarilgandan keyin trigger ishlashini bildiruvchi operator",
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
    answer: "SELECT * FROM view_nomi …", // O'zgartirildi
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
    answer: "Barcha javob to'g'ri", // O'zgartirildi
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
    answer: "Ko'p pul ketadi va so'rovlar ishlashi sekinlashadi", // O'zgartirildi
  },
  {
    id: 5,
    question: "Jadvallarni bog'lashdan maqsad nima?",
    options: [
      "Jadvalning ustun turini o'zgartirish",
      "Jadvallarni tuzilishini o'zgartirish",
      "Ma'lumotlarni kiritishdagi xatolikni oldini olishdir",
    ],
    answer: "Jadvallarni tuzilishini o'zgartirish", // O'zgartirildi
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
    answer: "o'zgaruvchi yaratish", // O'zgartirildi
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
    answer: // O'zgartirildi
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
    answer: "Qo‘shimcha jadval yaratib ikkala jadvalni ham u bilan 1:n qilish lozim", // O'zgartirildi
  },
  {
    id: 9,
    question: "Ichki so'rov qayerda ishlatiladi?",
    options: [
      "U tashqi so'rovning WHERE qismida qiymat qaytaruvchi vazifasida keladi",
      "Funksiyalar yaratganda",
      "U ichki so'rovda tanlangan ma'lumotlarni chiqarish uchun birinchi yoziladi",
      "JOIN lar bilan ishlaganda",
    ],
    answer: // O'zgartirildi
      "U tashqi so'rovning WHERE qismida qiymat qaytaruvchi vazifasida keladi",
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
    answer: "LEFT JOIN UNION RIGHT JOIN", // O'zgartirildi
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
    answer: // O'zgartirildi
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
    answer: // O'zgartirildi
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
    answer: "DROP PROCEDURE procedure_name;", // O'zgartirildi
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
    answer: "2 ta 1:n bog’lanishdan n:n bog’lanish kelib chiqadi", // O'zgartirildi
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
    answer: "Jadvalning ustun turini o'zgartirish", // O'zgartirildi
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
    answer: // O'zgartirildi
      "chap jadvaldagi barcha qatorlarni va o'ng jadvaldagi mos qatorlarni qaytaradi",
  },
  {
    id: 17,
    question: "Funksiya yaratishda RETURNS nima?",
    options: [
      "Funksiyada ishlatilmaydi",
      "Funksiyaga berilgan qiymatni qaytarad",
      "Funksiya qaytaradigan qiymat turini ko'rsatadi",
      "Funksiya qaytaradigan qiymatni ko'rsatish",
    ],
    answer: "Funksiya qaytaradigan qiymat turini ko'rsatadi", // O'zgartirildi
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
    answer: "Funksiya qaytaradigan qiymatni ko'rsatish", // O'zgartirildi
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
    answer: // O'zgartirildi
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
    answer: // O'zgartirildi
      "Ma'lumotlar bazasida amallar bajaradigan skriptlar hisoblanadi.",
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
    answer: // O'zgartirildi
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
    answer: "Ichki va tashqi so'rovlardan", // O'zgartirildi
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
    answer: // O'zgartirildi
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
    answer: "Identification (Jadvaldagi takrorlanmas ustun)", // O'zgartirildi
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
    answer: // O'zgartirildi
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
    answer: "CREATE PROCEDURE procedure_name(IN parameter datatype, …)", // O'zgartirildi
  },
  {
    id: 27,
    question: "Trigger yaratilishi to'g'ri yozilgan qatorni toping",
    options: [
      "CREATE TRIGGER AFTER INSERT table FOR EACH ROW BEGIN .. END",
      "CREATE TRIGGER nomi BEFORE FOR EACH ROW INSERT ON table BEGIN .. END",
      "CREATE TRIGGER nomi BEFORE INSERT table BEGIN .. END",
      "CREATE TRIGGER nomi BEFORE INSERT ON table FOR EACH ROW BEGIN .. END",
    ],
    answer: // O'zgartirildi
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
    answer: // O'zgartirildi
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
    answer: // O'zgartirildi
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
    answer: // O'zgartirildi
      "Bir jadvaldagi ko‘p qatorlar ikkinchi jadvaldagi ko‘p qatorlarga mos kelishi",
  },
  {
    id: 31,
    question: "DELIMITER // nima?",
    options: [
      "Bu bir nechta SQL so'rovlarida protceduralarni o'chirishda ishlatiladi",
      "Bu bir nechta SQL so'rovlarini birlashtirib ishlatish vazifasini bajaradi",
      "Bu bir nechta SQL so'rovlarida funksiyalarni o'chirishda ishlatiladi",
      "Bu bir nechta SQL so'rovlarini xatoliklarini oldini olish vazifasini bajaradi",
    ],
    answer: // O'zgartirildi
      "Bu bir nechta SQL so'rovlarini birlashtirib ishlatish vazifasini bajaradi",
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
    answer: "Jadvalga ustun qo'shish", // O'zgartirildi
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
    answer:
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
    answer:
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
    answer: "DECLARE variable_name datatype;",
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
    answer: "CALL procedure_name(value1, value2,...)",
  },
];

// Tekshirish uchun birinchi savolni chiqarib ko'ramiz (ixtiyoriy):
// console.log(JSON.stringify(questionsSet7[0], null, 2));
// console.log(JSON.stringify(questionsSet7[32], null, 2)); // oxirgi o'zgartirilganlardan biri