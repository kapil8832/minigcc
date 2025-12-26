export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          Built in India, for global mid-market leaders
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl">
          MiniGCC is powered by an India-based organisation with over a decade of experience
          delivering software, creative, and performance marketing outcomes for global clients.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2">
          <p className="text-2xl font-semibold text-emerald-400">10+ years</p>
          <p className="text-sm text-slate-300">Operating delivery teams across India.</p>
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-semibold text-emerald-400">Multi-discipline</p>
          <p className="text-sm text-slate-300">
            Product engineering, UI/UX, content, video, and growth marketing expertise.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-semibold text-emerald-400">Future-ready GCCs</p>
          <p className="text-sm text-slate-300">
            Playbooks tuned for modern distributed teams, security, and compliance.
          </p>
        </div>
      </section>

      <section className="space-y-3 max-w-3xl text-sm text-slate-300">
        <p>
          MiniGCC exists to bridge the gap between traditional outsourcing and a fully independent
          Global Capability Centre. Many mid-sized companies want the long-term strategic value of
          a GCC in India but are held back by upfront complexity, cost, and risk.
        </p>
        <p>
          Our captive-lite model lets you start small, stay close to delivery, and prove value
          before you commit to a larger build-out. You get the benefits of an on-ground partner
          while steadily building the culture, processes, and IP that will underpin your future GCC.
        </p>
      </section>
    </div>
  );
}
