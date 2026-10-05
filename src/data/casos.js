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

export const casos = [
  {
    id: "caso-1",

    nombre: "Caso Placeholder 1",

    /*
      Puedes sustituir esta URL por:
      - Una URL externa
      - Una imagen alojada en /public
      - Ejemplo: "/images/caso-1.jpg"
    */
    imagen:
      "https://placehold.co/1200x800/101426/8df8ff?text=Caso+Placeholder+1",

    fecha: "Fecha por definir",

    involucrados: [
      "Involucrado 1 - Pendiente",
      "Involucrado 2 - Pendiente",
    ],

    descripcion:
      "Descripción pendiente de investigación. Aquí se documentará el contexto del deepfake, cómo fue detectado, dónde circuló y cuál fue su posible impacto.",

    resolucion:
      "Resolución pendiente. Esta sección deberá actualizarse cuando exista información verificable sobre las consecuencias, acciones tomadas o conclusión del caso.",

    estado: "Placeholder",
  },

  {
    id: "caso-2",

    nombre: "Caso Placeholder 2",

    imagen:
      "https://placehold.co/1200x800/171229/bb8cff?text=Caso+Placeholder+2",

    fecha: "Fecha por definir",

    involucrados: [
      "Link pendiente - Pendiente",
      "Link pendiente - Pendiente",
    ],

    descripcion:
      "Descripción pendiente de investigación. Este espacio está preparado para explicar el origen del contenido manipulado y los elementos relevantes para el análisis.",

    resolucion:
      "Resolución pendiente de investigación. Agregar aquí información sobre verificaciones, declaraciones oficiales o resultados obtenidos.",

    estado: "Pendiente",
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

    nombre: "Caso Placeholder 4",

    imagen:
      "https://placehold.co/1200x800/20111d/ff82c8?text=Caso+Placeholder+4",

    fecha: "Fecha por definir",

    involucrados: [
      "Persona afectada - Pendiente",
      "Investigador / Fuente - Pendiente",
    ],

    descripcion:
      "Descripción pendiente de investigación. Utiliza este apartado para presentar de manera breve y verificable los acontecimientos relacionados con el caso.",

    resolucion:
      "Resolución pendiente de investigación. Aquí podrá explicarse si hubo eliminación del contenido, desmentidos, acciones legales u otras consecuencias.",

    estado: "Pendiente",
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