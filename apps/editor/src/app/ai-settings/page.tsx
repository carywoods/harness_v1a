import { db, aiAssistantSettings } from "@harness/db";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@harness/ui";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

async function updateAiSettings(formData: FormData) {
  "use server";

  const id = Number(formData.get("id"));
  const data = {
    name: formData.get("name") as string,
    systemPrompt: formData.get("systemPrompt") as string,
    model: formData.get("model") as string,
    baseUrl: formData.get("baseUrl") as string,
    temperature: Number(formData.get("temperature")),
    maxTokens: Number(formData.get("maxTokens")),
    isEnabled: formData.get("isEnabled") === "on",
  };

  await db.update(aiAssistantSettings).set(data).where(eq(aiAssistantSettings.id, id));
  
  revalidatePath("/ai-settings");
}

export default async function AiSettingsPage() {
  const result = await db.select().from(aiAssistantSettings).limit(1);
  const settings = result[0];

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-12">
        <h1 className="text-4xl font-bold mb-12">AI Assistant Settings</h1>

        <form action={updateAiSettings} className="max-w-3xl space-y-8">
          <input type="hidden" name="id" value={settings.id} />
          
          <div className="flex items-center gap-4 p-6 bg-accent/5 rounded-2xl border border-accent/20 mb-12">
            <input
              type="checkbox"
              name="isEnabled"
              defaultChecked={settings.isEnabled}
              className="w-5 h-5 accent-foreground"
            />
            <div className="space-y-1">
              <span className="font-bold">Enable Assistant</span>
              <p className="text-xs text-foreground/40 uppercase tracking-widest font-bold">
                Toggle the public AI helper on or off across the site.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest opacity-60">Assistant Name</label>
            <input
              name="name"
              defaultValue={settings.name}
              required
              className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest opacity-60">System Prompt</label>
            <textarea
              name="systemPrompt"
              defaultValue={settings.systemPrompt}
              required
              rows={6}
              className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest opacity-60">Model</label>
              <input
                name="model"
                defaultValue={settings.model}
                required
                className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest opacity-60">Base URL</label>
              <input
                name="baseUrl"
                defaultValue={settings.baseUrl}
                required
                className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest opacity-60">Temperature</label>
              <input
                name="temperature"
                type="number"
                step="0.1"
                defaultValue={settings.temperature}
                required
                className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest opacity-60">Max Tokens</label>
              <input
                name="maxTokens"
                type="number"
                defaultValue={settings.maxTokens}
                required
                className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
          </div>

          <Button type="submit" size="lg">
            Save AI Configuration
          </Button>
        </form>
      </main>
    </div>
  );
}
