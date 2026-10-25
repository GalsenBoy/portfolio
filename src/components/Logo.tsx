import "../css/logo.scss";

// Version petite taille du symbole bc. (trait 44, ouverture ±50°), lisible jusqu'à 16 px.
// Masters et guide d'usage : branding/
const LETTER =
  "M56 48H100V85.67A72 72 0 0 1 174.28 96.85L146 130.55A28 28 0 0 0 100 152" +
  "A28 28 0 0 0 146 173.45L174.28 207.15A72 72 0 0 1 56 152Z";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <svg className={`logo ${className ?? ""}`} viewBox="52 44 152 184" aria-hidden="true" focusable="false">
      <path fill="currentColor" d={LETTER} />
      <circle className="logo-dot" cx="180" cy="152" r="20" />
    </svg>
  );
}
