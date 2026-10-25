import { motion } from "framer-motion";
import { useRef } from "react";
import { projects } from "../data/ProjectData";
import "../css/about.scss";

const facts = [
  { label: "Spécialité", value: "Apps mobiles iOS & Android" },
  { label: "Au quotidien", value: "React Native · Expo · React · Supabase" },
  { label: "Coup de cœur", value: "Rust 🦀" },
  { label: "Alias", value: "@GalsenBoy" },
];

export default function About() {
  const zoneRef = useRef<HTMLDivElement>(null);

  return (
    <section id="apropos" className="section about">
      <header className="section-head">
        <div>
          <span className="eyebrow">(02) — À propos</span>
          <h2>
            Qui est <em>derrière</em> ?
          </h2>
        </div>
      </header>

      <div className="about-grid">
        <div className="poster-zone" ref={zoneRef}>
          <motion.div
            className="poster"
            drag
            dragConstraints={zoneRef}
            dragElastic={0.25}
            dragSnapToOrigin
            initial={{ rotate: -5, y: 40, opacity: 0 }}
            whileInView={{ rotate: -4, y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ rotate: 1.5 }}
            whileDrag={{ scale: 1.06, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            data-cursor
          >
            <p className="poster-title">WANTED</p>
            <div className="poster-photo">
              <img src="/nico.webp" alt="Avatar de Bilaly Cissokho" draggable={false} />
            </div>
            <p className="poster-sub">EN LIGNE OU EN PROD</p>
            <p className="poster-name">BILALY</p>
            <p className="poster-bounty">
              <span>฿</span>
              {projects.length}.000.000.000<span>-</span>
            </p>
            <p className="poster-foot">GALSEN</p>
          </motion.div>
          <p className="poster-hint" aria-hidden="true">
            ↖ attrape l'affiche
          </p>
        </div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="about-lead">
            Développeur full-stack, je crée des applications <em>modernes et intuitives</em>, de l'idée
            jusqu'à la mise en ligne sur les stores.
          </p>
          <p>
            React Native avec Expo, React et Supabase sont mes outils du quotidien pour donner vie à mes
            idées. Je touche aussi au jeu vidéo, et j'ai un énorme faible pour Rust 🦀.
          </p>

          <dl className="facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
