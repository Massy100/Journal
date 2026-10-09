/*
===========================================================
 JOURNAL DEEPFAKE - BASE DE DATOS LOCAL DE CASOS
===========================================================

Este proyecto NO utiliza backend ni base de datos.

Toda la información se encuentra en este array.

-----------------------------------------------------------
CÓMO AGREGAR UN CASO NUEVO
-----------------------------------------------------------

1. Copia uno de los objetos existentes.
2. Pégalo al final del array.
3. Cambia el ID por uno que NO exista.

   Ejemplo:
   id: "caso-5"

4. Cambia:
   - nombre
   - imagen
   - fecha
   - involucrados
   - descripcion
   - resolucion

5. Si el caso ya tiene información definitiva puedes cambiar:

   estado: "Pendiente"

   por:

   estado: "Documentado"

6. NO necesitas modificar el carrusel.

El sistema utiliza automáticamente:

casos.length

para conocer cuántos casos existen.

===========================================================
*/
import caso1 from "../img/caso1.jpg";
import caso4 from "../img/caso4.jpg";
import caso2 from "../img/caso2.jpg";

export const casos = [
  {
    id: "caso-1",

    nombre: "Paris Hilton: Cazando a Mr. Deepfake",

    imagen: caso1,

    fecha: "22 de enero de 2026",

    involucrados: [
      "Paris Hilton",
      "Alexandria Ocasio-Cortez",
      "Congreso de Estados Unidos"
    ],

    fuentes: [
    {
      nombre:
        "El País - Paris Hilton recuerda la filtración de su vídeo sexual para promover una ley contra el deepfake",
      url: "https://elpais.com/gente/2026-01-23/paris-hilton-recuerda-la-filtracion-de-su-video-sexual-para-promover-una-ley-contra-el-deepfake-lo-llamaron-escandalo-pero-fue-abuso.html",
    },

    {
      nombre:
        "Euronews - Paris Hilton se suma a la lucha contra los deepfakes",
      url: "https://es.euronews.com/next/2026/01/23/paris-hilton-se-suma-a-la-lucha-contra-los-deepfakes",
    },

    {
      nombre:
        "Infobae - Paris Hilton revive el trauma de su video filtrado y exige justicia contra los deepfakes",
      url: "https://www.infobae.com/entretenimiento/2026/01/23/paris-hilton-revive-el-trauma-de-su-video-filtrado-y-exige-justicia-ni-siquiera-habia-palabras-para-lo-que-me-hicieron/",
    },
  ],

    descripcion:
      "Paris Hilton ha enfrentado durante años problemas relacionados con la exposición pública, la privacidad y la difusión de contenido íntimo sin consentimiento.\n\n" +

      "En 2003 se difundió un video íntimo suyo sin su autorización, hecho que posteriormente describió como una forma de abuso. Años más tarde, documentales como The American Meme y This Is Paris mostraron aspectos más personales de su vida y ayudaron a reforzar su participación en campañas relacionadas con los derechos de las víctimas.\n\n" +

      "En enero de 2026, Hilton denunció públicamente la circulación de imágenes sexuales falsas generadas con inteligencia artificial y afirmó que existían más de 100,000 deepfakes explícitos utilizando su imagen.\n\n" +

      "Su caso muestra cómo la inteligencia artificial puede ampliar problemas ya existentes de privacidad y consentimiento, permitiendo crear contenido íntimo falso a partir de fotografías o imágenes públicas de una persona.",
    
    resolucion:
      "Paris Hilton apoyó públicamente la Ley DEFIANCE, una propuesta orientada a ofrecer herramientas legales a las víctimas de deepfakes sexuales creados o distribuidos sin consentimiento. El caso se convirtió en parte del debate sobre inteligencia artificial, consentimiento, privacidad y responsabilidad digital.",

    estado: "Documentado"
  },
  {
    id: "caso-2",

    nombre: "Profesor de Baltimore es arrestado por un presunto Deepfake",

    imagen: caso2,

    fecha: "24 de Abril del 2024",

    involucrados: [
      "Eric Eiswert - Director de Pikesville High School",
      "Dazhon Darien - Profesor y director deportivo",
      "Baltimore County Police Department - Policía del condado de Baltimore",
      "https://www.bbc.com/news/world-us-canada-68907895",
    ],

    descripcion:
      "En abril de 2024, Dazhon Darien, un profesor y director deportivo de Pikesville High School, Maryland, fue arrestado por su presunta participación en la creación de un audio falso mediante inteligencia artificial. La grabación imitaba la voz del director Eric Eiswert e incluía comentarios racistas y antisemitas. El audio se difundió en redes sociales y provocó indignación en la comunidad educativa. Eiswert recibió amenazas y tuvo que afrontar las consecuencias de una grabación que, según el análisis forense, no era auténtica. Los investigadores sospecharon que Darien habría creado el contenido como represalia por una investigación laboral y financiera en su contra.",

    resolucion:
      "Resolución pendiente de investigación. Agregar aquí información sobre verificaciones, declaraciones oficiales o resultados obtenidos.",

    estado: "Investigado",
  },

  {
    id: "caso-3",

    nombre: "Caso Placeholder 3",

    imagen:
      "https://placehold.co/1200x800/0c1b24/72f1cf?text=Caso+Placeholder+3",

    fecha: "Fecha por definir",

    involucrados: [
      "Involucrado principal - Pendiente",
      "Fuente del contenido - Pendiente",
    ],

    descripcion:
      "Descripción pendiente de investigación. Aquí podrá registrarse cómo se difundió el deepfake, las técnicas identificadas y la evidencia utilizada durante el análisis.",

    resolucion:
      "Resolución pendiente. Documentar en esta sección qué ocurrió después de identificar el material como potencialmente manipulado.",

    estado: "Placeholder",
  },

  {
    id: "caso-4",

    nombre: "\"Efecto Taylor Swift\": Taylor Swift vs. Deepfake (Ley No AI FRAUD y Ley NO FAKES)",

    imagen: caso4,

    fecha: "Enero de 2024",

    involucrados: [
      "Taylor Swift",
      "Microsoft (Satya Nadella)",
      "X (antes Twitter)",
      "SAG-AFTRA y RAINN",
      "Congreso de Estados Unidos",
      "Swifties"
    ],

    fuentes: [
      {
        nombre:
          "Wikipedia - Taylor Swift deepfake pornography controversy",
        url: "https://en.wikipedia.org/wiki/Taylor_Swift_deepfake_pornography_controversy",
      },
    ],

    descripcion:
      "A finales de enero de 2024 comenzaron a circular en redes sociales, principalmente en 4chan y X (antes Twitter), imágenes sexuales falsas de la cantante Taylor Swift generadas con inteligencia artificial. Una de las publicaciones llegó a acumular más de 47 millones de visualizaciones antes de ser eliminada.\n\n" +

      "Según investigaciones de la firma Graphika, el origen de las imágenes se rastreó hasta una comunidad de 4chan. Además, miembros de un grupo de Telegram discutieron cómo evadir los filtros de seguridad de herramientas como Microsoft Designer para crear este tipo de contenido sin consentimiento.\n\n" +

      "Organizaciones como RAINN y SAG-AFTRA condenaron las imágenes, y el CEO de Microsoft, Satya Nadella, las calificó como \"alarmantes y terribles\". Los fans de la artista, conocidos como Swifties, impulsaron el hashtag #ProtectTaylorSwift y llenaron las búsquedas relacionadas con contenido positivo para reducir la visibilidad de las imágenes falsas.\n\n" +

      "El caso mostró que las víctimas de deepfakes sexuales no son solo celebridades: la mayoría de los afectados son mujeres, y el alcance de Swift hizo que el problema recibiera una atención pública sin precedentes. En agosto de 2025 surgió una polémica similar cuando se reportó que la herramienta Grok Imagine generó contenido explícito de la artista a partir de una instrucción aparentemente inocente.",

    resolucion:
      "Microsoft reforzó su generador de imágenes para evitar nuevos abusos, y X suspendió cuentas y bloqueó temporalmente las búsquedas del nombre de la artista. La Casa Blanca calificó los hechos de \"alarmantes\" y pidió que las plataformas y el Congreso tomaran medidas.\n\n" +

      "El caso impulsó el debate legislativo en Estados Unidos: se presentó un proyecto bipartidista que permitiría a las víctimas demandar a quienes creen o distribuyan falsificaciones digitales sin consentimiento, y cobraron relevancia propuestas como la No AI FRAUD Act y la NO FAKES Act, orientadas a proteger la voz y la imagen de las personas frente a réplicas digitales no autorizadas. La Unión Europea también alcanzó en febrero de 2024 un acuerdo para penalizar la pornografía deepfake. Este impacto se conoce como el \"Efecto Taylor Swift\".",

    estado: "Documentado",
  },

  /*
  =========================================================

  EJEMPLO PARA AGREGAR EL CASO 5:

  {
    id: "caso-5",
    nombre: "Nombre del nuevo caso",
    imagen: "/images/caso-5.jpg",
    fecha: "15 de enero de 2027",
    involucrados: [
      "Persona A",
      "Persona B"
    ],
    descripcion:
      "Descripción del nuevo caso...",
    resolucion:
      "Resolución documentada...",
    estado: "Documentado",
  },

  =========================================================
  */
];
