const questionsSet2 = [
  {
    question: "`NOT TRUE` amalidan qanday natija qaytadi?",
    options: ["TRUE", "FALSE", "NULL", "ERROR"],
    answer: "FALSE",
  },
  {
    question:
      "Ushbu so'rov qanday vazifa bajaradi: `SELECT * FROM uqituvchilar WHERE lavozimi='assistant o''qituvchi' AND oyligi>=5000000;`?",
    options: [
      "Barcha assistant o'qituvchilarni yoki oyligi 5 mln dan yuqori bo'lganlarni ko'rsatadi",
      "Lavozimi 'assistant o''qituvchi' bo'lgan VA oyligi 5 mln yoki undan yuqori bo'lgan o'qituvchilarni ko'rsatadi",
      "Faqat lavozimi 'assistant o''qituvchi' bo'lganlarni ko'rsatadi, oyligiga qaramaydi",
      "Faqat oyligi 5 mln dan yuqori bo'lgan o'qituvchilarni ko'rsatadi, lavozimiga qaramaydi",
    ],
    answer:
      "Lavozimi 'assistant o''qituvchi' bo'lgan VA oyligi 5 mln yoki undan yuqori bo'lgan o'qituvchilarni ko'rsatadi (bu yerda `o''qituvchi` satr ichidagi bitta tirnoqni ('') ifodalash uchun ishlatilgan)",
  },
  {
    question:
      "`IS` kalit so'zi nima vazifani bajaradi (odatda `NULL` bilan ishlatiladi)?",
    options: [
      "Qiymatlar tengligini tekshiradi (= kabi)",
      "Qiymat `NULL` yoki `NOT NULL` ekanligini tekshirish uchun ishlatiladi",
      "Matnli qidiruv uchun shablon belgilaydi",
      "Bir nechta qiymatlardan biriga mos kelishini tekshiradi",
    ],
    answer:
      "Qiymat `NULL` yoki `NOT NULL` ekanligini tekshirish uchun ishlatiladi (masalan, `WHERE ustun_nomi IS NULL`)",
  },
  {
    question: "`BETWEEN` operatori vazifasi nima?",
    options: [
      "Ikki qiymat orasidagi (shu jumladan chegaralar) qiymatlarni tanlash uchun",
      "Faqat ikkita aniq qiymatni tanlash uchun",
      "Bir qiymatdan katta yoki kichik ekanligini tekshirish uchun",
      "Matn ichidan qismni ajratib olish uchun",
    ],
    answer:
      "Ikki qiymat orasidagi (shu jumladan chegaralar) qiymatlarni tanlash uchun (masalan, `WHERE narx BETWEEN 100 AND 200` 100 va 200 ni ham o'z ichiga oladi)",
  },
  {
    question: "`IN` operatori vazifasi nima?",
    options: [
      "Qiymat ma'lum bir diapazonda ekanligini tekshiradi",
      "Qiymat berilgan ro'yxatdagi qiymatlardan biriga mos kelishini tekshiradi",
      "Matnli shablonga mos kelishini tekshiradi",
      "Natijalarni tartiblaydi",
    ],
    answer:
      "Qiymat berilgan ro'yxatdagi qiymatlardan biriga mos kelishini tekshiradi (masalan, `WHERE shahar IN ('Toshkent', 'Buxoro')`)",
  },
  {
    question: "`LIKE` operatori vazifasi nima?",
    options: [
      "Faqat aniq moslikni tekshiradi",
      "Maxsus belgilar (`%`, `_`) yordamida matnli shablonga mos kelishini tekshiradi",
      "Sonli qiymatlarni taqqoslaydi",
      "Bo'sh (NULL) qiymatlarni tekshiradi",
    ],
    answer:
      "Maxsus belgilar (`%` - istalgan belgilar ketma-ketligi, `_` - bitta belgi) yordamida matnli shablonga mos kelishini tekshiradi",
  },
  {
    question: "`ORDER BY` operatori vazifasi nima?",
    options: [
      "Natijalarni guruhlash",
      "Natijalarni filtrlash",
      "Natijalarni bir yoki bir nechta ustun(lar) bo'yicha tartiblash",
      "Jadvallarni birlashtirish",
    ],
    answer: "Natijalarni bir yoki bir nechta ustun(lar) bo'yicha tartiblash (ASC - o'sish, DESC - kamayish tartibida)",
  },
  {
    question: "`DISTINCT` kalit so'zi nima vazifani bajaradi?",
    options: [
      "Faqat birinchi qatorni qaytaradi",
      "Natijalardan takrorlanuvchi qatorlarni olib tashlab, faqat noyoblarini qoldiradi",
      "Barcha qatorlarni qaytaradi",
      "Natijalarni teskari tartibda saralaydi",
    ],
    answer:
      "Natijalardan takrorlanuvchi qatorlarni olib tashlab, faqat noyoblarini qoldiradi (masalan, `SELECT DISTINCT shahar FROM mijozlar;`)",
  },
  {
    question: "`LIMIT` kalit so'zi nima vazifani bajaradi?",
    options: [
      "Natijalarni ma'lum bir sondan ko'p bo'lmagan miqdorda cheklaydi",
      "Natijalarni ma'lum bir sondan kam bo'lmagan miqdorda cheklaydi",
      "Ustunlar sonini cheklaydi",
      "Jadvallar sonini cheklaydi",
    ],
    answer: "Natijalarni ma'lum bir sondan ko'p bo'lmagan miqdorda cheklaydi (qaytariladigan qatorlar sonini cheklaydi)",
  },
  {
    question:
      "`OFFSET` kalit so'zi nima vazifani bajaradi (odatda `LIMIT` bilan birga)?",
    options: [
      "Qaytariladigan qatorlar sonini belgilaydi",
      "Natijalarni qaytarishni boshlashdan oldin o'tkazib yuboriladigan qatorlar sonini belgilaydi",
      "Ustunning boshlang'ich qiymatini belgilaydi",
      "So'rovning maksimal bajarilish vaqtini belgilaydi",
    ],
    answer:
      "Natijalarni qaytarishni boshlashdan oldin o'tkazib yuboriladigan qatorlar sonini belgilaydi (sahifalash uchun ishlatiladi, masalan `LIMIT 10 OFFSET 20`)",
  },
  {
    question:
      "Uqituvchilar jadvalidan lavozimi assistent yoki stajor bo'lgan o'qituvchilarni tanlash so'rovini ko'rsating.",
    options: [
      "SELECT * FROM uqituvchilar WHERE lavozimi='assistent' OR lavozimi='stajor';",
      "SELECT * FROM uqituvchilar WHERE lavozimi='assistent' AND lavozimi='stajor';",
      "SELECT * FROM uqituvchilar WHERE lavozimi IN ('assistent', 'stajor');",
      "Ikkala A va C variantlari to'g'ri",
    ],
    answer: "Ikkala A va C variantlari to'g'ri (OR bilan ham, IN bilan ham bir xil natijaga erishish mumkin)",
  },
  {
    question:
      "Uqituvchilar jadvalidan yillik_staji 5 yildan 9 yilgacha bo'lgan o'qituvchilar ro'yxatini chiqarish so'rovini ko'rsating.",
    options: [
      "SELECT * FROM uqituvchilar WHERE yillik_staji > 5 AND yillik_staji < 9;", // Bu 5 va 9 ni o'z ichiga olmaydi
      "SELECT * FROM uqituvchilar WHERE yillik_staji BETWEEN 5 AND 9;",
      "SELECT * FROM uqituvchilar WHERE yillik_staji IN (5, 6, 7, 8, 9);",
      "Barcha javoblar to'g'ri",
    ],
    answer: "SELECT * FROM uqituvchilar WHERE yillik_staji BETWEEN 5 AND 9; (`BETWEEN` chegaralarni ham o'z ichiga oladi)",
  },
  {
    question:
      "Uqituvchilar jadvalidan 4 mln dan 7 mln gacha oylik oluvchi o'qituvchilarni ro'yxatini chiqarish so'rovini ko'rsating.",
    options: [
      "SELECT * FROM uqituvchilar WHERE oylik >= 4000000 AND oylik <= 7000000;",
      "SELECT * FROM uqituvchilar WHERE oylik BETWEEN 4000000 AND 7000000;",
      "SELECT * FROM uqituvchilar WHERE oylik IN (4000000 TO 7000000);",
      "Ikkala A va B variantlari to'g'ri",
    ],
    answer: "Ikkala A va B variantlari to'g'ri (`>= AND <=` ham, `BETWEEN` ham bu shartni bajaradi)",
  },
  {
    question:
      "Talabalar jadvalida fio ustunida Alisher ismli talabani tanlash so'rovini yozing (familiyasi va otasining ismi noma'lum).",
    options: [
      "SELECT * FROM talabalar WHERE fio = 'Alisher';",
      "SELECT * FROM talabalar WHERE fio LIKE 'Alisher %';",
      "SELECT * FROM talabalar WHERE fio LIKE '%Alisher%';",
      "SELECT * FROM talabalar WHERE fio CONTAINS 'Alisher';",
    ],
    answer: "SELECT * FROM talabalar WHERE fio LIKE 'Alisher %'; (ism boshida kelishi va undan keyin boshqa belgilar bo'lishi mumkinligini bildiradi)",
  },
  {
    question:
      "`WHERE` bandida `BETWEEN` operatorining ishlatilishi to'g'ri berilgan qatorni toping.",
    options: [
      "WHERE narx BETWEEN 100 OR 200",
      "WHERE narx BETWEEN 100, 200",
      "WHERE narx BETWEEN 100 AND 200",
      "WHERE narx IS BETWEEN 100 AND 200",
    ],
    answer: "WHERE narx BETWEEN 100 AND 200",
  },
  {
    question:
      "`WHERE` bandida `IN` operatorining ishlatilishi to'g'ri berilgan qatorni toping.",
    options: [
      "WHERE shahar IN 'Toshkent', 'Samarqand'",
      "WHERE shahar IN ('Toshkent' AND 'Samarqand')",
      "WHERE shahar IN ('Toshkent', 'Samarqand')",
      "WHERE shahar IS IN ('Toshkent', 'Samarqand')",
    ],
    answer: "WHERE shahar IN ('Toshkent', 'Samarqand')",
  },
  {
    question:
      "`WHERE` bandida `LIKE` operatorining ishlatilishi to'g'ri berilgan qatorni toping (ism 'A' harfi bilan boshlanadiganlarni topish).",
    options: [
      "WHERE ism LIKE 'A%'",
      "WHERE ism LIKE '%A'",
      "WHERE ism LIKE '_A%'",
      "WHERE ism = 'A*'",
    ],
    answer: "WHERE ism LIKE 'A%' (`%` 'A' dan keyin istalgan belgilar kelishi mumkinligini bildiradi)",
  },
  {
    question: "`AS` kalit so'zi vazifasini ko'rsating.",
    options: [
      "Ustun yoki jadvalga vaqtinchalik nom (alias) berish uchun",
      "Shartlarni belgilash uchun",
      "Agregat funksiyalarni chaqirish uchun",
      "Ma'lumot turini o'zgartirish uchun",
    ],
    answer: "Ustun yoki jadvalga vaqtinchalik nom (alias) berish uchun (masalan, `SELECT ism AS FIO FROM talabalar;`)",
  },
  {
    question: "`MIN()` funksiyasi vazifasini ko'rsating.",
    options: [
      "Ustundagi maksimal qiymatni qaytaradi",
      "Ustundagi minimal qiymatni qaytaradi",
      "Ustundagi qiymatlar sonini qaytaradi",
      "Ustundagi o'rtacha qiymatni qaytaradi",
    ],
    answer: "Ustundagi minimal qiymatni qaytaradi",
  },
  {
    question: "`MAX()` funksiyasi vazifasini ko'rsating.",
    options: [
      "Ustundagi minimal qiymatni qaytaradi",
      "Ustundagi o'rtacha qiymatni qaytaradi",
      "Ustundagi maksimal qiymatni qaytaradi",
      "Ustundagi qiymatlar yig'indisini qaytaradi",
    ],
    answer: "Ustundagi maksimal qiymatni qaytaradi",
  },
  {
    question: "`SUM()` funksiyasi vazifasini ko'rsating.",
    options: [
      "Ustundagi qiymatlar sonini qaytaradi",
      "Ustundagi qiymatlar yig'indisini qaytaradi",
      "Ustundagi eng katta qiymatni qaytaradi",
      "Ustundagi qiymatlarni tartiblaydi",
    ],
    answer: "Ustundagi qiymatlar yig'indisini qaytaradi",
  },
  {
    question: "`AVG()` funksiyasi vazifasini ko'rsating.",
    options: [
      "Ustundagi o'rtacha qiymatni qaytaradi",
      "Ustundagi barcha qiymatlarni qaytaradi",
      "Ustundagi minimal qiymatni qaytaradi",
      "Ustundagi qiymatlar sonini qaytaradi",
    ],
    answer: "Ustundagi o'rtacha qiymatni qaytaradi",
  },
  {
    question: "`COUNT()` funksiyasi vazifasini ko'rsating.",
    options: [
      "Ustundagi qiymatlar yig'indisini qaytaradi",
      "Ustundagi o'rtacha qiymatni qaytaradi",
      "Belgilangan shartga mos keladigan qatorlar sonini (yoki ustundagi NULL bo'lmagan qiymatlar sonini) qaytaradi",
      "Ustundagi noyob qiymatlar sonini qaytaradi",
    ],
    answer:
      "Belgilangan shartga mos keladigan qatorlar sonini (`COUNT(*)`) yoki ustundagi NULL bo'lmagan qiymatlar sonini (`COUNT(ustun_nomi)`) qaytaradi",
  },
  {
    question: "`ROUND()` funksiyasi vazifasini ko'rsating.",
    options: [
      "Sonni eng yaqin butun songacha yoki ko'rsatilgan o'nlik xonagacha yaxlitlaydi",
      "Sonning butun qismini ajratadi",
      "Sonning kvadrat ildizini topadi",
      "Sonni modulini topadi",
    ],
    answer:
      "Sonni eng yaqin butun songacha yoki ko'rsatilgan o'nlik xonagacha yaxlitlaydi (masalan, `ROUND(123.456, 2)` natijasi `123.46`)",
  },
  {
    question: "`LENGTH()` (yoki `LEN()`) funksiyasi vazifasini ko'rsating.",
    options: [
      "Matndagi so'zlar sonini qaytaradi",
      "Matnning baytlardagi hajmini qaytaradi",
      "Matndagi belgilar sonini (uzunligini) qaytaradi",
      "Matnni kichik harflarga o'tkazadi",
    ],
    answer: "Matndagi belgilar sonini (uzunligini) qaytaradi (MySQL'da `CHAR_LENGTH()` belgilar sonini, `LENGTH()` baytlar sonini beradi; SQL Server'da `LEN()` ishlatiladi)",
  },
  {
    question: "`LEFT()` funksiyasi vazifasini ko'rsating.",
    options: [
      "Matnning o'ng tomonidan belgilangan sondagi belgilarni qaytaradi",
      "Matnning chap tomonidan belgilangan sondagi belgilarni qaytaradi",
      "Matnni chap tomondan ma'lum belgilar bilan to'ldiradi",
      "Matndagi birinchi so'zni qaytaradi",
    ],
    answer: "Matnning chap tomonidan belgilangan sondagi belgilarni qaytaradi",
  },
  {
    question: "`RIGHT()` funksiyasi vazifasini ko'rsating.",
    options: [
      "Matnning chap tomonidan belgilangan sondagi belgilarni qaytaradi",
      "Matnning o'ng tomonidan belgilangan sondagi belgilarni qaytaradi",
      "Matnni o'ng tomondan ma'lum belgilar bilan to'ldiradi",
      "Matndagi oxirgi so'zni qaytaradi",
    ],
    answer: "Matnning o'ng tomonidan belgilangan sondagi belgilarni qaytaradi",
  },
  {
    question:
      "`SUBSTR()` (yoki `SUBSTRING()`) funksiyasi vazifasini ko'rsating.",
    options: [
      "Matn ichidan boshqa bir matnni qidiradi",
      "Matnning ma'lum bir pozitsiyasidan boshlab belgilangan uzunlikdagi qismni ajratib oladi",
      "Matndagi barcha bo'shliqlarni olib tashlaydi",
      "Matnni teskari tartibda yozadi",
    ],
    answer:
      "Matnning ma'lum bir pozitsiyasidan boshlab belgilangan uzunlikdagi qismni ajratib oladi (pozitsiyalar odatda 1 dan boshlanadi)",
  },
  {
    question: "`UPPER()` funksiyasi vazifasini ko'rsating.",
    options: [
      "Matnni kichik harflarga o'tkazadi",
      "Matnning birinchi harfini katta qiladi",
      "Matnni katta (bosh) harflarga o'tkazadi",
      "Matndagi barcha raqamlarni olib tashlaydi",
    ],
    answer: "Matnni katta (bosh) harflarga o'tkazadi",
  },
  {
    question: "`LOWER()` funksiyasi vazifasini ko'rsating.",
    options: [
      "Matnni katta harflarga o'tkazadi",
      "Matnning oxirgi harfini kichik qiladi",
      "Matnni kichik (oddiy) harflarga o'tkazadi",
      "Matndagi barcha belgilarni olib tashlaydi",
    ],
    answer: "Matnni kichik (oddiy) harflarga o'tkazadi",
  },
  {
    question:
      "`CONCAT()` (yoki `||` operatori ba'zi DB'larda) funksiyasi vazifasini ko'rsating.",
    options: [
      "Ikki matnni taqqoslaydi",
      "Bir nechta matnlarni (satrlarni) birlashtiradi",
      "Matn ichidan qismni qidiradi",
      "Matnni bo'laklarga ajratadi",
    ],
    answer: "Bir nechta matnlarni (satrlarni) birlashtiradi (SQL Server'da `+` operatori ham ishlatiladi)",
  },
  {
    question: "`REPLACE()` funksiyasi vazifasini ko'rsating.",
    options: [
      "Matnning bir qismini boshqa matn bilan almashtiradi",
      "Matnni teskari tartibda yozadi",
      "Matndagi barcha takrorlanuvchi belgilarni olib tashlaydi",
      "Matnni ma'lum bir uzunlikka qisqartiradi",
    ],
    answer: "Matnning bir qismini boshqa matn bilan almashtiradi (matndagi barcha mos keluvchi qismlarni almashtiradi)",
  },
  {
    question: "`POSITION()` (yoki `INSTR()`) funksiyasi vazifasini ko'rsating.",
    options: [
      "Matndagi ma'lum bir belgining necha marta uchrashini qaytaradi",
      "Bir matn ichida boshqa bir matnning (qism satrning) birinchi uchragan o'rnini (pozitsiyasini) qaytaradi",
      "Matnning oxirgi belgisining pozitsiyasini qaytaradi",
      "Matnni belgilangan pozitsiyadan boshlab kesadi",
    ],
    answer:
      "Bir matn ichida boshqa bir matnning (qism satrning) birinchi uchragan o'rnini (pozitsiyasini) qaytaradi (agar topilmasa 0 qaytaradi)",
  },
  {
    question: "`DAY()` funksiyasi vazifasini ko'rsating (sana qiymatidan).",
    options: [
      "Sanadan yilni ajratib oladi",
      "Sanadan oyni ajratib oladi",
      "Sanadan kunni (oy kunini, masalan, 1 dan 31 gacha) ajratib oladi",
      "Sanadan hafta kunini (masalan, Dushanba) ajratib oladi",
    ],
    answer: "Sanadan kunni (oy kunini, masalan, 1 dan 31 gacha) ajratib oladi",
  },
  {
    question: "`MONTH()` funksiyasi vazifasini ko'rsating (sana qiymatidan).",
    options: [
      "Sanadan kunni ajratib oladi",
      "Sanadan yilni ajratib oladi",
      "Sanadan oyni (raqam ko'rinishida, masalan, 1 dan 12 gacha) ajratib oladi",
      "Sanadan oy nomini (masalan, Yanvar) ajratib oladi",
    ],
    answer:
      "Sanadan oyni (raqam ko'rinishida, masalan, 1 dan 12 gacha) ajratib oladi",
  },
  {
    question: "`YEAR()` funksiyasi vazifasini ko'rsating (sana qiymatidan).",
    options: [
      "Sanadan kunni ajratib oladi",
      "Sanadan oyni ajratib oladi",
      "Sanadan yilni (to'rt raqamli) ajratib oladi",
      "Joriy yilni qaytaradi",
    ],
    answer: "Sanadan yilni (to'rt raqamli) ajratib oladi",
  },
  {
    question: "`GROUP BY` operatori vazifasini ko'rsating.",
    options: [
      "Natijalarni bir yoki bir nechta ustun qiymatlari bo'yicha guruhlaydi, odatda agregat funksiyalar bilan ishlatiladi",
      "Natijalarni tartiblaydi",
      "Natijalarni filtrlaydi",
      "Jadvallarni birlashtiradi",
    ],
    answer:
      "Natijalarni bir yoki bir nechta ustun qiymatlari bo'yicha guruhlaydi, odatda agregat funksiyalar (`SUM()`, `AVG()`, `COUNT()` va hokazo) bilan ishlatiladi",
  },
  {
    question: "`HAVING` operatori vazifasini ko'rsating.",
    options: [
      "`WHERE` kabi ishlaydi, lekin faqat guruhlanmagan ma'lumotlar uchun",
      "`GROUP BY` bilan guruhlangan natijalarga shart qo'yish uchun ishlatiladi (agregat funksiyalarga shart qo'yish mumkin)",
      "Natijalarni faqat ko'rsatish uchun ishlatiladi, filtrlamaydi",
      "Har doim `SELECT`dan oldin yoziladi",
    ],
    answer:
      "`GROUP BY` bilan guruhlangan natijalarga shart qo'yish uchun ishlatiladi (agregat funksiyalarga shart qo'yish mumkin, masalan `HAVING COUNT(*) > 5`)",
  },
  {
    question:
      "Jadvaldagi ma'lumotlarni yangilash so'rovi to'g'ri berilgan qatorni toping (masalan, id=5 bo'lgan yozuvning narxini 100 qilish).",
    options: [
      "INSERT INTO mahsulotlar SET narx=100 WHERE id=5;",
      "UPDATE mahsulotlar SET narx=100 WHERE id=5;",
      "MODIFY mahsulotlar SET narx=100 WHERE id=5;",
      "CHANGE mahsulotlar (narx=100) WHERE id=5;",
    ],
    answer: "UPDATE mahsulotlar SET narx=100 WHERE id=5;",
  },
  {
    question:
      "Jadvaldan ma'lumot o'chirish so'rovi to'g'ri berilgan qatorni toping (masalan, id=10 bo'lgan yozuvni o'chirish).",
    options: [
      "REMOVE FROM mahsulotlar WHERE id=10;",
      "DROP FROM mahsulotlar WHERE id=10;",
      "DELETE FROM mahsulotlar WHERE id=10;",
      "ERASE FROM mahsulotlar WHERE id=10;",
    ],
    answer: "DELETE FROM mahsulotlar WHERE id=10;",
  },
  {
    question:
      "Jadvaldan ma'lumotlarni tanlash so'rovi to'g'ri berilgan qatorni toping (barcha ustunlarni tanlash).",
    options: [
      "GET * FROM mahsulotlar;",
      "FETCH * FROM mahsulotlar;",
      "SELECT * FROM mahsulotlar;",
      "READ * FROM mahsulotlar;",
    ],
    answer: "SELECT * FROM mahsulotlar;",
  },
  {
    question:
      "`GROUP BY`, `WHERE` va `HAVING` operatorlarining SQL so'rovidagi ishlatilish ketma-ketligi to'g'ri berilgan qatorni toping (agar hammasi ishlatilsa).",
    options: [
      "SELECT ... FROM ... GROUP BY ... WHERE ... HAVING ...",
      "SELECT ... FROM ... WHERE ... HAVING ... GROUP BY ...",
      "SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ...",
      "SELECT ... FROM ... HAVING ... WHERE ... GROUP BY ...",
    ],
    answer: "SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... (keyin ORDER BY va LIMIT kelishi mumkin)",
  },
  {
    question:
      "`SELECT SUM(yillik_staji) FROM uqituvchilar;` so'rovining vazifasi qanday?",
    options: [
      "Uqituvchilarning o'rtacha yillik stajini hisoblaydi",
      "Uqituvchilarning umumiy sonini hisoblaydi",
      "Uqituvchilarning barcha yillik stajlari yig'indisini hisoblaydi",
      "Eng katta yillik stajga ega o'qituvchini topadi",
    ],
    answer: "Uqituvchilarning barcha yillik stajlari yig'indisini hisoblaydi",
  },
  {
    question:
      "`SELECT 35 % 8 AS result;` so'rovining natijasini ko'rsating (`%` - qoldiq operatori).",
    options: ["4", "3", "5", "4.375"],
    answer: "3 (35 ni 8 ga bo'lganda qoldiq 3 ga teng)",
  },
  {
    question:
      "`SELECT RIGHT(\"Hemis\",2) AS result;` so'rovining natijasini ko'rsating.",
    options: ["He", "is", "em", "Hemis"],
    answer: "is",
  },
  {
    question:
      "`SELECT SUBSTR(\"Hemis\",1,2) AS result;` so'rovining natijasini ko'rsating (birinchi belgi 1-pozitsiyada).",
    options: ["He", "em", "is", "H"],
    answer: "He (birinchi belgidan boshlab 2 ta belgini oladi)",
  },
  {
    question: "`WHERE` va `HAVING` operatorlarining farqi nimada?",
    options: [
      "Farqi yo'q, bir xil vazifani bajaradi",
      "`WHERE` qatorlarni guruhlashdan oldin filtrlaydi, `HAVING` esa guruhlangan natijalarni filtrlaydi",
      "`HAVING` faqat sonli ustunlar bilan ishlaydi, `WHERE` esa barcha turdagi ustunlar bilan",
      "`WHERE` faqat `SELECT` bilan, `HAVING` esa `UPDATE` bilan ishlatiladi",
    ],
    answer:
      "`WHERE` qatorlarni guruhlashdan oldin (individual qatorlarga) filtrlaydi, `HAVING` esa guruhlangan natijalarga (agregat funksiya natijalariga) filtrlaydi",
  },
  {
    question:
      "`SELECT AVG(yillik_staji) FROM uqituvchilar GROUP BY yillik_staji;` so'rovining vazifasi qanday?",
    options: [
      "Har bir yillik staj uchun o'qituvchilar sonini hisoblaydi",
      "Har bir noyob yillik staj qiymatini o'zi (o'rtachasi) sifatida qaytaradi, bu unchalik ma'noli emas",
      "Barcha o'qituvchilarning umumiy o'rtacha yillik stajini hisoblaydi",
      "Eng ko'p uchraydigan yillik stajni topadi",
    ],
    answer:
      "Har bir noyob yillik staj qiymatini o'zi (o'rtachasi) sifatida qaytaradi, bu unchalik ma'noli emas (chunki har bir guruhda yillik_staji bir xil bo'ladi, uning o'rtachasi ham o'sha qiymatga teng)",
  },
  {
    question:
      "Talabalar jadvalidan 911-19 yoki 912-19 guruhidagi talabalarni o'chirish so'rovini toping.",
    options: [
      "DELETE FROM talabalar WHERE guruh = '911-19' AND guruh = '912-19';",
      "DELETE FROM talabalar WHERE guruh IN ('911-19', '912-19');",
      "REMOVE FROM talabalar WHERE guruh = '911-19' OR guruh = '912-19';",
      "DELETE talabalar WHERE guruh LIKE '91%-19';",
    ],
    answer: "DELETE FROM talabalar WHERE guruh IN ('911-19', '912-19'); (yoki `WHERE guruh = '911-19' OR guruh = '912-19';` ham to'g'ri bo'lardi)",
  },
  {
    question:
      "Uqituvchilar jadvalidan oyligi 5 mln dan kam bo'lgan uqituvchilarni oyligini 5 mln ga o'zgartirish so'rovini ko'rsating.",
    options: [
      "UPDATE uqituvchilar SET oyligi = 5000000 WHERE oyligi < 5000000;",
      "CHANGE uqituvchilar oyligi TO 5000000 WHERE oyligi < 5000000;",
      "INSERT INTO uqituvchilar (oyligi) VALUES (5000000) WHERE oyligi < 5000000;",
      "UPDATE uqituvchilar oyligi = 5000000 IF oyligi < 5000000;",
    ],
    answer: "UPDATE uqituvchilar SET oyligi = 5000000 WHERE oyligi < 5000000;",
  },
];

// Misol uchun, birinchi savolni va uning javobini konsolga chiqarish:
// console.log("Savol:", questionsSet2[0].question);
// console.log("Javob:", questionsSet2[0].answer);