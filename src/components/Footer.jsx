import {
  Github,
  ScanFace,
  ShieldCheck,
} from "lucide-react";

import styles from "../styles/Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.identity}>
          <div className={styles.logo}>
            <ScanFace size={20} />
          </div>

          <div>
            <strong>Journal Deepfake</strong>

            <span>
              Archivo de investigación digital
            </span>
          </div>
        </div>

        <div className={styles.info}>
          <span>
            <ShieldCheck size={16} />
            Proyecto educativo
          </span>

          <span>
            <Github size={16} />
            React + Vite
          </span>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {currentYear} Journal Deepfake. Plantilla para
          documentación e investigación.
        </p>

        <span>
          La información deberá verificarse antes de su
          publicación.
        </span>
      </div>
    </footer>
  );
}

export default Footer;