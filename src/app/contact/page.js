"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Placeholder – integrate with API route / email service later
    setTimeout(() => {
      setStatus("submitted");
    }, 1000);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Card className="border-slate-800 bg-slate-950">
        <CardHeader>
          <CardTitle className="text-xl">
            Schedule a strategy call
          </CardTitle>
          <p className="text-sm text-slate-300">
            Share a few details about your GCC ambitions in India and we&apos;ll send you a link
            to pick a slot that works for your timezone.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1 text-sm">
                <label className="text-slate-200">Name</label>
                <Input
                  required
                  name="name"
                  placeholder="Jane Doe"
                  className="bg-slate-900 border-slate-700"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label className="text-slate-200">Company</label>
                <Input
                  required
                  name="company"
                  placeholder="Acme Corporation"
                  className="bg-slate-900 border-slate-700"
                />
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label className="text-slate-200">Work email</label>
              <Input
                required
                type="email"
                name="email"
                placeholder="you@company.com"
                className="bg-slate-900 border-slate-700"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1 text-sm">
                <label className="text-slate-200">Country</label>
                <Input
                  name="country"
                  placeholder="United States, Germany, Singapore..."
                  className="bg-slate-900 border-slate-700"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label className="text-slate-200">Current team size</label>
                <Input
                  name="teamSize"
                  placeholder="e.g. 200–500 employees"
                  className="bg-slate-900 border-slate-700"
                />
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label className="text-slate-200">What do you want to build in India?</label>
              <Textarea
                name="goal"
                rows={4}
                placeholder="Share the functions, capabilities, or products you want your India team to own."
                className="bg-slate-900 border-slate-700"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label className="text-slate-200">When are you considering starting?</label>
              <select
                name="timeline"
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
              >
                <option value="">Select a timeframe</option>
                <option value="0-3">0–3 months</option>
                <option value="3-6">3–6 months</option>
                <option value="6-12">6–12 months</option>
                <option value="exploring">Just exploring</option>
              </select>
            </div>

            <Button
              type="submit"
              disabled={status === "submitting" || status === "submitted"}
              className="bg-emerald-500 hover:bg-emerald-600"
            >
              {status === "idle" && "Submit & get scheduling link"}
              {status === "submitting" && "Submitting..."}
              {status === "submitted" && "Submitted ✔"}
            </Button>

            <p className="text-xs text-slate-500">
              No obligation. The initial call focuses on understanding your GCC roadmap, risk appetite,
              and success metrics.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
