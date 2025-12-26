import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-10">
      <section className="space-y-4 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">Simple captive-lite pricing</h1>
        <p className="mx-auto max-w-2xl text-sm text-slate-300">
          Start with a focused 10-person pod and scale as your GCC business case proves out.
          Transparent, per-seat pricing with a low one-time setup fee.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card className="border-emerald-500 bg-slate-900">
          <CardHeader>
            <p className="text-xs font-medium text-emerald-400 uppercase tracking-wide">
              Recommended
            </p>
            <CardTitle className="text-lg">Starter GCC Pod</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-200">
            <p className="text-2xl font-semibold">
              From <span className="text-emerald-400">$300</span> / seat / month
            </p>
            <p className="text-xs text-slate-400">
              Minimum 10 employees · Captive-lite engagement.
            </p>
            <ul className="space-y-1">
              <li>• Dedicated pod aligned to your functions and timezone.</li>
              <li>• Talent sourcing, screening, and onboarding included.</li>
              <li>• HR, payroll, and on-ground operations handled in India.</li>
              <li>• Standard security and compliance baseline.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-950">
          <CardHeader>
            <CardTitle className="text-lg">Setup Fee</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-200">
            <p className="text-2xl font-semibold">
              <span className="text-emerald-400">$1,000</span> one-time
            </p>
            <p className="text-xs text-slate-400">
              Low upfront investment to get your India presence off the ground.
            </p>
            <ul className="space-y-1">
              <li>• GCC blueprint workshop and role mapping.</li>
              <li>• Legal, HR, and compliance guidance.</li>
              <li>• Workspace or remote infra coordination.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-950">
          <CardHeader>
            <CardTitle className="text-lg">Optional add-ons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-200">
            <ul className="space-y-1">
              <li>• Dedicated creative pod (design + video).</li>
              <li>• Performance marketing and growth pod.</li>
              <li>• Extended security & compliance services.</li>
              <li>• Leadership and site director support.</li>
            </ul>
            <p className="text-xs text-slate-400 pt-2">
              Custom quotes based on role mix, seniority, and regulatory requirements.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col items-center gap-4 text-center">
        <p className="max-w-2xl text-sm text-slate-300">
          Every organisation’s GCC journey is different. Share your roadmap and we will build a
          tailored financial model comparing captive-lite, full GCC, and traditional outsourcing.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
            Schedule a pricing call
          </Button>
        </Link>
      </section>
    </div>
  );
}
