import { db, pricingPlans } from "@harness/db";
import { Navbar } from "@/components/Navbar";
import { Button } from "@harness/ui";
import { Check } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function PricingPage() {
  const plans = await db.select().from(pricingPlans).orderBy(pricingPlans.sortOrder);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">Transparent Pricing</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Practical AI systems with clear, predictable costs. Starting at $49.99.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-10 rounded-3xl border ${
                plan.featured ? "border-foreground bg-foreground text-background" : "border-accent/20 bg-accent/5"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`mb-8 ${plan.featured ? "text-background/60" : "text-foreground/60"}`}>
                {plan.description}
              </p>
              
              <div className="mb-8">
                <span className="text-sm uppercase tracking-widest opacity-60">{plan.pricePrefix}</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">${plan.startingPrice}</span>
                  <span className="text-lg opacity-60">/{plan.billingNote}</span>
                </div>
              </div>

              <Button
                variant={plan.featured ? "secondary" : "primary"}
                size="lg"
                className="w-full mb-10"
                asChild
              >
                <Link href={plan.ctaHref}>{plan.ctaText}</Link>
              </Button>

              <ul className="space-y-4">
                {JSON.parse(plan.featuresJson).map((feature: string) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.featured ? "text-background" : "text-foreground"}`} />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {plan.finePrint && (
                <p className={`mt-8 text-xs opacity-60 ${plan.featured ? "text-background/60" : "text-foreground/60"}`}>
                  {plan.finePrint}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 border-t border-accent/20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Need a custom enterprise solution?</h2>
          <p className="text-foreground/60 mb-8">
            We build and deploy specialized AI operating systems for organizations with complex requirements, high volume, or on-premise security needs.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
