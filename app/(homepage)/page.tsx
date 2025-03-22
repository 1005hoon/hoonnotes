export default function Home() {
  return (
    <div className="space-y-12">
      <h1 className="font-crimson w-fit text-4xl leading-none tracking-tight sm:text-5xl md:mt-16 md:max-w-3xl">
        Product Engineer, <span className="block" />
        with touch of Marketing and AI
      </h1>
      <div className="space-y-1 text-base">
        <h2 className="mb-6 font-mono font-medium uppercase">Currently</h2>
        <p className="opacity-90">
          Building AI products as a frontend engineer at SoftlyAI
        </p>
        <p className="opacity-90">
          Developing a habit of what it feels natural and bridging the gap
          between design and engineering
        </p>
      </div>
      {/* TODO: My vault comes here */}
    </div>
  );
}
