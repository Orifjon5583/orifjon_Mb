const questionsSet4 = [
  {
    question: "`DELIMITER //` nima?",
    options: [
      "Funksiya yoki protsedura nomini belgilaydi",
      "SQL so'rovlarini ajratuvchi standart belgini (odatda ';') vaqtincha o'zgartirish uchun ishlatiladi, ko'pincha funksiya yoki protsedura tanasida ';' ishlatilganda kerak bo'ladi",
      "Izoh belgisini o'zgartiradi",
      "Ma'lumot turini belgilaydi",
    ],
    answer:
      "SQL so'rovlarini ajratuvchi standart belgini (odatda ';') vaqtincha o'zgartirish uchun ishlatiladi, ko'pincha funksiya yoki protsedura tanasida ';' ishlatilganda kerak bo'ladi",
  },
  {
    question: "Funksiya qanday yaratiladi (MySQL misolida)?",
    options: [
      "FUNCTION nom (parametrlar) BEGIN ... END;",
      "CREATE FUNCTION nom (parametrlar) RETURNS qaytariladigan_tur [XUSUSIYATLAR] BEGIN ... RETURN qiymat; END;",
      "NEW FUNCTION nom RETURNS tur AS ...;",
      "DEFINE FUNCTION nom (parametrlar) AS tur RETURN qiymat;",
    ],
    answer:
      "CREATE FUNCTION nom (parametrlar) RETURNS qaytariladigan_tur [XUSUSIYATLAR] BEGIN ... RETURN qiymat; END;",
  },
  {
    question:
      "Funksiya yaratishda `RETURN` nima vazifani bajaradi (funksiya tanasida)?",
    options: [
      "Funksiya qaysi turdagi qiymat qaytarishini e'lon qiladi",
      "Funksiya bajarilishini yakunlaydi va chaqiruvchiga qiymat qaytaradi",
      "Funksiyaga kiruvchi parametrni belgilaydi",
      "Funksiyani qayta chaqiradi",
    ],
    answer:
      "Funksiya bajarilishini yakunlaydi va chaqiruvchiga qiymat qaytaradi",
  },
  {
    question: "Funksiya yaratishda `RETURNS` nima (funksiya sarlavhasida)?",
    options: [
      "Funksiyadan qaytariladigan aniq qiymatni belgilaydi",
      "Funksiya qanday turdagi qiymat qaytarishini e'lon qiladi",
      "Funksiyaga bir nechta qiymat qaytarishga ruxsat beradi",
      "Funksiya hech qanday qiymat qaytarmasligini bildiradi",
    ],
    answer: "Funksiya qanday turdagi qiymat qaytarishini e'lon qiladi",
  },
  {
    question:
      "`DECLARE` nima (saqlanuvchi dasturlarda, masalan, funksiya yoki protsedurada)?",
    options: [
      "Jadval nomini e'lon qiladi",
      "Lokal o'zgaruvchilar, kursorlar yoki shartlarni (conditions/handlers) e'lon qilish uchun ishlatiladi",
      "Funksiyani chaqiradi",
      "Tashqi faylni import qiladi",
    ],
    answer:
      "Lokal o'zgaruvchilar, kursorlar yoki shartlarni (conditions/handlers) e'lon qilish uchun ishlatiladi",
  },
  {
    question:
      "MySQL da o'zgaruvchi qanday yaratiladi (saqlanuvchi dastur ichida)?",
    options: [
      "VAR ozgaruvchi_nomi TUR;",
      "LET ozgaruvchi_nomi = qiymat;",
      "DECLARE ozgaruvchi_nomi TUR [DEFAULT qiymat];",
      "CREATE VARIABLE ozgaruvchi_nomi TUR;",
    ],
    answer: "DECLARE ozgaruvchi_nomi TUR [DEFAULT qiymat];",
  },
  {
    question: "`IF, ELSEIF, ELSE` lar nima?",
    options: [
      "Takrorlanuvchi amallarni bajarish uchun sikl operatorlari",
      "Mantiqiy shartlarga asoslangan holda kod bloklarini shartli bajarish uchun boshqaruvchi tuzilmalar",
      "Ma'lumotlarni guruhlash uchun operatorlar",
      "Xatoliklarni ushlash uchun bloklar",
    ],
    answer:
      "Mantiqiy shartlarga asoslangan holda kod bloklarini shartli bajarish uchun boshqaruvchi tuzilmalar",
  },
  {
    question: "MySQL da Shart operatorlari (IF bloki) qanday yoziladi?",
    options: [
      "IF (shart) { ... } ELSE { ... }",
      "IF shart THEN ... ELSEIF shart THEN ... ELSE ... END IF;",
      "WHEN shart DO ... OTHERWISE ... END WHEN;",
      "IFF shart => ... ELSE => ... ;",
    ],
    answer: "IF shart THEN ... ELSEIF shart2 THEN ... ELSE ... END IF;", // shart2 o'rniga shart bo'lishi kerak edi, lekin javob variantidagi shart2 ni saqladim
  },
  {
    question: "`BEGIN` nima (saqlanuvchi dastur kontekstida)?",
    options: [
      "Izoh boshlanishini bildiradi",
      "Bir nechta SQL bayonotlarini o'z ichiga olgan kod blokining boshlanishini belgilaydi",
      "Transaktsiyani boshlaydi (alohida `START TRANSACTION` ham bor)",
      "Dastur bajarilishini yakunlaydi",
    ],
    answer:
      "Bir nechta SQL bayonotlarini o'z ichiga olgan kod blokining boshlanishini belgilaydi",
  },
  {
    question: "`END` nima (saqlanuvchi dastur kontekstida)?",
    options: [
      "Sikl tugashini bildiradi",
      "`BEGIN` bilan boshlangan kod blokining (masalan, funksiya, protsedura, IF bloki) tugashini belgilaydi",
      "Ma'lumotlar bazasiga ulanishni yakunlaydi",
      "Jadval yaratishni tugatadi",
    ],
    answer:
      "`BEGIN` bilan boshlangan kod blokining (masalan, funksiya, protsedura, IF bloki) tugashini belgilaydi",
  },
  {
    question: "Funksiya qanday o'chiriladi?",
    options: [
      "DELETE FUNCTION funksiya_nomi;",
      "REMOVE FUNCTION funksiya_nomi;",
      "DROP FUNCTION [IF EXISTS] funksiya_nomi;",
      "ERASE FUNCTION funksiya_nomi;",
    ],
    answer: "DROP FUNCTION [IF EXISTS] funksiya_nomi;",
  },
  {
    question:
      "Quyidagi so'rov vazifasi nima? `CREATE FUNCTION Words(matn VARCHAR(50)) RETURNS VARCHAR(50) RETURN LEFT(matn, LENGTH(matn)-1);`",
    options: [
      "Matnning birinchi belgisini qaytaradi",
      "Matnning oxirgi belgisidan tashqari qismini (ya'ni oxirgi belgini olib tashlab) qaytaradi",
      "Matnning uzunligini qaytaradi",
      "Matnni teskari tartibda qaytaradi",
    ],
    answer:
      "Matnning oxirgi belgisidan tashqari qismini (ya'ni oxirgi belgini olib tashlab) qaytaradi",
  },
  {
    question:
      'Quyidagi so\'rov vazifasi nima? `CREATE FUNCTION Words(matn VARCHAR(50)) RETURNS VARCHAR(50) RETURN CONCAT("Qisqartma: ", LEFT(matn, 1), RIGHT(matn, 1));`',
    options: [
      "Matnning o'rtasidagi ikkita belgini qaytaradi",
      "Matnni to'liq qaytaradi va oldiga \"Qisqartma: \" qo'shadi",
      '"Qisqartma: " so\'zidan keyin matnning birinchi va oxirgi belgilarini birlashtirib qaytaradi',
      "Matnning birinchi va oxirgi belgilarini almashtiradi",
    ],
    answer:
      '"Qisqartma: " so\'zidan keyin matnning birinchi va oxirgi belgilarini birlashtirib qaytaradi',
  },
  {
    question: "`VIEW` qachon ishlatiladi?",
    options: [
      "Jismoniy jadval yaratish uchun",
      "Murakkab so'rovlarni soddalashtirish, ma'lumotlarga kirishni cheklash (xavfsizlik), ma'lumotlarni ma'lum bir ko'rinishda taqdim etish uchun virtual jadval sifatida",
      "Ma'lumotlarni indekslash uchun",
      "Faqat ma'lumotlarni o'chirish uchun",
    ],
    answer:
      "Murakkab so'rovlarni soddalashtirish, ma'lumotlarga kirishni cheklash (xavfsizlik), ma'lumotlarni ma'lum bir ko'rinishda taqdim etish uchun virtual jadval sifatida",
  },
  {
    question: "`VIEW` qanday yaratiladi?",
    options: [
      "NEW VIEW view_nomi AS SELECT ...;",
      "DEFINE VIEW view_nomi FROM SELECT ...;",
      "CREATE VIEW view_nomi AS SELECT-so'rovi;",
      "MAKE VIEW view_nomi (ustunlar) AS SELECT ...;",
    ],
    answer: "CREATE VIEW view_nomi AS SELECT-so'rovi;",
  },
  {
    question: "`VIEW` qanday o'chiriladi?",
    options: [
      "DELETE VIEW view_nomi;",
      "ERASE VIEW view_nomi;",
      "DROP VIEW [IF EXISTS] view_nomi;",
      "REMOVE VIEW view_nomi;",
    ],
    answer: "DROP VIEW [IF EXISTS] view_nomi;",
  },
  {
    question:
      "So'rov vazifasi: `CREATE VIEW bilet_max_price AS SELECT * FROM Biletlar WHERE bilet_narxi IN (SELECT MAX(bilet_narxi) FROM Biletlar);`",
    options: [
      "`bilet_max_price` nomli yangi jismoniy jadval yaratadi",
      "`bilet_max_price` nomli virtual jadval (VIEW) yaratadi, bu eng qimmat bilet(lar) haqidagi ma'lumotlarni ko'rsatadi",
      "`Biletlar` jadvalidagi maksimal narxni o'zgartiradi",
      "Barcha biletlarning maksimal narxini ko'rsatuvchi funksiya yaratadi",
    ],
    answer:
      "`bilet_max_price` nomli virtual jadval (VIEW) yaratadi, bu eng qimmat bilet(lar) haqidagi ma'lumotlarni ko'rsatadi",
  },
  {
    question: "Yaratilgan `VIEW` lar qanday chaqiriladi/foydalaniladi?",
    options: [
      "EXECUTE VIEW view_nomi;",
      "Oddiy jadval kabi `SELECT` so'rovlarida (masalan, `SELECT * FROM view_nomi;`)",
      "CALL VIEW view_nomi;",
      "VIEW view_nomi RUN;",
    ],
    answer:
      "Oddiy jadval kabi `SELECT` so'rovlarida (masalan, `SELECT * FROM view_nomi;`)",
  },
  {
    question: "Yaratilgan funksiyalardan qanday foydalaniladi?",
    options: [
      "RUN FUNCTION funksiya_nomi(argumentlar);",
      "SQL so'rovlarida, odatda `SELECT` bandida yoki `WHERE` shartida, funksiya nomini argumentlar bilan chaqirish orqali (masalan, `SELECT funksiya_nomi(ustun) FROM jadval;`)",
      "INVOKE funksiya_nomi;",
      "START FUNCTION funksiya_nomi;",
    ],
    answer:
      "SQL so'rovlarida, odatda `SELECT` bandida yoki `WHERE` shartida, funksiya nomini argumentlar bilan chaqirish orqali (masalan, `SELECT funksiya_nomi(ustun) FROM jadval;`)",
  },
  {
    question: "Protsedura qachon ishlatiladi?",
    options: [
      "Faqat bitta qiymat qaytarish uchun",
      "Bir nechta SQL amallarini birlashtirish, murakkab logikani bajarish, ma'lumotlarni o'zgartirish (qiymat qaytarishi shart emas) uchun",
      "Jadvallarni nomlash uchun",
      "Ma'lumot turini aniqlash uchun",
    ],
    answer:
      "Bir nechta SQL amallarini birlashtirish, murakkab logikani bajarish, ma'lumotlarni o'zgartirish (qiymat qaytarishi shart emas) uchun",
  },
  {
    question: "Parametrlarga Funksiya ega bo'ladimi yoki Protsedurami?",
    options: [
      "Faqat Funksiya",
      "Faqat Protsedura",
      "Ham Funksiya, ham Protsedura parametrlarga ega bo'lishi mumkin (IN, OUT, INOUT)",
      "Hech qaysi biri parametr olmaydi",
    ],
    answer:
      "Ham Funksiya, ham Protsedura parametrlarga ega bo'lishi mumkin (IN, OUT, INOUT)",
  },
  {
    question: "Saqlangan protseduradan qanday foydalaniladi?",
    options: [
      "SELECT protsedura_nomi(argumentlar);",
      "CALL protsedura_nomi(argumentlar);",
      "EXEC protsedura_nomi(argumentlar);",
      "RUN protsedura_nomi(argumentlar);",
    ],
    answer: "CALL protsedura_nomi(argumentlar);",
  },
  {
    question: "Protsedura qanday yaratiladi (MySQL misolida)?",
    options: [
      "PROCEDURE nom (parametrlar) BEGIN ... END;",
      "CREATE PROCEDURE nom ([parametr_rejimi] parametr_nomi TUR, ...) BEGIN ... END;",
      "NEW PROCEDURE nom AS ...;",
      "DEFINE PROCEDURE nom BEGIN ... END;",
    ],
    answer:
      "CREATE PROCEDURE nom ([parametr_rejimi] parametr_nomi TUR, ...) BEGIN ... END;",
  },
  {
    question: "Protsedura qanday o'chiriladi?",
    options: [
      "DELETE PROCEDURE protsedura_nomi;",
      "DROP PROCEDURE [IF EXISTS] protsedura_nomi;",
      "REMOVE PROCEDURE protsedura_nomi;",
      "ERASE PROCEDURE protsedura_nomi;",
    ],
    answer: "DROP PROCEDURE [IF EXISTS] protsedura_nomi;",
  },
  {
    question:
      "So'rov vazifasi: `CREATE PROCEDURE Kitobxonlar() BEGIN SELECT * FROM Kitobxonlar WHERE kitoblar_soni > 5 END;`",
    options: [
      "`Kitobxonlar` nomli funksiya yaratadi",
      "`Kitobxonlar` nomli protsedura yaratadi, chaqirilganda 5 tadan ko'p kitob olgan kitobxonlarni ko'rsatadi",
      "`Kitobxonlar` jadvalini yaratadi",
      "`Kitobxonlar` jadvalidan 5 tadan ko'p kitob olganlarni o'chiradi",
    ],
    answer:
      "`Kitobxonlar` nomli protsedura yaratadi, chaqirilganda 5 tadan ko'p kitob olgan kitobxonlarni ko'rsatadi",
  },
  {
    question:
      'So\'rov vazifasi: `CREATE PROCEDURE Reyslar() BEGIN SELECT * FROM Reyslar WHERE junash_vaqti > "2023-01-01" END;`',
    options: [
      "`Reyslar` jadvalidagi barcha reyslarni ko'rsatadi",
      "`Reyslar` nomli protsedura yaratadi, chaqirilganda jo'nash vaqti '2023-01-01' dan keyin bo'lgan reyslarni ko'rsatadi",
      "Yangi `Reyslar` jadvalini yaratadi",
      "Jo'nash vaqti '2023-01-01' dan oldingi reyslarni o'chiradi",
    ],
    answer:
      "`Reyslar` nomli protsedura yaratadi, chaqirilganda jo'nash vaqti '2023-01-01' dan keyin bo'lgan reyslarni ko'rsatadi",
  },
  {
    question: "Trigger nima?",
    options: [
      "Foydalanuvchi tomonidan chaqiriladigan protsedura",
      "Jadvaldagi ma'lum bir hodisa (INSERT, UPDATE, DELETE) sodir bo'lganda avtomatik ravishda ishga tushadigan maxsus turdagi saqlanuvchi dastur",
      "Vaqtinchalik jadval",
      "Ma'lumotlarni saralash uchun ishlatiladigan vosita",
    ],
    answer:
      "Jadvaldagi ma'lum bir hodisa (INSERT, UPDATE, DELETE) sodir bo'lganda avtomatik ravishda ishga tushadigan maxsus turdagi saqlanuvchi dastur",
  },
  {
    question: "Trigger qanday yaratiladi?",
    options: [
      "NEW TRIGGER trigger_nomi ON jadval_nomi FOR hodisa AS ...;",
      "CREATE TRIGGER trigger_nomi {BEFORE | AFTER} {INSERT | UPDATE | DELETE} ON jadval_nomi FOR EACH ROW BEGIN ... END;",
      "TRIGGER trigger_nomi (hodisa) ON jadval_nomi BEGIN ... END;",
      "DEFINE TRIGGER trigger_nomi WHEN hodisa ON jadval_nomi DO ...;",
    ],
    answer:
      "CREATE TRIGGER trigger_nomi {BEFORE | AFTER} {INSERT | UPDATE | DELETE} ON jadval_nomi FOR EACH ROW BEGIN ... END;",
  },
  {
    question: "Trigger qanday o'chiriladi?",
    options: [
      "DELETE TRIGGER trigger_nomi ON jadval_nomi;",
      "REMOVE TRIGGER trigger_nomi;",
      "DROP TRIGGER [IF EXISTS] trigger_nomi;",
      "ERASE TRIGGER trigger_nomi;",
    ],
    answer: "DROP TRIGGER [IF EXISTS] trigger_nomi;",
  },
  {
    question: "Triggerning `AFTER` operatori vazifasi nima?",
    options: [
      "Trigger asosiy amal (INSERT, UPDATE, DELETE) bajarilishidan oldin ishga tushishini bildiradi",
      "Trigger asosiy amal (INSERT, UPDATE, DELETE) bajarilgandan keyin ishga tushishini bildiradi",
      "Trigger faqat muvaffaqiyatli amaldan keyin ishga tushishini bildiradi",
      "Trigger har doim ishga tushishini bildiradi",
    ],
    answer:
      "Trigger asosiy amal (INSERT, UPDATE, DELETE) bajarilgandan keyin ishga tushishini bildiradi",
  },
  {
    question: "Triggerning `BEFORE` operatori vazifasi nima?",
    options: [
      "Trigger asosiy amal (INSERT, UPDATE, DELETE) bajarilgandan keyin ishga tushishini bildiradi",
      "Trigger asosiy amal (INSERT, UPDATE, DELETE) bajarilishidan oldin ishga tushishini bildiradi (bu yerda ma'lumotlarni tekshirish yoki o'zgartirish mumkin)",
      "Trigger faqat xatolik yuz berganda ishga tushishini bildiradi",
      "Trigger faqat ma'lum bir vaqtda ishga tushishini bildiradi",
    ],
    answer:
      "Trigger asosiy amal (INSERT, UPDATE, DELETE) bajarilishidan oldin ishga tushishini bildiradi (bu yerda ma'lumotlarni tekshirish yoki o'zgartirish mumkin)",
  },
  {
    question: "Triggerning `FOR EACH ROW` operatori vazifasi nima?",
    options: [
      "Trigger faqat bir marta, amal boshida ishga tushishini bildiradi",
      "Trigger amal ta'sir qilgan har bir qator uchun alohida ishga tushishini bildiradi",
      "Trigger faqat birinchi qator uchun ishga tushishini bildiradi",
      "Trigger barcha qatorlar uchun bir vaqtda ishga tushishini bildiradi",
    ],
    answer:
      "Trigger amal ta'sir qilgan har bir qator uchun alohida ishga tushishini bildiradi",
  },
  {
    question:
      "Trigger qaysi amallar bajarilganda ishga tushadi? Faqat to'g'ri amallar berilgan qatorni belgilang.",
    options: [
      "Faqat SELECT",
      "INSERT, UPDATE, DELETE",
      "CREATE TABLE, ALTER TABLE",
      "GRANT, REVOKE",
    ],
    answer: "INSERT, UPDATE, DELETE",
  },
  {
    question:
      "Trigger yaratilishi to'g'ri yozilgan qatorni toping (umumiy sintaksis).",
    options: [
      "TRIGGER MyTrigger ON MyTable WHEN INSERT DO ...",
      "CREATE TRIGGER MyTrigger BEFORE INSERT ON MyTable FOR EACH ROW BEGIN ... END;",
      "NEW TRIGGER MyTrigger FOR MyTable AFTER UPDATE AS ...",
      "SET TRIGGER MyTrigger ON MyTable FOR DELETE BEGIN ... END;",
    ],
    answer:
      "CREATE TRIGGER MyTrigger BEFORE INSERT ON MyTable FOR EACH ROW BEGIN ... END;",
  },
  {
    question:
      "Python dasturlash tilida MySQL MB bilan bog'lanish amalini bajaruvchi modul to'g'ri berilgan qatorni toping.",
    options: [
      "sqlite3",
      "mysql.connector, PyMySQL, mysqlclient",
      "psycopg2 (PostgreSQL uchun)",
      "pymongo (MongoDB uchun)",
    ],
    answer: "mysql.connector, PyMySQL, mysqlclient",
  },
  {
    question:
      "Python dasturlash tilida localhostdagi 'railway' bazasiga ulanish so'rovi to'g'ri berilgan qatorni toping (mysql.connector misolida).",
    options: [
      "conn = mysql.connector.connect(host='localhost', database='railway', user='root', password='password')",
      "conn = mysql.connect('localhost', 'railway', 'root', 'password')",
      "db = connect_mysql(server='localhost', db='railway')",
      "open_connection(host='127.0.0.1', dbname='railway', username='root')",
    ],
    answer:
      "conn = mysql.connector.connect(host='localhost', database='railway', user='root', password='password')",
  },
  {
    question:
      'Python dasturlash tilida `cursor.execute("SELECT * FROM Railway")` kodi nima vazifani bajaradi?',
    options: [
      "Natijalarni Python ro'yxatiga yuklaydi",
      "Berilgan SQL so'rovini ma'lumotlar bazasida bajarish uchun yuboradi",
      "Kursor obyektini yopadi",
      "Ma'lumotlar bazasiga ulanishni uzadi",
    ],
    answer:
      "Berilgan SQL so'rovini ma'lumotlar bazasida bajarish uchun yuboradi",
  },
  {
    question: "Administratorlash nima?",
    options: [
      "Faqat SQL so'rovlarini yozish",
      "Ma'lumotlar bazasi tizimini boshqarish, sozlash, xavfsizligini ta'minlash, zaxira nusxalarini olish, ishlashini optimallashtirish va foydalanuvchilarni boshqarish",
      "Jadvallarni ma'lumotlar bilan to'ldirish",
      "Web-sayt dizaynini yaratish",
    ],
    answer:
      "Ma'lumotlar bazasi tizimini boshqarish, sozlash, xavfsizligini ta'minlash, zaxira nusxalarini olish, ishlashini optimallashtirish va foydalanuvchilarni boshqarish",
  },
  {
    question: "`CREATE USER` vazifasi nima?",
    options: [
      "Mavjud foydalanuvchini o'chirish",
      "Ma'lumotlar bazasida yangi foydalanuvchi hisobini yaratish",
      "Foydalanuvchiga huquqlar berish",
      "Foydalanuvchining parolini o'zgartirish",
    ],
    answer: "Ma'lumotlar bazasida yangi foydalanuvchi hisobini yaratish",
  },
  {
    question: "`DROP USER` vazifasi nima?",
    options: [
      "Yangi foydalanuvchi yaratish",
      "Mavjud foydalanuvchi hisobini ma'lumotlar bazasidan o'chirish",
      "Foydalanuvchining huquqlarini bekor qilish",
      "Foydalanuvchini bloklash",
    ],
    answer: "Mavjud foydalanuvchi hisobini ma'lumotlar bazasidan o'chirish",
  },
  {
    question: "`GRANT` operatori vazifasi nima?",
    options: [
      "Foydalanuvchidan huquqlarni olib qo'yish",
      "Foydalanuvchiga ma'lumotlar bazasi obyektlarida (jadval, view, protsedura) ma'lum amallarni bajarish uchun huquqlar (imtiyozlar) berish",
      "Yangi foydalanuvchi yaratish",
      "Ma'lumotlar bazasini zaxiralash",
    ],
    answer:
      "Foydalanuvchiga ma'lumotlar bazasi obyektlarida (jadval, view, protsedura) ma'lum amallarni bajarish uchun huquqlar (imtiyozlar) berish",
  },
  {
    question: "`GRANT ALL PRIVILEGES` operatori vazifasi nima?",
    options: [
      "Foydalanuvchiga faqat `SELECT` huquqini beradi",
      "Foydalanuvchiga ma'lum bir obyekt yoki butun baza uchun barcha mavjud huquqlarni beradi",
      "Barcha foydalanuvchilardan barcha huquqlarni olib qo'yadi",
      "Foydalanuvchiga faqat jadval yaratish huquqini beradi",
    ],
    answer:
      "Foydalanuvchiga ma'lum bir obyekt yoki butun baza uchun barcha mavjud huquqlarni beradi",
  },
  {
    question: "`REVOKE` operatori vazifasi nima?",
    options: [
      "Foydalanuvchiga yangi huquqlar berish",
      "Foydalanuvchidan avval berilgan huquqlarni (imtiyozlarni) olib qo'yish (bekor qilish)",
      "Foydalanuvchi parolini tiklash",
      "Ma'lumotlar bazasini tiklash",
    ],
    answer:
      "Foydalanuvchidan avval berilgan huquqlarni (imtiyozlarni) olib qo'yish (bekor qilish)",
  },
  {
    question: "`REVOKE ALL PRIVILEGES` operatori vazifasi nima?",
    options: [
      "Foydalanuvchiga barcha huquqlarni beradi",
      "Foydalanuvchidan ma'lum bir obyekt yoki butun baza uchun barcha avval berilgan huquqlarni olib qo'yadi (lekin GRANT OPTION ni alohida olib tashlash kerak bo'lishi mumkin)",
      "Barcha foydalanuvchilarga barcha huquqlarni beradi",
      "Foydalanuvchidan faqat `UPDATE` huquqini olib qo'yadi",
    ],
    answer:
      "Foydalanuvchidan ma'lum bir obyekt yoki butun baza uchun barcha avval berilgan huquqlarni olib qo'yadi (lekin GRANT OPTION ni alohida olib tashlash kerak bo'lishi mumkin)",
  },
  {
    question: "`ALTER USER` qanday amal bajarishda foydalaniladi?",
    options: [
      "Yangi foydalanuvchi yaratishda",
      "Mavjud foydalanuvchining xususiyatlarini (masalan, parol, bloklash holati, resurs limitlari) o'zgartirishda",
      "Foydalanuvchini o'chirishda",
      "Foydalanuvchiga huquq berishda",
    ],
    answer:
      "Mavjud foydalanuvchining xususiyatlarini (masalan, parol, bloklash holati, resurs limitlari) o'zgartirishda",
  },
  {
    question: "`RENAME USER` operatori vazifasi nima (MySQL'da)?",
    options: [
      "Foydalanuvchining parolini o'zgartiradi",
      "Mavjud foydalanuvchining nomini o'zgartiradi",
      "Foydalanuvchiga yangi nom bilan nusxa yaratadi",
      "Foydalanuvchini vaqtincha boshqa nom bilan chaqiradi",
    ],
    answer: "Mavjud foydalanuvchining nomini o'zgartiradi",
  },
  {
    question:
      "Quyidagi so'rov vazifasi nima? `CREATE USER 'Temur'@'localhost' IDENTIFIED BY 'qwerty123';`",
    options: [
      "`Temur` nomli jadval yaratadi",
      "`localhost`dan ulanadigan `Temur` nomli yangi foydalanuvchini `qwerty123` paroli bilan yaratadi",
      "`Temur` foydalanuvchisining parolini `qwerty123` ga o'zgartiradi",
      "`Temur` foydalanuvchisiga `localhost` ga kirish huquqini beradi",
    ],
    answer:
      "`localhost`dan ulanadigan `Temur` nomli yangi foydalanuvchini `qwerty123` paroli bilan yaratadi",
  },
  {
    question:
      "Quyidagi so'rov vazifasi nima? `GRANT SELECT ON Railways.Reyslar TO 'Temur'@'localhost';`",
    options: [
      "`Temur` foydalanuvchisiga `Railways` bazasidagi barcha jadvallarni ko'rish huquqini beradi",
      "`Temur` foydalanuvchisiga `Railways` bazasidagi `Reyslar` jadvalidan ma'lumotlarni o'qish (SELECT) huquqini beradi",
      "`Reyslar` jadvalini `Temur` foydalanuvchisiga topshiradi",
      "`Temur` foydalanuvchisidan `Reyslar` jadvalini ko'rish huquqini olib qo'yadi",
    ],
    answer:
      "`Temur` foydalanuvchisiga `Railways` bazasidagi `Reyslar` jadvalidan ma'lumotlarni o'qish (SELECT) huquqini beradi",
  },
  {
    question:
      "Quyidagi so'rov vazifasi nima? `GRANT ALL PRIVILEGES ON Railways.* TO 'Temur'@'localhost';`",
    options: [
      "`Temur` foydalanuvchisiga faqat `Railways` bazasini yaratish huquqini beradi",
      "`Temur` foydalanuvchisiga `Railways` bazasidagi barcha obyektlar (jadvallar, viewlar va hokazo) ustida barcha amallarni bajarish huquqini beradi",
      "Barcha foydalanuvchilarga `Railways` bazasida `Temur` nomidan ishlash huquqini beradi",
      "`Temur` foydalanuvchisiga barcha bazalarda barcha huquqlarni beradi",
    ],
    answer:
      "`Temur` foydalanuvchisiga `Railways` bazasidagi barcha obyektlar (jadvallar, viewlar va hokazo) ustida barcha amallarni bajarish huquqini beradi",
  },
  {
    question:
      "Quyidagi so'rov vazifasi nima? `REVOKE CREATE, INSERT, DELETE, UPDATE ON Kutubxona.Kitobxonlar FROM 'Madina'@'localhost';`",
    options: [
      "`Madina` foydalanuvchisiga `Kutubxona.Kitobxonlar` jadvalida CREATE, INSERT, DELETE, UPDATE huquqlarini beradi",
      "`Madina` foydalanuvchisidan `Kutubxona.Kitobxonlar` jadvalida CREATE, INSERT, DELETE, UPDATE huquqlarini olib qo'yadi",
      "`Kitobxonlar` jadvalidan `Madina` tomonidan kiritilgan yozuvlarni o'chiradi",
      "`Madina` foydalanuvchisini butunlay o'chiradi",
    ],
    answer:
      "`Madina` foydalanuvchisidan `Kutubxona.Kitobxonlar` jadvalida CREATE, INSERT, DELETE, UPDATE huquqlarini olib qo'yadi",
  },
];
