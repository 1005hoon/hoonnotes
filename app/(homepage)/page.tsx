export default function Home() {
  return (
    <>
      <span className="mb-5 inline-block font-medium sm:mb-6">Today</span>
      <p className="text-gray-1100 mb-4 sm:mb-5">
        I work as a frontend engineer at SoftlyAI. My interests span a broad
        spectrum of subjects, encompassing web development, marketing, and
        human-computer interaction. Currently, I&apos;m developing a taste of
        what it feels natural and bridging the gap between design and
        engineering.
      </p>
      <Section
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
        title="Curated"
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
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
  empty?: React.ReactNode;
}) {
  return (
    <div className="mt-16 sm:mt-32">
      <h2 className="mb-5 inline-block font-medium sm:mb-6">{title}</h2>
      {description && (
        <p className="text-gray-1100 mb-4 sm:mb-5">{description}</p>
      )}
      {children || empty}
    </div>
  );
}
