import {
  BarChart3,
  CalendarDays,
  ClipboardCheck,
} from "lucide-react";

import { motion } from "framer-motion";

import { encuesta } from "../data/encuesta";

import StatCard from "./StatCard";
import SurveyChart from "./SurveyChart";
import SurveySummary from "./SurveySummary";

import styles from "../styles/SurveyAnalysis.module.css";

function SurveyAnalysis() {
  return (
    <section
      className={styles.analysis}
      id="analisis"
      aria-labelledby="survey-title"
    >
      {/* ENCABEZADO */}
      <motion.div
        className={styles.analysisHeader}
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        <div>
          <span className={styles.eyebrow}>
            <BarChart3 size={16} />

            ANÁLISIS DESCRIPTIVO
          </span>

          <h2 id="survey-title">
            {encuesta.titulo}
          </h2>

          <p>
            {encuesta.subtitulo}
          </p>
        </div>

        <div className={styles.surveyMetadata}>
          <div>
            <ClipboardCheck size={18} />

            <span>
              <strong>
                {encuesta.totalRespuestas}
              </strong>

              respuestas
            </span>
          </div>

          <div>
            <CalendarDays size={18} />

            <span>
              {encuesta.fecha}
            </span>
          </div>
        </div>
      </motion.div>

      {/* NOTA METODOLÓGICA */}
      <div className={styles.methodologyNote}>
        <span>MUESTRA</span>

        <p>
          El análisis se basa en{" "}
          <strong>
            {encuesta.totalRespuestas} respuestas
          </strong>
          . Los porcentajes describen exclusivamente
          las respuestas obtenidas y no representan
          necesariamente a la población general.
        </p>
      </div>

      {/* INDICADORES */}
      <div className={styles.statsGrid}>
        {encuesta.indicadores.map(
          (indicador, index) => (
            <StatCard
              key={indicador.id}
              {...indicador}
              index={index}
            />
          )
        )}
      </div>

      {/* PREGUNTAS */}
      <div className={styles.questionsHeader}>
        <span>
          RESULTADOS POR PREGUNTA
        </span>

        <h3>
          Exploración de las respuestas
        </h3>

        <p>
          Cada gráfica representa la distribución
          obtenida en una de las preguntas de la
          encuesta.
        </p>
      </div>

      <div className={styles.questionsGrid}>
        {encuesta.preguntas.map(
          (pregunta, index) => (
            <motion.article
              className={`${styles.questionCard} ${
                pregunta.id ===
                  "consecuencias" ||
                pregunta.id ===
                  "identificacion"
                  ? styles.questionWide
                  : ""
              }`}
              key={pregunta.id}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay:
                  (index % 2) * 0.08,
              }}
            >
              <div
                className={
                  styles.questionHeader
                }
              >
                <span
                  className={
                    styles.questionNumber
                  }
                >
                  {pregunta.numero}
                </span>

                <h3>
                  {pregunta.pregunta}
                </h3>
              </div>

              <SurveyChart
                tipo={pregunta.tipo}
                datos={pregunta.datos}
                total={
                  encuesta.totalRespuestas
                }
              />

              <div
                className={
                  styles.analysisText
                }
              >
                <span>
                  ANÁLISIS DESCRIPTIVO
                </span>

                <p>
                  {pregunta.analisis}
                </p>
              </div>
            </motion.article>
          )
        )}
      </div>

      {/* INTERPRETACIÓN FINAL */}
      <SurveySummary />
    </section>
  );
}

export default SurveyAnalysis;