import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type CSSProperties } from "react";
import { projects, type Project } from "../data/ProjectData";
import { pad2 } from "../utils/format";
import SectionHead from "./SectionHead";
import "../css/projects.scss";

export default function Projects() {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });

  return (
    <section id="projets" className="section projects">
      <SectionHead eyebrow="(01) — Projets" aside={<span className="count">[{pad2(projects.length)}]</span>}>
        Ce que j'ai <em>shippé</em>
      </SectionHead>

      <div className="stack" ref={stackRef}>
        {projects.map((project, i) => (
          <Card
            key={project.title}
            project={project}
            index={i}
            progress={scrollYProgress}
            range={[i / projects.length, 1]}
            targetScale={1 - (projects.length - i) * 0.035}
          />
        ))}
      </div>
    </section>
  );
}

type CardProps = {
  project: Project;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
};

// Chaque carte reste collée en haut et rétrécit quand la suivante passe par-dessus
function Card({ project, index, progress, range, targetScale }: CardProps) {
  const scale = useTransform(progress, range, [1, targetScale]);
  const vars = { "--surface": project.surface, "--accent": project.accent, "--i": index } as CSSProperties;

  return (
    <div className="card-wrap" style={vars}>
      <motion.article className="card" style={{ scale }}>
        <div className="card-body">
          <div className="card-top">
            <span className="card-index">{pad2(index + 1)}</span>
            <span className="card-kind">{project.kind}</span>
            {project.status && <span className="card-status">{project.status}</span>}
          </div>

          <h3>{project.title}</h3>
          <p>{project.tagline}</p>

          <ul className="card-tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          {project.links.length > 0 && (
            <div className="card-links">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-btn"
                  aria-label={`${project.title} : ${link.label}`}
                >
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="card-media">
          <img src={project.image} alt={project.alt} loading="lazy" />
        </div>
      </motion.article>
    </div>
  );
}
