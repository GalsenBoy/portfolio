import "../css/marquee.scss";

const stack = ["React Native", "Expo", "React", "TypeScript", "Supabase", "Rust 🦀", "iOS", "Android", "Jeux mobiles"];

export default function Marquee() {
  return (
    <section className="marquee" aria-label={`Technologies : ${stack.join(", ")}`}>
      {[0, 1].map((row) => (
        <div className={`marquee-row marquee-row-${row}`} key={row} aria-hidden="true">
          <div className="marquee-track">
            {[...stack, ...stack].map((item, i) => (
              <span key={i}>
                {item}
                <i>✦</i>
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
