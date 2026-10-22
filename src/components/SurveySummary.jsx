import {
  BrainCircuit,
  CircleAlert,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";

import styles from "../styles/SurveyAnalysis.module.css";

function SurveySummary() {
  return (
    <motion.section
      className={styles.summary}
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <div className={styles.summaryHeader}>
        <span>
          INTERPRETACIÓN GENERAL
        </span>

        <h3>
          ¿Qué nos dicen los resultados?
        </h3>

        <p>
          Los resultados permiten identificar
          tendencias dentro de la muestra encuestada,
          sin pretender generalizarlas a toda la
          población.
        </p>
      </div>

      <div className={styles.summaryGrid}>
        <article className={styles.finding}>
          <div className={styles.findingIcon}>
            <CircleAlert size={21} />
          </div>

          <div>
            <h4>
              Alta percepción del riesgo
            </h4>

            <p>
              El 95% de los participantes considera
              que los deepfakes representan un riesgo
              para la sociedad, mostrando un consenso
              considerable respecto a sus posibles
              efectos negativos.
            </p>
          </div>
        </article>

        <article className={styles.finding}>
          <div className={styles.findingIcon}>
            <SearchCheck size={21} />
          </div>

          <div>
            <h4>
              Brecha de conocimiento técnico
            </h4>

            <p>
              Aunque el 75% conoce el término
              deepfake, el 85% no conoce herramientas
              tecnológicas para detectarlos. Existe
              una diferencia importante entre conocer
              el problema y contar con recursos para
              enfrentarlo.
            </p>
          </div>
        </article>

        <article className={styles.finding}>
          <div className={styles.findingIcon}>
            <BrainCircuit size={21} />
          </div>

          <div>
            <h4>
              Dificultad para reconocerlos
            </h4>

            <p>
              Solo una de las veinte personas
              encuestadas considera que los deepfakes
              pueden identificarse fácilmente. La
              mayoría respondió que depende del
              contenido o que directamente no resulta
              sencillo reconocerlos.
            </p>
          </div>
        </article>

        <article className={styles.finding}>
          <div className={styles.findingIcon}>
            <ShieldCheck size={21} />
          </div>

          <div>
            <h4>
              Responsabilidad de las plataformas
            </h4>

            <p>
              El 90% considera necesario que las
              plataformas digitales incorporen
              mecanismos para detectar y etiquetar
              contenido generado o manipulado
              mediante inteligencia artificial.
            </p>
          </div>
        </article>
      </div>

      <div className={styles.summaryConclusion}>
        <span>CONCLUSIÓN DESCRIPTIVA</span>

        <p>
          La encuesta muestra una población
          mayoritariamente consciente de los riesgos
          asociados a los deepfakes, pero con un
          conocimiento técnico limitado sobre los
          mecanismos disponibles para identificarlos.
          Esto sugiere, dentro de la muestra estudiada,
          la importancia de fortalecer la
          alfabetización digital, divulgar
          herramientas de verificación y promover
          mecanismos tecnológicos de detección y
          etiquetado.
        </p>
      </div>
    </motion.section>
  );
}

export default SurveySummary;