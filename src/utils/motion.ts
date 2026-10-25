// Courbe d'easing commune à toutes les animations du site
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Apparition vers le haut, déclenchée une seule fois à l'entrée dans le viewport
export const revealOnScroll = (y: number, duration = 0.9, margin = "-100px") => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin },
  transition: { duration, ease: EASE },
});
