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
  {
    question: "''En el oscuro rincón de la biblioteca universitaria, Ana descubrió un antiguo libro encuadernado en piel. Con manos temblorosas, abrió sus páginas y fue transportada a un mundo de fantasía y misterio. Las palabras cobraron vida, personajes surgieron y el aroma de aventuras llenó el aire. Cada capítulo era un portal a nuevas dimensiones, donde la imaginación se desplegaba sin límites. Ana se convirtió en una exploradora de universos paralelos, descubriendo secretos ancestrales y desentrañando enigmas ocultos. La lectura se convirtió en su pasaporte a la sabiduría y la evasión de la realidad. Se sumergió en las palabras con avidez, dejando que los libros la envolvieran como un manto protector contra el tiempo. En cada página encontró la magia de los sueños y la perspectiva de nuevos horizontes. Así, Ana comprendió que la verdadera universidad se encontraba en la biblioteca, donde cada libro era un profesor y cada palabra, una lección de vida.''  Pregunta: ¿Qué descubrió Ana en el oscuro rincón de la biblioteca universitaria?",
    answers: [
      { text: "Un antiguo libro encuadernado en piel.", correct: false },
      { text: "Un mundo de fantasía y misterio.", correct: false },
      { text: "Nuevas dimensiones y secretos ancestrales.", correct: false },
      { text: "Todas las opciones anteriores.", correct: true },
    ],
  },
  {
    question: "''En el oscuro rincón de la biblioteca universitaria, Ana descubrió un antiguo libro encuadernado en piel. Con manos temblorosas, abrió sus páginas y fue transportada a un mundo de fantasía y misterio. Las palabras cobraron vida, personajes surgieron y el aroma de aventuras llenó el aire. Cada capítulo era un portal a nuevas dimensiones, donde la imaginación se desplegaba sin límites. Ana se convirtió en una exploradora de universos paralelos, descubriendo secretos ancestrales y desentrañando enigmas ocultos. La lectura se convirtió en su pasaporte a la sabiduría y la evasión de la realidad. Se sumergió en las palabras con avidez, dejando que los libros la envolvieran como un manto protector contra el tiempo. En cada página encontró la magia de los sueños y la perspectiva de nuevos horizontes. Así, Ana comprendió que la verdadera universidad se encontraba en la biblioteca, donde cada libro era un profesor y cada palabra, una lección de vida'' Pregunta: ¿Qué papel desempeñó la lectura en la vida de Ana según el texto?",
    answers: [
      { text: "Evadirse de la realidad y encontrar sabiduría.", correct: false },
      { text: "Convertirse en una exploradora de universos paralelos.", correct: false },
      { text: "Sumergirse en palabras como un manto protector.", correct: false },
      { text: "Todas las opciones anteriores.", correct: true },
    ],
  },
  {
    question: "¿Cuál es la función gramatical de la palabra destacada en la siguiente oración: ''El libro ''que'' compré ayer es muy interesante.''?",
    answers: [
      { text: "Sustantivo", correct: false },
      { text: "Pronombre relativo", correct: true },
      { text: "Adjetivo", correct: false },
      { text: "Verbo", correct: false },
    ],
  },
  {
    question: "¿Cuál de los siguientes nexos indica una condición o una restricción?",
    answers: [
      { text: "Por tanto", correct: false },
      { text: "A pesar de", correct: true },
      { text: "En cambio", correct: false },
      { text: "Además", correct: false },
    ],
  },
  {
    question: "¿Cuál es la función de los dos puntos en la siguiente oración: ''El profesor hizo hincapié en lo siguiente: la importancia de la educación.''?",
    answers: [
      { text: "Separar elementos de una enumeración.", correct: false },
      { text: "Introducir una explicación o aclaración.", correct: false },
      { text: "Marcar una pausa antes de una cita o ejemplo.", correct: true },
      { text: "Indicar una conclusión o resultado.", correct: false },
    ],
  },
  {
    question: "Texto: El cine es una forma de arte que combina imágenes en movimiento, música, diálogos y efectos visuales para contar una historia. El cine descriptivo se caracteriza por presentar una narración detallada de los eventos y escenas, enfocándose en los aspectos visuales y sensoriales para crear una imagen vívida en la mente del espectador. Por otro lado, el cine argumentativo busca persuadir al espectador a través de la presentación de argumentos sólidos y convincentes. Utiliza el diálogo y la confrontación de ideas para transmitir un mensaje y convencer al público. Finalmente, el cine expositivo tiene como objetivo informar y educar al espectador. Presenta información de manera objetiva y clara, utilizando recursos como documentales y programas educativos.  Pregunta: Según el texto, ¿cuál es la característica principal del cine argumentativo?",
    answers: [
      { text: "Enfocarse en los aspectos visuales y sensoriales.", correct: false },
      { text: "Contar una historia con detalles descriptivos.", correct: false },
      { text: "Persuadir al espectador a través de argumentos sólidos.", correct: true },
      { text: "Informar y educar al espectador de manera objetiva.", correct: false },
    ],
  },
  {
    question: "¿Cuál de los siguientes elementos NO se incluye en la estructura de una ficha bibliográfica?",
    answers: [
      { text: "Autor", correct: false },
      { text: "Título del libro", correct: false },
      { text: "Editorial", correct: false },
      { text: "Género literario", correct: true },
    ],
  },
  {
    question: "¿Cuál de los siguientes recursos contribuye a la cohesión en un texto?",
    answers: [
      { text: "Uso adecuado de nexos y conectores.", correct: true },
      { text: "Variedad de vocabulario y figuras literarias.", correct: false },
      { text: "Organización de ideas y estructura del texto.", correct: false },
      { text: "Elección de un tema adecuado al contexto.", correct: false },
    ],
  },
  {
    question: "Identifica la oración en voz pasiva.",
    answers: [
      { text: "El perro persigue al gato.", correct: false },
      { text: "El libro fue escrito por Ana.", correct: true },
      { text: "Los niños juegan en el parque.", correct: false },
      { text: "El profesor explica la lección.", correct: false },
    ],
  },
  {
    question: "¿Cuál de los siguientes nexos introduce una consecuencia o resultado?",
    answers: [
      { text: "Por tanto", correct: true },
      { text: "Aunque", correct: false },
      { text: "Sin embargo", correct: false },
      { text: "En resumen", correct: false },
    ],
  },
  {
    question: "¿Cuál es la función de las comillas en la siguiente oración: ''Me dijo: 'Voy a llegar tarde'''?",
    answers: [
      { text: "Indicar una pausa en la lectura.", correct: false },
      { text: "Destacar una palabra o expresión.", correct: false },
      { text: "Introducir una cita textual.", correct: true },
      { text: "Marcar una oración interrogativa.", correct: false },
    ],
  },
  {
    question: "Texto: La entrevista periodística es un género que se utiliza para obtener información de una persona destacada en algún campo. Se caracteriza por la formulación de preguntas por parte del entrevistador y las respuestas del entrevistado. El objetivo principal es obtener datos y opiniones relevantes para transmitir al público. Por otro lado, el artículo de opinión es un tipo de texto en el cual el autor expresa su punto de vista o postura sobre un tema específico. Generalmente, se basa en argumentos y evidencias para respaldar su opinión y persuadir al lector. Pregunta: Según el texto, ¿cuál es la diferencia entre una entrevista periodística y un artículo de opinión?",
    answers: [
      { text: "La entrevista tiene preguntas y respuestas, mientras que el artículo de opinión presenta argumentos y evidencias.", correct: false },
      { text: "La entrevista busca obtener información relevante, mientras que el artículo de opinión expresa el punto de vista del autor.", correct: true },
      { text: "La entrevista se basa en datos y opiniones, mientras que el artículo de opinión se enfoca en transmitir al público.", correct: false },
      { text: "La entrevista es un género periodístico, mientras que el artículo de opinión es un tipo de texto argumentativo.", correct: false },
    ],
  },
  {
    question: "¿Cuál de los siguientes elementos se incluye en la estructura de una ficha bibliográfica para un libro impreso?",
    answers: [
      { text: "URL del sitio web", correct: false },
      { text: "Fecha de acceso", correct: false },
      { text: "Número de páginas", correct: true },
      { text: "Dirección del autor", correct: false },
    ],
  },
  {
    question:"¿Cuál de los siguientes elementos contribuye a la adecuación de un texto?",
    answers: [
      { text: "Uso de sinónimos y antónimos", correct: false },
      { text: "Vocabulario técnico y especializado", correct: true },
      { text: "Organización lógica de ideas", correct: false },
      { text: "Variedad en la estructura de las oraciones", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes conjuntos de números pertenece a los números racionales?",
    answers: [
      { text: "{√2, √3, √5}", correct: false },
      { text: "{-3, -2, -1}", correct: false },
      { text: "{0, 1/2, 3/4}", correct: true },
      { text: "{π, e, φ}", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes conjuntos de números pertenece a los números racionales?",
    answers: [
      { text: "{x^2 + 5x + 9}", correct: false },
      { text: "3x^2 - 10x + 7", correct: false },
      { text: "2x^2 + 4x + 2", correct: false },
      { text: "x^2 - 6x + 9", correct: true },
      ],
  },
  {
    question:"¿Cuál de las siguientes medidas de tendencia central puede ser afectada por valores extremos (outliers)?",
    answers: [
      { text: "Media", correct: false },
      { text: "Mediana", correct: true },
      { text: "Moda", correct: false },
      { text: "Ninguna de las anteriores", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes triángulos es un triángulo isósceles?",
    answers: [
      { text: "Triángulo equilátero", correct: false },
      { text: "Triángulo escaleno", correct: false },
      { text: "Triángulo rectángulo", correct: false },
      { text: "Triángulo con dos lados de igual longitud", correct: true },
      ],
  },
  {
    question:"¿Cuál es el resultado de la siguiente operación: (3/4) ÷ (2/5)?",
    answers: [
      { text: "15/8", correct: true },
      { text: "3/8", correct: false },
      { text: "8/15", correct: false },
      { text: "4/5", correct: false },
      ],
  },
  {
    question:"¿Cuál es la solución real de la ecuación cuadrática x^2 - 5x + 6 = 0?",
    answers: [
      { text: "x = -1", correct: false },
      { text: "x = 2", correct: false },
      { text: "x = 3", correct: true },
      { text: "x = 4", correct: false },
      ],
  },
  {
    question:"En un grupo de 30 personas, se observa que 12 de ellas tienen el cabello rubio. Si se selecciona una persona al azar, ¿cuál es la probabilidad de que tenga el cabello rubio?",
    answers: [
      { text: "0.4", correct: true },
      { text: "0.3", correct: false },
      { text: "0.6", correct: false },
      { text: "0.8", correct: false },
      ],
  },
  {
    question:"¿Cuál es el área de un círculo con radio 5 cm?",
    answers: [
      { text: "25π cm^2", correct: true },
      { text: "50π cm^2", correct: false },
      { text: "75π cm^2", correct: false },
      { text: "100π cm^2", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes sistemas de numeración utiliza únicamente los dígitos 0 y 1?",
    answers: [
      { text: "Sistema decimal", correct: false },
      { text: "Sistema binario", correct: true },
      { text: "Sistema octal", correct: false },
      { text: "Sistema hexadecimal", correct: false },
      ],
  },
  {
    question:"¿Cuál es el resultado de (x + 2)(x - 2)?",
    answers: [
      { text: "x^2 - 2x + 4", correct: false },
      { text: "x^2 + 2x - 4", correct: false },
      { text: "x^2 - 4", correct: true },
      { text: "x^2 - 4x + 4", correct: false },
      ],
  },
  {
    question:"En una encuesta a 100 personas, se les preguntó sobre su género. Los resultados se resumieron en la siguiente tabla: Género | Frecuencia absoluta Hombre | 60 Mujer | 40  ¿Cuál es la frecuencia relativa de las mujeres en esta encuesta?",
    answers: [
      { text: "0.4", correct: false },
      { text: "0.6", correct: false },
      { text: "40", correct: true },
      { text: "60", correct: false },
      ],
  },
  {
    question:"¿Cuál es el resultado de (3^2) × (3^4)?",
    answers: [
      { text: "3^6", correct: true },
      { text: "3^8", correct: false },
      { text: "3^16", correct: false },
      { text: "3^24", correct: false },
      ],
  },
  {
    question:"¿Cuál de las siguientes afirmaciones describe correctamente el movimiento rectilíneo uniforme (MRU)?",
    answers: [
      { text: "La velocidad varía constantemente en magnitud y dirección.", correct: true },
      { text: "La velocidad es constante en magnitud y dirección.", correct: false },
      { text: "La aceleración es constante en magnitud y dirección.", correct: false },
      { text: "La aceleración varía constantemente en magnitud y dirección.", correct: false },
      ],
  },
  {
    question:"¿Cuál de las siguientes leyes describe la relación entre la fuerza y la aceleración de un objeto?",
    answers: [
      { text: "Primera ley de Newton", correct: false },
      { text: "Segunda ley de Newton", correct: true },
      { text: "Tercera ley de Newton", correct: false },
      { text: "Ley de la gravitación universal", correct: false },
      ],
  },
  {
    question:"¿Cuál de las siguientes afirmaciones describe correctamente la ley de la gravitación universal?",
    answers: [
      { text: "La fuerza gravitatoria entre dos objetos depende de la distancia y la velocidad de los objetos.", correct: false },
      { text: "La fuerza gravitatoria entre dos objetos depende únicamente de la masa de los objetos.", correct: true },
      { text: "La fuerza gravitatoria entre dos objetos depende únicamente de la distancia entre ellos.", correct: false },
      { text: "La fuerza gravitatoria entre dos objetos es siempre repulsiva.", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes conceptos está relacionado con la transferencia de calor por contacto directo entre cuerpos?",
    answers: [
      { text: "Conducción térmica", correct: true },
      { text: "Radiación térmica", correct: false },
      { text: "Convección térmica", correct: false },
      { text: "Dilatación térmica", correct: false },
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
