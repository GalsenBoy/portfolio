import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, type PointerEvent } from "react";
import { EMAIL, GITHUB } from "../data/Contact";
import { revealOnScroll } from "../utils/motion";
import "../css/contact.scss";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 200, damping: 15 });
  const y = useSpring(my, { stiffness: 200, damping: 15 });

  // Bouton "magnétique" qui suit légèrement la souris
  const onMove = (e: PointerEvent) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect || e.pointerType !== "mouse") return;
    mx.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    my.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <footer id="contact" className="contact">
      <div className="section contact-inner">
        <span className="eyebrow">(04) — Contact</span>
        <motion.h2 className="contact-title" {...revealOnScroll(60, 1, "-80px")}>
          On construit
          <br />
          <em>quoi</em> ensemble ?
        </motion.h2>

        <div className="contact-actions">
          <motion.button
            ref={btnRef}
            type="button"
            className="contact-btn"
            style={{ x, y }}
            onPointerMove={onMove}
            onPointerLeave={onLeave}
            onClick={copy}
          >
            <span className="contact-btn-label">{copied ? "Copié dans le presse-papier ✓" : EMAIL}</span>
            <span className="contact-btn-hint">{copied ? "" : "cliquer pour copier"}</span>
          </motion.button>

          <div className="contact-links">
            <a href={`mailto:${EMAIL}`}>
              Écrire un mail <span aria-hidden="true">↗</span>
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="contact-foot">
          <span>© {new Date().getFullYear()} Bilaly Cissokho</span>
          <a href="#top">Retour en haut ↑</a>
        </div>
      </div>
      <p className="contact-giant" aria-hidden="true">
        GALSENBOY
      </p>
    </footer>
  );
}
