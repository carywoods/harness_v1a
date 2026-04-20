import { db, leadSubmissions, solutions, pages } from "@harness/db";
import { Sidebar } from "@/components/Sidebar";
import { count } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const leadsCount = await db.select({ value: count() }).from(leadSubmissions);
  const solutionsCount = await db.select({ value: count() }).from(solutions);
  const pagesCount = await db.select({ value: count() }).from(pages);

  const stats = [
    { label: "Total Leads", value: leadsCount[0].value },
    { label: "Active Solutions", value: solutionsCount[0].value },
    { label: "Published Pages", value: pagesCount[0].value },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-12">
        <h1 className="text-4xl font-bold mb-12">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="p-8 rounded-3xl bg-accent/5 border border-accent/20">
              <span className="text-sm font-bold uppercase tracking-widest opacity-40 block mb-2">{stat.label}</span>
              <span className="text-4xl font-bold">{stat.value}</span>
            </div>
          ))}
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
          <div className="rounded-3xl border border-accent/20 overflow-hidden">
            <div className="p-6 bg-accent/5 border-b border-accent/20 font-bold text-sm">Latest Lead Submissions</div>
            <div className="p-6 text-center text-foreground/40 italic">
              No recent activity found.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
