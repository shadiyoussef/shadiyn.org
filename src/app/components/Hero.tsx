import { Text } from "@cloudflare/kumo";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-6 py-24 text-center md:py-32">
      <Text variant="heading1" as="h1">
        Shadi Youssef Nassar
      </Text>
      <Text variant="heading3" as="h2">
        Senior Account Executive, Cloudflare
      </Text>
      <Text variant="secondary" size="lg">
        Helping businesses secure and accelerate their digital infrastructure.
        Based in London.
      </Text>
    </section>
  );
}
