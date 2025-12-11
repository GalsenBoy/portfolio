import "../css/content.scss";
import { generateAnimation } from "../utils/animations";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { motion } from "framer-motion";

export default function Content() {
  return (
    <main id="content">
      <Navigation />
      <motion.section
        initial="hidden"
        animate="visible"
        variants={generateAnimation(0.2, "y")}
        id="about"
        aria-label="À propos de moi"
      >
        <img
          src="/moi.webp"
          alt="Photo de profil de Bilaly Cissokho, développeur web full stack"
          id="profile-image"
        />
        <h1>Bilaly Cissokho</h1>
        <p className="subtitle">@GalsenBoy</p>
        <p className="bio">
          Je suis développeur full-stack 👨‍💻 , passionné par la création
          d'applications modernes et intuitives. Bienvenue 👋 sur mon portfolio
          ! Vous y découvrirez mes projets réalisés avec React Native - expo,
          React et Supabase 🚀 , les technologies que j'utilise au quotidien
          pour donner vie à mes idées.
        </p>
      </motion.section>
      <Footer />
    </main>
  );
}
