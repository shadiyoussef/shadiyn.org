import { useEffect, useState } from "react";

const GREETS = [
  { t: "Hello, I'm Shadi.", ar: false },
  { t: "Hola, soy Shadi.", ar: false },
  { t: "مرحبا، أنا شادي.", ar: true },
];

/** Terminal-style typed greeting that cycles through three languages. */
export function TypedGreeting() {
  const [text, setText] = useState("");
  const [ar, setAr] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(GREETS[0].t);
      return;
    }
    let gi = 0,
      ci = 0,
      dir = 1,
      timer = 0;

    const tick = () => {
      const cur = GREETS[gi];
      setAr(cur.ar);
      setText(cur.t.slice(0, ci));
      if (dir > 0) {
        ci++;
        if (ci > cur.t.length) {
          dir = -1;
          timer = window.setTimeout(tick, 1500);
          return;
        }
      } else {
        ci--;
        if (ci < 0) {
          ci = 0;
          dir = 1;
          gi = (gi + 1) % GREETS.length;
          timer = window.setTimeout(tick, 200);
          return;
        }
      }
      timer = window.setTimeout(tick, dir > 0 ? 70 : 32);
    };
    tick();
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="greet reveal">
      <span className={"g" + (ar ? " ar" : "")}>{text}</span>
      <span className="cur" />
    </div>
  );
}
