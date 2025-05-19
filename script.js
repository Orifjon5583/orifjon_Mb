console.log("4 Bo'limli script.js yuklandi (Bloklash olib tashlandi)");

const sectionSelectionScreen = document.getElementById(
  "section-selection-screen"
);
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const sectionButtons = document.querySelectorAll(".section-btn");
const restartBtn = document.getElementById("restart-btn");
const backToSectionsBtn = document.getElementById("back-to-sections-btn");

const questionNumberEl = document.getElementById("question-number");
const scoreEl = document.getElementById("score");
const questionTextEl = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackTextEl = document.getElementById("feedback-text");

const finalScoreEl = document.getElementById("final-score");
const resultMessageEl = document.getElementById("result-message");

console.log("HTML elementlari:", {
  sectionSelectionScreen,
  quizScreen,
  resultScreen,
  sectionButtons,
  restartBtn,
  backToSectionsBtn,
  questionNumberEl,
  scoreEl, // Bularni ham qo'shdim
});

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
const ANSWER_DELAY = 1500;

console.log("Savol to'plamlari yuklanishidan oldin (globalda mavjudligi):", {
  qs1_type: typeof questionsSet1,
  qs1_len:
    typeof questionsSet1 !== "undefined" && Array.isArray(questionsSet1)
      ? questionsSet1.length
      : "topilmadi yoki massiv emas",
  qs2_type: typeof questionsSet2,
  qs2_len:
    typeof questionsSet2 !== "undefined" && Array.isArray(questionsSet2)
      ? questionsSet2.length
      : "topilmadi yoki massiv emas",
  qs3_type: typeof questionsSet3,
  qs3_len:
    typeof questionsSet3 !== "undefined" && Array.isArray(questionsSet3)
      ? questionsSet3.length
      : "topilmadi yoki massiv emas",
  qs4_type: typeof questionsSet4,
  qs4_len:
    typeof questionsSet4 !== "undefined" && Array.isArray(questionsSet4)
      ? questionsSet4.length
      : "topilmadi yoki massiv emas",
});

const allQuestionSets = [
  typeof questionsSet1 !== "undefined" && Array.isArray(questionsSet1)
    ? questionsSet1
    : [],
  typeof questionsSet2 !== "undefined" && Array.isArray(questionsSet2)
    ? questionsSet2
    : [],
  typeof questionsSet3 !== "undefined" && Array.isArray(questionsSet3)
    ? questionsSet3
    : [],
  typeof questionsSet4 !== "undefined" && Array.isArray(questionsSet4)
    ? questionsSet4
    : [],
];
console.log(
  "allQuestionSets tuzildi:",
  allQuestionSets.map((set) => `Massiv(${set.length})`)
); // Har bir to'plamdagi savollar sonini ko'rsatadi

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuizForSection(sectionIndex) {
  console.log(`startQuizForSection chaqirildi, sectionIndex: ${sectionIndex}`);

  if (
    sectionIndex < 0 ||
    sectionIndex >= allQuestionSets.length ||
    !allQuestionSets[sectionIndex] || // Massiv mavjudligini tekshirish
    allQuestionSets[sectionIndex].length === 0
  ) {
    alert(
      `Kechirasiz, ${
        sectionIndex + 1
      }-bo'lim uchun savollar topilmadi yoki yuklanmadi. Iltimos, konsolni tekshiring.`
    );
    console.error(
      `startQuizForSection: Savollar topilmadi yoki sectionIndex xato. sectionIndex: ${sectionIndex}`,
      `allQuestionSets[${sectionIndex}]:`,
      allQuestionSets[sectionIndex]
        ? `Uzunligi: ${allQuestionSets[sectionIndex].length}`
        : "mavjud emas"
    );
    showSectionSelectionScreen();
    return;
  }

  shuffledQuestions = shuffleArray([...allQuestionSets[sectionIndex]]);
  console.log(
    "Tanlangan va aralashtirilgan savollar:",
    shuffledQuestions.length > 0
      ? `${shuffledQuestions.length} ta savol`
      : "SAVOLLAR YO'Q!"
  );

  if (!sectionSelectionScreen || !quizScreen || !resultScreen) {
    console.error("Ekran elementlaridan biri topilmadi! HTMLni tekshiring.");
    return;
  }
  sectionSelectionScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  console.log("Quiz ekrani ko'rsatildi");

  currentQuestionIndex = 0;
  score = 0;
  if (scoreEl) scoreEl.textContent = `Ball: ${score}`;
  if (feedbackTextEl) {
    feedbackTextEl.textContent = "";
    feedbackTextEl.className = "feedback";
  }
  displayQuestion();
}

function displayQuestion() {
  // ... (Bu funksiya avvalgidek, o'zgarishsiz)
  if (
    !questionNumberEl ||
    !questionTextEl ||
    !optionsContainer ||
    !feedbackTextEl
  ) {
    console.error("displayQuestion: Kerakli HTML elementlar topilmadi!");
    return;
  }
  if (currentQuestionIndex >= shuffledQuestions.length) {
    showResults();
    return;
  }
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  questionNumberEl.textContent = `Savol ${currentQuestionIndex + 1}/${
    shuffledQuestions.length
  }`;
  questionTextEl.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";
  feedbackTextEl.textContent = "";
  feedbackTextEl.className = "feedback";
  const shuffledOptions = shuffleArray([...currentQuestion.options]);
  shuffledOptions.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () =>
      selectAnswer(option, button, currentQuestion.answer)
    );
    optionsContainer.appendChild(button);
  });
}

