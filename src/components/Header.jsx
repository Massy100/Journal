import { BrainCircuit, ScanFace, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <ScanFace size={23} strokeWidth={1.8} />
          </div>

          <span>
            JD<span>.</span>
          </span>
        </div>

        <div className={styles.status}>
          <span className={styles.statusDot}></span>
          Archivo activo
        </div>
      </nav>

      <motion.div
        className={styles.hero}
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <motion.div
          className={styles.iconBadge}
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
        >
          <BrainCircuit size={18} />
          Investigación digital
        </motion.div>

        <h1>
          Journal
          <span> Deepfake</span>
        </h1>

        <p className={styles.subtitle}>
          Investigación sobre casos reales de deepfakes
        </p>

        <p className={styles.description}>
          Un archivo visual dedicado al análisis, documentación y
          seguimiento de contenido audiovisual manipulado mediante
          inteligencia artificial.
        </p>

        <div className={styles.security}>
          <ShieldCheck size={17} />

          <span>
            Archivo educativo 
          </span>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;