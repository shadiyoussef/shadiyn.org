/** The hero "telemetry" console: live status, quota attainment, ladder, languages. */

const QUOTA = [
  { period: "Q1 '26", value: 140, over: 40 },
  { period: "FY25", value: 105, over: 5 },
  { period: "FY24", value: 125, over: 25 },
];

export function Console() {
  return (
    <aside className="console reveal">
      <div className="chead">
        <span className="live">
          <span className="led" /> live
        </span>
        <span>London, UK</span>
      </div>
      <div className="cbody">
        <div className="cr-title">Senior Territory AE</div>
        <div className="cr-sub">Cloudflare · UK &amp; Ireland</div>

        <div className="cdiv" />

        <div className="clabel">
          // quota attainment <span className="ctag">vs. 100% target</span>
        </div>
        <div className="qtable">
          {QUOTA.map((q) => (
            <div className="qrow" key={q.period}>
              <span className="qp">{q.period}</span>
              <span className="qv">
                {q.value}
                <span className="qpct">%</span>
              </span>
              <span className="qd">▲ +{q.over}</span>
            </div>
          ))}
        </div>

        <div className="cdiv" />

        <div className="cladder">
          <span>BDR</span>
          <span className="arr">▸</span>
          <span>AE</span>
          <span className="arr">▸</span>
          <span className="cur2">Sr AE · P4</span>
        </div>

        <div className="cdiv" />

        <div className="clabel" style={{ marginBottom: 11 }}>
          // languages
        </div>
        <div className="clangs">
          <span>English</span>
          <span className="arr">·</span>
          <span>Español</span>
          <span className="arr">·</span>
          <span className="ar2">العربية</span>
        </div>
      </div>
    </aside>
  );
}
