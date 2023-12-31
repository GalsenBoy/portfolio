import "../css/skills.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { animateSkills } from "../utils/animateSkills";
import { animateRef } from "../utils/animateRef";
import { backs } from "../data/Back";

export default function SkillsBack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="container"
      variants={animateRef(0.3, 0.2)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="skills-card"
      ref={ref}
    >
      {backs.map((back, index) => (
        <motion.div
          className="item"
          variants={animateSkills}
          id="skills-card-display"
          key={index}
        >
          <img src={back.img} alt={back.alt} />
          <p>{back.valeur}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
