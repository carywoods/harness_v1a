import { db, siteSettings, solutions } from "@harness/db";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { SolutionGrid } from "@/components/SolutionGrid";

export const dynamic = "force-dynamic";

export default async function Home() {
  const settings = await db.select().from(siteSettings).limit(1);
  const allSolutions = await db.select().from(solutions);

  const site = settings[0];

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero title={site.siteName} tagline={site.siteTagline} />
      <TrustBar />
      <SolutionGrid solutions={allSolutions} />
      
      {/* Bundle CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto rounded-3xl bg-foreground text-background p-12 md:p-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The strongest business transformation package.</h2>
          <p className="text-xl text-background/60 mb-10 max-w-2xl mx-auto">
            Get the full power of CommPilot, AnythingLLM, and Strategy Consulting in one bundled offering.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="h-12 px-8 rounded-full bg-background text-foreground font-bold hover:bg-background/90 transition-colors">
              View the Bundle
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-accent/20 text-center text-foreground/40 text-sm">
        <p>{site.footerText}</p>
      </footer>
    </main>
  );
}
