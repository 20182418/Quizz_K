const questions = [
  {
    question: "¿Cuál es la principal función del corazón humano?",
    answers: [
      { text: "Bombear sangre por todo el cuerpo", correct: true },
      { text: "Filtrar los desechos del organismo", correct: false },
      { text: "Regular la temperatura corporal", correct: false },
      { text: "Producir hormonas", correct: false },
    ],
  },
  {
    question: "¿Cuál es el resultado de la siguiente operación? 4(3 + 2) - 6 ÷ 3",
    answers: [
      { text: "13", correct: false },
      { text: "14", correct: true },
      { text: "15", correct: false },
      { text: "16", correct: false },
    ],
  },
  {
    question: "¿Cuál fue el resultado principal de la Revolución Francesa?",
    answers: [
      { text: "La caída de la monarquía absoluta", correct: true},
      { text: "La independencia de las colonias americanas", correct: false },
      { text: "El fin de la Segunda Guerra Mundial", correct: false },
      { text: "El establecimiento de la Unión Europea", correct: false },
    ],
  },
  {
    question: "¿Cuál es el océano más grande del mundo?",
    answers: [
      { text: "Océano Ártico", correct: false },
      { text: "Océano Atlántico", correct: false },
      { text: "Océano Índico", correct: false },
      { text: "Océano Pacífico", correct: true },
    ],
  },
  {
    question: "¿Cuál de las siguientes palabras es un verbo?",
    answers: [
      { text: "Gato", correct: false },
      { text: "Rápido", correct: false },
      { text: "Correr", correct: true },
      { text: "Rojo", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Siguiente";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selctedBtn = e.target;
  const isCorrect = selctedBtn.dataset.correct === "true";
  if (isCorrect) {
    selctedBtn.classList.add("correct");
    score++;
  } else {
    selctedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Tu puntaje es ${score} de ${questions.length}!`;
  nextButton.innerHTML = "Intentalo de nuevo";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
