import { db, solutions } from "@harness/db";
import { Navbar } from "@/components/Navbar";
import { Button } from "@harness/ui";
import { Check, Plus } from "lucide-react";
import Link from "next/link";

export default async function BundlePage() {
  const allSolutions = await db.select().from(solutions).where(solutions.bundleEligible);

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-sm font-bold tracking-widest uppercase text-foreground/40 mb-4 block">The Ultimate Configuration</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">The AI Operating System Bundle</h1>
          <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto mb-12">
            Why choose one when they work better together? The Bundle combines our flagship tools and consulting into a single, cohesive operating advantage.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact?offer=bundle">Book a Bundle Strategy Call</Link>
          </Button>
        </div>
      </section>

      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {allSolutions.map((solution, i) => (
              <div key={solution.id} className="relative">
                <div className="p-8 rounded-3xl border border-background/10 bg-background/5">
                  <h3 className="text-2xl font-bold mb-4">{solution.name}</h3>
                  <p className="text-background/60 text-sm mb-6">
                    {solution.shortDescription}
                  </p>
                  <ul className="space-y-3">
                    {JSON.parse(solution.includedFeaturesJson).slice(0, 3).map((f: string) => (
                      <li key={f} className="flex items-center gap-2 text-xs">
                        <Check className="w-3 h-3" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                {i < allSolutions.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-background text-foreground items-center justify-center">
                    <Plus className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-block p-1 px-4 rounded-full border border-background/20 text-sm font-medium mb-8">
              Bundle Savings: Up to 25% off standalone pricing
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Starting at $149.99/mo</h2>
            <p className="text-background/60 max-w-xl mx-auto mb-10">
              Includes priority support, guided implementation, and monthly strategy audits with our founders.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact?offer=bundle">Get Started with the OS Bundle</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why the Bundle?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Unified Data Intelligence</h3>
              <p className="text-foreground/60">
                CommPilot captures customer intent while AnythingLLM stores your institutional knowledge. Together, they create a closed-loop system where AI learns from every interaction.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Continuous Strategy</h3>
              <p className="text-foreground/60">
                Our consulting team doesn't just set it up and leave. We use the data from your tools to continuously refine your AI roadmap and workflows.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Priority Ecosystem Access</h3>
              <p className="text-foreground/60">
                Bundle customers get first access to our new features, experimental models, and beta tool integrations before standalone users.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Simplified Billing</h3>
              <p className="text-foreground/60">
                One invoice, one platform, one partner. Stop managing multiple AI vendors and focus on your business results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
