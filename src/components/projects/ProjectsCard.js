import React from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({
  title,
  des,
  src,
  githubLink,
  liveLink,
  techLine,
}) => {
  const showRepo = Boolean(githubLink);
  const showLive = Boolean(liveLink);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-innerGlow backdrop-blur-xl transition-all duration-500 hover:border-accent-violet/20 hover:shadow-glow-sm"
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <img
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          src={src}
          alt={title}
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 xl:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h3 className="font-titleFont text-base font-bold uppercase tracking-wide text-accent-cyan md:text-lg">
            {title}
          </h3>
          {(showRepo || showLive) && (
            <div className="flex shrink-0 gap-2">
              {showRepo && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-400 transition-all hover:border-accent-violet/40 hover:text-white"
                  aria-label={`${title} on GitHub`}
                >
                  <BsGithub className="text-lg" />
                </a>
              )}
              {showLive && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-400 transition-all hover:border-accent-cyan/40 hover:text-white"
                  aria-label={`${title} live demo`}
                >
                  <FaGlobe className="text-lg" />
                </a>
              )}
            </div>
          )}
        </div>
        {techLine ? (
          <p className="font-bodyFont text-xs uppercase tracking-wider text-slate-500">
            {techLine}
          </p>
        ) : null}
        <p className="font-bodyFont flex-1 text-sm leading-relaxed text-slate-400">
          {des}
        </p>
      </div>
    </motion.article>
  );
};

export default ProjectsCard;
