import "../css/content.scss";
import { generateAnimation } from "../utils/animations";
import { anime } from "../utils/anime";
import Burger from "./Burger";
import Contact from "./Contact";
import Footer from "./Footer";
import Projets from "./Projets";
import SkillsBack from "./SkillsBack";
import SkillsFront from "./SkillsFront";
import { motion } from "framer-motion";

export default function Content() {
  return (
    <section style={{ position: "relative" }}>
      <Burger />
      <div id="content">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={generateAnimation(0.3, "y")}
          id="about"
        >
          <h1>
            Je suis <strong> Bilaly Cissokho</strong>, développeur web à Cergy.
            Depuis avril 2023 à Février 2024, j'ai travaillé en alternance chez
            INFOCONSEIL à Neuilly-sur-Seine, où j'ai créé et maintienu des sites
            WordPress, y compris un site de vente en ligne, Retrogems fait en
            React et Express js. Auparavant, j'ai effectué un stage en
            développement web en full-remote avec une auto-entrepreneure
            (YESOUICAN). Actuellement, je poursuis un Bachelor en Conception et
            Développement d'Applications à VIPSCHOOL. Vous pouvez consulter mes
            travaux sur LinkedIn et GitHub.
          </h1>
        </motion.div>
        <div id="skills">
          <motion.h2 initial="hidden" animate="visible" variants={anime}>
            MES COMPETENCES :
          </motion.h2>
          <div id="front">
            <motion.h4 initial="hidden" animate="visible" variants={anime}>
              FRONT-END :
            </motion.h4>
            <SkillsFront />
          </div>
          <div id="front">
            <motion.h4 initial="hidden" animate="visible" variants={anime}>
              BACK-END :
            </motion.h4>
            <SkillsBack />
          </div>
        </div>
        <div id="my-projects">
          <h3> MES PROJETS :</h3>
          <Projets />
        </div>
        <div id="contact">
          <h3>ME CONTACTER :</h3>
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </section>
  );
}
