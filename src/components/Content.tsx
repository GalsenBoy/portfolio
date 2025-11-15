import "../css/content.scss";
import { generateAnimation } from "../utils/animations";
import Contact from "./Contact";
import Footer from "./Footer";
import Projets from "./Projets";
import { motion } from "framer-motion";

export default function Content() {
  return (
    <div id="content">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={generateAnimation(0.2, "y")}
        id="about"
      >
        <img src="/moi.webp" alt="Bilaly Cissokho" id="profile-image" />
        <h1>Bilaly Cissokho</h1>
        <p className="subtitle">@GalsenBoy</p>
        <p className="bio">
          Je suis un développeur full-stack. Bienvenue sur mon portfolio où je vous partage mes projets.
          J'utilise principalement React Native avec Expo, React et Supabase pour mes projets.
        </p>
      </motion.div>

      <div id="my-projects">
        <h2>Projets</h2>
        <Projets />
      </div>

      <div id="contact">
        <h2>Contact</h2>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
