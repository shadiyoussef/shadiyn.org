import { useEffect } from "react";

/**
 * Reveals every `.reveal` element on scroll by adding `.in`.
 * Robust by design: if IntersectionObserver is unavailable, the user prefers
 * reduced motion, or the observer never fires, everything is force-shown.
 * Call once near the top of the app (e.g. in App).
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    let alive = false;
    const io = new IntersectionObserver(
      (entries) => {
        alive = true;
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i, 6) * 40}ms`;
      io.observe(el);
    });

    // Failsafe: if the observer never fired, force-show.
    const t = window.setTimeout(() => {
      if (!alive) els.forEach((el) => el.classList.add("in"));
    }, 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);
}
