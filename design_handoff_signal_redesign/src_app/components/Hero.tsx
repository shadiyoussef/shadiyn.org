import { TypedGreeting } from "./TypedGreeting";
import { Console } from "./Console";

export function Hero() {
  return (
    <section className="hero" data-screen-label="Hero">
      <div className="hero-bg">
        <span className="glow" />
      </div>
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="status reveal">
              <span className="led" /> Senior Account Executive · Cloudflare · London, UK
            </div>

            <TypedGreeting />

            <h1 className="name reveal">
              Shadi Youssef
              <br />
              Nassar<span className="o">.</span>
            </h1>

            <p className="tagline reveal">
              A <span className="hl">frontier-tech</span> background, applied to enterprise sales.
            </p>

            <p className="lede reveal">
              I help UK&amp;I enterprises secure and modernize their infrastructure on{" "}
              <b>Cloudflare</b>, rebuilding the customer experience from legacy architectures to
              serverless and full-stack platform migrations. Five years, BDR to Senior Territory
              AE, consistently over quota. Before cloud, I came up through blockchain, consulting
              and digital transformation, across <b>three languages and three continents</b>.
            </p>

            <div className="now reveal">
              <span className="tag">now →</span>
              <span>
                Senior Territory <b>Account Executive</b>, UK&amp;I at Cloudflare
              </span>
            </div>

            <div className="hero-cta reveal">
              <a className="btn primary" href="#contact">
                Get in touch
              </a>
              <a className="btn ghost" href="#path">
                View track record
              </a>
            </div>
          </div>

          <Console />
        </div>
      </div>
    </section>
  );
}
