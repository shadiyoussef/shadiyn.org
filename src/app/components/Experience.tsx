import { Text, CloudflareLogo } from "@cloudflare/kumo";
import type { ReactNode } from "react";

const roles: {
  company: string;
  logo: ReactNode;
  title: string;
  period: string;
  highlights: string[];
}[] = [
  {
    company: "Cloudflare",
    logo: <CloudflareLogo variant="glyph" className="h-6 w-6 shrink-0" />,
    title: "Senior Territory Account Executive, UK&I",
    period: "2020 - Present",
    highlights: [
      "Promoted from BDR to AE to Senior AE over 5+ years",
      "Consistent quota overachievement: 140% Q1'26, 105% FY25, 125% FY24",
      "Led UKI Sales AI Productivity PoC and Global AI Tiger Team initiatives",
      "7-figure ACV closed in FY23",
    ],
  },
  {
    company: "Deloitte",
    logo: <img src="/deloitte.svg" alt="Deloitte" className="h-6 w-6 shrink-0" />,
    title: "Consulting - Digital Transformation",
    period: "Prior",
    highlights: [
      "Digital transformation advisory for enterprise clients",
      "Data analysis and agile project delivery",
    ],
  },
];

export function Experience() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col gap-8 px-6 py-16">
      <Text variant="heading2" as="h2">
        Experience
      </Text>
      <div className="flex flex-col gap-8">
        {roles.map((role) => (
          <div key={role.company} className="flex flex-col gap-2">
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                {role.logo}
                <Text variant="heading3" as="h3">
                  {role.company}
                </Text>
              </div>
              <Text variant="body">{role.title}</Text>
              <Text variant="secondary" size="sm">
                {role.period}
              </Text>
            </div>
            <ul className="flex flex-col gap-1 pl-4">
              {role.highlights.map((item) => (
                <li key={item} className="list-disc">
                  <Text variant="body" size="sm" as="span">
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
