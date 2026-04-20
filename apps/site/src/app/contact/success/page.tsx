import { Navbar } from "@/components/Navbar";
import { Button } from "@harness/ui";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <Navbar />
      <CheckCircle className="w-20 h-20 text-foreground mb-8" />
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Strategy Request Received.</h1>
      <p className="text-xl text-foreground/60 max-w-xl mb-12">
        Our team will review your information and reach out within 24 hours to schedule your strategy call.
      </p>
      <Button size="lg" asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </main>
  );
}
