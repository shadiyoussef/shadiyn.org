import { Text, LinkButton } from "@cloudflare/kumo";
import { EnvelopeSimple, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

const links = [
  {
    label: "Email",
    href: "mailto:shadihamdan1997@gmail.com",
    icon: EnvelopeSimple,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shadiyoussefnassar/",
    icon: LinkedinLogo,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/shadiyoussef",
    icon: GithubLogo,
    external: true,
  },
];

export function Contact() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 py-16">
      <Text variant="heading2" as="h2">
        Get in Touch
      </Text>
      <div className="flex flex-wrap justify-center gap-3">
        {links.map((link) => (
          <LinkButton
            key={link.label}
            href={link.href}
            variant="secondary"
            size="lg"
            icon={link.icon}
            external={link.external}
          >
            {link.label}
          </LinkButton>
        ))}
      </div>
    </section>
  );
}
