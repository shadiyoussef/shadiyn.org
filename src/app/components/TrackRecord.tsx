type Role = { when: string; company: string; role: string; bullets: string[] };

const ROLES: Role[] = [
  {
    when: "APR 2022 – PRESENT",
    company: "Cloudflare",
    role: "Senior Territory AE, UK&I",
    bullets: [
      "UKI Sales internal AI & productivity point of contact",
      "140% Q1'26 · 105% FY25 · promoted to Senior AE (P4) Q1'25",
      "Selected rep on the Global AI Tiger Team GTM strategy",
    ],
  },
  {
    when: "SEP 2020 – MAR 2022",
    company: "Cloudflare",
    role: "Business Development Rep",
    bullets: [
      "116% avg quarterly attainment; Global & EMEA BDR of the Quarter",
      "Founded the BizDev Business Intelligence function",
    ],
  },
  {
    when: "JUN – SEP 2020",
    company: "Layer · Ubanquity Systems",
    role: "Analyst · Digital Transformation",
    bullets: [
      "Primary analyst on transformation engagements with T1/T2 MENA banks",
      "Defined technical requirements end-to-end with PM, design & engineering",
    ],
  },
  {
    when: "JUN – SEP 2019",
    company: "Deloitte",
    role: "Consulting Intern",
    bullets: [
      "Greenfield digital IT infrastructure for a UAE government provider",
      "Supported bids across public & private sector clients (FinTech, banking)",
    ],
  },
  {
    when: "2017 – 2020",
    company: "Cryptolingo · Kent Blockchain Society",
    role: "Writer · Founder",
    bullets: [
      "Founded & led the University of Kent Blockchain Society",
      "Most-read article passed 10,000 reads, 30k+ impressions",
    ],
  },
];

export function TrackRecord() {
  return (
    <section id="path">
      <div className="wrap">
        <div className="seclabel reveal">
          <span className="num">03</span>
          <h2>Track Record</h2>
          <span className="alt">المسيرة</span>
        </div>
        <div className="tl">
          {ROLES.map((r) => (
            <div className="node reveal" key={r.when + r.company}>
              <div className="when">{r.when}</div>
              <div className="co">
                {r.company} <span className="role">{r.role}</span>
              </div>
              <ul>
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
