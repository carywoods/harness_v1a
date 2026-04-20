"use client";

import { motion } from "framer-motion";
import { Button } from "@harness/ui";
import Link from "next/link";

export function Hero({ title, tagline }: { title: string; tagline: string }) {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto mb-12"
        >
          {tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" asChild>
            <Link href="/bundle">View the Bundle</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/solutions">Explore Solutions</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
