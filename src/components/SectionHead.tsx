import type { ReactNode } from "react";

type SectionHeadProps = {
  eyebrow: string;
  children: ReactNode;
  aside?: ReactNode;
};

export default function SectionHead({ eyebrow, children, aside }: SectionHeadProps) {
  return (
    <header className="section-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{children}</h2>
      </div>
      {aside}
    </header>
  );
}
