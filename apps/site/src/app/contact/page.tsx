import { db, leadSubmissions } from "@harness/db";
import { Navbar } from "@/components/Navbar";
import { Button } from "@harness/ui";
import { redirect } from "next/navigation";

async function submitLead(formData: FormData) {
  "use server";

  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    company: formData.get("company") as string,
    role: formData.get("role") as string,
    website: formData.get("website") as string,
    teamSize: formData.get("teamSize") as string,
    needSummary: formData.get("needSummary") as string,
    offerInterest: formData.get("offerInterest") as string,
    sourcePage: "/contact",
  };

  await db.insert(leadSubmissions).values(data);

  redirect("/contact/success");
}

export default function ContactPage({
  searchParams,
}: {
  searchParams: { offer?: string };
}) {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">Start your AI transformation.</h1>
          <p className="text-xl text-foreground/60 mb-12">
            Whether you're ready to deploy or just starting your roadmap, let's talk about practical results.
          </p>

          <form action={submitLead} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest opacity-60">Full Name</label>
                <input
                  name="name"
                  required
                  className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest opacity-60">Work Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest opacity-60">Company</label>
                <input
                  name="company"
                  className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest opacity-60">Offer Interest</label>
                <select
                  name="offerInterest"
                  defaultValue={searchParams.offer || "not-sure"}
                  className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors appearance-none"
                >
                  <option value="bundle">The OS Bundle</option>
                  <option value="commpilot">CommPilot</option>
                  <option value="anythingllm">White-Labeled AnythingLLM</option>
                  <option value="consulting">Strategy Consulting</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest opacity-60">What are you trying to improve?</label>
              <textarea
                name="needSummary"
                required
                rows={4}
                className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full md:w-auto">
              Submit Strategy Request
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
