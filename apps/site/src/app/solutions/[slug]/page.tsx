import { db, solutions } from "@harness/db";
import { Navbar } from "@/components/Navbar";
import { Button } from "@harness/ui";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function SolutionPage({ params }: { params: { slug: string } }) {
  const result = await db.select().from(solutions).where(eq(solutions.slug, params.slug)).limit(1);
  const solution = result[0];

  if (!solution) {
    notFound();
  }

  const included = JSON.parse(solution.includedFeaturesJson);
  const excluded = JSON.parse(solution.excludedFeaturesJson);

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/solutions" className="text-sm font-medium text-foreground/40 hover:text-foreground mb-8 inline-block">
            ← Back to Solutions
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">{solution.name}</h1>
          <p className="text-2xl text-foreground/60 mb-12">
            {solution.fullDescription}
          </p>
          
          <div className="flex items-center gap-8 mb-16">
            <div>
              <span className="text-xs uppercase tracking-widest opacity-60 block mb-1">Ideal for</span>
              <span className="text-lg font-medium">{solution.audience}</span>
            </div>
            <div className="w-px h-10 bg-accent/20" />
            <div>
              <span className="text-xs uppercase tracking-widest opacity-60 block mb-1">Starting at</span>
              <span className="text-lg font-medium">${solution.startingPrice}/mo</span>
            </div>
          </div>

          <Button size="lg" asChild>
            <Link href={solution.ctaHref}>{solution.ctaText}</Link>
          </Button>
        </div>
      </section>

      <section className="py-24 px-6 bg-accent/5">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">What's included</h3>
            <ul className="space-y-4">
              {included.map((feature: string) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 shrink-0 text-foreground" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">What's not included</h3>
            <ul className="space-y-4 opacity-40">
              {excluded.map((feature: string) => (
                <li key={feature} className="flex items-start gap-3">
                  <X className="w-5 h-5 shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Part of something bigger.</h2>
          <p className="text-foreground/60 mb-8">
            {solution.name} is even more powerful when combined with our other offerings. Explore the Bundle for the full AI Operating System experience.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link href="/bundle">Explore the Bundle</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
