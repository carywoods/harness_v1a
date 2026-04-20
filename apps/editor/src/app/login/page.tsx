"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@harness/ui";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-accent/5">
      <div className="w-full max-w-md p-10 bg-background rounded-3xl border border-accent/20 shadow-xl">
        <h1 className="text-3xl font-bold mb-2">Editor Login</h1>
        <p className="text-foreground/40 mb-8">Manage Harness AI content</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest opacity-60">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest opacity-60">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-accent/5 border-b border-accent/20 py-3 focus:outline-none focus:border-foreground transition-colors"
            />
          </div>

          {error && <p className="text-sm text-red-500 font-medium">{error}</p>}

          <Button type="submit" size="lg" className="w-full">
            Sign In
          </Button>
        </form>
      </div>
    </main>
  );
}
