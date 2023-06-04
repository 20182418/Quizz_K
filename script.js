const questions = [
  {
    question: "¿Cuál es el próximo número en la serie: 2, 5, 10, 17, ...?",
    answers: [
      { text: "20", correct: false },
      { text: "22", correct: false },
      { text: "24", correct: false },
      { text: "26", correct: true },
    ],
  },
  {
    question: "¿Cuál es el patrón en la serie: 3, 6, 9, 12, ...?",
    answers: [
      { text: "Sumar 2", correct: false },
      { text: "Sumar 3", correct: true },
      { text: "Multiplicar por 3", correct: false },
      { text: "Multiplicar por 4", correct: false },
    ],
  },
  {
    question: "Si 3 personas pueden pintar una casa en 6 días, ¿cuántos días tomaría que 6 personas pinten la misma casa?",
    answers: [
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "4", correct: false },
      { text: "6", correct: false },
    ],
  },
  {
    question: "Si x + 5 = 13, ¿cuál es el valor de x?",
    answers: [
      { text: "5", correct: false},
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "13", correct: false },
    ],
  },
  {
    question: "Si un artículo tiene un precio original de $200 y se aplica un descuento del 20%, ¿cuál es el precio después del descuento?",
    answers: [
      { text: "$40", correct: false },
      { text: "$80", correct: false },
      { text: "$120", correct: false },
      { text: "$160", correct: true },
    ],
  },
  {
    question: "¿Cuál es el resultado de la siguiente operación: (5 + 3) x 2 - 4 ÷ 2?",
    answers: [
      { text: "6", correct: false },
      { text: "9", correct: false },
      { text: "10", correct: false },
      { text: "14", correct: true },
    ],
  },
    {
    question: "Si 4m - 8 = 20, ¿cuál es el valor de m?",
    answers: [
      { text: "7", correct: true },
      { text: "9", correct: false },
      { text: "12", correct: false },
      { text: "14", correct: false },
    ],
  },
   {
    question: "¿Cuál es el resultado de la siguiente operación: (4 + 6) x (8 - 2)?",
    answers: [
      { text: "40", correct: false },
      { text: "48", correct: false },
      { text: "60", correct: true },
      { text: "80", correct: false },
    ],
  }, 
   {
    question: "Si 2/3 de un número es igual a 12, ¿cuál es el número?",
    answers: [
      { text: "8", correct: false },
      { text: "16", correct: false },
      { text: "18", correct: true },
      { text: "24", correct: false },
    ],
  },
   {
    question: "Si un triángulo tiene un ángulo recto y otro ángulo mide 30 grados, ¿cuál es la medida del tercer ángulo?",
    answers: [
      { text: "30 grados", correct: false },
      { text: "45 grados", correct: false },
      { text: "60 grados", correct: true },
      { text: "90 grados", correct: false },
    ],
  }, 
  {
    question: "¿Cuál es la raíz cuadrada de 81?",
    answers: [
      { text: "7", correct: false },
      { text: "8", correct: false },
      { text: "9", correct: true },
      { text: "10.25", correct: false },
    ],
  },
  {
    question: "En una serie numérica, los primeros cuatro términos son 3, 7, 15, 31. ¿Cuál es el quinto término de la serie?",
    answers: [
      { text: "48", correct: false },
      { text: "63", correct: true },
      { text: "79", correct: false },
      { text: "95", correct: false },
    ],
  },
  {
    question: "¿Cuál es el siguiente número en la serie: 1, 4, 9, 16, ...?",
    answers: [
      { text: "20", correct: false },
      { text: "23", correct: false },
      { text: "25", correct: true },
      { text: "28", correct: false },
    ],
  },
  {
    question: "Si la secuencia de números 1, 3, 6, 10, 15, ... sigue un patrón, ¿cuál es el siguiente número en la secuencia?",
    answers: [
      { text: "20", correct: false },
      { text: "21", correct: true },
      { text: "22", correct: false },
      { text: "23", correct: false },
    ],
  },
  {
    question: "¿Cuál es el resultado de la siguiente operación: (12 - 4) ÷ (2 + 1) x 5?",
    answers: [
      { text: "10", correct: false },
      { text: "15", correct: true },
      { text: "20", correct: false },
      { text: "25", correct: false },
    ],
  },
  {
    question: "Si el patrón de la secuencia es 2, 5, 10, 17, ..., ¿cuál es el siguiente número en la secuencia?",
    answers: [
      { text: "24", correct: true },
      { text: "39", correct: false },
      { text: "29", correct: false },
      { text: "34", correct: false },
    ],
  },
  {
    question: "Describa un sinónimo para la palabra ''efímero''.",
    answers: [
      { text: "Perenne", correct: false },
      { text: "Duradero", correct: false },
      { text: "Eterno", correct: false },
      { text: "Pasajero", correct: true },
    ],
  },
  {
    question: "Encuentre un sinónimo para el término ''obscurecer''.",
    answers: [
      { text: "Iluminar", correct: false },
      { text: "Revelar", correct: false },
      { text: "Clarificar", correct: false },
      { text: "Opacar", correct: true },
    ],
  },
  {
    question: "¿Cuál es un sinónimo adecuado para la palabra ''pulcro''?",
    answers: [
      { text: "Sucio", correct: false },
      { text: "Descuidado", correct: false },
      { text: "Impecable", correct: true },
      { text: "Desaliñado", correct: false },
    ],
  },
  {
    question: "¿Proporcione un antónimo para la palabra ''efusivo''.?",
    answers: [
      { text: "Reservado", correct: true },
      { text: "Sereno", correct: false },
      { text: "Moderado", correct: false },
      { text: "Apasionado", correct: false },
    ],
  },
  {
    question: "¿Cuál es el antónimo correcto para la palabra ''loable''?",
    answers: [
      { text: "Reprochable", correct: true },
      { text: "Aplaudible", correct: false },
      { text: "Meritorio", correct: false },
      { text: "Admirable", correct: false },
    ],
  },
  {
    question: "''Agua es a sed, como comida es a ____________''.",
    answers: [
      { text: "Hambre", correct: true },
      { text: "Nutrición", correct: false },
      { text: "Alimento", correct: false },
      { text: "Sustento", correct: false },
    ],
  },
  {
    question: "¿Cuál es un sinónimo adecuado para la palabra ''efervescente''?",
    answers: [
      { text: "Tranquilo", correct: false },
      { text: "Agitado", correct: false },
      { text: "Burbujeante", correct: true },
      { text: "Opaco", correct: false },
    ],
  },
  {
    question: "''Libro es a leer, como película es a ____________''.",
    answers: [
      { text: "Cinematografía", correct: false },
      { text: "Haber", correct: false },
      { text: "Ver", correct: true },
      { text: "DVD", correct: false },
    ],
  },
  {
    question: "¿Cuál es un sinónimo adecuado para la palabra ''ubérrimo''?.",
    answers: [
      { text: "Fértil", correct: true },
      { text: "Escaso", correct: false },
      { text: "Árido", correct: false },
      { text: "Estéril", correct: false },
    ],
  },
  {
    question: "¿Cuál es el antónimo correcto para la palabra ''efímero''?.",
    answers: [
      { text: "Duradero", correct: true },
      { text: "Eterno", correct: false },
      { text: "Perenne", correct: false },
      { text: "Continuo", correct: false },
    ],
  },
  {
    question: "''Pájaro es a ave, como pez es a ____________''.",
    answers: [
      { text: "Anfibio", correct: false },
      { text: "Mamifero", correct: false },
      { text: "Acuático", correct: true },
      { text: "Catáceo", correct: false },
    ],
  },
  {
    question: "¿Cuál es un sinónimo adecuado para la palabra ''voraz''?",
    answers: [
      { text: "Hambriento", correct: true },
      { text: "Indiferente", correct: false },
      { text: "Desinteresado", correct: false },
      { text: "Satisfecho", correct: false },
    ],
  },
  {
    question: "''¡Estudiantes universitarios! El éxito académico está al alcance de sus manos, pero requiere determinación y disciplina. Aprovechen al máximo sus años en la universidad, sean curiosos, participen activamente en clase y busquen oportunidades de aprendizaje adicionales. Establezcan metas claras, organicen su tiempo eficientemente y busquen el apoyo adecuado cuando lo necesiten. Recuerden, el conocimiento es poder y ustedes tienen el potencial de alcanzar grandes logros. ¡No se rindan, sigan adelante y persigan sus sueños!''  Pregunta: ¿Cuál es la clave para el éxito académico según el texto?",
    answers: [
      { text: "Curiosidad y participación activa en clase.", correct: false },
      { text: "Establecer metas claras y organización del tiempo.", correct: false },
      { text: "Buscar oportunidades de aprendizaje adicionales.", correct: false },
      { text: "Todas las opciones anteriores.", correct: true },
    ],
  },

  {
    question: "''¡Estudiantes universitarios! El éxito académico está al alcance de sus manos, pero requiere determinación y disciplina. Aprovechen al máximo sus años en la universidad, sean curiosos, participen activamente en clase y busquen oportunidades de aprendizaje adicionales. Establezcan metas claras, organicen su tiempo eficientemente y busquen el apoyo adecuado cuando lo necesiten. Recuerden, el conocimiento es poder y ustedes tienen el potencial de alcanzar grandes logros. ¡No se rindan, sigan adelante y persigan sus sueños!'' Pregunta: ¿Qué se sugiere a los estudiantes universitarios en el texto?",
    answers: [
      { text: "Ser indiferentes y desinteresados en clase.", correct: false },
      { text: "Rendirse ante los desafíos académicos.", correct: false },
      { text: "Buscar apoyo adecuado cuando sea necesario.", correct: true },
      { text: "Limitar el aprendizaje solo a lo impartido en clase.", correct: false },
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
