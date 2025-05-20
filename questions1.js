const questionsSet1 = [
    {
        question: "SQL ichida ma'lumotlar qanday tarzda saqlanadi?",
        options: [
            "Faqat matnli fayllarda",
            "Jadvallar ko'rinishida",
            "Obyektlar ro'yxati sifatida",
            "XML dokumentlarda"
        ],
        answer: "Jadvallar ko'rinishida"
    },
    {
        question: " MySQL uchun standart foydalanuvchi nomi nima?",
        options: [
            "admin",
            "user",
            "root",
            "mysql_user"
        ],
        answer: "root (odatda lokal o'rnatishlarda standart foydalanuvchi)"
    },
    {
        question: " MySQL da jadvalni o'chirish sintaksisi qanday?",
        options: [
            "DELETE TABLE jadval_nomi;",
            "REMOVE TABLE jadval_nomi;",
            "DROP TABLE jadval_nomi;",
            "ERASE TABLE jadval_nomi;"
        ],
        answer: "DROP TABLE jadval_nomi;"
    },
    {
        question: " SQL da jadvallarni yaratish sintaksisi qanday?",
        options: [
            "MAKE TABLE jadval_nomi (...);",
            "CREATE TABLE jadval_nomi (...);",
            "NEW TABLE jadval_nomi (...);",
            "DEFINE TABLE jadval_nomi (...);"
        ],
        answer: "CREATE TABLE jadval_nomi (...);"
    },
    {
        question: " SQL nimani anglatadi?",
        options: [
            "Simple Query Language",
            "Structured Question Language",
            "System Query Logic",
            "Structured Query Language"
        ],
        answer: "Structured Query Language"
    },
    {
        question: " MySQL da yangi ma'lumotlar bazasini yaratish sintaksisi qanday?",
        options: [
            "NEW DATABASE baza_nomi;",
            "CREATE DATABASE baza_nomi;",
            "MAKE DATABASE baza_nomi;",
            "INIT DATABASE baza_nomi;"
        ],
        answer: "CREATE DATABASE baza_nomi;"
    },
    {
        question: " MySQL da ma'lumotlar bazasini o'chirish sintaksisi qanday?",
        options: [
            "DELETE DATABASE baza_nomi;",
            "REMOVE DATABASE baza_nomi;",
            "DROP DATABASE baza_nomi;",
            "ERASE DATABASE baza_nomi;"
        ],
        answer: "DROP DATABASE baza_nomi;"
    },
    {
        question: " Ham vaqt ham sanani saqlash uchun qanday ma'lumot turi ishlatiladi?",
        options: [
            "DATE",
            "TIME",
            "DATETIME",
            "YEARONLY"
        ],
        answer: "DATETIME (TIMESTAMP ham shu maqsadda ishlatilishi mumkin, lekin u vaqt mintaqasi bilan bog'liq xususiyatlarga ega)"
    },
    {
        question: "Agar siz 1 dan 10 gacha bo'lgan sonlarni saqlamoqchi bo'lsangiz, qanday ma'lumot turini tanlasangiz eng optimal bo'ladi?",
        options: [
            "INT",
            "BIGINT",
            "TINYINT",
            "VARCHAR(2)"
        ],
        answer: "TINYINT (eng kam joy egallaydi, -128 dan 127 gacha yoki belgizis bo'lsa 0 dan 255 gacha qiymatlarni saqlaydi)"
    },
    {
        question: "Hisob kitob muhim bo'lganda (masalan pul birliklari) qanday ma'lumot turi aniqlik uchun ishlatilishi maslahat beriladi?",
        options: [
            "FLOAT",
            "DOUBLE",
            "DECIMAL",
            "REAL"
        ],
        answer: "DECIMAL (kasr qismida aniqlikni saqlash uchun, FLOAT va DOUBLE yaxlitlashda xatoliklarga olib kelishi mumkin)"
    },
    {
        question: " Jadvalga yangi qator qo'shish uchun MySQL da qanday kalit so'z ishlatiladi?",
        options: [
            "ADD ROW",
            "INSERT INTO",
            "NEW RECORD",
            "PUT DATA"
        ],
        answer: "INSERT INTO"
    },
    {
        question: " Jadvaldagi mavjud ma'lumotlarni o'zgartirish uchun MySQL tilida qanday kalit so'z ishlatiladi?",
        options: [
            "MODIFY",
            "CHANGE",
            "UPDATE",
            "ALTER RECORD"
        ],
        answer: "UPDATE"
    },
    {
        question: " Ma'lumotlar bazasi o'zi nima?",
        options: [
            "Jadvallarni saqlaydigan dasturiy ta'minot",
            "Ma'lumotlarni tezkor qidirish tizimi",
            "Tuzilmaga keltirilgan ma'lumotlarning uyushgan to'plami",
            "Faqat sonli ma'lumotlar uchun mo'ljallangan ombor"
        ],
        answer: "Tuzilmaga keltirilgan ma'lumotlarning uyushgan to'plami"
    },
    {
        question: " Database (ma'lumotlar bazasi) qayerlarda ishlatiladi?",
        options: [
            "Faqat yirik veb-saytlarda",
            "Faqat bank tizimlarida",
            "Deyarli barcha ma'lumot saqlashni talab qiladigan dasturiy ta'minotlarda",
            "Faqat ilmiy tadqiqotlarda"
        ],
        answer: "Deyarli barcha ma'lumot saqlashni talab qiladigan dasturiy ta'minotlarda"
    },
    {
        question: " Database tarkibi odatda nimalardan iborat bo'lishi mumkin?",
        options: [
            "Faqat jadvallardan va ustunlardan",
            "Jadvallar, ko'rinishlar (views), saqlanuvchi protseduralar, funksiyalar va triggerlardan",
            "Faqat matnli fayllar va rasmlardan",
            "Foydalanuvchi interfeyslari va tugmalardan"
        ],
        answer: "Jadvallar, ko'rinishlar (views), saqlanuvchi protseduralar, funksiyalar va triggerlardan"
    },
    {
        question: " Baza va Jadval yaratganda ularga nom berishda qaysi belgidan foydalanish odatda tavsiya etilmaydi (qo'shimcha belgilar bilan o'ralmasa)?",
        options: [
            "Lotin harflari (a-z, A-Z)",
            "Probel (bo'sh joy) va defis (-)",
            "Pastki chiziq (_) va raqamlar (0-9)",
            "MySQL kalit so'zlari (masalan, SELECT, TABLE)"
        ],
        answer: "Probel (bo'sh joy) va defis (-) (agar bunday belgilar ishlatilsa, nomni `` ` `` (backtick) belgisi bilan o'rash kerak bo'ladi)"
    },
    {
        question: " Faqat matnli ma'lumot turlari ko'rsatilgan qatorni tanlang.",
        options: [
            "INT, TEXT, DATE",
            "VARCHAR, CHAR, TEXT, LONGTEXT",
            "FLOAT, TEXT, BOOLEAN",
            "BLOB, TEXT, ENUM, YEAR"
        ],
        answer: "VARCHAR, CHAR, TEXT, LONGTEXT"
    },
    {
        question: " Faqat butun sonli ma'lumot turlari ko'rsatilgan qatorni tanlang.",
        options: [
            "TINYINT, SMALLINT, DECIMAL",
            "INT, BIGINT, FLOAT",
            "INTEGER, MEDIUMINT, DOUBLE PRECISION",
            "TINYINT, SMALLINT, MEDIUMINT, INT, BIGINT"
        ],
        answer: "TINYINT, SMALLINT, MEDIUMINT, INT, BIGINT"
    },
    {
        question: " Faqat haqiqiy (kasr) sonli ma'lumot turlari ko'rsatilgan qatorni tanlang.",
        options: [
            "FLOAT, DOUBLE, INT",
            "DECIMAL, NUMERIC, REAL, DOUBLE PRECISION",
            "VARCHAR, FLOAT, DECIMAL",
            "BIGINT, DOUBLE, BOOLEAN"
        ],
        answer: "DECIMAL, NUMERIC, REAL, DOUBLE PRECISION"
    },
    {
        question: " Faqat sana va/yoki vaqt ma'lumot turlari ko'rsatilgan qatorni tanlang.",
        options: [
            "DATE, TIME, VARCHAR",
            "DATETIME, TIMESTAMP, YEAR, STRING",
            "DATE, DATETIME, TIMESTAMP, TIME, YEAR",
            "TEXT, DATE, INT, PERIOD"
        ],
        answer: "DATE, DATETIME, TIMESTAMP, TIME, YEAR"
    },
    {
        question: " Katta hajmdagi matn (masalan, blog posti yoki maqola)ni saqlash uchun qaysi ma'lumot turi eng mos keladi?",
        options: [
            "VARCHAR(255)",
            "CHAR(1000)",
            "TEXT yoki LONGTEXT",
            "BLOB"
        ],
        answer: "TEXT yoki LONGTEXT (VARCHAR(255) qisqa matnlar uchun, BLOB binar fayllar uchun)"
    },
    {
        question: " Poyezdning kelish va ketish vaqtlarini (faqat soat va minut) saqlash uchun qanday ma'lumot turi maqsadga muvofiq?",
        options: [
            "TIME",
            "VARCHAR(5)",
            "INT",
            "DATE"
        ],
        answer: "TIME"
    },
    {
        question: " Mahsulotlarning narxini (masalan, 12500.50 so'm) aniq saqlash uchun qaysi ma'lumot turi tavsiya etiladi?",
        options: [
            "INT",
            "VARCHAR(20)",
            "DECIMAL(10,2)",
            "FLOAT"
        ],
        answer: "DECIMAL(10,2) (bu yerda 10 - umumiy raqamlar soni, 2 - kasr qismidagi raqamlar soni)"
    },
    {
        question: " Foydalanuvchining 'rozilik berdi' (ha/yo'q) holatini saqlash uchun qaysi ma'lumot turi qulay?",
        options: [
            "VARCHAR(3)",
            "BOOLEAN (yoki TINYINT(1))",
            "INT",
            "CHAR(1)"
        ],
        answer: "BOOLEAN (yoki TINYINT(1)) (MySQL da BOOLEAN aslida TINYINT(1) uchun sinonimdir)"
    },
    {
        question: "Passport seriyasi va raqamini (masalan, 'AB1234567') saqlash uchun qaysi ma'lumot turi mos keladi?",
        options: [
            "NUMERIC",
            "BIGINT",
            "VARCHAR yoki CHAR",
            "TEXT"
        ],
        answer: "VARCHAR yoki CHAR (VARCHAR o'zgaruvchan uzunlik uchun, CHAR qat'iy uzunlik uchun)"
    },
    {
        question: " Mijozlar bilan rejalashtirilgan uchrashuvning aniq sana va vaqtini saqlash uchun qaysi ma'lumot turi ishlatiladi?",
        options: [
            "DATE",
            "INTERVAL",
            "DATETIME yoki TIMESTAMP",
            "VARCHAR(50)"
        ],
        answer: "DATETIME yoki TIMESTAMP (TIMESTAMP vaqt mintaqasi bilan ishlash va avtomatik yangilanishlar uchun qo'shimcha imkoniyatlar beradi)"
    },
    {
        question: " Jadvalga yangi ma'lumot kiritish uchun to'g'ri SQL so'rovini toping:",
        options: [
            "ADD INTO users (name, age) VALUES ('Ali', 25);",
            "INSERT users (name, age) VALUES ('Ali', 25);",
            "INSERT INTO users (name, age) VALUES ('Ali', 25);",
            "PUT INTO users (name, age) VALUES ('Ali', 25);"
        ],
        answer: "INSERT INTO users (name, age) VALUES ('Ali', 25);"
    },
    {
        question: "xodimlar jadvalidagi familiya ustuniga yangi qatorda 'Aminov' qiymatini kiritish so'rovini ko'rsating.",
        options: [
            "INSERT INTO xodimlar (familiya) VALUES ('Aminov');",
            "INSERT xodimlar SET familiya = 'Aminov';",
            "UPDATE xodimlar SET familiya = 'Aminov' WHERE id IS NULL;",
            "ADD TO xodimlar.familiya VALUES ('Aminov');"
        ],
        answer: "INSERT INTO xodimlar (familiya) VALUES ('Aminov');"
    },
    {
        question: " Jadval ustuniga NOT NULL cheklovi qo'yilsa, bu nimani anglatadi?",
        options: [
            "Ustun faqat NULL qiymat qabul qilishi mumkin.",
            "Ustunga qiymat kiritish ixtiyoriy.",
            "Ustunga qiymat kiritish majburiy, u bo'sh (NULL) bo'lishi mumkin emas.",
            "Ustun avtomatik tarzda 0 yoki bo'sh satr bilan to'ldiriladi."
        ],
        answer: "Ustunga qiymat kiritish majburiy, u bo'sh (NULL) bo'lishi mumkin emas."
    },
    {
        question: " Jadval ustuniga DEFAULT qiymat berish nimani anglatadi?",
        options: [
            "Ustun uchun standart qiymatni bekor qiladi.",
            "Agar yangi qator qo'shilayotganda ushbu ustunga qiymat berilmasa, u avtomatik tarzda `DEFAULT`da ko'rsatilgan qiymatni oladi.",
            "Jadvaldagi barcha mavjud qiymatlarni shu `DEFAULT` qiymatga o'zgartiradi.",
            "Ushbu ustunni faqat o'qish uchun (read-only) qiladi."
        ],
        answer: "Agar yangi qator qo'shilayotganda ushbu ustunga qiymat berilmasa, u avtomatik tarzda `DEFAULT`da ko'rsatilgan qiymatni oladi."
    },
    {
        question: " CRUD qisqartmasi ma'lumotlar bazasi operatsiyalarida nimani anglatadi?",
        options: [
            "Copy, Run, Update, Debug",
            "Create, Read, Update, Delete",
            "Connect, Retrieve, Upload, Deploy",
            "Compile, Reorganize, Understand, Document"
        ],
        answer: "Create, Read, Update, Delete"
    },
    {
        question: " SQLda `CREATE` amali qanday vazifani bajaradi?",
        options: [
            "Mavjud ma'lumotlarni o'qiydi.",
            "Yangi ma'lumotlar bazasi obyektlarini (masalan, jadval, baza, indeks) yaratadi.",
            "Mavjud ma'lumotlarni tahrirlaydi.",
            "Ma'lumotlar bazasi obyektlarini o'chiradi."
        ],
        answer: "Yangi ma'lumotlar bazasi obyektlarini (masalan, jadval, baza, indeks) yaratadi."
    },
    {
        question: " CRUDdagi 'Read' (o'qish) amali SQLda asosan qaysi operator yordamida bajariladi?",
        options: [
            "INSERT",
            "UPDATE",
            "SELECT",
            "DELETE"
        ],
        answer: "SELECT"
    },
    {
        question: " SQLda UPDATE amali qanday vazifani bajaradi?",
        options: [
            "Jadvalga yangi qatorlar qo'shadi.",
            "Jadvaldagi mavjud qatorlardagi ma'lumotlarni o'zgartiradi.",
            "Jadvalning tuzilishini (ustunlarini) o'zgartiradi.",
            "Jadvaldan ma'lumotlarni tanlab oladi."
        ],
        answer: "Jadvaldagi mavjud qatorlardagi ma'lumotlarni o'zgartiradi."
    },
    {
        question: " SQLda DELETE amali qanday vazifani bajaradi?",
        options: [
            "Jadvalni (uning sxemasi bilan birga) butunlay o'chiradi.",
            "Jadvaldagi bir yoki bir nechta qatorlarni (ma'lumotlarni) o'chiradi.",
            "Butun ma'lumotlar bazasini o'chiradi.",
            "Foydalanuvchining bazaga kirish huquqini o'chiradi."
        ],
        answer: "Jadvaldagi bir yoki bir nechta qatorlarni (ma'lumotlarni) o'chiradi. (Jadvalni o'zini o'chirish uchun DROP TABLE ishlatiladi)"
    },
    {
        question: " SELECT operatorining asosiy vazifasi nima?",
        options: [
            "Jadvalga yangi ma'lumotlar kiritish.",
            "Ma'lumotlar bazasidan ma'lumotlarni (qatorlar va ustunlarni) tanlab olish va ko'rsatish.",
            "Jadvaldagi ma'lumotlarni yangilash.",
            "Jadvallarni yoki ma'lumotlar bazalarini yaratish."
        ],
        answer: "Ma'lumotlar bazasidan ma'lumotlarni (qatorlar va ustunlarni) tanlab olish va ko'rsatish."
    },
    {
        question: " UPDATE operatorining asosiy vazifasi nima?",
        options: [
            "Jadvaldan ma'lumotlarni o'qish.",
            "Jadvalga yangi yozuvlar (qatorlar) qo'shish.",
            "Jadvaldagi mavjud yozuvlar (qatorlar)dagi bir yoki bir nechta ustun qiymatlarini o'zgartirish.",
            "Jadvalni yoki ma'lumotlar bazasini butunlay o'chirish."
        ],
        answer: "Jadvaldagi mavjud yozuvlar (qatorlar)dagi bir yoki bir nechta ustun qiymatlarini o'zgartirish."
    },
    {
        question: " INSERT INTO operatorining asosiy vazifasi nima?",
        options: [
            "Jadvalga bir yoki bir nechta yangi qator (yozuv) qo'shish.",
            "Jadvaldagi mavjud qatorlarni yangilash.",
            "Ma'lumotlarni ma'lum bir shart asosida filtrlash.",
            "Ikki yoki undan ortiq jadvallarni birlashtirish."
        ],
        answer: "Jadvalga bir yoki bir nechta yangi qator (yozuv) qo'shish."
    },
    {
        question: " DELETE FROM operatorining asosiy vazifasi nima?",
        options: [
            "Jadvalning sxemasini (tuzilishini) o'chirish.",
            "Jadvaldan shartga mos keladigan bir yoki bir nechta qatorni (yozuvni) o'chirish.",
            "Ma'lumotlar bazasidagi barcha jadvallarni o'chirish.",
            "Foydalanuvchi huquqlarini va sozlamalarini o'chirish."
        ],
        answer: "Jadvaldan shartga mos keladigan bir yoki bir nechta qatorni (yozuvni) o'chirish. (Agar WHERE sharti bo'lmasa, jadvaldagi BARCHA qatorlar o'chiriladi)"
    },
    {
        question: " SELECT * FROM mahsulotlar; so'rovi qanday natija beradi?",
        options: [
            "mahsulotlar jadvalidagi faqat birinchi ustunni ko'rsatadi.",
            "mahsulotlar jadvalidagi barcha ustunlar bo'yicha barcha qatorlarni ko'rsatadi.",
            "mahsulotlar nomli yangi bo'sh jadval yaratadi.",
            "mahsulotlar jadvalidan '*' belgisi bor yozuvlarni qidiradi."
        ],
        answer: "mahsulotlar jadvalidagi barcha ustunlar bo'yicha barcha qatorlarni ko'rsatadi."
    },
    {
        question: " SELECT uchish_vaqti, joy_nomi FROM samolyotlar; so'rovi qanday natija beradi?",
        options: [
            "samolyotlar jadvalidagi barcha ma'lumotlarni ko'rsatadi.",
            "samolyotlar jadvalidan faqat uchish_vaqti va joy_nomi ustunlaridagi ma'lumotlarni barcha qatorlar uchun ko'rsatadi.",
            "samolyotlar jadvaliga uchish_vaqti va joy_nomi nomli yangi ustunlar qo'shadi.",
            "uchish_vaqti va joy_nomi nomli yangi jadvallar yaratadi."
        ],
        answer: "samolyotlar jadvalidan faqat uchish_vaqti va joy_nomi ustunlaridagi ma'lumotlarni barcha qatorlar uchun ko'rsatadi."
    },
    {
        question: " WHERE bandining (clause) SQL so'rovlaridagi asosiy vazifasi nima?",
        options: [
            "Natijalarni ma'lum bir ustun bo'yicha tartiblash (saralash).",
            "Natijalarni bir xil qiymatlarga ega guruhlarga ajratish.",
            "So'rov natijalarini ma'lum bir shart(lar)ga mos keladigan qatorlar bilan cheklash (filtrlash).",
            "Bir nechta jadvallarni bir-biriga bog'lash (join qilish)."
        ],
        answer: "So'rov natijalarini ma'lum bir shart(lar)ga mos keladigan qatorlar bilan cheklash (filtrlash)."
    },
    {
        question: " SQLda qiymatlarning teng emasligini tekshirish uchun qaysi operator(lar) ishlatiladi?",
        options: [
            "Tenglik uchun =",
            "Faqat !=",
            "Faqat <>",
            "Ham !=, ham <>"
        ],
        answer: "Ham !=, ham <> (ikkalasi ham SQL standartida 'teng emas' ma'nosini bildiradi)"
    },
    {
        question: " SELECT * FROM testlar WHERE t_javob = 'togri'; so'rovi qanday vazifani bajaradi?",
        options: [
            "testlar jadvalidagi barcha qatorlarni ko'rsatadi.",
            "testlar jadvalidagi t_javob ustunining qiymati 'togri' satriga teng bo'lgan barcha qatorlarni ko'rsatadi.",
            "testlar jadvalidagi barcha t_javob ustuni qiymatlarini 'togri'ga o'zgartiradi.",
            "t_javob nomli ustunni yaratadi va unga 'togri' qiymatini beradi."
        ],
        answer: "testlar jadvalidagi t_javob ustunining qiymati 'togri' satriga teng bo'lgan barcha qatorlarni ko'rsatadi."
    },
    {
        question: " Quyidagi so'rovda xatolik bormi (agar javoblar ham ustun nomi bo'lsa)? SELECT javoblar FROM testlar WHERE t_javob = javoblar;",
        options: [
            "Ha, WHERE bandida bir xil nomdagi o'zgaruvchi ishlatilgan.",
            "Yo'q, bu so'rov t_javob ustuni javoblar ustuniga teng bo'lgan qatorlardan javoblar ustunini chiqaradi.",
            "Ha, SELECT qismida faqat bitta ustun ko'rsatilishi kerak.",
            "Yo'q, lekin bu t_javob ustunidagi barcha qiymatlarni javoblar ustuniga ko'chiradi."
        ],
        answer: "Yo'q, bu so'rov t_javob ustuni javoblar ustuniga teng bo'lgan qatorlardan javoblar ustunini chiqaradi. (Bu yerda `javoblar` WHERE bandida ustun nomi sifatida, SELECT qismida esa chiqariladigan ustun nomi sifatida qatnashyapti)."
    },
    {
        question: " AND mantiqiy operatori WHERE bandida qanday ishlaydi?",
        options: [
            "Berilgan shartlardan kamida bittasi rost (TRUE) bo'lsa, umumiy shartni rost deb hisoblaydi.",
            "Berilgan barcha shartlar bir vaqtning o'zida rost (TRUE) bo'lsa, umumiy shartni rost deb hisoblaydi.",
            "Shartning mantiqiy qiymatini teskarisiga o'zgartiradi (TRUE ni FALSE ga, FALSE ni TRUE ga).",
            "Faqat ikkita shartni solishtirish uchun ishlatiladi."
        ],
        answer: "Berilgan barcha shartlar bir vaqtning o'zida rost (TRUE) bo'lsa, umumiy shartni rost deb hisoblaydi."
    },
    {
        question: " OR mantiqiy operatori WHERE bandida qanday ishlaydi?",
        options: [
            "Berilgan barcha shartlar bir vaqtning o'zida rost (TRUE) bo'lishi kerak.",
            "Berilgan shartlardan kamida bittasi rost (TRUE) bo'lsa, umumiy shartni rost deb hisoblaydi.",
            "Shartning natijasini inkor qiladi.",
            "Shartlarni faqat ketma-ket tartibda tekshiradi."
        ],
        answer: "Berilgan shartlardan kamida bittasi rost (TRUE) bo'lsa, umumiy shartni rost deb hisoblaydi."
    },
    {
        question: " NOT mantiqiy operatori qanday vazifani bajaradi?",
        options: [
            "Ikki yoki undan ortiq shartlarni AND yordamida birlashtiradi.",
            "Bir nechta shartlardan birini tanlash imkonini beradi (OR kabi).",
            "O'zidan keyin kelgan shartning mantiqiy qiymatini teskarisiga o'zgartiradi (TRUE ni FALSE ga, FALSE ni TRUE ga).",
            "NULL qiymatlarni standart qiymat bilan almashtiradi."
        ],
        answer: "O'zidan keyin kelgan shartning mantiqiy qiymatini teskarisiga o'zgartiradi (TRUE ni FALSE ga, FALSE ni TRUE ga)."
    },
    {
        question: " FALSE AND TRUE mantiqiy amali qanday natija qaytaradi?",
        options: [
            "TRUE",
            "FALSE",
            "NULL",
            "ERROR"
        ],
        answer: "FALSE"
    },
    {
        question: " TRUE OR FALSE mantiqiy amali qanday natija qaytaradi?",
        options: [
            "TRUE",
            "FALSE",
            "NULL",
            "ERROR"
        ],
        answer: "TRUE"
    }
];

// Misol uchun, birinchi savolni va uning javobini konsolga chiqarish:
// console.log("Savol:", questionsSet1[0].question);
// console.log("Javob:", questionsSet1[0].answer);