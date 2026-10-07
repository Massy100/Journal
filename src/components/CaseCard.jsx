import {
  CalendarDays,
  ChevronDown,
  FileSearch,
  Scale,
  Users,
  Link,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import styles from "../styles/CaseCard.module.css";

function CaseCard({
  caseItem,
  index,
  isActive,
  isExpanded,
  onClick,
}) {
  return (
    <motion.article
      layout
      transition={{
        layout: {
          duration: 0.5,
          type: "spring",
          stiffness: 120,
          damping: 20,
        },
      }}
      className={`${styles.card} ${
        isActive ? styles.active : styles.inactive
      } ${isExpanded ? styles.expanded : ""}`}
    >
      <button
        className={styles.cardButton}
        onClick={onClick}
        type="button"
        aria-expanded={isExpanded}
      >
        <div className={styles.imageWrapper}>
          <motion.img
            layout
            src={caseItem.imagen}
            alt={`Imagen de ${caseItem.nombre}`}
            className={styles.image}
            loading="lazy"
          />

          <div className={styles.imageOverlay}></div>

          <div className={styles.topInformation}>
            <span className={styles.caseNumber}>
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className={styles.placeholderBadge}>
              <span></span>
              {caseItem.estado || "Pendiente"}
            </span>
          </div>

          <div className={styles.titleArea}>
            <span className={styles.fileLabel}>
              EXPEDIENTE {caseItem.id.toUpperCase()}
            </span>

            <h3>{caseItem.nombre}</h3>

            {isActive && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className={styles.expandHint}
              >
                <span>
                  {isExpanded
                    ? "Cerrar expediente"
                    : "Explorar expediente"}
                </span>

                <ChevronDown
                  size={18}
                  className={
                    isExpanded
                      ? styles.rotatedArrow
                      : ""
                  }
                />
              </motion.div>
            )}
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isActive && isExpanded && (
          <motion.div
            key="details"
            className={styles.details}
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              height: {
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              },
              opacity: {
                duration: 0.3,
              },
            }}
          >
            <div className={styles.detailsInner}>
              {/* RESUMEN SUPERIOR */}
              <div className={styles.metadataGrid}>
                <div className={styles.metadataCard}>
                  <div className={styles.metadataIcon}>
                    <CalendarDays size={19} />
                  </div>

                  <div>
                    <span>Fecha del incidente</span>
                    <strong>{caseItem.fecha}</strong>
                  </div>
                </div>

                <div className={styles.metadataCard}>
                  <div className={styles.metadataIcon}>
                    <Users size={19} />
                  </div>

                  <div>
                    <span>Involucrados</span>

                    <strong>
                      {caseItem.involucrados.length} registrados
                    </strong>
                  </div>
                </div>
              </div>

              {/* CONTENIDO PRINCIPAL */}
              <div className={styles.contentGrid}>
                {/* COLUMNA IZQUIERDA */}
                <div
                  className={`${styles.section} ${styles.descriptionSection}`}
                >
                  <div className={styles.sectionHeading}>
                    <FileSearch size={20} />

                    <h4>Descripción del caso</h4>
                  </div>

                  <p>{caseItem.descripcion}</p>
                </div>

                {/* COLUMNA DERECHA */}
                <div className={styles.sideColumn}>
                  {/* PERSONAS INVOLUCRADAS */}
                  <div className={styles.section}>
                    <div className={styles.sectionHeading}>
                      <Users size={20} />

                      <h4>Personas involucradas</h4>
                    </div>

                    <ul className={styles.peopleList}>
                      {caseItem.involucrados.map(
                        (persona, personIndex) => (
                          <li
                            key={`${persona}-${personIndex}`}
                          >
                            <span>
                              {String(
                                personIndex + 1
                              ).padStart(2, "0")}
                            </span>

                            {persona}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* FUENTES CONSULTADAS */}
                  <div className={styles.section}>
                    <div className={styles.sectionHeading}>
                      <Link size={20} />

                      <h4>Fuentes Consultadas</h4>
                    </div>

                    <ul className={styles.sourceList}>
                      {caseItem.fuentes.map(
                        (fuente, sourceIndex) => (
                          <li
                            key={`${fuente.nombre}-${sourceIndex}`}
                          >
                            <span
                              className={styles.sourceNumber}
                            >
                              {String(
                                sourceIndex + 1
                              ).padStart(2, "0")}
                            </span>

                            <a
                              href={fuente.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {fuente.nombre}
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* RESOLUCIÓN */}
              <div
                className={`${styles.section} ${styles.resolution}`}
              >
                <div className={styles.sectionHeading}>
                  <Scale size={20} />

                  <h4>Resolución</h4>
                </div>

                <p>{caseItem.resolucion}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default CaseCard;