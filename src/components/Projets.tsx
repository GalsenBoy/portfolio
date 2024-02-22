import { NavLink } from "react-router-dom";
import "../css/projets.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { animateSkills } from "../utils/animateSkills";
import { animateRef } from "../utils/animateRef";
import { projects } from "../data/ProjectData";
export default function Projets() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="container"
      variants={animateRef(0.3, 0.2)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={ref}
      id="projet-content"
    >
      {projects.map((project, index) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          variants={animateSkills}
          className="project"
          key={index}
        >
          <NavLink to={project.to} target="_blank">
            <img src={project.name} alt={project.alt} />
            <h4>{project.valeur}</h4>
          </NavLink>
        </motion.div>
      ))}
    </motion.div>
  );
}
