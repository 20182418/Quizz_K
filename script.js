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
    question: "Es la narración de una vida o parte de ella, escrita por el propio protagonista, mostrando su nacimiento, sus logros, sus fracasos, sus gustos, etc.  Estamos hablando de:",
    answers: [
      { text: "crónica", correct: false },
      { text: "narración", correct: false },
      { text: "autobiografía", correct: true },
      { text: "nota", correct: false },
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
      { text: "Media", correct: true },
      { text: "Mediana", correct: false },
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
      { text: "La velocidad varía constantemente en magnitud y dirección.", correct: false },
      { text: "La velocidad es constante en magnitud y dirección.", correct: true },
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
  {
    question:"Un objeto se desplaza en línea recta con una velocidad de 8 m/s hacia el este. Si se considera que hacia el este es positivo y hacia el oeste es negativo, ¿cuál es la magnitud y dirección del vector velocidad?",
    answers: [
      { text: "Magnitud de 8 m/s hacia el este", correct: true },
      { text: "Magnitud de 8 m/s hacia el oeste", correct: false },
      { text: "Magnitud de 8 m/s", correct: false },
      { text: "Magnitud de 8 m/s hacia el oeste", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes principios explica por qué un objeto sumergido en un fluido experimenta un empuje hacia arriba?",
    answers: [
      { text: "Principio de Arquímedes", correct: true },
      { text: "Principio de Pascal", correct: false },
      { text: "Principio de Bernoulli", correct: false },
      { text: "Principio de conservación de la energía", correct: false },
      ],
  },
  {
    question:"¿Cuál de las siguientes afirmaciones describe correctamente la energía cinética?",
    answers: [
      { text: "Es la energía asociada a la posición o altura de un objeto.", correct: false },
      { text: "Es la energía almacenada en los enlaces químicos de una sustancia.", correct: false },
      { text: "Es la energía relacionada con el movimiento de un objeto.", correct: true },
      { text: "Es la energía producida por una corriente eléctrica en un circuito.", correct: false },
      ],
  },
  {
    question:"Un objeto de masa 2 kg se encuentra a una altura de 5 metros sobre el suelo. ¿Cuál es la energía potencial gravitatoria del objeto en relación al suelo?",
    answers: [
      { text: "10 J", correct: false },
      { text: "15 J", correct: false },
      { text: "20 J", correct: false },
      { text: "25 J", correct: true },
      ],
  },
  {
    question:"¿Cuál de las siguientes afirmaciones describe correctamente el movimiento acelerado?",
    answers: [
      { text: "La velocidad es constante en magnitud y dirección.", correct: false },
      { text: "La aceleración es constante en magnitud y dirección.", correct: true },
      { text: "La aceleración varía constantemente en magnitud y dirección.", correct: false },
      { text: "La velocidad varía constantemente en magnitud y dirección.", correct: false },
      ],
  },
  {
    question:"¿Cuál de las siguientes magnitudes se utiliza para medir la cantidad de materia en un objeto?",
    answers: [
      { text: "Masa", correct: true },
      { text: "Peso", correct: false },
      { text: "Volumen", correct: false },
      { text: "Densidad", correct: false },
      ],
  },
  {
    question:"¿Cuál de las siguientes afirmaciones describe correctamente la transferencia de calor por movimiento de partículas en un fluido?",
    answers: [
      { text: "Conducción térmica", correct: false },
      { text: "Radiación térmica", correct: false },
      { text: "Convección térmica", correct: true },
      { text: "Dilatación térmica", correct: false },
      ],
  },
  {
    question:"Un automóvil se desplaza a una velocidad constante de 80 km/h durante 3 horas. ¿Cuál es la distancia total recorrida por el automóvil?",
    answers: [
      { text: "160 Km", correct: false },
      { text: "140 Km", correct: false },
      { text: "240 Km", correct: true },
      { text: "320 Km", correct: false },
      ],
  },
  {
    question:"¿Cuál de las siguientes opciones describe una característica de los seres vivos?",
    answers: [
      { text: "Reproducción celular", correct: true },
      { text: "Descomposición química", correct: false },
      { text: "Inmovilidad absoluta", correct: false },
      { text: "Generación espontánea", correct: false },
      ],
  },
  {
    question:"¿Qué teoría propone que las especies cambian a lo largo del tiempo como resultado de la selección natural?",
    answers: [
      { text: "Lamarckismo", correct: false },
      { text: "Mendelismo", correct: false },
      { text: "Darwinismo", correct: true },
      { text: "Lamarckismo", correct: false },
      ],
  },
  {
    question:"¿Cuál es el proceso mediante el cual los organismos autótrofos capturan la energía solar para convertirla en materia orgánica?",
    answers: [
      { text: "Respiración celular", correct: false },
      { text: "Fotosíntesis", correct: true },
      { text: "Digestión", correct: false },
      { text: "Fermentación", correct: false },
      ],
  },
  {
    question:"¿Qué tipo de enfermedades pueden prevenirse a través de una adecuada nutrición?",
    answers: [
      { text: "Enfermedades respiratorias", correct: false },
      { text: "Enfermedades cardiovasculares", correct: true },
      { text: "Enfermedades genéticas", correct: false },
      { text: "Enfermedades mentales", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes procesos celulares resulta en la formación de gametos haploides?",
    answers: [
      { text: "Mitosis", correct: false },
      { text: "Meiosis", correct: true },
      { text: "Fecundación", correct: false },
      { text: "Fragmentación", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes términos se refiere a la apariencia observable de un organismo determinada por su combinación de genes?",
    answers: [
      { text: "Fenotipo", correct: true },
      { text: "Genotipo", correct: false },
      { text: "Cromosoma", correct: false },
      { text: "Mutación", correct: false },
      ],
  },
  {
    question:"¿Qué término se utiliza para describir la diversidad de especies y ecosistemas en un determinado lugar?",
    answers: [
      { text: "Adaptación", correct: false },
      { text: "Biodiversidad", correct: true },
      { text: "Evolución", correct: false },
      { text: "Selección natural", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes procesos metabólicos utiliza oxígeno para producir energía en forma de ATP?",
    answers: [
      { text: "Fotosíntesis", correct: false },
      { text: "Respiración celular", correct: true },
      { text: "Fermentación láctica", correct: false },
      { text: "Fermentación alcohólica", correct: false },
      ],
  },
  {
    question:"¿Cuál de las siguientes opciones es una característica de las células eucariotas?",
    answers: [
      { text: "Ausencia de núcleo celular", correct: false },
      { text: "Presencia de organelos membranosos", correct: true },
      { text: "Organización en cadenas o colonias", correct: false },
      { text: "Tamaño celular reducido", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes factores puede contribuir a la contaminación atmosférica?",
    answers: [
      { text: "Uso de fertilizantes en la agricultura", correct: false },
      { text: "Quema de combustibles fósiles", correct: true },
      { text: "Consumo excesivo de agua", correct: false },
      { text: "Exposición a radiaciones solares", correct: false },
      ],
  },
  {
    question:"¿Qué técnica permite la modificación de genes en organismos vivos?",
    answers: [
      { text: "PCR (Reacción en Cadena de la Polimerasa)", correct: false },
      { text: "Electroforesis de ADN", correct: false },
      { text: "Clonación de ADN", correct: false },
      { text: "Ingeniería genética", correct: true },
      ],
  },
  {
    question:"¿Cuál de los siguientes factores contribuye a la biodiversidad?",
    answers: [
      { text: "Extinción de especies", correct: false },
      { text: "Fragmentación de hábitats", correct: false },
      { text: "Especies invasoras", correct: false },
      { text: "Conservación de ecosistemas", correct: true },
      ],
  },
  {
    question:"¿Cuál es la diferencia entre ética y moral?",
    answers: [
      { text: "La ética se refiere a las normas de conducta individual, mientras que la moral se refiere a las normas de conducta social.", correct: true },
      { text: "La ética se refiere a las normas de conducta social, mientras que la moral se refiere a las normas de conducta individual.", correct: false },
      { text: "La ética se refiere al comportamiento personal, mientras que la moral se refiere al comportamiento profesional.", correct: false },
      { text: "La ética y la moral son términos intercambiables y se refieren a lo mismo.", correct: false },
      ],
  },
  {
    question:"¿Cuál es la importancia de la resolución de conflictos en la convivencia?",
    answers: [
      { text: "Permite evitar los conflictos y mantener la armonía en las relaciones interpersonales.", correct: false },
      { text: "Ayuda a fortalecer las habilidades de negociación y comunicación.", correct: false },
      { text: "Promueve el desarrollo de la empatía y la tolerancia.", correct: false },
      { text: "Todas las opciones anteriores son correctas.", correct: true },
      ],
  },
  {
    question:"¿Qué implica la libertad con responsabilidad?",
    answers: [
      { text: "Tener la capacidad de actuar de acuerdo con nuestras propias decisiones, considerando las consecuencias de nuestros actos.", correct: true },
      { text: "Tener total libertad sin ninguna responsabilidad.", correct: false },
      { text: "Actuar sin considerar las consecuencias de nuestros actos.", correct: false },
      { text: "No tener restricciones ni normas que limiten nuestras acciones.", correct: false },
      ],
  },
  {
    question:"¿Cuál es la relación entre ética y ecología?",
    answers: [
      { text: "La ética se preocupa por la conservación del medio ambiente.", correct: true },
      { text: "La ética no tiene relación con la ecología.", correct: false },
      { text: "La ecología se ocupa de los aspectos morales de la sociedad.", correct: false },
      { text: "La ética y la ecología son términos intercambiables y se refieren a lo mismo.", correct: false },
      ],
  },  
  {
    question:"¿Cuál de las siguientes opciones representa un tipo de violencia?",
    answers: [
      { text: "Violencia verbal", correct: false },
      { text: "Violencia física", correct: false },
      { text: "Violencia psicológica", correct: false },
      { text: "Todas las opciones anteriores son correctas.", correct: true },
      ],
  },  
  {
    question:"¿Cuál es el concepto de sistema democrático?",
    answers: [
      { text: "Un sistema de gobierno en el cual el poder político se concentra en una sola persona.", correct: false },
      { text: "Un sistema de gobierno en el cual el poder político se divide entre varias personas o instituciones.", correct: true },
      { text: "Un sistema de gobierno en el cual el poder político se hereda por línea de sangre.", correct: false },
      { text: "Un sistema de gobierno en el cual el poder político se elige por sorteo.", correct: false },
      ],
  },
  {
    question:"¿Cuál es el concepto de derechos humanos?",
    answers: [
      { text: "Normas y principios que reconocen la dignidad y los derechos fundamentales de todas las personas.", correct: true },
      { text: "Reglas establecidas por el gobierno para limitar las acciones de los ciudadanos.", correct: false },
      { text: "Normas y principios que solo se aplican a los líderes políticos.", correct: false },
      { text: "Normas y principios que solo se aplican a los líderes políticos.", correct: false },
      ],
  },
  {
    question:"¿Qué implica la convivencia democrática?",
    answers: [
      { text: "Respeto a las diferencias y reconocimiento de la igualdad de derechos.", correct: true },
      { text: "Imposición de ideas y rechazo hacia aquellos que piensan diferente.", correct: false },
      { text: "Exclusión de ciertos grupos de la sociedad.", correct: false },
      { text: "Apoyo incondicional a las decisiones del gobierno.", correct: false },
      ],
  },
  {
    question:"¿Qué se entiende por niñez y adolescencia?",
    answers: [
      { text: "La etapa de la vida que va desde el nacimiento hasta los 18 años.", correct: true },
      { text: "La etapa de la vida que va desde los 18 hasta los 30 años.", correct: false },
      { text: "La etapa de la vida que va desde los 30 hasta los 60 años.", correct: false },
      { text: "La etapa de la vida que va desde los 30 hasta los 60 años.", correct: false },
      ],
  },
  {
    question:"¿Qué son los riesgos de la adolescencia?",
    answers: [
      { text: "Situaciones que pueden poner en peligro la integridad física y emocional de los jóvenes.", correct: true },
      { text: "Situaciones que solo afectan a los adultos.", correct: false },
      { text: "Situaciones que no representan ningún peligro para los jóvenes.", correct: false },
      { text: "Situaciones que solo ocurren durante la infancia.", correct: false },
      ],
  },
  {
    question:"¿Qué se entiende por capacidad de asertividad?",
    answers: [
      { text: "La habilidad para comunicarse de manera clara y respetuosa, expresando opiniones y defendiendo los propios derechos.", correct: true },
      { text: "La falta de habilidad para comunicarse de manera efectiva.", correct: false },
      { text: "La tendencia a imponer ideas y opiniones sin considerar las de los demás.", correct: false },
      { text: "La falta de autoconfianza y seguridad en uno mismo.", correct: false },
      ],
  },
  {
    question:"¿Cuál es la importancia de la prevención de enfermedades nutricionales?",
    answers: [
      { text: "Promover una alimentación saludable y equilibrada para prevenir enfermedades relacionadas con la nutrición.", correct: true },
      { text: "Limitar la ingesta de alimentos y mantener una dieta estricta.", correct: false },
      { text: "Ignorar la importancia de una buena nutrición en la salud.", correct: false },
      { text: "No tiene importancia, ya que las enfermedades nutricionales no existen.", correct: false },
      ],
  },
  {
    question:"¿Cuál de las siguientes afirmaciones describe un cambio químico?",
    answers: [
      { text: "Cambio de estado de la materia", correct: false },
      { text: "Cambio de color", correct: false },
      { text: "Formación de burbujas", correct: false },
      { text: "Combustión de un papel", correct: true },
      ],
  },
  {
    question:"¿Cuál de las siguientes opciones representa una mezcla homogénea?",
    answers: [
      { text: "Sal de mesa disuelta en agua", correct: true },
      { text: "Arena y agua", correct: false },
      { text: "Aceite y vinagre", correct: false },
      { text: "Agua y aceite", correct: false },
      ],
  },
  {
    question:"¿Cuál de las siguientes partículas subatómicas tiene una carga negativa?",
    answers: [
      { text: "Protón", correct: false },
      { text: "Neutrón", correct: false },
      { text: "Electrón", correct: true },
      { text: "Núcleo", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes elementos es un metal alcalino?",
    answers: [
      { text: "Hierro (Fe)", correct: false },
      { text: "Calcio (Ca)", correct: true },
      { text: "Oxígeno (O)", correct: false },
      { text: "Carbono (C)", correct: false },
      ],
  },
  {
    question:"¿Cuál de las siguientes ecuaciones químicas representa una reacción de neutralización?",
    answers: [
      { text: "HCl + NaOH → NaCl + H2O", correct: true },
      { text: "CH4 + O2 → CO2 + H2O", correct: false },
      { text: "Fe + S → FeS", correct: false },
      { text: "H2 + O2 → H2O", correct: false },
      ],
  },
  {
    question:"¿Cuál de las siguientes opciones representa la masa molar de un elemento?",
    answers: [
      { text: "La masa de un átomo de ese elemento", correct: false },
      { text: "La masa de un mol de átomos de ese elemento", correct: true },
      { text: "La masa de un ion de ese elemento", correct: false },
      { text: "La masa de un gramo de ese elemento", correct: false },
      ],
  },
  {
    question:"¿Cuál de las siguientes sustancias actúa como una base en una reacción química?",
    answers: [
      { text: "HCl (ácido clorhídrico)", correct: false },
      { text: "NaOH (hidróxido de sodio)", correct: true },
      { text: "CO2 (dióxido de carbono)", correct: false },
      { text: "H2SO4 (ácido sulfúrico)", correct: false },
      ],
  },
  {
    question:"¿Cuál de las siguientes ecuaciones químicas representa una reacción de oxidación-reducción?",
    answers: [
      { text: "NaCl + AgNO3 → NaNO3 + AgCl", correct: false },
      { text: "CaCO3 → CaO + CO2", correct: false },
      { text: "H2O → H2 + O2", correct: false },
      { text: "Fe + CuSO4 → FeSO4 + Cu", correct: true },
      ],
  },
  {
    question:"¿Cuál de las siguientes ecuaciones químicas representa la formación de una sal?",
    answers: [
      { text: "H2O + CO2 → H2CO3", correct: false },
      { text: "NaCl + H2O → NaOH + HCl", correct: false },
      { text: "NH3 + HCl → NH4Cl", correct: true },
      { text: "C6H12O6 → CO2 + H2O", correct: false },
      ],
  },
  {
    question:"Durante la síntesis del amoníaco (NH3) a partir de nitrógeno (N2) e hidrógeno (H2), se debe balancear la siguiente ecuación química:  __ N2 + __ H2 → __ NH3",
    answers: [
      { text: "1 N2 + 2 H2 → 2 NH3", correct: true },
      { text: "2 N2 + 3 H2 → 2 NH3", correct: false },
      { text: "3 N2 + 1 H2 → 2 NH3", correct: false },
      { text: "4 N2 + 6 H2 → 4 NH3", correct: false },
      ],
  },
  {
    question:"En la siguiente reacción química, identifica cuál sustancia se oxida y cuál se reduce:  Cu(s) + 2AgNO3(aq) → Cu(NO3)2(aq) + 2Ag(s)",
    answers: [
      { text: "Cu(s) se oxida, AgNO3(aq) se reduce.", correct: true },
      { text: "Cu(s) se reduce, AgNO3(aq) se oxida.", correct: false },
      { text: "Cu(NO3)2(aq) se oxida, Ag(s) se reduce.", correct: false },
      { text: "Cu(NO3)2(aq) se reduce, Ag(s) se oxida.", correct: false },
      ],
  },
  {
    question:"Identifica el agente reductor en la siguiente reacción química:  2Na(s) + Cl2(g) → 2NaCl(s)",
    answers: [
      { text: "Na(s)", correct: true },
      { text: "Cl2(g)", correct: false },
      { text: "NaCl(s)", correct: false },
      { text: "No hay agente reductor en esta reacción.", correct: false },
      ],
  },
  {
    question:"¿Cuál fue uno de los factores clave que permitió el surgimiento del Renacimiento en Europa?",
    answers: [
      { text: "La difusión de la imprenta.", correct: false },
      { text: "El establecimiento de los imperios coloniales.", correct: false },
      { text: "El declive del sistema feudal.", correct: true },
      { text: "El auge del comercio de especias.", correct: false },
      ],
  },
  {
    question:"¿Cuál fue el principal conflicto bélico de la Guerra Fría que tuvo lugar en el sureste asiático?",
    answers: [
      { text: "La Guerra de Vietnam.", correct: true },
      { text: "La Guerra de Corea.", correct: false },
      { text: "La Crisis de los Misiles de Cuba.", correct: false },
      { text: "La Guerra de las Malvinas.", correct: false },
      ],
  },
  {
    question:"¿Cuál fue una de las consecuencias más significativas de la Revolución Industrial en Europa?",
    answers: [
      { text: "El fortalecimiento de los sistemas monárquicos.", correct: false },
      { text: "El crecimiento de la clase obrera y la lucha por los derechos laborales.", correct: true },
      { text: "La expansión del comercio marítimo.", correct: false },
      { text: "La consolidación de los imperios coloniales europeos.", correct: false },
      ],
  },
  {
    question:"¿Cuál de las siguientes situaciones desencadenó la invasión de Estados Unidos a Afganistán en 2001?",
    answers: [
      { text: "El derrocamiento del régimen talibán por parte de los afganos.", correct: false },
      { text: "El ataque terrorista del 11 de septiembre contra las Torres Gemelas.", correct: true },
      { text: "La participación de Afganistán en la Guerra del Golfo.", correct: false },
      { text: "El conflicto entre Afganistán y Pakistán por disputas territoriales.", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes líderes fue una figura clave en la desaparición de la Unión Soviética y el fin de la Guerra Fría?",
    answers: [
      { text: "Joseph Stalin.", correct: false },
      { text: "Vladimir Lenin.", correct: false },
      { text: "Mikhail Gorbachev.", correct: true },
      { text: "Nikita Khrushchev.", correct: false },
      ],
  },
  {
    question:"Durante la guerra fría ¿Cuál fue el nombre del programa espacial liderado por Estados Unidos que tuvo como objetivo enviar un hombre a la Luna durante la Guerra Fría?",
    answers: [
      { text: "Proyecto Mercury.", correct: false },
      { text: "Programa Apolo.", correct: true },
      { text: "Proyecto Gemini.", correct: false },
      { text: "Programa Sputnik.", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes acontecimientos marcó el inicio de la transición democrática en México en la década de 1990?",
    answers: [
      { text: "La firma del Tratado de Libre Comercio de América del Norte (TLCAN).", correct: false },
      { text: "La nacionalización de la industria petrolera.", correct: false },
      { text: "La creación del Instituto Nacional Electoral (INE).", correct: true },
      { text: "El levantamiento del Ejército Zapatista de Liberación Nacional (EZLN).", correct: false },
      ],
  },
  {
    question:"¿Cuál fue uno de los principales aspectos del régimen de Porfirio Díaz en México?",
    answers: [
      { text: "La promoción de la reforma agraria.", correct: false },
      { text: "La implementación de políticas obreras y sindicales.", correct: false },
      { text: "El fomento de la inversión extranjera y el desarrollo económico.", correct: true },
      { text: "La implementación de una política exterior neutral.", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes acontecimientos fue un factor determinante en el proceso de independencia de México?",
    answers: [
      { text: "La unión de las agrupaciones caudillitas en el Norte y Sur del país. ", correct: false },
      { text: "La Constitución de Cádiz.", correct: true },
      { text: "La Expedición de los 30.000.", correct: false },
      { text: "Las alianzas entre agrupaciones indígenas subyugadas por la tiranía de los penisulares. ", correct: false },
      ],
  },
  {
    question:"¿Cuál fue una de las principales consecuencias de la intervención francesa en México?",
    answers: [
      { text: "La firma del Tratado de Guadalupe Hidalgo.", correct: false },
      { text: "La instauración del régimen de Porfirio Díaz.", correct: false },
      { text: "La consolidación del Segundo Imperio Mexicano.", correct: true },
      { text: "La promulgación de la Constitución de 1857.", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes presidentes mexicanos implementó la estrategia de seguridad conocida como ''Guerra contra el narcotráfico''?",
    answers: [
      { text: "Miguel de la Madrid.", correct: false },
      { text: "Vicente Fox", correct: false },
      { text: "Felipe Calderón", correct: true },
      { text: "López Obrador", correct: false },
      ],
  },
  {
    question:"Durante el periodo revolucionario en México, se promulgó una nueva constitución que buscaba establecer los derechos y la organización política del país. ¿Cuál de las siguientes características NO se encuentra presente en la Constitución de 1917?",
    answers: [
      { text: "La protección de los derechos laborales.", correct: false },
      { text: "La redistribución de tierras y la garantía de la propiedad ejidal.", correct: false },
      { text: "Elecciones libres y democráticas cada 6 años.", correct: true },
      { text: "La separación Iglesia-Estado y la restricción de la influencia eclesiástica en la educación.", correct: false },
      ],
  },
  {
    question:"¿Qué capa de la atmósfera es responsable de la protección contra la radiación ultravioleta del sol?",
    answers: [
      { text: "Estratosfera.", correct: true },
      { text: "Troposfera.", correct: false },
      { text: "Termosfera.", correct: false },
      { text: "Mesosfera.", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes recursos naturales es renovable?",
    answers: [
      { text: "Petróleo.", correct: false },
      { text: "Carbón.", correct: false },
      { text: "Madera.", correct: true },
      { text: "Gas natural.", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes términos se refiere a la cantidad total de personas que viven en un área determinada?",
    answers: [
      { text: "Población absoluta.", correct: true },
      { text: "Densidad poblacional.", correct: false },
      { text: "Asentamientos humanos.", correct: false },
      { text: "Riesgos poblacionales.", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes factores puede impulsar los movimientos migratorios?",
    answers: [
      { text: "Cambios climáticos.", correct: false },
      { text: "Desarrollo económico.", correct: false },
      { text: "Guerras y conflictos.", correct: false },
      { text: "Todos los anteriores.", correct: true },
      ],
  },
  {
    question:"¿Cuál de las siguientes actividades económicas es más común en áreas rurales de México?",
    answers: [
      { text: "Turismo.", correct: false },
      { text: "Manufactura.", correct: false },
      { text: "Agricultura.", correct: true },
      { text: "Servicios financieros.", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes espacios geográficos es considerado como soberanía nacional de México?",
    answers: [
      { text: "Islas Malvinas.", correct: false },
      { text: "Islas Galápagos.", correct: false },
      { text: "Islas Canarias.", correct: false },
      { text: "Islas Revillagigedo.", correct: true },
      ],
  },
  {
    question:"¿Cuál de las siguientes líneas imaginarias divide la Tierra en hemisferio occidental y oriental?",
    answers: [
      { text: "Ecuador.", correct: false },
      { text: "Meridiano de Greenwich.", correct: true },
      { text: "Trópico de Cáncer.", correct: false },
      { text: "Trópico de Capricornio.", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes minerales es uno de los principales recursos mineros de México?",
    answers: [
      { text: "Oro.", correct: false },
      { text: "Hierro.", correct: false },
      { text: "Uranio.", correct: false },
      { text: "Cobre.", correct: true },
      ],
  },
  {
    question:"¿Cuál de los siguientes sistemas montañosos es considerado el más alto del mundo?",
    answers: [
      { text: "Los Andes.", correct: false },
      { text: "Los Alpes.", correct: false },
      { text: "El Himalaya.", correct: true },
      { text: "Las Montañas Rocosas.", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes usos horarios corresponde a la Ciudad de México?",
    answers: [
      { text: "GMT-3.", correct: false },
      { text: "GMT-5.", correct: true },
      { text: "GMT-7.", correct: false },
      { text: "GMT-9.", correct: false },
      ],
  },
  {
    question:"¿Cuál de los siguientes océanos baña las costas occidentales de México?",
    answers: [
      { text: "Océano Atlántico.", correct: false },
      { text: "Océano Índico.", correct: false },
      { text: "Océano Pacífico.", correct: true },
      { text: "Océano Ártico.", correct: false },
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
//Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBoZzyrlKmUn9fLuchnE_HwvatqMt8OUzM",
  authDomain: "quizz-9da90.firebaseapp.com",
  projectId: "quizz-9da90",
  storageBucket: "quizz-9da90.appspot.com",
  messagingSenderId: "744058992519",
  appId: "1:744058992519:web:b9af18040b42ebbc6b4522"
};
//Inicialización de Firebase
firebase.initializeApp(firebaseConfig);

const db= firebase.firestore();
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
  nextButton.innerHTML = "Finalizar Examen";
  nextButton.style.display = "block";
  nextButton.addEventListener("click", redirectToIndex);
  
  //Guardar el puntaje en el localStorage
  saveScoreToFirestore(score);
}

function redirectToIndex() {
  window.location.href = "index.html";
}

function saveScoreToFirestore(score){
  db.collection("scores")
  .add({ score: score})
  .then((docRef)=>{
    console.log("Puntaje enviado exitosamente con ID:",docRef.id);
  })
  .catch((error)=>{
      console.error("Error al enviar el puntaje:",error);
  });
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

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60;

  const countDown = new Date().getTime() + 2 * hour, // Retroceso de 2 horas
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("hours").innerText = Math.floor(distance / hour);
      document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      );
      document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      );

      // Hacer algo cuando se alcance el tiempo deseado
      if (distance < 0) {
        document.getElementById("countdown").style.display = "none";
        showScore();
        clearInterval(x);
      }
    }, 0);
})();

function registrar() {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var escuela = document.getElementById("escuela").value;
  
 guardarEnFirebase(nombres, apellidos, correo, escuela);
  }
  
  // Función para guardar los datos en Firebase
  function guardarEnFirebase(nombres, apellidos, correo, escuela) {
    scoresCollection
      .add({
        nombres: nombres,
        apellidos: apellidos,
        correo: correo,
        escuela: escuela
      })
      .then(function(docRef) {
        console.log("Datos guardados correctamente. ID del documento:", docRef.id);
      })
      .catch(function(error) {
        console.error("Error al guardar los datos:", error);
      });
  }
  
  
  
  
