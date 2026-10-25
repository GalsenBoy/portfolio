import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { EASE } from "../utils/motion";
import "../css/hero.scss";

const lines = ["Bilaly", "Cissokho"];

export default function Hero() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const badgeX = useSpring(mx, { stiffness: 60, damping: 18 });
  const badgeY = useSpring(my, { stiffness: 60, damping: 18 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const hero = heroRef.current;
      if (!hero) return;
      hero.style.setProperty("--mx", `${e.clientX}px`);
      hero.style.setProperty("--my", `${e.clientY + window.scrollY}px`);
      if (!reduce) {
        mx.set((e.clientX / window.innerWidth - 0.5) * -40);
        my.set((e.clientY / window.innerHeight - 0.5) * -40);
      }
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduce]);

  return (
    <section id="top" className="hero" ref={heroRef}>
      <motion.div
        className="hero-eyebrow"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8, ease: EASE }}
      >
        <span className="eyebrow">Développeur full-stack</span>
        <span className="eyebrow">— @GalsenBoy</span>
      </motion.div>

      <motion.div className="badge" style={{ x: badgeX, y: badgeY }} aria-hidden="true">
        <motion.div
          className="badge-inner"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.9, duration: 1.2, ease: EASE }}
        >
          <svg className="badge-text" viewBox="0 0 100 100">
            <defs>
              <path id="circle" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
            </defs>
            <text>
              <textPath href="#circle">MOBILE ✦ WEB ✦ SUPABASE ✦ RUST ✦ JEUX ✦ </textPath>
            </text>
          </svg>
          <img src="/nico.webp" alt="" className="badge-avatar" />
        </motion.div>
      </motion.div>

      <h1 aria-label="Bilaly Cissokho">
        {lines.map((line, li) => (
          <span className={`line line-${li}`} key={line} aria-hidden="true">
            {[...line].map((char, i) => (
              <motion.span
                className="char"
                key={i}
                initial={{ y: reduce ? 0 : "110%" }}
                animate={{ y: 0 }}
                whileHover={{ y: "-8%" }}
                transition={{ delay: reduce ? 0 : 0.25 + li * 0.18 + i * 0.045, duration: 1, ease: EASE }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </h1>

      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.9, ease: EASE }}
      >
        <p className="hero-intro">
          Je transforme des idées en <em>apps qui vivent dans ta poche</em>. De la première ligne de
          code jusqu'au store.
        </p>
        <div className="hero-meta">
          <span className="status">
            <span className="status-dot" />
            En train de coder quelque chose
          </span>
          <a href="#projets" className="scroll-cue">
            Voir le travail <span aria-hidden="true">↓</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
