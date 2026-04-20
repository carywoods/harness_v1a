import { db, siteSettings } from "@harness/db";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@harness/ui";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

async function updateSettings(formData: FormData) {
  "use server";

  const id = Number(formData.get("id"));
  const data = {
    siteName: formData.get("siteName") as string,
    siteTagline: formData.get("siteTagline") as string,
    primaryCtaText: formData.get("primaryCtaText") as string,
    primaryCtaHref: formData.get("primaryCtaHref") as string,
    contactEmail: formData.get("contactEmail") as string,
    trustBlurb: formData.get("trustBlurb") as string,
    footerText: formData.get("footerText") as string,
  };

  await db.update(siteSettings).set(data).where(eq(siteSettings.id, id));
  
  revalidatePath("/");
  revalidatePath("/settings");
}

export default async function SettingsPage() {
  const result = await db.select().from(siteSettings).limit(1);
  const settings = result[0];

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-12">
        <h1 className="text-4xl font-bold mb-12">Site Settings</h1>

        <form action={updateSettings} className="max-w-3xl space-y-8">
          <input type="hidden" name="id" value={settings.id} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest opacity-60">Site Name</label>
              <input
                name="siteName"
                defaultValue={settings.siteName}
                required
                className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest opacity-60">Contact Email</label>
              <input
                name="contactEmail"
                defaultValue={settings.contactEmail}
                required
                className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest opacity-60">Site Tagline</label>
            <input
              name="siteTagline"
              defaultValue={settings.siteTagline}
              required
              className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest opacity-60">Primary CTA Text</label>
              <input
                name="primaryCtaText"
                defaultValue={settings.primaryCtaText}
                required
                className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest opacity-60">Primary CTA Href</label>
              <input
                name="primaryCtaHref"
                defaultValue={settings.primaryCtaHref}
                required
                className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest opacity-60">Trust Blurb</label>
            <textarea
              name="trustBlurb"
              defaultValue={settings.trustBlurb}
              required
              rows={3}
              className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest opacity-60">Footer Text</label>
            <input
              name="footerText"
              defaultValue={settings.footerText}
              required
              className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors"
            />
          </div>

          <Button type="submit" size="lg">
            Save Changes
          </Button>
        </form>
      </main>
    </div>
  );
}
