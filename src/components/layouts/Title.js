import React from "react";
import { motion } from "framer-motion";

const Title = ({ title, des }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 flex flex-col gap-4 font-titleFont"
    >
      {title ? (
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan/90">
          {title}
        </span>
      ) : null}
      <h2 className="text-3xl font-bold capitalize tracking-tight text-slate-100 md:text-5xl md:leading-tight">
        <span className="text-gradient">{des}</span>
      </h2>
      <span className="h-1 w-16 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan" />
    </motion.div>
  );
};

export default Title;
