import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, des, icon }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex min-h-[280px] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 shadow-innerGlow backdrop-blur-xl transition-all duration-500 hover:border-accent-violet/25 hover:bg-white/[0.05] hover:shadow-glow-sm"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-violet/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-accent-cyan/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full w-full flex-col justify-between gap-8">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent text-3xl text-accent-cyan shadow-inner transition-transform duration-500 group-hover:scale-105 group-hover:border-accent-cyan/30 group-hover:text-accent-violet">
            {icon || (
              <span className="flex h-6 w-6 flex-col justify-between">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="h-0.5 w-full rounded-full bg-accent-violet"
                  />
                ))}
              </span>
            )}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-titleFont text-xl font-bold text-slate-100 md:text-2xl">
            {title}
          </h3>
          <p className="font-bodyFont text-sm leading-relaxed text-slate-400 md:text-base">
            {des}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

export default Card;
