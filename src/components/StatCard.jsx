import { motion } from "framer-motion";

import styles from "../styles/SurveyAnalysis.module.css";

function StatCard({
  valor,
  sufijo = "",
  titulo,
  descripcion,
  index = 0,
}) {
  return (
    <motion.article
      className={styles.statCard}
      initial={{
        opacity: 0,
        y: 20,
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
        duration: 0.45,
        delay: index * 0.08,
      }}
    >
      <div className={styles.statValue}>
        {valor}
        <span>{sufijo}</span>
      </div>

      <h3>{titulo}</h3>

      <p>{descripcion}</p>
    </motion.article>
  );
}

export default StatCard;