import Header from "./components/Header";
import CaseCarousel from "./components/CaseCarousel";
import Footer from "./components/Footer";

import { casos } from "./data/casos";

import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.app}>
      {/* Decoración ambiental del fondo */}
      <div className={styles.backgroundEffects} aria-hidden="true">
        <div className={styles.glowOne}></div>
        <div className={styles.glowTwo}></div>
        <div className={styles.grid}></div>
      </div>

      <Header />

      <main className={styles.main}>
        <section
          className={styles.introduction}
          aria-labelledby="cases-heading"
        >
          <div>
            <span className={styles.eyebrow}>
              ARCHIVO DE INVESTIGACIÓN
            </span>

            <h2 id="cases-heading">
              Casos documentados
            </h2>

            <p>
              Selecciona un expediente para explorar la información
              recopilada, las personas involucradas y la resolución
              documentada del incidente.
            </p>
          </div>

          <div className={styles.caseCounter}>
            <strong>{casos.length}</strong>
            <span>expedientes</span>
          </div>
        </section>

        <CaseCarousel cases={casos} />
      </main>

      <Footer />
    </div>
  );
}

export default App;