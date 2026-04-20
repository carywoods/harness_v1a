"use client";

import { motion } from "framer-motion";

const brands = ["Trusted by 500+ Organizations", "Privacy First", "Outcome Driven", "Human Led"];

export function TrustBar() {
  return (
    <section className="py-12 border-y border-accent/20 bg-accent/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale">
          {brands.map((brand, i) => (
            <motion.span
              key={brand}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-semibold tracking-widest uppercase"
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
