type Win = { value: string; suffix?: string; label: string; hot?: boolean };

const WINS: Win[] = [
  { value: "140", suffix: "%", label: "Quota · Q1'26", hot: true },
  { value: "105", suffix: "%", label: "Quota · FY25", hot: true },
  { value: "125", suffix: "%", label: "Annual · FY24", hot: true },
  { value: "116", suffix: "%", label: "Avg qtr · BDR", hot: true },
  { value: "P4", label: "Promoted Q1'25" },
  { value: "10k", suffix: "+", label: "Article reads" },
];

export function Wins() {
  return (
    <section id="wins" style={{ background: "var(--bg-2)" }}>
      <div className="wrap">
        <div className="seclabel reveal">
          <span className="num">02</span>
          <h2>Selected Wins</h2>
          <span className="alt">إنجازات</span>
        </div>
        <div className="stats reveal">
          {WINS.map((w) => (
            <div className={"hs" + (w.hot ? " hot" : "")} key={w.label}>
              <div className="v">
                {w.value}
                {w.suffix && <em>{w.suffix}</em>}
              </div>
              <div className="k">{w.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
