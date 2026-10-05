import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Files,
} from "lucide-react";

import { motion } from "framer-motion";

import CaseCard from "./CaseCard";

import styles from "../styles/CaseCarousel.module.css";

function CaseCarousel({ cases }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedCaseId, setExpandedCaseId] =
    useState(null);

  if (!cases || cases.length === 0) {
    return (
      <div className={styles.empty}>
        <Files size={40} />

        <h3>No existen casos registrados</h3>

        <p>
          Agrega tu primer caso dentro de
          <code> src/data/casos.js</code>.
        </p>
      </div>
    );
  }

  const goToCase = (index) => {
    setActiveIndex(index);

    /*
      Al navegar cerramos cualquier expediente expandido
      para conservar una transición limpia.
    */
    setExpandedCaseId(null);
  };

  const previousCase = () => {
    const newIndex =
      activeIndex === 0
        ? cases.length - 1
        : activeIndex - 1;

    goToCase(newIndex);
  };

  const nextCase = () => {
    const newIndex =
      activeIndex === cases.length - 1
        ? 0
        : activeIndex + 1;

    goToCase(newIndex);
  };

  const handleCardClick = (index, caseId) => {
    /*
      Si hacemos click sobre una card que NO es la activa,
      primero pasa a convertirse en la card principal.

      Si hacemos click sobre la card activa,
      abre/cierra sus detalles.
    */

    if (index !== activeIndex) {
      setActiveIndex(index);
      setExpandedCaseId(null);
      return;
    }

    setExpandedCaseId((currentId) =>
      currentId === caseId ? null : caseId
    );
  };

  return (
    <section
      className={styles.carousel}
      aria-label="Carrusel de casos de investigación"
    >
      <div className={styles.topBar}>
        <div className={styles.casePosition}>
          CASO{" "}
          <strong>
            {String(activeIndex + 1).padStart(2, "0")}
          </strong>

          <span>/</span>

          {String(cases.length).padStart(2, "0")}
        </div>

        <p>
          Haz clic sobre el caso activo para abrir su
          expediente.
        </p>
      </div>

      <motion.div
        layout
        className={styles.cardsContainer}
      >
        {cases.map((caseItem, index) => (
          <CaseCard
            key={caseItem.id}
            caseItem={caseItem}
            index={index}
            isActive={index === activeIndex}
            isExpanded={
              expandedCaseId === caseItem.id
            }
            onClick={() =>
              handleCardClick(index, caseItem.id)
            }
          />
        ))}
      </motion.div>

      <div className={styles.controls}>
        <button
          className={styles.navigationButton}
          onClick={previousCase}
          type="button"
        >
          <ArrowLeft size={18} />

          <span>Caso Anterior</span>
        </button>

        <div
          className={styles.indicators}
          aria-label="Seleccionar caso"
        >
          {cases.map((caseItem, index) => (
            <button
              key={caseItem.id}
              type="button"
              aria-label={`Ir al caso ${index + 1}`}
              aria-current={
                index === activeIndex
                  ? "true"
                  : undefined
              }
              className={`${styles.indicator} ${
                index === activeIndex
                  ? styles.activeIndicator
                  : ""
              }`}
              onClick={() => goToCase(index)}
            >
              {index === activeIndex && (
                <motion.span
                  layoutId="activeIndicator"
                  className={styles.indicatorGlow}
                />
              )}
            </button>
          ))}
        </div>

        <button
          className={styles.navigationButton}
          onClick={nextCase}
          type="button"
        >
          <span>Caso Siguiente</span>

          <ArrowRight size={18} />
        </button>
      </div>

      <div className={styles.mobileCounter}>
        {activeIndex + 1} / {cases.length}
      </div>
    </section>
  );
}

export default CaseCarousel;