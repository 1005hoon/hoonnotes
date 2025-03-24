import { TextLink } from "@/components/ui/text-link";

export default function Home() {
  return (
    <>
      <Section
        href="/about"
        title="Today"
        description="I work as a frontend engineer at SoftlyAI. My interests span a broad
        spectrum of subjects, encompassing web development, marketing, and
        human-computer interaction. Currently, I'm developing a taste of
        what it feels natural and bridging the gap between design and
        engineering."
      />

      <Section
        href="/vaults"
        title="Vaults"
        description="Things I've built and shipped"
        empty={
          <p className="text-gray-1000 italic">
            I&apos;m putting together my projects... check back soon for things
            I&apos;ve built and shipped.
          </p>
        }
      />
      <Section
        href="/thoughts"
        title="Thoughts"
        description="Curated reflections on design, technology, and more"
        empty={
          <p className="text-gray-1000 italic">
            I&apos;m gathering my thoughts... check back soon for musings on
            design systems, interface patterns, and the craft of building
            digital experiences.
          </p>
        }
      />
    </>
  );
}

function Section({
  title,
  description,
  children,
  empty,
  href,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
  empty?: React.ReactNode;
  href: string;
}) {
  return (
    <div className="mt-16 sm:mt-32">
      <TextLink href={href} className="mb-5 inline-block font-medium sm:mb-6">
        {title}
      </TextLink>
      {description && (
        <p className="text-gray-1100 mb-4 sm:mb-5">{description}</p>
      )}
      {children || empty}
    </div>
  );
}
