const questions = [
  {
    choice: "2",
    question:
      "Wer hat die meisten Goals in der Champions League geschossen? Nur der Nachname",
    answers: [{ text: "ronaldo", correct: true }],
  },
  {
    choice: "2",
    question: "Welches Land hat die erste FIFA Weltmeisterschaft in 1930 gewonnen?",
    answers: [{ text: "Uruguay", correct: true }],
  },
  {
    choice: "1",
    question: "Wer hat den ersten Ballon d'Or in 2020 gewonnen?",
    answers: [
      { text: "Lionel Messi", correct: true },
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Robert Lewandowski", correct: false },
      { text: "Mohamed Salah", correct: false },
    ],
  },
  {
    choice: "2",
    question: "Welches Team hat den ersten English Premier League Titel gewonnen?",
    answers: [{ text: "Manchester United", correct: true }],
  },
  {
    choice: "1",
    question: "Wer ist der Top scorer in der Geschichte von La Liga?",
    answers: [
      { text: "Lionel Messi", correct: true },
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Telmo Zarra", correct: false },
      { text: "Hugo Sánchez", correct: false },
    ],
  },

  {
    choice: "1",
    question:
      "Wer hat die meisten Goals in der Geschichte von der FIFA Weltmeisterschaft geschossen?",
    answers: [
      { text: "Pelé", correct: true },
      { text: "Miroslav Klose", correct: false },
      { text: "Ronaldo", correct: false },
      { text: "Diego Maradona", correct: false },
    ],
  },
  {
    choice: "2",
    question: "Welches Land hat die meisten Copa America Titel gewonnen?",
    answers: [{ text: "Uruguay", correct: true }],
  },
  {
    choice: "1",
    question:
      "Wer hat den höchsten Rekord für die meisten Torvorlagen in einer einzelnen Premier League Season?",
    answers: [
      { text: "Thierry Henry", correct: true },
      { text: "Kevin De Bruyne", correct: false },
      { text: "Mesut Özil", correct: false },
      { text: "David Beckham", correct: false },
    ],
  },
  {
    choice: "1",
    question: "Welches Land hat die meisten Titel bei der FIFA Frauen-Weltmeisterschaft gewonnen?",
    answers: [
      { text: "United States", correct: true },
      { text: "Germany", correct: false },
      { text: "Brazil", correct: false },
      { text: "Norway", correct: false },
    ],
  },
  {
    choice: "1",
    question:
      "Wer ist der beste Torschütze aller Zeiten in der Geschichte der UEFA-Europameisterschaft?",
    answers: [
      { text: "Cristiano Ronaldo", correct: true },
      { text: "Michel Platini", correct: false },
      { text: "Alan Shearer", correct: false },
      { text: "Antoine Griezmann", correct: false },
    ],
  },
];

// HTML-Elemente abrufen
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

// Initialisierung der Variablen
let currentQuestionIndex = 0;
let score = 0;
let choice = 1;

/**
 * Startet das Quiz, setzt den Index der aktuellen Frage auf den Anfang zurück und zeigt die erste Frage an.
 */
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  choice = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

/**
 * Zeigt die aktuelle Frage und ihre Antwortmöglichkeiten an.
 */
function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNummer = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNummer + ". " + currentQuestion.question;
  const abfrage = currentQuestion.choice;

  if (abfrage === "1") {
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  } else if (abfrage === "2") {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Gib hier deine Antwort ein");
    input.classList.add("answer-input");
    answerButtons.appendChild(input);
    input.addEventListener("change", function (event) {
      const enteredAnswer = event.target.value;
      console.log("Eingegebene Antwort:", enteredAnswer);
      correction(input); // Aufruf der correction-Funktion und Übergabe des input-Elements
    });
  }
}

/**
 * @function correction
 * @param {HTMLInputElement} inputElement - Das Eingabeelement, das die vom Benutzer eingegebene Antwort enthält.
 * @description Diese Funktion überprüft, ob die vom Benutzer eingegebene Antwort korrekt ist, und aktualisiert die Benutzeroberfläche entsprechend.
 */

function correction(inputElement) {
  const enteredAnswer = inputElement.value.toLowerCase();

  // Holt die aktuelle Frage aus dem Fragenarray
  const currentQuestion = questions[currentQuestionIndex];

  // Findet die korrekte Antwort in der aktuellen Frage
  const correctAnswer = currentQuestion.answers
    .find((answer) => answer.correct)
    .text.toLowerCase();

  const isCorrect = enteredAnswer === correctAnswer;

  // Wenn die Antwort korrekt ist, fügt sie die Klasse "correct" zum Eingabeelement hinzu und erhöht die Punktzahl
  if (isCorrect) {
    inputElement.classList.add("correct");
    score++;
  } else {
    // Wenn die Antwort falsch ist, fügt sie die Klasse "incorrect" zum Eingabeelement hinzu und markiert die korrekte Antwort
    inputElement.classList.add("incorrect");
    const correctBtn = Array.from(answerButtons.children).find(
      (button) => button.dataset.correct === "true"
    );
    correctBtn.classList.add("correct");
  }

 

  // Deaktiviert das Eingabefeld, um weitere Eingaben zu verhindern
  inputElement.disabled = true;

  // Deaktiviert den "Next" Button, wenn es keine weiteren Fragen gibt
  if (currentQuestionIndex === questions.length - 1) {
    nextButton.disabled = true;
    nextButton.style.display = "Block"; //Zeigt den "Next" Button an.
  }

  // Zeigt den "Next" Button an
  nextButton.style.display = "block";
}
/**
 * @function resetState
 * @description Diese Funktion setzt den Zustand des Quiz zurück, indem sie die Antworten löscht und den Next-Button ausblendet.
 */
function resetState() {
  
  // Löscht alle Antworttasten
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

/**
 * Verarbeitet die Auswahl der Antwort und aktualisiert den Punktestand.
 */
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  // Deaktiviert alle Antwortbuttons, um erneute Auswahl zu verhindern
  const answerButtons = document.querySelectorAll(".answer-button");
  answerButtons.forEach((button) => {
    button.disabled = true;
    button.style.cursor = "not-allowed"; // Ändert den Mauszeiger-Stil für deaktivierte Buttons
  });


}

/**
 * Zeigt die erreichte Punktzahl nach dem Quiz an und bietet die Möglichkeit, das Quiz erneut zu starten.
 */
function reachedPoints() {
  resetState();
  questionElement.innerHTML = `Du hast ${score} Punkte von ${questions.length} möglichen Punkten erzielt`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

/**
 * Wechselt zur nächsten Frage oder zeigt die erreichte Punktzahl an, wenn keine Fragen mehr übrig sind.
 */
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    reachedPoints();
  }
}

/**
 * Eventlistener für den Next-Button, der zur nächsten Frage wechselt oder das Quiz erneut startet.
 */
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    nextQuestion();
  } else {
    startQuiz();
  }
});

// Startet das Quiz, wenn die Seite geladen wird
startQuiz();
