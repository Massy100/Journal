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
import caso3 from "../img/caso3.jpg";

export const casos = [
  {
    id: "caso-1",

    nombre: "Paris Hilton: Cazando a Mr. Deepfake",

    imagen: caso1,

    antecedentes:
      "Paris Hilton es una empresaria, cantante, actriz, DJ y figura mediática estadounidense cuya vida privada ha estado expuesta públicamente desde comienzos de los años 2000. En 2003, un video íntimo suyo fue difundido sin consentimiento y durante años fue tratado por buena parte de los medios y la cultura popular como un escándalo, en lugar de como una forma de explotación y violencia digital.\n\n" +

      "El caso se desarrolla dentro de un contexto sociocultural en el que las mujeres han sido especialmente vulnerables a la sexualización, la exposición no consentida y el uso de su imagen como forma de humillación pública. Los deepfakes sexuales representan una extensión tecnológica de estas prácticas, ya que permiten fabricar contenido íntimo falso sin participación ni consentimiento de la persona afectada.",

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

    consecuencias:
    
      "En el caso de Paris Hilton no existe un único responsable identificado y condenado a prisión por la creación o difusión de los deepfakes sexuales denunciados en 2026. Las imágenes falsas forman parte de un problema más amplio de contenido generado y distribuido en internet por múltiples actores, lo que dificulta atribuir responsabilidad penal a una sola persona.\n\n" +

      "En cuanto al antecedente de 2003, Rick Salomon, expareja de Hilton y coprotagonista del video íntimo posteriormente comercializado como 1 Night in Paris, no recibió una condena de cárcel por ese hecho. El conflicto derivó principalmente en demandas civiles y acuerdos económicos. La demanda de privacidad presentada por Hilton fue desestimada y posteriormente se alcanzaron acuerdos relacionados con la distribución del material, pero no consta una sentencia penal de prisión contra Salomon por la difusión del video.\n\n" +

      "Para Hilton, las consecuencias personales fueron prolongadas. Durante años explicó que la difusión del video afectó su reputación, su privacidad y la forma en que era percibida públicamente. Con el tiempo reconstruyó su carrera como empresaria, artista y figura mediática, formó una familia y convirtió parte de sus experiencias personales en activismo. En 2026 continuaba trabajando en proyectos empresariales, musicales y documentales, además de participar en campañas relacionadas con los derechos de las víctimas y la protección de menores.\n\n" +

      "En el ámbito legislativo, la Ley DEFIANCE todavía no es una ley federal vigente. El proyecto S.1837 fue aprobado por el Senado de Estados Unidos el 13 de enero de 2026, pero hasta octubre de 2026 continúa pendiente de aprobación en la Cámara de Representantes y de la firma presidencial. Su objetivo es ampliar las herramientas civiles disponibles para que las víctimas de deepfakes sexuales no consentidos puedan demandar a quienes produzcan, distribuyan o gestionen este tipo de contenido en determinadas circunstancias.",

    estado: "Documentado"
  },
  {
    id: "caso-2",

    nombre: "Profesor de Baltimore es arrestado por un presunto Deepfake",

    imagen: caso2,

    antecedentes:"En enero de 2024, en una escuela secundaria de Maryland, Estados Unidos, se difundió una grabación que parecía mostrar al director Eric Eiswert haciendo comentarios racistas y antisemitas. Sin embargo, las investigaciones determinaron que el audio había sido creado mediante inteligencia artificial para imitar su voz. El caso estuvo relacionado con un conflicto laboral dentro de la institución",

    fecha: "24 de Abril del 2024",

    involucrados: [
      "Eric Eiswert - Director de Pikesville High School",
      "Dazhon Darien - Profesor y director deportivo",
      "Baltimore County Police Department - Policía del condado de Baltimore",
    ],
    
    fuentes: [
      {
      nombre: "Baltimore high school teacher arrested over deepfake racist audio of principal",
      url: "https://www.bbc.com/news/world-us-canada-68907895",
    }],

    descripcion:
      "En abril de 2024, Dazhon Darien, un profesor y director deportivo de Pikesville High School, Maryland, fue arrestado por su presunta participación en la creación de un audio falso mediante inteligencia artificial. La grabación imitaba la voz del director Eric Eiswert e incluía comentarios racistas y antisemitas. El audio se difundió en redes sociales y provocó indignación en la comunidad educativa. Eiswert recibió amenazas y tuvo que afrontar las consecuencias de una grabación que, según el análisis forense, no era auténtica. Los investigadores sospecharon que Darien habría creado el contenido como represalia por una investigación laboral y financiera en su contra.",

    resolucion:
      "Las autoridades investigaron el origen de la grabación y determinaron que había sido manipulada mediante inteligencia artificial. Para prevenir casos similares, es importante verificar la autenticidad de los audios antes de compartirlos, utilizar herramientas de análisis digital y establecer protocolos de investigación dentro de las instituciones.",

    consecuencias:
    "- Daño a la reputación: el director fue acusado injustamente de realizar comentarios discriminatorio.\n" +
    "- Amenazas: él y su familia recibieron amenazas.\n" +
    "- Conflictos escolares: el incidente generó preocupación entre estudiantes, padres y docentes.\n" +
    "- Consecuencias legales: el empleado señalado como responsable fue arrestado y acusado de varios delitos.\n" +
    "- Riesgos tecnológicos: el caso evidenció cómo la inteligencia artificial puede utilizarse para difundir información falsa.\n"
    ,
    
    estado: "Investigado",
  },

  {
    id: "caso-3",

    nombre: "Hombre que realizó deepfakes sexuales de niñas de edad escolar es sentenciado a prisión",

    imagen: caso3,

    fecha: "2 de septiembre de 2026",

    involucrados: [
      "Involucrado principal - Antonio Rotondo",
      "Fuente del contenido - Corte Distrital de Brisbane",
    ],

    fuentes: [
      {
      nombre: "Jail time for man who made deepfake images of schoolgirls",
      url: "https://www.brisbanetimes.com.au/national/queensland/jail-time-for-man-who-made-deepfake-images-of-schoolgirls-20260902-p60tuy.html"
    }],
    antecedentes:
      "En septiembre de 2023, Antonio Rotondo, ex desarrollador de software modificó imágenes de varias mujeres y niñas, descargadas del sitio de una escuela de Queensland, utilizando un programa de inteligencia artificial y deepfake, generando imágenes que incluían desnudos y sexualizaban a las víctimas. Posteriormente, envió estas imágenes a administradores de diferentes escuelas y eventos de moda.",

    descripcion:
      "Antonio Rotondo, un hombre de 56 años, envió fotografías manipuladas de varias mujeres y niñas de edad escolar, incluida una adolescente de 13 años. Descargó fotografías públicas del staff y estudiantes de una reconocida escuela de Queensland; utilizando un programa de inteligencia artificial y deepfake, generó imagenes que incluían desnudos y sexualizaban a las víctimas, para posteriormente enviarlas a administradores de diferentes escuelas y eventos de moda en septiembre de 2023.",

    resolucion:
      "Luego de un juicio de 6 días, Rotondo fue sentenciado a 2 años de prisión, condendao  por 11 cargos de acoso y 5 cargos por distribución de contenido de explotación sexual de menores. La Corte Distrital de Brisbane destacó que el acusado había mostrado un desprecio total por las víctimas y la sociedad, y que su comportamiento era inaceptable y dañino.",

    consecuencias:
    "Durante el juicio, las víctimas mencionaron que el hecho no solo las impactaba a ellos, sino que también a sus familias. Hablaron de como se sintieron humilladas y violadas en su privacidad.",

    estado: "Finalizado",
  }, 

  {
    id: "caso-4",

    nombre: "\"Efecto Taylor Swift\": Taylor Swift vs. Deepfake (Ley No AI FRAUD y Ley NO FAKES)",

    imagen: caso4,

    antecedentes:
      "Cuando estalló el caso, en enero de 2024, la inteligencia artificial generativa ya se había popularizado y existía una economía de pornografía deepfake que afectaba sobre todo a mujeres, famosas y anónimas. En Estados Unidos no había una ley federal específica que sancionara este tipo de contenido, y las reglas de las plataformas, como la política de \"medios sintéticos y manipulados\" de X, eran criticadas por su poca eficacia.\n\n" +

      "Taylor Swift se encontraba en el punto más alto de su fama y, a lo largo de su carrera, había sido blanco de misoginia y de ataques que buscaban humillarla públicamente. Las imágenes no surgieron de la nada: según investigaciones periodísticas, nacieron en una comunidad de 4chan y en un grupo de Telegram cuyos miembros buscaban formas de burlar los filtros de herramientas como Microsoft Designer. Fue un ataque organizado y tratado como un \"reto\", no un hecho aislado.\n\n" +

      "Aunque el caso se hizo famoso por tratarse de una celebridad, el problema ya existía para personas comunes: la mayoría de las víctimas de deepfakes sexuales son mujeres, y muchas no cuentan con los recursos, la fama ni la red de apoyo para exigir que el contenido sea eliminado.",

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
      {
        nombre:
          "Senador Blackburn - NO FAKES Act avanza en el Comité Judicial del Senado (18 de junio de 2026)",
        url: "https://www.blackburn.senate.gov/2026/6/blackburn-coons-bipartisan-bill-to-protect-individuals-and-creators-from-deepfakes-passes-senate-judiciary-committee",
      },
      {
        nombre:
          "Roll Call - Paris Hilton y legisladores piden a la Cámara aprobar la Ley DEFIANCE",
        url: "https://rollcall.com/2026/01/22/paris-hilton-joins-house-advocates-behind-deepfakes-bill/",
      },
      {
        nombre:
          "Recording Academy - Estado de la Ley NO FAKES",
        url: "https://www.grammy.com/advocacy/issues-policy/no-fakes-act/",
      },
    ],

    descripcion:
      "A finales de enero de 2024 comenzaron a circular en redes sociales, principalmente en 4chan y X (antes Twitter), imágenes sexuales falsas de la cantante Taylor Swift generadas con inteligencia artificial. Una de las publicaciones llegó a acumular más de 47 millones de visualizaciones antes de ser eliminada.\n\n" +

      "Según investigaciones de la firma Graphika, el origen de las imágenes se rastreó hasta una comunidad de 4chan. Además, miembros de un grupo de Telegram discutieron cómo evadir los filtros de seguridad de herramientas como Microsoft Designer para crear este tipo de contenido sin consentimiento.\n\n" +

      "Organizaciones como RAINN y SAG-AFTRA condenaron las imágenes, y el CEO de Microsoft, Satya Nadella, las calificó como \"alarmantes y terribles\". Los fans de la artista, conocidos como Swifties, impulsaron el hashtag #ProtectTaylorSwift y llenaron las búsquedas relacionadas con contenido positivo para reducir la visibilidad de las imágenes falsas.\n\n" +

      "El caso mostró que las víctimas de deepfakes sexuales no son solo celebridades: la mayoría de los afectados son mujeres, y el alcance de Swift hizo que el problema recibiera una atención pública sin precedentes. En agosto de 2025 surgió una polémica similar cuando se reportó que la herramienta Grok Imagine generó contenido explícito de la artista a partir de una instrucción aparentemente inocente.",

    resolucion:
      "Microsoft reforzó su generador de imágenes para evitar nuevos abusos, y X suspendió cuentas y bloqueó temporalmente las búsquedas del nombre de la artista. La Casa Blanca calificó los hechos de \"alarmantes\" y pidió medidas a las plataformas y al Congreso. El caso impulsó el debate sobre leyes como la DEFIANCE, la No AI FRAUD y la NO FAKES, un impacto conocido como el \"Efecto Taylor Swift\".",

    consecuencias:
      "Sobre los responsables: hasta donde se ha informado públicamente, no hubo detenciones ni condenas contra quienes crearon o difundieron las imágenes. Se identificó su origen en comunidades en línea, pero no a personas concretas que enfrentaran un juicio. Una fuente cercana a Swift dijo que se evaluaban acciones legales, pero no se ha reportado una demanda pública.\n\n" +

      "Sobre las plataformas: las imágenes se siguieron compartiendo en otras redes como Instagram y Reddit pese a las suspensiones de cuentas. X bloqueó las búsquedas del nombre de la artista del 27 al 29 de enero de 2024. En agosto de 2025 se reportó una polémica parecida con la herramienta Grok Imagine, lo que muestra que el problema no quedó resuelto.\n\n" +

      "Sobre las leyes (estado a octubre de 2026): " +
      "(1) La Ley DEFIANCE, presentada en enero de 2024, permitiría a las víctimas demandar civilmente. El Senado la aprobó por unanimidad en 2024 y otra vez el 13 de enero de 2026, pero la Cámara de Representantes todavía no la vota, por lo que aún NO es ley. " +
      "(2) La No AI FRAUD Act, presentada en la Cámara en enero de 2024, no llegó a aprobarse. " +
      "(3) La Ley NO FAKES, que protege la voz e imagen frente a réplicas digitales no autorizadas, fue reintroducida el 20 de mayo de 2026 y avanzó por unanimidad en el Comité Judicial del Senado el 18 de junio de 2026, pero el 30 de septiembre de 2026 el senador Ted Cruz bloqueó su aprobación rápida en el pleno. Sigue en proceso. " +
      "(4) La Ley TAKE IT DOWN, que tipifica como delito federal publicar imágenes íntimas no consentidas, incluidas las generadas con IA, fue aprobada en 2025 y ya está vigente. " +
      "Además, la Unión Europea acordó en febrero de 2024 penalizar la pornografía deepfake, con aplicación prevista para mediados de 2027.\n\n" +

      "Sobre las víctimas y el legado: Swift convirtió, sin proponérselo, un problema invisible en un tema de agenda pública. Su caso se sigue citando en el Congreso: el senador Chris Coons mencionó su nombre al defender la Ley NO FAKES, junto al de una estudiante de secundaria, para recordar que la protección debe alcanzar a todas las personas. Para las víctimas comunes, en cambio, la ayuda legal sigue siendo limitada mientras la Ley DEFIANCE no se apruebe en la Cámara.",

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
