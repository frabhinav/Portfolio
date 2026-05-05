import React from "react";

const ResumeCard = ({ title, subTitle, result, des, bullets }) => {
  return (
    <article className="glass-panel group relative mb-6 overflow-hidden p-6 transition-all duration-300 last:mb-0 hover:border-accent-violet/25 hover:shadow-glow-sm sm:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-violet/10 blur-3xl transition-opacity group-hover:opacity-100" />
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-3xl">
          <h3 className="font-titleFont text-xl font-semibold text-slate-100 md:text-2xl">
            {title}
          </h3>
          <p className="mt-2 text-sm text-slate-500">{subTitle}</p>
        </div>
        <span className="inline-flex w-fit shrink-0 rounded-xl border border-accent-violet/25 bg-accent-violet/10 px-4 py-2 text-sm font-medium text-accent-cyan">
          {result}
        </span>
      </div>
      {bullets?.length ? (
        <ul className="relative mt-5 list-disc space-y-2 pl-5 font-bodyFont text-sm leading-relaxed text-slate-400 marker:text-accent-violet/80 md:text-base">
          {bullets.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      ) : (
        <p className="relative mt-5 font-bodyFont text-sm leading-relaxed text-slate-400 md:text-base">
          {des}
        </p>
      )}
    </article>
  );
};

export default ResumeCard;
