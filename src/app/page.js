import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-16">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <p className="text-sm font-medium text-emerald-400">
            Captive-lite GCC in India
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            MiniGCC: Your stepping stone to a GCC in India
          </h1>
          <p className="text-base text-slate-300">
            Launch a captive-lite team in India in just 3 months, starting with 10
            specialists, backed by 10+ years of software, creative, and performance
            marketing delivery for global clients.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• 3-month setup from blueprint to Day 1.</li>
            <li>• Start lean with a minimum of 10 employees.</li>
            <li>• Engineering, design, video, and growth marketing under one roof.</li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                Schedule a strategy call
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-slate-700 text-slate-200">
                View pricing
              </Button>
            </Link>
          </div>
          <p className="text-xs text-slate-500">
            Designed for mid-sized companies planning a full GCC in India over the next few years.
          </p>
        </div>
        <div className="space-y-4">
          <Card className="border-slate-800 bg-slate-900">
            <CardHeader>
              <CardTitle className="text-base text-slate-100">
                Backed by a 10+ year India delivery organisation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-300">
              <p>We bring cross-functional expertise across:</p>
              <ul className="space-y-1">
                <li>• Software product engineering and platform development.</li>
                <li>• Creative services, UI/UX, and video production.</li>
                <li>• Social media and performance marketing for growth.</li>
              </ul>
              <p className="text-xs text-slate-500">
                Build your GCC foundation on proven playbooks for hiring, operations, and scaling in India.
              </p>
            </CardContent>
          </Card>
          <Card className="border-slate-800 bg-slate-900">
            <CardContent className="pt-6 text-sm text-slate-300 space-y-2">
              <p className="font-medium text-slate-100">
                Captive-lite today, full GCC tomorrow.
              </p>
              <p>
                Start with a dedicated captive-lite team we stand up and operate with you,
                with a clear path to convert into your own GCC entity as you scale.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            How MiniGCC works
          </h2>
          <p className="text-sm text-slate-300">
            A structured, 12-week roadmap to design, launch, and stabilise your captive-lite team in India.
          </p>
          <p className="text-xs text-emerald-400">
            From first conversation to your team’s Day 1 in ~3 months.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="border-slate-800 bg-slate-900">
            <CardHeader>
              <p className="text-xs font-medium text-emerald-400">Week 1–2</p>
              <CardTitle className="text-sm">Discovery & GCC blueprint</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-slate-300 space-y-1">
              <p>Clarify priorities, functions to move, locations, and operating model.</p>
              <p>Define roles, governance, and initial 10+ member pod composition.</p>
            </CardContent>
          </Card>
          <Card className="border-slate-800 bg-slate-900">
            <CardHeader>
              <p className="text-xs font-medium text-emerald-400">Week 2–4</p>
              <CardTitle className="text-sm">Legal, entity & infra</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-slate-300 space-y-1">
              <p>Support on entity setup choices, HR policies, and compliance.</p>
              <p>Coordinate workspace or remote-first infrastructure with local partners.</p>
            </CardContent>
          </Card>
          <Card className="border-slate-800 bg-slate-900">
            <CardHeader>
              <p className="text-xs font-medium text-emerald-400">Week 4–10</p>
              <CardTitle className="text-sm">Talent sourcing & build</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-slate-300 space-y-1">
              <p>Source, screen, and hire the initial 10+ member team.</p>
              <p>Set up playbooks for onboarding, security, and delivery.</p>
            </CardContent>
          </Card>
          <Card className="border-slate-800 bg-slate-900">
            <CardHeader>
              <p className="text-xs font-medium text-emerald-400">Week 10–12+</p>
              <CardTitle className="text-sm">Operate, optimise & scale</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-slate-300 space-y-1">
              <p>Run the captive-lite team with shared KPIs and governance.</p>
              <p>Plan the path from captive-lite to a full GCC as you grow.</p>
            </CardContent>
          </Card>
        </div>
        <div className="pt-4">
          <Link href="/contact">
            <Button variant="outline" className="border-emerald-500 text-emerald-400">
              See if MiniGCC is a fit
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
          <p className="text-sm text-slate-300">
            Answers to common questions from mid-sized companies exploring GCC options in India.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-2">
          <AccordionItem value="what-is-captive-lite">
            <AccordionTrigger className="text-sm text-slate-100">
              What is a “captive-lite” model?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-slate-300">
              A captive-lite model is a structure where MiniGCC sets up and operates your India
              team with you retaining strategic control, governance, and IP ownership, while
              keeping upfront cost and complexity significantly lower than a fully independent GCC.
              You always have the option to transition into a full captive centre as you scale.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="why-10-employees">
            <AccordionTrigger className="text-sm text-slate-100">
              Why do we start with 10 employees?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-slate-300">
              Starting with a 10-person pod lets you validate value, culture fit, and processes
              quickly without committing to a large headcount. Once the model proves out, you
              can add functions and roles in a controlled way.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="timeline">
            <AccordionTrigger className="text-sm text-slate-100">
              How fast can we go live?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-slate-300">
              In most cases, you can go from first conversation to your team’s Day 1 in roughly
              3 months, assuming timely decisions on scope, locations, and approvals.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="functions">
            <AccordionTrigger className="text-sm text-slate-100">
              Which functions can you help us staff?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-slate-300">
              We commonly staff software development, QA, product, UI/UX design, content and
              video production, paid media, and marketing operations. Other roles can be added
              based on your roadmap.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="vs-outsourcing">
            <AccordionTrigger className="text-sm text-slate-100">
              How is MiniGCC different from traditional outsourcing?
            </AccordionTrigger>
            <AccordionContent className="text-sm text-slate-300">
              Traditional outsourcing is optimised for project delivery. MiniGCC is optimised
              for building your own future GCC foundation in India—your processes, your culture,
              your data—while we handle the on-ground setup, operations, and scaling.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="pt-4">
          <Link href="/contact">
            <Button className="bg-emerald-500 hover:bg-emerald-600">
              Didn&apos;t find your question? Schedule a strategy call
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
