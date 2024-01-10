const questions = [
  {
    question: "Who has scored the most goals in the Champions League?",
    answers: [
      { text: "Ronaldo", correct: true },
      { text: "Messi", correct: false },
      { text: "Müller", correct: false },
      { text: "Drogba", correct: false },
    ],
  },
  {
    question: "Which country won the first ever FIFA World Cup in 1930?",
    answers: [
      { text: "Uruguay", correct: true },
      { text: "Brazil", correct: false },
      { text: "Argentina", correct: false },
      { text: "Italy", correct: false },
    ],
  },
  {
    question: "Who won the Ballon d'Or in 2020?",
    answers: [
      { text: "Lionel Messi", correct: true },
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Robert Lewandowski", correct: false },
      { text: "Mohamed Salah", correct: false },
    ],
  },
  {
    question: "Which team has won the most English Premier League titles?",
    answers: [
      { text: "Manchester United", correct: true },
      { text: "Liverpool", correct: false },
      { text: "Chelsea", correct: false },
      { text: "Arsenal", correct: false },
    ],
  },
  {
    question: "Who is the top scorer in the history of La Liga?",
    answers: [
      { text: "Lionel Messi", correct: true },
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Telmo Zarra", correct: false },
      { text: "Hugo Sánchez", correct: false },
    ],
  },

  {
    question:
      "Who has scored the most goals in the history of the FIFA World Cup?",
    answers: [
      { text: "Pelé", correct: true },
      { text: "Miroslav Klose", correct: false },
      { text: "Ronaldo", correct: false },
      { text: "Diego Maradona", correct: false },
    ],
  },
  {
    question: "Which country has won the most Copa America titles?",
    answers: [
      { text: "Uruguay", correct: true },
      { text: "Brazil", correct: false },
      { text: "Argentina", correct: false },
      { text: "Chile", correct: false },
    ],
  },
  {
    question:
      "Who holds the record for the most assists in a single Premier League season?",
    answers: [
      { text: "Thierry Henry", correct: true },
      { text: "Kevin De Bruyne", correct: false },
      { text: "Mesut Özil", correct: false },
      { text: "David Beckham", correct: false },
    ],
  },
  {
    question: "Which country has won the most FIFA Women's World Cup titles?",
    answers: [
      { text: "United States", correct: true },
      { text: "Germany", correct: false },
      { text: "Brazil", correct: false },
      { text: "Norway", correct: false },
    ],
  },
  {
    question:
      "Who is the all-time top scorer in the history of the UEFA European Championship?",
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

/**
 * Startet das Quiz, setzt den Index der aktuellen Frage auf den Anfang zurück und zeigt die erste Frage an.
 */
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

/**
 * Zeigt die aktuelle Frage und ihre Antwortmöglichkeiten an.
 */
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNummer = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNummer + ". " + currentQuestion.question;

  // Durchläuft jede Antwortmöglichkeit und erstellt einen Button für jede Antwortoption
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
}

/**
 * Setzt den Quiz-Zustand zurück, indem die Antworten gelöscht und der Next-Button ausgeblendet werden.
 */
function resetState() {
  nextButton.style.display = "none";
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

  nextButton.style.display = "block";
}

/**
 * Zeigt die erreichte Punktzahl nach dem Quiz an und bietet die Möglichkeit, das Quiz erneut zu starten.
 */
function reachedPoints() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length} questions`;
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
