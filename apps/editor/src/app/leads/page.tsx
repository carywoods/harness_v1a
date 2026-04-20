import { db, leadSubmissions } from "@harness/db";
import { Sidebar } from "@/components/Sidebar";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  const leads = await db.select().from(leadSubmissions).orderBy(desc(leadSubmissions.createdAt));

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-12">
        <h1 className="text-4xl font-bold mb-12">Lead Submissions</h1>

        <div className="rounded-3xl border border-accent/20 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-accent/5 border-b border-accent/20">
              <tr>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest opacity-40">Name</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest opacity-40">Email</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest opacity-40">Interest</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest opacity-40">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-accent/10">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-accent/5 transition-colors">
                  <td className="px-6 py-4 font-medium">{lead.name}</td>
                  <td className="px-6 py-4 text-foreground/60">{lead.email}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold uppercase tracking-wider">
                      {lead.offerInterest}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-foreground/40 text-sm">
                    {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() : "N/A"}
                  </td>
                </tr>
              ))}
              {leads.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-foreground/40 italic">
                    No leads found yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
