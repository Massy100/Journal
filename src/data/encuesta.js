/*
===========================================================
 JOURNAL DEEPFAKE - DATOS DE LA ENCUESTA
===========================================================

Fuente:
Encuesta "Deepfake" realizada el 19 de octubre de 2026.

Total de respuestas: 20
===========================================================
*/

export const encuesta = {
  titulo: "Percepción social sobre los deepfakes",

  subtitulo:
    "Análisis descriptivo de conocimientos, riesgos percibidos y medidas de prevención",

  totalRespuestas: 20,

  fecha: "19 de octubre de 2026",

  indicadores: [
    {
      id: "conocimiento",
      valor: 75,
      sufijo: "%",
      titulo: "Conoce el término",
      descripcion:
        "15 de 20 participantes habían escuchado anteriormente el término deepfake.",
    },

    {
      id: "riesgo",
      valor: 95,
      sufijo: "%",
      titulo: "Percibe un riesgo social",
      descripcion:
        "19 de 20 participantes consideran que los deepfakes representan un riesgo para la sociedad.",
    },

    {
      id: "herramientas",
      valor: 85,
      sufijo: "%",
      titulo: "Desconoce herramientas",
      descripcion:
        "17 de 20 participantes no conocen herramientas tecnológicas para detectar deepfakes.",
    },

    {
      id: "plataformas",
      valor: 90,
      sufijo: "%",
      titulo: "Exige acción de plataformas",
      descripcion:
        "18 de 20 consideran que las plataformas deberían detectar y etiquetar contenido generado o manipulado con IA.",
    },
  ],

  preguntas: [
    {
      id: "conocimiento",
      numero: "01",
      pregunta:
        "¿Ha escuchado anteriormente el término deepfake?",

      tipo: "donut",

      datos: [
        {
          nombre: "Sí",
          valor: 15,
        },
        {
          nombre: "No",
          valor: 5,
        },
      ],

      analisis:
        "La mayoría de las personas encuestadas ya había tenido algún contacto previo con el concepto de deepfake. El 75% indicó conocer el término, mientras que una cuarta parte de la muestra no lo había escuchado anteriormente.",
    },

    {
      id: "riesgo",
      numero: "02",
      pregunta:
        "¿Considera que los deepfakes representan un riesgo para la sociedad?",

      tipo: "donut",

      datos: [
        {
          nombre: "Sí",
          valor: 19,
        },
        {
          nombre: "No",
          valor: 1,
        },
      ],

      analisis:
        "Existe un alto nivel de preocupación dentro de la muestra. El 95% de los participantes considera que los deepfakes representan un riesgo para la sociedad, siendo este uno de los resultados con mayor consenso de toda la encuesta.",
    },

    {
      id: "consecuencias",
      numero: "03",
      pregunta:
        "¿Cuál considera que es la principal consecuencia de los deepfakes?",

      tipo: "bar",

      datos: [
        {
          nombre: "Fraude o estafa",
          valor: 8,
        },
        {
          nombre: "Daño a la reputación",
          valor: 5,
        },
        {
          nombre: "Desinformación",
          valor: 4,
        },
        {
          nombre: "Violación de la privacidad",
          valor: 3,
        },
      ],

      analisis:
        "El fraude o la estafa fue identificado como la principal consecuencia por el 40% de los participantes. Le siguen el daño a la reputación con 25%, la desinformación con 20% y la violación de la privacidad con 15%. Los resultados muestran que los riesgos percibidos abarcan dimensiones económicas, sociales y personales.",
    },

    {
      id: "identificacion",
      numero: "04",
      pregunta:
        "¿Cree que una persona puede identificar fácilmente un deepfake?",

      tipo: "bar",

      datos: [
        {
          nombre: "Depende del contenido",
          valor: 11,
        },
        {
          nombre: "No",
          valor: 8,
        },
        {
          nombre: "Sí",
          valor: 1,
        },
      ],

      analisis:
        "Solo una persona considera que un deepfake puede identificarse fácilmente. El 55% señaló que depende del contenido y el 40% respondió directamente que no. Esto evidencia una percepción general de dificultad para distinguir contenido auténtico de contenido manipulado.",
    },

    {
      id: "herramientas",
      numero: "05",
      pregunta:
        "¿Conoce alguna herramienta tecnológica para detectar deepfakes?",

      tipo: "donut",

      datos: [
        {
          nombre: "No",
          valor: 17,
        },
        {
          nombre: "Sí",
          valor: 3,
        },
      ],

      analisis:
        "El conocimiento de herramientas especializadas es considerablemente menor que el conocimiento general sobre deepfakes. El 85% de la muestra no conoce ninguna herramienta tecnológica para su detección.",
    },

    {
      id: "inteligencia-artificial",
      numero: "06",
      pregunta:
        "¿Considera necesario utilizar inteligencia artificial para detectar y mitigar los deepfakes?",

      tipo: "bar",

      datos: [
        {
          nombre: "Sí",
          valor: 11,
        },
        {
          nombre: "No",
          valor: 5,
        },
        {
          nombre: "No estoy seguro/a",
          valor: 4,
        },
      ],

      analisis:
        "El 55% considera necesario utilizar inteligencia artificial para combatir los deepfakes. Sin embargo, una cuarta parte no lo considera necesario y un 20% mantiene dudas, mostrando una opinión menos uniforme que en las preguntas relacionadas con riesgo social.",
    },

    {
      id: "plataformas",
      numero: "07",
      pregunta:
        "¿Las plataformas digitales deberían detectar y etiquetar contenido generado o manipulado mediante IA?",

      tipo: "donut",

      datos: [
        {
          nombre: "Sí",
          valor: 18,
        },
        {
          nombre: "No",
          valor: 2,
        },
      ],

      analisis:
        "Existe un amplio respaldo a una participación más activa de las plataformas digitales. El 90% considera que deberían implementar mecanismos para detectar y etiquetar contenido generado o manipulado mediante inteligencia artificial.",
    },
  ],
};