import "../css/projets.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { animateSkills } from "../utils/animateSkills";
import { animateRef } from "../utils/animateRef";
import { projects } from "../data/ProjectData";

// iPadOS se présente comme un Mac, on le repère grâce à l'écran tactile
const isIos =
  /iPhone|iPad|iPod/.test(navigator.userAgent) ||
  (navigator.userAgent.includes("Macintosh") && navigator.maxTouchPoints > 1);

export default function Projets() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      variants={animateRef(0.3, 0.2)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={ref}
      id="projet-content"
    >
      {projects.map((project, index) => (
        <motion.article
          whileHover={{
            y: -12,
            rotate: -1,
            scale: 1.02,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20
            }
          }}
          whileTap={{ scale: 0.98 }}
          variants={animateSkills}
          className="project"
          key={index}
        >
          {project.to ? (
            <a
              href={(isIos && project.toIos) || project.to}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Voir le projet ${project.valeur}`}
            >
              <img src={project.name} alt={project.alt} loading="lazy" />
              <h4>{project.valeur}</h4>
            </a>
          ) : (
            <>
              <img src={project.name} alt={project.alt} loading="lazy" />
              <h4>{project.valeur}</h4>
            </>
          )}
        </motion.article>
      ))}
    </motion.div>
  );
}
