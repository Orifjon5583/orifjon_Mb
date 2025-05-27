const questionsSet8 = [
  {
    id: 1,
    question: "MySQL da jadvalni o'chirish sintaksisi qanday?",
    options: [
      "DROP TABLE table_name",
      "DELETE TABLE table_name",
      "REMOVE TABLE table_name",
      "INSERT INTO table_name",
    ],
    correctAnswer: "DROP TABLE table_name",
  },
  {
    id: 2,
    question:
      "Agar siz 1 dan 10 gacha bo'lgan sonlarni saqlamoqchi bo'lsangiz, qanday ma'lumot turi eng optimal bo'ladi?",
    options: ["INT", "TINYINT", "SMALLINT", "CHAR"],
    correctAnswer: "TINYINT",
  },
  {
    id: 3,
    question:
      "Hisob kitob ma'lum bir qismida (kasr qismida) qanday ma'lumot turi ishlatilishi maqsadga muvofiq?",
    options: ["INT", "FLOAT", "DOUBLE", "B va C javoblar to'g'ri"],
    correctAnswer: "B va C javoblar to'g'ri",
  },
  {
    id: 4, // From Image 6 (unclear number)
    question:
      "Faqat butun sonli qiymatni saqlash uchun ko'rsatilgan qiymatni tanlang.",
    options: [
      "CHAR, VARCHAR, TEXT",
      "INTEGER, DECIMAL, FLOAT", // DECIMAL/FLOAT are not *only* integer
      "DATE, DATETIME, TIMESTAMP",
      "INT, BIGINT, SMALLINT",
    ],
    correctAnswer: "INT, BIGINT, SMALLINT",
  },
  {
    id: 5, // From Image 6 (unclear number)
    question:
      "Ma'lumotlar bilan ishlaydigan vaqtlarini (sana va vaqt) olish uchun qanday ma'lumot turidan foydalanish maqsadga muvofiq.",
    options: ["VARCHAR", "CHAR", "INT", "DATETIME"],
    correctAnswer: "DATETIME",
  },
  {
    id: 6, // From Image 6 (unclear number)
    question:
      "Jadvalga ma'lumot kiritish uchun so'rovni to'g'ri berilgan qatorni toping.",
    options: [
      "INSERT INTO jadval_nomi(ustun_nomlari,..) WHERE shart",
      "INSERT jadval_nomi(ustun_nomlari,..) VALUES (qiymatlar,...)", // Missing INTO
      "INSERT jadval_nomi(ustun_nomlari,..) VALUES (qiymatlar,...) INTO (ustun_nomlar_2,..)",
      "INSERT INTO jadval_nomi(ustun_nomlari,..) VALUES (qiymatlar,...)",
    ],
    correctAnswer:
      "INSERT INTO jadval_nomi(ustun_nomlari,..) VALUES (qiymatlar,...)",
  },
  {
    id: 7, // Image 5, Savol 8
    question:
      "MySQL da ustunga NOT NULL shartini berish qanday vazifa bajaradi?",
    options: [
      "NOT NULL berilgan ustun qiymati boshqa qiymat bilan bir xil bo'lishi",
      "NOT NULL berilgan ustun qiymatining takrorlanmasligini bildiradi",
      "NOT NULL berilgan ustundagi qiymatning bo'sh (NULL) bo'lmasligini bildiradi",
      "NOT NULL berilgan ustuning qiymati faqat raqamlardan iborat bo'lishini mumkinligini bildiradi",
    ],
    correctAnswer:
      "NOT NULL berilgan ustundagi qiymatning bo'sh (NULL) bo'lmasligini bildiradi",
  },
  {
    id: 8, // Image 5, Savol 9
    question: "SQL da UPDATE amali nima?",
    options: [
      "Ma'lumotlarni yaratish",
      "Ma'lumotlarni tanlash",
      "Ma'lumotlarni o'zgartirish",
      "Ma'lumotlarni o'chirish",
    ],
    correctAnswer: "Ma'lumotlarni o'zgartirish",
  },
  {
    id: 9, // Image 5, Savol 10
    question:
      "SELECT ochish_vaqti, saql_joy_nomi FROM samolyotlar; So'rov vazifasi nima?",
    options: [
      "Samolyotlar jadvalidan barcha ma'lumotlarni ochish vaqti va joy_nomi ustunlarini chiqarish",
      "Samolyotlar jadvalidan ochish_vaqti va joy_nomi ustunlaridagi birinchi qatorni chiqarish",
      "So'rov xatolikka uchragan",
      "ochish_vaqti va joy_nomi ustunlaridagi ma'lumotlar ichidan samolyot nomli qiymatlarni chiqarish",
    ],
    correctAnswer:
      "Samolyotlar jadvalidan barcha ma'lumotlarni ochish vaqti va joy_nomi ustunlarini chiqarish",
  },
  {
    id: 10, // Image 5, Savol 11
    question: "WHERE operatori vazifasi nima?",
    options: [
      "Ma'lumotlarni guruhlash",
      "Natijalarni saralash",
      "Qaytgan satrlarni cheklash",
      "to'g'ri javob yo'q",
    ],
    correctAnswer: "Qaytgan satrlarni cheklash",
  },
  {
    id: 11, // Image 4, Savol 12
    question:
      "Ushbu so'rovning vazifasi nima? SELECT * FROM testlar WHERE t_javob = j_javoblar;",
    options: [
      "testlar jadvalidan barcha ma'lumotlarni oladi",
      "testlar jadvalidan t_javob va j_javoblar ustunidagi qiymatlar teng bo'lmagan qatorlarni oladi",
      "testlar jadvalidan t_javob va j_javoblar ustunidagi qiymatlar teng bo'lgan qatorlarni oladi",
      "testlar jadvalidan t_javob va j_javoblar ustunidagi qiymatlar teng bo'lgan qatorlar sonini oladi",
    ],
    correctAnswer:
      "testlar jadvalidan t_javob va j_javoblar ustunidagi qiymatlar teng bo'lgan qatorlarni oladi",
  },
  {
    id: 12, // Image 4, Savol 13
    question:
      "Ushbu so'rovning vazifasi nima? SELECT javoblar FROM testlar WHERE t_javob = j_javoblar;",
    options: [
      "testlar jadvalidan barcha ma'lumotlarni ustunini chiqarish",
      "testlar jadvalidan tenglik bajarilmagan qatorlardan javoblar ustunini chiqarish",
      "testlar jadvalidan tenglik bajarilgan qatorlardan javoblar ustunini chiqarish",
      "testlar jadvalidan tenglik bajarilgan qatorlar sonini chiqarish",
    ],
    correctAnswer:
      "testlar jadvalidan tenglik bajarilgan qatorlardan javoblar ustunini chiqarish",
  },
  {
    id: 13, // Image 4, Savol 14
    question: "FALSE AND TRUE amaldan qanday natija qaytadi",
    options: ["TRUE", "FALSE", "NOT", "0"],
    correctAnswer: "FALSE",
  },
  {
    id: 14, // Image 4, Savol 15
    question: "IN operatori vazifasi nima?",
    options: [
      "Faqat aniq (bitta) qiymatlarni belgilashda ishlatiladi",
      "Bir nechta OR shartlarining qiymatini (ya'ni bir nechta qiymatlarni) belgilash imkonini beradi",
      "Faqat matnli qiymatlarni tanlaydi",
      "Ma'lumotni istiyoriy qismidan qiymatlarni qidirish uchun ishlatiladi",
    ],
    correctAnswer:
      "Bir nechta OR shartlarining qiymatini (ya'ni bir nechta qiymatlarni) belgilash imkonini beradi",
  },
  {
    id: 15, // Image 3, Savol 16
    question:
      "Talabalar jadvalida Fio ustunida Alisher ismli talabani familiyasini tanlash so'rovi yozing",
    options: [
      'SELECT * FROM talabalar WHERE fio = "Alisher%";', // Typo, should be LIKE
      'SELECT * FROM talabalar WHERE fio = "Alisher";',
      'SELECT * FROM talabalar WHERE fio LIKE "Alisher%";',
      "A va C javoblar to'g'ri",
    ],
    correctAnswer: 'SELECT * FROM talabalar WHERE fio LIKE "Alisher%";',
  },
  {
    id: 16, // Image 3, Savol 17
    question: "LEFT() funksiyasi vazifasini ko'rsating.",
    options: [
      "Matnni o'ng tomonidan berilgan uzunlikdagi belgilarni kesib oladi",
      "Matnni chap tomonidan berilgan uzunlikdagi belgilarni kesib oladi",
      "Matnni istiyoriy qismidan kesib oladi",
      "Matnni o'ng tomonidan so'zni kesib oladi",
    ],
    correctAnswer:
      "Matnni chap tomonidan berilgan uzunlikdagi belgilarni kesib oladi",
  },
  {
    id: 17, // Image 3, Savol 18
    question: "So'rovlarni ishlashi nega sekinlashadi?",
    options: [
      "Server to'lib qolsa",
      "Kompyuter qotib qolsa",
      "Bazada jadvallar ko'p bo'lsa",
      "Jadvallarda dublikatlar ko'paysa",
    ],
    correctAnswer: "Server to'lib qolsa", // More general cause of slowness
  },
  {
    id: 18, // Image 3, Savol 19
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
    id: 19, // Image 2, Savol 20
    question:
      "So'rov natijasi? SELECT * FROM Poyezdlar WHERE junash_vaqti IN (SELECT MAX(junash_vaqti) FROM Poyezdlar)",
    options: [
      "Poyezdlar jadvalidan o'rtacha jo'nash vaqtidagi poyezdlarni chiqarish",
      "Poyezdlar jadvalidan eng birinchi jo'nash vaqtidagi poyezdlarni chiqarish",
      "Poyezdlar jadvalidan eng oxirgi jo'nash vaqtidagi poyezdlarni chiqarish",
      "Poyezdlar jadvalidan bugungi jo'nash vaqtidagi poyezdlarni chiqarish",
    ],
    correctAnswer:
      "Poyezdlar jadvalidan eng oxirgi jo'nash vaqtidagi poyezdlarni chiqarish",
  },
  {
    id: 20, // Image 2, Savol 21
    question: "Funksiya yaratishda RETURNS nima?",
    options: [
      "Funksiyaga berilgan qiymatni qaytaradi", // This is RETURN statement
      "Funksiya qaytaradigan qiymatni ko'rsatish", // This is RETURN statement
      "Funksiya qaytaradigan qiymat turini ko'rsatadi",
      "Funksiyada ishlatilmaydi",
    ],
    correctAnswer: "Funksiya qaytaradigan qiymat turini ko'rsatadi",
  },
  {
    id: 21, // Image 2, Savol 22
    question:
      "So'rov vazifasi? CREATE VIEW bilet_max_price AS SELECT * FROM Biletlar WHERE bilet_narxi IN (SELECT MAX(bilet_narxi) FROM Biletlar)",
    options: [
      "Eng kichik narxdagi biletlarni virtual jadval (view) qilib saqlash",
      "Eng katta narxdagi biletlarni virtual jadval (view) qilib saqlash",
      "O'rtacha narxdagi biletlarni virtual jadval (view) qilib saqlash",
      "Virtual jadval (VIEW) dagi barcha ma'lumotlarni chiqarish",
    ],
    correctAnswer:
      "Eng katta narxdagi biletlarni virtual jadval (view) qilib saqlash",
  },
  {
    id: 22, // Image 1 & 2, Savol 23
    question: "Yaratilingan VIEW lar qanday chaqiriladi?",
    options: [
      "CALL view_name()",
      "SELECT view_name(value1,value2,..)",
      "SELECT * FROM view_nomi...",
      "INSERT INTO view_name VALUES...",
    ],
    correctAnswer: "SELECT * FROM view_nomi...",
  },
  {
    id: 23, // Image 1, Savol 24
    question: "Protsedura qachon ishlatiladi?",
    options: [
      "VIEW yaratmalik uchun kerak bo'ladi",
      "Ko'p foydalanadigan so'rovlarni funksiya qilib saqlab qo'yishda ishlatiladi", // Best of poor options
      "Ma'lumotlar o'qib ketmaketligi uchun kerak",
      "Ma'lumotlar to'lib ketishini oldini olish uchun kerak",
    ],
    correctAnswer:
      "Ko'p foydalanadigan so'rovlarni funksiya qilib saqlab qo'yishda ishlatiladi",
  },
  {
    id: 24, // Image 1, Savol 25
    question: "Protsedura qanday o'chiriladi?",
    options: [
      "CREATE PROCEDURE procedure_name(IN parameter datatype, ...)",
      "DROP PROCEDURE procedure_name;",
      "CALL procedure_name(value1, value2,...)",
      "DELETE PROCEDURE procedure_name;",
    ],
    correctAnswer: "DROP PROCEDURE procedure_name;",
  },
];

// Ushbu massivni avvalgi `quizData` va `quizDataNew` bilan birlashtirishingiz yoki alohida ishlatishingiz mumkin.
// console.log(JSON.stringify(quizDataFromImages, null, 2));