function selectAnswer(selectedOption, selectedButton, correctAnswer) {
  // ... (Bu funksiya avvalgidek, o'zgarishsiz)
  const optionButtons = optionsContainer.querySelectorAll(".option-btn");
  optionButtons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    }
  });
  if (selectedOption === correctAnswer) {
    score++;
    if (scoreEl) scoreEl.textContent = `Ball: ${score}`;
    if (feedbackTextEl) {
      feedbackTextEl.textContent = "To'g'ri!";
      feedbackTextEl.classList.add("correct");
    }
  } else {
    selectedButton.classList.add("incorrect");
    if (feedbackTextEl) {
      feedbackTextEl.textContent = `Noto'g'ri! To'g'ri javob: ${correctAnswer}`;
      feedbackTextEl.classList.add("incorrect");
    }
  }
  setTimeout(() => {
    currentQuestionIndex++;
    displayQuestion();
  }, ANSWER_DELAY);
}

function showResults() {
  // ... (Bu funksiya avvalgidek, o'zgarishsiz)
  if (!quizScreen || !resultScreen || !finalScoreEl || !resultMessageEl) {
    console.error("showResults: Kerakli HTML elementlar topilmadi!");
    return;
  }
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  finalScoreEl.textContent = `Sizning natijangiz: ${score} / ${shuffledQuestions.length}`;
  let message = "";
  const percentage =
    shuffledQuestions.length > 0 ? (score / shuffledQuestions.length) * 100 : 0;
  if (shuffledQuestions.length === 0) {
    message = "Testda savollar mavjud emas edi.";
    finalScoreEl.textContent = "Natija yo'q";
  } else if (percentage >= 80) {
    message =
      "Ajoyib! Siz testdan muvaffaqiyatli o'tdingiz! Bilimlaringiz mustahkam!";
  } else if (percentage >= 60) {
    message =
      "Yaxshi natija! Yana bir oz harakat qilsangiz, yanada yaxshi bo'ladi.";
  } else if (percentage >= 40) {
    message = "Qoniqarli. Takrorlash va ko'proq mashq qilish tavsiya etiladi.";
  } else {
    message =
      "Keyingi safar yaxshiroq harakat qiling. O'rganishda davom eting va ruhdan tushmang!";
  }
  resultMessageEl.textContent = message;
}

function showSectionSelectionScreen() {
  console.log("showSectionSelectionScreen chaqirildi");
  if (!quizScreen || !resultScreen || !sectionSelectionScreen) {
    console.error(
      "showSectionSelectionScreen: Ekran elementlaridan biri topilmadi! HTMLni tekshiring."
    );
    return;
  }
  quizScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  sectionSelectionScreen.classList.remove("hidden");
}

if (sectionButtons && sectionButtons.length > 0) {
  console.log(
    "Bo'lim tugmalariga event listener qo'shilmoqda:",
    sectionButtons
  );
  sectionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const sectionIndex = parseInt(button.dataset.section);
      console.log(`Bo'lim tugmasi bosildi, sectionIndex: ${sectionIndex}`);
      startQuizForSection(sectionIndex);
    });
  });
} else {
  console.error(
    "Bo'lim tanlash tugmalari topilmadi (sectionButtons)! HTMLni tekshiring."
  );
}

if (restartBtn) {
  restartBtn.addEventListener("click", showSectionSelectionScreen);
} else {
  console.error(
    "Qayta boshlash tugmasi (restartBtn) topilmadi! HTMLni tekshiring."
  );
}

if (backToSectionsBtn) {
  backToSectionsBtn.addEventListener("click", () => {
    const confirmExit = confirm(
      "Haqiqatan ham bo'limlar ro'yxatiga qaytmoqchimisiz? Joriy natijalaringiz saqlanmaydi."
    );
    if (confirmExit) {
      showSectionSelectionScreen();
    }
  });
} else {
  console.error(
    "Bo'limlarga qaytish tugmasi (backToSectionsBtn) topilmadi! HTMLni tekshiring."
  );
}

showSectionSelectionScreen(); // Boshlang'ich ekranni ko'rsatish

// Savol to'plamlarini tekshirish va tugmalarni bloklash (BLOKLASH VAQTINCHA OLIB TASHLANDI)
allQuestionSets.forEach((set, index) => {
  let setName = `questionsSet${index + 1}`;
  if (
    typeof window[setName] === "undefined" ||
    !Array.isArray(window[setName]) ||
    window[setName].length === 0
  ) {
    console.warn(
      `Diqqat: Bo'lim ${
        index + 1
      } uchun savollar (${setName}) topilmadi, massiv emas yoki bo'sh. ` +
        `Iltimos, ${setName.replace(
          "questionsSet",
          "questions"
        )}.js faylini va uning HTML'ga to'g'ri ulanganligini tekshiring.`
    );

    // const btnToDisable = document.querySelector(`.section-btn[data-section="${index}"]`);
    // if (btnToDisable) {
    //   // btnToDisable.disabled = true; // <--- VAQTINCHA KOMMENTGA OLINDI
    //   // btnToDisable.style.opacity = 0.5; // <--- VAQTINCHA KOMMENTGA OLINDI
    //   btnToDisable.title = "Bu bo'lim uchun savollar mavjud emas (tekshirilmoqda)";
    //   console.log(`${index+1}-bo'lim tugmasi hozircha bloklanmadi (tekshiruv uchun).`);
    // }
  } else {
    console.log(
      `Bo'lim ${index + 1} (${setName}) savollari muvaffaqiyatli topildi.`
    );
    const btnToEnable = document.querySelector(
      `.section-btn[data-section="${index}"]`
    );
    if (btnToEnable) {
      btnToEnable.disabled = false;
      btnToEnable.style.opacity = 1;
      btnToEnable.title = "";
      console.log(`${index + 1}-bo'lim tugmasi aktiv.`);
    }
  }
});
