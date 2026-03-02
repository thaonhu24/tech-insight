export default function HomePage() {
  return (
    <section className="space-y-20">
      {/* HERO */}
      <div className="space-y-6">
        <h1 className="text-5xl font-bold leading-tight">Tech Insight</h1>

        <p className="text-xl text-gray-600 max-w-2xl">
          A hybrid-rendering blog platform built with Next.js 14 to explore
          modern React architecture, rendering strategies, and scalable frontend
          patterns.
        </p>

        <div className="flex gap-4">
          <a
            href="/posts"
            className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            Explore Posts
          </a>
        </div>
      </div>

      {/* PROJECT GOAL */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Goal</h2>

        <p className="text-gray-600 max-w-3xl">
          Tech Insight is designed to deeply understand React rendering
          lifecycle, immutability, hybrid rendering strategies (SSG, SSR, ISR),
          and scalable global state management using Redux Toolkit.
        </p>
      </div>

      {/* RENDERING STRATEGY PREVIEW */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Rendering Strategy</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold mb-2">SSG</h3>
            <p className="text-sm text-gray-600">
              Home page is statically generated for fast load and SEO.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold mb-2">SSR</h3>
            <p className="text-sm text-gray-600">
              Posts page always fetches fresh data on request.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold mb-2">ISR</h3>
            <p className="text-sm text-gray-600">
              Post detail balances performance with revalidation.
            </p>
          </div>
        </div>
      </div>

      {/* TECH STACK */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Next.js 14",
            "React 18",
            "TypeScript",
            "Tailwind CSS",
            "Redux Toolkit",
            "React Hook Form",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
