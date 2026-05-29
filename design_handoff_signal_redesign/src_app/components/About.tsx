const STACK = [
  "MEDDPICC", "MEDDIC", "BANT", "Salesforce", "Agile",
  "Data & Reporting", "Claude Code", "Opencode", "Open Banking / DLT",
];
const CREDENTIALS = ["BSc Mgmt & Analytics", "IBM Blockchain", "Bloomberg BMC"];

export function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="seclabel reveal">
          <span className="num">01</span>
          <h2>About</h2>
          <span className="alt">عنّي</span>
        </div>
        <div className="about">
          <div className="reveal">
            <p>
              I'm a Senior Account Executive at <b>Cloudflare</b>. Over five years I've gone from
              BDR to Senior Territory AE for the UK &amp; Ireland, overachieving quota while helping
              enterprises secure and accelerate their infrastructure.
            </p>
            <p>
              Before cloud I lived on the frontier: founded a <b>university blockchain society</b>,
              wrote for a London crypto consultancy, and advised <b>T1/T2 MENA banks</b> on digital
              transformation at Deloitte and Layer. Same throughline throughout: disruptive tech,
              real-world value.
            </p>
            <p>
              I operate natively across <b>English, Spanish and Lebanese Arabic</b>, and currently
              point UK&amp;I Sales on internal <b>AI &amp; productivity</b> initiatives.
            </p>
          </div>
          <div className="card reveal">
            <h3>// stack &amp; methods</h3>
            <div className="chips">
              {STACK.map((c) => (
                <span className="chip" key={c}>{c}</span>
              ))}
            </div>
            <h3 style={{ marginTop: 22 }}>// credentials</h3>
            <div className="chips">
              {CREDENTIALS.map((c) => (
                <span className="chip" key={c}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
