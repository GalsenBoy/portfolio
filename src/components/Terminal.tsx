import { motion } from "framer-motion";
import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { projects } from "../data/ProjectData";
import { EMAIL } from "../data/Contact";
import "../css/terminal.scss";

type Line = { type: "in" | "out"; text: string };

const commands: Record<string, () => string[]> = {
  help: () => [
    "Commandes disponibles :",
    "  whoami     qui je suis",
    "  projets    ce que j'ai shippé",
    "  stack      mes outils",
    "  rust       🦀",
    "  contact    me joindre",
    "  onepiece   ...",
    "  clear      nettoyer l'écran",
  ],
  whoami: () => ["Bilaly Cissokho, développeur full-stack.", "Alias @GalsenBoy. Je transforme des idées en apps."],
  projets: () => projects.map((p, i) => `  ${String(i + 1).padStart(2, "0")}  ${p.title.padEnd(17)}${p.tagline}`),
  stack: () => ["React Native · Expo · React · TypeScript · Supabase", "+ Rust quand personne ne regarde."],
  rust: () => [
    "fn main() {",
    '    println!("Le borrow checker et moi, c\'est compliqué mais sincère.");',
    "}",
    "🦀",
  ],
  contact: () => [`email    ${EMAIL}`, "github   github.com/GalsenBoy"],
  onepiece: () => ["Le One Piece existe.", "Moi, je cherche encore le bug en prod. 🏴‍☠️"],
  sudo: () => ["Bien essayé 👀 Tu n'es pas dans le fichier sudoers."],
  ls: () => commands.projets(),
  hello: () => ["Salut toi 👋 Tape \"help\" pour voir ce que je sais faire."],
};

const suggestions = ["whoami", "projets", "rust", "onepiece"];

const welcome: Line[] = [{ type: "out", text: 'Bienvenue sur bilaly.sh — tape "help" pour commencer.' }];

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(welcome);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const body = bodyRef.current;
    if (body) body.scrollTop = body.scrollHeight;
  }, [lines]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    setHistory((h) => [...h, cmd]);
    setHistoryIndex(-1);

    if (cmd === "clear") {
      setLines([]);
      return;
    }

    const name = cmd.split(" ")[0];
    const output = Object.prototype.hasOwnProperty.call(commands, name)
      ? commands[name]()
      : [`commande introuvable : ${name}. Tape "help".`];
    setLines((l) => [...l, { type: "in", text: cmd }, ...output.map((text): Line => ({ type: "out", text }))]);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    run(value);
    setValue("");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      run(value);
      setValue("");
      return;
    }
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
    if (!history.length) return;
    e.preventDefault();
    const next =
      e.key === "ArrowUp"
        ? historyIndex === -1
          ? history.length - 1
          : Math.max(0, historyIndex - 1)
        : historyIndex === -1
        ? -1
        : historyIndex + 1;
    if (next === -1 || next >= history.length) {
      setHistoryIndex(-1);
      setValue("");
    } else {
      setHistoryIndex(next);
      setValue(history[next]);
    }
  };

  return (
    <section id="terminal" className="section terminal-section">
      <header className="section-head">
        <div>
          <span className="eyebrow">(03) — Terminal</span>
          <h2>
            Pour les <em>curieux</em>
          </h2>
        </div>
      </header>

      <motion.div
        className="terminal"
        onClick={() => inputRef.current?.focus({ preventScroll: true })}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="terminal-bar">
          <span className="dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="terminal-title">bilaly@galsen: ~</span>
        </div>

        <div className="terminal-body" ref={bodyRef} aria-live="polite">
          {lines.map((line, i) => (
            <p key={i} className={`terminal-line ${line.type}`}>
              {line.type === "in" && <span className="prompt">➜ ~ </span>}
              {line.text}
            </p>
          ))}
          <form onSubmit={onSubmit} className="terminal-input">
            <label htmlFor="terminal-cmd" className="prompt">
              ➜ ~
            </label>
            <input
              id="terminal-cmd"
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="Commande du terminal"
              placeholder="tape une commande..."
            />
          </form>
        </div>
      </motion.div>

      <div className="terminal-chips">
        {suggestions.map((s) => (
          <button key={s} type="button" onClick={() => run(s)}>
            {s}
          </button>
        ))}
      </div>
    </section>
  );
}
