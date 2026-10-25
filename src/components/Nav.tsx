import { motion } from "framer-motion";
import Logo from "./Logo";
import "../css/nav.scss";

const links = [
  { href: "#projets", label: "Projets" },
  { href: "#apropos", label: "À propos" },
  { href: "#terminal", label: "Terminal" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <motion.header
      className="nav"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href="#top" className="nav-logo" aria-label="Bilaly Cissokho, retour en haut">
        <Logo />
      </a>
      <nav aria-label="Navigation principale">
        <ul>
          {links.map((link) => (
            <li key={link.href} className={link.href === "#terminal" ? "nav-optional" : undefined}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
