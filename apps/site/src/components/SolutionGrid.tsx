"use client";

import { motion } from "framer-motion";
import { Button } from "@harness/ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Solution {
  slug: string;
  name: string;
  shortDescription: string;
  startingPrice: number;
}

export function SolutionGrid({ solutions }: { solutions: Solution[] }) {
  return (
    <section className="py-24 px-6 bg-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-background border border-accent/20 hover:border-foreground/20 transition-all shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-4">{solution.name}</h3>
              <p className="text-foreground/60 mb-8 min-h-[4rem]">
                {solution.shortDescription}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm font-medium">Starting at ${solution.startingPrice}</span>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="flex items-center gap-2 text-sm font-bold group-hover:translate-x-1 transition-transform"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
